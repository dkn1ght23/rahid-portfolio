import { Box, SimpleGrid, Stack, Title } from "@mantine/core";
import { services } from "@/src/lib/site-data";
import { ServiceCard } from "@/src/components/ui/ServiceCard";
import { SectionShell } from "@/src/components/ui/SectionShell";

export function ServicesSection() {
  return (
    <SectionShell id="services" py={{ base: 48, md: 80 }}>
      <Stack gap={0} style={{ gap: "clamp(40px, 8vw, 74px)" }}>
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
          <SimpleGrid
            cols={{ base: 1, sm: 2, md: 3 }}
            spacing={{ base: 32, md: 48 }}
            verticalSpacing={{ base: 40, md: 48 }}
          >
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} />
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </SectionShell>
  );
}
