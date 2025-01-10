'use client'

import { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    // Resetear el formulario después de enviar
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="bg-neutral-900">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-neutral-100">Contáctanos</h1>
          <div className="bg-neutral-800 shadow-lg rounded-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-neutral-100 text-sm font-bold mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline bg-neutral-100"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-neutral-100 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline bg-neutral-100"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-neutral-100 text-sm font-bold mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline bg-neutral-100 h-32"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Información de Contacto</h2>
            <p className="mb-2 text-neutral-300"><strong className="text-neutral-100">Dirección:</strong> Calle Industrial 123, Ciudad Industrial</p>
            <p className="mb-2 text-neutral-300"><strong className="text-neutral-100">Teléfono:</strong> (123) 456-7890</p>
            <p className="mb-2 text-neutral-300"><strong className="text-neutral-100">Email:</strong> info@mapre.com</p>
          </div>
        </div>
      </section>
    </main>
  )
}

