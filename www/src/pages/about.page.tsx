import { Container, Text, Title } from "@mantine/core";

export { Page, meta as documentProps };

const meta = {
  title: "About",
  description: "This is the page description.",
};

function Page() {
  return (
    <Container>
      <Title>About</Title>
      <Text>This is about.</Text>
    </Container>
  );
}
