"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { Icons } from "./Icons";
import { ThemeSwitcher } from "./ThemeSwitcher";

type Language = "id" | "en";

const dictionary = {
  id: {
    product: "Produk",
    industry: "Industri",
    pricing: "Harga",
    resources: "Resource",
    login: "Login",
    whatsapp: "WhatsApp Kami",
    trial: "Coba Gratis",
    allProducts: "Lihat semua produk",
    allIndustries: "Lihat semua industri",
    allResources: "Lihat semua resource",
    productSub: "Sistem operasional Seara",
    industrySub: "Solusi berdasarkan industri",
    resourceSub: "Insight & materi bisnis",
  },
  en: {
    product: "Products",
    industry: "Industries",
    pricing: "Pricing",
    resources: "Resources",
    login: "Login",
    whatsapp: "WhatsApp Us",
    trial: "Try Free",
    allProducts: "View all products",
    allIndustries: "View all industries",
    allResources: "View all resources",
    productSub: "Seara operational systems",
    industrySub: "Solutions by industry",
    resourceSub: "Business insights & resources",
  },
};

const products = [
  ["HR & Payroll", "Kelola people, attendance & payroll", "/produk#hr", "HR"],
  ["Finance", "Keuangan, reporting & control", "/produk#finance", "FI"],
  ["CRM", "Customer, lead & sales operation", "/crm", "CR"],
  ["Retail & POS", "Outlet, transaksi & point-of-sale", "/produk#retail", "PO"],
  ["Manufacturing", "Production & manufacturing ops", "/produk#manufacturing", "MF"],
];

const industries = [
  ["Kesehatan", "Jawab & booking pasien 24/7", "/industri#kesehatan", Icons.health],
  ["Pendidikan", "Jawab calon siswa saat PMB", "/industri#pendidikan", Icons.education],
  ["Properti", "Kualifikasi leads & atur kunjungan", "/industri#properti", Icons.property],
  ["Tour & Travel", "Jawaban multi-bahasa lintas zona", "/industri#tour-travel", Icons.travel],
  ["Salon & Kecantikan", "Kelola appointment & follow-up pelanggan", "/industri#salon-kecantikan", Icons.beauty],
  ["F&B", "Terima reservasi & pesanan lebih cepat", "/industri#fnb", Icons.food],
  ["Pemerintahan", "Layanan publik lebih responsif & transparan", "/industri#pemerintahan", Icons.government],
  ["Logistik", "Update pengiriman & support pelanggan", "/industri#logistik", Icons.logistics],
];

const resources = [
  ["Blog", "Insight terbaru seputar operasional & teknologi", "/resources#blog", Icons.blog],
  ["Guides", "Panduan praktis untuk transformasi bisnis", "/resources#guides", Icons.guide],
  ["Webinar", "Diskusi & sharing bersama praktisi", "/resources#webinar", Icons.webinar],
  ["Stories", "Case study dan cerita implementasi", "/resources#stories", Icons.story],
  ["Templates", "Template workflow, KPI & checklist", "/resources#templates", Icons.template],
];

function LanguageMenu({
  lang,
  setLang,
}: {
  lang: Language;
  setLang: (lang: Language) => void;
}) {
  function choose(next: Language) {
    setLang(next);
    localStorage.setItem("seara-language", next);
    document.documentElement.lang = next === "id" ? "id" : "en";
  }

  return (
    <div className="languageMenu hoverMenu">
      <button type="button" className="languageButton">
        <Icons.globe className="navSvg" />
        <span>{lang === "id" ? "Indonesian" : "English"}</span>
        <span className="chevron">⌄</span>
      </button>
      <div className="smallDropdown languageDropdown">
        <button className={lang === "id" ? "active" : ""} onClick={() => choose("id")}>Indonesian</button>
        <button className={lang === "en" ? "active" : ""} onClick={() => choose("en")}>English</button>
      </div>
    </div>
  );
}

