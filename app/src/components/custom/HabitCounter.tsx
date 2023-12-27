import { util } from '#/lib/util'
import { useTrekieStore } from '#/stores/trekieStore'
import { truncate } from '#/styles/shared.css'
import { IHabit } from '@sdk/types/habit'
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Paper,
  ScrollArea,
  Text,
  Title,
} from '@mantine/core'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import TextParser from '../util/TextParser'
import { MouseEvent } from 'react'
import Heatmap from './Heatmap'
import HabitMenu from '../menus/HabitMenu'

interface Props {
  habit: IHabit
  showHeatmap?: boolean

  onClick?: () => void
}

function HabitCounter({ habit, showHeatmap, onClick }: Props) {
  const onChangeCount = (ev: MouseEvent, count: number) => {
    ev.stopPropagation()
    useTrekieStore.getState().countHabit(habit, count)
  }

  const dailyDone = habit.heatmap[util.getDayDiff(habit.date, Date.now())] ?? 0
  const dailyTarget = habit.dailyTarget

  return (
    <Card
      withBorder
      p={0}
      mb="xs"
      style={{ overflow: 'visible' }}
      onClick={onClick}
    >
      <Button.Group mih={80}>
        <Button h="auto" onClick={ev => onChangeCount(ev, -1)}>
          <Box
            style={{
              background: 'rgba(255,255,255,0.25)',
              width: 32,
              height: 32,
            }}
          >
            <IconPlus stroke={2.5} />
          </Box>
        </Button>

        <Flex direction="column" justify="center" p="md" style={{ flex: 1 }}>
          <Flex justify="space-between" align="center">
            <Flex style={{ display: 'grid', gridTemplateRows: 'auto' }}>
              <Title order={5} className={truncate}>
                <TextParser ids={['emoji']} text={habit.title} />
              </Title>
            </Flex>
            <HabitMenu habit={habit} />
          </Flex>
          <Flex style={{ display: 'grid', gridTemplateRows: 'auto' }}>
            <Text truncate>
              <TextParser
                ids={['emoji', 'url', 'username']}
                text={habit.description}
              />
            </Text>
          </Flex>
          <Flex mt="xs" gap="xs">
            <Badge>
              {dailyDone} / {dailyTarget} Daily Target
            </Badge>
          </Flex>
        </Flex>

        <Button h="auto" onClick={ev => onChangeCount(ev, +1)}>
          <IconPlus />
        </Button>
      </Button.Group>

      {showHeatmap && (
        <Flex p="md" style={{ display: 'grid', gridTemplateRows: 'auto' }}>
          <ScrollArea>
            <Heatmap date={habit.date} values={habit.heatmap} />
          </ScrollArea>
        </Flex>
      )}

      <Paper
        withBorder
        px="md"
        pos="absolute"
        bottom="0"
        left="50%"
        style={{ transform: 'translate(-50%,50%)' }}
      >
        <Title order={5} title={util.formatNumber(habit.count, true)}>
          {util.formatNumber(habit.count)}
        </Title>
      </Paper>
    </Card>
  )
}

export default HabitCounter
