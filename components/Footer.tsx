import Link from "next/link";
import { Brand } from "./Brand";

export function Footer({ crm = false }: { crm?: boolean }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footerGrid">
          <div><Brand crm={crm}/><p className="footerIntro">{crm ? "Omnichannel CRM & lead distribution." : "Integrated operational technology for modern businesses."}</p></div>
          <div className="footerCol"><h4>Product</h4>
            {crm ? <><Link href="/crm/fitur">Fitur</Link><Link href="/crm/solusi">Solusi</Link><Link href="/crm/harga">Harga</Link></>
            : <><Link href="/produk#hr">HR & Payroll</Link><Link href="/produk#finance">Finance</Link><Link href="/crm">Sales & CRM</Link><Link href="/produk#retail">Retail & POS</Link><Link href="/produk#manufacturing">Manufacturing</Link></>}
          </div>
          <div className="footerCol"><h4>Resources</h4><Link href="/resources">Blog</Link><Link href="/resources">Guides</Link><Link href="/resources">Stories</Link><Link href="/resources">Webinar</Link></div>
          <div className="footerCol"><h4>Company</h4><Link href="/about">About</Link><Link href={crm ? "/crm/contact" : "/contact"}>Contact</Link><a href="#">Privacy</a><a href="#">Terms</a></div>
        </div>
        <div className="copyright">© 2026 Seara. All rights reserved.</div>
      </div>
    </footer>
  );
}
