import Link from "next/link";

const faqs = [
  {
    q: "Apa itu Seara?",
    a: "Seara adalah ekosistem software operasional yang mencakup HR & Payroll, Finance, CRM, Retail & POS, dan Manufacturing untuk membantu bisnis mengelola proses penting dalam sistem yang lebih terhubung.",
  },
  {
    q: "Apakah harus menggunakan semua modul sekaligus?",
    a: "Tidak. Seara dibuat modular sehingga perusahaan dapat memulai dari kebutuhan yang paling relevan, lalu menambah modul ketika workflow dan organisasi berkembang.",
  },
  {
    q: "Bagaimana mengetahui modul yang paling cocok?",
    a: "Jadwalkan demo untuk memetakan workflow, jumlah pengguna, unit bisnis, kebutuhan integrasi, dan area operasional yang ingin diperbaiki.",
  },
  {
    q: "Apakah Seara mendukung bisnis multi-unit?",
    a: "Seara CRM mendukung struktur multi-unit dan multi-tenant. Kebutuhan multi-unit untuk modul lain dapat dipetakan bersama tim Seara pada tahap konsultasi implementasi.",
  },
];

export function FAQSection() {
  return (
    <section className="faqBlock">
      <div className="wrap faqLayout">
        <div className="faqIntro">
          <span className="sectionEyebrow">FAQ</span>
          <h2>Pertanyaan yang sering ditanyakan tentang Seara.</h2>
          <p>
            Jawaban singkat untuk membantu Anda memahami cara kerja Seara sebelum
            menjadwalkan demo.
          </p>
          <Link className="textLink faqContactLink" href="/contact">
            Masih ada pertanyaan? Hubungi kami →
          </Link>
        </div>

        <div className="faqSection">
          {faqs.map((faq, index) => (
            <details key={faq.q} open={index === 0}>
              <summary>
                <span>{faq.q}</span>
                <i aria-hidden="true" />
              </summary>
              <div className="faqAnswer">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
