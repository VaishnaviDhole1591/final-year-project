-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  company TEXT,
  job_title TEXT,
  bio TEXT,
  location TEXT,
  avatar_url TEXT,
  industry TEXT,
  website TEXT,
  linkedin_url TEXT,
  user_type TEXT DEFAULT 'entrepreneur',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles_select_own" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_insert_own" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "profiles_delete_own" ON public.profiles FOR DELETE USING (auth.uid() = id);
CREATE POLICY "profiles_select_all" ON public.profiles FOR SELECT USING (TRUE);

-- Create schemes table
CREATE TABLE IF NOT EXISTS public.schemes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  ministry TEXT,
  eligibility_criteria TEXT,
  benefits TEXT,
  application_process TEXT,
  documents_required TEXT,
  loan_amount TEXT,
  interest_rate TEXT,
  tenure TEXT,
  age_criteria TEXT,
  income_criteria TEXT,
  website_url TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  icon TEXT,
  cover_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.schemes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "schemes_select_all" ON public.schemes FOR SELECT USING (TRUE);
CREATE POLICY "schemes_insert_admin" ON public.schemes FOR INSERT WITH CHECK (
  EXISTS(
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin'
  )
);
CREATE POLICY "schemes_update_admin" ON public.schemes FOR UPDATE USING (
  EXISTS(
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin'
  )
);
CREATE POLICY "schemes_delete_admin" ON public.schemes FOR DELETE USING (
  EXISTS(
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin'
  )
);

-- Create events table
CREATE TABLE IF NOT EXISTS public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  date TIMESTAMP WITH TIME ZONE,
  location TEXT,
  event_type TEXT,
  image_url TEXT,
  organizer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  attendee_count INTEGER DEFAULT 0,
  capacity INTEGER,
  is_virtual BOOLEAN DEFAULT FALSE,
  registration_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "events_select_all" ON public.events FOR SELECT USING (TRUE);
CREATE POLICY "events_insert_auth" ON public.events FOR INSERT WITH CHECK (auth.uid() = organizer_id);
CREATE POLICY "events_update_own" ON public.events FOR UPDATE USING (auth.uid() = organizer_id);
CREATE POLICY "events_delete_own" ON public.events FOR DELETE USING (auth.uid() = organizer_id);

-- Create forum_threads table
CREATE TABLE IF NOT EXISTS public.forum_threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  category TEXT,
  views INTEGER DEFAULT 0,
  reply_count INTEGER DEFAULT 0,
  is_pinned BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.forum_threads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "threads_select_all" ON public.forum_threads FOR SELECT USING (TRUE);
CREATE POLICY "threads_insert_auth" ON public.forum_threads FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "threads_update_own" ON public.forum_threads FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "threads_delete_own" ON public.forum_threads FOR DELETE USING (auth.uid() = author_id);

-- Create forum_replies table
CREATE TABLE IF NOT EXISTS public.forum_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id UUID REFERENCES public.forum_threads(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  author_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "replies_select_all" ON public.forum_replies FOR SELECT USING (TRUE);
CREATE POLICY "replies_insert_auth" ON public.forum_replies FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "replies_update_own" ON public.forum_replies FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "replies_delete_own" ON public.forum_replies FOR DELETE USING (auth.uid() = author_id);

-- Create resources table
CREATE TABLE IF NOT EXISTS public.resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  resource_type TEXT,
  content TEXT,
  file_url TEXT,
  category TEXT,
  created_by UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "resources_select_all" ON public.resources FOR SELECT USING (TRUE);
CREATE POLICY "resources_insert_admin" ON public.resources FOR INSERT WITH CHECK (
  EXISTS(
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin'
  )
);
CREATE POLICY "resources_update_admin" ON public.resources FOR UPDATE USING (
  EXISTS(
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin'
  )
);
CREATE POLICY "resources_delete_admin" ON public.resources FOR DELETE USING (
  EXISTS(
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin'
  )
);

-- Create user_scheme_applications table
CREATE TABLE IF NOT EXISTS public.user_scheme_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  scheme_id UUID REFERENCES public.schemes(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'submitted',
  application_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, scheme_id)
);

ALTER TABLE public.user_scheme_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "applications_select_own" ON public.user_scheme_applications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "applications_insert_own" ON public.user_scheme_applications FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "applications_update_own" ON public.user_scheme_applications FOR UPDATE USING (auth.uid() = user_id);

-- Create connections table (for networking)
CREATE TABLE IF NOT EXISTS public.connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(requester_id, receiver_id)
);

ALTER TABLE public.connections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "connections_select_own" ON public.connections FOR SELECT USING (
  auth.uid() = requester_id OR auth.uid() = receiver_id
);
CREATE POLICY "connections_insert_auth" ON public.connections FOR INSERT WITH CHECK (auth.uid() = requester_id);
CREATE POLICY "connections_update_own" ON public.connections FOR UPDATE USING (
  auth.uid() = requester_id OR auth.uid() = receiver_id
);
CREATE POLICY "connections_delete_own" ON public.connections FOR DELETE USING (
  auth.uid() = requester_id OR auth.uid() = receiver_id
);
