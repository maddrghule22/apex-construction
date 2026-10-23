# Sree Samarth Krupa Enterprises — Web Platform & Management OS

> **॥ श्री ॥ ॥ श्रीराम समर्थ ॥ ॥ जय जय रघुवीर समर्थ ॥**

A production-grade, full-stack web application and operations management platform built for **Sree Samarth Krupa Enterprises**:
- 🏗️ **Builders & Developers**: Turnkey residential bungalows, independent houses, commercial complexes, and civil contracting.
- 💧 **Water Tanker & Industrial Suppliers**: Dedicated 24x7 water tanker fleet for construction site curing, concrete mixing, and industrial bulk water supply, alongside raw construction materials.

---

## 🌐 Live Production Links

- **Live Website**: [https://apex-construction-21h.pages.dev](https://apex-construction-21h.pages.dev)
- **Interactive Cost Estimator (₹)**: [https://apex-construction-21h.pages.dev/estimate](https://apex-construction-21h.pages.dev/estimate)
- **Water Tanker Services**: [https://apex-construction-21h.pages.dev/services#tanker](https://apex-construction-21h.pages.dev/services#tanker)
- **GitHub Repository**: [https://github.com/maddrghule22/apex-construction](https://github.com/maddrghule22/apex-construction)

---

## 👥 Proprietors & Direct Contact

- **Senior Proprietor**: ज्ञानेश्वर पवळे (Dnyaneshwar Pawale) — `+91 98502 91262`
- **Managing Partner**: श्रवण पवळे (Shravan Pawale) — `+91 72764 84671`
- **WhatsApp Support**: Direct click-to-chat integration for site inspection bookings and water tanker orders.

---

## 1. System Architecture

- **Frontend**: Next.js 14 App Router, React 18, TypeScript (Strict Mode), Tailwind CSS, Lucide Icons.
- **Backend**: Next.js Server Components, Server-Side Route Handlers, Zod Validation, In-memory Rate Limiting.
- **Database & Persistence**: PostgreSQL via Prisma ORM (decimal-safe money types, relational constraints, foreign keys).
- **Authentication**: JWT signed session tokens (`jose`), `bcryptjs` password hashing, Secure HTTP-only cookies, Role-Based Access Control (`OWNER`, `MANAGER`, `STAFF`).
- **Calculations**: `decimal.js` for financial arithmetic, zero-float precision Indian Rupee (`₹`) cost estimators, and weighted milestone algorithms.
- **Deployment**: Cloudflare Pages (`wrangler pages deploy out`).

---

## 2. Windows Local Setup Guide

### Prerequisites
1. **Node.js LTS** (v20+ or v22+): [Download Node.js](https://nodejs.org/)
2. **Git for Windows**: [Download Git](https://git-scm.com/)
3. **PostgreSQL 15+** (Local installation or hosted database such as Supabase / Neon / Render / AWS RDS)

### Step 1: Open the Project Directory
```powershell
cd "c:\Users\darsh\OneDrive\Desktop\Vorynex Technologies\shravan pawale"
```

### Step 2: Install Project Dependencies
```powershell
npm install
```

### Step 3: Configure Environment Variables
Copy `.env.example` to `.env`:
```powershell
Copy-Item .env.example .env
```

Review the configuration in `.env`:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/construction_db?schema=public"

JWT_SECRET="dev-super-secure-jwt-secret-construction-platform-2025"

INITIAL_OWNER_EMAIL="shravanpawale@gmail.com"
INITIAL_OWNER_PASSWORD="OwnerSecurePassword2025!"
INITIAL_OWNER_NAME="Shravan Pawale"

NEXT_PUBLIC_COMPANY_NAME="Sree Samarth Krupa Enterprises"
NEXT_PUBLIC_COMPANY_PHONE="+91 72764 84671"
NEXT_PUBLIC_COMPANY_SECONDARY_PHONE="+91 98502 91262"
NEXT_PUBLIC_COMPANY_EMAIL="contact@sreesamarthkrupa.com"
NEXT_PUBLIC_WHATSAPP_NUMBER="917276484671"
NEXT_PUBLIC_CURRENCY_SYMBOL="₹"
```

### Step 4: Initialize the Database
```powershell
npx prisma generate
npm run db:push
npm run db:seed
```

### Step 5: Start Development Server
```powershell
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 3. Key Application Features

### A. Public Website
- **Homepage (`/`)**: Auspicious invocation `॥ श्रीराम समर्थ ॥`, dual business overview (Builders & Developers / Water Tanker & Industrial Suppliers), direct call badges to Shravan Pawale and Dnyaneshwar Pawale, interactive estimator, 24x7 tanker booking CTAs.
- **About Us (`/about`)**: Verified business visiting card showcase, proprietor profiles, 15+ years regional experience, direct oversight guarantee.
- **Services (`/services`)**:
  - Dedicated Water Tanker Division (RCC slab curing water, concrete mixing hydration, drinking water tankers, industrial bulk contracts).
  - Residential Villas, Bungalows & Independent Houses.
  - Commercial Complexes & Showrooms.
  - Industrial Material Logistics (aggregates, sand, steel, earthwork).
- **Projects Portfolio (`/projects`)**: Searchable and client-side filterable portfolio.
- **Contact Us (`/contact`)**: Server-validated form with bot honeypot protection and direct WhatsApp dispatch to both proprietors.
- **Interactive Cost Estimator (`/estimate`)**: Indian Rupee (`₹`) calculations with quality tiers (Basic, Standard, Premium, Luxury), scope checkboxes, curing water package option, and instant BOQ summary.

### B. Secure Owner Portal
- **Login (`/login`)**: Secure authentication for company management.
  - Default Owner Email: `shravanpawale@gmail.com`
  - Default Owner Password: `OwnerSecurePassword2025!`
- **Overview Dashboard (`/dashboard`)**: Budgets vs actual expenses, project progress, and recent enquiry activity.
- **Leads & Enquiries (`/dashboard/enquiries`)**: Track incoming leads, convert inquiries into projects, export CSV.
- **Expenses & Procurement (`/dashboard/expenses`)**: Track 14 construction expense categories (cement, steel, masonry, labor, water tanker expenses, equipment rental).
- **Rates & Estimate Settings (`/dashboard/estimates`)**: Adjust civil, finishing, electrical, plumbing rates per sq.ft in Indian Rupees (`₹`).

---

## 4. Building & Deploying to Cloudflare Pages

To create a static production build and deploy via Wrangler:
```powershell
# 1. Build static export
npm run build

# 2. Deploy to Cloudflare Pages
npx wrangler pages deploy out --project-name apex-construction --branch main
```
