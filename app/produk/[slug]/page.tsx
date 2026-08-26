import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/Sections";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { products } from "@/lib/site-data";

export function generateStaticParams(){ return products.filter((p)=>p.slug!=="crm").map((p)=>({slug:p.slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const item=products.find((p)=>p.slug===slug);
  if(!item) return {};
  return {title:item.seoTitle,description:item.seoDescription,alternates:{canonical:`https://seara.id/produk/${item.slug}`},openGraph:{title:item.seoTitle,description:item.seoDescription,url:`https://seara.id/produk/${item.slug}`,type:"website"}};
}

export default async function ProductDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  if(slug==="crm") redirect("/crm");
  const item=products.find((p)=>p.slug===slug); if(!item) notFound();
  const url=`https://seara.id/produk/${item.slug}`;
  const software={"@context":"https://schema.org","@type":"SoftwareApplication","@id":`${url}#software`,name:`Seara ${item.title}`,applicationCategory:"BusinessApplication",operatingSystem:"Web",url,description:item.seoDescription,publisher:{"@id":"https://seara.id/#organization"},offers:{"@type":"Offer",priceCurrency:"IDR",description:"Harga disesuaikan dengan kebutuhan implementasi."}};
  return <><JsonLd data={[software,breadcrumbSchema([{name:"Beranda",url:"https://seara.id"},{name:"Produk",url:"https://seara.id/produk"},{name:item.title,url}])]}/><Header/><main>
    <div className="wrap heroSingle"><span className="eyebrow">SEARA {item.title.toUpperCase()}</span><h1>{item.hero}</h1><p className="lead">{item.description}</p><div className="heroActions"><Link className="btn btnBlue" href="/contact">Coba Demo →</Link><Link className="btn btnGhost" href="/produk">Produk Lainnya</Link></div></div>
    <section><div className="wrap"><div className="sectionHead"><h2>Manfaat utama.</h2><p>Fokus pada proses yang lebih terstruktur, terlihat, dan mudah dikembangkan.</p></div><div className="grid3">{item.benefits.map((b,i)=><article className="card" key={b}><div className="icon">0{i+1}</div><h3>{b}</h3><p>Gunakan workflow Seara untuk mengurangi proses manual dan memusatkan informasi yang dibutuhkan tim.</p></article>)}</div></div></section>
    <section className="softSection"><div className="wrap"><div className="sectionHead"><h2>Kemampuan utama.</h2><p>Kapabilitas inti yang dapat dipetakan sesuai kebutuhan bisnis dan implementasi.</p></div><div className="capabilityGrid">{item.capabilities.map((c)=><span key={c}>{c}</span>)}</div></div></section>
    <section><div className="wrap faqSection"><details><summary>Apakah {item.title} dapat digunakan sendiri?</summary><p>Ya. Seara dirancang modular dan dapat dimulai dari produk yang paling relevan.</p></details><details><summary>Apakah dapat diintegrasikan dengan modul lain?</summary><p>Arsitektur Seara diarahkan untuk menghubungkan fungsi operasional. Detail integrasi dibahas berdasarkan kebutuhan implementasi.</p></details><details><summary>Bagaimana menentukan harga?</summary><p>Harga menyesuaikan modul, pengguna, unit, dan kebutuhan integrasi. Jadwalkan demo untuk mendapatkan pemetaan yang sesuai.</p></details></div></section>
    <CTA/>
  </main><Footer/></>;
}
