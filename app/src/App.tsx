import { useEffect } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'

import { theme } from '#/styles/theme'

import OverlayLoader from '#/components/loaders/OverlayLoader'
import UpdateSWModal from '#/components/modals/UpdateSWModal'
import { useRefreshStatsDaily } from '#/components/hooks'

import { useAppStore } from '#/stores/appStore'
import { useTrekieStore } from '#/stores/trekieStore'

function App() {
  const loading = useAppStore(state => state.loading)

  useEffect(() => {
    // TODO: Perform authorization logic by sending a request to the API
    if (!loading.auth) return
    useTrekieStore.getState().auth(undefined)
  }, [loading.auth])

  // app hooks

  // trekie hooks
  useRefreshStatsDaily()

  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        {loading.auth && <OverlayLoader full={true} />}
        {!loading.auth && <Outlet />}

        {/* Modals */}
        <UpdateSWModal />
      </MantineProvider>

      <ScrollRestoration />
    </>
  )
}

export default App
