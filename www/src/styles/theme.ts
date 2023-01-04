import { MantineThemeOverride } from "@mantine/core";
import { theme as PrismTheme } from "@dorkodu/prism";
import ComponentLibrary from "./components";

const theme: MantineThemeOverride = {
  ...PrismTheme,
  colorScheme: "light",
  components: ComponentLibrary.components,
};

export default theme;
