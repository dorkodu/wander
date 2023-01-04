import { MantineTheme } from "@mantine/core";
import { theme as PrismTheme } from "@dorkodu/prism";
import ComponentLibrary from "./components";

const theme: Partial<MantineTheme> = {
  ...PrismTheme,
  components: ComponentLibrary.components,
};

export default theme;
