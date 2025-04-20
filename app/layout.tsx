import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "./contexts/LanguageContext";
import PasswordGuard from "./components/PasswordGuard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZAMNA Hawaii 2026",
  description: "Hawaii's first boutique EDM festival",
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png'
  },
  openGraph: {
    title: 'ZAMNA Hawaii 2026',
    description: "Hawaii's first boutique EDM festival",
    images: [
      {
        url: '/og-zamna-hawaii-2025.png',
        width: 1200,
        height: 630,
        alt: 'ZAMNA Hawaii 2026'
      }
    ],
    locale: 'ja_JP',
    type: 'website',
    siteName: 'ZAMNA Hawaii 2026'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZAMNA Hawaii 2026',
    description: "Hawaii's first boutique EDM festival",
    images: ['/og-zamna-hawaii-2025.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <PasswordGuard>
            <Header />
            <main className="pt-16">{children}</main>
          </PasswordGuard>
        </LanguageProvider>
      </body>
    </html>
  );
}
