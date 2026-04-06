import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "dark",
  fontFamily:
    "var(--font-inter-tight), Inter Tight, Arial, Helvetica, sans-serif",
  headings: {
    fontFamily:
      "var(--font-inter-tight), Inter Tight, Arial, Helvetica, sans-serif",
  },
  colors: {
    dark: [
      "#f5f5f5",
      "#e7e7e7",
      "#cfcfcf",
      "#b7b7b7",
      "#9f9f9f",
      "#878787",
      "#6f6f6f",
      "#414141",
      "#212121",
      "#101010",
    ],
  },
  defaultRadius: "md",
});
