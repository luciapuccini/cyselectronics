# ADR 0002 — English-only with browser translation

- **Status**: Accepted
- **Date**: 2026-05-07
- **Supersedes**: —

## Context

The codebase shipped with a custom i18n system: a `useTranslation` hook
backed by `LanguageContext`, two locale JSON files (`src/lang/en.json`,
`src/lang/es.json`), a `Bilingual = { en: string; es: string }` type
threaded through `usePageTitle`, and `copy = { en: {...}, es: {...} }`
blocks in [Solutions](../../src/routes/Solutions.tsx),
[Contact](../../src/routes/Contact.tsx), and
[ContactForm](../../src/components/organisms/ContactForm/index.tsx).
Locale was chosen silently by hostname in
[domain.ts](../../src/config/domain.ts) — `.com` → English, `.com.ar` →
Spanish. There was **no UI to switch languages**: `setLocale` was
exported from the context but never called by any component.

The system had drifted into the worst of both worlds:

- Maintenance cost was real. The Solutions copy block was 320+ lines of
  Spanish duplicating 160 lines of English. Four `/contacto` hrefs in
  the Spanish branch diverged from the actual route name (`/contact`)
  and would have produced 404s the moment a Spanish visitor clicked
  through.
- Maintenance benefit was small. The `t()` helper from `useTranslation`
  was never invoked anywhere — only the inline `copy[locale]` pattern
  was. The bundled JSON files were imported but unused.
- The page already declared `<html lang="en">` statically in
  [index.html](../../index.html) line 2 — a hint that the original
  intent was always to let the browser handle Spanish. A comment at
  line 23 made this explicit: _"Keep lang='en' so the browser
  auto-offers Spanish translation for Argentine visitors."_ The custom
  hook was the half-finished other half of a system the comment never
  needed.

The buyer profile (industrial maintenance and steelmaking purchasing
groups) is technical and bilingual-tolerant; Chrome's built-in page
translation is more than adequate for the rare Spanish-only visitor.
The cost of running a parallel bilingual content tree to serve them
natively was not earning its keep.

## Decision

The site renders **English copy only**. Spanish-speaking visitors are
served via the browser's built-in translation feature, enabled by the
static `<html lang="en">` declaration in `index.html`.

Specifically:

1. **No translation machinery in app code.** No `useTranslation` hook,
   no `LanguageContext`, no `useLanguageState`, no `t()` helper, no
   `Bilingual = { en, es }` type in `usePageTitle`, no `copy = { en,
   es }` blocks, no `copy[locale]` indexing.
2. **No locale field on `domainConfig`.** The two-domain split keeps
   `siteName`, `siteUrl`, and `ogImage` (CYS Electronics on `.com`,
   C&S Controles y Sistemas on `.com.ar`) — those are **brand
   identity**, not language. The `locale` and `lang` fields are
   removed.
3. **No locale-prefixed routes.** Routes are `/`, `/solutions`,
   `/contact`. The Spanish-style `/contacto` appears nowhere.
4. **No app-level writing of `document.documentElement.lang`.** The
   static `<html lang="en">` in `index.html` is the single source of
   truth. `usePageTitle` no longer rewrites it.
5. **The runtime `<head>` patch on `.com.ar` swaps brand only.**
   Description, OG title, and OG description on the `.com.ar` mirror
   are English strings carrying the C&S brand name (e.g. "C&S
   Controles y Sistemas | Industrial Electronics since 1991"). The
   patch script's purpose is brand differentiation, not localisation.

## Consequences

### Positive

- **Locality.** UI strings live next to the components that render
  them, with no indirection through a context, hook, or JSON file.
  Editing a label is one change in one place.
- **Smaller surface, fewer dead modules.** `useTranslation.ts`,
  `lang/en.json`, `lang/es.json`, the `Bilingual` type, and ~470 lines
  of duplicate Spanish copy are gone. The `Solutions.tsx` `copy`
  object dropped from ~320 lines per locale to a single ~160-line
  English object.
- **No broken Spanish hrefs.** Four `/contacto` links that would have
  404'd are now `/contact`. Locale-broken routes can't reappear because
  the locale switch can't reappear.
- **Browser translation is consistent.** Argentine visitors on
  `.com.ar` see "Translate this page" the same way visitors on `.com`
  do — one UX, not two.
- **Brand differentiation is preserved.** `cyselectronics.com` still
  shows "CYS Electronics" identity; `controlesysistemas.com.ar` still
  shows "C&S Controles y Sistemas." The legal/commercial brand on the
  Argentine domain is unchanged.

### Negative / costs accepted

- **No native Spanish SEO.** Search engines will not index Spanish
  versions of pages on the `.com.ar` domain. Spanish-language search
  queries will surface English content via Google's auto-translation,
  which is a weaker signal than native Spanish content. We accept this
  trade-off because the buyer is a B2B industrial customer reachable
  through direct outreach and existing relationships, not Spanish-
  language SEO.
- **No UI control over language.** Users who prefer Spanish but have
  disabled their browser's translation feature get English with no
  workaround. We judge this population to be very small and the
  remediation cost (re-introducing a custom switcher, plus all the
  copy maintenance it implies) far higher than the support cost of
  occasionally pointing them at "Translate this page."
- **Brand-name-in-English-sentence has minor awkwardness.** The
  `.com.ar` OG description reads "C&S Controles y Sistemas — industrial
  electronics design, development, and maintenance since 1991." Mixing
  the Spanish-language brand into an English sentence is slightly
  jarring but legible; we prefer it to translating the brand name.

## Implementation notes

The branch that landed this decision touched:

- Deleted: `src/hooks/useTranslation.ts`, `src/lang/en.json`,
  `src/lang/es.json`, `src/lang/` directory.
- Modified:
  - `src/index.tsx` — dropped the `LanguageContext.Provider` wrapper
    and the `useLanguageState`/`domainConfig` imports.
  - `src/hooks/usePageTitle.ts` — dropped the `Bilingual` type and the
    `resolve()` helper; signature is now
    `usePageTitle(title?: string, description?: string)`. No longer
    writes `document.documentElement.lang`.
  - `src/config/domain.ts` — dropped `locale` and `lang` from
    `DomainConfig` and both literal branches.
  - `src/routes/Solutions.tsx` — collapsed bilingual `copy` to a
    single English object; removed `useTranslation` consumer; replaced
    four `/contacto` hrefs with `/contact`. Renamed `LocaleCopy` →
    `Copy`.
  - `src/routes/Contact.tsx` — collapsed bilingual `copy`; removed
    `useTranslation` consumer.
  - `src/components/organisms/ContactForm/index.tsx` — same.
  - `index.html` — runtime `<head>` patch on `.com.ar` now swaps brand
    name + canonical URL only. All text copy is English.

Verification gates (must all pass):

```sh
grep -rn "useTranslation\|useLanguageState\|LanguageContext" src/  # empty
grep -rn "/contacto" src/                                          # empty
grep -rEn "\b(en|es):\s*\{" src/routes src/components              # empty
grep -rn "Bilingual\|copy\[locale\]" src/                          # empty
npx tsc --noEmit                                                   # no new errors
npm run build                                                      # passes
```
