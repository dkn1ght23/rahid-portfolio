import {
  Avatar,
  Card,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  heroAssets,
  socialLinks,
} from "@/src/lib/site-data";
import { SectionShell } from "@/src/components/ui/section-shell";
import { PillButton } from "@/src/components/ui/pill-button";
import { SocialIconButton } from "@/src/components/ui/social-icon-button";

export function HeroSection() {
  return (
    <SectionShell py={{ base: 24, md: 40 }}>
      <Stack gap={24}>
        <Group justify="flex-end">
          <Card
            radius={24}
            p={0}
            style={{
              width: 292,
              maxWidth: "100%",
              overflow: "hidden",
              boxShadow: "0 16px 34px rgba(16,16,16,0.06)",
            }}
          >
            <Image src={heroAssets.portrait} alt="Portrait collage" h={172} fit="cover" />
          </Card>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={32} verticalSpacing={24}>
          <Stack gap={20}>
            <Group gap={10} wrap="nowrap" align="center">
              <Avatar
                radius={12}
                size={48}
                styles={{
                  root: {
                    transform: "rotate(-5deg)",
                    background: "#d9d9d9",
                  },
                }}
              />
              <Text fz={20} c="dark.9" style={{ lineHeight: 1.12 }}>
                Greeting
                <br />
                I&apos;m Shofik Hasan
              </Text>
            </Group>

            <Stack gap={12}>
              <Title
                order={1}
                fw={600}
                c="dark.9"
                style={{
                  lineHeight: 1.1,
                  letterSpacing: -2.56,
                  maxWidth: 720,
                  fontSize: "clamp(40px, 7vw, 62px)",
                }}
              >
                I&apos;m Helping Businesses Design Better{" "}
                <Text
                  component="span"
                  inherit
                  c="rgba(16,16,16,0.48)"
                  style={{
                    fontFamily:
                      "var(--font-hedvig-serif), Hedvig Letters Serif, serif",
                    fontWeight: 400,
                    letterSpacing: -0.24,
                  }}
                >
                  Digital Experiences.
                </Text>
              </Title>

              <Text fz={18} c="rgba(0,0,0,0.56)" style={{ lineHeight: 1.58 }}>
                Focused on clarity, usability, and real impact.
              </Text>
            </Stack>

            <Group gap={12}>
              <PillButton label="View My Work" icon={heroAssets.arrowDown} />
              <Card
                radius="xl"
                p={12}
                bg="#f7f7f7"
                style={{ boxShadow: "0 10px 24px rgba(16,16,16,0.05)" }}
              >
                <Image src={heroAssets.emailIcon} alt="Email" w={20} h={20} />
              </Card>
            </Group>
          </Stack>

          <Stack gap={16} maw={296} ml="auto" mt={{ base: 0, md: 12 }} align="flex-start">
            <Group gap={12}>
              {socialLinks.map((item) => (
                <SocialIconButton key={item.label} {...item} />
              ))}
            </Group>
            <Text fz={16} c="rgba(0,0,0,0.70)" style={{ lineHeight: 1.5 }}>
              UI Designer focused on clean, engaging, and high-performing
              interfaces.
            </Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </SectionShell>
  );
}
