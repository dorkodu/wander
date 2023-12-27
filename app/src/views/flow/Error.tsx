import { Container, Text, Title } from '@mantine/core'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <Container>
      <Title>Error</Title>
      <Text>Something went wrong.</Text>
    </Container>
  )
}
