import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tbcafrica.org";
  const routes = [
    "",
    "/about",
    "/community",
    "/programs",
    "/events",
    "/media",
    "/team",
    "/getinvolved",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/events" || route === "/media" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
