
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icons";

export function Footer({ crm = false }: { crm?: boolean }) {
  return (
    <footer className="siteFooter">
      <div className="wrap">
        <div className="footerGrid footerGridV4">
          <div className="footerBrandColumn">
            <Link href={crm ? "/crm" : "/"} className="footerBrand">
              <Image src="/seara-logo.png" width={44} height={44} alt="Seara" />
              <span>Seara</span>
            </Link>

            <p className="footerStatement">
              <strong>Platform ERP modern untuk perusahaan dinamis.</strong>{" "}
              Kelola HR, Keuangan, dan Operasional dalam satu ekosistem cerdas.
            </p>

            <div className="footerContactsInline">
              <a
                className="contactItem"
                href="https://wa.me/6285175380890"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contactIcon"><Icons.whatsapp /></span>
                <span>+6285175380890</span>
              </a>

              <a className="contactItem" href="mailto:Info@seara.id">
                <span className="contactIcon"><Icons.mail /></span>
                <span>Info@seara.id</span>
              </a>

              <div className="contactItem">
                <span className="contactIcon"><Icons.pin /></span>
                <span>Bandung, Jawa Barat</span>
              </div>
            </div>
          </div>

          <div className="footerCol">
            <h4>Produk</h4>
            <Link href="/produk#hr">HR & Payroll</Link>
            <Link href="/produk#finance">Finance</Link>
            <Link href="/crm">CRM</Link>
            <Link href="/produk#retail">Retail & POS</Link>
            <Link href="/produk#manufacturing">Manufacturing</Link>
          </div>

          <div className="footerCol">
            <h4>Industri</h4>
            <Link href="/industri#kesehatan">Kesehatan</Link>
            <Link href="/industri#pendidikan">Pendidikan</Link>
            <Link href="/industri#properti">Properti</Link>
            <Link href="/industri#tour-travel">Tour & Travel</Link>
            <Link href="/industri#salon-kecantikan">Salon & Kecantikan</Link>
            <Link href="/industri#fnb">F&B</Link>
            <Link href="/industri#pemerintahan">Pemerintahan</Link>
            <Link href="/industri#logistik">Logistik</Link>
          </div>

          <div className="footerCol">
            <h4>Resource</h4>
            <Link href="/resources#blog">Blog</Link>
            <Link href="/resources#guides">Guides</Link>
            <Link href="/resources#webinar">Webinar</Link>
            <Link href="/resources#stories">Stories</Link>
            <Link href="/resources#templates">Templates</Link>
          </div>

          <div className="footerCol">
            <h4>Perusahaan</h4>
            <Link href="/about">Tentang Kami</Link>
            <Link href="/contact">Kontak</Link>
            <Link href="/harga">Harga</Link>
            <a href="#">Partner</a>
          </div>
        </div>

        <div className="footerBottom footerBottomV4">
          <strong>© 2026 SEARA, Inc. All rights reserved.</strong>

          <nav className="footerLegal">
            <a href="/privacy">Kebijakan Privasi</a>
            <a href="/terms">Syarat & Ketentuan</a>
            <button type="button">Cookie Settings</button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
