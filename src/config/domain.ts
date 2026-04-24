type Locale = 'en' | 'es';

interface DomainConfig {
  locale: Locale;
  siteName: string;
  siteUrl: string;
  lang: string;
  ogImage: string;
}

const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
const isEnglish =
  hostname.includes('cyselectronics') && !hostname.endsWith('.com.ar');

export const domainConfig: DomainConfig = isEnglish
  ? {
      locale: 'en',
      siteName: 'CYS Electronics',
      siteUrl: 'https://www.cyselectronics.com',
      lang: 'en',
      ogImage: 'https://www.cyselectronics.com/logo512.png',
    }
  : {
      locale: 'es',
      siteName: 'C&S Controles y Sistemas',
      siteUrl: 'https://www.controlesysistemas.com.ar',
      lang: 'es',
      ogImage: 'https://www.controlesysistemas.com.ar/logo512.png',
    };
