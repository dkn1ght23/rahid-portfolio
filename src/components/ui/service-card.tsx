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
        background: "#ececec",
        transform: `rotate(${rotate}deg)`,
        zIndex,
      }}
    />
  );
}

export function ServiceCard({ title }: ServiceCardProps) {
  return (
    <Stack align="center" gap={20}>
      <Card
        radius={24}
        p={0}
        bg="transparent"
        styles={{
          root: {
            width: 220,
            height: 190,
            position: "relative",
            overflow: "visible",
            transition: "transform 180ms ease, filter 180ms ease",
            filter: "drop-shadow(0 12px 22px rgba(16,16,16,0.06))",
            "&:hover": {
              transform: "translateY(-6px)",
              filter: "drop-shadow(0 18px 30px rgba(16,16,16,0.10))",
            },
          },
        }}
      >
        {Layer(18, -10, 1)}
        {Layer(76, 0, 3)}
        {Layer(134, 10, 2)}
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 54,
            width: 112,
            height: 162,
            borderRadius: 20,
            border: "7px solid white",
            background: "#ececec",
            zIndex: 4,
          }}
        />
      </Card>
      <Text ta="center" fz={16} fw={500} c="rgba(16,16,16,0.78)">
        {title}
      </Text>
    </Stack>
  );
}
