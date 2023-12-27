import { useApiStore } from '#/stores/apiStore'
import { useAppStore } from '#/stores/appStore'
import { IGoal } from '@sdk/types/goal'
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
  goal: IGoal
}

function GoalMenu({ goal }: Props) {
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
      s.modals.goalEditor.opened = true
      s.modals.goalEditor.id = goal.id
      s.modals.goalEditor.title = goal.title
      s.modals.goalEditor.description = goal.description
    })
  }
  const onReport = (ev: MouseEvent) => {
    ev.stopPropagation()
  }
  const onDelete = (ev: MouseEvent) => {
    ev.stopPropagation()
    useApiStore.getState().removeGoal(goal)
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

            {currentUserId === goal.userId ? (
              <>
                <Menu.Item onClick={onEdit} leftSection={<IconEdit />}>
                  Edit goal
                </Menu.Item>
                <Menu.Item
                  onClick={onDelete}
                  leftSection={<IconTrash />}
                  c="red"
                >
                  Delete goal
                </Menu.Item>
              </>
            ) : (
              <Menu.Item
                onClick={onReport}
                color="red"
                leftSection={<IconExclamationCircle />}
              >
                Report goal
              </Menu.Item>
            )}
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  )
}

export default GoalMenu
