import { Box, Group, Text } from "@mantine/core";
import { heroAssets } from "@/src/lib/site-data";
import { SectionShell } from "@/src/components/ui/section-shell";

export function NavbarSection() {
  return (
    <SectionShell
      pt={{ base: 16, md: 40 }}
      pb={0}
    >
      <Group justify="flex-start" align="flex-start" style={{ minHeight: 36 }}>
        <Box style={{ position: "relative", width: 94, height: 36, flexShrink: 0 }}>
          <Box
            component="img"
            src={heroAssets.logo}
            alt="Shofik UI"
            w={94}
            h={19}
            style={{ display: "block", objectFit: "contain" }}
          />
          <Group
            gap={2}
            wrap="nowrap"
            style={{ position: "absolute", left: 9, top: 21 }}
          >
            <Box
              component="img"
              src={heroAssets.logoMark}
              alt=""
              w={5.4}
              h={5.4}
              style={{ display: "block", objectFit: "contain" }}
            />
            <Text
              tt="uppercase"
              fz={12.6}
              fw={400}
              c="rgba(0,0,0,0.44)"
              lh={1}
              style={{ letterSpacing: -0.38 }}
            >
              UI Designer
            </Text>
          </Group>
        </Box>
      </Group>
    </SectionShell>
  );
}
