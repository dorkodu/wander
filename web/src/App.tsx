import { Suspense } from "react";
import { Outlet } from "react-router-dom"
import Spinner from "./components/Spinner";
import { useAppStore } from "./stores/appStore"

function App() {
  const loading = useAppStore(state => state.getLoading());

  //const queryAuth = useUserStore(state => state.queryAuth);
  //useEffect(() => { queryAuth(); }, []);

  return (
    <>
      <Suspense >
        {loading ? <Spinner /> : <Outlet />}
      </Suspense>
    </>
  )
}

export default App
