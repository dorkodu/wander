import { Suspense } from "react";
import { Outlet } from "react-router-dom"
import { useAppStore } from "./stores/appStore"

function App() {
  const loading = useAppStore(state => state.getLoading());
  
  return (
    <>
      <Suspense >
        {loading ? <>loading...</> : <Outlet />}
      </Suspense>
    </>
  )
}

export default App
