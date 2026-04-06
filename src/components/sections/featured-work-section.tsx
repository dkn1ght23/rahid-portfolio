import { Box, Stack, Text } from "@mantine/core";
import { featuredProjects, heroAssets } from "@/src/lib/site-data";
import { ProjectCard } from "@/src/components/ui/project-card";
import { SectionShell } from "@/src/components/ui/section-shell";
import { PillButton } from "@/src/components/ui/pill-button";

export function FeaturedWorkSection() {
  return (
    <SectionShell py={{ base: 48, md: 80 }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <Box style={{ width: "100%", maxWidth: 680 }}>
          <ProjectCard
            project={featuredProjects[0]}
            height={500}
            ratio={680 / 500}
            imageWidth={498}
            imageHeight={322}
            imagePadding={32}
            imageRadius={12}
            imageShadow="0 18px 34px rgba(16,16,16,0.18)"
          />
        </Box>
        <Box style={{ width: "100%", maxWidth: 482, alignSelf: "flex-end" }}>
          <ProjectCard
            project={featuredProjects[1]}
            height={390}
            ratio={482 / 390}
            imageWidth={250}
            imageHeight={322}
            imagePadding={24}
            imageRadius={0}
          />
        </Box>
        <Box style={{ width: "100%", maxWidth: 680 }}>
          <ProjectCard
            project={featuredProjects[2]}
            height={500}
            ratio={680 / 500}
            imageWidth={498}
            imageHeight={322}
            imagePadding={32}
            imageRadius={12}
            imageShadow="0 18px 34px rgba(16,16,16,0.18)"
          />
        </Box>
        <Box style={{ width: "100%", maxWidth: 286, alignSelf: "flex-end" }}>
          <Stack gap={22} maw={286}>
            <PillButton
              label="Hire Me"
              icon={heroAssets.arrowDown}
              reversed
            />
            <Text fz={16} lh="24px" c="rgba(0,0,0,0.7)">
              A collection of my designs that are simple, effective, and
              designed to perform.
            </Text>
          </Stack>
        </Box>
      </Box>
    </SectionShell>
  );
}
