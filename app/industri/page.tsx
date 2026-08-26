
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icons } from "@/components/Icons";
import { CTA } from "@/components/Sections";

export const metadata = {
  title: "Solusi ERP Berdasarkan Industri",
  description: "Solusi Seara untuk Kesehatan, Pendidikan, Properti, Tour & Travel, Salon & Kecantikan, F&B, Pemerintahan, dan Logistik.",
  alternates: { canonical: "https://seara.id/industri" },
};

const industries = [
  ["kesehatan", "Kesehatan", "Jawab & booking pasien 24/7", Icons.health],
  ["pendidikan", "Pendidikan", "Jawab calon siswa saat PMB", Icons.education],
  ["properti", "Properti", "Kualifikasi leads & atur kunjungan", Icons.property],
  ["tour-travel", "Tour & Travel", "Jawaban multi-bahasa lintas zona", Icons.travel],
  ["salon-kecantikan", "Salon & Kecantikan", "Kelola appointment & follow-up pelanggan", Icons.beauty],
  ["fnb", "F&B", "Terima reservasi & pesanan lebih cepat", Icons.food],
  ["pemerintahan", "Pemerintahan", "Layanan publik lebih responsif & transparan", Icons.government],
  ["logistik", "Logistik", "Update pengiriman & support pelanggan", Icons.logistics],
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap heroSingle">
          <span className="eyebrow">INDUSTRI</span>
          <h1>Solusi yang mengikuti <span className="gradient">cara bisnis Anda bekerja.</span></h1>
          <p className="lead">Seara menghubungkan workflow, data, dan customer interaction sesuai kebutuhan industri.</p>
        </div>

        <section>
          <div className="wrap industryPageGrid">
            {industries.map(([id, title, description, Icon]) => {
              const IndustryIcon = Icon as typeof Icons.health;
              return (
                <article className="industryPageCard" id={id as string} key={id as string}>
                  <div className="industryPageIcon"><IndustryIcon /></div>
                  <div>
                    <h3>{title as string}</h3>
                    <p>{description as string}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
