// /renderer/_default.page.client.js
// Environment: browser

export { render };
export const clientRouting = true;

// See "Link prefetching" section below. Default value: 'hover'.
export const prefetchStaticAssets = "viewport";

// Whether your UI framework allows the hydration to be aborted. (Allowing Vike
// to abort the hydration if the user clicks on a link before the hydration finished.)
// React users should set hydrationCanBeAborted to true. (Other frameworks,
// such as Vue, crash if the hydration is aborted.)
export const hydrationCanBeAborted = true;

// Create custom page transition animations
export { onPageTransitionStart, onPageTransitionEnd, onHydrationEnd };

import { App } from "./App";

//? ************** RENDER **************

import ReactDOM from "react-dom/client";
import { getPageTitle } from "./getMetadata";
import type { OnRenderClientAsync } from "vike/types";

let root: ReactDOM.Root;
const render: OnRenderClientAsync = async (
  pageContext
): ReturnType<OnRenderClientAsync> => {
  const { Page, pageProps } = pageContext;

  const page = (
    <App pageContext={pageContext}>
      <Page {...pageProps} />
    </App>
  );

  const container = document.getElementById("root")!;
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
};

//? ************** Page Animations **************

function onHydrationEnd() {
  console.log("Hydration finished; page is now interactive.");
}
function onPageTransitionStart() {
  console.log("Page transition start");
  document.querySelector("body")!.classList.add("page-is-transitioning");
}
function onPageTransitionEnd() {
  console.log("Page transition end");
  document.querySelector("body")!.classList.remove("page-is-transitioning");
}
