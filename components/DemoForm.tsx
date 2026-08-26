"use client";

import { FormEvent, useState } from "react";
import { whatsappNumber, contactEmail } from "@/lib/site-data";

export function DemoForm({ crm = false }: { crm?: boolean }) {
  const [status, setStatus] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const interest = String(data.get("interest") || (crm ? "Seara CRM" : "Seara"));
    const team = String(data.get("team") || "-");
    const message = String(data.get("message") || "");
    const text = `Halo Seara, saya ingin request demo.\n\nNama: ${name}\nEmail: ${email}\nPerusahaan: ${company}\nProduk: ${interest}\nUkuran tim: ${team}\nKebutuhan: ${message}`;
    setStatus("Membuka WhatsApp untuk mengirim permintaan demo…");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <article className="card demoFormCard">
      <span className="eyebrow">REQUEST DEMO</span>
      <h3>Jadwalkan demo dengan tim Seara</h3>
      <p>Isi kebutuhan Anda. Setelah dikirim, WhatsApp akan terbuka dengan detail yang sudah dirangkum.</p>
      <form className="form" onSubmit={submit}>
        <input name="name" required placeholder="Nama" />
        <input name="email" required type="email" placeholder="Email perusahaan" />
        <input name="company" required placeholder="Nama perusahaan" />
        {!crm && (
          <select name="interest" defaultValue="">
            <option value="" disabled>Produk yang diminati</option>
            <option>HR & Payroll</option><option>Finance</option><option>Seara CRM</option><option>Retail & POS</option><option>Manufacturing</option>
          </select>
        )}
        <select name="team" defaultValue="">
          <option value="" disabled>Ukuran tim</option><option>1–10</option><option>11–50</option><option>51–200</option><option>200+</option>
        </select>
        <textarea name="message" required placeholder="Ceritakan kebutuhan atau workflow yang ingin diperbaiki" />
        <button className="btn btnBlue" type="submit">Kirim Permintaan Demo →</button>
        {status && <small className="formStatus">{status}</small>}
      </form>
      <a className="emailAlternative" href={`mailto:${contactEmail}?subject=Request Demo Seara`}>Atau kirim email ke {contactEmail}</a>
    </article>
  );
}
