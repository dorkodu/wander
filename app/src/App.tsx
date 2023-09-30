import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import Home from "./views/Home";

import { theme } from "./styles/theme.ts";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Home />
    </MantineProvider>
  );
}
