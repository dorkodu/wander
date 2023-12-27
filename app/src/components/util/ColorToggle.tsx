import {
  SegmentedControl,
  Center,
  useMantineColorScheme,
  MantineSize,
} from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'

function ColorToggle({ size = 'md' }: { size: MantineSize }) {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  const toggle = (value: string) => {
    if (value !== 'light' && value !== 'dark') return
    setColorScheme(value)
  }

  return (
    <SegmentedControl
      radius="md"
      value={colorScheme}
      size={size}
      onChange={toggle}
      data={[
        {
          value: 'light',
          label: (
            <Center>
              <IconSun size={18} stroke={3} />
            </Center>
          ),
        },
        {
          value: 'dark',
          label: (
            <Center>
              <IconMoon size={18} stroke={3} />
            </Center>
          ),
        },
      ]}
    />
  )
}

export default ColorToggle
