import type { APIRoute } from 'astro';
import { getPublicBaseUrl } from '../data/seo';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const publicBaseUrl = getPublicBaseUrl(site);
  const sitemapUrl = new URL('sitemap.xml', publicBaseUrl);
  const content = [
    'User-agent: *',
    'Allow: /',
    '',
    'Sitemap: ' + sitemapUrl.href,
  ].join('\n');

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
