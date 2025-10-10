import React from 'react'

export default function Checkout({setOpenCart, totalItems, subTotal, totalPrice}) {
        const deliveryFee = 5;
  return (
    <div className='w-[95%]  h-[75%px]  backdrop-blur-md shadow-xl relative p-5  rounded-[50px] border-4  border-white '>
    <div className=' absolute top-4 md:top-5 right-4 md:right-5  text-4xl cursor-pointer text-gray-600 hover:text-gray-900 ' onClick={() => setOpenCart(false)}>
                    <i className="fa-solid fa-circle-xmark"></i>
    </div>
    <div className=' flex md:flex-row flex-col items-center justify-evenly mt-1 '>
        <h2 className='md:text-5xl text-3xl font-bold   merriweather'>Checkout</h2>
    </div>
    <div className='mt-1 md:mt-5'>
        <h3 className='text-1xl md:text-3xl font-bold mb-2 merriweather'>Your Order</h3>
        <p className='text-md md:text-xl libre'>Product: Wundrepair</p>
        <p className='text-md md:text-xl libre'>Quantity: <span className='font-bold'>{totalItems}</span></p>
        <p className='text-md md:text-xl  libre'>Delivery Fee:  <span className='font-bold'> {deliveryFee} €</span></p>
        <p className='text-md md:text-xl libre'>Total: <span className='font-bold'>{totalPrice} €</span></p>
    </div>
    <div className='mt-5 '>
        <h3 className='text-1xl md:text-3xl font-bold mb-5 merriweather text-center'>Billing Details</h3>
        <form className='flex flex-col space-y-4 '>
            <input className='border-2 border-black rounded-lg p-1 md:p-2 text-md md:text-xl' type="text" placeholder='Full Name' />
            <input className='border-2 border-black rounded-lg p-1 md:p-2 text-md md:text-xl' type="email" placeholder='Email Address' />
            <input className='border-2 border-black rounded-lg p-1 md:p-2 text-md md:text-xl' type="text" placeholder='Address' />
            <div className=' flex md:flex-row flex-col justify-between gap-1'>
                <input  className='border-2 border-black rounded-lg p-2 text-md md:text-xl' type="text" placeholder='City' />
                <input className='border-2 border-black rounded-lg p-2 text-md md:text-xl' type="text" placeholder='Country' />
                <input className='border-2 border-black rounded-lg p-2 text-md md:text-xl' type="text" placeholder='Postal Code' />
            </div>
            <div className=' flex justify-center '>
                <button 
                type='submit'
                className='w-[250px] my-3 md:my-5 bg-[#5FB2C4] libre text-xl rounded-full py-2 px-1 text-center text-white font-bold'
            >
                Place Order
            </button>
            </div>
            
        </form>
    </div>
     </div>
  )
}
