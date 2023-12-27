import { Badge, Flex, Paper, Text, Title } from '@mantine/core'
import Emoji from './Emoji'

interface Props {}

function Community({}: Props) {
  return (
    <Paper withBorder p="md">
      <Flex gap="md">
        <Emoji emoji="🛡" size={32} />

        <Flex direction="column">
          <Title order={5}>Gunmen</Title>
          <Text>
            ▄︻デ══━一
            <Emoji emoji="💥" />
          </Text>
          <Flex mt="xs" gap="xs">
            <Badge>20 Members</Badge>
          </Flex>
        </Flex>
      </Flex>
    </Paper>
  )
}

export default Community
