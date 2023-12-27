import { Navigate, Outlet } from 'react-router-dom'
import { useTrekieStore } from '#/stores/trekieStore'

export default {
  Require() {
    const authorized = useTrekieStore(state => state.userId)
    return authorized ? <Outlet /> : <Navigate to="/" replace />
  },
  Prevent() {
    const authorized = useTrekieStore(state => state.userId)
    return !authorized ? <Outlet /> : <Navigate to="/home" replace />
  },
} // Import as Auth or AuthRoute, as you fancy!
