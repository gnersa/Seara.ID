import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Resource" };

const resources = [
  ["blog", "BL", "Blog", "Insight terbaru mengenai operasional, CRM, HR, finance, sales, dan transformasi digital."],
  ["guides", "GD", "Guides", "Panduan praktis untuk membantu implementasi proses dan sistem yang lebih terstruktur."],
  ["webinar", "WB", "Webinar", "Diskusi, edukasi, dan sharing bersama praktisi bisnis dan operasional."],
  ["stories", "ST", "Stories", "Cerita, case study, dan pengalaman penerapan solusi Seara."],
  ["templates", "TP", "Templates", "Template workflow, KPI, CRM, checklist, dan tools operasional siap pakai."],
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap heroSingle">
          <span className="eyebrow">RESOURCE</span>
          <h1>Resources untuk membangun <span className="gradient">operasional yang lebih baik.</span></h1>
          <p className="lead">
            Pelajari strategi, workflow, dan teknologi untuk meningkatkan customer, sales, HR, finance, dan operasional bisnis.
          </p>
        </div>

        <section>
          <div className="wrap grid3">
            {resources.map(([id, icon, title, body]) => (
              <article className="card" id={id} key={id}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
                <a href="#" className="textLink">Explore {title} →</a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
