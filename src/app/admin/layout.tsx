import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/admin" className="flex items-center space-x-2">
              <span className="inline-block font-bold">MAPRE Admin</span>
            </Link>
            <nav className="flex gap-6">
              <Link
                href="/admin/servicios"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Servicios
              </Link>
              <Link
                href="/admin/contactos"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contactos
              </Link>
              <Link
                href="/admin/caracteristicas"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Características
              </Link>
              <Link
                href="/admin/proyectos"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Proyectos
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="text-sm font-medium transition-colors hover:text-primary">
                <Link href="/">Volver al sitio</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          {children}
        </div>
      </main>
    </div>
  )
}

