import React from 'react'
import { motion } from 'framer-motion'
import FaceCreams from '../img/facecream.png'
import handCream from '../img/handCream.png'
import tattoCream from '../img/tattoCream.png'
import bottle from '../img/botella1.png'

export default function ProductUses() {
  return (
    <div className='bg-white flex flex-col justify-center  text-center py-15 space-y-4 '>
        <h2 className='libre text-2xl md:text-5xl font-bold  pt-4 '>Warum WUNDREPAIR von JUPHORA?</h2>
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="bg-[#e8e7e7] flex flex-col md:flex-row justify-center items-center py-7 w-[90%] mt-8 mx-auto"
            >
            {/* Bloque de imagen */}
            <div className="bg-[#D1E6BE] rounded-t-[100px] h-[170px] w-[200px] flex items-end justify-center relative mb-6 md:mb-0">
                <motion.img
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src={bottle}
                alt="wundrepair"
                className="w-[50px] absolute -left-8 -rotate-12"
                />
                <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                src={FaceCreams}
                alt="wundrepair"
                className="w-full h-full object-contain"
                />
                <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                src={bottle}
                alt="wundrepair"
                className="w-[60px] absolute top-0 -right-10 rotate-12"
                />
            </div>

            {/* Bloque de texto */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col p-4 w-full md:w-[70%] space-y-4"
            >
                <h3 className="text-center font-bold merriweather text-lg">
                Natürliche Inhaltsstoffe
                </h3>
                <p className="roboto px-2 md:px-5">
                Ohne Duftstoffe. Ohne Reizstoffe.  
                Die Formulierung von WUNDREPAIR enthält keine künstlichen Duftstoffe
                und ist frei von aggressiven Substanzen. Sie wurde speziell für die
                Bedürfnisse empfindlicher, trockener oder gereizter Haut entwickelt.
                </p>
            </motion.div>
            </motion.div>
            <motion.div
                // Animación inicial
                initial={{ y: 100, opacity: 0 }} // slide-up en mobile
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="bg-[#e8e7e7] flex flex-col md:flex-row justify-center items-center py-7 w-[90%] mt-8 mx-auto"
        >
        {/* Imagen */}
            <motion.div
                initial={{ x: -100, opacity: 0 }} // en desktop viene de la derecha
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#D1E6BE] rounded-t-[100px] h-[170px] w-[200px] flex items-end justify-center relative mb-6 md:mb-0"
            >
            
                <motion.img
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src={bottle}
                alt="wundrepair"
                className="w-[50px] absolute -left-8 -rotate-12"
                />
                <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                src={handCream}
                alt="wundrepair"
                className="w-full h-full object-contain"
                />
                <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                src={bottle}
                alt="wundrepair"
                className="w-[60px] absolute top-0 -right-10 rotate-12"
                />
            </motion.div>

        {/* Texto */}
            <motion.div
                initial={{ x: -100, opacity: 0 }} // en desktop viene de la izquierda
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col p-4 w-full md:w-[70%] space-y-4"
            >
                <h3 className="text-center font-bold merriweather text-lg">
                Spürbare Linderung, Sichtbare Ergebnisse.
                </h3>
                <p className="roboto px-2 md:px-5">
                Anwender berichten von schnellerer Wundheilung, einer deutlichen
                Verbesserung bei Neurodermitis und Schuppenflechte sowie einem
                angenehmen Hautgefühl – ganz ohne Spannungsgefühl.
                </p>
            </motion.div>
        </motion.div>

        <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="bg-[#e8e7e7] flex flex-col md:flex-row justify-center py-7 w-[90%] mt-8 mx-auto items-center"
    >
      {/* Bloque de imagen */}
      <div className="relative flex items-end justify-center w-[200px] h-[170px] mb-6 md:mb-0">
        {/* Fondo con imagen */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#D1E6BE] rounded-t-[100px] w-full h-full overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src={tattoCream}
            alt="wundrepair"
          />
        </motion.div>

        {/* Botella derecha */}
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-[60px] absolute top-0 -right-10 rotate-12 z-8"
          src={bottle}
          alt="wundrepair"
        />

        {/* Botella izquierda */}
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-[50px] absolute -left-8 -rotate-12 bottom-0 z-8"
          src={bottle}
          alt="wundrepair"
        />
      </div>

      {/* Bloque de texto */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col p-4 w-full md:w-[70%] space-y-4 items-center"
      >
        <p className="roboto px-2 md:px-5 text-center md:text-left">
          Ohne Duftstoffe. Ohne Reizstoffe.  
          Die Formulierung von WUNDREPAIR enthält keine künstlichen Duftstoffe
          und ist frei von aggressiven Substanzen. Sie wurde speziell für die
          Bedürfnisse empfindlicher, trockener oder gereizter Haut entwickelt.
        </p>
      </motion.div>
    </motion.div>
        <div className='m-10 text-center space-y-4'>
            <div className='flex flex-col justify-center items-center gap-6 md:px-20'>
                <h3 className='text-center font-bold merriweather text-lg '>Natürliche Inhaltsstoffe. Ohne Duftstoffe. Ohne Reizstoffe.</h3>
                <p className='roboto '>Die Formulierung von WUNDREPAIR enthält keine künstlichen Duftstoffe und ist frei von aggressiven Substanzen. Sie wurde speziell für die Bedürfnisse empfindlicher, trockener oder gereizter Haut entwickelt.</p>
            </div>
        </div>
    </div>
  )
}
