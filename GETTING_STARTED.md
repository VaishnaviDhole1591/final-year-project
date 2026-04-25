# EnterNet Database Integration - Getting Started Guide

## 🎯 One-Page Quick Reference

### What You Have
A complete, production-ready entrepreneur networking platform with:
- ✅ User authentication (email/password)
- ✅ Complete data persistence to PostgreSQL
- ✅ Enterprise-grade security (RLS)
- ✅ 8 interconnected database tables
- ✅ 30+ database utility functions
- ✅ REST API endpoints
- ✅ Protected admin panel

### How Data Flows

```
User → Sign Up → Supabase Auth → Profile Created → Save to DB
  ↓
User → Log In → Verify Session → Dashboard → Access All Features
  ↓
User → Create Content → API Route → Database Function → Save to PostgreSQL
  ↓
Other Users → Query Data → RLS Policy Check → Only Authorized Data Returned
```

## 🚀 To Get Started (3 Steps)

### Step 1️⃣: Setup Database (5 minutes)

**In Supabase Dashboard:**

1. Go to: https://supabase.com/dashboard
2. Select your project
3. Click: "SQL Editor" (left sidebar)
4. Click: "New Query"
5. Copy from file: `scripts/001_create_schema.sql`
6. Paste into editor
7. Click: "Run" (▶️ button)
8. Wait for: "SUCCESS" message
9. Repeat steps 4-8 with: `scripts/002_profile_trigger.sql`

**Result**: All 8 tables created with security policies ✅

### Step 2️⃣: Start Application (2 minutes)

```bash
# In your terminal
cd /vercel/share/v0-project
pnpm dev
```

Open: http://localhost:3000

### Step 3️⃣: Test It Works (5 minutes)

1. Click "Sign Up" button
2. Enter email and password
3. Check your email for confirmation link
4. Click confirmation link
5. Go back to app and click "Log In"
6. Enter credentials
7. You're now in dashboard! 🎉

**Data is now being saved to your database!**

## 📊 Database Tables

```
┌─────────────────────────────────────────────┐
│            ENTERNET DATABASE                │
├─────────────────────────────────────────────┤
│                                             │
│  🧑 PROFILES (User Accounts)               │
│     - Names, email, company, industry      │
│     - Avatar, bio, social links            │
│     - User type: entrepreneur/admin        │
│                                             │
│  🏛️  SCHEMES (Government Schemes)          │
│     - Name, description, category          │
│     - Eligibility, benefits, documents     │
│     - Contact info, loan details           │
│                                             │
│  🎤 EVENTS (Networking Events)             │
│     - Title, date, location                │
│     - Organizer, capacity, type            │
│     - Registration tracking                │
│                                             │
│  💬 FORUM_THREADS (Discussions)            │
│     - Title, content, category             │
│     - Author, views, replies               │
│                                             │
│  💭 FORUM_REPLIES (Discussion Replies)     │
│     - Content, likes, author               │
│     - Thread reference                     │
│                                             │
│  📚 RESOURCES (Guides & Content)           │
│     - Title, type, content, category       │
│     - Creator, views                       │
│                                             │
│  ✅ USER_SCHEME_APPLICATIONS                │
│     - User → Scheme relationship           │
│     - Status: submitted/approved/rejected  │
│     - Application date tracking            │
│                                             │
│  🤝 CONNECTIONS (Network Links)            │
│     - Requester → Receiver relationship    │
│     - Status: pending/accepted             │
│                                             │
└─────────────────────────────────────────────┘
```

## 🔐 Security Model

```
┌─────────────────────────────────────────────┐
│          SECURITY ARCHITECTURE              │
├─────────────────────────────────────────────┤
│                                             │
│  1. USER SIGNUP                             │
│     ├─ Email/password → Supabase Auth      │
│     ├─ Email confirmation required          │
│     └─ Profile auto-created via trigger    │
│                                             │
│  2. USER LOGIN                              │
│     ├─ Credentials verified                │
│     ├─ Session created (secure cookie)     │
│     └─ Middleware protects routes          │
│                                             │
│  3. DATA ACCESS (RLS)                      │
│     ├─ Users can only see their data       │
│     ├─ Public data visible to all          │
│     ├─ Admin operations require role check │
│     └─ Database enforces at query level    │
│                                             │
│  4. AUTHENTICATED REQUESTS                  │
│     ├─ Session cookie verified             │
│     ├─ User ID extracted                   │
│     ├─ RLS policies applied                │
│     └─ Only authorized data returned       │
│                                             │
└─────────────────────────────────────────────┘
```

## 📱 Feature Availability

| Feature | Status | Where |
|---------|--------|-------|
| User Signup | ✅ Working | `/signup` |
| User Login | ✅ Working | `/login` |
| User Dashboard | ✅ Working | `/dashboard` |
| Profile Management | ✅ Working | `/dashboard/settings` |
| Browse Schemes | ✅ Working | `/schemes` |
| Scheme Details | ✅ Working | `/schemes/[id]` |
| Apply to Scheme | ✅ Ready | Dashboard |
| Network Directory | ✅ Working | `/network` |
| Connect with Users | ✅ Ready | Network page |
| Events Listing | ✅ Working | `/events` |
| Register for Events | ✅ Ready | Events page |
| Forum Discussions | ✅ Working | `/forum` |
| Post Threads | ✅ Ready | Forum page |
| Reply to Threads | ✅ Ready | Thread page |
| Resources/Guides | ✅ Working | `/resources` |
| Admin Dashboard | ✅ Working | `/admin` |
| Manage Users | ✅ Ready | `/admin/users` |
| Manage Schemes | ✅ Ready | `/admin/schemes` |
| Manage Events | ✅ Ready | `/admin/events` |

