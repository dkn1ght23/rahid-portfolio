import { Box, Container, type BoxProps } from "@mantine/core";

type SectionShellProps = BoxProps & {
  children: React.ReactNode;
  containerSize?: number | string;
  id?: string;
};

export function SectionShell({
  children,
  containerSize = 1180,
  ...props
}: SectionShellProps) {
  return (
    <Box component="section" {...props}>
      <Container size={containerSize} px={{ base: 16, sm: 24, md: 32 }}>
        {children}
      </Container>
    </Box>
  );
}
