import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import SocialLinks from "./components/SocialLinks";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Equity Tank - Best Share Market Classes in Delhi",
    template: "%s | Equity Tank",
  },
  description:
    "Equity Tank offers the best share market classes in Delhi. Learn stock trading, technical analysis, and investment strategies from expert instructors. Join our comprehensive courses to master the share market.",
  metadataBase: new URL("https://www.equitytank.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Equity Tank - Premier Share Market Institute in Delhi",
    description:
      "Get top-notch share market education at Equity Tank, Delhi's leading institute for stock market training. Courses for beginners to advanced traders.",
    url: "https://www.equitytank.com",
    siteName: "Equity Tank",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Equity Tank - Share Market Classes",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equity Tank - Expert Share Market Training in Delhi",
    description:
      "Join Equity Tank for comprehensive share market courses. Learn from industry experts and start your trading journey today!",
    images: ["/twitter-image.png"],
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
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Equity Tank",
  description:
    "Premier share market institute in Delhi offering comprehensive stock market classes and training programs.",
  url: "https://www.equitytank.com",
  logo: "https://www.equitytank.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "2nd Floor, H-9, Street no.19, Main Rajapuri Rd, New Delhi, Delhi 110059",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110059",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9315071969",
    contactType: "customer support",
  },
  sameAs: [
    "https://www.facebook.com/equitytank",
    "https://www.twitter.com/equitytank",
    "https://www.linkedin.com/company/equitytank",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Beginner's Stock Market Course",
      description:
        "Comprehensive course for beginners to understand stock market basics",
      url: "https://www.equitytank.com/courses/beginners-stock-market",
    },
    {
      "@type": "Offer",
      name: "Advanced Technical Analysis",
      description: "In-depth technical analysis course for experienced traders",
      url: "https://www.equitytank.com/courses/advanced-technical-analysis",
    },
    {
      "@type": "Offer",
      name: "Options Trading Masterclass",
      description: "Specialized course on options trading strategies",
      url: "https://www.equitytank.com/courses/options-trading-masterclass",
    },
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.equitytank.com",
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
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
