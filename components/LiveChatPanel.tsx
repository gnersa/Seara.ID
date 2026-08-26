"use client";

import { useState } from "react";
import { Icons } from "./Icons";
import { whatsappNumber } from "@/lib/site-data";

const faqs = [
  ["Apa itu Seara ERP?", "Seara adalah platform ERP modern yang menyatukan HR, Keuangan, CRM, Retail, Manufacturing, dan operasional bisnis dalam satu ekosistem."],
  ["Produk apa saja yang tersedia?", "Produk utama Seara mencakup HR & Payroll, Finance, CRM, Retail & POS, serta Manufacturing."],
  ["Bagaimana cara mulai?", "Klik Coba Demo atau kirim pesan WhatsApp. Tim Seara akan membantu memetakan kebutuhan dan modul yang relevan."],
];

export default function LiveChatPanel({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const send = () => {
    const text = message.trim() || "Halo Seara, saya ingin mengetahui lebih lanjut mengenai produk dan layanan Seara.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };
  return (
    <section className="liveChatPanel" aria-label="Live Chat Seara">
      <div className="liveChatHeader"><div><small>SEARA SUPPORT</small><h3>Hai! Ada yang bisa kami bantu? 👋</h3></div><button onClick={onClose} aria-label="Tutup chat">×</button></div>
      <p className="liveChatIntro">Pilih FAQ atau kirim pesan langsung ke tim kami melalui WhatsApp.</p>
      <div className="faqList">{faqs.map(([q,a], index)=><div className="faqItem" key={q}><button onClick={()=>setActive(active===index?null:index)}><span>{q}</span><b>{active===index?"−":"+"}</b></button>{active===index&&<p>{a}</p>}</div>)}</div>
      <div className="liveChatComposer"><textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Tulis pesan Anda..." rows={3}/><button className="btn btnBlue liveChatSend" onClick={send}><Icons.whatsapp className="btnIcon"/>Kirim Pesan ke Tim</button></div>
    </section>
  );
}
