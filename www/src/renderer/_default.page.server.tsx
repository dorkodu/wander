import { escapeInject } from "vike/server";

import { App } from "./App";
import { getMetadata } from "./getMetadata";
import type { OnRenderHtmlAsync } from "vike/types";

// @ts-ignore
import { renderToStream } from "react-streaming/server";

export { render, passToClient };

const passToClient = ["pageProps", "documentProps", "someAsyncProps"];

const render: OnRenderHtmlAsync = async (
  pageContext
): ReturnType<OnRenderHtmlAsync> => {
  const { Page, pageProps } = pageContext;

  const stream = await renderToStream(
    <App pageContext={pageContext}>
      <Page {...pageProps} />
    </App>,
    // We don't need react-streaming for this app. (We use it merely to showcase that Vike can handle react-streaming with a pre-rendered app. Note that using react-streaming with pre-rendering can make sense if we want to be able to use React's latest <Suspsense> techniques.)
    { disable: true }
  );

  const meta = getMetadata(pageContext);

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${meta.title}</title>

        <meta charset="UTF-8" />

    <meta name="title" content="${meta.title}" />
    <meta
      name="description"
      content="${meta.description}" />

    <link rel="icon" type="image/png" href="/favicon.svg" />
    <link rel="apple-touch-icon" sizes="150x150" href="/favicon.svg" />
    <meta name="msapplication-TileColor" content="#08DB40" />
    <meta name="theme-color" content="#08DB40" />

    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width" />

    <meta name="robots" content="notranslate" />
    <meta name="googlebot" content="notranslate" />
    <meta name="google" content="notranslate" />

    <style>
      @font-face {
        font-family: Rubik;
        src: url("/fonts/Rubik.woff2") format("woff2");
        font-display: fallback;
      }

      .hidden {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
      }
    </style>

    <!-- Light/dark theme switcher, minified and original code. -->
    <script>
      function set(e) {
        let t = "light" === e ? "#ffffff" : "#1A1B1E";
        (document.documentElement.style.backgroundColor = t),
          document
            .querySelector('meta[name="theme-color"]')
            .setAttribute("content", t);
      }
      let theme = localStorage.getItem("theme");
      "light" !== theme &&
        "dark" !== theme &&
        ((theme = "light"), localStorage.setItem("theme", "light")),
        set(theme);
    </script>

      </head>
      <body>
        <div id="root">${stream}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    // See https://vike.dev/stream#initial-data-after-stream-end
    pageContext: async () => {
      return {
        someAsyncProps: 42,
      };
    },
  };
};
