 "use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";

const productItems = [
  ["HR & Payroll", "/produk#hr", "People, attendance & payroll"],
  ["Finance", "/produk#finance", "Finance & operational control"],
  ["CRM", "/crm", "Customer, lead & sales operations"],
  ["Retail & POS", "/produk#retail", "Outlet & point-of-sale"],
  ["Manufacturing", "/produk#manufacturing", "Production & manufacturing ops"],
];

const industryItems = [
  ["Kesehatan", "/industri#kesehatan"],
  ["Pendidikan", "/industri#pendidikan"],
  ["Properti", "/industri#properti"],
  ["Tour & Travel", "/industri#tour-travel"],
  ["Salon & Kecantikan", "/industri#salon-kecantikan"],
  ["F&B", "/industri#fnb"],
  ["Pemerintahan", "/industri#pemerintahan"],
  ["Logistik", "/industri#logistik"],
];

const resourceItems = [
  ["Blog", "/resources#blog"],
  ["Guides", "/resources#guides"],
  ["Webinar", "/resources#webinar"],
  ["Stories", "/resources#stories"],
  ["Templates", "/resources#templates"],
];

const navText = {
  id: {
    product: "Produk",
    industry: "Industri",
    price: "Harga",
    resource: "Resource",
    login: "Login",
    whatsapp: "WhatsApp Kami",
    trial: "Coba Gratis",
    featured: "UNGGULAN",
    allProducts: "Lihat Semua Produk",
    allIndustries: "Lihat Semua Industri",
    allResources: "Lihat Semua Resource",
  },
  en: {
    product: "Products",
    industry: "Industries",
    price: "Pricing",
    resource: "Resources",
    login: "Login",
    whatsapp: "WhatsApp Us",
    trial: "Try Free",
    featured: "FEATURED",
    allProducts: "View All Products",
    allIndustries: "View All Industries",
    allResources: "View All Resources",
  },
} as const;

function LanguageSwitcher() {
  const [lang, setLang] = useState<"id" | "en">("id");

  useEffect(() => {
    const stored = localStorage.getItem("seara-language");
    if (stored === "en" || stored === "id") {
      setLang(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  function switchLanguage(next: "id" | "en") {
    setLang(next);
    localStorage.setItem("seara-language", next);
    document.documentElement.lang = next;
    window.dispatchEvent(new CustomEvent("seara-language", { detail: next }));
  }

  return (
    <div className="langSwitcher" aria-label="Language">
      <span className="globeIcon">◎</span>
      <button
        type="button"
        className="langCurrent"
        onClick={() => switchLanguage(lang === "id" ? "en" : "id")}
        title="Switch language"
      >
        {lang.toUpperCase()} <span className="chev">⌄</span>
      </button>
    </div>
  );
}

export function Header({ crm = false }: { crm?: boolean }) {
  const [lang, setLang] = useState<"id" | "en">("id");

  useEffect(() => {
    const stored = localStorage.getItem("seara-language");
    if (stored === "en" || stored === "id") setLang(stored);

    const handler = (e: Event) => {
      const value = (e as CustomEvent<"id" | "en">).detail;
      if (value) setLang(value);
    };
    window.addEventListener("seara-language", handler);
    return () => window.removeEventListener("seara-language", handler);
  }, []);

  const t = navText[lang];

  if (crm) {
    return (
      <header className="nav crmNav">
        <div className="wrap navInner">
          <Brand crm />
          <nav className="navLinks">
            <Link href="/crm/fitur">{lang === "id" ? "Fitur" : "Features"}</Link>
            <Link href="/crm/solusi">{lang === "id" ? "Solusi" : "Solutions"}</Link>
            <Link href="/crm/harga">{t.price}</Link>
            <Link href="/resources">{t.resource}</Link>
          </nav>
          <div className="navActions">
            <LanguageSwitcher />
            <a className="navLogin" href="https://crm.seara.id">{t.login}</a>
            <a
              className="btn btnWhatsApp"
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="waIcon">◉</span> {t.whatsapp}
            </a>
            <Link className="btn btnBlue" href="/crm/contact">{t.trial}</Link>
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
            <Link href="/produk">{t.product} <span className="chev">⌄</span></Link>
            <div className="mega megaProducts">
              <div>
                <p className="megaLabel">{t.product.toUpperCase()}</p>
                {productItems.map(([label, href, desc]) => (
                  <Link className="megaProductLink" href={href} key={label}>
                    <span className="megaIcon">{label.slice(0,2).toUpperCase()}</span>
                    <span><strong>{label}</strong><small>{desc}</small></span>
                    <b>→</b>
                  </Link>
                ))}
                <Link href="/produk" className="megaFooterLink">{t.allProducts} →</Link>
              </div>

              <Link href="/crm" className="megaFeatured">
                <small>{t.featured}</small>
                <strong>Seara CRM</strong>
                <span>Omnichannel CRM, lead distribution & team monitoring.</span>
                <b>Explore CRM →</b>
              </Link>
            </div>
          </div>

          <div className="megaTrigger">
            <Link href="/industri">{t.industry} <span className="chev">⌄</span></Link>
            <div className="mega compactMega">
              <div>
                <p className="megaLabel">{t.industry.toUpperCase()}</p>
                <div className="industryGrid">
                  {industryItems.map(([label, href]) => (
                    <Link className="simpleMegaLink" href={href} key={label}>
                      <span>{label}</span><b>→</b>
                    </Link>
                  ))}
                </div>
                <Link href="/industri" className="megaFooterLink">{t.allIndustries} →</Link>
              </div>
            </div>
          </div>

          <Link href="/harga">{t.price}</Link>

          <div className="megaTrigger">
            <Link href="/resources">{t.resource} <span className="chev">⌄</span></Link>
            <div className="mega resourceMega">
              <div>
                <p className="megaLabel">{t.resource.toUpperCase()}</p>
                {resourceItems.map(([label, href]) => (
                  <Link className="simpleMegaLink" href={href} key={label}>
                    <span>{label}</span><b>→</b>
                  </Link>
                ))}
                <Link href="/resources" className="megaFooterLink">{t.allResources} →</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="navActions">
          <LanguageSwitcher />
          <a className="navLogin" href="https://crm.seara.id">{t.login}</a>
          <a
            className="btn btnWhatsApp"
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="waIcon">◉</span>
            {t.whatsapp}
          </a>
          <Link className="btn btnTrial" href="/contact">{t.trial}</Link>
        </div>
      </div>
    </header>
  );
}
