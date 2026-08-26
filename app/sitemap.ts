import type { MetadataRoute } from "next";
import { industries, products, resources } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://seara.id";
  const staticRoutes = ["", "/produk", "/industri", "/harga", "/resources", "/about", "/contact", "/privacy", "/terms"];
  const urls = [
    ...staticRoutes.map((path) => `${base}${path}`),
    ...products.filter((p)=>p.slug!=="crm").map((p) => `${base}/produk/${p.slug}`),
    ...industries.map((i) => `${base}/industri/${i.slug}`),
    ...resources.map((r) => `${base}/resources/${r.slug}`),
  ];
  return urls.map((url) => ({ url, lastModified: new Date(), changeFrequency: "weekly", priority: url === base ? 1 : 0.7 }));
}
