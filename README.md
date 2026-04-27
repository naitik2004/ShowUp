# ShowUp 🏅

**Show up. Play.**

**Website Startup Blueprint & AI Build Specification**

- **Type:** Web-First Product
- **Team:** 2 People + AI
- **Market:** India Urban Sports

## 1. Why Website First?
- **No App Store approval:** Ship in hours, not weeks. No Apple/Google gatekeeping.
- **Works on every device:** Users open a link — no install friction.
- **Faster to iterate:** Change a feature, refresh the page. No app version updates.
- **Cheaper to build:** One codebase for desktop + mobile browser.
- **SEO discoverability:** Free organic traffic over time.

## 2. Website Structure

### Part A — Landing Page
Goal: get users to sign up or join the waitlist in under 10 seconds.
- Hero Section (Find a Game Near Me)
- How It Works
- Live Map Preview
- Features & Social Proof
- Waitlist / Sign Up Form

### Part B — Web App
The actual product running in the browser.
- `/login` — Phone OTP login
- `/map` — Full-page map with game pins
- `/groups` — List of your groups
- `/groups/create` — Multi-step group creation
- `/groups/[id]` — Group detail + real-time chat
- `/profile/[id]` — User profiles and ratings
- `/friends` — Friends list & private DMs

## 3. Tech Stack

**Frontend:**
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Map Component: React-Leaflet or Google Maps JS
- State Management: Zustand
- UI Components: shadcn/ui
- Icons & Animations: Lucide React, Framer Motion

**Backend & Services:**
- Database & Auth: Supabase (PostgreSQL + PostGIS, Phone OTP)
- Real-time: Supabase Realtime (Live chat & map)
- File Storage: Supabase Storage
- Payments (v1.5): Razorpay
- Hosting: Vercel

## 4. Project Structure

```
showup/
 ├── app/                  # Next.js App Router (marketing, auth, app, api)
 ├── components/           # UI and Feature Components (map, groups, chat, etc.)
 ├── lib/                  # Supabase clients, hooks, store, utils
 ├── types/                # TypeScript interfaces
 ├── supabase/             # Edge Functions & Migrations
 ├── public/               # Static assets
 └── docs/                 # Documentation
```
