import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import App from "../App";

const Welcome = React.lazy(() => import("./Welcome"));
const NotFound = React.lazy(() => import("./NotFound"));
const Home = React.lazy(() => import("./Home"));

// After Logged In
const Feed = React.lazy(() => import("./Feed"));
const Explore = React.lazy(() => import("./Explore"));
const Garden = React.lazy(() => import("./Garden"));
const Inbox = React.lazy(() => import("./Inbox"));
const Profile = React.lazy(() => import("./Profile"));

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Navigate to "/welcome" on path "/" */}
          <Route index element={<Navigate to="/welcome" />} />

          {/* Routes that don't require authentication */}
          <Route path="/welcome" element={<Welcome />} />

          {/* Routes that require authentication */}
          <Route path="/" element={<Home />}>
            <Route path="/feed" element={<Feed />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/garden" element={<Garden />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Error routes & catch all */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
