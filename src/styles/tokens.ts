/**
 * Typed runtime mirror of tokens.css. Each value is a `var(--…)` reference
 * for use inside styled-components template literals. Use `tokens.raw.*`
 * when a literal value is required (canvas APIs, third-party libs, @media).
 */
export const tokens = {
  colors: {
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    card: 'var(--card)',
    cardForeground: 'var(--card-foreground)',
    primary: 'var(--primary)',
    primaryForeground: 'var(--primary-foreground)',
    secondary: 'var(--secondary)',
    secondaryForeground: 'var(--secondary-foreground)',
    accent: 'var(--accent)',
    accentForeground: 'var(--accent-foreground)',
    muted: 'var(--muted)',
    mutedForeground: 'var(--muted-foreground)',
    border: 'var(--border)',
    ring: 'var(--ring)',
    overlayLight40: 'var(--color-overlay-light-40)',
    overlayLight65: 'var(--color-overlay-light-65)',
    overlayLight85: 'var(--color-overlay-light-85)',
    overlayLight90: 'var(--color-overlay-light-90)',
    overlayLight92: 'var(--color-overlay-light-92)',
    overlayLight96: 'var(--color-overlay-light-96)',
    overlayDark15: 'var(--color-overlay-dark-15)',
    overlayDark25: 'var(--color-overlay-dark-25)',
    overlayDark55: 'var(--color-overlay-dark-55)',
    dividerOnDark: 'var(--color-divider-on-dark)',
    shadowSoft: 'var(--color-shadow-soft)',
    shadowStrong: 'var(--color-shadow-strong)',
    panelOverlay: 'var(--color-panel-overlay)',
    textOnDarkMuted: 'var(--color-text-on-dark-muted)',
    gridDot: 'var(--color-grid-dot)',
    white: 'var(--color-white)',
  },
  space: {
    1: 'var(--space-1)',
    2: 'var(--space-2)',
    3: 'var(--space-3)',
    4: 'var(--space-4)',
    5: 'var(--space-5)',
    6: 'var(--space-6)',
    8: 'var(--space-8)',
    10: 'var(--space-10)',
    12: 'var(--space-12)',
    14: 'var(--space-14)',
    16: 'var(--space-16)',
    20: 'var(--space-20)',
  },
  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
  },
  shadow: {
    sm: 'var(--shadow-sm)',
    lg: 'var(--shadow-lg)',
  },
  z: {
    base: 'var(--z-base)',
    raised: 'var(--z-raised)',
    sticky: 'var(--z-sticky)',
    dropdown: 'var(--z-dropdown)',
  },
  font: {
    sans: 'var(--font-sans)',
    display: 'var(--font-display)',
    mono: 'var(--font-mono)',
  },
  fontWeight: {
    regular: 'var(--font-weight-regular)',
    medium: 'var(--font-weight-medium)',
    semibold: 'var(--font-weight-semibold)',
    bold: 'var(--font-weight-bold)',
  },
  fontSize: {
    xs: 'var(--font-size-xs)',
    sm: 'var(--font-size-sm)',
    base: 'var(--font-size-base)',
    lg: 'var(--font-size-lg)',
  },
  lineHeight: {
    tight: 'var(--line-tight)',
    snug: 'var(--line-snug)',
    relaxed: 'var(--line-relaxed)',
    loose: 'var(--line-loose)',
  },
  letter: {
    tight: 'var(--letter-tight)',
    wide: 'var(--letter-wide)',
    wider: 'var(--letter-wider)',
    widest: 'var(--letter-widest)',
    extreme: 'var(--letter-extreme)',
  },
  transition: {
    fast: 'var(--transition-fast)',
    base: 'var(--transition-base)',
    slow: 'var(--transition-slow)',
  },
  layout: {
    containerMax: 'var(--container-max)',
    containerMaxWide: 'var(--container-max-wide)',
    headerHeight: 'var(--header-height)',
    headerHeightMobile: 'var(--header-height-mobile)',
  },
  /**
   * Breakpoints — raw px strings. CSS custom properties cannot be used
   * inside @media queries, so consume these via styled-components template
   * literals: `@media (max-width: ${tokens.bp.md})`.
   */
  bp: {
    sm: '499px',
    md: '599px',
    lg: '767px',
    xl: '800px',
    '2xl': '899px',
    '3xl': '959px',
  },
  /**
   * Raw literal values for non-CSS contexts (canvas, charting libs, JS).
   * Migration aid: legacy color names from the retired colors.ts.
   */
  raw: {
    primary: 'oklch(0.55 0.17 145)',
    primaryGreen: 'oklch(0.55 0.17 145)',
    green200: 'oklch(0.55 0.17 145)',
    secondaryOrange: '#f0563d',
    orange200: '#d14832',
  },
} as const;
