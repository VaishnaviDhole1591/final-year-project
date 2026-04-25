# EnterNet Authentication & Database Flow Guide

## 📊 Login & Signup Database Architecture

### **1. Supabase Authentication Layer (Managed by Supabase)**

```
┌─────────────────────────────────────────────────────┐
│        Supabase Auth.users Table (Built-in)         │
├─────────────────────────────────────────────────────┤
│ • id (UUID - auto-generated)                        │
│ • email (user's email address)                       │
│ • encrypted_password (bcrypt hashed)                │
│ • email_confirmed_at (timestamp)                    │
│ • raw_user_meta_data (JSON - custom fields)         │
│ • created_at, updated_at (timestamps)               │
│ • session tokens, JWT tokens                        │
└─────────────────────────────────────────────────────┘
         ↓ (Automatically triggers)
┌─────────────────────────────────────────────────────┐
│       Public.profiles Table (Custom - Your Data)    │
├─────────────────────────────────────────────────────┤
│ • id (UUID - REFERENCES auth.users.id)              │
│ • first_name, last_name (from signup form)          │
│ • email (copied from auth.users)                    │
│ • company, industry (from signup form)              │
│ • user_type: 'entrepreneur' | 'admin'               │
│ • created_at, updated_at                            │
│ • Other profile fields (optional)                   │
└─────────────────────────────────────────────────────┘
```

---

## 🔄 Complete Signup Flow

### **Step 1: User Fills Signup Form**
```
Frontend (app/signup/page.tsx)
├─ User enters: Email, Password, Name, Company
└─ Clicks "Sign Up"
```

### **Step 2: Create Supabase Auth Account**
```javascript
// From app/signup/page.tsx
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'securePassword123',
  options: {
    emailRedirectTo: `${window.location.origin}/auth/callback`,
    data: {
      first_name: 'John',
      last_name: 'Doe',
      company: 'Tech Corp',
      industry: 'Technology',
      user_type: 'entrepreneur'
    }
  }
})
```

**What Happens:**
1. ✅ User record created in `auth.users` table
2. ✅ Password automatically hashed with bcrypt
3. ✅ Confirmation email sent to user
4. ✅ `raw_user_meta_data` stores custom fields (first_name, last_name, company, etc)

### **Step 3: Database Trigger Auto-Creates Profile**
```sql
-- Automatically runs after user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
```

**Function does:**
```sql
INSERT INTO public.profiles (
  id,              -- UUID from auth.users.id
  first_name,      -- From raw_user_meta_data
  last_name,       -- From raw_user_meta_data
  email,           -- From auth.users.email
  user_type,       -- From raw_user_meta_data or default 'entrepreneur'
  created_at,
  updated_at
)
```

### **Step 4: Send Confirmation Email**
```
Supabase automatically sends email with:
├─ Click "Confirm Email" link
├─ Link redirects to: /auth/callback
└─ Exchange auth code for session token
```

### **Step 5: User Confirms Email**
```
Frontend (app/auth/callback/route.ts)
├─ Receives auth code from email link
├─ Exchanges code for session: 
│  await supabase.auth.exchangeCodeForSession(code)
├─ Session stored in cookies (HTTP-only)
└─ Redirect to dashboard
```

---

## 🔐 Complete Login Flow

### **Step 1: User Enters Credentials**
```
Frontend (app/login/page.tsx)
├─ User enters: Email, Password
└─ Clicks "Sign In"
```

### **Step 2: Verify with Supabase**
```javascript
// From app/login/page.tsx
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'securePassword123'
})
```

**What Happens:**
1. ✅ Supabase checks if user exists in `auth.users`
2. ✅ Compares password hash (bcrypt algorithm)
3. ✅ Returns session token if successful
4. ✅ Session stored in HTTP-only cookie (secure!)

### **Step 3: Load User Profile**
```javascript
// In dashboard or any protected page
const { data: { user } } = await supabase.auth.getUser()

// Get full profile data
const profile = await getProfile(user.id)
```

**Data Retrieved:**
```javascript
{
  id: "123e4567-e89b-12d3-a456-426614174000",
  email: "user@example.com",
  first_name: "John",
  last_name: "Doe",
  company: "Tech Corp",
  industry: "Technology",
  user_type: "entrepreneur",
  created_at: "2024-04-23T10:30:00Z"
}
```

---

## 🛡️ Security Features (Row Level Security - RLS)

All tables have **Row Level Security** enabled:

### **Profiles Table**
```sql
-- Users can only read their own profile
CREATE POLICY "profiles_select_own" ON public.profiles 
  FOR SELECT USING (auth.uid() = id);

-- Users can only update their own profile
CREATE POLICY "profiles_update_own" ON public.profiles 
  FOR UPDATE USING (auth.uid() = id);

-- But anyone can view all profiles (for network directory)
CREATE POLICY "profiles_select_all" ON public.profiles 
  FOR SELECT USING (TRUE);
```

**This means:**
- ✅ User can't modify someone else's profile
- ✅ User can't delete someone else's profile
- ✅ All users can view all profiles (for networking)
- ✅ Enforced at database level (not in code)

### **Schemes Table**
```sql
-- Only admins can add/edit/delete schemes
CREATE POLICY "schemes_insert_admin" ON public.schemes 
  FOR INSERT WITH CHECK (
    EXISTS(
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() AND profiles.user_type = 'admin'
    )
  );

-- Everyone can view schemes
CREATE POLICY "schemes_select_all" ON public.schemes 
  FOR SELECT USING (TRUE);
```

