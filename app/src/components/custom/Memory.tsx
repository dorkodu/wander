import { useApiStore } from '#/stores/apiStore'
import { IMemory } from '@sdk/types/memory'
import {
  ActionIcon,
  Anchor,
  Avatar,
  Card,
  Flex,
  Overlay,
  Text,
} from '@mantine/core'
import { IconStar, IconStarFilled } from '@tabler/icons-react'
import TextParser from '../util/TextParser'
import { wrapContent } from '#/styles/shared.css'
import { util } from '#/lib/util'
import MemoryMenu from '../menus/MemoryMenu'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  memory: IMemory

  onClick?: () => void
}

function Memory({ memory, onClick }: Props) {
  const navigate = useNavigate()

  const user = useApiStore(state => state.users[memory.userId])

  const onProfile = (ev: MouseEvent) => {
    ev.preventDefault()
    ev.stopPropagation()
    navigate(`/profile/${user?.username}`)
  }

  const onFavourite = (ev: MouseEvent) => {
    ev.stopPropagation()
    useApiStore.getState().favouriteMemory(memory)
  }

  return (
    <Card
      withBorder
      w={200}
      h={300}
      style={{
        backgroundImage: '',
        backgroundColor: 'var(--mantine-color-body)',
      }}
      onClick={onClick}
    >
      <Overlay backgroundOpacity={0} m="xs" zIndex={99}>
        <Flex gap="xs" align="center">
          <Avatar src="/assets/avatar.webp" size={32} />

          <Flex direction="column" style={{ flex: 1 }}>
            <Flex justify="space-between" align="center">
              <Flex style={{ display: 'grid', gridTemplateColumns: 'auto' }}>
                <Anchor
                  truncate
                  c="var(--text-color)"
                  onClick={onProfile}
                  href={`/profile/${user?.username}`}
                >
                  <TextParser ids={['emoji']} text={user?.name ?? ''} />
                </Anchor>
              </Flex>
              <MemoryMenu memory={memory} />
            </Flex>
            <Text size="sm" title={util.formatDate(memory.date, true)}>
              {util.relativeDateString(memory.date)}
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column" pos="absolute" bottom={0} w="100%">
          <Text lineClamp={2} className={wrapContent}>
            <TextParser
              ids={['emoji', 'url', 'username']}
              text={memory.description}
            />
          </Text>

          <Flex align="center" gap="xs">
            <ActionIcon
              onClick={onFavourite}
              c={!memory.favourited ? 'var(--text-color)' : 'green'}
              variant="subtle"
            >
              {!memory.favourited ? <IconStar /> : <IconStarFilled />}
            </ActionIcon>
            <Text title={util.formatNumber(memory.favourites, true)}>
              {util.formatNumber(memory.favourites)}
            </Text>
          </Flex>
        </Flex>
      </Overlay>
    </Card>
  )
}

export default Memory
