import Image from 'next/image'

const ServiceCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
  <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
    <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-neutral-100">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </div>
  </div>
)

export default function Servicios() {
  const services = [
    {
      title: "Mantenimiento Industrial",
      description: "Ofrecemos servicios de mantenimiento preventivo y correctivo para optimizar el rendimiento de su maquinaria industrial.",
      image: "/images/mantenimiento-industrial.jpg"
    },
    {
      title: "Proyectos Eléctricos",
      description: "Diseñamos e implementamos sistemas eléctricos industriales, incluyendo instalaciones, control y automatización.",
      image: "/images/proyectos-electricos.jpg"
    },
    {
      title: "Automatización",
      description: "Implementamos soluciones de automatización para mejorar la eficiencia y productividad de sus procesos industriales.",
      image: "/images/automatizacion.jpg"
    },
    {
      title: "Eficiencia Energética",
      description: "Analizamos y optimizamos el consumo energético de su industria para reducir costos y mejorar la sostenibilidad.",
      image: "/images/eficiencia-energetica.jpg"
    }
  ]

  return (
    <main className="bg-neutral-900">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-neutral-100">Nuestros Servicios</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

