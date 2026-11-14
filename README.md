# 47 Agency — Corporate Website Source Code

Production frontend web application for **47 Agency**, combining Digital Marketing, Custom Software Engineering, and AI Solutions.

---

## Project Overview

- **Architecture**: Pure frontend React 19 + TypeScript + Vite single-page application (no backend server required)
- **Styling**: Tailwind CSS v4 (`Plus Jakarta Sans` headings + `DM Sans` body typography on a dark violet design system)
- **Visuals & 3D**: Three.js hero network (`FullScreenHeroNetwork`), custom wireframe 47 emblem (`HeroWireframe47`), domain visuals (`MarketingVisual`, `SoftwareVisual`, `AiVisual`, `ServiceVisuals`, `ConnectedApproachDiagram`)
- **Icons**: Lucide React
- **Routing**: Client-side hash and path routing supporting browser refresh across all top-level and nested pages

---

## Required Runtime & Dependencies

- **Node.js**: v20+ recommended
- **Package Manager**: npm (or compatible Node package manager)

Key dependencies in `package.json`:
- `react`, `react-dom`
- `three`, `lucide-react`, `canvas-confetti`, `motion`
- `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `typescript`

---

## Installation & Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment configuration (optional)**
   No environment variables are required to build or run this website locally or in production. An `.env.example` template is included only for standard platform metadata placeholders.

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Opens on `http://localhost:3000`.

---

## Build & Type-Checking Instructions

Run TypeScript validation and production build:
```bash
npm run lint
npm run build
```

Production static assets are emitted to `dist/`. Preview locally with:
```bash
npm run preview
```

---

## Deployment Instructions

1. Build the static bundle (`npm run build`), which outputs `dist/`.
2. Deploy `dist/` to any static host or CDN (Vercel, Netlify, Cloudflare Pages, GitHub Pages, or Nginx).
3. Configure SPA fallback / history rewrite rules to serve `index.html` for nested paths so direct links and browser refreshes resolve properly.

---

## Forms & Client-Side Behavior

- **Start a Project & Discovery Forms (`src/services/backendIntegration.ts`)**: Runs purely on the client side with field validation, reference ID generation, and `localStorage` confirmation persistence without requiring any backend service or environment variables.
- **Our Work (`src/data/workData.ts`)**: Currently withholds unverified case studies and provides clean frames on `WorkPage.tsx` for inserting verified campaign screenshots later.

---

## Company Details

- **Office Address**: Gökevler Mah, Kristalşehir, Blok 16, Ofis 255, Adnan Kahveci, 34510 Esenyurt/İstanbul
- **Global Reach**: Serving Businesses Worldwide
