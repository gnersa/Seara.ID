export function Dashboard({ crm = false }: { crm?: boolean }) {
  return (
    <div className="visual">
      <div className="darkPanel">
        <div className="windowTop"><span/><span/><span/><b>{crm ? "Seara CRM" : "Seara OS"}</b></div>
        <div className="kpis">
          <div className="kpi"><small>{crm ? "New Leads" : "People"}</small><b>{crm ? "148" : "248"}</b><em>+12.4%</em></div>
          <div className="kpi"><small>{crm ? "Avg. Response" : "Revenue"}</small><b>{crm ? "1m 42s" : "+18.4%"}</b><em>Healthy</em></div>
          <div className="kpi"><small>{crm ? "Conversion" : "Open Leads"}</small><b>{crm ? "18.6%" : "126"}</b><em>Live</em></div>
        </div>
        <div className="panel"><div className="panelTitle"><small>{crm ? "Lead Distribution" : "Operational Overview"}</small><span>Last 30 days</span></div>
          <div className="chart">{[35,52,48,70,62,84,73,92,78,88].map((h,i)=><i className="bar" style={{height:`${h}%`}} key={i}/>)}</div>
        </div>
        <div className="miniGrid">
          {(crm ? [["WhatsApp","Connected"],["Instagram","Connected"],["Email","Connected"]] : [["HR & Payroll","People ops"],["Finance","Financial ops"],["Sales & CRM","Customer & revenue"]]).map(([a,b])=>
            <div className="miniCard" key={a}><strong>{a}</strong><span>{b}</span></div>)}
        </div>
      </div>
    </div>
  );
}
