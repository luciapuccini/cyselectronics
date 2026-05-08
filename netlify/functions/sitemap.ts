// fallow-ignore-file unused-file
// Netlify framework convention: deployed from /netlify/functions/ by filename
import type { Handler } from '@netlify/functions';

const EN_BASE = 'https://www.cyselectronics.com';
const ES_BASE = 'https://www.controlesysistemas.com.ar';

const ROUTES = [
  { path: '/',           changefreq: 'monthly', priority: '1.0' },
  { path: '/solutions',  changefreq: 'monthly', priority: '0.8' },
  { path: '/contact',    changefreq: 'yearly',  priority: '0.6' },
];

function buildSitemap(baseUrl: string): string {
  const urls = ROUTES.map(({ path, changefreq, priority }) =>
    `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export const handler: Handler = async (event) => {
  const host = event.headers['host'] ?? '';
  const isES = host.includes('controlesysistemas') || host.endsWith('.com.ar');
  const baseUrl = isES ? ES_BASE : EN_BASE;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
    body: buildSitemap(baseUrl),
  };
};
