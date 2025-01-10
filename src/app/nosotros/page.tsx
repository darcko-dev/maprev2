import Image from 'next/image'

const TeamMember = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
    <Image src={image} alt={name} width={300} height={300} className="w-full h-64 object-cover" />
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-neutral-100">{name}</h3>
      <p className="text-neutral-300">{role}</p>
    </div>
  </div>
)

export default function Nosotros() {
  const teamMembers = [
    { name: "Juan Pérez", role: "Director General", image: "/images/juan-perez.jpg" },
    { name: "María González", role: "Jefa de Proyectos", image: "/images/maria-gonzalez.jpg" },
    { name: "Carlos Rodríguez", role: "Ingeniero Senior", image: "/images/carlos-rodriguez.jpg" },
    { name: "Ana Martínez", role: "Especialista en Automatización", image: "/images/ana-martinez.jpg" }
  ]

  return (
    <main className="bg-neutral-900">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-neutral-100">Sobre Nosotros</h1>
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Nuestra Historia</h2>
            <p className="text-neutral-300 mb-4">
              MAPRE fue fundada en 2005 con la visión de proporcionar soluciones de mantenimiento industrial y proyectos eléctricos de alta calidad. A lo largo de los años, hemos crecido hasta convertirnos en un referente en el sector, gracias a nuestro compromiso con la excelencia y la innovación continua.
            </p>
            <p className="text-neutral-300 mb-4">
              Hoy en día, MAPRE cuenta con un equipo de profesionales altamente capacitados y utiliza tecnología de vanguardia para ofrecer servicios que optimizan el rendimiento y la eficiencia de las industrias de nuestros clientes.
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Nuestra Misión</h2>
            <p className="text-neutral-300">
              Nuestra misión es proporcionar soluciones integrales de mantenimiento industrial y proyectos eléctricos que mejoren la productividad, eficiencia y seguridad de nuestros clientes, contribuyendo así al desarrollo sostenible de la industria.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-primary">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

