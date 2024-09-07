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
    "Equity Tank offers the best share market classes in Delhi. Learn stock trading, technical analysis, and investment strategies from expert instructors.",
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
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.equitytank.com/#website",
      url: "https://www.equitytank.com",
      name: "Equity Tank",
      description: "Best Share Market Classes in Delhi",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: "https://www.equitytank.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.equitytank.com/#organization",
      name: "Equity Tank",
      url: "https://www.equitytank.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.equitytank.com/logo.png",
        width: 600,
        height: 60,
      },
      sameAs: [
        "https://www.facebook.com/equitytank",
        "https://www.twitter.com/equitytank",
        "https://www.linkedin.com/company/equitytank",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "2nd Floor, H-9, Street no.19, Main Rajapuri Rd",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110059",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9315071969",
        contactType: "customer support",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.equitytank.com/#webpage",
      url: "https://www.equitytank.com",
      name: "Equity Tank - Best Share Market Classes in Delhi",
      isPartOf: { "@id": "https://www.equitytank.com/#website" },
      about: { "@id": "https://www.equitytank.com/#organization" },
      description:
        "Equity Tank offers the best share market classes in Delhi. Learn stock trading, technical analysis, and investment strategies from expert instructors.",
    },
  ],
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
