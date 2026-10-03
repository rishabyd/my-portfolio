import { SITE } from "@/config/site";

export function GET() {
  const sitemapUrl = new URL("/sitemap-index.xml", SITE.url);
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
