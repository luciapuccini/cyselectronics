# Project context

C&S Controles y Sistemas — corporate site for an industrial-electronics firm
(Argentina, est. 1991). React 18 + TypeScript 5.9 + Vite + styled-components,
hosted on Netlify. The site is content-light and visually load-bearing: the
layout *is* the brand.

This document is the shared vocabulary for code review, architecture work,
and AI-assisted refactoring. ADRs in [docs/adr/](docs/adr/) record decisions
that should not be re-litigated.

## Module taxonomy

The codebase follows atomic design under `src/components/`:

- **atoms/** — visual primitives. No business meaning. One concern each
  (`Surface`, `Section`, `AccentBar`, `IconBadge`, `TabNav`).
- **molecules/** — compositions of atoms with a shape but no page logic
  (`SectionHero`, `TrustedBySection`, `CapabilitiesSection`, `AboutSection`).
  Section molecules own their copy and styled-components and are dropped
  into routes by name; routes do not configure them.
- **organisms/** — substantial, page-level compositions with their own
  state and copy (`NavBar`, `Carousel`, `ContactForm`).
- **routes/** — `src/routes/`. Pages compose organisms/molecules/atoms.
  Routes may define **inline styled-components** for one-off positioning,
  but visual primitives must come from the atomic layers — never redefined.

## Design-system vocabulary

These terms refer to specific files; use them by name in PRs and reviews.

### Layout primitives

- **Surface** ([src/components/atoms/Surface/index.tsx](src/components/atoms/Surface/index.tsx))
  — base card frame. White card-bg, 1px border, sharp (`border-radius: 0`),
  no shadow. `Card` and `Panel` extend it with padding presets.
- **Section** ([src/components/atoms/Section/index.tsx](src/components/atoms/Section/index.tsx))
  — full-width page section with a top border and the page background.
  Comes with `SectionContent`, `SectionHeader`, `SectionTitle`, `SectionEyebrow`.
- **AccentBar** ([src/components/atoms/AccentBar/index.tsx](src/components/atoms/AccentBar/index.tsx))
  — short horizontal accent line used next to eyebrow labels and inside the
  Carousel text panel. Props: `$width`, `$height`, `$color`.
- **IconBadge** ([src/components/atoms/IconBadge/index.tsx](src/components/atoms/IconBadge/index.tsx))
  — 40×40 container for inline icons next to text rows. The single
  layout-system exception that keeps `--radius-md`. Use only for
  decorative icon affordances, never as a card.

### Card composition

Every card in the codebase uses the same primitive: `Surface` (or its
padded variant `Card`) from [atoms/Surface](src/components/atoms/Surface/index.tsx).
White card background, 1px border on the card itself, sharp corners, no
shadow. Hover state, when present, shifts `border-color` toward `--accent`.

For grids of cards, use a normal CSS grid with a real `gap`. Do not use
the "paint the 1px gap as a divider line" trick — it was tried and
removed (see [ADR 0001](docs/adr/0001-sharp-layout-system.md)).

### Section hero

`SectionHero` ([src/components/molecules/SectionHero/index.tsx](src/components/molecules/SectionHero/index.tsx))
is the canonical eyebrow + accent bar + title + lede composition. Used at
the top of Contact and Solutions pages. Pass `titleAs="h2"` for in-page
section heroes.

## Visual rules (locked-in, see ADR 0001)

- **R1 — Sharp by default.** `border-radius: 0` on every layouting component
  (Section, Card, Panel, hero blocks, image panels, CTA inners) **and every
  button**. The only legal radius is `--radius-md` on `IconBadge`.
- **R2 — One background.** The single `background-image` effect in the app
  is the `radial-gradient(circle, …)` `GridBg` mounted in
  [src/App.tsx](src/App.tsx). No per-section grid overlays. No secondary
  radial gradients. Image overlays *on photographs* (Carousel slide
  darkening, About image fade) are content gradients, not page backgrounds,
  and remain.
- **R3 — Atoms first.** A shape repeating ≥2 times moves into atoms or
  molecules. Routes import primitives; they don't redefine them.
- **R4 — Surface everywhere.** Every card — grouped or standalone — uses
  `Surface` (or `Card`). Card grids are normal CSS grids with a real
  `gap`. No alternative card vocabularies.

## Tokens

- **Color, spacing, typography**: [src/styles/tokens.css](src/styles/tokens.css)
  is the source of truth. The mirror in [src/styles/tokens.ts](src/styles/tokens.ts)
  exposes them as `var(--…)` strings for styled-components template literals.
- **Radius**: only `--radius-md` exists. `--radius-lg`, `--radius-xl`,
  `--radius-sm`, and the legacy `--radius` alias were removed in
  [docs/adr/0001-sharp-layout-system.md](docs/adr/0001-sharp-layout-system.md).
  If a future component needs a non-`--radius-md` corner, it is breaking R1
  and needs an ADR amendment, not a token addition.

## Page layout topology

Defined in [src/App.tsx](src/App.tsx):

- `AppShell` (flex column, `min-height: 100vh`)
  - `GridBg` (fixed, `z-index: -1`, the single radial-gradient dot field)
  - `CustomNavBar` (sticky)
  - One of:
    - `FullWidthLayout` for `/` (Home gets the carousel and full-bleed
      sections)
    - `PageLayout` → `PageContainer` (centered, `max-width: var(--container-max)`)
      for `/solutions`, `/contact`, and the 404
  - `Footer`

## Internationalisation — bilingual EN/ES via LanguageContext

The site ships full English and Spanish copy through a `LanguageContext`
provider. Locale is persisted in `localStorage` (`cys-locale`) and
defaults to `"en"`.

### Architecture

- **Content modules** — [src/content/en.ts](src/content/en.ts) and
  [src/content/es.ts](src/content/es.ts) each export a `SiteContent`
  object. The type is defined in
  [src/content/types.ts](src/content/types.ts).
- **LanguageContext** —
  [src/context/LanguageContext.tsx](src/context/LanguageContext.tsx)
  provides `{ content, locale, setLocale }`. Components call
  `useLanguage()` to read the current content tree.
- **LanguageProvider** wraps the app in
  [src/index.tsx](src/index.tsx).

### Conventions

- All user-facing strings live in the content modules, not inline in
  components. Components destructure from `useLanguage().content`.
- Routes are English-only: `/`, `/solutions`, `/contact`. No
  locale-prefixed routes (`/es/contact`, `/contacto`).
- Brand identity (`siteName`, `siteUrl`, `ogImage`) varies by domain
  in [src/config/domain.ts](src/config/domain.ts), not by locale.

