import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'

import { useNavigate } from 'react-router-dom'

import Emoji from '#/components/custom/Emoji'
import TextParser from '#/components/util/TextParser'
import { useTrekieStore } from '#/stores/trekieStore'
import { wrapContent } from '#/styles/shared.css'
import HabitCounter from '#/components/custom/HabitCounter'
import NoHabitsCard from '#/components/cards/NoHabitsCard'
import NoGoalsCard from '#/components/cards/NoGoalsCard'
import { IconPin, IconPinned } from '@tabler/icons-react'
import { IconPinnedFilled } from '@tabler/icons-react'
import { IHabit } from '@sdk/types'

function Home() {
  const navigate = useNavigate()

  const userId = useTrekieStore(state => state.userId)
  const users = useTrekieStore(state => state.users)
  const user = userId ? users[userId] : undefined

  return (
    <Stack m="md" gap="xl">
      <Stack gap="xs">
        <Title order={4} className={wrapContent}>
          <Emoji emoji="👋" /> Welcome, Doruk
          <TextParser ids={['emoji']} text={user?.name ?? ''} />
        </Title>

        <Text>
          Hey! Welcome to <b>your social & gamified life companion.</b>
        </Text>

        {Goals}
        {PinnedHabits}
        {Habits}
      </Stack>
    </Stack>
  )
}

export default Home

const Habits = (
  <section>
    <Title order={4}>Habits</Title>
    <Divider mb={8} />
    <UserHabitSummary />
  </section>
)

const PinnedHabits = (
  <section>
    <Divider
      mb={8}
      label={
        <>
          <IconPinned />
          Pinned
        </>
      }
      labelPosition="left"
      styles={{ label: { fontSize: 14, fontWeight: 600 } }}
    />
    <Card>
      <Text>Not any pinned habits.</Text>
    </Card>
  </section>
)

function UserHabitSummary() {
  const hasAnyHabits = true

  if (!hasAnyHabits) return <NoHabitsCard />

  const habits: IHabit[] = [
    {
      id: '',
      title: '',
      userId: '',
      count: 5,
      dailyTarget: 0,
      date: 99999999999,
      description: '',
      heatmap: [0],
    },
  ]

  return (
    <Box>
      <p>Check off your daily habits!</p>

      <Stack>
        <HabitCounter habit={habits[0]} key={'trekie:habit:' + habits[0]?.id} />
      </Stack>
    </Box>
  )
}

function LifeGoalSummary() {
  const hasAnyLifeGoals = false

  if (!hasAnyLifeGoals) return <NoGoalsCard />

  return (
    <Box>
      <Stack>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Stack>
    </Box>
  )
}

const Goals = (
  <section>
    <Title order={4}>Life Goals</Title>
    <Divider mb={8} />
    <LifeGoalSummary />
  </section>
)
