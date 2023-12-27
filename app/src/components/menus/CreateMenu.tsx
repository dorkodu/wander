import { useAppStore } from '#/stores/appStore'
import { ActionIcon, Button, Flex, Menu, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconChecklist,
  IconNotebook,
  IconPencilPlus,
  IconTargetArrow,
} from '@tabler/icons-react'

interface Props {}

function CreateMenu({}: Props) {
  const [opened, { open, close }] = useDisclosure()

  const onHabit = () => {
    useAppStore.setState(s => {
      s.modals.habitEditor.opened = true
    })
    close()
  }
  const onGoal = () => {
    useAppStore.setState(s => {
      s.modals.goalEditor.opened = true
    })
    close()
  }
  const onMemory = () => {
    useAppStore.setState(s => {
      s.modals.memoryEditor.opened = true
    })
    close()
  }

  return (
    <Menu position="top-end" opened={opened} onOpen={open} onClose={close}>
      <Menu.Target>
        <ActionIcon radius="xl" size={48}>
          <IconPencilPlus />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Flex direction="column" gap={4}>
          <Button
            variant="default"
            onClick={onHabit}
            h="auto"
            py="md"
            styles={{ label: { flex: 1 } }}
          >
            <Flex align="center" gap="md">
              <IconChecklist width={32} height={32} />
              <Title order={5}>Create a habit</Title>
            </Flex>
          </Button>
          <Button
            variant="default"
            onClick={onGoal}
            h="auto"
            py="md"
            styles={{ label: { flex: 1 } }}
          >
            <Flex align="center" gap="md">
              <IconTargetArrow width={32} height={32} />
              <Title order={5}>Create a goal</Title>
            </Flex>
          </Button>
          <Button
            variant="default"
            onClick={onMemory}
            h="auto"
            py="md"
            styles={{ label: { flex: 1 } }}
          >
            <Flex align="center" gap="md">
              <IconNotebook width={32} height={32} />
              <Title order={5}>Create a memory</Title>
            </Flex>
          </Button>
        </Flex>
      </Menu.Dropdown>
    </Menu>
  )
}

export default CreateMenu
