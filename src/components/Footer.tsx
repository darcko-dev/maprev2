import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">MAPRE</h3>
            <p className="mb-4 text-neutral-300">Soluciones expertas en mantenimiento industrial y proyectos eléctricos.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors"><FaFacebook className="w-6 h-6" /></a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors"><FaTwitter className="w-6 h-6" /></a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors"><FaLinkedin className="w-6 h-6" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-100">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/servicios" className="text-neutral-300 hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link href="/nosotros" className="text-neutral-300 hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link href="/proyectos" className="text-neutral-300 hover:text-primary transition-colors">Proyectos</Link></li>
              <li><Link href="/contacto" className="text-neutral-300 hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-100">Servicios</h4>
            <ul className="space-y-2">
              <li><Link href="/servicios/mantenimiento" className="text-neutral-300 hover:text-primary transition-colors">Mantenimiento Industrial</Link></li>
              <li><Link href="/servicios/proyectos-electricos" className="text-neutral-300 hover:text-primary transition-colors">Proyectos Eléctricos</Link></li>
              <li><Link href="/servicios/automatizacion" className="text-neutral-300 hover:text-primary transition-colors">Automatización</Link></li>
              <li><Link href="/servicios/eficiencia-energetica" className="text-neutral-300 hover:text-primary transition-colors">Eficiencia Energética</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neutral-100">Contáctanos</h4>
            <p className="flex items-center mb-2 text-neutral-300"><FaEnvelope className="mr-2 text-primary" /> info@mapre.com</p>
            <p className="mb-2 text-neutral-300">Calle Industrial 123, Ciudad Industrial</p>
            <p className="mb-2 text-neutral-300">Teléfono: (123) 456-7890</p>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-400">&copy; {new Date().getFullYear()} MAPRE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

