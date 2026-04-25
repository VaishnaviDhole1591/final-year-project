# EnterNet Database Migration Instructions

## Quick Start

Your EnterNet application is now connected to Supabase with complete database integration. Follow these steps to set up your database:

## Step 1: Access Supabase Dashboard

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Click on "SQL Editor" in the left sidebar

## Step 2: Create Database Schema

### Option A: Using Supabase Dashboard (Recommended)

1. In SQL Editor, click "New Query"
2. Copy the entire content from `/scripts/001_create_schema.sql`
3. Paste it into the editor
4. Click "Run"
5. Wait for completion (should show "SUCCESS" message)

### Option B: Using Command Line

```bash
# Install dependencies if not already done
pnpm install

# Run migrations script
pnpm run migrate
```

## Step 3: Create Profile Trigger

1. In SQL Editor, click "New Query"
2. Copy the entire content from `/scripts/002_profile_trigger.sql`
3. Paste it into the editor
4. Click "Run"
5. Verify success

## Step 4: Verify Schema

Check that all tables were created:

```sql
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';
```

You should see:
- connections
- events
- forum_replies
- forum_threads
- profiles
- resources
- schemes
- user_scheme_applications

## Step 5: Test Authentication

1. Start the dev server: `pnpm dev`
2. Open http://localhost:3000
3. Click "Sign Up"
4. Create a test account
5. Check your email for confirmation link
6. Confirm email
7. Log in and access dashboard

## Step 6: Seed Sample Data (Optional)

You can add sample schemes, events, and resources:

```sql
-- Insert sample scheme
INSERT INTO public.schemes (
  name, 
  description, 
  category, 
  ministry, 
  eligibility_criteria,
  benefits,
  loan_amount,
  interest_rate,
  website_url
) VALUES (
  'Startup India Seed Fund',
  'Government scheme for early-stage startups',
  'Financing',
  'Department of Industrial Policy and Promotion',
  'Registered startup, team of founders, innovative idea',
  'Up to Rs. 50 lakh in grants',
  'N/A',
  'N/A',
  'https://startupiindia.gov.in'
);

-- Insert sample event
INSERT INTO public.events (
  title,
  description,
  date,
  location,
  event_type,
  is_virtual,
  capacity
) VALUES (
  'Startup Networking Meetup',
  'Meet fellow entrepreneurs and investors',
  NOW() + INTERVAL '7 days',
  'Mumbai, India',
  'Networking',
  FALSE,
  100
);

-- Insert sample forum thread
-- First, get a profile ID
-- INSERT INTO public.forum_threads (title, content, author_id, category)
-- SELECT 'Welcome to EnterNet Forum', 'This is the discussion forum for all entrepreneurs', id, 'General'
-- FROM public.profiles LIMIT 1;
```

## Troubleshooting

### Issue: "Table already exists" error
**Solution**: This is normal if you've run the script before. The migration includes safeguards.

### Issue: "RLS policy error"
**Solution**: This may occur if email is not confirmed. Confirm your email address in Supabase Auth section.

### Issue: "Permission denied" on profile creation
**Solution**: Ensure the trigger script was executed successfully. Verify in Functions section of Supabase dashboard.

### Issue: "Cannot INSERT into profiles"
**Solution**: User might not have confirmed email. Check auth.users table in Supabase dashboard for `email_confirmed_at`.

## Database Structure Overview

```
┌─ profiles (users)
│  ├─ id (PK, FK to auth.users)
│  ├─ first_name, last_name, email
│  ├─ company, job_title, industry
│  └─ user_type (entrepreneur/investor/admin)
│
├─ schemes
│  ├─ id (PK)
│  ├─ name, description, category
│  ├─ eligibility_criteria, benefits
│  └─ contact info, financial details
│
├─ events
│  ├─ id (PK)
│  ├─ title, date, location
│  ├─ organizer_id (FK to profiles)
│  └─ attendee tracking
│
├─ forum_threads
│  ├─ id (PK)
│  ├─ title, content, category
│  ├─ author_id (FK to profiles)
│  └─ views, reply_count
│
├─ forum_replies
│  ├─ id (PK)
│  ├─ content, likes
│  ├─ thread_id (FK to forum_threads)
│  └─ author_id (FK to profiles)
│
├─ resources
│  ├─ id (PK)
│  ├─ title, description, resource_type
│  ├─ created_by (FK to profiles)
│  └─ views
│
├─ user_scheme_applications
│  ├─ id (PK)
│  ├─ user_id (FK to profiles)
│  ├─ scheme_id (FK to schemes)
│  └─ status (submitted/approved/rejected)
│
└─ connections
   ├─ id (PK)
   ├─ requester_id (FK to profiles)
   ├─ receiver_id (FK to profiles)
   └─ status (pending/accepted)
```

## Features Enabled

✅ **Authentication**
- Email/Password signup and login
- Secure session management
- Email confirmation
- User metadata storage

✅ **Data Management**
- All CRUD operations protected by RLS
- Real-time sync between users
- Automatic profile creation on signup
- Audit timestamps (created_at, updated_at)

✅ **Network & Social**
- Connection requests between users
- Forum discussions with threading
- Event management with attendee tracking
- Resource sharing

✅ **Business Logic**
- Scheme discovery and filtering
- Application tracking
- Admin management capabilities

✅ **Security**
- Row Level Security on all tables
- Admin-only operations protected
- User isolation enforced at database level
- Encrypted passwords handled by Supabase

## Next Steps

1. **Customize User Profiles**: Add more fields to profiles table as needed
2. **Import Government Schemes**: Add real scheme data to the schemes table
3. **Set Up Admin Users**: Update specific users to have `user_type = 'admin'`
4. **Enable Email Notifications**: Set up email templates in Supabase
5. **Add Storage**: For profile pictures, documents, and resources (use Supabase Storage)

## API Integration

All database operations go through:
- `/lib/supabase/database.ts` - Database utilities
- `/app/api/*` - REST API endpoints
- Client components use `createClient()` from Supabase library

See `DATABASE.md` for detailed API documentation.

## Support

For issues with Supabase:
- Check [Supabase Docs](https://supabase.com/docs)
- Review [Security Guidelines](https://supabase.com/docs/guides/database/postgres/row-level-security)
- Test queries in SQL Editor directly

---

**Your database is ready!** Start the dev server and begin using EnterNet with full data persistence.
