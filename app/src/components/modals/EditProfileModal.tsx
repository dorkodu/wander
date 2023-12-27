import { useApiStore } from '#/stores/apiStore'
import { useAppStore } from '#/stores/appStore'
import { Button, Flex, Modal, TextInput, Textarea } from '@mantine/core'
import { useEffect, useState } from 'react'

function EditProfileModal() {
  const editProfile = useAppStore(state => state.modals.editProfile)
  const close = () =>
    useAppStore.setState(s => {
      s.modals.editProfile.opened = false
    })

  const userId = useApiStore(state => state.userId)
  const users = useApiStore(state => state.users)
  const user = userId ? users[userId] : undefined

  const [name, setName] = useState(user?.name ?? '')
  const [bio, setBio] = useState(user?.bio ?? '')

  const confirm = () => {
    useApiStore.setState(s => {
      const currentUser = s.userId && s.users[s.userId]
      if (!currentUser) return
      currentUser.name = name
      currentUser.bio = bio
    })
    close()
  }

  useEffect(() => {
    if (!editProfile.opened) return
    setName(user?.name ?? '')
    setBio(user?.bio ?? '')
  }, [editProfile.opened])

  return (
    <Modal
      opened={editProfile.opened}
      onClose={close}
      lockScroll={false}
      centered
      size={360}
      title="Edit Profile"
    >
      <Flex direction="column" gap="md">
        <TextInput
          label="Name"
          placeholder="Name..."
          value={name}
          onChange={ev => setName(ev.currentTarget.value)}
        />

        <Textarea
          label="Bio"
          placeholder="Bio..."
          value={bio}
          onChange={ev => setBio(ev.currentTarget.value)}
          autosize
          minRows={3}
        />

        <Flex justify="end">
          <Button onClick={confirm}>Confirm</Button>
        </Flex>
      </Flex>
    </Modal>
  )
}

export default EditProfileModal
