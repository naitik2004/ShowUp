# ShowUp 🏅

**Find your game. Find your people.**

**Startup Blueprint & AI Build Specification**

- **Founder:** 4th Sem B.Tech CS+AI
- **Team Size:** 2 Members + AI Stack
- **Market:** India — Urban Youth Sports
- **Version:** v1.0 — MVP Spec

## 1. Product Specification (MVP v1.0)

**MVP Scope:**
1. Create/Join a game group on a map
2. In-app chat with privacy controls
3. Player ratings per sport

### Core Features
- **Game Group System:** Select sport, set location pin, specify max players, skill level, date/time, and auto-expiry.
- **Map & Discovery:** Home screen map showing active games, filter by sport/skill/distance.
- **Rating System:** Post-game ratings for Sportsmanship, Reliability, and Skill.
- **User Profile & Friends:** First name, city, ratings, groups hosted/played. Mutual friends unlock private chat.
- **In-App Chat:** Group chat for accepted members (auto-deletes with group). Private chat for friends.

*(Future v1.5: Turf/Court booking and split payments)*

## 2. Technical Architecture (Website First)

**Frontend — Web App:**
- Framework: Next.js or Vite (React)
- Maps: Google Maps / Mapbox
- State Management: Zustand
- *Note: Mobile app development is planned for a later phase.*

**Backend — Services:**
- Primary Database: Supabase (PostgreSQL)
- Authentication: Supabase Auth (phone OTP + social login)
- Real-time Chat: Supabase Realtime / Stream Chat SDK
- File Storage: Supabase Storage
- Payments (v1.5): Razorpay
- Maps/Geo Queries: PostGIS (built into Supabase)

## 3. Project Structure

```
showup/
 ├── apps/
 │   └── web/              # React Web app
 ├── supabase/             # Supabase Edge Functions & Migrations
 └── docs/                 # PRDs, wireframes, documentation
```

## 4. Next Steps

1. Bootstrap Web App in `apps/web`
2. Generate and apply Supabase migrations
3. Build the Map Screen for Web
4. Test locally and deploy MVP
