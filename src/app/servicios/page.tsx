import Image from 'next/image'
import prisma from '@/lib/prisma'

const ServiceCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
  <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
    <img src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-neutral-100">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </div>
  </div>
)

export default async function Servicios() {
  const services = await prisma.service.findMany()

  return (
    <main className="bg-neutral-900">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-neutral-100">Nuestros Servicios</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

