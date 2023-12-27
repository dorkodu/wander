import { Paper, rgba } from '@mantine/core'
import { style } from '@vanilla-extract/css'
import { vanilla } from './theme'

export const wrapContent = style({
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
})

export const truncate = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const glassBackground =
  style({
    background: rgba('#FFFFFF', 0.75),

    backdropFilter: `blur(5px)`,

    selectors: {
      [vanilla.darkSelector]: {
        background: rgba(vanilla.colors.black, 0.6),
      },
    },
  })
