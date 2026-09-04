import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mohamed-ashraf-portfolio-ten.vercel.app",
      lastModified: new Date(),
    },
  ];
}