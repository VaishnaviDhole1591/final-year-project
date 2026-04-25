import { NextRequest, NextResponse } from 'next/server'
import { getNetworkProfiles } from '@/lib/supabase/database'

export async function GET() {
  try {
    const profiles = await getNetworkProfiles()
    return NextResponse.json(profiles)
  } catch (error) {
    console.error('Error fetching profiles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch profiles' },
      { status: 500 }
    )
  }
}
