import { style, styleVariants } from '@vanilla-extract/css'
import { vanilla } from '../theme'

const Paper = style({
  marginLeft: 7,

  '@media': {
    [vanilla.largerThan('sm')]: {
      padding: vanilla.spacing.sm,
      margin: vanilla.spacing.sm,
      border: `1px solid ${vanilla.colors.gray[4]}`,
      background: vanilla.colors.gray[0],
      boxShadow: `0px 1px 4px 1px ${vanilla.colors.gray[3]}`,

      selectors: {
        [vanilla.darkSelector]: {
          border: `1px solid ${vanilla.colors.dark[4]}`,
          background: vanilla.colors.dark[6],
          boxShadow: `0px 1px 4px 1px ${vanilla.colors.dark[9]}`,
        },
      },
    },
  },
})

const LinkButtonBase = style({
  borderRadius: 16,
  padding: '8px 10px',
  paddingRight: 18,
  display: 'inline-block',

  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'rgba(255,255,255, 0)',

  transitionDuration: '0.2s',

  ':hover': {
    backgroundColor: vanilla.colors.blue.light,
    color: vanilla.colors.blue.lightColor,
  },
})

const LinkButton = styleVariants({
  plain: [LinkButtonBase],
  active: [
    LinkButtonBase,
    {
      backgroundColor: vanilla.colors.blue.light,
      color: vanilla.colors.blue.lightColor,

      borderColor: vanilla.colors.blue.light,
    },
  ],
})

export default {
  Paper,
  LinkButton,
}
