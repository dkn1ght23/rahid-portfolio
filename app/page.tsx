import { PortfolioHomePage } from "@/src/components/page/PortfolioHomePage";
import { getFeaturedProjects } from "@/src/lib/sanity";

export const revalidate = 60;

export default async function Home() {
  const projects = await getFeaturedProjects();

  return <PortfolioHomePage featuredProjects={projects} />;
}
