import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/admin/", "/api/", "/private/"],
      },
      {
        userAgent: "AhrefsBot",
        disallow: ["/"],
      },
      {
        userAgent: "SemrushBot",
        disallow: ["/"],
      },
      {
        userAgent: "DotBot",
        disallow: ["/"],
      },
    ],
    sitemap:
      process.env.NEXT_PUBLIC_SITE_URL + "/sitemap.xml" ||
      "https://spotless-cleaning-psi.vercel.app/sitemap.xml",
  };
}
