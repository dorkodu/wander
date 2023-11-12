import React from "react";
import { PageContextProvider } from "./usePageContext";

import { theme } from "#/styles/theme";

//? Layouts
import { Layout } from "../layouts/Base.layout";
import { MantineProvider } from "@mantine/core";
import type { PageContext } from "vike/types";

export function App({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <MantineProvider theme={theme}>
          <Layout>{children}</Layout>
        </MantineProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}
