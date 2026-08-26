import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Dashboard } from "@/components/Dashboard";
import { CTA, SectionHead } from "@/components/Sections";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { industries, products, resources } from "@/lib/site-data";
import { Icons } from "@/components/Icons";
import { FAQSection } from "@/components/FAQSection";

const industryIconMap = {
  kesehatan: Icons.health,
  pendidikan: Icons.education,
  properti: Icons.property,
  "tour-travel": Icons.travel,
  "salon-kecantikan": Icons.beauty,
  fnb: Icons.food,
  pemerintahan: Icons.government,
  logistik: Icons.logistics,
} as const;

const integrationItems = [
  ["WhatsApp", Icons.whatsapp],
  ["Instagram", Icons.instagram],
  ["Email / Gmail", Icons.mail],
  ["Telegram", Icons.telegram],
  ["Meta Ads", Icons.ads],
  ["API & Webhook", Icons.api],
] as const;

export default function Home() {
  const pageSchema = {
    "@context":"https://schema.org",
    "@type":"WebPage",
    "@id":"https://seara.id/#webpage",
    url:"https://seara.id",
    name:"Seara | Platform ERP Modern untuk HR, Finance, CRM & Operasional",
    description:"Platform ERP modern untuk perusahaan dinamis. Kelola HR & Payroll, Finance, CRM, Retail & POS, Manufacturing, dan operasional dalam satu ekosistem cerdas.",
    inLanguage:"id-ID",
    isPartOf:{"@id":"https://seara.id/#website"},
    publisher:{"@id":"https://seara.id/#organization"},
  };
  const faqSchema = {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    mainEntity:[
      {"@type":"Question",name:"Apa itu Seara?",acceptedAnswer:{"@type":"Answer",text:"Seara adalah ekosistem software operasional yang mencakup HR & Payroll, Finance, CRM, Retail & POS, dan Manufacturing."}},
      {"@type":"Question",name:"Apakah harus menggunakan semua modul sekaligus?",acceptedAnswer:{"@type":"Answer",text:"Tidak. Seara dirancang modular sehingga perusahaan dapat memulai dari kebutuhan yang paling relevan."}},
      {"@type":"Question",name:"Bagaimana mengetahui modul yang cocok?",acceptedAnswer:{"@type":"Answer",text:"Jadwalkan demo agar tim Seara dapat memetakan workflow, jumlah pengguna, unit, dan kebutuhan integrasi."}},
      {"@type":"Question",name:"Apakah Seara mendukung bisnis multi-unit?",acceptedAnswer:{"@type":"Answer",text:"Seara CRM mendukung struktur multi-unit dan multi-tenant. Kebutuhan modul lain dapat dipetakan saat konsultasi implementasi."}},
    ]
  };

  return <>
    <JsonLd data={[pageSchema, faqSchema, breadcrumbSchema([{name:"Beranda",url:"https://seara.id"}])]} />
    <Header/>
    <main>
      <section className="heroSection"><div className="wrap hero"><div><span className="eyebrow"><i className="dot"/> PLATFORM ERP TERINTEGRASI</span><h1>Satu ekosistem untuk <span className="gradient">operasional yang lebih sederhana.</span></h1><p className="lead">Kelola HR, keuangan, customer, sales, retail, manufacturing, dan workflow operasional perusahaan dalam satu ekosistem Seara.</p><div className="heroActions"><Link className="btn btnBlue" href="/contact">Coba Demo →</Link><Link className="btn btnGhost" href="/produk">Lihat Produk</Link></div><p className="heroNote">Demo membantu memetakan kebutuhan dan modul yang relevan untuk bisnis Anda.</p></div><Dashboard/></div></section>

      <section className="trustStrip"><div className="wrap"><p>Dibangun untuk tim yang mengelola fungsi penting bisnis</p><div className="trustRoles"><span>HR & People</span><span>Finance</span><span>Sales</span><span>Customer Service</span><span>Retail</span><span>Operations</span></div></div></section>

      <section><div className="wrap"><SectionHead title={"Ketika sistem terpisah,<br/>operasional ikut terpecah."} body="Seara membantu mengurangi perpindahan data, proses manual, dan visibilitas yang terfragmentasi antar fungsi bisnis."/><div className="grid3">
        <article className="card"><div className="icon">01</div><h3>Data tersebar</h3><p>People, finance, customer, sales, dan operasional hidup di tempat yang berbeda.</p></article>
        <article className="card"><div className="icon">02</div><h3>Workflow manual</h3><p>Tim mengandalkan spreadsheet, chat pribadi, dan follow-up manual untuk menjalankan proses penting.</p></article>
        <article className="card"><div className="icon">03</div><h3>Sulit melihat kondisi bisnis</h3><p>Owner dan manager membutuhkan waktu lebih lama untuk memahami progres, hambatan, dan performa.</p></article>
      </div></div></section>

      <section className="softSection"><div className="wrap"><SectionHead title={"Satu ekosistem.<br/>Banyak fungsi operasional."} body="Mulai dari modul yang paling dibutuhkan hari ini, lalu perluas ketika organisasi bertumbuh."/><div className="ecosystemFlow"><span>People</span><i>→</i><span>Finance</span><i>→</i><b>SEARA</b><i>←</i><span>Customer</span><i>←</i><span>Operations</span></div></div></section>

      <section><div className="wrap"><SectionHead title={"Produk yang bekerja<br/>sebagai satu sistem."} body="Setiap produk memiliki fokus yang jelas, tetapi dirancang agar dapat hidup dalam ekosistem operasional yang sama."/><div className="grid3">{products.map((p)=><article className="card productCard" key={p.slug}><div className="icon">{p.icon}</div><h3>{p.title}</h3><p>{p.description}</p><Link className="textLink" href={p.slug === "crm" ? "/crm" : `/produk/${p.slug}`}>Pelajari {p.title} →</Link></article>)}</div></div></section>

      <section>
        <div className="wrap">
          <SectionHead
            eyebrow="SOLUSI INDUSTRI"
            title={"Solusi yang mengikuti<br/>cara industri Anda bekerja."}
            body="Gunakan Seara untuk menangani workflow yang berbeda pada setiap industri tanpa kehilangan struktur operasional."
          />
          <div className="industryPreviewGrid">
            {industries.map((item) => {
              const Icon =
                industryIconMap[item.slug as keyof typeof industryIconMap] ??
                Icons.property;
              return (
                <Link
                  href={`/industri/${item.slug}`}
                  className="industryPreview"
                  key={item.slug}
                >
                  <span className="industryPreviewIcon"><Icon /></span>
                  <span className="industryPreviewCopy">
                    <strong>{item.title}</strong>
                    <small>{item.navDescription}</small>
                  </span>
                  <b>→</b>
                </Link>
              );
            })}
          </div>
          <div className="centerAction">
            <Link className="btn btnGhost" href="/industri">
              Lihat Semua Industri
            </Link>
          </div>
        </div>
      </section>

      <section><div className="wrap"><div className="darkBand"><div><span className="eyebrow">SEARA CRM</span><h2>Semua percakapan. Satu customer workspace.</h2><p className="lead">Hubungkan WhatsApp, Instagram, Email, Telegram, lead distribution, round robin, multi-unit, escalation, dan analytics dalam satu CRM.</p><div className="heroActions"><Link className="btn btnBlue" href="/crm">Jelajahi Seara CRM →</Link><Link className="btn btnGhost darkGhost" href="/crm/contact">Coba Demo</Link></div></div><div className="flow">{[["Channel customer","WhatsApp · Instagram · Email · Telegram"],["Omnichannel Inbox","Centralize"],["Auto Assignment & Round Robin","Distribute"],["Analytics & Performance","Measure"]].map(([a,b],i)=><div key={a}>{i>0&&<div className="flowArrow">↓</div>}<div className="flowItem"><b>{a}</b><span>{b}</span></div></div>)}</div></div></div></section>

      <section className="softSection integrationSection">
        <div className="wrap">
          <SectionHead
            eyebrow="INTEGRASI"
            title={"Terhubung dengan channel<br/>yang digunakan customer."}
            body="Seara CRM mendukung workflow omnichannel dan integrasi agar data customer tidak berhenti di satu aplikasi."
          />
          <div className="integrationGrid">
            {integrationItems.map(([label, Icon]) => (
              <div className="integrationItem" key={label}>
                <span><Icon /></span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section><div className="wrap"><SectionHead title={"Kenapa membangun<br/>operasional bersama Seara?"} body="Fokus kami bukan hanya menambah fitur, tetapi membuat alur kerja lebih terlihat, konsisten, dan mudah dikembangkan."/><div className="grid3"><article className="card"><div className="icon">01</div><h3>Modular</h3><p>Mulai dari kebutuhan yang relevan tanpa harus mengadopsi seluruh sistem sekaligus.</p></article><article className="card"><div className="icon">02</div><h3>Terhubung</h3><p>Kurangi fragmentasi antara customer, people, finance, sales, dan operational workflow.</p></article><article className="card"><div className="icon">03</div><h3>Terukur</h3><p>Bangun proses yang lebih mudah dipantau oleh tim, manager, dan owner.</p></article></div></div></section>

      <section><div className="wrap storyCallout"><div><span className="eyebrow">CUSTOMER STORIES</span><h2>Belajar dari implementasi di lapangan.</h2><p>Halaman Stories disiapkan untuk case study, perjalanan implementasi, dan hasil operasional yang telah terverifikasi.</p></div><Link className="btn btnGhost" href="/resources/stories">Lihat Stories →</Link></div></section>

      <section><div className="wrap"><SectionHead title={"Resource untuk membuat<br/>keputusan yang lebih baik."} body="Temukan insight, panduan, webinar, case study, dan template untuk membantu tim memperbaiki workflow."/><div className="grid3">{resources.map((r)=><article className="card" key={r.slug}><h3>{r.title}</h3><p>{r.description}</p><Link className="textLink" href={`/resources/${r.slug}`}>Buka {r.title} →</Link></article>)}</div></div></section>

      <FAQSection/>

      <CTA/>
    </main>
    <Footer/>
  </>;
}
