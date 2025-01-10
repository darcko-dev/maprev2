import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const service = await prisma.service.findUnique({
    where: {
      id: Number(params.id),
    },
  })
  return NextResponse.json(service)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json()
  const service = await prisma.service.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title: body.title,
      description: body.description,
      image: body.image,
    },
  })
  return NextResponse.json(service)
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const service = await prisma.service.delete({
    where: {
      id: Number(params.id),
    },
  })
  return NextResponse.json(service)
}

