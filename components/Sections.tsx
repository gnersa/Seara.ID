import Link from "next/link";

export function SectionHead({title,body}:{title:string;body:string}) {
  return <div className="sectionHead"><h2 dangerouslySetInnerHTML={{__html:title}}/><p>{body}</p></div>
}
export function CTA({crm=false}:{crm?:boolean}) {
  return <section><div className="wrap"><div className="cta"><span className="eyebrow">READY TO SCALE</span><h2>{crm ? "Turn conversations into controlled workflows." : "Build a connected operating system."}</h2><p>{crm ? "Kelola channel, lead, distribusi, dan performa tim dalam satu CRM." : "Mulai dari kebutuhan yang paling penting dan kembangkan ekosistem Seara bersama pertumbuhan bisnis."}</p><Link className="btn btnBlue" href={crm?"/crm/contact":"/contact"}>Request Demo →</Link></div></div></section>
}
