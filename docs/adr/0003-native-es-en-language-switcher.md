# ADR 0003 — Native ES/EN language switcher

- **Status**: Accepted
- **Date**: 2026-05-08
- **Supersedes**: [ADR 0002 — English-only with browser translation](./0002-english-only-browser-translation.md)

## Context

ADR 0002 chose to rely on the browser's built-in translation feature
rather than maintain a custom bilingual content tree. That decision was
sound at the time — the previous i18n system had drifted badly (broken
Spanish hrefs, dead hooks, 320+ lines of duplicated copy). Removing it
was the right cleanup.

However, the business requirement has since shifted. The site targets
Argentine industrial buyers whose primary language is Spanish. Browser
translation offers no guarantee of consistency, no control over
terminology (industrial-automation jargon translates poorly
automatically), and no brand voice in the Spanish version. A native
switcher visible in the navbar gives the business full control over the
Spanish text and removes the dependency on the visitor's browser
settings or Chrome-specific UX.

## Decision

Re-introduce a controlled ES/EN content system, designed to avoid the
problems that sank the original one:

1. **Content is typed TypeScript, not JSON.** A single `SiteContent`
   interface in `src/content/types.ts` is the source of truth for every
   translatable string. `en.ts` and `es.ts` are full implementations of
   that interface. The compiler rejects any translation that is
   structurally incomplete.

2. **No prop drilling.** A `LanguageProvider` wrapping the app exposes
   `{ content, locale, setLocale }` via `useLanguage()`. Every component
   reads what it needs directly — no passing of `copy` objects through
   props.

3. **Non-translatable assets stay out of content files.** Product
   images, partner logos, and SVG icons remain as component-level
   constants (`PRODUCT_IMAGES`, `CAPABILITY_ICONS`, `PARTNERS`). Only
   strings are in `en.ts` / `es.ts`.

4. **A UI switcher in the navbar.** A `LanguageSwitcher` component
   renders `ES · EN` in mono font. Clicking the inactive locale calls
   `setLocale`. Preference is persisted to `localStorage` under the key
   `cys-locale`. Default is `'en'`.

5. **`footer.copyright` is a function**, not a string, so the dynamic
   year is locale-safe: `(year) => \`© \${year} C&S Controles y Sistemas\``
   in both locales.

6. **No broken routes.** The locale key in `localStorage` drives UI
   only; route paths remain `/`, `/solutions`, `/contact` in both
   languages.

## File structure

```
src/content/
  types.ts    — SiteContent interface + all nested types
  en.ts       — full English content object
  es.ts       — full Spanish content object
  index.ts    — barrel re-export

src/context/
  LanguageContext.tsx — LanguageProvider + useLanguage
```

## Consequences

### Positive

- Native Spanish copy under full editorial control — correct terminology
  for SIDERURGIA, AUTOMATIZACIÓN, MANTENIMIENTO contexts.
- Type-safety guarantees the Spanish content object is structurally
  complete. A missing key is a build error.
- `useLanguage()` replaces every previous pattern (`copy` objects, prop
  drilling, `copy[locale]` indexing). Components are simpler.
- Locale persists across page loads; toggling is instant with no network
  round-trip.
- The navbar switcher is discoverable and locale-neutral — it works
  whether or not the visitor's browser offers translation.

### Negative / costs accepted

- **Maintenance of two content objects.** Every new string must be added
  to both `en.ts` and `es.ts`. The TypeScript compiler enforces
  completeness, but the translation itself is a manual step. This is the
  fundamental trade-off of any native i18n system; we accept it because
  editorial control over the Spanish copy outweighs the overhead.
- **Bundle size increases slightly.** Both locale objects are bundled
  (only one is active at runtime, but tree-shaking does not eliminate
  unused locale data in this setup). For a corporate brochure site this
  is not a concern.

## Verification

```sh
# Type check — no new errors (vite.config.ts errors are pre-existing)
npx tsc --noEmit

# No leftover hardcoded copy objects in routes/components
grep -rn "^const copy = " src/routes src/components     # empty
grep -rn "^const CAPABILITIES" src/                     # empty

# Context is wired everywhere
grep -rn "useLanguage" src/                             # all updated files

# Build passes
npm run build
```

Manual verification:

- Toggle ES/EN in navbar — all visible text switches on the current page
- Navigate to Solutions — all section copy switches
- Reload page — locale persists (localStorage `cys-locale`)
- Mobile: open drawer, toggle locale, verify drawer content updates
- Contact form: submit with empty fields — error messages appear in
  chosen locale
