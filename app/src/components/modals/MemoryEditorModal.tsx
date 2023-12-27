import { useApiStore } from '#/stores/apiStore'
import { useAppStore } from '#/stores/appStore'
import { IMemory } from '@sdk/types/memory'
import { Button, Flex, Modal, Textarea } from '@mantine/core'

function MemoryEditorModal() {
  const memoryEditor = useAppStore(state => state.modals.memoryEditor)
  const close = () => {
    useAppStore.setState(s => {
      s.modals.memoryEditor.opened = false

      // If created/edited a memory, perform cleanup
      if (s.modals.memoryEditor.id) {
        s.modals.memoryEditor = {
          opened: false,
          id: undefined,
          description: '',
        }
      }
    })
  }

  const setDescription = (text: string) => {
    useAppStore.setState(s => {
      s.modals.memoryEditor.description = text
    })
  }

  const onCreate = () => {
    const currentUserId = useApiStore.getState().userId
    if (!currentUserId) return

    const memory: IMemory = {
      id: Date.now().toString(),
      userId: currentUserId,
      date: Date.now(),
      description: memoryEditor.description,
      favourites: 0,
    }

    useApiStore.getState().addMemory(memory)
    useAppStore.setState(s => {
      s.modals.memoryEditor.id = memory.id
    })
    close()
  }

  const onEdit = () => {
    const currentUserId = useApiStore.getState().userId
    if (!currentUserId) return

    useApiStore.setState(s => {
      if (!memoryEditor.id) return
      const memory = s.memories[memoryEditor.id]
      if (!memory) return

      memory.description = memoryEditor.description
    })

    close()
  }

  return (
    <Modal
      opened={memoryEditor.opened}
      onClose={close}
      lockScroll={false}
      centered
      size={360}
      title="Memory editor"
    >
      <Flex direction="column" gap="md">
        <Textarea
          label="Description"
          placeholder="Description..."
          value={memoryEditor.description}
          onChange={ev => setDescription(ev.currentTarget.value)}
          autosize
        />

        <Button onClick={!memoryEditor.id ? onCreate : onEdit}>
          {!memoryEditor.id ? 'Create' : 'Edit'}
        </Button>
      </Flex>
    </Modal>
  )
}

export default MemoryEditorModal
