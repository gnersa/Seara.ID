"use client";

import Link from "next/link";
import { Brand } from "./Brand";
import { Icons } from "./Icons";
import { ThemeSwitcher } from "./ThemeSwitcher";

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

function IndustryMega() {
  return (
    <div className="mega megaIndustry">
      <div className="megaHeading">
        <span>Industri</span>
        <small>Solusi berdasarkan industri</small>
      </div>

      <div className="megaGrid4">
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

      <Link href="/industri" className="megaBottomLink">Lihat semua industri →</Link>
    </div>
  );
}

function ResourceMega() {
  return (
    <div className="mega megaResource">
      <div className="megaHeading">
        <span>Resource</span>
        <small>Insight & materi bisnis</small>
      </div>

      <div className="megaGrid4 resourceGrid">
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

      <Link href="/resources" className="megaBottomLink">Lihat semua resource →</Link>
    </div>
  );
}

function ProductMega() {
  return (
    <div className="mega megaProducts">
      <div className="megaHeading">
        <span>Produk</span>
        <small>Sistem operasional Seara</small>
      </div>

      <div className="megaGrid4 productGrid">
        {products.map(([title, description, href, icon]) => (
          <Link href={href} className="productMegaItem" key={title}>
            <span className="productMegaIcon">{icon}</span>
            <span>
              <strong>{title}</strong>
              <small>{description}</small>
            </span>
          </Link>
        ))}
      </div>

      <Link href="/produk" className="megaBottomLink">Lihat semua produk →</Link>
    </div>
  );
}

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
            <Link href="/resources">Resource</Link>
          </nav>
          <div className="navActions">
            <ThemeSwitcher />
            <a className="navLogin" href="https://crm.seara.id">Login</a>
            <a
              className="btn btnWhatsApp"
              href="https://wa.me/6285175380890"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.whatsapp className="btnIcon" /> WhatsApp Kami
            </a>
            <Link className="btn btnTrial" href="/crm/contact">Coba Gratis</Link>
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
            <Link href="/produk">Produk <span className="chevron">⌄</span></Link>
            <ProductMega />
          </div>

          <div className="navHover">
            <Link href="/industri">Industri <span className="chevron">⌄</span></Link>
            <IndustryMega />
          </div>

          <Link href="/harga">Harga</Link>

          <div className="navHover">
            <Link href="/resources">Resource <span className="chevron">⌄</span></Link>
            <ResourceMega />
          </div>
        </nav>

        <div className="navActions">
          <ThemeSwitcher />

          <a className="navLogin" href="https://crm.seara.id">Login</a>

          <a
            className="btn btnWhatsApp"
            href="https://wa.me/6285175380890"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.whatsapp className="btnIcon" />
            WhatsApp Kami
          </a>

          <Link className="btn btnTrial" href="/contact">Coba Gratis</Link>
        </div>
      </div>
    </header>
  );
}
