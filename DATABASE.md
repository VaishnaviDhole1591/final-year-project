# EnterNet - Database Setup Guide

## Overview

EnterNet uses Supabase as the backend database and authentication provider. All data is persisted in PostgreSQL with Row Level Security (RLS) policies to ensure data protection.

## Database Architecture

### Tables

#### 1. **profiles**
Stores user profile information linked to Supabase authentication.
- `id` - UUID (Primary Key, references auth.users)
- `first_name`, `last_name` - User names
- `email` - User email
- `phone` - Contact number
- `company` - Company name
- `job_title` - Job position
- `bio` - User biography
- `location` - User location
- `avatar_url` - Profile picture URL
- `industry` - Business industry
- `website`, `linkedin_url` - Social links
- `user_type` - 'entrepreneur', 'investor', 'admin'
- `created_at`, `updated_at` - Timestamps

#### 2. **schemes**
Government schemes and benefits
- `id` - UUID (Primary Key)
- `name`, `description` - Scheme details
- `category` - Type of scheme
- `ministry` - Government ministry
- `eligibility_criteria` - Requirements
- `benefits` - Benefits offered
- `application_process` - How to apply
- `documents_required` - Required documents
- `loan_amount`, `interest_rate`, `tenure` - Financial details
- `age_criteria`, `income_criteria` - Eligibility criteria
- `website_url`, `contact_email`, `contact_phone` - Contact info
- `icon`, `cover_image_url` - Media

#### 3. **events**
Networking and business events
- `id` - UUID (Primary Key)
- `title`, `description` - Event info
- `date` - Event date/time
- `location` - Event location
- `event_type` - Type of event
- `organizer_id` - UUID (FK to profiles)
- `attendee_count`, `capacity` - Capacity tracking
- `is_virtual` - Virtual event flag
- `registration_url` - Registration link

#### 4. **forum_threads**
Community discussion threads
- `id` - UUID (Primary Key)
- `title`, `content` - Thread content
- `author_id` - UUID (FK to profiles)
- `category` - Discussion category
- `views`, `reply_count` - Engagement metrics
- `is_pinned` - Pin thread flag

#### 5. **forum_replies**
Replies to forum threads
- `id` - UUID (Primary Key)
- `thread_id` - UUID (FK to forum_threads)
- `content` - Reply content
- `author_id` - UUID (FK to profiles)
- `likes` - Like count

#### 6. **resources**
Educational resources and guides
- `id` - UUID (Primary Key)
- `title`, `description` - Resource info
- `resource_type` - Guide, video, article, etc.
- `content` - Resource content/text
- `file_url` - Downloadable file
- `category` - Resource category
- `created_by` - UUID (FK to profiles)
- `views` - View count

#### 7. **user_scheme_applications**
Track user applications to schemes
- `id` - UUID (Primary Key)
- `user_id` - UUID (FK to profiles)
- `scheme_id` - UUID (FK to schemes)
- `status` - 'submitted', 'approved', 'rejected'
- `application_date` - When applied
- UNIQUE constraint on (user_id, scheme_id)

#### 8. **connections**
Network connections between entrepreneurs
- `id` - UUID (Primary Key)
- `requester_id` - UUID (FK to profiles)
- `receiver_id` - UUID (FK to profiles)
- `status` - 'pending', 'accepted', 'rejected'
- UNIQUE constraint on (requester_id, receiver_id)

## Authentication Flow

### Sign Up
1. User enters email, password, and profile info on `/signup`
2. `supabase.auth.signUp()` creates a new user with metadata
3. A trigger automatically creates a profile record in the `profiles` table
4. Confirmation email is sent (or user is redirected on successful confirmation)
5. After email confirmation, user can log in

### Log In
1. User enters email and password on `/login`
2. `supabase.auth.signInWithPassword()` authenticates
3. Session is created and stored in cookies
4. User is redirected to `/dashboard`

### Protected Routes
- Middleware (`middleware.ts`) checks authentication state
- Dashboard and admin routes require valid session
- Unauthorized access redirects to login

## Row Level Security (RLS)

All tables have RLS enabled with specific policies:

