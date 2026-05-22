import Image from "next/image";
import { ActionIcon, Box, Flex, Group, Stack, Text, Title } from "@mantine/core";
import {
  IconBrandDribbble,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import heroImage from "@/public/assets/hero-image.png";
import { SectionShell } from "@/src/components/ui/SectionShell";
import { PillButton } from "@/src/components/ui/PillButton";
import { SocialIconButton } from "@/src/components/ui/SocialIconButton";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <IconBrandInstagram size={20} />,
  },
  {
    label: "X",
    href: "https://x.com",
    icon: <IconBrandX size={20} />,
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com",
    icon: <IconBrandDribbble size={20} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <IconBrandLinkedin size={20} />,
  },
];

export function HeroSection() {
  return (
    <SectionShell py={{ base: 24, md: 40 }}>
      <Stack gap={24}>
        <Flex justify="flex-end">
          <Image
            src={heroImage}
            alt="Portrait collage"
            width={300}
            height={172}
            priority
          />
        </Flex>

        <Stack gap={20}>
          <Group gap={10} wrap="nowrap" align="center">
            <Box
              w={45}
              h={56}
              bg="#D9D9D9"
              style={{
                transform: "rotate(-5deg)",
                borderRadius: 12,
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

          <Flex
            gap={24}
            align="flex-start"
            direction={{ base: "column", md: "row" }}
          >
            <Group gap={12}>
              <PillButton label="View My Work" href="#work" />
              <ActionIcon
                component="a"
                href="mailto:shofikhasan.uiux@gmail.com"
                aria-label="Email Shofik Hasan"
                variant="filled"
                radius="xl"
                size={44}
                bg="#f7f7f7"
                c="#000000"
                style={{ boxShadow: "0 10px 24px rgba(16,16,16,0.05)" }}
              >
                <IconMail size={20} />
              </ActionIcon>
            </Group>

            <Stack
              gap={16}
              maw={296}
              ml={{ base: 0, md: "auto" }}
              mt={{ base: 0, md: 12 }}
              align="flex-start"
            >
              <Group gap={12}>
                {socialLinks.map((link) => (
                  <SocialIconButton
                    key={link.label}
                    icon={link.icon}
                    label={link.label}
                    href={link.href}
                  />
                ))}
              </Group>
              <Text fz={16} c="rgba(0,0,0,0.70)" style={{ lineHeight: 1.5 }}>
                UI Designer focused on clean, engaging, and high-performing
                interfaces.
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Stack>
    </SectionShell>
  );
}
