import React from 'react'
import { motion } from "motion/react"

export default function Button({ children, onClick }) {
  return (
    <motion.div
      transition={{type: "spring", stiffness: 500}} 
      whileHover={{scale:1.1}}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className=' w-[250px] my-3 bg-[#5FB2C4] libre text-xl rounded-full py-2 px-1 text-center text-white font-bold'>
      {children}
    </motion.div>
  )
}
