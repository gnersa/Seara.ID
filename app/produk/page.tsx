import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/Sections";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { products } from "@/lib/site-data";

export const metadata = {
  title: "Produk ERP — HR, Finance, CRM, Retail & Manufacturing",
  description: "Jelajahi produk Seara: HR & Payroll, Finance, CRM, Retail & POS, dan Manufacturing untuk mengelola operasional bisnis dalam satu ekosistem.",
  alternates: { canonical: "https://seara.id/produk" },
};

export default function Page(){
  return <><JsonLd data={breadcrumbSchema([{name:"Beranda",url:"https://seara.id"},{name:"Produk",url:"https://seara.id/produk"}])}/><Header/><main>
    <div className="wrap heroSingle"><span className="eyebrow">PRODUK</span><h1>Operational tools yang <span className="gradient">bekerja sebagai satu sistem.</span></h1><p className="lead">Pilih modul yang relevan untuk people, finance, customer, retail, dan production workflow.</p></div>
    <section><div className="wrap grid3">{products.map((p)=><article className="card productCard" key={p.slug}><div className="icon">{p.icon}</div><h3>{p.title}</h3><p>{p.description}</p><Link className="textLink" href={p.slug === "crm" ? "/crm" : `/produk/${p.slug}`}>Pelajari {p.title} →</Link></article>)}</div></section>
    <CTA/>
  </main><Footer/></>;
}