---

## 💾 Database Schema Summary

### **Primary Tables**

| Table | Purpose | Rows Visible To |
|-------|---------|-----------------|
| `auth.users` | Authentication (Supabase managed) | Only the user themselves |
| `profiles` | User info, name, company, role | All users can view; only own can edit |
| `schemes` | Government schemes/programs | All users can view; only admins can edit |
| `events` | Networking events | All users can view; organizers can manage their own |
| `forum_threads` | Discussion threads | All users can view; authors can edit their own |
| `forum_replies` | Thread replies | All users can view; authors can edit their own |
| `resources` | Educational content | All users can view; only admins can create |
| `connections` | Network relationships | Only involved users can view |
| `user_scheme_applications` | Application tracking | Only user and admins can view |

---

## 📝 Signup Form Fields

When user signs up, they provide:

```javascript
{
  email: "entrepreneur@example.com",           // Required
  password: "securePassword123",                // Required, min 8 chars
  name: "John Doe",                            // Split into first/last name
  company: "Tech Startup",                     // Optional
  industry: "Technology",                      // Optional
  user_type: "entrepreneur"                    // Default value
}
```

**All stored securely in Supabase:**
- Password → `auth.users` (hashed with bcrypt)
- Email → `auth.users` (used for login)
- Other fields → `public.profiles` (user can edit anytime)

---

## 📋 Login Requirements

User must have:
1. ✅ Valid email address (must exist in `auth.users`)
2. ✅ Correct password (matches bcrypt hash)
3. ✅ Confirmed email (clicked confirmation link)

**After successful login:**
- Session token stored in HTTP-only cookie
- Valid for 24 hours (auto-refresh available)
- Cannot be accessed by JavaScript (XSS protection)
- Only sent to Supabase domain (CSRF protection)

---

## 🔄 How Data Flows Through App

### **Signup Flow - Data Path**
```
User Form Input
    ↓
Validation (client-side)
    ↓
supabase.auth.signUp()
    ↓
Create auth.users record + hash password
    ↓
Trigger handle_new_user() function
    ↓
Create profiles record
    ↓
Send confirmation email
    ↓
User clicks email link
    ↓
/auth/callback exchanges code for session
    ↓
Redirect to /dashboard
    ↓
Session cookie auto-validates user
```

### **Login Flow - Data Path**
```
User Form Input (email + password)
    ↓
supabase.auth.signInWithPassword()
    ↓
Lookup user in auth.users by email
    ↓
Compare password hash using bcrypt
    ↓
Create session token (JWT)
    ↓
Store in HTTP-only cookie
    ↓
Redirect to /dashboard
    ↓
Cookie automatically sent with requests
    ↓
getUser() retrieves current session
```

---

## 🎯 Environment Variables (Auto-Set)

Supabase automatically provides these environment variables:

```bash
# Public (safe to share - used in browser)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxx...

# Private (server-only - keep secret!)
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJxxxx...
POSTGRES_URL=postgresql://xxxxx@db.xxx...
```

**Used by:**
- Client: `NEXT_PUBLIC_*` variables (visible in browser)
- Server: `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` (secret)

---

## 🚀 Quick Testing Checklist

After running migrations, test this flow:

```
1. Click "Sign Up"
   ├─ Fill form: Email, Password, Name, Company
   ├─ Submit
   └─ See "Check your email" message

2. Check email inbox
   ├─ Find confirmation email from Supabase
   ├─ Click "Confirm Email" button
   └─ Should redirect to dashboard

3. Click "Sign Out"
   └─ Session cleared, redirect to home

4. Click "Sign In"
   ├─ Enter email and password from signup
   ├─ Submit
   └─ Should load dashboard

5. Go to Settings
   ├─ See pre-filled profile info
   ├─ Update company name
   ├─ Save
   └─ Changes persisted in database

6. Go to Network
   ├─ See your profile in the list
   ├─ See other users who signed up
   └─ Data pulled from profiles table
```

---

## 🐛 Common Issues & Solutions

### **"User not found" on login**
- ✅ Check if user exists: Search `auth.users` table in Supabase
- ✅ Is email confirmed? Look for `email_confirmed_at` timestamp
- ✅ Make sure you clicked confirmation email link

### **Profile not created after signup**
- ✅ Check if trigger exists: SQL Editor → `on_auth_user_created` trigger
- ✅ Check function: `public.handle_new_user()` function
- ✅ Query `profiles` table to see if record was created

### **Session expires unexpectedly**
- ✅ Sessions last 24 hours by default
- ✅ Supabase auto-refreshes using refresh token
- ✅ Make sure cookies are enabled in browser

### **Can't edit profile after signup**
- ✅ Check RLS policy: `profiles_update_own` policy must exist
- ✅ Verify user ID matches in policy: `auth.uid() = id`
- ✅ Make sure email is confirmed (required for RLS)

---

## 📚 Related Files

- **Signup Page**: `/app/signup/page.tsx`
- **Login Page**: `/app/login/page.tsx`
- **Auth Callback**: `/app/auth/callback/route.ts`
- **Supabase Client**: `/lib/supabase/client.ts`
- **Database Functions**: `/lib/supabase/database.ts`
- **SQL Schema**: `/scripts/001_create_schema.sql`
- **SQL Trigger**: `/scripts/002_profile_trigger.sql`
- **Middleware**: `/middleware.ts`

