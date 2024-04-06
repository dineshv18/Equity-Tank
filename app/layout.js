import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import SocialLinks from "./components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Equity Tank - Share Market Classes in Delhi",
  },
  description:
    "share market classes in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi. Learn share market from the best share market institute in Delhi. Equity Tank is the best share market institute in Delhi.",
  twitter: {
    card: "summary_large_image",
    image: "/opengraph-image.png",
  },
  facebook: {
    card: "summary_large_image",
    image: "/opengraph-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <SocialLinks />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
