import { Container, Text, Title } from "@mantine/core";

export { Page, meta as documentProps };

const meta = {
  title: "Wander",
  description: "Social &",
};

function Page() {
  return (
    <Container>
      <Image></Image>
      <Title>Wander</Title>
      <Text>Social & Decentralized Knowledge of the Humankind.</Text>
    </Container>
  );
}
