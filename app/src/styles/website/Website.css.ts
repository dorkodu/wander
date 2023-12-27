import { style } from '@vanilla-extract/css'
import { vanilla } from '../theme'

export const Header = {
  Root: style({}),

  Link: style({
    fontWeight: 450,
    padding: '2px 10px',
    borderRadius: 10,

    transition: '.2s',

    ':hover': {
      background: vanilla.colors.blue.light,
      textDecoration: "none"
    }
  }),
}

export const Hero = {
  Title: style({
    fontSize: 32,
    fontWeight: 800,
    lineHeight: 1.15,
    letterSpacing: -0.5,
    color: vanilla.colors.white,
    width: '90%',
    margin: `12px auto`,
    textAlign: 'center',

    selectors: {
      [vanilla.darkSelector]: {
        color: vanilla.colors.black,
      },
    },
  }),
}

export const Footer = {
  Root: style({
    background:  vanilla.colors.default,
    borderRadius: vanilla.radius.lg,
    padding: vanilla.spacing.md,
    margin: `${vanilla.spacing.md} ${vanilla.spacing.xs}`,


    selectors: {
      [vanilla.darkSelector]: {
      }
    }
  }),

  Link: style({
    color: `${vanilla.colors.dimmed} !important`,
    fontWeight: 450,
  }),

  ListTitle: style({
    fontWeight: 700,

    color: "#000",

    selectors: {
      [vanilla.darkSelector]: {
        color: 'white'
      }
    }
  }),

  DorkoduMotto: style({
    color: vanilla.colors.defaultColor,
    fontWeight: 800,
    lineHeight: 1.25,
    textAlign: 'center',

    selectors: {
      [vanilla.darkSelector]: {
        color: 'white'
      }
    }
  })
}

export const Features = {}

export const ItWorks = {}

export const DorkoduBanner = {
  Root: style({
    background: `linear-gradient(to right, #1AC455 0%, #50cc7f 100%)`,

    borderRadius: vanilla.radius.lg,
    padding: `${vanilla.spacing.lg} ${vanilla.spacing.lg}`,
    maxWidth: 1000,
    margin: `0 auto`,

    selectors: {
      [vanilla.darkSelector]: {
        background: `linear-gradient(to right, #1AC455 0%, #50cc7f 100%)`,
      }
    }
  }),

  Title: style({
    color: "white",
    textShadow: `1px 1px 5px ${vanilla.colors.green[8]}`,
    letterSpacing: -0.75,
    lineHeight: 1.1,
    fontWeight: 800,
    fontSize: 28
  }),

  Text: style({
    color: vanilla.colors.blue[0],
    lineHeight: 1.25,
    fontSize: 18,
    textShadow: `1px 1px 2px ${vanilla.colors.green[9]}`,
  }),

  Button: style({
    maxWidth: 300,
    background: "white",
    boxShadow: `0 0 3px ${vanilla.colors.green[9]}`,
    color: vanilla.colors.green[8],
    fontWeight: 700,
    border: 0,
    borderBottom: `4px solid ${vanilla.colors.green[2]}`,
  })
}
