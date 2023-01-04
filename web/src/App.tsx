import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader, MantineProvider } from "@mantine/core";

import { useAppStore } from "./stores/appStore";
import theme from "./styles/theme";

function App() {
  const loading = useAppStore((state) => state.getLoading());
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={theme}>
        <Suspense>
          {loading ? <Loader color="green" variant="dots" /> : <Outlet />}
        </Suspense>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
