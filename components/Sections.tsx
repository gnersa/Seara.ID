import Link from "next/link";

export function SectionHead({title,body}:{title:string;body:string}) {
  return <div className="sectionHead"><h2 dangerouslySetInnerHTML={{__html:title}}/><p>{body}</p></div>;
}

export function CTA({crm=false}:{crm?:boolean}) {
  return <section><div className="wrap"><div className="cta"><span className="eyebrow">MULAI DARI KEBUTUHAN ANDA</span><h2>{crm ? "Buat customer operation lebih terukur." : "Bangun operasional yang lebih terhubung."}</h2><p>{crm ? "Lihat bagaimana Seara CRM mengelola channel, lead, distribusi, dan performa tim." : "Pilih modul yang relevan, petakan workflow, dan kembangkan ekosistem Seara sesuai pertumbuhan bisnis."}</p><Link className="btn btnBlue" href={crm?"/crm/contact":"/contact"}>Coba Demo →</Link></div></div></section>;
}
