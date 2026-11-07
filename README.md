# C&S Controles y Sistemas — Corporate Website

> Industrial electronics company based in San Nicolás, Argentina. This repo is the public-facing corporate site, built as a modern React SPA and deployed on Netlify.

[![Netlify Status](https://api.netlify.com/api/v1/badges/60f4d398-15e8-4fe3-b071-a72caad221f8/deploy-status)](https://app.netlify.com/sites/stoic-morse-cb2407/deploys)
&nbsp;
[**Live site →**](https://cyselectronics.netlify.app/)

---

## Tech Stack

| Layer | Choice |
|---|---|
| UI | React 18 + TypeScript 5.9 |
| Bundler | Vite 8.x |
| Styling | styled-components v6 |
| Routing | react-router-dom v6 | 
| i18n | LanguageContext |
| Forms | Netlify Forms + reCAPTCHA zero-backend contact form |
| Analytics | Google Analytics + Search Console |
| Hosting | Netlify  |
| Serverless | Netlify Functions sitemap generation (`netlify/functions/`) |
| CI | GitHub Actions fallow code-quality checks |

---

## Architecture

```
src/
├── components/
│   ├── atoms/          # AccentBar, IconBadge, Surface, TabNav
│   ├── molecules/      # AboutSection, CapabilitiesSection, SectionHero, TrustedBySection
│   └── organisms/      # Carousel, ContactForm, NavBar
├── routes/             # Home, Solutions, Contact, Error
├── hooks/              # usePageTitle
├── context/            # LanguageContext
├── config/             # App configuration
├── content/            # en.ts, es.ts — i18n content modules
├── styles/             # colors.ts, global tokens
├── tests/              # App.test.tsx (@testing-library/react)
└── assets/             # SVGs (imported via vite-plugin-svgr)
netlify/
└── functions/          # Serverless functions (sitemap.ts)
```

Atomic design keeps presentational components isolated and replaceable. Pages live in `routes/` and compose organisms — no business logic bleeds into atoms.

---

## Getting Started

```bash
npm install
npm run dev        # Vite dev server  → http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview the build locally
```

---

## Developer Experience

| Tool | Purpose |
|---|---|
| **fallow** | Codebase intelligence — dead code, duplication, complexity, circular deps. Runs in sub-second (Rust-based). `npx fallow` for a full report; `npx fallow dead-code` / `npx fallow dupes` for targeted checks. |
| **CONTEXT.md** | Shared vocabulary for the project — module taxonomy, design-system terms, and conventions. Read this before reviewing or refactoring. |
| **AGENTS.md** | Agent guide — domain context and skills index. `CLAUDE.md` imports it for Claude Code. |