function IndustryMega({ t }: { t: typeof dictionary.id | typeof dictionary.en }) {
  return (
    <div className="mega megaIndustry">
      <div className="megaMain">
        <div className="megaHeading">
          <span>{t.industry}</span>
          <small>{t.industrySub}</small>
        </div>
        <div className="industryMegaGrid">
          {industries.map(([title, description, href, Icon]) => {
            const IndustryIcon = Icon as typeof Icons.health;
            return (
              <Link href={href as string} className="richMegaItem" key={title as string}>
                <span className="richMegaIcon"><IndustryIcon /></span>
                <span className="richMegaCopy">
                  <strong>{title as string}</strong>
                  <small>{description as string}</small>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <aside className="megaAside">
        <span className="asideEyebrow">{t.allIndustries.toUpperCase()}</span>
        <h3>Solusi untuk cara bisnis yang berbeda.</h3>
        <p>Temukan bagaimana Seara membantu operasional berbagai industri menjadi lebih efisien.</p>
        <Link href="/industri" className="megaAsideButton">{t.allIndustries} →</Link>
      </aside>
    </div>
  );
}

function ResourceMega({ t }: { t: typeof dictionary.id | typeof dictionary.en }) {
  return (
    <div className="mega megaResource">
      <div className="megaMain">
        <div className="megaHeading">
          <span>{t.resources}</span>
          <small>{t.resourceSub}</small>
        </div>
        <div className="resourceMegaGrid">
          {resources.map(([title, description, href, Icon]) => {
            const ResourceIcon = Icon as typeof Icons.blog;
            return (
              <Link href={href as string} className="richMegaItem" key={title as string}>
                <span className="richMegaIcon"><ResourceIcon /></span>
                <span className="richMegaCopy">
                  <strong>{title as string}</strong>
                  <small>{description as string}</small>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <aside className="megaAside">
        <span className="asideEyebrow">{t.allResources.toUpperCase()}</span>
        <h3>Belajar. Terapkan. Tumbuh.</h3>
        <p>Insight dan materi untuk memperbaiki customer, people, finance, dan operational workflow.</p>
        <Link href="/resources" className="megaAsideButton">{t.allResources} →</Link>
      </aside>
    </div>
  );
}

export function Header({ crm = false }: { crm?: boolean }) {
  const [lang, setLang] = useState<Language>("id");

  useEffect(() => {
    const saved = localStorage.getItem("seara-language");
    if (saved === "id" || saved === "en") {
      setLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const t = dictionary[lang];

  if (crm) {
    return (
      <header className="nav">
        <div className="wrap navInner">
          <Brand crm />
          <nav className="navLinks">
            <Link href="/crm/fitur">{lang === "id" ? "Fitur" : "Features"}</Link>
            <Link href="/crm/solusi">{lang === "id" ? "Solusi" : "Solutions"}</Link>
            <Link href="/crm/harga">{t.pricing}</Link>
            <Link href="/resources">{t.resources}</Link>
          </nav>
          <div className="navActions">
            <ThemeSwitcher />
            <LanguageMenu lang={lang} setLang={setLang} />
            <a className="navLogin" href="https://crm.seara.id">{t.login}</a>
            <a className="btn btnWhatsApp" href="https://wa.me/6285175380890" target="_blank" rel="noreferrer">
              <Icons.whatsapp className="btnIcon" /> {t.whatsapp}
            </a>
            <Link className="btn btnTrial" href="/crm/contact">{t.trial}</Link>
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
          <div className="navHover">
            <Link href="/produk">{t.product} <span className="chevron">⌄</span></Link>
            <div className="mega megaProducts">
              <div className="megaMain">
                <div className="megaHeading">
                  <span>{t.product}</span>
                  <small>{t.productSub}</small>
                </div>
                <div className="productMegaList">
                  {products.map(([title, description, href, icon]) => (
                    <Link href={href} className="productMegaItem" key={title}>
                      <span className="productMegaIcon">{icon}</span>
                      <span><strong>{title}</strong><small>{description}</small></span>
                      <b>→</b>
                    </Link>
                  ))}
                </div>
              </div>
              <aside className="megaAside crmAside">
                <span className="asideEyebrow">FEATURED</span>
                <h3>Seara CRM</h3>
                <p>Omnichannel CRM, lead distribution, multi-unit & team monitoring.</p>
                <Link href="/crm" className="megaAsideButton">Explore CRM →</Link>
              </aside>
            </div>
          </div>

          <div className="navHover">
            <Link href="/industri">{t.industry} <span className="chevron">⌄</span></Link>
            <IndustryMega t={t} />
          </div>

          <Link href="/harga">{t.pricing}</Link>

          <div className="navHover">
            <Link href="/resources">{t.resources} <span className="chevron">⌄</span></Link>
            <ResourceMega t={t} />
          </div>
        </nav>

        <div className="navActions">
          <ThemeSwitcher />
          <LanguageMenu lang={lang} setLang={setLang} />
          <a className="navLogin" href="https://crm.seara.id">{t.login}</a>
          <a className="btn btnWhatsApp" href="https://wa.me/6285175380890" target="_blank" rel="noreferrer">
            <Icons.whatsapp className="btnIcon" />
            {t.whatsapp}
          </a>
          <Link className="btn btnTrial" href="/contact">{t.trial}</Link>
        </div>
      </div>
    </header>
  );
}
