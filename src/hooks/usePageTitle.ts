import { useEffect } from 'react';
import { domainConfig } from '../config/domain';

type Bilingual = { en: string; es: string };
type TitleInput = string | Bilingual | undefined;

function resolve(input: TitleInput, locale: 'en' | 'es'): string | undefined {
  if (!input) return undefined;
  if (typeof input === 'string') return input;
  return input[locale];
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(url: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = url;
}

export function usePageTitle(title?: TitleInput, description?: TitleInput) {
  useEffect(() => {
    const { locale, siteName, siteUrl, ogImage } = domainConfig;
    const pageTitle = resolve(title, locale);
    const pageDesc = resolve(description, locale);
    const fullTitle = pageTitle ? `${pageTitle} | ${siteName}` : siteName;
    const canonicalUrl = siteUrl + window.location.pathname;

    document.title = fullTitle;
    document.documentElement.lang = locale;
    setCanonical(canonicalUrl);

    setMetaByProperty('og:title', fullTitle);
    setMetaByProperty('og:url', canonicalUrl);
    setMetaByProperty('og:image', ogImage);

    if (pageDesc) {
      setMetaByName('description', pageDesc);
      setMetaByProperty('og:description', pageDesc);
    }
  }, [title, description]);
}
