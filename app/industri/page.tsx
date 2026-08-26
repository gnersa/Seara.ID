import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/Sections";

export const metadata = { title: "Industri" };

const industries = [
  ["kesehatan", "KS", "Kesehatan", "Kelola customer, appointment, tim, cabang, dan operasional layanan kesehatan."],
  ["pendidikan", "PD", "Pendidikan", "Kelola leads siswa, komunikasi, finance, HR, dan operasional institusi pendidikan."],
  ["properti", "PR", "Properti", "Distribusikan leads property, monitor follow-up sales, dan customer journey."],
  ["tour-travel", "TR", "Tour & Travel", "Kelola inquiry, booking, customer communication, finance, dan tim."],
  ["salon-kecantikan", "SK", "Salon & Kecantikan", "Kelola appointment, customer database, outlet, staff, dan transaksi."],
  ["fnb", "FB", "F&B", "Kelola outlet, POS, customer, finance, inventory, dan workforce."],
  ["pemerintahan", "PM", "Pemerintahan", "Digitalisasi workflow layanan, komunikasi, data, dan monitoring operasional."],
  ["logistik", "LG", "Logistik", "Kelola distributed team, customer communication, workflow, dan operational visibility."],
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap heroSingle">
          <span className="eyebrow">INDUSTRI</span>
          <h1>Solusi yang mengikuti <span className="gradient">cara bisnis Anda bekerja.</span></h1>
          <p className="lead">
            Seara menghubungkan sistem operasional dengan kebutuhan spesifik berbagai industri.
          </p>
        </div>

        <section>
          <div className="wrap grid2">
            {industries.map(([id, icon, title, body]) => (
              <article className="card industryCard" id={id} key={id}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
                <a href="/contact" className="textLink">Pelajari Solusi →</a>
              </article>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