### Profile Policies
- Users can SELECT/INSERT/UPDATE/DELETE only their own profile
- Anyone can SELECT all profiles (for networking)

### Scheme Policies
- Anyone can SELECT schemes
- Only admins can INSERT/UPDATE/DELETE schemes

### Event Policies
- Anyone can SELECT events
- Users can INSERT/UPDATE/DELETE only their own events

### Forum Policies
- Anyone can SELECT threads and replies
- Users can INSERT/UPDATE/DELETE only their own content

### Resource Policies
- Anyone can SELECT resources
- Only admins can INSERT/UPDATE/DELETE resources

### Application Policies
- Users can SELECT/INSERT/UPDATE only their own applications

### Connection Policies
- Users can see connections they're part of
- Users can manage connections they initiated or received

## Database Utilities

The application includes helper functions in `/lib/supabase/database.ts`:

- `getProfile(userId)` - Fetch user profile
- `updateProfile(userId, updates)` - Update profile
- `getSchemes()` - Get all schemes
- `getSchemeById(id)` - Get single scheme
- `createScheme(data)` - Create scheme (admin)
- `getEvents()` - Get all events
- `getForumThreads()` - Get discussion threads
- `createForumThread(data)` - Create thread
- `getResources()` - Get resources
- `getNetworkProfiles()` - Get entrepreneur profiles
- `sendConnectionRequest(receiverId)` - Send connection request
- `applyForScheme(schemeId)` - Apply to a scheme

## API Routes

RESTful endpoints for data operations:

- `POST /api/schemes` - Create scheme
- `GET /api/schemes` - List schemes
- `POST /api/events` - Create event
- `GET /api/events` - List events
- `POST /api/forum/threads` - Create thread
- `GET /api/forum/threads` - List threads
- `GET /api/network/profiles` - Get profiles
- `GET /api/resources` - Get resources

## Environment Variables

Required Supabase environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key
SUPABASE_JWT_SECRET=your-jwt-secret
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000/auth/callback
POSTGRES_URL=your-postgres-url
```

These are automatically configured when you connect Supabase in v0.

## Setting Up Migrations

The database schema is defined in SQL migration files:

1. `scripts/001_create_schema.sql` - Creates all tables with RLS policies
2. `scripts/002_profile_trigger.sql` - Creates trigger for auto-profile creation

These migrations can be run in Supabase dashboard or via:

```bash
pnpm run migrate
```

## Security Best Practices

1. **Row Level Security**: All tables use RLS to ensure users can only access authorized data
2. **Environment Variables**: All secrets stored in environment variables
3. **Session Management**: Secure HTTP-only cookies for authentication
4. **User Metadata**: User type and profile info stored in auth metadata
5. **Admin Verification**: Admin operations check `user_type = 'admin'` in RLS policies

## Usage Examples

### Fetch Profile
```typescript
import { getProfile } from '@/lib/supabase/database'

const profile = await getProfile(userId)
```

### Create Scheme (Admin)
```typescript
import { createScheme } from '@/lib/supabase/database'

const scheme = await createScheme({
  name: 'Startup India',
  description: 'Government scheme for startups',
  // ... other fields
})
```

### Get User's Scheme Applications
```typescript
import { getUserSchemeApplications } from '@/lib/supabase/database'

const applications = await getUserSchemeApplications()
```

### Join Network
```typescript
import { sendConnectionRequest } from '@/lib/supabase/database'

await sendConnectionRequest(entrepreneurId)
```

## Troubleshooting

### Authentication Issues
- Check that environment variables are set correctly
- Verify email confirmation is enabled in Supabase settings
- Check middleware is properly configured

### RLS Policy Errors
- Ensure user has a confirmed email address
- Verify `user_type` is set correctly in profile
- Check RLS policies are enabled on tables

### Data Not Showing
- Verify user has read permissions for the table
- Check RLS policy matches your user context
- Ensure data actually exists in the table

## Next Steps

1. Run migrations to create tables:
   - Go to Supabase dashboard → SQL Editor
   - Copy and run scripts from `/scripts/` folder

2. Add sample data for testing

3. Deploy to production

4. Monitor database performance and logs

---

For more info: https://supabase.com/docs
