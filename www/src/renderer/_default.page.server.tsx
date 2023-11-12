import { renderToStream } from "react-streaming/server";

import React from "react";
import { escapeInject } from "vike/server";

import { App } from "./App";
import { getMetadata } from "./getMetadata";
import type { OnRenderHtmlAsync } from "vike/types";

export { render };
export { passToClient };

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

  const title = get(pageContext);
  const description = pageContext?.documentProps.description;

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <title>${description}</title>
      </head>
      <body>
        <div id="page-view">${stream}</div>
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
