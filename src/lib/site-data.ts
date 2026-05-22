export type ProjectItem = {
  _id: string;
  title: string;
  category: string;
  image: string;
  url?: string;
  bg?: string;
};

export type ServiceItem = {
  title: string;
};

export const heroAssets = {
  arrowRight:
    "https://www.figma.com/api/mcp/asset/5dba7c27-44b5-4b2f-b96f-2328af001928",
  footerMailIcon:
    "https://www.figma.com/api/mcp/asset/4a295a94-c9b0-4ae9-a909-7faa72fe078e",
};

export const fallbackFeaturedProjects: ProjectItem[] = [
  {
    _id: "fallback-clairo",
    title: "Clairo",
    category: "SaaS dashboard redesign",
    image: "/assets/clairo.png",
    url: "https://example.com/clairo",
  },
  {
    _id: "fallback-finance-mobile-flow",
    title: "Finance mobile flow",
    category: "App design and metrics",
    image: "/assets/finance-mobile-flow.png",
    url: "https://example.com/finance-mobile-flow",
  },
  {
    _id: "fallback-clairo-dark-dashboard",
    title: "Clairo dark dashboard",
    category: "Conversion-focused interface",
    image: "/assets/clairo.png",
    url: "https://example.com/clairo-dark-dashboard",
  },
];

export const galleryProjects: ProjectItem[] = [
  {
    _id: "gallery-mobile-analytics",
    title: "Mobile analytics",
    category: "Dashboard",
    image: "https://www.figma.com/api/mcp/asset/b82e5dea-23c4-49ce-8bf1-9af3c5c92d0c",
  },
  {
    _id: "gallery-admin-dark",
    title: "Admin dark",
    category: "Web app",
    image: "https://www.figma.com/api/mcp/asset/3d347e21-56f6-4ea9-9651-617158685f64",
  },
  {
    _id: "gallery-welcome-card",
    title: "Welcome card",
    category: "Product UI",
    image: "https://www.figma.com/api/mcp/asset/a394f73c-c257-456a-80c9-e2f7c28af7d8",
    bg: "#f8f8f8",
  },
  {
    _id: "gallery-billing-dashboard",
    title: "Billing dashboard",
    category: "Web app",
    image: "https://www.figma.com/api/mcp/asset/aed62338-dfdf-4667-971a-07077836d63f",
  },
  {
    _id: "gallery-phone-showcase",
    title: "Phone showcase",
    category: "Mobile",
    image: "https://www.figma.com/api/mcp/asset/a430f0c6-8a42-4181-81b4-e1a6e3ca200f",
    bg: "#e8e7ec",
  },
  {
    _id: "gallery-operations-board",
    title: "Operations board",
    category: "Productivity",
    image: "https://www.figma.com/api/mcp/asset/fb013634-9bf7-403b-a7d8-b0e42f1e45f7",
  },
];

export const services: ServiceItem[] = [
  { title: "Dashboard Design" },
  { title: "App & Web Design" },
  { title: "Product Design" },
];

export const lifestyleBlocks = ["Travel", "Coffee", "Sketching", "Reading"];
