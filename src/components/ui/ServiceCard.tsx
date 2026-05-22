import { Box, Card, Stack, Text } from "@mantine/core";

type ServiceCardProps = {
  title: string;
};

function Layer(offset: number, rotate: number, zIndex: number) {
  return (
    <Box
      key={`${offset}-${rotate}`}
      style={{
        position: "absolute",
        top: 18,
        left: offset,
        width: 126,
        height: 140,
        borderRadius: 19,
        background: "#d9d9d9",
        transform: `rotate(${rotate}deg)`,
        zIndex,
      }}
    />
  );
}

export function ServiceCard({ title }: ServiceCardProps) {
  return (
    <Stack align="center" gap={31} h="100%" maw={321} mx="auto" w="100%">
      <Card
        radius={0}
        p={0}
        bg="transparent"
        style={{
          width: "100%",
          maxWidth: 321,
          height: 196,
          position: "relative",
          overflow: "visible",
          marginInline: "auto",
        }}
      >
        {Layer(0, -10, 1)}
        {Layer(172, 10, 2)}
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 70,
            width: 180,
            height: 196,
            borderRadius: 19,
            background: "#d9d9d9",
            zIndex: 3,
          }}
        />
      </Card>
      <Text
        ta="center"
        fz={20}
        fw={400}
        lh="24px"
        c="rgba(0,0,0,0.7)"
        w="100%"
        style={{ letterSpacing: -0.6 }}
      >
        {title}
      </Text>
    </Stack>
  );
}
