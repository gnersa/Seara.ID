import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icons";
import { CookieSettings } from "./CookieSettings";
import { contactEmail, industries, products, resources, whatsappDisplay, whatsappNumber } from "@/lib/site-data";

export function Footer({ crm = false }: { crm?: boolean }) {
  return (
    <footer className="siteFooter">
      <div className="wrap">
        <div className="footerGrid footerGridV4">
          <div className="footerBrandColumn">
            <Link href={crm ? "/crm" : "/"} className="footerBrand"><Image src="/seara-logo.png" width={44} height={44} alt="Seara"/><span>Seara</span></Link>
            <p className="footerStatement"><strong>Platform ERP modern untuk perusahaan dinamis.</strong> Kelola HR, Keuangan, dan Operasional dalam satu ekosistem cerdas.</p>
            <div className="footerContactsInline">
              <a className="contactItem" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><span className="contactIcon"><Icons.whatsapp/></span><span>{whatsappDisplay}</span></a>
              <a className="contactItem" href={`mailto:${contactEmail}`}><span className="contactIcon"><Icons.mail/></span><span>{contactEmail}</span></a>
              <div className="contactItem"><span className="contactIcon"><Icons.pin/></span><span>Bandung, Jawa Barat</span></div>
            </div>
          </div>

          <div className="footerCol"><h4>Produk</h4>{products.map((p)=><Link key={p.slug} href={p.slug === "crm" ? "/crm" : `/produk/${p.slug}`}>{p.title}</Link>)}</div>
          <div className="footerCol"><h4>Industri</h4>{industries.map((i)=><Link key={i.slug} href={`/industri/${i.slug}`}>{i.title}</Link>)}</div>
          <div className="footerCol"><h4>Resource</h4>{resources.map((r)=><Link key={r.slug} href={`/resources/${r.slug}`}>{r.title}</Link>)}</div>
          <div className="footerCol"><h4>Perusahaan</h4><Link href="/about">Tentang Kami</Link><Link href="/contact">Kontak</Link><Link href="/harga">Harga</Link><a href={`mailto:${contactEmail}?subject=Partnership dengan Seara`}>Partner</a></div>
        </div>

        <div className="footerBottom footerBottomV4">
          <strong>© 2026 SEARA, Inc. All rights reserved.</strong>
          <nav className="footerLegal"><Link href="/privacy">Kebijakan Privasi</Link><Link href="/terms">Syarat & Ketentuan</Link><CookieSettings/></nav>
        </div>
      </div>
    </footer>
  );
}
