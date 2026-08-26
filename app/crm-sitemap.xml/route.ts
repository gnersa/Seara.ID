const urls = ["", "/fitur", "/solusi", "/harga", "/contact"];

export async function GET() {
  const lastmod = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((path)=>`\n  <url><loc>https://crm.seara.id${path}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${path===""?"1.0":"0.8"}</priority></url>`).join("")}\n</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
