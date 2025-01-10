'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Project {
  id: number
  title: string
  description: string
  client: string
  imageSrc: string
}

export default function ProyectosAdmin() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Modernización de Planta Industrial",
      description: "Actualización completa del sistema eléctrico y de control para una planta de producción de automóviles.",
      client: "AutoTech Industries",
      imageSrc: "/images/proyecto-modernizacion.jpg"
    },
    {
      id: 2,
      title: "Implementación de Sistema de Monitoreo Energético",
      description: "Diseño e instalación de un sistema de monitoreo energético en tiempo real para optimizar el consumo de energía.",
      client: "EcoEnergy Solutions",
      imageSrc: "/images/proyecto-monitoreo.jpg"
    }
  ])

  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleEdit = (project: Project) => {
    setEditingProject({ ...project })
    setIsDialogOpen(true)
  }

  const handleCreate = () => {
    setEditingProject({
      id: projects.length + 1,
      title: "",
      description: "",
      client: "",
      imageSrc: ""
    })
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (editingProject) {
      const projectIndex = projects.findIndex(p => p.id === editingProject.id)
      if (projectIndex !== -1) {
        // Update existing project
        setProjects(projects.map(p => p.id === editingProject.id ? editingProject : p))
      } else {
        // Add new project
        setProjects([...projects, editingProject])
      }
      setIsDialogOpen(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editingProject) {
      setEditingProject({
        ...editingProject,
        [event.target.name]: event.target.value
      })
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Administrar Proyectos</h1>
      <Button onClick={handleCreate} className="mb-4">Agregar Proyecto</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map(project => (
            <TableRow key={project.id}>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.description.substring(0, 50)}...</TableCell>
              <TableCell>{project.client}</TableCell>
              <TableCell>{project.imageSrc}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(project)}>Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingProject?.id ? 'Editar' : 'Crear'} Proyecto</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Título
              </Label>
              <Input
                id="title"
                name="title"
                value={editingProject?.title || ''}
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
                value={editingProject?.description || ''}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="client" className="text-right">
                Cliente
              </Label>
              <Input
                id="client"
                name="client"
                value={editingProject?.client || ''}
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
                value={editingProject?.imageSrc || ''}
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

