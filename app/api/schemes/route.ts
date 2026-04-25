import { NextRequest, NextResponse } from 'next/server'
import { getSchemes, createScheme } from '@/lib/supabase/database'

export async function GET() {
  try {
    const schemes = await getSchemes()
    return NextResponse.json(schemes)
  } catch (error) {
    console.error('Error fetching schemes:', error)
    return NextResponse.json(
      { error: 'Failed to fetch schemes' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const scheme = await createScheme(body)
    return NextResponse.json(scheme, { status: 201 })
  } catch (error) {
    console.error('Error creating scheme:', error)
    return NextResponse.json(
      { error: 'Failed to create scheme' },
      { status: 500 }
    )
  }
}
