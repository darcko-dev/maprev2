'use client'

import { useState, useEffect } from 'react'
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
  image: string
}

export default function ServiciosAdmin() {
  const [services, setServices] = useState<Service[]>([])
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    const response = await fetch('/api/services')
    const data = await response.json()
    setServices(data)
  }

  const handleEdit = (service: Service) => {
    setEditingService({ ...service })
    setIsDialogOpen(true)
  }

  const handleCreate = () => {
    setEditingService({
      id: 0,
      title: "",
      description: "",
      image: ""
    })
    setIsDialogOpen(true)
  }

  const handleSave = async () => {
    if (editingService) {
      if (editingService.id === 0) {
        // Create new service
        await fetch('/api/services', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editingService)
        })
      } else {
        // Update existing service
        await fetch(`/api/services/${editingService.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editingService)
        })
      }
      setIsDialogOpen(false)
      fetchServices()
    }
  }

  const handleDelete = async (id: number) => {
    await fetch(`/api/services/${id}`, {
      method: 'DELETE'
    })
    fetchServices()
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
              <TableCell>{service.image}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(service)} className="mr-2">Editar</Button>
                <Button onClick={() => handleDelete(service.id)} variant="destructive">Eliminar</Button>
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
              <Label htmlFor="image" className="text-right">
                URL de la imagen
              </Label>
              <Input
                id="image"
                name="image"
                value={editingService?.image || ''}
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

