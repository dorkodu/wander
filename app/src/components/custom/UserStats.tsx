import { util } from '#/lib/util'
import { IUser } from '@sdk/types/user'
import { Flex, Text } from '@mantine/core'
import { IconFlame, IconRocket, IconStarFilled } from '@tabler/icons-react'

interface Props {
  user: IUser
}

export function Momentum({ user }: Props) {
  return (
    <Flex direction="column" align="center">
      <Flex align="center">
        <IconRocket />
        &nbsp;
        <Text>
          {util.formatPercent(
            user.dailyXpTarget > 0
              ? user.dailyXpCurrent / user.dailyXpTarget
              : 0
          )}
        </Text>
      </Flex>
      <Text size="xs">Momentum</Text>
    </Flex>
  )
}

export function Experience({ user }: Props) {
  return (
    <Flex direction="column" align="center">
      <Flex align="center">
        <IconStarFilled />
        &nbsp;
        <Text title={util.formatNumber(user.totalXp, true)}>
          {util.formatNumber(user.totalXp)}
        </Text>
      </Flex>
      <Text size="xs">Experience</Text>
    </Flex>
  )
}

export function Streaks({ user }: Props) {
  const didStreakToday = util.isSameDay(user.lastStreakDate, Date.now())

  return (
    <Flex direction="column" align="center">
      <Flex align="center">
        <IconFlame
          color={didStreakToday ? 'var(--mantine-color-red-filled)' : undefined}
        />
        &nbsp;
        <Text title={util.formatNumber(user.streaks, true)}>
          {util.formatNumber(user.streaks)}
        </Text>
      </Flex>
      <Text size="xs">Streaks</Text>
    </Flex>
  )
}

export * as UserStats from './UserStats'
