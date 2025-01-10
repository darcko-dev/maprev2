'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Service {
  id: number
  title: string
  description: string
  imageSrc: string
}

export default function ServiciosAdmin() {
  const [services, setServices] = useState<Service[]>([
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
  ])

  const [editingService, setEditingService] = useState<Service | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleEdit = (service: Service) => {
    setEditingService({ ...service })
    setIsDialogOpen(true)
  }

  const handleCreate = () => {
    setEditingService({
      id: services.length + 1,
      title: "",
      description: "",
      imageSrc: ""
    })
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (editingService) {
      const serviceIndex = services.findIndex(s => s.id === editingService.id)
      if (serviceIndex !== -1) {
        // Update existing service
        setServices(services.map(s => s.id === editingService.id ? editingService : s))
      } else {
        // Add new service
        setServices([...services, editingService])
      }
      setIsDialogOpen(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editingService) {
      setEditingService({
        ...editingService,
        [event.target.name]: event.target.value
      })
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Administrar Servicios</h1>
      <Button onClick={handleCreate} className="mb-4">Agregar Servicio</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map(service => (
            <TableRow key={service.id}>
              <TableCell>{service.title}</TableCell>
              <TableCell>{service.description.substring(0, 50)}...</TableCell>
              <TableCell>{service.imageSrc}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(service)}>Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingService?.id ? 'Editar' : 'Crear'} Servicio</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Título
              </Label>
              <Input
                id="title"
                name="title"
                value={editingService?.title || ''}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Descripción
              </Label>
              <Textarea
                id="description"
                name="description"
                value={editingService?.description || ''}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imageSrc" className="text-right">
                URL de la imagen
              </Label>
              <Input
                id="imageSrc"
                name="imageSrc"
                value={editingService?.imageSrc || ''}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>
          <Button onClick={handleSave}>Guardar</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

