"use client";

import { useState } from "react";

export function CookieSettings() {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const save = () => {
    localStorage.setItem("seara-cookie-preferences", JSON.stringify({ necessary: true, analytics }));
    setOpen(false);
  };
  return <>
    <button className="footerCookieButton" type="button" onClick={()=>setOpen(true)}>Cookie Settings</button>
    {open && <div className="cookieBackdrop" role="dialog" aria-modal="true" aria-label="Cookie Settings"><div className="cookieModal"><div className="cookieModalHead"><div><small>PRIVACY</small><h3>Cookie Settings</h3></div><button onClick={()=>setOpen(false)}>×</button></div><p>Cookie yang diperlukan selalu aktif. Analytics hanya akan disimpan sebagai preferensi dan siap dihubungkan ke analytics provider saat digunakan.</p><label className="cookieRow"><span><b>Necessary</b><small>Diperlukan untuk fungsi dasar website.</small></span><input type="checkbox" checked disabled/></label><label className="cookieRow"><span><b>Analytics</b><small>Membantu memahami penggunaan website.</small></span><input type="checkbox" checked={analytics} onChange={(e)=>setAnalytics(e.target.checked)}/></label><button className="btn btnBlue" onClick={save}>Simpan Preferensi</button></div></div>}
  </>;
}
