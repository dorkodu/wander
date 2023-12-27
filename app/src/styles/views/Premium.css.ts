import { style } from '@vanilla-extract/css'
import { theme, vanilla } from '../theme'
import { darken, rgba } from '@mantine/core'

const BackgroundGradient = `linear-gradient(to top, #00BFFA 0%, #220CA1 100%)` 

export const Banner = {
  Root: style({
    borderRadius: vanilla.radius.lg,
    padding: `${vanilla.spacing.lg} ${vanilla.spacing.lg}`,
    maxWidth: 1000,
    backgroundImage: BackgroundGradient,
    margin: `0 auto`
  }), 

  Title: style({
    color: "white",
    textShadow: `1px 1px 5px ${vanilla.colors.indigo[6]}`,
    letterSpacing: -0.75,
    lineHeight: 1.1,
    fontWeight: 800,
    fontSize: 28
  }),

  Text: style({
    color: vanilla.colors.blue[0],
    lineHeight: 1.25,
    fontSize: 20,
    textShadow: `1px 1px 2px ${vanilla.colors.blue[9]}`,
  }),


  Button: style({
    maxWidth: 300,
    background: "white",
    boxShadow: `0 0 3px ${vanilla.colors.blue[9]}`,
    color: vanilla.colors.blue[8],
    fontWeight: 700,
    border: 0,
    borderBottom: `5px solid ${vanilla.colors.blue[2]}`,
  })
}

// linear-gradient(to right, #1c92d2, #f2fcfe)
// linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)
// 
