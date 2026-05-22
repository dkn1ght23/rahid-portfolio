import { Box, Stack, Text } from "@mantine/core";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ProjectCard } from "@/src/components/ui/ProjectCard";
import { SectionShell } from "@/src/components/ui/SectionShell";
import { PillButton } from "@/src/components/ui/PillButton";
import { projectImageUrl } from "@/src/lib/sanity";

export type FeaturedProject = {
  _id: string;
  title: string;
  category: string;
  image: SanityImageSource | string;
  url?: string;
};

type FeaturedWorkSectionProps = {
  projects: FeaturedProject[];
};

const featuredCardRatio = 680 / 500;
const featuredCardHeight = 500;

export function FeaturedWorkSection({ projects }: FeaturedWorkSectionProps) {
  return (
    <SectionShell id="work" py={{ base: 48, md: 80 }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={project._id}
            style={{
              width: "100%",
              maxWidth: 680,
              alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
            }}
          >
            <ProjectCard
              project={{
                title: project.title,
                category: project.category,
                image: projectImageUrl(project.image),
                url: project.url,
              }}
              height={featuredCardHeight}
              ratio={featuredCardRatio}
            />
          </Box>
        ))}

        <Box style={{ width: "100%", maxWidth: 286, alignSelf: "flex-end" }}>
          <Stack gap={22}>
            <PillButton
              label="Hire Me"
              href="mailto:shofikhasan.uiux@gmail.com"
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
