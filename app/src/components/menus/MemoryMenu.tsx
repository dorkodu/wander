import { useApiStore } from '#/stores/apiStore'
import { useAppStore } from '#/stores/appStore'
import { IMemory } from '@sdk/types/memory'
import { ActionIcon, Menu } from '@mantine/core'
import {
  IconClipboardText,
  IconDots,
  IconEdit,
  IconExclamationCircle,
  IconShare,
  IconTrash,
} from '@tabler/icons-react'
import { MouseEvent } from 'react'

interface Props {
  memory: IMemory
}

function MemoryMenu({ memory }: Props) {
  const currentUserId = useApiStore(state => state.userId)

  const onShare = (ev: MouseEvent) => {
    ev.stopPropagation()
  }
  const onClipboard = (ev: MouseEvent) => {
    ev.stopPropagation()
  }
  const onEdit = (ev: MouseEvent) => {
    ev.stopPropagation()
    useAppStore.setState(s => {
      s.modals.memoryEditor = {
        opened: true,
        id: memory.id,
        description: memory.description,
      }
    })
  }
  const onReport = (ev: MouseEvent) => {
    ev.stopPropagation()
  }
  const onDelete = (ev: MouseEvent) => {
    ev.stopPropagation()
    useApiStore.getState().removeMemory(memory)
  }

  return (
    <Menu position="bottom-end">
      <Menu.Target>
        <ActionIcon
          variant="subtle"
          c="var(--text-color)"
          radius="xl"
          onClick={ev => ev.stopPropagation()}
        >
          <IconDots />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={onShare} leftSection={<IconShare />}>
          Share
        </Menu.Item>

        <Menu.Item onClick={onClipboard} leftSection={<IconClipboardText />}>
          Copy To Clipboard
        </Menu.Item>

        {currentUserId && (
          <>
            <Menu.Divider />

            {currentUserId === memory.userId ? (
              <>
                <Menu.Item onClick={onEdit} leftSection={<IconEdit />}>
                  Edit memory
                </Menu.Item>
                <Menu.Item
                  onClick={onDelete}
                  leftSection={<IconTrash />}
                  c="red"
                >
                  Delete memory
                </Menu.Item>
              </>
            ) : (
              <Menu.Item
                onClick={onReport}
                color="red"
                leftSection={<IconExclamationCircle />}
              >
                Report memory
              </Menu.Item>
            )}
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  )
}

export default MemoryMenu
