'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-800 shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="MAPRE Logo" width={40} height={40} className="rounded-full" />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-neutral-100'}`}>MAPRE</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {['Inicio', 'Servicios', 'Nosotros', 'Proyectos', 'Contacto'].map((item) => (
              <Link key={item} href={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}>
                <span className={`
                  px-2 py-1 rounded-md text-sm font-medium
                  transition-all duration-300 ease-in-out
                  ${isScrolled 
                    ? 'text-neutral-100 hover:text-primary hover:bg-neutral-700' 
                    : 'text-neutral-100 hover:text-primary hover:bg-neutral-800'}
                  relative overflow-hidden group
                `}>
                  {item}
                  <span className={`
                    absolute bottom-0 left-0 w-full h-0.5 
                    transition-all duration-300 ease-in-out
                    bg-primary
                    transform scale-x-0 group-hover:scale-x-100
                  `}></span>
                </span>
              </Link>
            ))}
          </div>
          <button 
            className="md:hidden text-neutral-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-neutral-800 rounded-lg shadow-lg">
            {['Inicio', 'Servicios', 'Nosotros', 'Proyectos', 'Contacto'].map((item) => (
              <Link key={item} href={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}>
                <span className="block px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-700 hover:text-primary">
                  {item}
                </span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

