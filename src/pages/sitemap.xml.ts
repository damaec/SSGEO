import type { APIRoute } from 'astro';
import { getPublicBaseUrl } from '../data/seo';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const pageUrl = getPublicBaseUrl(site).href;
  const content = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <url>',
    '    <loc>' + pageUrl + '</loc>',
    '  </url>',
    '</urlset>',
  ].join('\n');

  return new Response(content, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
