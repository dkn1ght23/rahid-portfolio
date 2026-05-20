import {
  Box,
  Card,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";


import { SectionShell } from "@/src/components/ui/section-shell";
import { PillButton } from "@/src/components/ui/pill-button";
import { SocialIconButton } from "@/src/components/ui/SocialIconButton";
import hero_img from "@/public/assets/hero_img.png"
import Image from "next/image";
import { IconBrandInstagram, IconMail, IconBrandDribbble, IconBrandLinkedin, IconBrandX  } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <SectionShell py={{ base: 24, md: 40 }}>
      <Stack gap={24}>
        <Flex justify="flex-end">
            <Image src={hero_img} alt="Portrait collage" width={300} height={172}  />
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

            <Flex>
              <Group gap={12}>
              <PillButton label="View My Work" />
              <Card
                radius="xl"
                p={12}
                bg="#f7f7f7"
                style={{ boxShadow: "0 10px 24px rgba(16,16,16,0.05)" }}
              >
                <IconMail color="#000000" />
              </Card>
            </Group>
             <Stack gap={16} maw={296} ml="auto" mt={{ base: 0, md: 12 }} align="flex-start">
            <Group gap={12}>
             <SocialIconButton icon={<IconBrandInstagram size={20}/>} label="Instagram" href="https://instagram.com" />
             <SocialIconButton icon={<IconBrandX  size={20}/>} label="Instagram" href="https://instagram.com" />
             <SocialIconButton icon={<IconBrandDribbble  size={20}/>} label="Instagram" href="https://instagram.com" />
             <SocialIconButton icon={<IconBrandLinkedin  size={20}/>} label="Instagram" href="https://instagram.com" />
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
