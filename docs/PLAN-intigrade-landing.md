# PLAN-intigrade-landing

## Context
Convert a raw HTML/Tailwind prototype (`code.html`) into a production-ready React landing page using Vite. The goal is to maintain high visual fidelity while improving maintainability and performance.

## Socratic Gate
1.  **Architecture**: Vite vs Next.js? -> Selected **Vite** for simplicity and speed for a single-page landing site, as requested "Vite or Next.js".
2.  **State Management**: useState vs Context? -> **useState** is sufficient.
3.  **Animations**: CSS vs Framer Motion? -> **Framer Motion** for smoother, controllable interactions as requested.
4.  **Icons**: Material Icons vs Lucide? -> **Lucide React** for modern React ecosystem compatibility.

## Task Breakdown

### Phase 1: Project Initialization
- Create Vite project with React and TypeScript.
- Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- Initialize Tailwind CSS.
- Configure fonts (Playfair Display, Inter) in `index.css`.

### Phase 2: Component Implementation
- **Navbar.tsx**: Sticky, glassmorphism, responsive menu.
- **Hero.tsx**: Complex animated background, floating elements using `framer-motion`, interactive paper graphic.
- **ProcessWaterfall.tsx**: Scroll-triggered animations using `whileInView`, connecting lines.
- **Features.tsx**: Grid layout, data-driven content.
- **Testimonials.tsx**: Card layout.
- **CTA.tsx**: Call to action section.
- **Footer.tsx**: Simple footer with links.

### Phase 3: Assembly & Refinement
- **App.tsx**: Route setup (Home, Process) using `react-router-dom`.
- **Global Styles**: Base styles, utility classes, custom keyframes porting to Framer Motion variants.
- **Responsiveness Check**: Ensure mobile, tablet, and desktop layouts match the design.

## Agent Assignments
- **Frontend Specialist**: All tasks.

## Verification Checklist
- [ ] Project builds successfully (`npm run build`).
- [ ] Dev server runs without errors (`npm run dev`).
- [ ] All animations play smoothly.
- [ ] Responsive design works on mobile and desktop.
- [ ] No console errors.
- [ ] Lighthouse score > 90 (Performance, Accessibility, SEO).
