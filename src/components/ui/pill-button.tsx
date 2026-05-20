import { Button, Group, Image, Text } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";

type PillButtonProps = {
  label: string;
  icon?: string;
  reversed?: boolean;
  dark?: boolean;
};

export function PillButton({
  label,
  icon,
  reversed = false,
  dark = true,
}: PillButtonProps) {
  const iconNode = icon ? (
    <Image src={icon} alt="" w={16} h={16} fit="contain" />
  ) : (
    <IconArrowDown color="#000000" />
  );

  return (
    <Button
      radius={33}
      size="compact-md"
      variant="filled"
      color={dark ? "dark.9" : "gray.0"}
      leftSection={
        reversed ? undefined : (
          <Group
            justify="center"
            align="center"
            w={36}
            h={36}
            style={{
              background: dark ? "#ffffff" : "#101010",
              borderRadius: 100,
              boxShadow: reversed
                ? "none"
                : "0 1px 2px rgba(0,0,0,0.10), 0 4px 4px rgba(0,0,0,0.09), 0 10px 6px rgba(0,0,0,0.05)",
              flexShrink: 0,
            }}
          >
            {iconNode}
          </Group>
        )
      }
      rightSection={
        reversed ? (
          <Group
            justify="center"
            align="center"
            w={36}
            h={36}
            style={{
              background: dark ? "#ffffff" : "#101010",
              borderRadius: 100,
              boxShadow: "0 1px 2px rgba(0,0,0,0.10), 0 4px 4px rgba(0,0,0,0.09), 0 10px 6px rgba(0,0,0,0.05)",
              flexShrink: 0,
            }}
          >
            {iconNode}
          </Group>
        ) : undefined
      }
      styles={{
        root: {
          height: 44,
          paddingLeft: reversed ? 20 : 4,
          paddingRight: reversed ? 4 : 20,
          gap: 8,
          boxShadow: reversed || !dark
            ? undefined
            : "0 6px 12px rgba(0,0,0,0.10), 0 22px 22px rgba(0,0,0,0.09), 0 50px 30px rgba(0,0,0,0.05)",
          transition: "transform 160ms ease, box-shadow 160ms ease",
          "&:hover": dark
            ? {
                transform: "translateY(-1px)",
                boxShadow: reversed
                  ? undefined
                  : "0 8px 14px rgba(0,0,0,0.12), 0 24px 24px rgba(0,0,0,0.10), 0 50px 30px rgba(0,0,0,0.06)",
              }
            : undefined,
        },
        inner: {
          display: "flex",
          gap: 8,
          alignItems: "center",
        },
        section: {
          margin: 0,
        },
        label: {
          padding: 0,
        },
      }}
    >
      <Text
        c={dark ? "white" : "dark.9"}
        fz={14}
        fw={400}
        lh="normal"
        tt="capitalize"
        style={{ letterSpacing: 0.14 }}
      >
        {label}
      </Text>
    </Button>
  );
}
