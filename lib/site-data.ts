export type ProductItem = {
  slug: string;
  icon: string;
  title: string;
  navDescription: string;
  hero: string;
  description: string;
  benefits: string[];
  capabilities: string[];
  seoTitle: string;
  seoDescription: string;
};

export type IndustryItem = {
  slug: string;
  title: string;
  navDescription: string;
  description: string;
  problems: string[];
  solutions: string[];
  seoTitle: string;
  seoDescription: string;
};

export type ResourceItem = {
  slug: string;
  title: string;
  navDescription: string;
  description: string;
  topics: string[];
  seoTitle: string;
  seoDescription: string;
};

export const products: ProductItem[] = [
  {
    slug: "hr-payroll",
    icon: "HR",
    title: "HR & Payroll",
    navDescription: "People, attendance & payroll",
    hero: "Kelola people operation dari satu tempat.",
    description: "Satukan data karyawan, kehadiran, payroll, dan workflow HR agar operasional people lebih rapi dan mudah dipantau.",
    benefits: ["Data karyawan terpusat", "Attendance & payroll workflow", "Kontrol akses dan proses yang lebih konsisten"],
    capabilities: ["Employee database", "Attendance", "Payroll", "People operations", "Reporting", "Workflow"],
    seoTitle: "Software HR & Payroll untuk Operasional Karyawan",
    seoDescription: "Seara HR & Payroll membantu perusahaan mengelola data karyawan, attendance, payroll, people operations, dan reporting dalam satu sistem terintegrasi.",
  },
  {
    slug: "finance",
    icon: "FI",
    title: "Finance",
    navDescription: "Finance, reporting & control",
    hero: "Keuangan lebih terlihat. Keputusan lebih cepat.",
    description: "Kelola workflow keuangan, reporting, dan kontrol operasional dengan data yang lebih terstruktur dan terhubung.",
    benefits: ["Financial workflow lebih terstruktur", "Reporting lebih mudah dipantau", "Data operasional lebih terhubung"],
    capabilities: ["Financial operations", "Reporting", "Reconciliation", "Control", "Approval workflow", "Operational visibility"],
    seoTitle: "Software Finance & Operasional Keuangan Bisnis",
    seoDescription: "Seara Finance membantu perusahaan mengelola workflow keuangan, reporting, reconciliation, approval, dan operational control dalam satu ekosistem.",
  },
  {
    slug: "crm",
    icon: "CR",
    title: "CRM",
    navDescription: "Customer, lead & sales operation",
    hero: "Ubah percakapan menjadi workflow penjualan yang terukur.",
    description: "Kelola customer, lead, omnichannel conversation, distribusi, dan performa tim melalui Seara CRM.",
    benefits: ["Percakapan customer terpusat", "Distribusi lead lebih terkontrol", "Monitoring performa tim secara real-time"],
    capabilities: ["Omnichannel", "Lead management", "Round robin", "Multi-unit", "Escalation", "Analytics"],
    seoTitle: "CRM Omnichannel untuk Sales & Customer Service",
    seoDescription: "Seara CRM mengelola WhatsApp, Instagram, Email, Telegram, leads, round robin, multi-unit, escalation, dan analytics dalam satu platform.",
  },
  {
    slug: "retail-pos",
    icon: "PO",
    title: "Retail & POS",
    navDescription: "Outlet, transaksi & point-of-sale",
    hero: "Hubungkan outlet, transaksi, dan operasional retail.",
    description: "Kelola point-of-sale dan workflow retail dalam satu sistem yang membantu tim melihat aktivitas outlet dengan lebih jelas.",
    benefits: ["Operasional outlet lebih terstruktur", "Transaksi dalam satu sistem", "Visibility lintas outlet"],
    capabilities: ["POS", "Outlet operations", "Transaction workflow", "Reporting", "Multi-outlet", "Operational control"],
    seoTitle: "Software Retail & POS untuk Multi Outlet",
    seoDescription: "Seara Retail & POS membantu bisnis mengelola transaksi, outlet, point-of-sale, reporting, dan operasional retail dalam satu sistem terintegrasi.",
  },
  {
    slug: "manufacturing",
    icon: "MF",
    title: "Manufacturing",
    navDescription: "Production & manufacturing ops",
    hero: "Buat proses produksi lebih terlihat dan terkendali.",
    description: "Hubungkan production workflow dan operational visibility agar tim dapat menjalankan proses manufaktur dengan informasi yang lebih konsisten.",
    benefits: ["Production workflow lebih jelas", "Operational visibility", "Data produksi lebih terstruktur"],
    capabilities: ["Production workflow", "Operational tracking", "Reporting", "Process control", "Multi-unit", "Integration"],
    seoTitle: "Software Manufacturing & Production Operations",
    seoDescription: "Seara Manufacturing membantu perusahaan mengelola production workflow, operational tracking, reporting, dan kontrol proses manufaktur.",
  },
];

