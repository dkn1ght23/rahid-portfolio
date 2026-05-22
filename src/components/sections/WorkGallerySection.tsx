import { Card, Image, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { galleryProjects, heroAssets } from "@/src/lib/site-data";
import { SectionShell } from "@/src/components/ui/SectionShell";
import { PillButton } from "@/src/components/ui/PillButton";

export function WorkGallerySection() {
  const galleryRows = [
    galleryProjects.slice(0, 5),
    galleryProjects.slice(1, 6),
  ];

  return (
    <SectionShell id="gallery" py={{ base: 40, md: 64 }}>
      <Stack gap={24} align="center">
        <Stack gap={4} align="center">
          <Title
            order={2}
            fw={500}
            c="dark.9"
            ta="center"
            style={{ fontSize: "clamp(30px, 5vw, 36px)" }}
          >
            More of{" "}
            <Text
              component="span"
              inherit
              c="rgba(16,16,16,0.6)"
              style={{
                fontFamily:
                  "var(--font-hedvig-serif), Hedvig Letters Serif, serif",
                fontWeight: 400,
              }}
            >
              My Works
            </Text>
          </Title>
          <Text fz={16} c="rgba(0,0,0,0.52)" ta="center">
            A collection of my designs that are simple, effective, and designed
            to perform.
          </Text>
        </Stack>

        <Stack gap={24} w="100%">
          {galleryRows.map((row, rowIndex) => (
            <SimpleGrid key={rowIndex} cols={{ base: 2, md: 5 }} spacing={24}>
              {row.map((project, itemIndex) => (
                <Card
                  key={`${project._id}-${rowIndex}-${itemIndex}`}
                  radius={20}
                  p={0}
                  style={{
                    minWidth: 0,
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    background: project.bg ?? "#f8f8f8",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fit="cover"
                    h="100%"
                  />
                </Card>
              ))}
            </SimpleGrid>
          ))}
        </Stack>

        <PillButton label="Explore More" icon={heroAssets.arrowRight} reversed />
      </Stack>
    </SectionShell>
  );
}
