import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppShell, Loader, MantineProvider } from "@mantine/core";

import { useAppStore } from "./stores/appStore";
import theme from "./styles/theme";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const loading = useAppStore((state) => state.getLoading());

  return (
    <>
      <MantineProvider theme={theme}>
        <AppShell
          padding="xs"
          header={<Header />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
          footer={
            <Footer
              data={[
                {
                  title: "About",
                  links: [
                    {
                      label: "Features",
                      link: "#",
                    },
                    {
                      label: "Pricing",
                      link: "#",
                    },
                    {
                      label: "Support",
                      link: "#",
                    },
                    {
                      label: "Forums",
                      link: "#",
                    },
                  ],
                },
                {
                  title: "Project",
                  links: [
                    {
                      label: "Contribute",
                      link: "#",
                    },
                    {
                      label: "Media assets",
                      link: "#",
                    },
                    {
                      label: "Changelog",
                      link: "#",
                    },
                    {
                      label: "Releases",
                      link: "#",
                    },
                  ],
                },
                {
                  title: "Community",
                  links: [
                    {
                      label: "Join Discord",
                      link: "#",
                    },
                    {
                      label: "Follow on Twitter",
                      link: "#",
                    },
                    {
                      label: "Email newsletter",
                      link: "#",
                    },
                    {
                      label: "GitHub discussions",
                      link: "#",
                    },
                  ],
                },
              ]}
            />
          }
        >
          <Suspense>
            {loading ? <Loader color="gray" variant="dots" /> : <Outlet />}
          </Suspense>
        </AppShell>
      </MantineProvider>
    </>
  );
}

export default App;
