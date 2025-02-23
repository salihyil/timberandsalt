import type { Metadata } from "next";
import { Cinzel, Cormorant, Jost, Mrs_Saint_Delafield } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SplashScreenManager from "@/components/splash-screen-manager";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});
const mrsSaintDelafield = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mrs-saint-delafield",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Timber & Salt",
    default: "Timber & Salt | Craft Cocktails & Artisan Comfort Food",
  },
  description: "Timber & Salt | Craft Cocktails & Artisan Comfort Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${cormorant.variable} ${mrsSaintDelafield.variable} ${cinzel.variable}`}
      >
        <SplashScreenManager>
          <Header />
          {children}
          <Footer />
        </SplashScreenManager>
        <Toaster />
      </body>
    </html>
  );
}
