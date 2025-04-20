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
