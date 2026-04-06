import { Box, SimpleGrid, Stack, Text } from "@mantine/core";
import { featuredProjects, heroAssets } from "@/src/lib/site-data";
import { ProjectCard } from "@/src/components/ui/project-card";
import { SectionShell } from "@/src/components/ui/section-shell";
import { PillButton } from "@/src/components/ui/pill-button";

export function FeaturedWorkSection() {
  return (
    <SectionShell py={{ base: 48, md: 80 }}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={24} verticalSpacing={32}>
        <Box>
          <ProjectCard project={featuredProjects[0]} height={360} />
        </Box>
        <Box style={{ marginTop: "clamp(0px, 5vw, 88px)" }}>
          <ProjectCard project={featuredProjects[1]} height={280} />
        </Box>
        <Box>
          <ProjectCard project={featuredProjects[2]} height={360} />
        </Box>
        <Box style={{ display: "flex", alignItems: "flex-end", minHeight: "100%" }}>
          <Stack gap={16} pb={8} maw={320}>
            <PillButton
              label="Hire Me"
              icon={heroAssets.arrowDown}
              reversed
            />
            <Text fz={16} c="rgba(0,0,0,0.7)" maw={320}>
              A collection of my designs that are simple, effective, and
              designed to perform.
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>
    </SectionShell>
  );
}
