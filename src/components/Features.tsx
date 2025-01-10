'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBolt, FaCog, FaUsers, FaChartLine } from 'react-icons/fa';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
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
      className="bg-neutral-800 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2"
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-neutral-100">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </motion.div>
  )
}

const Features = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <FaBolt className='w-12 h-12' />,
      title: "Eficiencia Energética",
      description: "Optimizamos sus sistemas para un consumo eléctrico más eficiente y sostenible."
    },
    {
      id: 2,
      icon: <FaCog className='w-12 h-12' />,
      title: "Mantenimiento Preventivo",
      description: "Evitamos problemas antes de que ocurran, maximizando el tiempo de actividad de su equipo."
    },
    {
      id: 3,
      icon: <FaUsers className='w-12 h-12' />,
      title: "Equipo Experto",
      description: "Nuestros técnicos altamente capacitados garantizan un servicio de calidad superior."
    },
    {
      id: 4,
      icon: <FaChartLine className='w-12 h-12' />,
      title: "Mejora Continua",
      description: "Implementamos soluciones innovadoras para mejorar constantemente el rendimiento de su industria."
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
          ¿Por qué elegir MAPRE?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.id} 
              icon={feature.icon}
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

