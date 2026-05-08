# ADR 0001 — Sharp layout system

- **Status**: Accepted
- **Date**: 2026-05-07
- **Supersedes**: —

## Context

The site had drifted into two parallel visual vocabularies:

- a **sharp** vocabulary in `atoms/Surface`, `atoms/Section`, and the
  `CapabilityCard` on Home — `border-radius: 0`, no shadow, optional 1px
  border or grid-painted lines, page-background card surfaces;
- a **rounded** vocabulary across `Solutions` (`ProductCardRoot`,
  `ServiceCardRoot`, `ModeCard`, `ServiceSubsectionItem`, `CardButton`,
  `CtaInner`), `Contact` (`InfoCard`, `MapCard`), the `ContactForm` card,
  the `Carousel TextPanel`, and the `NavBar MobileToggle` — using
  `--radius-md` / `--radius-lg` / `--radius-xl`, with `box-shadow`s.

On top of this, four route files (`Home.tsx`, `Solutions.tsx`) re-implemented
near-identical grid/dot pattern overlays as `::before` pseudo-elements that
fought the single `radial-gradient(circle, …)` `GridBg` mounted at the top
of `App.tsx`. A second, conflicting `radial-gradient` (`CtaPattern`) lived
on the dark CTA inside `Solutions`.

The codebase is a brand surface for an industrial-electronics firm; the
rounded/dropshadowed pieces read as "consumer SaaS" and undermined that
positioning. We also paid a real cost: every new card had a coin-flip
between two systems, and the duplicated overlays meant any background
tweak required edits in five places.

## Decision

Adopt a single sharp layout system, governed by four rules. New code that
breaks any of these requires an ADR amendment, not a one-off override.

### R1 — Sharp by default

Every layouting component **and every button** uses `border-radius: 0`.
"Layouting" means anything composing space — `Section`, `Card`, `Panel`,
text panels, hero blocks, image panels, CTA inner containers, form
wrappers. Buttons (CTA buttons, the mobile menu toggle, form submit)
follow the same rule.

The single permitted exception is **icon badges ≤40×40** that sit inline
next to text rows — `IconBadge` keeps `--radius-md` because flattening it
to a square swaps a recognised "icon affordance" cue for visual noise. No
other component may use a non-zero radius.

The radius tokens were trimmed to match: `--radius-lg`, `--radius-xl`,
`--radius-sm`, and the legacy `--radius` alias were removed; only
`--radius-md` remains.

### R2 — One background

The site has exactly one `background-image` effect: `GridBg` in
[src/App.tsx](../../src/App.tsx#L57-L73), a fixed-position
`radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)`
faded out by a `mask-image`. Per-section grid overlays (`::before`
pseudo-elements with `linear-gradient` patterns) are forbidden, as is
any second `radial-gradient` on accent or dark surfaces.

**Content gradients on photographs are not page backgrounds** and are
allowed: the Carousel slide darkening (`linear-gradient(135deg, …)` on
top of the slide image) and the About image fade overlay both stay.

### R3 — Atoms first

Any visual shape that repeats ≥2 times is extracted to `atoms/` or
`molecules/`. Routes import primitives; they do not re-define them.
Inline styled-components in route files are reserved for one-off
positioning, ordering, or page-specific composition.

### R4 — Surface everywhere (one card mode)

Every card uses `atoms/Surface` (or its padded variant `Card`). White
card background, 1px border on the card itself, sharp corners, no
shadow. Hover state, when present, shifts `border-color` toward
`--accent`.

Card grids are ordinary CSS grids with a real `gap` (typically
`var(--space-4)`). The "paint the 1px grid gap as a divider line" trick
(`gap: 1px; background: var(--border); border: 1px solid var(--border)`)
is **forbidden** — see "Why one mode, not two" below.

This applies whether the cards are grouped (a row of capabilities, a
service grid) or standalone (the contact form, the embedded map, an
info card).

### Why one mode, not two

An earlier draft of this ADR codified two modes: a "grid card" using
the gap-as-lines trick for grouped cards, and `Surface` for standalone
cards. That was rejected once it hit real code:

- The gap-as-lines pattern is non-obvious. A reader sees
  `gap: 1px; background: var(--border)` and has to mentally simulate
  to understand the cells are painted on top with `var(--background)`,
  letting the parent's color show through the gaps. It is clever, not
  clear.
- It forced two unrelated rules at every card site: "is this card
  grouped?" and "what background does it use?" Mistakes were silent —
  a `Surface` placed inside the painted-gap grid produced doubled
  borders that did not visually fail loudly enough to catch in review.
- The leverage gain was small: only Home had genuinely grouped cards.
  Solutions and Contact already used standalone cards. Forcing Home
  into a different mode for a single visual flourish was not worth the
  cognitive overhead at every other card site.

One mode means one decision, one primitive, one place to change.

## Consequences

### Positive

- **Locality.** The card vocabulary now lives in three places (`Surface`,
  `CardGrid`, `GridCard`) instead of being re-derived in every route file.
  A future radius change is one edit, not eleven.
- **Single background seam.** Background changes happen in `App.tsx`. No
  hunting through `::before` pseudo-elements across four files.
- **Build/runtime cleanup.** Removing the duplicated overlay markup and
  three radius tokens shaved a small amount off the bundle and removed
  ~120 lines of dead styling logic.
- **Brand fit.** The interface now reads as engineering-document-like —
  appropriate for the buyer (industrial maintenance / steelmaking).

### Negative / costs accepted

- **Token surface narrowed.** Designers reaching for `--radius-lg` no
  longer have it. If a future design genuinely needs a non-`--radius-md`
  corner, the path is amend-the-ADR, not add-a-token.
- **Carousel TextPanel lost its softness.** The blurred panel on the
  carousel previously used `--radius-xl` to soften where it floated over
  the image. We chose consistency over that softness. Decision logged
  here so it is not re-litigated.

## Implementation notes

The branch that landed this decision touched:

- New: `src/components/atoms/AccentBar/`, `src/components/atoms/IconBadge/`,
  `src/components/molecules/SectionHero/`.
- Modified: `src/routes/Home.tsx`, `src/routes/Solutions.tsx`,
  `src/routes/Contact.tsx`, `src/components/organisms/ContactForm/index.tsx`,
  `src/components/organisms/Carousel/index.tsx`,
  `src/components/organisms/NavBar/NavBar.tsx`, `src/index.css`,
  `src/styles/tokens.css`, `src/styles/tokens.ts`.
- Removed: `.bg-grid` legacy class in `src/index.css` (unused dead code),
  `--radius-sm` / `--radius-lg` / `--radius-xl` / `--radius` legacy alias.

Verification was three grep gates plus `npm run build`:

```sh
grep -rn "border-radius" src/   # only Surface, IconBadge, Carousel dots
grep -rn "radial-gradient" src/ # only App.tsx
grep -rn "::before" src/routes/ # empty
grep -rn "gap: 1px" src/        # empty (no gap-as-lines)
npm run build                   # passes
```
