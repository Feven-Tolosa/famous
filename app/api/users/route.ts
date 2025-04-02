// app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ]
  return NextResponse.json(users)
}
