import { Box } from "@mantine/core";
import { NavbarSection } from "@/src/components/sections/NavbarSection";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { FeaturedWorkSection } from "@/src/components/sections/FeaturedWorkSection";
import { WorkGallerySection } from "@/src/components/sections/work-gallery-section";
import { ServicesSection } from "@/src/components/sections/services-section";
import { FooterSection } from "@/src/components/sections/FooterSection";
import type { SanityProject } from "@/src/lib/sanity";

type PortfolioHomePageProps = {
  featuredProjects: SanityProject[];
};

export function PortfolioHomePage({ featuredProjects }: PortfolioHomePageProps) {
  return (
    <Box bg="#ffffff">
      <NavbarSection />
      <HeroSection />
      <FeaturedWorkSection projects={featuredProjects} />
      <WorkGallerySection />
      <ServicesSection />
      <FooterSection />
    </Box>
  );
}
