import { SimpleGrid, Stack, Title } from "@mantine/core";
import { services } from "@/src/lib/site-data";
import { ServiceCard } from "@/src/components/ui/service-card";
import { SectionShell } from "@/src/components/ui/section-shell";

export function ServicesSection() {
  return (
    <SectionShell py={{ base: 40, md: 64 }}>
      <Stack gap={40}>
        <Title
          order={2}
          fw={500}
          c="dark.9"
          style={{ fontSize: "clamp(28px, 5vw, 36px)" }}
        >
          My Services
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={24}>
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} />
          ))}
        </SimpleGrid>
      </Stack>
    </SectionShell>
  );
}
