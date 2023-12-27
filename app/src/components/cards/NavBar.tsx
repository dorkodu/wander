import {
  Text,
  Paper,
  Button,
  Stack,
  UnstyledButton,
  Group,
  ThemeIcon,
  Box,
  Divider,
} from '@mantine/core'
import { IconHome, IconNotes, IconPlus, IconCompass } from '@tabler/icons-react'

import { useNavigate } from 'react-router-dom'

import styles from '#/styles/components/NavBar.css'

export function NavBar() {
  const navigation = [
    { icon: <IconHome />, text: 'Home', path: '/home' },
    { icon: <IconCompass />, text: 'Explore', path: '/explore' },
    { icon: <IconNotes />, text: 'Notes', path: '/notes' },
  ].map($ => (
    <PageLink icon={$.icon} key={$.text} path={$.path}>
      {$.text}
    </PageLink>
  ))

  return (
    <Paper className={styles.Paper}>
      <Stack gap={2} maw={180}>
        {navigation}
      </Stack>

      <Button my={10} size="md" w="100%" leftSection={<IconPlus />} radius="lg">
        New Note
      </Button>
    </Paper>
  )
}

const PageLink = ({
  icon = <></>,
  path,
  children,
}: {
  icon?: JSX.Element
  path: string
  children: React.ReactNode
}) => {
  const navigate = useNavigate()

  return (
    <div>
      <UnstyledButton
        onClick={() => navigate(path)}
        className={styles.PageLink}
      >
        <Group gap={12} align="center">
          <ThemeIcon variant="light" size={36} radius={12}>
            {icon}
          </ThemeIcon>
          <Text fz={16} fw={500}>
            {children}
          </Text>
          <Box w={16} h={10} p={0}></Box>
        </Group>
      </UnstyledButton>
    </div>
  )
}
