import { ComplexStyleRule, globalStyle, style } from "@vanilla-extract/css";
import { vanilla } from "#/styles/theme"
import { rem } from "@mantine/core";

globalStyle("html, body", {
  display: "block",
  width: "100%",
  minHeight: "100vh",
  height: "unset",
  overflow: "auto",

  backgroundImage: `linear-gradient(to top, #cce0f2 0%, #fefefe 100%)`,

  [vanilla.darkSelector]: {
    backgroundImage: `linear-gradient(to top, #050607 0%, #202122 100%)`,
  },

})

// Shared
const css: Record<string, ComplexStyleRule> = {
  SharedRadius: {
    borderRadius: 14,
    '@media': {
      [vanilla.smallerThan(vanilla.breakpoints.sm)]: {
        borderRadius: 0,
      },
    },
  }
}

export const Root = style({
  maxWidth: 1200,
  margin: "10px auto",
  
  ...css.SharedRadius,

})

export const Header = style({
})

export const Footer = {
  Root: style({
    opacity: 0.4,
  }),
}

export const Body = style({
  display: "flex",
  
  ...css.SharedRadius,
})

export const Main = style({
  width: "75%",
  padding: rem(12),


  selectors: {
    [vanilla.darkSelector]: {
      borderColor: vanilla.colors.dark[5],
    }
  },

  '@media': {
    [vanilla.smallerThan(vanilla.breakpoints.sm)]: {
      width: "100%",
      borderRadius: 0,
    },
  },
})

export const Sidebar = style({
  width: "25%",
  maxWidth: rem(300),
  padding: rem(12),

  selectors: {
    [vanilla.darkSelector]: {
    }
  },

  '@media': {
    [vanilla.smallerThan(vanilla.breakpoints.sm)]: {
      display: "none" 
    },
  },
})