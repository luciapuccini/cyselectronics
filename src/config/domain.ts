interface DomainConfig {
  siteName: string;
  siteUrl: string;
  ogImage: string;
}

const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
const isInternational =
  hostname.includes('cyselectronics') && !hostname.endsWith('.com.ar');

export const domainConfig: DomainConfig = isInternational
  ? {
      siteName: 'CYS Electronics',
      siteUrl: 'https://www.cyselectronics.com',
      ogImage: 'https://www.cyselectronics.com/logo512.png',
    }
  : {
      siteName: 'C&S Controles y Sistemas',
      siteUrl: 'https://www.controlesysistemas.com.ar',
      ogImage: 'https://www.controlesysistemas.com.ar/logo512.png',
    };
