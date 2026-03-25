import type { Metadata } from "next";
import { Fira_Code, Playfair_Display } from "next/font/google";
import "./globals.css";
import { WaitlistProvider } from "@/context/WaitlistContext";
import WaitlistModal from "@/components/WaitlistModal";

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

const seasons = Playfair_Display({
  variable: "--font-seasons",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Canon Calendar",
  description: "Your personal AI organization advisor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} ${seasons.variable} antialiased`}
      >
        <WaitlistProvider>
          {children}
          <WaitlistModal />
        </WaitlistProvider>
      </body>
    </html>
  );
}
