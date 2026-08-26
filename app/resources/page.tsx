
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icons } from "@/components/Icons";

export const metadata = { title: "Resource" };

const resources = [
  ["blog", "Blog", "Insight terbaru seputar operasional, teknologi, dan pertumbuhan bisnis.", Icons.blog],
  ["guides", "Guides", "Panduan praktis untuk memperbaiki workflow dan implementasi sistem.", Icons.guide],
  ["webinar", "Webinar", "Diskusi dan sharing bersama praktisi bisnis serta operasional.", Icons.webinar],
  ["stories", "Stories", "Case study, cerita customer, dan pengalaman implementasi Seara.", Icons.story],
  ["templates", "Templates", "Template workflow, KPI, CRM, dan operational checklist siap pakai.", Icons.template],
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap heroSingle">
          <span className="eyebrow">RESOURCE</span>
          <h1>Belajar lebih cepat. <span className="gradient">Terapkan lebih baik.</span></h1>
          <p className="lead">Materi praktis untuk customer, people, finance, sales, dan operational excellence.</p>
        </div>

        <section>
          <div className="wrap resourcePageGrid">
            {resources.map(([id, title, description, Icon]) => {
              const ResourceIcon = Icon as typeof Icons.blog;
              return (
                <article className="resourcePageCard" id={id as string} key={id as string}>
                  <div className="resourcePageIcon"><ResourceIcon /></div>
                  <div>
                    <h3>{title as string}</h3>
                    <p>{description as string}</p>
                    <a className="textLink" href="#">Explore {title as string} →</a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
