import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Dashboard } from "@/components/Dashboard";
import { CTA, SectionHead } from "@/components/Sections";

const products = [
 ["HR","HR & Payroll","Employee lifecycle, attendance, payroll, dan people operations.","/produk#hr"],
 ["FI","Finance","Financial workflow, reconciliation, reporting, dan control.","/produk#finance"],
 ["CR","Sales & CRM","Customer, leads, sales activities, omnichannel, dan conversion.","/crm"],
 ["PO","Retail & POS","Retail operation, transaction workflow, dan point-of-sale.","/produk#retail"],
 ["MF","Manufacturing","Production workflow, operational visibility, dan control.","/produk#manufacturing"],
];

export default function Home() {
 return <><Header/><main>
  <section><div className="wrap hero"><div><span className="eyebrow"><i className="dot"/> INTEGRATED BUSINESS PLATFORM</span><h1>Kelola bisnis tanpa batas. <span className="gradient">Semuanya dalam satu ruang.</span></h1><p className="lead">Seara menyatukan people, finance, sales, retail, dan operational workflow dalam satu ekosistem teknologi yang lebih terhubung.</p><div className="heroActions"><Link className="btn btnBlue" href="/produk">Explore Platform →</Link><Link className="btn btnGhost" href="/contact">Request Demo</Link></div></div><Dashboard/></div></section>
  <section><div className="wrap"><SectionHead title={"One ecosystem.<br/>Many operations."} body="Setiap produk menangani area operasional berbeda namun tetap hidup dalam satu ekosistem Seara."/><div className="grid3"><article className="card"><div className="icon">01</div><h3>Operational System</h3><p>HR, finance, sales, retail, dan manufacturing dalam sistem yang terstruktur.</p></article><article className="card"><div className="icon">02</div><h3>Industry Solution</h3><p>Workflow yang dapat disesuaikan dengan pola operasional bisnis.</p></article><article className="card"><div className="icon">03</div><h3>Digital Presence</h3><p>Hubungkan operational data dengan channel digital dan customer interaction.</p></article></div></div></section>
  <section><div className="wrap"><SectionHead title={"Products that work<br/>as one system."} body="Mulai dari modul yang relevan hari ini, lalu perluas sesuai pertumbuhan bisnis."/><div className="grid3">{products.map(([icon,title,body,href])=><article className="card" key={title}><div className="icon">{icon}</div><h3>{title}</h3><p>{body}</p><Link className="textLink" href={href}>Explore →</Link></article>)}</div></div></section>
  <section><div className="wrap"><div className="darkBand"><div><span className="eyebrow">FEATURED PRODUCT</span><h2>Seara CRM</h2><p className="lead">Dedicated omnichannel CRM untuk percakapan, lead distribution, multi-unit, escalation, dan analytics.</p><div className="heroActions"><Link className="btn btnBlue" href="/crm">Explore Seara CRM →</Link></div></div><div className="flow">{[["WhatsApp / Instagram / Email / Telegram","Incoming"],["Omnichannel Inbox","Centralize"],["Auto Assignment / Round Robin","Distribute"],["Analytics & Performance","Measure"]].map(([a,b],i)=><div key={a}>{i>0&&<div className="flowArrow">↓</div>}<div className="flowItem"><b>{a}</b><span>{b}</span></div></div>)}</div></div></div></section>
  <CTA/>
 </main><Footer/></>;
}
