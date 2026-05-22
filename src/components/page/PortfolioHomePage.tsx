import { Box } from "@mantine/core";
import { NavbarSection } from "@/src/components/sections/NavbarSection";
import { HeroSection } from "@/src/components/sections/HeroSection";
import {
  FeaturedWorkSection,
  type FeaturedProject,
} from "@/src/components/sections/FeaturedWorkSection";
import { WorkGallerySection } from "@/src/components/sections/WorkGallerySection";
import { ServicesSection } from "@/src/components/sections/ServicesSection";
import { FooterSection } from "@/src/components/sections/FooterSection";
import { fallbackFeaturedProjects } from "@/src/lib/site-data";

type PortfolioHomePageProps = {
  featuredProjects: FeaturedProject[];
};

export function PortfolioHomePage({ featuredProjects }: PortfolioHomePageProps) {
  const projects =
    featuredProjects.length > 0 ? featuredProjects : fallbackFeaturedProjects;

  return (
    <Box bg="#ffffff">
      <NavbarSection />
      <HeroSection />
      <FeaturedWorkSection projects={projects} />
      <WorkGallerySection />
      <ServicesSection />
      <FooterSection />
    </Box>
  );
}
