export function Dashboard({ crm = false }: { crm?: boolean }) {
  return (
    <div className="visual" aria-label={crm ? "Ilustrasi dashboard Seara CRM" : "Ilustrasi dashboard Seara"}>
      <div className="darkPanel">
        <div className="windowTop"><span/><span/><span/><b>{crm ? "Seara CRM" : "Seara OS"}</b><em>DEMO DATA</em></div>
        <div className="kpis">
          <div className="kpi"><small>{crm ? "Lead Baru" : "Karyawan"}</small><b>{crm ? "148" : "248"}</b><em>Ilustrasi</em></div>
          <div className="kpi"><small>{crm ? "Rata-rata Respon" : "Operasional"}</small><b>{crm ? "1m 42s" : "Aktif"}</b><em>Demo</em></div>
          <div className="kpi"><small>{crm ? "Konversi" : "Lead Terbuka"}</small><b>{crm ? "18.6%" : "126"}</b><em>Ilustrasi</em></div>
        </div>
        <div className="panel"><div className="panelTitle"><small>{crm ? "Distribusi Lead" : "Ringkasan Operasional"}</small><span>Contoh tampilan</span></div>
          <div className="chart">{[35,52,48,70,62,84,73,92,78,88].map((h,i)=><i className="bar" style={{height:`${h}%`}} key={i}/>)}</div>
        </div>
        <div className="miniGrid">
          {(crm ? [["WhatsApp","Terhubung"],["Instagram","Terhubung"],["Email","Terhubung"]] : [["HR & Payroll","People ops"],["Finance","Financial ops"],["Sales & CRM","Customer & revenue"]]).map(([a,b])=>
            <div className="miniCard" key={a}><strong>{a}</strong><span>{b}</span></div>)}
        </div>
      </div>
    </div>
  );
}
