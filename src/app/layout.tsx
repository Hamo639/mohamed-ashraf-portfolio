import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import PortfolioGuide from "@/components/PortfolioGuide";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mohamed Ashraf | Frontend Developer",
    template: "%s | Mohamed Ashraf",
  },

  description:
    "Frontend Developer building scalable SaaS platforms and modern web applications using React, Next.js, TypeScript, Supabase and modern frontend technologies.",

  keywords: [
    "Mohamed Ashraf",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Engineer",
    "SaaS Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Supabase",
  ],

  authors: [
    {
      name: "Mohamed Ashraf",
    },
  ],

  creator: "Mohamed Ashraf",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Mohamed Ashraf Portfolio",

    title: "Mohamed Ashraf | Frontend Developer",

    description:
      "I build scalable web applications, SaaS platforms and modern digital products using React, Next.js and TypeScript.",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mohamed Ashraf - Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mohamed Ashraf | Frontend Developer",

    description:
      "Frontend Developer building scalable SaaS platforms and modern web applications.",

    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} min-h-screen bg-[#111118] text-zinc-100 antialiased`}
      >
        <Navbar />

        {children}

        <CommandPalette />
        <PortfolioGuide />
      </body>
    </html>
  );
}
