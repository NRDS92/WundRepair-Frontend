import React from 'react'

import Button from './UI/Button'

import oliven1 from '../img/olve1.webp'
import oliven2 from '../img/olve2.webp'
import bottle from '../img/botella1.webp'

export default function Header({ setOpenCart }) {
  return (
    <div className=' mt-[90px] grid grid-cols-3 justify-between ' >
        <img className='w-[90%]' src={oliven1} alt="oliven" />
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 gap-10 row-span-2 '>
            <div className='space-y-4 max-w-md flex flex-col justify-center items-center'>
                <div className='border-l-10 border-[#D1E6BE] pl-4 py-2'>
                    <h2 className='text-5xl md:text-7xl pb-5 merriweather'>Wundrepair</h2>
                    <h3 className='text-xl md:text-2xl merriweather text-center '>Hautregeneration mit der Kraft der Natur</h3>
                </div> 
                <p className='text-justify roboto text-xl md:text-2xl' >Activate your skin's natural regeneration processes with carefully formulated ingredients to heal from within.</p>
                <Button onClick={() => setOpenCart(true)}>Jetzt kaufen</Button>
            </div>
            
            <div className='my-5'>
                <div className='bg-[#D1E6BE] rounded-t-[100px] h-[150px]  w-[150px]  md:h-[200px] md:w-[200px] relative flex  items-end '>
                    <img className='w-[55%] h-[130%] object-cover ' src={bottle} alt="wundrepair" loading='lazy' />
                    <img className='w-[35%] h-[100%] object-cover ' src={bottle} alt="wundrepair" loading='lazy'/>
                </div>
            </div>
        </div>
        <div className='flex justify-end items-end'>
            <img className='blur-[3px] w-[70%] ' src={oliven2} alt="oliven" />
        </div>
        

    </div>
    
  )
}
