import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DemoForm } from "@/components/DemoForm";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata={title:"Request Demo Seara CRM",description:"Request demo Seara CRM untuk omnichannel inbox, lead distribution, round robin, multi-unit, escalation, dan analytics.",alternates:{canonical:"https://crm.seara.id/contact"}};
export default function Page(){return <><JsonLd data={breadcrumbSchema([{name:"Seara CRM",url:"https://crm.seara.id"},{name:"Request Demo",url:"https://crm.seara.id/contact"}])}/><Header crm/><main><section><div className="wrap hero contactHero"><div><span className="eyebrow">COBA DEMO CRM</span><h1>Tunjukkan workflow <span className="gradient">customer dan lead Anda.</span></h1><p className="lead">Ceritakan channel, jumlah unit, staff, dan pola distribusi lead. Tim Seara akan membantu memetakan setup CRM yang relevan.</p></div><DemoForm crm/></div></section></main><Footer crm/></>}
