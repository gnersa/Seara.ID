import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/Sections";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { industries } from "@/lib/site-data";

export const metadata={title:"Solusi ERP Berdasarkan Industri",description:"Solusi Seara untuk Kesehatan, Pendidikan, Properti, Tour & Travel, Salon & Kecantikan, F&B, Pemerintahan, dan Logistik.",alternates:{canonical:"https://seara.id/industri"}};
export default function Page(){return <><JsonLd data={breadcrumbSchema([{name:"Beranda",url:"https://seara.id"},{name:"Industri",url:"https://seara.id/industri"}])}/><Header/><main><div className="wrap heroSingle"><span className="eyebrow">INDUSTRI</span><h1>Solusi yang mengikuti <span className="gradient">cara bisnis Anda bekerja.</span></h1><p className="lead">Seara menghubungkan workflow, data, dan customer interaction sesuai kebutuhan industri.</p></div><section><div className="wrap industryPageGrid">{industries.map((i)=><Link href={`/industri/${i.slug}`} className="industryPageCard" key={i.slug}><div><h3>{i.title}</h3><p>{i.navDescription}</p><span className="textLink">Pelajari solusi →</span></div></Link>)}</div></section><CTA/></main><Footer/></>}
