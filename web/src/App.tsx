import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader, MantineProvider } from "@mantine/core";

import { useAppStore } from "./stores/appStore";
import theme from "./styles/theme";

function App() {
  const loading = useAppStore((state) => state.getLoading());

  return (
    <>
      <MantineProvider theme={theme}>
        <Suspense>
          {loading ? <Loader color="green" variant="dots" /> : <Outlet />}
        </Suspense>
      </MantineProvider>
    </>
  );
}

export default App;