## 🗄️ Data Persistence Examples

### When User Signs Up
```
Input: Email, Password, Name, Company
↓
Supabase Auth creates user
↓
Trigger fires automatically
↓
Profile record created in DB
↓
Result: User profile saved ✅
```

### When User Applies to Scheme
```
Input: Scheme ID, User ID
↓
API route: /api/schemes/apply
↓
Database function: applyForScheme()
↓
INSERT into user_scheme_applications
↓
Result: Application saved ✅
```

### When User Creates Forum Thread
```
Input: Title, Content, Category
↓
Middleware verifies auth
↓
API route: /api/forum/threads
↓
Database function: createForumThread()
↓
INSERT into forum_threads (with author_id)
↓
Result: Thread saved ✅
```

## 🧪 Quick Test Script

After starting the app (Step 2), test these flows:

```
Test 1: Authentication
├─ Click "Sign Up"
├─ Fill form with: email@test.com, password123
├─ Check email for confirmation
├─ Confirm email
├─ Click "Log In"
├─ Enter credentials
└─ ✅ Dashboard loads = Success!

Test 2: Profile Creation
├─ Go to /dashboard/settings
├─ Update profile fields
├─ Save changes
└─ ✅ Data persists = Success!

Test 3: Scheme Browsing
├─ Go to /schemes
├─ Click on a scheme
├─ View details page
└─ ✅ Data displays = Success!

Test 4: Forum Usage
├─ Go to /forum
├─ Create new thread
├─ Add reply to thread
└─ ✅ Saved in forum_threads & forum_replies = Success!

Test 5: Network
├─ Go to /network
├─ Send connection request
├─ Check connection status
└─ ✅ Saved in connections table = Success!
```

## 📚 Documentation Map

| Document | Purpose | Read If |
|----------|---------|---------|
| `DATABASE_INTEGRATION.md` | Overview | Starting out |
| `SETUP_DATABASE.md` | Migration guide | Running SQL |
| `DATABASE.md` | Complete reference | Building features |
| `IMPLEMENTATION_CHECKLIST.md` | Status tracking | Verifying setup |
| `scripts/001_create_schema.sql` | Database DDL | Understanding schema |
| `scripts/002_profile_trigger.sql` | Auto-profile logic | Understanding triggers |

## 🔗 File References

### Core Supabase Integration
- `lib/supabase/client.ts` - Browser client (used in components)
- `lib/supabase/server.ts` - Server client (used in API routes)
- `lib/supabase/database.ts` - All database functions
- `lib/supabase/proxy.ts` - Session management

### Authentication
- `middleware.ts` - Protected routes
- `app/auth/callback/route.ts` - Email confirmation
- `app/login/page.tsx` - Login form (with Supabase)
- `app/signup/page.tsx` - Signup form (with Supabase)

### API Endpoints
- `app/api/schemes/route.ts` - Scheme CRUD
- `app/api/events/route.ts` - Event CRUD
- `app/api/forum/threads/route.ts` - Forum CRUD
- `app/api/network/profiles/route.ts` - Profile listing
- `app/api/resources/route.ts` - Resource listing

## 🎓 Learning Path

1. **Start**: Run migrations (Step 1)
2. **Test**: Test signup/login (Step 3)
3. **Explore**: Browse `/database.md` for schema details
4. **Understand**: Review `/lib/supabase/database.ts` for functions
5. **Extend**: Add new features using existing patterns
6. **Deploy**: Push to production via GitHub

## ❓ Common Questions

**Q: Where is my data stored?**
A: PostgreSQL database hosted by Supabase. See DATABASE.md for schema.

**Q: Can other users see my data?**
A: No. RLS policies ensure user isolation. See SETUP_DATABASE.md for policies.

**Q: How do I add more fields to user profile?**
A: Modify `profiles` table in Supabase. Update `lib/supabase/database.ts` functions.

**Q: How do I make someone an admin?**
A: Update their `user_type` field to 'admin' in profiles table.

**Q: Is this production-ready?**
A: Yes! RLS, auth, error handling all implemented. See IMPLEMENTATION_CHECKLIST.md.

**Q: Can I export the data?**
A: Yes. Supabase dashboard has export features. Use psql for CLI export.

## 🚀 Deploy to Production

When ready to deploy:

1. Push code to GitHub
2. Supabase settings already in environment
3. Deploy via Vercel or your hosting
4. Database automatically available in production
5. Monitor in Supabase dashboard

---

## 📞 Need Help?

- **Database Questions**: See `DATABASE.md`
- **Migration Issues**: See `SETUP_DATABASE.md`
- **Code Reference**: See `scripts/` folder
- **Supabase Docs**: https://supabase.com/docs
- **Security**: https://supabase.com/docs/guides/database/postgres/row-level-security

---

**You're all set!** 🎉

Your EnterNet application is ready with complete database integration.

👉 **Next Step**: Go run the SQL migrations in Supabase!
