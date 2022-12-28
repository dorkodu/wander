import { AppShell, Header, Loader } from "@mantine/core";
import { FunctionComponent, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { useAppStore } from "../stores/appStore";

const Home: FunctionComponent<{}> = ({}) => {
  const loading = useAppStore((state) => state.getLoading());

  return (
    <AppShell
      padding="md"
      navbar={<NavBar />}
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Suspense>
        {loading ? <Loader color="gray" variant="dots" /> : <Outlet />}
      </Suspense>
    </AppShell>
  );
};

export default Home;
