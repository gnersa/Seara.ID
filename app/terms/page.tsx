import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan Ketentuan penggunaan website, produk, dan layanan Seara.",
  alternates: { canonical: "https://seara.id/terms" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap heroSingle legalHero">
          <span className="eyebrow">LEGAL</span>
          <h1>Syarat & Ketentuan</h1>
          <p className="lead">Informasi lengkap akan disesuaikan dengan kebijakan legal resmi SEARA.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
