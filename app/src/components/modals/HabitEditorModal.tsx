import { useApiStore } from '#/stores/apiStore'
import { useAppStore } from '#/stores/appStore'
import { IHabit } from '@sdk/types/habit'
import {
  Button,
  Flex,
  Modal,
  NumberInput,
  NumberInputHandlers,
  TextInput,
  Textarea,
} from '@mantine/core'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { MouseEvent, useRef } from 'react'

function HabitEditorModal() {
  const habitEditor = useAppStore(state => state.modals.habitEditor)
  const close = () => {
    useAppStore.setState(s => {
      s.modals.habitEditor.opened = false

      // If created/edited a habit, perform cleanup
      if (s.modals.habitEditor.id) {
        s.modals.habitEditor = {
          opened: false,
          id: undefined,
          title: '',
          description: '',
          dailyTarget: 0,
        }
      }
    })
  }

  const setTitle = (text: string) => {
    useAppStore.setState(s => {
      s.modals.habitEditor.title = text
    })
  }
  const setDescription = (text: string) => {
    useAppStore.setState(s => {
      s.modals.habitEditor.description = text
    })
  }
  const setDailyTarget = (target: number) => {
    useAppStore.setState(s => {
      s.modals.habitEditor.dailyTarget = target
    })
  }

  const dailyTargetRef = useRef<NumberInputHandlers>(null)

  const onCreate = () => {
    const currentUserId = useApiStore.getState().userId
    if (!currentUserId) return

    const habit: IHabit = {
      id: Date.now().toString(),
      userId: currentUserId,
      date: Date.now(),
      title: habitEditor.title,
      description: habitEditor.description,
      count: 0,
      dailyTarget: habitEditor.dailyTarget,
      heatmap: {},
    }

    useApiStore.getState().addHabit(habit)
    useAppStore.setState(s => {
      s.modals.habitEditor.id = habit.id
    })
    close()
  }

  const onEdit = () => {
    const currentUserId = useApiStore.getState().userId
    if (!currentUserId) return

    if (habitEditor.id) {
      useApiStore
        .getState()
        .updateHabit(
          habitEditor.id,
          habitEditor.title,
          habitEditor.description,
          habitEditor.dailyTarget
        )
    }

    close()
  }

  return (
    <Modal
      opened={habitEditor.opened}
      onClose={close}
      lockScroll={false}
      centered
      size={360}
      title="Habit editor"
    >
      <Flex direction="column" gap="md">
        <TextInput
          label="Title"
          placeholder="Title..."
          value={habitEditor.title}
          onChange={ev => setTitle(ev.currentTarget.value)}
        />

        <Textarea
          label="Description"
          placeholder="Description..."
          value={habitEditor.description}
          onChange={ev => setDescription(ev.currentTarget.value)}
          autosize
        />

        <Flex gap="md" align="end">
          <Button
            variant="default"
            onClick={() => dailyTargetRef.current?.decrement()}
            onMouseDown={(ev: MouseEvent) => ev.preventDefault()}
          >
            <IconChevronLeft />
          </Button>

          <NumberInput
            label="Daily Target"
            value={habitEditor.dailyTarget}
            onChange={value => setDailyTarget(Number(value))}
            hideControls
            min={0}
            max={99}
            handlersRef={dailyTargetRef}
          />

          <Button
            variant="default"
            onClick={() => dailyTargetRef.current?.increment()}
            onMouseDown={(ev: MouseEvent) => ev.preventDefault()}
          >
            <IconChevronRight />
          </Button>
        </Flex>

        <Button onClick={!habitEditor.id ? onCreate : onEdit}>
          {!habitEditor.id ? 'Create' : 'Edit'}
        </Button>
      </Flex>
    </Modal>
  )
}

export default HabitEditorModal
