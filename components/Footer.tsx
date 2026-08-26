import Link from "next/link";
import { Brand } from "./Brand";

export function Footer({ crm = false }: { crm?: boolean }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footerGrid">
          <div>
            <Brand crm={crm} />
            <p className="footerIntro">
              {crm
                ? "Omnichannel CRM & lead distribution."
                : "Integrated operational technology for modern businesses."}
            </p>
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
            <Link href="/industri#fnb">F&B</Link>
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
            <h4>Seara</h4>
            <Link href="/harga">Harga</Link>
            <Link href="/contact">Contact</Link>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

        <div className="copyright">© 2026 Seara. All rights reserved.</div>
      </div>
    </footer>
  );
}
