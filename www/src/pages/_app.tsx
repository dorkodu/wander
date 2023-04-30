import { AppProps } from "next/app";
import Head from "next/head";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

import theme from "../styles/theme";
import Script from "next/script";

import { Rubik } from "@/styles/fonts";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

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
  };

  return (
    <>
      <Head>
        <title>Dorkodu</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

        <meta name="robots" content="notranslate" />
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="notranslate" />
        <Script id="ColorThemeFARTBlocker" strategy="beforeInteractive">
          {`function set(e){let t="light"===e?"#ffffff":"#1A1B1E";document.documentElement.style.backgroundColor=t,document.querySelector('meta[name="theme-color"]').setAttribute("content",t)}let theme=localStorage.getItem("theme");"light"!==theme&&"dark"!==theme&&(theme="light",localStorage.setItem("theme","light")),set(theme);`}
        </Script>

        <style jsx global>{`
          html {
            font-family: ${Rubik.style.fontFamily};
          }
        `}</style>
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            ...theme,
            colorScheme,
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
