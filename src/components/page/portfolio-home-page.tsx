import { Box } from "@mantine/core";
import { NavbarSection } from "@/src/components/sections/navbar-section";
import { HeroSection } from "@/src/components/sections/hero-section";
import { FeaturedWorkSection } from "@/src/components/sections/featured-work-section";
import { WorkGallerySection } from "@/src/components/sections/work-gallery-section";
import { ServicesSection } from "@/src/components/sections/services-section";
import { FooterSection } from "@/src/components/sections/footer-section";

export function PortfolioHomePage() {
  return (
    <Box bg="#ffffff">
      <NavbarSection />
      <HeroSection />
      <FeaturedWorkSection />
      <WorkGallerySection />
      <ServicesSection />
      <FooterSection />
    </Box>
  );
}
