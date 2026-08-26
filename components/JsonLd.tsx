export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://seara.id/#organization",
  name: "Seara",
  legalName: "SEARA, Inc.",
  url: "https://seara.id",
  logo: "https://seara.id/seara-logo.png",
  description: "Platform ERP modern untuk perusahaan dinamis. Kelola HR, Keuangan, CRM, Retail, Manufacturing, dan Operasional dalam satu ekosistem cerdas.",
  email: "Info@seara.id",
  telephone: "+6285175380890",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bandung",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+6285175380890",
      email: "Info@seara.id",
      availableLanguage: ["id"],
      areaServed: "ID",
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://seara.id/#website",
  name: "Seara",
  url: "https://seara.id",
  inLanguage: "id-ID",
  publisher: { "@id": "https://seara.id/#organization" },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
