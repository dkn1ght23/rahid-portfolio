import { Button, Group, Image, Text } from "@mantine/core";

type PillButtonProps = {
  label: string;
  icon: string;
  reversed?: boolean;
  dark?: boolean;
};

export function PillButton({
  label,
  icon,
  reversed = false,
  dark = true,
}: PillButtonProps) {
  return (
    <Button
      radius="xl"
      size="md"
      variant="filled"
      color={dark ? "dark.9" : "gray.0"}
      styles={{
        root: {
          height: 52,
          paddingInline: reversed ? 16 : 24,
          boxShadow: dark
            ? "0 10px 18px rgba(16,16,16,0.08), 0 18px 30px rgba(16,16,16,0.06)"
            : undefined,
          transition: "transform 160ms ease, box-shadow 160ms ease",
          "&:hover": dark
            ? {
                transform: "translateY(-1px)",
                boxShadow: "0 14px 22px rgba(16,16,16,0.10), 0 24px 36px rgba(16,16,16,0.08)",
              }
            : undefined,
        },
        inner: {
          display: "flex",
          flexDirection: reversed ? "row-reverse" : "row",
          gap: 8,
          alignItems: "center",
        },
      }}
    >
      <Group gap={8} wrap="nowrap">
        <Text
          c={dark ? "white" : "dark.9"}
          fz={14}
          fw={400}
          lh="normal"
          style={{ letterSpacing: 0.14 }}
        >
          {label}
        </Text>

        {/* Icon as visual element ONLY (not a button) */}
        <Image src={icon} alt="" w={16} h={16} />
      </Group>
    </Button>
  );
}
