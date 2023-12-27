import {
  Anchor,
  Button,
  Title,
  createTheme,
  useMantineColorScheme,
} from '@mantine/core'
import { themeToVars } from '@mantine/vanilla-extract'

export const theme = createTheme({
  primaryColor: 'green',
  defaultRadius: 'md',
  cursorType: 'pointer',

  fontFamily: 'Rubik, Roboto, sans-serif',
  fontFamilyMonospace: 'JetBrains Mono, Fira Code, monospace',

  components: {
    Anchor: Anchor.extend({
      styles: (theme) => ({
        root: {
          color: theme.colors.blue[6],
          fontWeight: 450
        },
      }),
    }),
    Title: Title.extend({
      styles: (theme) => ({
        root: {
          color: useThemed({ light: theme.black, dark: theme.white }),
        },
      }),
    }),
    Button: Button.extend({
      defaultProps: {
        radius: 'lg',
      },
    }),
  },
})

export const vanilla = themeToVars(theme)

export function useThemed({ dark, light }: { light: string; dark: string }) {
  return useMantineColorScheme().colorScheme == 'dark' ? dark : light
}
