<<<<<<<< HEAD:web/src/views/app/MyPage.tsx
import ChevronTitle from "#/components/custom/ChevronTitle";
import { UserStats } from "#/components/custom/UserStats";
import ProfileMenu from "#/components/menus/ProfileMenu";
import TextParser from "#/components/util/TextParser";
import { util } from "#/lib/util";
import { useTrekie } from "#/stores/trekieStore";
import { wrapContent } from "#/styles/shared.css";
========
>>>>>>>> remaster:web/src/views/app/Profile.tsx
import {
  Anchor,
  Avatar,
  Badge,
  Button,
  Card,
  Divider,
  Flex,
  Paper,
  Text,
  Title,
  px,
  rem,
  useMantineTheme,
} from '@mantine/core'
import {
  IconCalendarMonth,
  IconDiscountCheckFilled,
  IconExclamationCircle,
} from '@tabler/icons-react'
import { useParams } from 'react-router-dom'

import ChevronTitle from '#/components/custom/ChevronTitle'
import { UserStats } from '#/components/custom/UserStats'
import ProfileMenu from '#/components/menus/ProfileMenu'
import TextParser from '#/components/util/TextParser'
import { util } from '#/lib/util'
import { useTrekieStore } from '#/stores/trekieStore'
import { wrapContent } from '#/styles/shared.css'
import StatusCard from '#/components/cards/StatusCard'
import Goal from '#/components/custom/Goal'
import NoGoalsCard from '#/components/cards/NoGoalsCard'
import NoMemoriesCard from '#/components/cards/NoMemoriesCard'
import Memory from '#/components/custom/Memory'
import Community from '#/components/custom/Community'

function Profile() {
  const theme = useMantineTheme()
  const params = useParams()

<<<<<<<< HEAD:web/src/views/app/MyPage.tsx
  const username = params["username"];
  const userId = useTrekie(
    (state) => username && state.usernameToUserId[username]
  );
  const user = useTrekie((state) => userId && state.users[userId]);

  const currentUserId = useTrekie((state) => state.userId);

  const previewMemories = useTrekie((state) => state.getMemories(userId));
  const previewGoals = useTrekie((state) => state.getGoals(userId));
========
  const username = params['username']
  const userId = useTrekieStore(
    state => username && state.index.usernameToUserId[username]
  )
  const user = useTrekieStore(state => userId && state.users[userId])

  const currentUserId = useTrekieStore(state => state.userId)

  const previewMemories = useTrekieStore(state => state.getMemories(userId))
  const previewGoals = useTrekieStore(state => state.getGoals(userId))
>>>>>>>> remaster:web/src/views/app/Profile.tsx

  if (!user) {
    return (
      <Flex direction="column" m="md">
        <StatusCard
          icon={<IconExclamationCircle />}
          color="red"
          title={`User @${username} not found`}
        >
          Try searching for another user.
        </StatusCard>
      </Flex>
    )
  }

  return (
    <Flex direction="column" m="md">
      <Card withBorder padding="md">
        <Card.Section
          h={200}
          style={{
            backgroundImage: '',
            backgroundColor: 'var(--mantine-color-body)',
          }}
        />

        <Flex direction="column" gap="md">
          <Avatar
            src="/assets/avatar.webp"
            radius={80}
            size={80}
            mt={-40 + (px(theme.spacing.xs) as number)}
            style={{
              border: `${rem(2)} solid var(--mantine-color-body)`,
              backgroundColor: 'var(--mantine-color-body)',
            }}
            pos="absolute"
          />

          <Flex align="center" justify="end" gap="xs" mt="xs">
            <ProfileMenu user={user} />
            {currentUserId !== user.id && (
              <Button
<<<<<<<< HEAD:web/src/views/app/MyPage.tsx
                onClick={() => useTrekie.getState().followUser(user)}
                variant={!user.following ? "filled" : "default"}
                radius="xl">
                {!user.following ? "Follow" : "Unfollow"}
========
                onClick={() => useTrekieStore.getState().followUser(user)}
                variant={!user.following ? 'filled' : 'default'}
                radius="xl"
              >
                {!user.following ? 'Follow' : 'Unfollow'}
>>>>>>>> remaster:web/src/views/app/Profile.tsx
              </Button>
            )}
          </Flex>

          <Flex direction="column" gap="xs">
            <Flex direction="column">
              <Flex align="start">
                <Title order={5} className={wrapContent}>
                  <Flex
                    align="center"
                    display="inline-flex"
                    style={{ float: 'right' }}
                  >
                    {user.premium && (
                      <>
                        &nbsp;
                        <IconDiscountCheckFilled style={{ flexShrink: 0 }} />
                      </>
                    )}
                    {user.follower && (
                      <>
                        &nbsp;
                        <Badge size="xs" style={{ flexShrink: 0 }}>
                          Follows you
                        </Badge>
                      </>
                    )}
                  </Flex>
                  <TextParser ids={['emoji']} text={user.name} />
                </Title>
              </Flex>
              <Text className={wrapContent}>@{user.username}</Text>
            </Flex>

            {user.bio && (
              <Text className={wrapContent}>
                <TextParser
                  ids={['emoji', 'url', 'username']}
                  text={user.bio}
                />
              </Text>
            )}

            <Flex gap="xs">
              <Anchor
                title={`${util.formatNumber(
                  user.followerCount,
                  true
                )} Followers`}
              >
                {util.formatNumber(user.followerCount)} Followers
              </Anchor>
              <Anchor
                title={`${util.formatNumber(
                  user.followingCount,
                  true
                )} Following`}
              >
                {util.formatNumber(user.followingCount)} Following
              </Anchor>
            </Flex>

            <Flex gap="xs">
              <IconCalendarMonth />
              <Text>Joined {util.formatDate(user.joinDate)}</Text>
            </Flex>

            <Paper withBorder p="md">
              <Flex justify="space-evenly">
                <UserStats.Momentum user={user} />
                <Divider orientation="vertical" />
                <UserStats.Experience user={user} />
                <Divider orientation="vertical" />
                <UserStats.Streaks user={user} />
              </Flex>
            </Paper>
          </Flex>

          <Flex direction="column" gap="xs">
            <ChevronTitle order={5} href={`/goals/${user.username}`}>
              Goals
            </ChevronTitle>

            {previewGoals.length > 0 ? (
              <Goal goal={previewGoals[0]!} />
            ) : (
              <NoGoalsCard />
            )}
          </Flex>

          <Flex direction="column" gap="xs">
            <ChevronTitle order={5} href={`/memories/${user.username}`}>
              Memories
            </ChevronTitle>

            {previewMemories.length > 0 ? (
              <Memory memory={previewMemories[0]!} />
            ) : (
              <NoMemoriesCard />
            )}
          </Flex>

          <Flex direction="column" gap="xs">
            <ChevronTitle order={5} href={`/communities/${user.username}`}>
              Communities
            </ChevronTitle>

            <Community />
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}

export default Profile
