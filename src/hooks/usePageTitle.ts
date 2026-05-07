import { useEffect } from 'react';
import { domainConfig } from '../config/domain';

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

export function usePageTitle(title?: string, description?: string) {
  useEffect(() => {
    const { siteName, siteUrl, ogImage } = domainConfig;
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const canonicalUrl = siteUrl + window.location.pathname;

    document.title = fullTitle;
    setCanonical(canonicalUrl);

    setMetaByProperty('og:title', fullTitle);
    setMetaByProperty('og:url', canonicalUrl);
    setMetaByProperty('og:image', ogImage);

    if (description) {
      setMetaByName('description', description);
      setMetaByProperty('og:description', description);
    }
  }, [title, description]);
}
