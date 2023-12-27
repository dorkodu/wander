import {
  ActionIcon,
  Anchor,
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core'
import {
  IconSettings,
  IconLogout,
  IconUserCircle,
  IconHelp,
  IconPigMoney,
  IconCoin,
  IconDiamond,
  IconCoinFilled,
  IconArrowRight,
  IconAlignRight,
  IconChevronRight,
} from '@tabler/icons-react'
import { useMediaQuery } from '@mantine/hooks'
import { Link, useNavigate } from 'react-router-dom'

import { Menu as styles } from '#/styles/Layout.css'
import ColorToggle from '../util/ColorToggle'
import { UserButton } from '../buttons/UserButton'

export function AppMenu() {
  const isWideScreen = useMediaQuery('(min-width: 768px)')
  const navigate = useNavigate()

  return (
    <Stack w={isWideScreen ? 300 : 260} gap={2}>
      <UnstyledButton
        onClick={e => {
          navigate('/me')
        }}
      >
        <UserButton
          user={{
            avatar: '/assets/avatar.webp',
            name: 'Doruk Eray',
            username: '@doruk',
          }}
        />
      </UnstyledButton>

      <div style={{ marginTop: 10 }}></div>

      <MenuItem icon={<IconCoinFilled />}>Premium</MenuItem>
      <MenuItem icon={<IconHelp />}>Help Center</MenuItem>
      <MenuItem icon={<IconSettings />}>Settings</MenuItem>

      <div style={{ marginTop: 10 }}></div>
      <ColorToggle />

      <Divider my={8} />

      {Footer}
    </Stack>
  )
}

const Footer = (
  <>
    <Flex direction="column" align="center">
      <Flex gap="xs">
        {[
          ['About', '/about'],
          ['Terms', '/legal/terms'],
          ['Privacy', '/legal/privacy'],
        ].map(link => (
          <Anchor
            component={Link}
            //@ts-ignore
            to={link[1]}
            key={link[1]}
            c="dimmed"
            fw={400}
            size="sm"
          >
            {link[0]}
          </Anchor>
        ))}
      </Flex>
    </Flex>

    <Group justify="center" gap={20} mt={8}>
      <Anchor href="https://dorkodu.com" target="_blank">
        <Image src="/images/dorkodu_Logo_Colorful.svg" w={120} h="auto" />
      </Anchor>
    </Group>
  </>
)

const MenuLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text fw={500} c="dimmed" size="sm">
    {children}
  </Text>
)

const MenuItem = ({
  icon = <></>,
  right = <></>,
  children,
}: {
  children: React.ReactNode
  icon?: JSX.Element
  right?: React.ReactNode
}) => {
  return (
    <UnstyledButton className={styles.Item}>
      <Group wrap="nowrap" justify="space-between" align="center">
        <Group gap={6}>
          <ThemeIcon variant="default" size={32}>
            {icon}
          </ThemeIcon>
          <Text fz={16} lh={1}>
            {children}
          </Text>
        </Group>
        <Box mx={8}>{right}</Box>
      </Group>
    </UnstyledButton>
  )
}
