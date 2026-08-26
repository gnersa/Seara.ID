import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/Sections";
import { Icons } from "@/components/Icons";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { industries } from "@/lib/site-data";

export const metadata = {
  title: "Solusi ERP Berdasarkan Industri",
  description:
    "Solusi Seara untuk Kesehatan, Pendidikan, Properti, Tour & Travel, Salon & Kecantikan, F&B, Pemerintahan, dan Logistik.",
  alternates: { canonical: "https://seara.id/industri" },
};

const iconMap = {
  kesehatan: Icons.health,
  pendidikan: Icons.education,
  properti: Icons.property,
  "tour-travel": Icons.travel,
  "salon-kecantikan": Icons.beauty,
  fnb: Icons.food,
  pemerintahan: Icons.government,
  logistik: Icons.logistics,
} as const;

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", url: "https://seara.id" },
          { name: "Industri", url: "https://seara.id/industri" },
        ])}
      />
      <Header />
      <main>
        <div className="wrap heroSingle industryHero">
          <span className="eyebrow">INDUSTRI</span>
          <h1>
            Solusi yang mengikuti{" "}
            <span className="gradient">cara bisnis Anda bekerja.</span>
          </h1>
          <p className="lead">
            Seara menghubungkan workflow, data, dan customer interaction sesuai
            kebutuhan industri.
          </p>
        </div>

        <section className="industryHubSection">
          <div className="wrap industryPageGrid">
            {industries.map((item) => {
              const Icon = iconMap[item.slug as keyof typeof iconMap] ?? Icons.property;
              return (
                <Link
                  href={`/industri/${item.slug}`}
                  className="industryPageCard"
                  key={item.slug}
                >
                  <span className="industryPageIcon">
                    <Icon />
                  </span>

                  <span className="industryCardContent">
                    <strong>{item.title}</strong>
                    <small>{item.navDescription}</small>
                    <b>Pelajari solusi →</b>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
