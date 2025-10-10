import React from 'react'

import MotionHook from './UI/MotionHook'

import frame1 from '../img/frame1.webp'
import frame2 from '../img/frame2.webp'
import frame3 from '../img/frame3.webp'
import bottle from '../img/botella1.webp'
import Button from './UI/Button'

export default function ProductDescription() {
  return (
    <div className='bg-[#FAFAFA] flex flex-col justify-center items-center text-center px-4 py-10 space-y-4 '>
        <h2 className='libre text-2xl md:text-6xl font-bold  py-4'>Was ist WUNDREPAIR?</h2>
        <p className='max-w-4xl text-xl text-justify roboto'>
        <span className='font-bold'>Wundrepair </span> 
        ist dein täglicher Begleiter bei Hautreizungen, Verletzungen und chronischen Hautproblemen wie Neurodermitis, Ekzemen oder Schuppenflechte.
        Die sorgfältig ausgewählten, natürlichen Inhaltsstoffe aktivieren sanft die körpereigenen Heilungsprozesse – ganz ohne die Haut aus dem Gleichgewicht zu bringen.</p>
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 mt-2 px-6'>
            <img src={bottle} alt="WUNDREPAIR Flasche" className='w-[75px] md:w-[150px] -rotate-8' />
            <div className='flex justify-between items-center gap-5 md:gap-10'>
                <MotionHook text="Mit Know-how und Hautverständnis entwickelt" src={frame1} />
                <MotionHook text="Geeignet für jedes Alter und jeden Hauttyp" src={frame2} />
                <MotionHook text="Vegane, natürliche Formulierung" src={frame3} />
            </div>
        </div>
        <Button>Jetzt kaufen</Button>
    </div>
  )
}
