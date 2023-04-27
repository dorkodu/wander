import create from "zustand";
import { immer } from "zustand/middleware/immer";

export interface AppStoreState {
  
}

export interface AppStoreAction {
  
}

const initialState: AppStoreState = {
  
}

export const useAppStore = create(
  immer<AppStoreState & AppStoreAction>((_set, _get) => ({
    ...initialState,
  }))
);
