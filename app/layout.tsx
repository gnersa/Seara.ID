
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seara.id"),
  title: {
    default: "Seara — Integrated Business Platform",
    template: "%s | Seara",
  },
  description:
    "Platform ERP modern untuk perusahaan dinamis. Kelola HR, Keuangan, CRM, Retail, Manufacturing, dan Operasional dalam satu ekosistem cerdas.",
  icons: {
    icon: "/seara-logo.png",
    shortcut: "/seara-logo.png",
    apple: "/seara-logo.png",
  },
  openGraph: {
    title: "Seara",
    description: "Integrated Business Platform",
    url: "https://seara.id",
    siteName: "Seara",
    locale: "id_ID",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const themeScript = `
(function(){
  try {
    var pref = localStorage.getItem('seara-theme') || 'system';
    var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = pref === 'system' ? (isDark ? 'dark' : 'light') : pref;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.themePreference = pref;
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
      <body>{children}</body>
    </html>
  );
}
