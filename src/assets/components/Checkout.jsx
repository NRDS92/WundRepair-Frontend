import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import toast from "react-hot-toast";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// ✅ 1. Checkout Form Component
    function CheckoutForm({ setOpenCart, totalItems, subTotal, totalPrice }) {
    const deliveryFee = 5;
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        address: {
            street: "",
            city: "",
            postal_code: "",
            country: "",
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (["street", "city", "postal_code", "country"].includes(name)) {
        setCustomer((prev) => ({
            ...prev,
            address: { ...prev.address, [name]: value },
        }));
        } else {
        setCustomer((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.clear();

        if (!stripe || !elements) {
            console.error("🚨 Stripe or Elements are not initialized.");
            toast.error("Stripe isn't ready yet. Please try again in a few seconds.");
            setLoading(false);
            return;
        }

        try {
            const deliveryFee = 5;
            const unitPrice = 40; 
            const totalAmount = (totalItems * unitPrice + deliveryFee) * 100; 

            // 1️⃣ Create PaymentIntent in the backend
            const { data } = await axios.post(`${backendUrl}/api/payment/create-intent`, {
            amount: 400,
            currency: "eur",
            });
        
            const clientSecret = data.clientSecret;
            if (!clientSecret) throw new Error("No clientSecret received from backend");
            console.log("✅ clientSecret received:");

            // Light wait to ensure CardElement is mounted
            await new Promise((resolve) => setTimeout(resolve, 300));

            const cardElement = elements.getElement(CardElement);
            if (!cardElement) throw new Error("No CardElement found");            

            // 2️⃣ Confirm payment with Stripe
            console.log("🚀 Sending confirmation to Stripe...");
            const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: customer.name,
                    email: customer.email,
                    phone: customer.phone,
                    address: {
                        line1: customer.address.street,
                        city: customer.address.city,
                        postal_code: customer.address.postal_code,
                        country: "DE",
                    },
                },
            },
            });

            if (error) {
            toast.error(error.message);
            setLoading(false);
            return;
            }

            if (paymentIntent.status !== "succeeded") {
            toast.error("El pago no se completó correctamente");
            setLoading(false);
            return;
            }

            // 3️⃣ Save the order in the backend
            console.log("💾 Saving order in the backend...");
            const orderPayload = {
            paymentIntentId: paymentIntent.id,
            productId: "001",
            productName: "WundRepair",
            quantity: totalItems,
            amount: totalAmount,
            currency: "eur",
            customer,
            };

            const response = await axios.post(
                `${backendUrl}/api/order/createSingleOrder`,
                orderPayload
            );

            if (response.data.success) {
                toast.success("✅ Payment made and order registered correctly");
                setOpenCart(false);
            } else {
                toast.error("Error registering the order");
                console.error(response.data);
            }

        } catch (err) {
            console.error("Error in checkout:", err);
            toast.error("An error occurred processing the payment");
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="w-[95%] mt-10 backdrop-blur-md shadow-xl relative p-5 rounded-[50px] border-4 border-white">
      {/* ❌ Close button */}
      <div
        className="absolute top-4 right-4 text-4xl cursor-pointer text-gray-600 hover:text-gray-900"
        onClick={() => setOpenCart(false)}
      >
        <i className="fa-solid fa-circle-xmark"></i>
      </div>

      {/* Title */}
      <div className="flex md:flex-row flex-col items-center justify-evenly">
        <h2 className="md:text-4xl text-3xl font-bold merriweather">Checkout</h2>
      </div>

      {/* Order Info */}
      <div className="mt-3">
        <h3 className="text-2xl font-bold merriweather">Your Order</h3>
        <p className="text-lg libre">Product: Wundrepair</p>
        <p className="text-lg libre">
          Quantity: <span className="font-bold">{totalItems}</span>
        </p>
        <p className="text-lg libre">
          Delivery Fee: <span className="font-bold">{deliveryFee} €</span>
        </p>
        <p className="text-lg libre">
          Total: <span className="font-bold">{(totalPrice + deliveryFee).toFixed(2)} €</span>
        </p>
      </div>

      {/* Billing form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
        <h3 className="text-2xl font-bold text-center my-2 merriweather">Billing Details</h3>

        <input onChange={handleChange} value={customer.name} name="name" className="border-2 border-black rounded-lg p-2 text-lg" required type="text" placeholder="Full Name" />
        <input onChange={handleChange} value={customer.email} name="email" className="border-2 border-black rounded-lg p-2 text-lg" required type="email" placeholder="Email" />
        <input onChange={handleChange} value={customer.address.street} name="street" className="border-2 border-black rounded-lg p-2 text-lg" required type="text" placeholder="Street" />

        <div className="flex md:flex-row flex-col gap-2">
          <input onChange={handleChange} value={customer.phone} name="phone" className="border-2 border-black rounded-lg p-2 text-lg" required type="text" placeholder="Phone Number" />
          <input onChange={handleChange} value={customer.address.city} name="city" className="border-2 border-black rounded-lg p-2 text-lg" required type="text" placeholder="City" />
          <input onChange={handleChange} value={customer.address.country} name="country" className="border-2 border-black rounded-lg p-2 text-lg" required type="text" placeholder="Country" />
          <input onChange={handleChange} value={customer.address.postal_code} name="postal_code" className="border-2 border-black rounded-lg p-2 text-lg" required type="text" placeholder="Postal Code" />
        </div>

        {/* Stripe Card Element */}
        <div className="border p-2 rounded bg-gray-50 mt-2">
          <CardElement options={{ hidePostalCode: true }} />
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-3">
          <button
            type="submit"
            disabled={!stripe || loading}
            className="w-[250px] bg-[#5FB2C4] text-xl rounded-full py-2 text-white font-bold"
          >
            {loading ? "Processing..." : `Pay €${(totalPrice + deliveryFee).toFixed(2)}`}
          </button>
        </div>
      </form>
    </div>
  );
}

// ✅ 2. Wrapper with Stripe Elements
export default function CheckoutWrapper({ setOpenCart, totalItems, subTotal, totalPrice }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        setOpenCart={setOpenCart}
        totalItems={totalItems}
        subTotal={subTotal}
        totalPrice={totalPrice}
      />
    </Elements>
  );
}