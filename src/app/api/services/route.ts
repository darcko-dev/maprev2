import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const services = await prisma.service.findMany()
  return NextResponse.json(services)
}

export async function POST(request: Request) {
  const body = await request.json()
  const service = await prisma.service.create({
    data: {
      title: body.title,
      description: body.description,
      image: body.image,
    },
  })
  return NextResponse.json(service)
}

