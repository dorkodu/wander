import { IUser } from '@sdk/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { useAppStore } from './appStore'

export interface DorkoduAction {
  auth: (user: IUser | undefined) => void
  logout: () => void
}

export interface DorkoduState {
  currentUserId: string | undefined

  users: Record<string, IUser>
}

const initialState: DorkoduState = {
  currentUserId: undefined,
  users: {},
}

export type DorkoduStoreInterface = DorkoduState & DorkoduAction

export const useDorkoduStore = create<DorkoduStoreInterface>()(
  immer(
    persist(
      (set, get) => ({
        ...initialState,

        auth: (user: IUser | undefined) => {},
        logout: () => {},
      }),
      {
        name: 'dorkodu-store',
      }
    )
  )
)
