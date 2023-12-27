import { glassBackground } from '#/styles/shared.css'
import { Paper } from '@mantine/core'
import { PropsWithChildren } from 'react'

export default function GlassCard(x: PropsWithChildren) {
  return (
    <Paper
      shadow="lg"
      py="xs"
      px="md"
      radius="lg"
      className={glassBackground}
      {...x}
    />
  )
}
