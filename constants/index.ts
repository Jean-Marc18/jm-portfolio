export type RouteKey = "home" | "about" | "projects" | "contact";
export type Route = { path: string; name: string; key: RouteKey };

export const routePaths: Record<RouteKey, string> = {
  home: "/",
  about: "#about",
  projects: "#projects",
  contact: "#contact",
};
