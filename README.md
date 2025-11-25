# Vintage Family Medicine - Website

Next.js website for Vintage Family Medicine and Pediatrics.

## Features

- Mobile-first responsive design
- Bilingual support (English/Spanish)
- All required pages: Home, Services, Scheduling, Patient Portal, Billing, Contact, Resources, About
- Integration ready for Klara (scheduling) and AthenaOne (EMR)
- Contact form with backend API integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.local.example` to `.env.local` and configure:
```bash
cp .env.local.example .env.local
```

3. Update `.env.local` with your URLs:
- `NEXT_PUBLIC_API_URL` - Backend API URL (default: http://localhost:3001)
- `NEXT_PUBLIC_KLARA_URL` - Klara scheduling URL
- `NEXT_PUBLIC_ATHENAONE_URL` - AthenaOne patient portal URL

4. Run development server:
```bash
npm run dev
```

The website will be available at http://localhost:3000

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  ├── page.tsx (Home)
  ├── services/
  ├── scheduling/
  ├── patient-portal/
  ├── billing/
  ├── contact/
  ├── resources/
  └── about/
components/
  ├── Header.tsx
  ├── Footer.tsx
  └── LanguageProvider.tsx
lib/
  └── translations.ts (English/Spanish translations)
```

## Adding Images

Place images in `public/images/`:
- `exam-room.jpg` - Exam room photo
- `waiting-area.jpg` - Waiting area photo
- `staff.jpg` - Staff photo

Update the home page to use these images instead of placeholders.

