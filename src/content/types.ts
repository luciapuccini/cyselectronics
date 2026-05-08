export type Locale = 'en' | 'es';

// ── Solutions sub-types ──────────────────────────────────────────────────────

export type Spec = { label: string; value: string };
export type Mode = { name: string; description: string };
export type CtaVariant = 'primary' | 'secondary';

export type Cta = {
  label: string;
  href: string;
  variant: CtaVariant;
  newTab?: boolean;
  download?: boolean;
};

export type SupportingLink = {
  label: string;
  href: string;
  newTab?: boolean;
};

export type ProductItem = {
  id: string;
  name: string;
  tagline: string;
  detail: string;
  specs?: Spec[];
  modes?: Mode[];
  features?: string[];
  ctas?: Cta[];
  supportingLink?: SupportingLink;
};

export type ServiceSubsection = {
  heading: string;
  bullet: string;
};

export type ServiceItem = {
  id: string;
  name: string;
  intro: string;
  bullets?: string[];
  subsections?: ServiceSubsection[];
};

export type ProductSection = {
  type: 'product';
  label: string;
  description: string;
  items: ProductItem[];
};

export type ServiceSection = {
  type: 'service';
  label: string;
  description: string;
  items: ServiceItem[];
};

export type SolutionsSectionCopy = ProductSection | ServiceSection;
export type SolutionsSectionKey = 'positioning' | 'protection' | 'services';

// ── Root content interface ───────────────────────────────────────────────────

export interface SiteContent {
  nav: {
    items: Array<{ code: string; label: string; href: string }>;
    cta: { label: string; href: string };
    ariaOpen: string;
    ariaClose: string;
    langSwitch: { en: string; es: string };
  };
  home: {
    carousel: {
      slides: Array<{ header: string; detail: string }>;
    };
    capabilities: {
      eyebrow: string;
      title: string;
      titleSub: string;
      intro: string;
      link: string;
      items: Array<{
        code: string;
        title: string;
        description: string;
        items: string[];
      }>;
    };
    about: {
      metaLabel: string;
      metaSupport: string;
      title: string;
      copy: [string, string];
      stats: Array<{ value: string; label: string }>;
      imageAlt: string;
      badge: string;
    };
    trustedBy: {
      accent: string;
      title: string;
      footnote: string;
    };
  };
  solutions: {
    metaTitle: string;
    metaDescription: string;
    hero: { eyebrow: string; title: string; lede: string };
    sections: Record<SolutionsSectionKey, SolutionsSectionCopy>;
    cta: { heading: string; body: string; button: string; href: string };
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    hero: { eyebrow: string; title: string; lede: string };
    info: {
      title: string;
      address: { label: string; lines: string[] };
      phone: { label: string; lines: string[] };
      email: { label: string; lines: string[] };
    };
    form: {
      formTitle: string;
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
      required: string;
      submit: string;
      submitting: string;
      sent: string;
      sentBody: string;
      sendAnother: string;
      errors: {
        name: string;
        email: string;
        emailInvalid: string;
        message: string;
      };
    };
  };
  footer: {
    tagline: string;
    navColumn: string;
    contactColumn: string;
    copyright: (year: number) => string;
    version: string;
  };
}
