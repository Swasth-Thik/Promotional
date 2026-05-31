import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SWASTH-THIK | Traditional Bengali Pickles - Authentic Recipes, Homemade Goodness",
  description: "Handcrafted traditional Bengali pickles made with love. Sweet & Spicy Mango Pickle using authentic family recipes, pure mustard oil, and finest ingredients. Order online across India.",
  keywords: "Bengali pickle, mango pickle, traditional pickle, homemade pickle, mustard oil pickle, authentic Bengali food, sweet mango pickle, spicy mango pickle",
  authors: [{ name: "Swasth-Thik" }],
  openGraph: {
    title: "SWASTH-THIK - Traditional Bengali Pickles",
    description: "Authentic homemade Bengali pickles crafted with traditional recipes and pure ingredients",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${notoSerif.variable} ${plusJakartaSans.variable}`}>
      <head>
        {/* Material Symbols Outlined Icon Font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-body text-on-surface antialiased min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
