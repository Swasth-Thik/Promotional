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
  title: {
    default: "SWASTH-THIK | Traditional Bengali Pickles - Authentic Homemade Goodness",
    template: "%s | SWASTH-THIK"
  },
  description: "Handcrafted traditional Bengali pickles made with love. Sweet & Spicy Mango Pickle using authentic family recipes, pure mustard oil, and finest ingredients. Order online in Kolkata.",
  keywords: [
    "Bengali pickle",
    "mango pickle",
    "traditional pickle",
    "homemade pickle",
    "mustard oil pickle",
    "authentic Bengali food",
    "sweet mango pickle",
    "spicy mango pickle",
    "Kolkata pickle",
    "আমের আচার",
    "Bengali achar",
    "traditional recipe"
  ],
  authors: [{ name: "SWASTH-THIK", url: "https://swasththik.vercel.app" }],
  creator: "SWASTH-THIK",
  publisher: "SWASTH-THIK",
  metadataBase: new URL("https://swasththik.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SWASTH-THIK - Traditional Bengali Pickles",
    description: "Authentic homemade Bengali pickles crafted with traditional recipes and pure ingredients. Sweet & Spicy Mango Pickle delivered fresh to your doorstep in Kolkata.",
    url: "https://swasththik.vercel.app",
    siteName: "SWASTH-THIK",
    images: [
      {
        url: "/logo.png",
        width: 1254,
        height: 1254,
        alt: "SWASTH-THIK - Traditional Bengali Pickles Logo",
        type: "image/png",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SWASTH-THIK - Traditional Bengali Pickles",
    description: "Authentic homemade Bengali pickles crafted with traditional recipes and pure ingredients",
    images: ["/logo.png"],
    creator: "@swasththik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  verification: {
    // Add your verification codes here when you get them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "food",
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
