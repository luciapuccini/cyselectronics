# C&S Controles y Sistemas — Corporate Website

> Industrial electronics company based in San Nicolás, Argentina. This repo is the public-facing corporate site, built as a modern React SPA and deployed on Netlify.

[![Netlify Status](https://api.netlify.com/api/v1/badges/60f4d398-15e8-4fe3-b071-a72caad221f8/deploy-status)](https://app.netlify.com/sites/stoic-morse-cb2407/deploys)
&nbsp;
[**Live site →**](https://cyselectronics.netlify.app/)

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| UI | React 18 + TypeScript 5 | `createRoot`, strict mode |
| Bundler | Vite 8 | replaces CRA; ~211 KB JS bundle |
| Styling | styled-components v6 | CSS-in-JS throughout, no CSS modules |
| Routing | react-router-dom v6 | `Routes`/`Route`/`element` API |
| i18n | Custom hook (`useTranslation`) | `LanguageContext` + ES/EN JSON files |
| Forms | Netlify Forms + reCAPTCHA | zero-backend contact form |
| Analytics | Google Analytics + Search Console | |
| Hosting | Netlify | SPA redirect via `public/_redirects` |

---

## Architecture

```
src/
├── components/
│   ├── atoms/          # AccentBar, IconBadge, Surface, TabNav
│   ├── molecules/      # AboutSection, CapabilitiesSection, SectionHero, TrustedBySection
│   └── organisms/      # Carousel, ContactForm, NavBar
├── routes/             # Home, Solutions, Contact, Error
├── hooks/              # useTranslation
├── context/            # LanguageContext
├── styles/             # colors.ts, global tokens
├── lang/               # en.json, es.json
└── assets/             # SVGs (imported via vite-plugin-svgr)
```

Atomic design keeps presentational components isolated and replaceable. Pages live in `routes/` and compose organisms — no business logic bleeds into atoms.

---

## Getting Started

```bash
npm install
npm run dev        # Vite dev server  → http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview the build locally
npx tsc --noEmit   # Type-check (no emit)
```

---

## Developer Experience

| Tool | Purpose |
|---|---|
| **fallow** | Codebase intelligence — dead code, duplication, complexity, circular deps. Runs in sub-second (Rust-based). `npx fallow` for a full report; `npx fallow dead-code` / `npx fallow dupes` for targeted checks. |
| **CONTEXT.md** | Shared vocabulary for the project — module taxonomy, design-system terms, and conventions. Read this before reviewing or refactoring. |
| **docs/adr/** | Architecture Decision Records. Testing matt pocock skills|
| **AGENTS.md** | AI agent skill configuration — issue tracker, triage labels, domain docs. |