export const industries: IndustryItem[] = [
  { slug:"kesehatan", title:"Kesehatan", navDescription:"Jawab & booking pasien 24/7", description:"Hubungkan komunikasi pasien, appointment, tim, cabang, dan operasional layanan kesehatan dalam workflow yang lebih terstruktur.", problems:["Inquiry pasien tersebar", "Booking dan follow-up manual", "Monitoring cabang sulit"], solutions:["Centralized customer communication", "Lead & appointment workflow", "Multi-unit operational visibility"], seoTitle:"ERP & CRM untuk Klinik dan Industri Kesehatan", seoDescription:"Solusi Seara untuk kesehatan membantu klinik dan layanan kesehatan mengelola komunikasi pasien, booking, customer workflow, multi-cabang, HR, dan operasional." },
  { slug:"pendidikan", title:"Pendidikan", navDescription:"Jawab calon siswa saat PMB", description:"Kelola calon siswa, komunikasi PMB, customer journey, people, finance, dan workflow institusi pendidikan.", problems:["Lead calon siswa tercecer", "Follow-up PMB tidak konsisten", "Data operasional terpisah"], solutions:["Lead management PMB", "Omnichannel communication", "Integrated operational workflow"], seoTitle:"CRM & ERP untuk Sekolah dan Institusi Pendidikan", seoDescription:"Seara membantu institusi pendidikan mengelola leads calon siswa, PMB, komunikasi, HR, finance, dan operational workflow dalam satu ekosistem." },
  { slug:"properti", title:"Properti", navDescription:"Kualifikasi leads & atur kunjungan", description:"Distribusikan leads properti, pantau follow-up sales, atur kunjungan, dan lihat customer journey dari inquiry sampai transaksi.", problems:["Lead iklan terlambat ditangani", "Distribusi sales manual", "Follow-up sulit dimonitor"], solutions:["Auto lead distribution", "Round robin sales", "Customer & sales monitoring"], seoTitle:"CRM Properti untuk Lead Distribution & Sales", seoDescription:"Seara CRM untuk properti membantu mengelola leads, distribusi sales, round robin, follow-up, kunjungan, dan customer journey secara terukur." },
  { slug:"tour-travel", title:"Tour & Travel", navDescription:"Jawaban multi-bahasa lintas zona", description:"Kelola inquiry, customer conversation, booking workflow, finance, dan tim untuk bisnis tour & travel yang melayani customer lintas zona.", problems:["Inquiry datang di banyak channel", "Respon lintas zona lambat", "Booking workflow terpisah"], solutions:["Omnichannel conversation", "Centralized customer data", "Integrated booking workflow"], seoTitle:"CRM & ERP untuk Tour dan Travel", seoDescription:"Seara membantu bisnis tour & travel mengelola inquiry, komunikasi customer, booking workflow, finance, dan operasional tim dalam satu sistem." },
  { slug:"salon-kecantikan", title:"Salon & Kecantikan", navDescription:"Kelola appointment & follow-up pelanggan", description:"Satukan appointment, customer database, outlet, staff, transaksi, dan follow-up untuk bisnis salon dan kecantikan.", problems:["Appointment tersebar", "Customer history sulit dilacak", "Operasional multi-outlet tidak terpusat"], solutions:["Appointment workflow", "Customer database", "Multi-outlet operations"], seoTitle:"Software Salon & Kecantikan untuk Appointment dan CRM", seoDescription:"Seara membantu salon dan bisnis kecantikan mengelola appointment, customer database, outlet, staff, transaksi, dan follow-up pelanggan." },
  { slug:"fnb", title:"F&B", navDescription:"Terima reservasi & pesanan lebih cepat", description:"Kelola outlet, customer, reservasi, transaksi, people, finance, dan operasional F&B dalam ekosistem yang lebih terhubung.", problems:["Operasional outlet terpisah", "Data customer tidak terpusat", "Monitoring transaksi dan tim rumit"], solutions:["Retail & POS workflow", "Customer operations", "Multi-outlet visibility"], seoTitle:"ERP & POS untuk Restoran dan Bisnis F&B", seoDescription:"Seara membantu bisnis F&B mengelola outlet, POS, customer, reservasi, finance, people, dan operational workflow dalam satu platform." },
  { slug:"pemerintahan", title:"Pemerintahan", navDescription:"Layanan publik lebih responsif & transparan", description:"Digitalisasi workflow layanan, komunikasi, data, monitoring, dan operasional institusi pemerintahan dengan struktur yang lebih terukur.", problems:["Workflow layanan panjang", "Data tersebar", "Monitoring proses terbatas"], solutions:["Centralized workflow", "Operational monitoring", "Structured communication"], seoTitle:"Platform Operasional Digital untuk Pemerintahan", seoDescription:"Seara membantu institusi pemerintahan mendigitalisasi workflow layanan, komunikasi, data, monitoring, dan operasional secara lebih terstruktur." },
  { slug:"logistik", title:"Logistik", navDescription:"Update pengiriman & support pelanggan", description:"Hubungkan customer communication, distributed team, unit, workflow, dan operational visibility untuk bisnis logistik.", problems:["Customer terus meminta update", "Tim tersebar", "Escalation dan monitoring sulit"], solutions:["Omnichannel support", "Multi-unit workflow", "Escalation & analytics"], seoTitle:"CRM & ERP untuk Perusahaan Logistik", seoDescription:"Seara membantu perusahaan logistik mengelola customer communication, distributed team, multi-unit workflow, escalation, dan operational visibility." },
];

