import { useState } from 'react'
import { UnstyledButton, Menu, Image, Group } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import classes from '#/styles/components/LanguagePicker.module.css'

const data = [
  { label: 'English', image: '/assets/locale/en.svg' },
  { label: 'Turkish', image: '/assets/locale/en.svg' },
]

function LanguagePicker() {
  const [opened, setOpened] = useState(false)
  const [selected, setSelected] = useState(data[0])

  const items = data.map(item => (
    <Menu.Item
      leftSection={<Image src={item.image} width={24} height={24} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ))

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={classes.control}
          data-expanded={opened || undefined}
        >
          <Group gap="xs">
            <Image src={selected?.image} width={24} height={24} />
            <span className={classes.label}>{selected?.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  )
}

export default LanguagePicker
