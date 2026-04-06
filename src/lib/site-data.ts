export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type ProjectItem = {
  title: string;
  category: string;
  image: string;
  width: "wide" | "standard" | "narrow";
  bg?: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
};

export type ServiceItem = {
  title: string;
};

export const heroAssets = {
  logo: "https://www.figma.com/api/mcp/asset/14f278a1-a148-4a46-b0d9-592f267414e2",
  logoMark: "https://www.figma.com/api/mcp/asset/85d8ec59-2b65-4ebb-bb00-a39918a3bba7",
  portrait: "https://www.figma.com/api/mcp/asset/61825cb6-3809-4993-83fb-a5ebe79afb1b",
  arrowDown:
    "https://www.figma.com/api/mcp/asset/8f65a88a-ea70-49e4-9768-0d9ea8f2bd01",
  arrowRight:
    "https://www.figma.com/api/mcp/asset/5dba7c27-44b5-4b2f-b96f-2328af001928",
  emailIcon:
    "https://www.figma.com/api/mcp/asset/16029cb1-6bc5-42fb-838d-5c0965bb7749",
  footerMailIcon:
    "https://www.figma.com/api/mcp/asset/4a295a94-c9b0-4ae9-a909-7faa72fe078e",
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "#",
    icon: "https://www.figma.com/api/mcp/asset/927c95a5-4fe1-4791-8688-09021939a1a1",
  },
  {
    label: "X",
    href: "#",
    icon: "https://www.figma.com/api/mcp/asset/c742c5a3-073e-4f16-acbe-d2285305f215",
  },
  {
    label: "Dribbble",
    href: "#",
    icon: "https://www.figma.com/api/mcp/asset/561093aa-17e8-4b88-8e0f-53210cbfbf1b",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "https://www.figma.com/api/mcp/asset/f73ce058-83fd-4b3a-a956-494ce245260f",
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    title: "Clairo",
    category: "SaaS dashboard redesign",
    image: "https://www.figma.com/api/mcp/asset/e88596cc-c09e-4d7e-b8e5-3e61c5fcb9fd",
    width: "wide",
    imageFit: "cover",
  },
  {
    title: "Finance mobile flow",
    category: "App design and metrics",
    image: "https://www.figma.com/api/mcp/asset/b82e5dea-23c4-49ce-8bf1-9af3c5c92d0c",
    width: "standard",
    imageFit: "cover",
  },
  {
    title: "Clairo dark dashboard",
    category: "Conversion-focused interface",
    image: "https://www.figma.com/api/mcp/asset/e88596cc-c09e-4d7e-b8e5-3e61c5fcb9fd",
    width: "wide",
    imageFit: "cover",
  },
];

export const galleryProjects: ProjectItem[] = [
  {
    title: "Mobile analytics",
    category: "Dashboard",
    image: "https://www.figma.com/api/mcp/asset/b82e5dea-23c4-49ce-8bf1-9af3c5c92d0c",
    width: "narrow",
  },
  {
    title: "Admin dark",
    category: "Web app",
    image: "https://www.figma.com/api/mcp/asset/3d347e21-56f6-4ea9-9651-617158685f64",
    width: "standard",
  },
  {
    title: "Welcome card",
    category: "Product UI",
    image: "https://www.figma.com/api/mcp/asset/a394f73c-c257-456a-80c9-e2f7c28af7d8",
    width: "standard",
    bg: "#f8f8f8",
    imageFit: "contain",
  },
  {
    title: "Billing dashboard",
    category: "Web app",
    image: "https://www.figma.com/api/mcp/asset/aed62338-dfdf-4667-971a-07077836d63f",
    width: "standard",
  },
  {
    title: "Phone showcase",
    category: "Mobile",
    image: "https://www.figma.com/api/mcp/asset/a430f0c6-8a42-4181-81b4-e1a6e3ca200f",
    width: "narrow",
    bg: "#e8e7ec",
    imageFit: "contain",
  },
  {
    title: "Operations board",
    category: "Productivity",
    image: "https://www.figma.com/api/mcp/asset/fb013634-9bf7-403b-a7d8-b0e42f1e45f7",
    width: "wide",
  },
];

export const services: ServiceItem[] = [
  { title: "Dashboard Design" },
  { title: "App & Web Design" },
  { title: "Product Design" },
];

export const lifestyleBlocks = ["Travel", "Coffee", "Sketching", "Reading"];