export const resources: ResourceItem[] = [
  {slug:"blog", title:"Blog", navDescription:"Insight operasional & teknologi", description:"Artikel mengenai ERP, CRM, HR, finance, sales, retail, manufacturing, dan transformasi operasional.", topics:["ERP & digital operations","CRM & sales","HR & payroll","Finance","Retail & POS","Manufacturing"], seoTitle:"Blog ERP, CRM & Operasional Bisnis", seoDescription:"Baca insight Seara mengenai ERP, CRM, HR, Finance, Sales, Retail, Manufacturing, customer operations, dan transformasi digital bisnis."},
  {slug:"guides", title:"Guides", navDescription:"Panduan praktis transformasi bisnis", description:"Panduan praktis untuk merancang workflow, memilih sistem, dan menjalankan transformasi operasional secara lebih terstruktur.", topics:["Panduan implementasi ERP","CRM playbook","HR workflow","Finance operations","Sales operations","Operational checklist"], seoTitle:"Guides ERP, CRM, HR & Finance", seoDescription:"Panduan praktis Seara untuk implementasi ERP, CRM, HR, Finance, Sales, dan workflow operasional bisnis."},
  {slug:"webinar", title:"Webinar", navDescription:"Diskusi & sharing praktisi", description:"Materi diskusi dan sharing untuk membantu bisnis memahami operasional, teknologi, customer, people, dan growth.", topics:["Operational excellence","CRM & customer experience","HR operations","Finance transformation","Digital business","Industry sessions"], seoTitle:"Webinar ERP & Transformasi Operasional", seoDescription:"Webinar Seara membahas ERP, CRM, HR, Finance, customer experience, digital operations, dan transformasi bisnis bersama praktisi."},
  {slug:"stories", title:"Stories", navDescription:"Case study & cerita implementasi", description:"Kumpulan customer stories dan case study untuk menunjukkan bagaimana workflow dan teknologi diterapkan dalam konteks bisnis nyata.", topics:["Customer stories","Implementation journey","Operational improvement","Sales workflow","People operations","Industry stories"], seoTitle:"Customer Stories & Case Study Seara", seoDescription:"Pelajari customer stories dan case study implementasi Seara untuk ERP, CRM, HR, Finance, Sales, dan operational workflow."},
  {slug:"templates", title:"Templates", navDescription:"Template workflow, KPI & checklist", description:"Template siap pakai untuk membantu tim merancang workflow, KPI, pipeline, checklist, dan struktur operasional.", topics:["CRM pipeline template","Sales KPI","HR checklist","Finance checklist","Operational workflow","Lead qualification"], seoTitle:"Template CRM, KPI & Workflow Operasional", seoDescription:"Unduh dan gunakan template Seara untuk CRM pipeline, KPI Sales, HR checklist, Finance, lead qualification, dan workflow operasional."},
];

export const whatsappNumber = "6285175380890";
export const whatsappDisplay = "+6285175380890";
export const contactEmail = "Info@seara.id";
export const companyName = "SEARA, Inc.";
