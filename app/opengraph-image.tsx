import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Seara — Platform ERP Modern";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"70px",background:"linear-gradient(135deg,#ffffff 0%,#edf5ff 58%,#dceaff 100%)",color:"#0b1220",fontFamily:"Arial, sans-serif"}}>
      <div style={{display:"flex",alignItems:"center",gap:"18px",fontSize:"38px",fontWeight:700}}><div style={{width:"56px",height:"56px",borderRadius:"50%",background:"#075de7",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px"}}>S</div>Seara</div>
      <div style={{display:"flex",flexDirection:"column",maxWidth:"930px"}}><div style={{fontSize:"72px",fontWeight:800,lineHeight:1.02,letterSpacing:"-3px"}}>Platform ERP modern untuk operasional yang lebih terhubung.</div><div style={{fontSize:"28px",marginTop:"28px",color:"#52627a"}}>HR & Payroll · Finance · CRM · Retail & POS · Manufacturing</div></div>
      <div style={{fontSize:"22px",color:"#075de7",fontWeight:700}}>seara.id</div>
    </div>,
    size
  );
}
