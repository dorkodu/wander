import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import { Link } from "./Link";
import { Layout } from "../layouts/Base.layout";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <h1>Website Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <main>{children}</main>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}
