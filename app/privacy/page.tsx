import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan Privasi Seara mengenai penggunaan situs, data, dan layanan.",
  alternates: { canonical: "https://seara.id/privacy" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap heroSingle legalHero">
          <span className="eyebrow">LEGAL</span>
          <h1>Kebijakan Privasi</h1>
          <p className="lead">Informasi lengkap akan disesuaikan dengan kebijakan legal resmi SEARA.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
