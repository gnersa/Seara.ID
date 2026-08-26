import Link from "next/link";
import { Brand } from "./Brand";

const mainProducts = [
  ["HR & Payroll", "/produk#hr"],
  ["Finance", "/produk#finance"],
  ["Sales & CRM", "/crm"],
  ["Retail & POS", "/produk#retail"],
  ["Manufacturing", "/produk#manufacturing"],
];

export function Header({ crm = false }: { crm?: boolean }) {
  if (crm) {
    return (
      <header className="nav">
        <div className="wrap navInner">
          <Brand crm />
          <nav className="navLinks">
            <Link href="/crm/fitur">Fitur</Link>
            <Link href="/crm/solusi">Solusi</Link>
            <Link href="/crm/harga">Harga</Link>
            <Link href="/resources">Resources</Link>
          </nav>
          <div className="navActions">
            <a className="btn btnGhost" href="https://crm.seara.id">Login</a>
            <Link className="btn btnBlue" href="/crm/contact">Request Demo</Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="nav">
      <div className="wrap navInner">
        <Brand />
        <nav className="navLinks">
          <div className="megaTrigger">
            <Link href="/produk">Produk <span className="chev">⌄</span></Link>
            <div className="mega">
              <div>
                <p className="megaLabel">OPERATIONAL SYSTEM</p>
                {mainProducts.map(([label, href]) => (
                  <Link className="megaLink" href={href} key={label}>{label}<span>→</span></Link>
                ))}
              </div>
              <Link href="/crm" className="megaFeatured">
                <small>FEATURED</small>
                <strong>Seara CRM</strong>
                <span>Omnichannel CRM & lead distribution</span>
                <b>Explore CRM →</b>
              </Link>
            </div>
          </div>
          <Link href="/solusi">Solusi</Link>
          <Link href="/industri">Industri</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/about">Company</Link>
        </nav>
        <div className="navActions">
          <a className="btn btnGhost" href="https://crm.seara.id">Login</a>
          <Link className="btn btnDark" href="/contact">Request Demo</Link>
        </div>
      </div>
    </header>
  );
}
