import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { resources } from "@/lib/site-data";

export const metadata={title:"Resource — Blog, Guides, Webinar, Stories & Templates",description:"Pelajari insight, panduan, webinar, case study, dan template untuk meningkatkan HR, Finance, CRM, Sales, dan operasional bisnis.",alternates:{canonical:"https://seara.id/resources"}};
export default function Page(){return <><JsonLd data={breadcrumbSchema([{name:"Beranda",url:"https://seara.id"},{name:"Resource",url:"https://seara.id/resources"}])}/><Header/><main><div className="wrap heroSingle"><span className="eyebrow">RESOURCE</span><h1>Belajar lebih cepat. <span className="gradient">Terapkan lebih baik.</span></h1><p className="lead">Materi praktis untuk customer, people, finance, sales, dan operational excellence.</p></div><section><div className="wrap resourcePageGrid">{resources.map((r)=><Link href={`/resources/${r.slug}`} className="resourcePageCard" key={r.slug}><div><h3>{r.title}</h3><p>{r.description}</p><span className="textLink">Buka {r.title} →</span></div></Link>)}</div></section></main><Footer/></>}
