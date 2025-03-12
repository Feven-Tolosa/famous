import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper"; // Import client-side script handler

export const metadata: Metadata = {
  title: "DECx - Find and Hire Social Media Influencers",
  description:
    "DECx helps brands connect with top social media influencers for advertising and brand promotions.",
  keywords:
    "influencer marketing, social media marketing, brand promotion, hire influencers, DECx",
  authors: [{ name: "DECx Team", url: "https://famous-two.vercel.app" }],
  robots: "index, follow",
  openGraph: {
    title: "DECx - The Best Platform to Find Influencers",
    description:
      "Hire verified social media influencers to grow your brand with DECx.",
    url: "https://famous-two.vercel.app",
    siteName: "DECx",
    images: [
      {
        url: "https://famous-two.vercel.app/logo.jpg",
        width: 1200,
        height: 630,
        alt: "DECx Influencer Marketing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@decx_official",
    creator: "@decx_official",
    title: "DECx - The Best Platform to Find Influencers",
    description:
      "Hire verified social media influencers to grow your brand with DECx.",
    images: ["https://www.decx.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body>
        <Navbar />
        <ClientWrapper /> {/* This handles client-side logic */}
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
