'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Contact {
  id: number
  name: string
  email: string
  phone: string
}

export default function ContactosAdmin() {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "Oficina Principal", email: "info@mapre.com", phone: "(123) 456-7890" },
    { id: 2, name: "Soporte Técnico", email: "soporte@mapre.com", phone: "(123) 456-7891" }
  ])

  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleEdit = (contact: Contact) => {
    setEditingContact({ ...contact })
    setIsDialogOpen(true)
  }

  const handleCreate = () => {
    setEditingContact({
      id: contacts.length + 1,
      name: "",
      email: "",
      phone: ""
    })
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (editingContact) {
      const contactIndex = contacts.findIndex(c => c.id === editingContact.id)
      if (contactIndex !== -1) {
        // Update existing contact
        setContacts(contacts.map(c => c.id === editingContact.id ? editingContact : c))
      } else {
        // Add new contact
        setContacts([...contacts, editingContact])
      }
      setIsDialogOpen(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (editingContact) {
      setEditingContact({
        ...editingContact,
        [event.target.name]: event.target.value
      })
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Administrar Contactos</h1>
      <Button onClick={handleCreate} className="mb-4">Agregar Contacto</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map(contact => (
            <TableRow key={contact.id}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(contact)} variant="outline">Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingContact?.id ? 'Editar' : 'Crear'} Contacto</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nombre
              </Label>
              <Input
                id="name"
                name="name"
                value={editingContact?.name || ''}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={editingContact?.email || ''}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Teléfono
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={editingContact?.phone || ''}
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

