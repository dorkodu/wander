import { useMemo } from 'react'
import twemoji from 'twemoji'
import classes from '#/styles/components/Emoji.module.css'

interface Props {
  emoji: string
  size?: number
}

export default function Emoji({
  emoji,
  size = 32,
  ...props
}: React.ComponentPropsWithoutRef<'img'> & Props) {
  const src = useMemo(() => {
    const element = document.createElement('div')
    element.innerHTML = twemoji.parse(emoji, {
      ext: '.svg',
      folder: 'svg',
      base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@v14.0.2/assets/',
    })
    return (element.firstChild as HTMLImageElement).src
  }, [emoji])

  return (
    <img
      src={src}
      className={classes.emoji}
      alt={emoji}
      draggable={false}
      style={{ width: size, height: size }}
      {...props}
    />
  )
}
