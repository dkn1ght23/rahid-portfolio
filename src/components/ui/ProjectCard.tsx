import { AspectRatio, Box, Card, Image, Stack, Text } from "@mantine/core";

export type ProjectCardItem = {
  title: string;
  category: string;
  image: string;
  url?: string;
  bg?: string;
};

type ProjectCardProps = {
  project: ProjectCardItem;
  height?: number;
  ratio?: number;
  showMeta?: boolean;
};

export function ProjectCard({
  project,
  height = 320,
  ratio = 1.55,
  showMeta = false,
}: ProjectCardProps) {
  const card = (
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
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fit="cover"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </AspectRatio>
    </Card>
  );

  return (
    <Stack gap={10}>
      {project.url ? (
        <Box
          component="a"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "inherit", display: "block", textDecoration: "none" }}
        >
          {card}
        </Box>
      ) : (
        card
      )}
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
