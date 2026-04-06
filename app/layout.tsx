import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Hedvig_Letters_Serif, Inter_Tight } from "next/font/google";
import { theme } from "@/src/theme";
import "@mantine/core/styles.css";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const hedvigLettersSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shofik Hasan | UI Designer",
  description:
    "Portfolio website for a UI designer focused on clarity, usability, and impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interTight.variable} ${hedvigLettersSerif.variable}`}
    >
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>

      <body>
        <MantineProvider
          defaultColorScheme="light"
          theme={theme}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}