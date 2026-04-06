import { AspectRatio, Box, Card, Image, Stack, Text } from "@mantine/core";
import type { ProjectItem } from "@/src/lib/site-data";

type ProjectCardProps = {
  project: ProjectItem;
  height?: number;
  ratio?: number;
  imageWidth?: string | number;
  imageHeight?: string | number;
  imageRadius?: number;
  imageShadow?: string;
  imagePadding?: number;
  showMeta?: boolean;
};

export function ProjectCard({
  project,
  height = 320,
  ratio = 1.55,
  imageWidth = "100%",
  imageHeight = "100%",
  imageRadius = 0,
  imageShadow,
  imagePadding = 0,
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
          border: "none",
          boxShadow: "none",
        }}
      >
        <AspectRatio ratio={ratio} mih={height}>
          <Box
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: imagePadding,
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fit={project.imageFit ?? "cover"}
              style={{
                width: imageWidth,
                height: imageHeight,
                objectPosition: project.imagePosition ?? "center",
                borderRadius: imageRadius,
                boxShadow: imageShadow,
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
