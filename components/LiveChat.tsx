"use client";

import { useState } from "react";
import { Icons } from "./Icons";

const faqs = [
  {
    q: "Apa itu Seara ERP?",
    a: "Seara adalah platform ERP modern yang menyatukan HR, Keuangan, CRM, Retail, Manufacturing, dan operasional bisnis dalam satu ekosistem.",
  },
  {
    q: "Fitur apa saja yang tersedia?",
    a: "Produk utama Seara mencakup HR & Payroll, Finance, CRM, Retail & POS, serta Manufacturing.",
  },
  {
    q: "Bagaimana cara mulai?",
    a: "Anda dapat menghubungi tim Seara melalui WhatsApp atau tombol Coba Gratis untuk mendiskusikan kebutuhan bisnis Anda.",
  },
];

export function LiveChat() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  function sendMessage() {
    const text =
      message.trim() ||
      "Halo Seara, saya ingin mengetahui lebih lanjut mengenai produk dan layanan Seara.";
    window.open(
      `https://wa.me/6285175380890?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="liveChatRoot">
      {open && (
        <section className="liveChatPanel" aria-label="Live Chat Seara">
          <div className="liveChatHeader">
            <div>
              <small>SEARA SUPPORT</small>
              <h3>Hai! Ada yang bisa kami bantu? 👋</h3>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Tutup chat">×</button>
          </div>

          <p className="liveChatIntro">
            Pilih pertanyaan umum atau kirim pesan langsung ke tim kami.
          </p>

          <div className="faqList">
            {faqs.map((faq, index) => (
              <div className="faqItem" key={faq.q}>
                <button type="button" onClick={() => setActive(active === index ? null : index)}>
                  <span>{faq.q}</span>
                  <b>{active === index ? "−" : "+"}</b>
                </button>
                {active === index && <p>{faq.a}</p>}
              </div>
            ))}
          </div>

          <div className="liveChatComposer">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pesan Anda..."
              rows={3}
            />
            <button className="btn btnBlue liveChatSend" type="button" onClick={sendMessage}>
              <Icons.whatsapp className="btnIcon" />
              Kirim Pesan ke Tim
            </button>
          </div>
        </section>
      )}

      <button
        type="button"
        className="liveChatButton"
        aria-label={open ? "Tutup live chat" : "Buka live chat"}
        onClick={() => setOpen(!open)}
      >
        {open ? "×" : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 5.5h16v11H8l-4 3v-14Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
            <circle cx="9" cy="11" r="1" fill="currentColor"/>
            <circle cx="12" cy="11" r="1" fill="currentColor"/>
            <circle cx="15" cy="11" r="1" fill="currentColor"/>
          </svg>
        )}
      </button>
    </div>
  );
}
