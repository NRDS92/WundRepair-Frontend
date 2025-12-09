import React, { useState } from 'react'
import { motion } from "motion/react"
import {createPortal} from "react-dom"
import bottle from '../img/botella1.webp'
import Checkout from './Checkout'


export default function Cart({ setOpenCart, children }) {
    const deliveryFee = 10;
    const [totalItems, setTotalItems] = useState(1);
    const [cartDisplay, setCartDisplay] = useState("product");
    const itemPrice = 40;

    const subTotal = totalItems * itemPrice;
    const totalPrice = totalItems * itemPrice + deliveryFee;

    function handleAddItem() {
        setTotalItems(totalItems + 1);
    }


    function handleRemoveItem() {
        if (totalItems > 1) {
            setTotalItems(totalItems - 1);
        }
    }

  return createPortal(
    <div className=' fixed inset-0   flex items-center justify-center '>
        {cartDisplay === "product" ? 
            <div className='w-[95%] md:w-[80%] h-[90%] md:h-[80%] backdrop-blur-md mt-15 shadow-xl relative p-8 flex justify-center items-center rounded-[50px] border-4  border-white'>
                <div className=' absolute top-4 md:top-5 right-4 md:right-5 text-4xl cursor-pointer text-gray-600 hover:text-gray-900 ' onClick={() => setOpenCart(false)}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>
                <div className=' flex md:flex-row flex-col items-center justify-evenly mt-5 md:mt-5 '>
                    <div className='md:rounded-[50px] ms:bg-[#D1E6BE] md:p-5 flex justify-center items-center mb-2'>
                        <img className='w-[100px] md:w-[220px] ' src={bottle} alt="Wundrepair Bottle" />
                    </div>
                    <div className=' text-center md:text-left '>
                        <h2 className='text-2xl md:text-5xl font-bold mb-2 md:mb-5 merriweather'>Wundrepair</h2>
                        <p className='text-sm  md:text-2xl libre'>Hautregeneration mit der Kraft der Natur</p>
                        <p className='text-sm  md:text-2xl libre'>1 Flasche - 30ml</p>
                        <p className='text-sm  md:text-2xl font-bold libre'>{itemPrice} €</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center '>   
                        <div className=' flex items-center justify-center rounded-2xl border-2 border-black w-[250px] mt-5 '>
                            <div 
                            onClick={handleRemoveItem}
                            className=' text-black text-4xl font-bold py-2 px-4 rounded-full  hover:text-[#D1E6BE]'>
                            <i className="fa-regular fa-square-minus"></i></div>
                            <span className=' mx-5 text-4xl font-bold '>{totalItems}</span>
                            <div onClick={handleAddItem} className=' text-black text-4xl font-bold py-2 px-4 rounded-full  hover:text-[#D1E6BE] '>
                                <i className="fa-regular fa-square-plus"></i>
                            </div>
                        </div>
                        
                        <div className=' mt-5 md:mt-15  '>
                            <p className='text-2xl libre'>Quantity: {totalItems}</p>
                            <p className='text-2xl libre'>Delivery: {deliveryFee} €</p>
                            <p className='text-2xl  libre'>Total:  <span className='font-bold'> {subTotal} €</span></p>
                        </div>
                        <div className=' flex justify-center mt-5 md:mt-10 '>
                            <motion.button 
                            transition={{type: "spring", stiffness: 500}} 
                            whileHover={{scale:1.1}}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setCartDisplay("checkout")}
                            className='w-[250px] my-3 bg-[#5FB2C4] libre text-xl rounded-full py-2 px-1 text-center text-white font-bold'>Go to Checkout</motion.button>
                        </div>
                    </div>
                </div>
                
                
            </div>
        : null}
        {cartDisplay === "checkout" ? <Checkout setOpenCart={setOpenCart} totalItems={totalItems} subTotal={subTotal} totalPrice={totalPrice} /> : null}
        
    </div>

    ,
    document.getElementById("modal")
  )
}


