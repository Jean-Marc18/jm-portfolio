export type Route = { path: string; name: string };
export const routes: Route[] = [
  { path: "/", name: "Home" },
  { path: "#about", name: "About" },
  { path: "#projects", name: "Projects" },
  { path: "#contact", name: "Contact" },
];
