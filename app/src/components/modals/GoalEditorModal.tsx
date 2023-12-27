import { useApiStore } from '#/stores/apiStore'
import { useAppStore } from '#/stores/appStore'
import { IGoal } from '@sdk/types/goal'
import { Button, Flex, Modal, TextInput, Textarea } from '@mantine/core'

function GoalEditorModal() {
  const goalEditor = useAppStore(state => state.modals.goalEditor)
  const close = () => {
    useAppStore.setState(s => {
      s.modals.goalEditor.opened = false

      // If created/edited a goal, perform cleanup
      if (s.modals.goalEditor.id) {
        s.modals.goalEditor = {
          opened: false,
          id: undefined,
          title: '',
          description: '',
        }
      }
    })
  }

  const setTitle = (text: string) => {
    useAppStore.setState(s => {
      s.modals.goalEditor.title = text
    })
  }
  const setDescription = (text: string) => {
    useAppStore.setState(s => {
      s.modals.goalEditor.description = text
    })
  }

  const onCreate = () => {
    const currentUserId = useApiStore.getState().userId
    if (!currentUserId) return

    const goal: IGoal = {
      id: Date.now().toString(),
      userId: currentUserId,
      title: goalEditor.title,
      description: goalEditor.description,
      tasksTodo: 0,
      tasksDone: 0,
    }

    useApiStore.getState().addGoal(goal)
    useAppStore.setState(s => {
      s.modals.goalEditor.id = goal.id
    })
    close()
  }

  const onEdit = () => {
    const currentUserId = useApiStore.getState().userId
    if (!currentUserId) return

    useApiStore.setState(s => {
      if (!goalEditor.id) return
      const goal = s.goals[goalEditor.id]
      if (!goal) return

      goal.title = goalEditor.title
      goal.description = goalEditor.description
    })

    close()
  }

  return (
    <Modal
      opened={goalEditor.opened}
      onClose={close}
      lockScroll={false}
      centered
      size={360}
      title="Goal editor"
    >
      <Flex direction="column" gap="md">
        <TextInput
          label="Title"
          placeholder="Title..."
          value={goalEditor.title}
          onChange={ev => setTitle(ev.currentTarget.value)}
        />

        <Textarea
          label="Description"
          placeholder="Description..."
          value={goalEditor.description}
          onChange={ev => setDescription(ev.currentTarget.value)}
          autosize
        />

        <Button onClick={!goalEditor.id ? onCreate : onEdit}>
          {!goalEditor.id ? 'Create' : 'Edit'}
        </Button>
      </Flex>
    </Modal>
  )
}

export default GoalEditorModal
