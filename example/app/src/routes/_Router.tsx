import CenterLoader from "@/components/loaders/CenterLoader";
import React, { Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import App from "../App";
import { useWait } from "../components/hooks";

// Lazy routes \\
const LazyWelcome = React.lazy(useWait(() => import("./Welcome")));
const LazyNotFound = React.lazy(useWait(() => import("./NotFound")));
// Lazy routes \\

const Welcome = <Suspense fallback={<CenterLoader />}><LazyWelcome /></Suspense>
const NotFound = <Suspense fallback={<CenterLoader />}><LazyNotFound /></Suspense>

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Navigate to "/welcome" on path "/" */}
      <Route index element={<Navigate to="/welcome" />} />

      <Route path="/welcome" element={Welcome} />

      {/* Error routes & catch all */}
      <Route path="/404" element={NotFound} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Route>
  )
)
