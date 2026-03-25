import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ríos de Agua Viva | Iglesia Cristiana en Cholula",
  description:
    "Iglesia Cristiana Ríos de Agua Viva en San Andrés Cholula, Puebla. Una comunidad apasionada por Jesús. Pastores Juan Manuel y Mariana Fierro.",
  keywords: [
    "iglesia cristiana",
    "cholula",
    "puebla",
    "ríos de agua viva",
    "iglesia jóvenes",
    "comunidad cristiana",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-[var(--font-inter)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
