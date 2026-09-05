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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://mohamed-ashraf-portfolio-ten.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  verification: {
    google: "meH6XjiXeoPrxmdUucnwAHcV8A1qx_22I3lr9IjVAYo",
  },

  title: {
    default: "Mohamed Ashraf | Frontend Developer React Next.js",
    template: "%s | Mohamed Ashraf",
  },

  description:
    "Mohamed Ashraf is a Frontend Developer specializing in React, Next.js, TypeScript, JavaScript, and building scalable modern web applications.",

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
    "Egypt Frontend Developer",
  ],

  category: "Technology",

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
"Mohamed Ashraf - Frontend Developer specializing in React, Next.js, TypeScript, and modern web development. View my portfolio, projects, and experience building scalable web applications.",
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

    googleBot: {
      index: true,

      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${inter.variable} min-h-screen bg-[#111118] text-zinc-100 antialiased`}
      >
        {/* Google Structured Data */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "Person",

              name: "Mohamed Ashraf",

              url: "https://mohamed-ashraf-portfolio-ten.vercel.app",

              jobTitle: "Frontend Developer",

              sameAs: [
                "https://github.com/Hamo639",

                "https://www.linkedin.com/in/mohamed-ashraf-5a4698426",
              ],
            }),
          }}
        />

        <Navbar />

        {children}

        <CommandPalette />

        <PortfolioGuide />
      </body>
    </html>
  );
}
