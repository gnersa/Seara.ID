import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const main = "https://seara.id";
  const crm = "https://crm.seara.id";

  return [
    { url: main, priority: 1 },
    { url: `${main}/produk`, priority: 0.9 },
    { url: `${main}/industri`, priority: 0.9 },
    { url: `${main}/harga`, priority: 0.8 },
    { url: `${main}/resources`, priority: 0.8 },
    { url: `${main}/about`, priority: 0.6 },
    { url: `${main}/contact`, priority: 0.8 },
    { url: `${main}/privacy`, priority: 0.3 },
    { url: `${main}/terms`, priority: 0.3 },
    { url: crm, priority: 0.9 },
    { url: `${crm}/fitur`, priority: 0.8 },
    { url: `${crm}/solusi`, priority: 0.8 },
    { url: `${crm}/harga`, priority: 0.8 },
    { url: `${crm}/contact`, priority: 0.7 },
  ].map((item) => ({
    ...item,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
  }));
}
