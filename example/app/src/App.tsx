import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { theme } from "./styles/theme";
import UpdateSW from "./components/modals/UpdateSW";
import { useRegisterSW } from "virtual:pwa-register/react";
import { ScrollRestoration } from "react-router-dom"

export default function App() {
  const {
    offlineReady: [_offlineReady, _setOfflineReady],
    needRefresh: [needRefresh, _setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "theme",
    defaultValue: "light",
    getInitialValueInEffect: false,
    serialize: (value) => value,
    deserialize: (value) => value as ColorScheme,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    const scheme = value || (colorScheme === "dark" ? "light" : "dark");
    const color = scheme === "light" ? "#ffffff" : "#1A1B1E";
    document.documentElement.style.backgroundColor = color;
    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (themeColor) themeColor.content = color;
    setColorScheme(scheme);
  }

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ ...theme, colorScheme }} withNormalizeCSS withGlobalStyles>
          <Outlet />
          {needRefresh && <UpdateSW updateSW={updateServiceWorker} />}
        </MantineProvider>
      </ColorSchemeProvider>

      <ScrollRestoration />
    </>
  )
}