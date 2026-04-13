import { ActionIcon } from "@mantine/core";
import { JSX } from "react";

// Define the SocialIconButtonProps type
type SocialIconButtonProps = {
  icon: JSX.Element;
  label: string;
  href: string;
};

export function SocialIconButton({
  icon,
  label,
  href,
}: SocialIconButtonProps) {
  return (
    <ActionIcon
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="default"
      radius="xl"
      size={36}
      aria-label={label}
      styles={{
        root: {
          border: "1px solid #f1f1f1",
          backgroundColor: "#ffffff",
          transition: "all 0.2s ease",
        },
      }}
    >
      {icon}
    </ActionIcon>
  );
}