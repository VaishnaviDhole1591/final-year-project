import { NextRequest, NextResponse } from 'next/server'
import { getForumThreads, createForumThread } from '@/lib/supabase/database'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const threads = await getForumThreads()
    return NextResponse.json(threads)
  } catch (error) {
    console.error('Error fetching threads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch threads' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const thread = await createForumThread({
      ...body,
      author_id: user.id
    })
    return NextResponse.json(thread, { status: 201 })
  } catch (error) {
    console.error('Error creating thread:', error)
    return NextResponse.json(
      { error: 'Failed to create thread' },
      { status: 500 }
    )
  }
}
