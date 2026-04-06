import { Box, SimpleGrid, Stack, Title } from "@mantine/core";
import { services } from "@/src/lib/site-data";
import { ServiceCard } from "@/src/components/ui/service-card";
import { SectionShell } from "@/src/components/ui/section-shell";

export function ServicesSection() {
  return (
    <SectionShell py={{ base: 48, md: 80 }}>
      <Stack>
        <Title
          order={2}
          fw={500}
          c="dark.9"
          style={{
            fontSize: "clamp(28px, 5vw, 36px)",
            lineHeight: 1.14,
            letterSpacing: -1.44,
          }}
        >
          My Services
        </Title>

        <Box maw={1180} w="100%">
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 32, md: 48 }} verticalSpacing={{ base: 40, md: 48 }}>
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} />
          ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </SectionShell>
  );
}
