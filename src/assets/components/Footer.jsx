import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#5FB2C4] h-[150px] p-5 flex flex-col md:flex-row justify-between items-center   mt-10  px-15'>
    <h2 className='text-3xl md:text-7xl  text-white merriweather'>Wundrepair</h2>
    <div className=' flex md:flex-col gap-3 text-white  text-xl libre justify-center items-center md:items-start '>
      <i className="fa-brands fa-instagram"></i>
      <a >Juphora</a>
      <a href="/contact" className="">Contact Us</a>
    </div>
    </div>
  )
}
