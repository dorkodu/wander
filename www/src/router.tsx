import CenterLoader from "@/components/loaders/CenterLoader";
import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "./App";

import { wait } from "./components/hooks";
import WebsiteLayout from "./layouts/WebsiteLayout";
import AppLayout from "./layouts/AppLayout";

function Page(name: string) {
  const View = React.lazy(wait(() => import(`@/views/${name}.tsx`)));

  return (
    <Suspense fallback={<CenterLoader />}>
      <View />
    </Suspense>
  );
}

//? PAGES: App
const Home = Page("Home");
const New = Page("New");
const Settings = Page("Settings");
const ConnectID = Page("ConnectID");
//? PAGES: Website
const Welcome = Page("Welcome");
//! PAGES: Auth* Required
const Sync = Page("Sync");

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Navigate to "/welcome" on path "/" */}
      <Route element={<WebsiteLayout />}>
        <Route index element={Welcome} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/home" element={Home} />
        <Route path="/new" element={New} />
        <Route path="/settings" element={Settings} />
        <Route path="/connect-id" element={ConnectID} />
      </Route>

      {/* Routes that require authentication 
        <Route element={<RequireAuth />}>
          <Route path="/sync" element={Sync} />
          <Route path="/discussion-editor/:id" element={DiscussionEditor} />
          <Route path="/notifications" element={Notifications} />
        </Route>
      */}

      {/* Error routes & catch all */}
      <Route path="/404" element={Page("NotFound")} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Route>
  )
);
