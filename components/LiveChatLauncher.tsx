"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const LiveChatPanel = dynamic(() => import("./LiveChatPanel"), { ssr: false, loading: () => <div className="liveChatLoading">Memuat…</div> });

export function LiveChatLauncher() {
  const [open, setOpen] = useState(false);
  return (
    <div className="liveChatRoot">
      {open && <LiveChatPanel onClose={()=>setOpen(false)} />}
      <button type="button" className="liveChatButton" aria-label={open?"Tutup live chat":"Buka live chat"} onClick={()=>setOpen(!open)}>
        {open ? "×" : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v11H8l-4 3v-14Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><circle cx="9" cy="11" r="1" fill="currentColor"/><circle cx="12" cy="11" r="1" fill="currentColor"/><circle cx="15" cy="11" r="1" fill="currentColor"/></svg>}
      </button>
    </div>
  );
}
