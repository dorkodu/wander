import { Card, Group, Avatar, Stack, ThemeIcon, Text } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'

export function UserButton({
  user,
  compact = false,
}: {
  user: { name: string; username: string; avatar: string }
  compact?: boolean
}) {
  return (
    <Card
      variant="light"
      color="white"
      p={compact ? 4 : 6}
      withBorder
      mx={4}
      radius="lg"
      display={compact ? 'inline-block' : 'block'}
    >
      <Group justify="space-between" gap={10}>
        <Group gap={compact ? 8 : 12}>
          <Avatar
            src={user.avatar}
            radius={compact ? 12 : 16}
            size={compact ? 36 : 44}
          />
          <Stack gap={0} ta="left" mr={10}>
            <Text fw={700} lh={1.1} size={compact ? 'sm' : 'md'}>
              {user.name}
            </Text>
            <Text fw={500} lh={1.1} c="dimmed" size={compact ? 'sm' : 'md'}>
              {user.username}
            </Text>
          </Stack>
        </Group>
        {!compact && (
          <ThemeIcon variant="transparent" color="dark">
            <IconChevronRight />
          </ThemeIcon>
        )}
      </Group>
    </Card>
  )
}
