'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

export default function CaracteristicasAdmin() {
  const [features, setFeatures] = useState<Feature[]>([
    {
      id: 1,
      icon: "<FaBolt className='w-12 h-12' />",
      title: "Eficiencia Energética",
      description: "Optimizamos sus sistemas para un consumo eléctrico más eficiente y sostenible."
    },
    {
      id: 2,
      icon: "<FaCog className='w-12 h-12' />",
      title: "Mantenimiento Preventivo",
      description: "Evitamos problemas antes de que ocurran, maximizando el tiempo de actividad de su equipo."
    },
    {
      id: 3,
      icon: "<FaUsers className='w-12 h-12' />",
      title: "Equipo Experto",
      description: "Nuestros técnicos altamente capacitados garantizan un servicio de calidad superior."
    },
    {
      id: 4,
      icon: "<FaChartLine className='w-12 h-12' />",
      title: "Mejora Continua",
      description: "Implementamos soluciones innovadoras para mejorar constantemente el rendimiento de su industria."
    }
  ])

  const [editingFeature, setEditingFeature] = useState<Feature | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleEdit = (feature: Feature) => {
    setEditingFeature({ ...feature })
    setIsDialogOpen(true)
  }

  const handleCreate = () => {
    setEditingFeature({
      id: features.length + 1,
      title: "",
      description: "",
      icon: ""
    })
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (editingFeature) {
      const featureIndex = features.findIndex(f => f.id === editingFeature.id)
      if (featureIndex !== -1) {
        // Update existing feature
        setFeatures(features.map(f => f.id === editingFeature.id ? editingFeature : f))
      } else {
        // Add new feature
        setFeatures([...features, editingFeature])
      }
      setIsDialogOpen(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editingFeature) {
      setEditingFeature({
        ...editingFeature,
        [event.target.name]: event.target.value
      })
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Administrar Características</h1>
      <Button onClick={handleCreate} className="mb-4">Agregar Característica</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Icono</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map(feature => (
            <TableRow key={feature.id}>
              <TableCell>{feature.title}</TableCell>
              <TableCell>{feature.description.substring(0, 50)}...</TableCell>
              <TableCell>{feature.icon}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(feature)} variant="outline">Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingFeature?.id ? 'Editar' : 'Crear'} Característica</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Título
              </Label>
              <Input
                id="title"
                name="title"
                value={editingFeature?.title || ''}
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
                value={editingFeature?.description || ''}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="icon" className="text-right">
                Icono
              </Label>
              <Input
                id="icon"
                name="icon"
                value={editingFeature?.icon || ''}
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

