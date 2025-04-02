import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db() // specify your DB name if different from .env

    const influencers = await db.collection('influencers').find({}).toArray()

    return NextResponse.json(influencers)
  } catch (e) {
    return NextResponse.json(
      { error: 'Failed to fetch influencers' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db()
    const body = await request.json()

    const newInfluencer = await db.collection('influencers').insertOne(body)

    return NextResponse.json(newInfluencer)
  } catch (e) {
    return NextResponse.json(
      { error: 'Failed to create influencer' },
      { status: 500 }
    )
  }
}
