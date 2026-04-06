import { Box, Group, Image, Text } from "@mantine/core";
import { heroAssets } from "@/src/lib/site-data";
import { SectionShell } from "@/src/components/ui/section-shell";

export function NavbarSection() {
  return (
    <SectionShell
      pt={{ base: 16, md: 24 }}
      pb={{ base: 12, md: 16 }}
      style={{
        backdropFilter: "blur(14px)",
        background: "rgba(255,255,255,0.82)",
        borderBottom: "1px solid rgba(16,16,16,0.08)",
      }}
    >
      <Group justify="space-between" align="center" style={{ minHeight: 48 }}>
        <Box style={{ position: "relative", width: 94, height: 32, flexShrink: 0 }}>
          <Image src={heroAssets.logo} alt="Shofik UI" w="100%" h="auto" fit="contain" />
          <Group
            gap={4}
            wrap="nowrap"
            style={{ position: "absolute", left: 8, bottom: -4 }}
          >
            <Image src={heroAssets.logoMark} alt="" w={6} h={6} />
            <Text
              tt="uppercase"
              fz={10}
              c="rgba(0,0,0,0.45)"
              style={{ letterSpacing: -0.25 }}
            >
              UI Designer
            </Text>
          </Group>
        </Box>
        <Box
          w={94}
          aria-hidden="true"
          style={{ opacity: 0, pointerEvents: "none", flexShrink: 0 }}
        />
      </Group>
    </SectionShell>
  );
}
