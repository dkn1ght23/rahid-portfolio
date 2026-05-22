import { Box, Image, Stack, Text, Title } from "@mantine/core";
import type { CSSProperties } from "react";
import { heroAssets } from "@/src/lib/site-data";
import { SectionShell } from "@/src/components/ui/SectionShell";
import { PillButton } from "@/src/components/ui/PillButton";
import mbl1 from "@/public/assets/mobile 1.png";
import mbl2 from "@/public/assets/mobile 2.png";
import desk1 from "@/public/assets/desktop 1.png";
import desk2 from "@/public/assets/desktop 2.png";

type GalleryItem = {
  id: string;
  image: string;
  type: "desktop" | "mobile";
  url: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "project-1",
    image: desk1.src,
    type: "desktop",
    url: "",
  },
  {
    id: "project-2",
    image: desk2.src,
    type: "desktop",
    url: "",
  },
  {
    id: "project-3",
    image: mbl1.src,
    type: "mobile",
    url: "",
  },
  {
    id: "project-4",
        image: desk1.src,
    type: "desktop",
    url: "",
  },
  {
    id: "project-5",
    image: desk2.src,
    type: "desktop",
    url: "",
  },
  {
    id: "project-6",
      image: mbl2.src,
    type: "mobile",
    url: "",
  },
];

const galleryRows = [
  galleryItems,
  [...galleryItems.slice(2), ...galleryItems.slice(0, 2)],
];

const marqueeItems = (items: GalleryItem[]) => [...items, ...items];

const cardStyle = (type: GalleryItem["type"]): CSSProperties =>
  ({
    "--gallery-card-width":
      type === "desktop"
        ? "clamp(300px, 34vw, 520px)"
        : "clamp(150px, 17vw, 248px)",
    "--gallery-card-ratio": type === "desktop" ? "16 / 10" : "9 / 15.5",
  }) as CSSProperties;

export function WorkGallerySection() {
  return (
    <SectionShell
      id="gallery"
      py={{ base: 40, md: 64 }}
      style={{ overflowX: "clip" }}
    >
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

        <Box
          className="work-gallery-marquee"
          style={{
            width: "100vw",
            marginInline: "calc(50% - 50vw)",
            overflow: "hidden",
            paddingBlock: 18,
          }}
        >
          <style>
            {`
              .work-gallery-marquee {
                -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
                mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
              }

              .work-gallery-marquee__row {
                display: flex;
                width: max-content;
                gap: clamp(16px, 2vw, 28px);
                padding-block: 8px;
                will-change: transform;
              }

              .work-gallery-marquee__row--first {
                animation: workGalleryMarqueeLeft 52s linear infinite;
              }

              .work-gallery-marquee__row--second {
                animation: workGalleryMarqueeRight 58s linear infinite;
                margin-top: clamp(10px, 1.6vw, 20px);
                transform: translateX(-50%);
              }

              .work-gallery-marquee__item {
                flex: 0 0 auto;
                width: var(--gallery-card-width);
                aspect-ratio: var(--gallery-card-ratio);
                overflow: hidden;
                border-radius: clamp(16px, 1.6vw, 24px);
                background: #f4f4f2;
                box-shadow: 0 18px 50px rgba(15, 15, 15, 0.1);
              }

              @keyframes workGalleryMarqueeLeft {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-50%);
                }
              }

              @keyframes workGalleryMarqueeRight {
                from {
                  transform: translateX(-50%);
                }
                to {
                  transform: translateX(0);
                }
              }

              @media (prefers-reduced-motion: reduce) {
                .work-gallery-marquee__row {
                  animation: none;
                  transform: translateX(-12%);
                }

                .work-gallery-marquee__row--second {
                  transform: translateX(-28%);
                }
              }
            `}
          </style>

          {galleryRows.map((row, rowIndex) => (
            <Box
              key={rowIndex}
              className={`work-gallery-marquee__row ${
                rowIndex === 0
                  ? "work-gallery-marquee__row--first"
                  : "work-gallery-marquee__row--second"
              }`}
            >
              {marqueeItems(row).map((project, itemIndex) => (
                <Box
                  key={`${project.id}-${rowIndex}-${itemIndex}`}
                  className="work-gallery-marquee__item"
                  style={cardStyle(project.type)}
                >
                  <Image
                    src={project.image}
                    alt=""
                    fit="cover"
                    h="100%"
                    w="100%"
                    loading="lazy"
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>

        <PillButton label="Explore More" icon={heroAssets.arrowRight} reversed />
      </Stack>
    </SectionShell>
  );
}
