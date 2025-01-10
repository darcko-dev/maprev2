'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Industrial equipment"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-900/70"></div>
      </div>
      <div className="relative z-10 text-neutral-100 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Soluciones Expertas en
          <span className="text-primary"> Mantenimiento Industrial</span> y
          <span className="text-primary"> Proyectos Eléctricos</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Optimizamos el rendimiento de su industria con nuestros servicios especializados
        </motion.p>
        <motion.div 
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Contáctanos
          </button>
          <button className="bg-transparent hover:bg-neutral-100 hover:text-neutral-900 text-neutral-100 font-bold py-3 px-6 rounded-full border-2 border-neutral-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Nuestros Servicios
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

