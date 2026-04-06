import { AspectRatio, Box, Card, Image, Stack, Text } from "@mantine/core";
import type { ProjectItem } from "@/src/lib/site-data";

type ProjectCardProps = {
  project: ProjectItem;
  height?: number;
  showMeta?: boolean;
};

export function ProjectCard({
  project,
  height = 320,
  showMeta = false,
}: ProjectCardProps) {
  return (
    <Stack gap={10}>
      <Card
        radius={20}
        p={0}
        style={{
          overflow: "hidden",
          background: project.bg ?? "#fbfbfb",
          border: "1px solid rgba(16,16,16,0.04)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <AspectRatio ratio={1.55} mih={height}>
          <Box
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fit={project.imageFit ?? "cover"}
              style={{
                width: "100%",
                height: "100%",
                objectPosition: project.imagePosition ?? "center",
              }}
            />
          </Box>
        </AspectRatio>
      </Card>
      {showMeta ? (
        <Stack gap={2}>
          <Text fz={17} fw={500} c="dark.9">
            {project.title}
          </Text>
          <Text fz={14} c="rgba(0,0,0,0.55)">
            {project.category}
          </Text>
        </Stack>
      ) : null}
    </Stack>
  );
}
