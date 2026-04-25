import { createClient } from '@/lib/supabase/server'

export async function getProfile(userId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}

export async function updateProfile(userId: string, updates: any) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getSchemes() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('schemes')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function getSchemeById(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('schemes')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createScheme(schemeData: any) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('schemes')
    .insert([schemeData])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateScheme(id: string, updates: any) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('schemes')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteScheme(id: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('schemes')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export async function getEvents() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('events')
    .select('*, organizer:profiles(first_name, last_name, avatar_url)')
    .order('date', { ascending: false })

  if (error) throw error
  return data
}

export async function getEventById(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('events')
    .select('*, organizer:profiles(first_name, last_name, avatar_url, email)')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createEvent(eventData: any) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('events')
    .insert([eventData])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateEvent(id: string, updates: any) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('events')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteEvent(id: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export async function getForumThreads() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('forum_threads')
    .select('*, author:profiles(first_name, last_name, avatar_url)')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function getForumThreadById(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('forum_threads')
    .select('*, author:profiles(first_name, last_name, avatar_url)')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createForumThread(threadData: any) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('forum_threads')
    .insert([threadData])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getForumReplies(threadId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('forum_replies')
    .select('*, author:profiles(first_name, last_name, avatar_url)')
    .eq('thread_id', threadId)
    .order('created_at', { ascending: true })

  if (error) throw error
  return data
}

export async function createForumReply(replyData: any) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('forum_replies')
    .insert([replyData])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getResources() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('resources')
    .select('*, creator:profiles(first_name, last_name)')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function getResourcesByCategory(category: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('resources')
    .select('*, creator:profiles(first_name, last_name)')
    .eq('category', category)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function createResource(resourceData: any) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('resources')
    .insert([resourceData])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getNetworkProfiles() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function sendConnectionRequest(receiverId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('connections')
    .insert([{
      requester_id: user.id,
      receiver_id: receiverId,
      status: 'pending'
    }])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function acceptConnectionRequest(connectionId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('connections')
    .update({ status: 'accepted' })
    .eq('id', connectionId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getConnections(userId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('connections')
    .select('*')
    .or(`requester_id.eq.${userId},receiver_id.eq.${userId}`)
    .eq('status', 'accepted')

  if (error) throw error
  return data
}

export async function applyForScheme(schemeId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('user_scheme_applications')
    .insert([{
      user_id: user.id,
      scheme_id: schemeId,
      status: 'submitted'
    }])
    .select()
    .single()

  if (error && error.code !== 'PGRST116') throw error // 23505 is unique violation
  return data
}

export async function getUserSchemeApplications() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return []

  const { data, error } = await supabase
    .from('user_scheme_applications')
    .select('*, scheme:schemes(name, description)')
    .eq('user_id', user.id)
    .order('application_date', { ascending: false })

  if (error) throw error
  return data
}
