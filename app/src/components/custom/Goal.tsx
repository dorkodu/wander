import { Badge, Flex, Paper, Text, Title } from '@mantine/core'
import Emoji from './Emoji'
import { IGoal } from '@sdk/types/goal'
import TextParser from '../util/TextParser'
import { truncate } from '#/styles/shared.css'
import GoalMenu from '../menus/GoalMenu'

interface Props {
  goal: IGoal

  onClick?: () => void
}

function Goal({ goal, onClick }: Props) {
  return (
    <Paper withBorder p="md" onClick={onClick}>
      <Flex gap="md">
        <Emoji emoji="👨‍💻" size={32} />

        <Flex direction="column" style={{ flex: 1 }}>
          <Flex align="center" justify="space-between">
            <Flex style={{ display: 'grid', gridTemplateRows: 'auto' }}>
              <Title order={5} className={truncate}>
                <TextParser ids={['emoji']} text={goal.title} />
              </Title>
            </Flex>
            <GoalMenu goal={goal} />
          </Flex>

          <Flex style={{ display: 'grid', gridTemplateRows: 'auto' }}>
            <Text truncate>
              <TextParser
                ids={['emoji', 'url', 'username']}
                text={goal.description}
              />
            </Text>
          </Flex>

          <Flex mt="xs" gap="xs">
            <Badge>
              {goal.tasksDone} / {goal.tasksTodo} Tasks
            </Badge>
          </Flex>
        </Flex>
      </Flex>
    </Paper>
  )
}

export default Goal
