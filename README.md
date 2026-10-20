# Construction Company Platform: Web & Management Dashboard

A production-grade, full-stack web application for residential and commercial general contractors. Features a public marketing website with an interactive construction cost estimator and lead capture, paired with a secure owner dashboard for project milestone tracking, budget utilization, expense logging, and business reports.

---

## 1. System Architecture

- **Frontend**: Next.js 14 App Router, React 18, TypeScript (Strict Mode), Tailwind CSS, Lucide Icons.
- **Backend**: Next.js Server Components, Server-Side Route Handlers, Zod Validation, In-memory Rate Limiting.
- **Database & Persistence**: PostgreSQL via Prisma ORM (decimal-safe money types, relational constraints, foreign keys).
- **Authentication**: JWT signed session tokens (`jose`), `bcryptjs` password hashing, Secure HTTP-only cookies, Role-Based Access Control (`OWNER`, `MANAGER`, `STAFF`).
- **Calculations**: `decimal.js` for financial arithmetic, zero-float precision cost estimators, and weighted milestone algorithms.
- **Testing**: Vitest for unit & integration testing.

---

## 2. Windows Local Setup Guide

### Prerequisites
1. **Node.js LTS** (v20+ or v22+): [Download Node.js](https://nodejs.org/)
2. **Git for Windows**: [Download Git](https://git-scm.com/)
3. **Cursor** or **VS Code**
4. **PostgreSQL 15+** (Local installation or hosted database such as Supabase / Neon / Render / AWS RDS)

### Step 1: Open the Project Directory
In PowerShell or Windows Terminal:
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

Review and adjust the configuration in `.env`:
```env
# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# PostgreSQL Connection String
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/construction_db?schema=public"

# Auth Secret (Minimum 32 random characters in production)
JWT_SECRET="dev-super-secure-jwt-secret-construction-platform-2025"

# Initial Owner Credentials for Login & Seeding
INITIAL_OWNER_EMAIL="owner@constructioncompany.com"
INITIAL_OWNER_PASSWORD="OwnerSecurePassword2025!"
INITIAL_OWNER_NAME="Principal Contractor"

# Configurable Business Defaults
NEXT_PUBLIC_COMPANY_NAME="Apex Build & Infrastructure"
NEXT_PUBLIC_COMPANY_PHONE="+1 (555) 234-5678"
NEXT_PUBLIC_COMPANY_EMAIL="contact@apexbuildinfra.com"
NEXT_PUBLIC_WHATSAPP_NUMBER="15552345678"
NEXT_PUBLIC_CURRENCY_SYMBOL="$"
```

### Step 4: Initialize the Database
Generate the Prisma client:
```powershell
npx prisma generate
```

Push the database schema to PostgreSQL:
```powershell
npm run db:push
```

Seed the demonstration database (Rate profiles, sample projects, milestones, expenses, company settings):
```powershell
npm run db:seed
```

### Step 5: Start Development Server
```powershell
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 3. Running Automated Tests & Type Checking

To execute the test suite (Vitest):
```powershell
npm test
```

To run a production build:
```powershell
npm run build
```

---

## 4. Key Application Modules & Workflows

### A. Public Website
- **Homepage (`/`)**: Hero section, core statistics, residential/commercial service categories, featured projects, 6-step construction process, engineering safety standards, interactive cost estimator, sample testimonials, FAQs, and WhatsApp banner.
- **About Us (`/about`)**: Leadership profile, mission/vision, 10-year company timeline, workplace safety standards, and QA protocols.
- **Services (`/services`)**: Residential villas, multi-storey apartments, commercial corporate offices, retail complexes, and pre-engineered industrial warehouses.
- **Project Portfolio (`/projects`)**: Searchable and filterable portfolio by category (Residential, Commercial, Industrial, Renovation).
- **Project Detail View (`/projects/[slug]`)**: Technical case studies, structural features, timeline, milestone progress, and direct inquiry CTA (strictly redacts confidential owner finances).
- **Contact Us (`/contact`)**: Server-validated form with bot honeypot protection, rate limiting, and direct PostgreSQL persistence.
- **Interactive Cost Estimator (`/estimate`)**: Dynamic built-up area slider, floors, quality tiers (Basic, Standard, Premium, Luxury), scope checkboxes, and instant itemized Bill of Quantities with "Submit as Enquiry" workflow.

### B. Secure Owner Portal
- **Login (`/login`)**: Secure authentication with generic error messaging to avoid user enumeration.
  - Default Owner Email: `owner@constructioncompany.com`
  - Default Owner Password: `OwnerSecurePassword2025!`
- **Overview Dashboard (`/dashboard`)**: Financial health cards, budgets vs actual expenses, monthly pipeline trend, spending by category, and recent activity logs.
- **Project Management (`/dashboard/projects`)**: Create projects, track progress, manage milestones, record delayed task reasons, and monitor budget utilization.
- **Lead & Enquiry Pipeline (`/dashboard/enquiries`)**: Track incoming leads, filter by status, record interaction history (Calls, WhatsApp, Site Visits), and convert inquiries into projects with 1-click customer linkage. CSV export included.
- **Expenses & Procurement (`/dashboard/expenses`)**: Track 14 construction expense categories (cement, steel, masonry, labor, equipment rental, finishing). Filter by project and export CSV vouchers.
- **Configurable Rate Engine (`/dashboard/estimates`)**: Adjust civil, finishing, electrical, plumbing, and waterproofing rates per square foot, quality multipliers, and contingency buffers without changing code.
- **Executive Reports (`/dashboard/reports`)**: Budget variance reports, category spending charts, lead attribution analytics, and CSV downloads.
- **Company Settings (`/dashboard/settings`)**: Dynamically edit company name, contact phone, email, office address, WhatsApp business number, and currency symbol.

---

## 5. Security & Privacy Safeguards

1. **Authentication**: Signed HTTP-only session cookies with HS256 JWT, SameSite lax configuration, and password hashing using `bcryptjs` with salt rounds.
2. **Rate Limiting**: In-memory token bucket rate limiting on `/api/auth/login` and `/api/enquiries` to prevent brute force and spam.
3. **Bot Prevention**: Invisible honeypot field (`websiteUrlHoneypot`) on public contact and estimate forms.
4. **Data Isolation**: Public project detail pages explicitly redact financial budgets, actual expense vouchers, customer contacts, and internal site notes.
5. **Precision Money Types**: All budget, expense, and rate calculations use `Decimal(14, 2)` and `decimal.js` to eliminate JavaScript floating-point rounding errors.

---

## 6. PostgreSQL Backup & Production Deployment

### Database Backup (pg_dump)
To generate an automated snapshot of the production database:
```powershell
pg_dump -U postgres -h localhost -d construction_db -F c -b -v -f "construction_db_backup_$(Get-Date -Format 'yyyyMMdd_HHmmss').dump"
```

To restore from a backup:
```powershell
pg_restore -U postgres -h localhost -d construction_db -v "construction_db_backup_YYYYMMDD_HHMMSS.dump"
```

### Production Deployment (e.g. Vercel, Render, Railway, AWS ECS)
1. Provision a PostgreSQL instance (e.g., Supabase, Neon, AWS RDS, or Render PostgreSQL).
2. Set `DATABASE_URL` and generate a high-entropy `JWT_SECRET` in production environment variables:
   ```bash
   JWT_SECRET=$(openssl rand -base64 32)
   ```
3. Run `npm run db:push` and `npm run db:seed`.
4. Deploy the Next.js production build (`npm run build` followed by `npm start`).
