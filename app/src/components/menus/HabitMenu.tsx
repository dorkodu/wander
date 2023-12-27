import { useTrekieStore } from '#/stores/trekieStore'
import { useAppStore } from '#/stores/appStore'
import { IHabit } from '@sdk/types/habit'
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
  habit: IHabit
}

function HabitMenu({ habit }: Props) {
  const currentUserId = useTrekieStore(state => state.userId)

  const onShare = (ev: MouseEvent) => {
    ev.stopPropagation()
  }
  const onClipboard = (ev: MouseEvent) => {
    ev.stopPropagation()
  }
  const onEdit = (ev: MouseEvent) => {
    ev.stopPropagation()
    useAppStore.setState(s => {
      s.modals.habitEditor.opened = true
      s.modals.habitEditor.id = habit.id
      s.modals.habitEditor.title = habit.title
      s.modals.habitEditor.description = habit.description
      s.modals.habitEditor.dailyTarget = habit.dailyTarget
    })
  }
  const onReport = (ev: MouseEvent) => {
    ev.stopPropagation()
  }
  const onDelete = (ev: MouseEvent) => {
    ev.stopPropagation()
    useTrekieStore.getState().removeHabit(habit)
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

            {currentUserId === habit.userId ? (
              <>
                <Menu.Item onClick={onEdit} leftSection={<IconEdit />}>
                  Edit habit
                </Menu.Item>
                <Menu.Item
                  onClick={onDelete}
                  leftSection={<IconTrash />}
                  c="red"
                >
                  Delete habit
                </Menu.Item>
              </>
            ) : (
              <Menu.Item
                onClick={onReport}
                color="red"
                leftSection={<IconExclamationCircle />}
              >
                Report habit
              </Menu.Item>
            )}
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  )
}

export default HabitMenu
