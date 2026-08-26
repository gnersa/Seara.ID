import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Harga & Paket ERP Seara",
  description: "Temukan paket dan harga Seara berdasarkan produk, jumlah pengguna, unit bisnis, dan kebutuhan integrasi perusahaan Anda.",
  alternates: { canonical: "https://seara.id/harga" },
};

const packages = [
  {
    name: "Essentials",
    desc: "Untuk bisnis yang mulai mendigitalisasi operasional.",
    price: "Custom",
    features: ["Pilih modul sesuai kebutuhan", "Setup sesuai workflow", "Standard support"],
  },
  {
    name: "Business",
    desc: "Untuk tim yang membutuhkan workflow terintegrasi antar fungsi.",
    price: "Custom",
    features: ["Multiple operational modules", "Advanced workflow", "Integration options", "Business support"],
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "Untuk organisasi dengan kebutuhan multi-unit dan integrasi khusus.",
    price: "Custom",
    features: ["Enterprise architecture", "Multi-unit / multi-entity", "Custom integration", "Priority support"],
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap heroSingle">
          <span className="eyebrow">HARGA</span>
          <h1>Pilih solusi sesuai <span className="gradient">kebutuhan operasional.</span></h1>
          <p className="lead">
            Karena kebutuhan setiap bisnis berbeda, paket Seara dapat disesuaikan berdasarkan produk, jumlah pengguna, unit, dan integrasi.
          </p>
        </div>

        <section>
          <div className="wrap priceGrid">
            {packages.map((p) => (
              <article className={`priceCard ${p.featured ? "featured" : ""}`} key={p.name}>
                {p.featured && <span className="eyebrow">RECOMMENDED</span>}
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="price">{p.price}</div>
                <ul className="checks">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Link className={p.featured ? "btn btnBlue" : "btn btnGhost"} href="/contact">
                  Hubungi Kami
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
