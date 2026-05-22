import {
  Anchor,
  Box,
  Card,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { heroAssets, lifestyleBlocks } from "@/src/lib/site-data";

export function FooterSection() {
  return (
    <Box
      component="footer"
      bg="#151414"
      mt={64}
      pt={88}
      pb={56}
      px={{ base: 16, md: 24 }}
      style={{
        borderTopLeftRadius: 56,
        borderTopRightRadius: 56,
      }}
    >
      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        maw={1180}
        mx="auto"
        spacing={32}
        verticalSpacing={32}
      >
        <Box>
          <Stack gap={28}>
            <Stack gap={6}>
              <Text fz={12} c="rgba(255,255,255,0.5)">
                Email
              </Text>
              <Anchor
                href="mailto:shofikhasan.uiux@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <Group gap={6}>
                  <Text fz={16} c="white">
                    shofikhasan.uiux@gmail.com
                  </Text>
                  <Image src={heroAssets.footerMailIcon} alt="" w={14} h={14} />
                </Group>
              </Anchor>
            </Stack>

            <Stack gap={8}>
              <Text fz={12} c="rgba(255,255,255,0.5)">
                Lifestyle
              </Text>
              <SimpleGrid cols={4} spacing={12} maw={368}>
                {lifestyleBlocks.map((item) => (
                  <Card
                    key={item}
                    h={80}
                    radius={16}
                    bg="rgba(217,217,217,0.2)"
                    p={10}
                  >
                    <Text fz={11} c="rgba(255,255,255,0.75)">
                      {item}
                    </Text>
                  </Card>
                ))}
              </SimpleGrid>
            </Stack>
          </Stack>
        </Box>

        <Box style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
          <Card
            w={240}
            h={172}
            radius={32}
            bg="rgba(255,255,255,0.07)"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)" }}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
