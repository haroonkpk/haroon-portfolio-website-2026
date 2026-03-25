import type { Metadata } from "next";
import { Archivo_Black, Geist, Geist_Mono, Noto_Serif } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/src/components/layout";
import { TransitionProvider } from "@/src/lib";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Noto Serif — body font
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

// Archivo Black — display/heading font
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haroon-portfolio-2026",
  description: "Muhammad Haroon MERN stack webdeveloper, portfolio-website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${archivoBlack.variable} antialiased`}
      >
        <TransitionProvider>
          <Navbar />
          {children}
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
