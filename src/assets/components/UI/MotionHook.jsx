import { motion } from "motion/react"

export default function MotionHook({text, src}) {
  return (
    <div className='flex flex-col gap-2 items-center'>
                <motion.img 
                    className='w-[75px] md:w-[150px] ' src={src}
                    initial={{rotate: 0,
                                scale:0
                            }}
                    whileInView={{
                        opacity:1,
                        rotate: 360,
                        scale: 1,
                        transition:{
                            duration:3
                        }
                    }}
            viewport={{
                once:false,
                amount: "some"
            }}
                    />
                <p className=" text-sm md:text-lg roboto">{text}</p>
            </div>
  )
}