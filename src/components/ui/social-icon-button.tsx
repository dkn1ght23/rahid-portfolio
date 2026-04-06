import { ActionIcon, Image } from "@mantine/core";

type SocialIconButtonProps = {
  icon: string;
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
      <Image src={icon} alt={label} w={18} h={18} />
    </ActionIcon>
  );
}