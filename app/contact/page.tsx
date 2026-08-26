import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DemoForm } from "@/components/DemoForm";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata={title:"Hubungi Seara & Request Demo",description:"Hubungi tim Seara untuk konsultasi, request demo, dan pembahasan kebutuhan ERP, CRM, HR, Finance, Retail, atau Manufacturing.",alternates:{canonical:"https://seara.id/contact"}};
export default function Page(){return <><JsonLd data={breadcrumbSchema([{name:"Beranda",url:"https://seara.id"},{name:"Kontak",url:"https://seara.id/contact"}])}/><Header/><main><section><div className="wrap hero contactHero"><div><span className="eyebrow">COBA DEMO</span><h1>Ceritakan bagaimana <span className="gradient">bisnis Anda bekerja.</span></h1><p className="lead">Tim Seara membantu memetakan kebutuhan, workflow, jumlah pengguna, unit, dan produk yang relevan sebelum implementasi.</p><div className="contactBenefits"><span>✓ Konsultasi kebutuhan</span><span>✓ Pemetaan modul & workflow</span><span>✓ Diskusi integrasi</span></div></div><DemoForm/></div></section></main><Footer/></>}
