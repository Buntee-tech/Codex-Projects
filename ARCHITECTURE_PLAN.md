# E-commerce Analytics SaaS - Technical Architecture Plan

## 1. Project Overview
**Name:** ShopInsight (placeholder)
**Goal:** Free MVP e-commerce analytics platform connecting to multiple e-commerce platforms (Shopify, WooCommerce, Amazon, etc.) via OAuth/API.
**Key Features:**
- Sales Dashboard & Revenue Tracking
- Inventory Forecasting & Stock Alerts
- Marketing ROI Analysis
- Product Performance Insights
- Real-time data sync
- Single user + Team collaboration
- Animated icons, chart-heavy dashboard

## 2. Tech Stack (All Free Tier)

### Frontend
- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS + Shadcn/UI components
- **Charts:** Recharts (best for React, customizable, free)
- **Icons:** Lucide React (animated via CSS/Framer Motion)
- **Animations:** Framer Motion (free)
- **State Management:** React Query (TanStack Query) + Zustand
- **Forms:** React Hook Form + Zod validation

### Backend
- **Database & Auth:** Supabase (PostgreSQL, Auth, Realtime, Edge Functions)
- **API Integrations:** Next.js API Routes + Supabase Edge Functions
- **Real-time:** Supabase Realtime subscriptions
- **Cron Jobs:** Supabase pg_cron or GitHub Actions for data sync

### Deployment
- **Frontend:** Vercel (free tier)
- **Backend:** Supabase (free tier: 500MB DB, 50K MAU, 2GB bandwidth)
- **CI/CD:** GitHub Actions (auto-deploy on push to main)

## 3. Database Schema (Supabase PostgreSQL)

### Tables:
1. **users** (extends Supabase auth.users)
   - id (uuid, PK)
   - email
   - full_name
   - avatar_url
   - created_at

2. **teams**
   - id (uuid, PK)
   - name
   - created_by (user_id)
   - created_at

3. **team_members**
   - team_id (FK)
   - user_id (FK)
   - role (admin/member/viewer)
   - joined_at

4. **stores**
   - id (uuid, PK)
   - team_id (FK)
   - platform (shopify/woocommerce/amazon/etc)
   - store_name
   - oauth_token (encrypted)
   - api_key (encrypted)
   - webhook_secret
   - last_synced_at
   - is_active
   - created_at

5. **products**
   - id (uuid, PK)
   - store_id (FK)
   - external_id (platform product ID)
   - name
   - sku
   - price
   - inventory_quantity
   - inventory_threshold (for alerts)
   - created_at
   - updated_at

6. **orders**
   - id (uuid, PK)
   - store_id (FK)
   - external_id (platform order ID)
   - customer_email
   - total_amount
   - currency
   - status
   - ordered_at
   - synced_at

7. **order_items**
   - id (uuid, PK)
   - order_id (FK)
   - product_id (FK)
   - quantity
   - price_at_purchase

8. **marketing_campaigns**
   - id (uuid, PK)
   - store_id (FK)
   - campaign_name
   - platform (google/facebook/email/etc)
   - spend
   - start_date
   - end_date
   - created_at

9. **inventory_alerts**
   - id (uuid, PK)
   - product_id (FK)
   - threshold
   - current_quantity
   - is_triggered
   - created_at

10. **sync_logs**
    - id (uuid, PK)
    - store_id (FK)
    - sync_type (full/incremental)
    - status (success/failed)
    - records_synced
    - started_at
    - completed_at
    - error_message

### Row Level Security (RLS):
- Users can only access data from their teams
- Team admins can manage team members and stores
- Viewers can only read data

## 4. Authentication Flow
1. User signs up via Email/Password or Google OAuth (Supabase Auth)
2. On first login, user creates/joins a team
3. User connects e-commerce stores via OAuth or API keys
4. Data sync begins (initial full sync, then real-time/webhook updates)

## 5. Key Implementation Steps

### Phase 1: Setup & Authentication
- Initialize Next.js project with TypeScript, Tailwind, Shadcn/UI
- Configure Supabase project (DB schema, RLS policies, Auth providers)
- Implement sign-up/sign-in pages with Google OAuth
- Create team creation/joining flow

### Phase 2: Store Integration
- Build store connection UI (OAuth buttons for Shopify, etc.)
- Create API routes for handling OAuth callbacks
- Implement secure token storage (Supabase Vault or encrypted columns)
- Build initial data sync logic (Edge Functions)

### Phase 3: Dashboard & Analytics
- Create main dashboard layout with navigation
- Implement sales revenue charts (daily, weekly, monthly)
- Build inventory forecasting component with stock alerts
- Add marketing ROI calculator and visualization
- Create product performance tables and charts

### Phase 4: Real-time & Collaboration
- Set up Supabase Realtime subscriptions for live updates
- Implement team member management (invite, roles)
- Add notifications for inventory alerts

### Phase 5: Polish & Deployment
- Add animated icons and micro-interactions
- Implement dark/light mode toggle
- Optimize performance (lazy loading, caching)
- Set up GitHub Actions for auto-deployment to Vercel
- Add comprehensive comments throughout codebase

## 6. Free Tier Limitations & Considerations
- Supabase free tier: 500MB database (~500K orders), 50K monthly active users
- Vercel free tier: 100GB bandwidth/month, unlimited deployments
- Rate limiting for API calls to e-commerce platforms
- Data retention policy (e.g., keep 12 months of historical data)

## 7. Security Measures
- Encrypt all API tokens and OAuth secrets
- Implement RLS on all tables
- Use HTTPS everywhere
- Validate and sanitize all inputs
- Regular security audits

## 8. Future Enhancements (Post-MVP)
- Stripe integration for paid tiers
- Advanced ML-based forecasting
- Custom report builder
- Mobile app
- More e-commerce platform integrations

---
This plan ensures a fully functional, scalable MVP using only free services while maintaining code quality with extensive comments.
