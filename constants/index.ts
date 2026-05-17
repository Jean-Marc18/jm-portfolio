export type RouteKey = "home" | "travaux" | "services" | "about" | "contact";
export type Route = { path: string; name: string; key: RouteKey };

export const routePaths: Record<RouteKey, string> = {
  home: "/",
  travaux: "/travaux",
  services: "/services",
  about: "/a-propos",
  contact: "/contact",
};

export const NAV_ORDER: RouteKey[] = [
  "home",
  "travaux",
  "services",
  "about",
  "contact",
];

export const PROJECT_PATHS: Record<string, string> = {
  "pipv-pped": "/projets/pipv-pped",
};
