import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seara.id"),
  title: { default: "Seara — Integrated Business Platform", template: "%s | Seara" },
  description: "Seara menyatukan people, finance, sales, retail, dan operational workflow dalam satu ekosistem teknologi.",
  openGraph: { title: "Seara", description: "Integrated Business Platform", url: "https://seara.id", siteName: "Seara", locale: "id_ID", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="id"><body>{children}</body></html>;
}
