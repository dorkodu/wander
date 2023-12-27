import { useApiStore } from '#/stores/apiStore'
import { useAppStore } from '#/stores/appStore'
import { IUser } from '@sdk/types/user'
import { ActionIcon, Menu } from '@mantine/core'
import {
  IconClipboardText,
  IconDots,
  IconEdit,
  IconExclamationCircle,
  IconShare,
} from '@tabler/icons-react'

interface Props {
  user: IUser
}

function ProfileMenu({ user }: Props) {
  const currentUserId = useApiStore(state => state.userId)

  const onShare = () => {}
  const onClipboard = () => {}
  const onEdit = () => {
    useAppStore.setState(s => {
      s.modals.editProfile.opened = true
    })
  }
  const onReport = () => {}

  return (
    <Menu position="bottom-end">
      <Menu.Target>
        <ActionIcon radius="xl" size={32}>
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

            {currentUserId === user.id ? (
              <Menu.Item onClick={onEdit} leftSection={<IconEdit />}>
                Edit Profile
              </Menu.Item>
            ) : (
              <Menu.Item
                onClick={onReport}
                color="red"
                leftSection={<IconExclamationCircle />}
              >
                Report User
              </Menu.Item>
            )}
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu
