export type RouteKey = "travaux" | "services" | "about" | "contact";
export type Route = { path: string; name: string; key: RouteKey };

export const routePaths: Record<RouteKey, string> = {
  travaux: "#travaux",
  services: "#services",
  about: "#about",
  contact: "#contact",
};

export const NAV_ORDER: RouteKey[] = ["travaux", "services", "about", "contact"];
