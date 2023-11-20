import { createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
  fontFamily: "JetBrains Mono, Fira Code, Consolas, ui-monospace, monospace",
  fontFamilyMonospace: "JetBrains Mono, Fira Code, Consolas, ui-monospace, monospace",
  headings: {
    fontFamily: "JetBrains Mono, Fira Code, Consolas, ui-monospace, monospace",
  },
  primaryColor: "green"
});

export const vanilla = themeToVars(theme);
