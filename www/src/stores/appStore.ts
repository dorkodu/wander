import { ColorScheme } from "@mantine/core";
import create from "zustand";
import { immer } from "zustand/middleware/immer";
import i18n from "../lib/i18n";

interface State {
  colorScheme: ColorScheme;
  loading: {
    auth: boolean;
    locale: boolean;
  };
}

interface Action {
  getLoading: () => boolean;
  toggleColorScheme: () => void;
  setAuthLoading: (loading: boolean) => void;
  setLocaleLoading: (loading: boolean) => void;
  changeLocale: (lang: string) => void;
}

const initialState: State = {
  colorScheme: "light",
  loading: {
    auth: false,
    locale: true,
  },
};

export const useAppStore = create(
  immer<State & Action>((set, get) => ({
    ...initialState,

    toggleColorScheme: () => {
      set((state) => {
        state.colorScheme = state.colorScheme === "dark" ? "light" : "dark";
      });
    },

    getLoading: () => {
      return get().loading.auth || get().loading.locale;
    },

    setAuthLoading: (loading) => {
      set((state) => {
        state.loading.auth = loading;
      });
    },

    setLocaleLoading: (loading) => {
      set((state) => {
        state.loading.locale = loading;
      });
    },

    changeLocale: async (lang) => {
      set((state) => {
        state.loading.locale = true;
      });

      await Promise.all([i18n.changeLanguage(lang)]);
      document.documentElement.lang = lang;

      set((state) => {
        state.loading.locale = false;
      });
    },
  }))
);
