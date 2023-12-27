import {
  Divider,
  Group,
  MantineColor,
  Paper,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core'
import Emoji from '../custom/Emoji'
import { vanilla } from '#/styles/theme'

export function DailyStats({}: {}) {
  return (
    <Paper p={10}>
      <Stack>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xs">
          <MomentumStatus value={60} />
          <StreakStatus days={8} />
          <XPStatus value={32649} />
          <CoinStatus value={600} />
        </SimpleGrid>

        <DailyProgress value={20} />
      </Stack>
    </Paper>
  )
}

export function DailyProgress({ value }: { value: number }) {
  let color: MantineColor
  let message: string

  if (value < 30) {
    message = 'Bad'
    color = 'red'
  } else if (value >= 30 && value < 45) {
    message = ''
    color = 'orange'
  } else if (value >= 45 && value < 60) {
    message = 'OK'
    color = 'yellow'
  } else if (value >= 60 && value < 80) {
    message = 'Good'
    color = 'lime'
  } else if (value >= 80 && value < 95) {
    message = 'Great.'
    color = 'green'
  } else {
    message = 'Perfect :)'
    color = 'green'
  }

  return (
    <Stack gap={2}>
      <Divider label="Your Daily Progress" labelPosition="left" />
      <Progress.Root
        color={color}
        radius="lg"
        size={20}
        styles={{ section: { transition: 'width 100ms linear 0s' } }}
      >
        <Tooltip
          label={`${value}%`}
          arrowOffset={5}
          arrowSize={6}
          arrowRadius={2}
          withArrow
        >
          <Progress.Section color={color} striped value={value} animated>
            <Progress.Label>{message}</Progress.Label>
          </Progress.Section>
        </Tooltip>
      </Progress.Root>
    </Stack>
  )
}

export function SumCard({
  icon,
  kind,
  value,
  color,
  text,
}: {
  icon: React.ReactNode
  kind: string
  value: number
  color: string
  text?: string
}) {
  const { colorScheme } = useMantineColorScheme()

  return (
    <Paper p={8} bg={vanilla.colors[color]?.lightHover}>
      <Group wrap="nowrap" gap={10}>
        {icon}
        <Stack gap={0}>
          <Text
            tt="uppercase"
            c={vanilla.colors[color]?.filled}
            fw={700}
            size="12.5"
            lh={1}
          >
            {kind}
          </Text>
          <Text>
            <Text
              span
              lh={1.25}
              fw={800}
              c={
                colorScheme == 'dark'
                  ? vanilla.colors.white
                  : vanilla.colors.black
              }
            >
              {value}
            </Text>
            {text && (
              <Text span lh={1.25} size="sm" fw={500} c={vanilla.colors.dimmed}>
                {text}
              </Text>
            )}
          </Text>
        </Stack>
      </Group>
    </Paper>
  )
}

export function StreakStatus({ days }: { days: number }) {
  return (
    <SumCard
      icon={<Emoji emoji="🔥" size={24} />}
      kind="STREAK"
      value={days}
      color="orange"
    />
  )
}

export function XPStatus({ value }: { value: number }) {
  return (
    <SumCard
      icon={<Emoji emoji="💎" size={24} />}
      kind="XP"
      value={value}
      color="blue"
    />
  )
}

export function CoinStatus({ value }: { value: number }) {
  return (
    <SumCard
      icon={<Emoji emoji="🪙" size={24} />}
      kind="Coins"
      value={value}
      color="yellow"
    />
  )
}

export function MomentumStatus({ value }: { value: number }) {
  return (
    <SumCard
      icon={<Emoji emoji="🚀" size={24} />}
      kind="MOMENTUM"
      value={value}
      color="green"
      text=" xp/day"
    />
  )
}

export function CoinStats({}: {}) {
  return <Stack></Stack>
}
