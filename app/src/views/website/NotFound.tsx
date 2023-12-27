import { Anchor, Button, Flex, Text, Title } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { description, label, title } from '../../styles/views/NotFound.css'

function NotFound() {
  const navigate = useNavigate()

  const onGoBack = (ev: React.MouseEvent) => {
    ev.preventDefault()
    navigate('/home')
  }

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="xl"
      pos="fixed"
      top={0}
      bottom={0}
      left={0}
      right={0}
    >
      <Flex direction="column" align="center">
        <Title className={label}>404</Title>
        <Title className={title}>{`Something's gone wrong.`}</Title>
      </Flex>

      <Text size="xl" className={description}>
        The page you are looking for was moved, removed, renamed or may have
        never existed.
      </Text>

      <Anchor href="/" onClick={onGoBack}>
        <Button size="lg" radius="lg" rightSection={<IconArrowRight />}>
          Go Back Home
        </Button>
      </Anchor>
    </Flex>
  )
}

export default NotFound
