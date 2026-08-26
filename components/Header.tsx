"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { Icons } from "./Icons";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { industries, products, resources, whatsappNumber } from "@/lib/site-data";

const industryIcons = [
  Icons.health,
  Icons.education,
  Icons.property,
  Icons.travel,
  Icons.beauty,
  Icons.food,
  Icons.government,
  Icons.logistics,
];

const resourceIcons = [Icons.blog, Icons.guide, Icons.webinar, Icons.story, Icons.template];

function ProductMega() {
  return (
    <div className="mega megaProducts">
      <div className="megaHeading"><span>Produk</span><small>Sistem operasional Seara</small></div>
      <div className="megaGrid4 productGrid">
        {products.map((item) => (
          <Link href={item.slug === "crm" ? "/crm" : `/produk/${item.slug}`} className="productMegaItem" key={item.slug}>
            <span className="productMegaIcon">{item.icon}</span>
            <span><strong>{item.title}</strong><small>{item.navDescription}</small></span>
          </Link>
        ))}
      </div>
      <Link href="/produk" className="megaBottomLink">Lihat semua produk →</Link>
    </div>
  );
}

function IndustryMega() {
  return (
    <div className="mega megaIndustry">
      <div className="megaHeading"><span>Industri</span><small>Solusi berdasarkan industri</small></div>
      <div className="megaGrid4">
        {industries.map((item, index) => {
          const Icon = industryIcons[index];
          return (
            <Link href={`/industri/${item.slug}`} className="richMegaItem" key={item.slug}>
              <span className="richMegaIcon"><Icon /></span>
              <span className="richMegaCopy"><strong>{item.title}</strong><small>{item.navDescription}</small></span>
            </Link>
          );
        })}
      </div>
      <Link href="/industri" className="megaBottomLink">Lihat semua industri →</Link>
    </div>
  );
}

function ResourceMega() {
  return (
    <div className="mega megaResource">
      <div className="megaHeading"><span>Resource</span><small>Insight & materi bisnis</small></div>
      <div className="megaGrid4 resourceGrid">
        {resources.map((item, index) => {
          const Icon = resourceIcons[index];
          return (
            <Link href={`/resources/${item.slug}`} className="richMegaItem" key={item.slug}>
              <span className="richMegaIcon"><Icon /></span>
              <span className="richMegaCopy"><strong>{item.title}</strong><small>{item.navDescription}</small></span>
            </Link>
          );
        })}
      </div>
      <Link href="/resources" className="megaBottomLink">Lihat semua resource →</Link>
    </div>
  );
}

export function Header({ crm = false }: { crm?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  return (
    <header className="nav">
      <div className="wrap navInner">
        <Brand crm={crm} />

        <nav className="navLinks">
          {crm ? (
            <>
              <Link href="/crm/fitur">Fitur</Link>
              <Link href="/crm/solusi">Solusi</Link>
              <Link href="/crm/harga">Harga</Link>
              <Link href="/resources">Resource</Link>
            </>
          ) : (
            <>
              <div className="navHover"><Link href="/produk">Produk <span className="chevron">⌄</span></Link><ProductMega /></div>
              <div className="navHover"><Link href="/industri">Industri <span className="chevron">⌄</span></Link><IndustryMega /></div>
              <Link href="/harga">Harga</Link>
              <div className="navHover"><Link href="/resources">Resource <span className="chevron">⌄</span></Link><ResourceMega /></div>
            </>
          )}
        </nav>

        <div className="navActions">
          <ThemeSwitcher />
          <a className="navLogin desktopOnly" href="https://crm.seara.id">Login</a>
          <a className="btn btnWhatsApp desktopOnly" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            <Icons.whatsapp className="btnIcon" /> WhatsApp Kami
          </a>
          <Link className="btn btnTrial desktopOnly" href={crm ? "/crm/contact" : "/contact"}>Coba Demo</Link>
          <button className="mobileMenuButton" type="button" aria-label="Buka menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <span className="mobileClose">×</span> : <span className="hamb"><i/><i/><i/></span>}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobileDrawer">
          <div className="wrap mobileDrawerInner">
            {crm ? (
              <div className="mobilePrimaryLinks">
                <Link onClick={() => setMobileOpen(false)} href="/crm/fitur">Fitur</Link>
                <Link onClick={() => setMobileOpen(false)} href="/crm/solusi">Solusi</Link>
                <Link onClick={() => setMobileOpen(false)} href="/crm/harga">Harga</Link>
                <Link onClick={() => setMobileOpen(false)} href="/resources">Resource</Link>
              </div>
            ) : (
              <>
                <details open><summary>Produk</summary><div className="mobileSubGrid">{products.map((p)=><Link onClick={()=>setMobileOpen(false)} key={p.slug} href={p.slug === "crm" ? "/crm" : `/produk/${p.slug}`}><b>{p.title}</b><small>{p.navDescription}</small></Link>)}</div></details>
                <details><summary>Industri</summary><div className="mobileSubGrid">{industries.map((i)=><Link onClick={()=>setMobileOpen(false)} key={i.slug} href={`/industri/${i.slug}`}><b>{i.title}</b><small>{i.navDescription}</small></Link>)}</div></details>
                <Link className="mobileStandalone" onClick={()=>setMobileOpen(false)} href="/harga">Harga</Link>
                <details><summary>Resource</summary><div className="mobileSubGrid">{resources.map((r)=><Link onClick={()=>setMobileOpen(false)} key={r.slug} href={`/resources/${r.slug}`}><b>{r.title}</b><small>{r.navDescription}</small></Link>)}</div></details>
              </>
            )}

            <div className="mobileActions">
              <a className="btn btnGhost" href="https://crm.seara.id">Login</a>
              <a className="btn btnWhatsApp" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><Icons.whatsapp className="btnIcon"/> WhatsApp Kami</a>
              <Link className="btn btnTrial" onClick={()=>setMobileOpen(false)} href={crm ? "/crm/contact" : "/contact"}>Coba Demo</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
