import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://mohamed-ashraf-portfolio-ten.vercel.app/sitemap.xml",
  };
}