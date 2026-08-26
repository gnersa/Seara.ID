
import type { Metadata } from "next";
import { LiveChat } from "@/components/LiveChat";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seara.id"),
  title: {
    default: "Seara | Platform ERP Modern untuk HR, Finance, CRM & Operasional",
    template: "%s | Seara",
  },
  description:
    "Seara adalah platform ERP modern untuk perusahaan dinamis. Kelola HR & Payroll, Finance, CRM, Retail & POS, Manufacturing, dan operasional dalam satu ekosistem cerdas.",
  applicationName: "Seara",
  keywords: [
    "ERP Indonesia",
    "software ERP",
    "HR payroll",
    "finance software",
    "CRM Indonesia",
    "retail POS",
    "manufacturing ERP",
    "Seara",
  ],
  icons: {
    icon: "/seara-logo.png",
    shortcut: "/seara-logo.png",
    apple: "/seara-logo.png",
  },
  alternates: {
    canonical: "https://seara.id",
  },
  openGraph: {
    title: "Seara | Platform ERP Modern untuk Bisnis",
    description:
      "Kelola HR, Keuangan, CRM, Retail, Manufacturing, dan Operasional dalam satu ekosistem cerdas.",
    url: "https://seara.id",
    siteName: "Seara",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seara | Platform ERP Modern untuk Bisnis",
    description:
      "Kelola HR, Keuangan, CRM, Retail, Manufacturing, dan Operasional dalam satu ekosistem cerdas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
(function(){
  try {
    var saved = localStorage.getItem('seara-theme');
    var theme = (saved === 'dark' || saved === 'light')
      ? saved
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <LiveChat />
      </body>
    </html>
  );
}
