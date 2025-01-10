'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Service {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceCard = ({ title, description, imageSrc }: { title: string, description: string, imageSrc: string }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        <Image 
          src={imageSrc} 
          alt={title} 
          layout="fill" 
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={`absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-75' : ''}`}></div>
        <div className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
          <button className="bg-neutral-100 text-primary font-bold py-2 px-4 rounded-full hover:bg-neutral-200 transition duration-300">
            Más Detalles
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-neutral-100">{title}</h3>
        <p className="text-neutral-300">{description}</p>
      </div>
    </motion.div>
  )
}

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Mantenimiento de Equipos Industriales",
      description: "Servicios especializados de mantenimiento preventivo y correctivo para optimizar el rendimiento de su maquinaria industrial.",
      imageSrc: "/images/industrial-maintenance.jpg"
    },
    {
      id: 2,
      title: "Proyectos Eléctricos",
      description: "Diseño e implementación de sistemas eléctricos industriales, incluyendo instalaciones, control y automatización.",
      imageSrc: "/images/electrical-projects.jpg"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-neutral-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-neutral-100"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

