import {
  Button,
  ButtonProps,
  Card,
  Divider,
  Flex,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import {
  IconDotsCircleHorizontal,
  IconLogout,
  IconShield,
  IconTrash,
  IconUser,
} from '@tabler/icons-react'
import { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import WIPCard from '#/components/cards/WIPCard'
import { useTrekieStore } from '#/stores/trekieStore'
import { truncate, wrapContent } from '#/styles/shared.css'

function Settings() {
  return (
    <Card withBorder m="md">
      <Flex direction="column" gap="md">
        <Routes>
          <Route index element={<Index />} />
          <Route path="account" element={<AccountInformation />} />
          <Route path="security" element={<SecurityAndAccess />} />
          <Route path="other" element={<OtherResources />} />

          <Route path="account/username" element={<Username />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/settings" />} />
        </Routes>
      </Flex>
    </Card>
  )
}

export default Settings

function Index() {
  const navigate = useNavigate()

  const items: SettingButtonProps[] = [
    {
      icon: <IconUser />,
      title: 'Account Information',
      description: 'View your account information.',
      onClick: () => navigate('account'),
    },
    {
      icon: <IconShield />,
      title: 'Security & Access',
      description:
        'Manage the security of your account and control who accesses it.',
      onClick: () => navigate('security'),
    },
    {
      icon: <IconDotsCircleHorizontal />,
      title: 'Other Resources',
      description:
        'Check out other resources for additional information about the product and our services.',
      onClick: () => navigate('other'),
    },
  ]

  return (
    <>
      {items.map(item => (
        <SettingButton key={item.title} {...item} />
      ))}
    </>
  )
}

function AccountInformation() {
  const navigate = useNavigate()

  const user = useTrekieStore(state =>
    state.userId ? state.users[state.userId] : undefined
  )

  const onLogout = () => {
    useTrekieStore.getState().logout()
  }

  const onDelete = () => {
    useTrekieStore.getState().reset()
    navigate('/join')
  }

  return (
    <>
      <SettingButton
        title="Username"
        description={`@${user?.username}`}
        onClick={() => navigate('username')}
      />

      <SettingButton
        icon={<IconLogout />}
        onClick={onLogout}
        title="Log Out"
        variant="default"
        py="xs"
      />

      <Divider label="Danger Zone" color="red" />

      <SettingButton
        icon={<IconTrash />}
        onClick={onDelete}
        title="Delete Data"
        color="red"
        py="xs"
      />
    </>
  )
}

function SecurityAndAccess() {
  return <WIPCard />
}

function OtherResources() {
  return <WIPCard />
}

function Username() {
  const navigate = useNavigate()

  const user = useTrekieStore(state =>
    state.userId ? state.users[state.userId] : undefined
  )

  const [username, setUsername] = useState(user?.username ?? '')

  const confirm = () => {
    if (!user) return
    useTrekieStore.getState().updateUser(user.id, username)
    navigate(-1)
  }

  return (
    <>
      <TextInput
        label="Username"
        value={username}
        onChange={ev => setUsername(ev.currentTarget.value)}
      />

      <Flex>
        <Button onClick={confirm}>Confirm</Button>
      </Flex>
    </>
  )
}

interface SettingButtonProps {
  icon?: React.ReactNode
  onClick?: () => void
  title: string
  description?: string
}

function SettingButton({
  icon,
  onClick,
  title,
  description,
  ...props
}: SettingButtonProps & ButtonProps) {
  return (
    <Button
      variant="light"
      py="md"
      h="auto"
      onClick={onClick}
      styles={{ label: { flex: 1 } }}
      {...props}
    >
      <Flex gap="md">
        {icon && <Flex style={{ flexShrink: 0 }}>{icon}</Flex>}

        <Flex direction="column">
          <Flex style={{ display: 'grid', gridTemplateColumns: 'auto' }}>
            <Title ta="start" order={5} className={truncate}>
              {title}
            </Title>
          </Flex>
          <Text ta="start" size="sm" className={wrapContent}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Button>
  )
}
