import { Showcase } from "#/components/Showcase";
import { Box, Image, SimpleGrid, Text, Title } from "@mantine/core";

export { Page, meta as documentProps };

const meta = {
  title: "Wander",
  description: "The Decentralized Social Knowledge Protocol & SDK",
};

function Page() {
  return (
    <>
      <Hero />
      <Pitch />
      <Features />
      <Principles />
    </>
  );
}

let Hero = () => {
  return (
    <Showcase
      content={[
        <div>
          <Title order={1} fz="2.5vw" fw={800} lts={-1}>
            Wander
          </Title>
          <Title order={2} lh={1.1}>
            The Decentralized Social Knowledge Protocol & SDK
          </Title>
          <Text my={10}>
            Welcome to the new internet of digital minds. Owned by you.
          </Text>
        </div>,
        <Image src="/SanFrantokyo.jpeg" />,
      ]}
    />
  );
};

let Pitch = () => {
  return (
    <Box my={20} maw={800} mx={"auto"}>
      <Title order={2}>The Pitch</Title>
      <Title order={3}>
        The User-Owned Web Is Here. Welcome To The Age Of Decentralization.
      </Title>
      <Text my={4}>
        Welcome to the new internet of digital minds. Owned by you.
      </Text>
    </Box>
  );
};

let Features = () => {
  return (
    <Box my={20}>
      <Title order={2}>Features</Title>
      <Title order={3}>
        The User-Owned Web Is Here. Welcome To The Age Of Decentralization.
      </Title>
      <Text my={4}>
        Welcome to the new internet of digital minds. Owned by you.
      </Text>
    </Box>
  );
};

let Principles = () => {
  return (
    <Box my={20}>
      <Title order={2}>Values</Title>
      <Title order={3}>
        The User-Owned Web Is Here. Welcome To The Age Of Decentralization.
      </Title>
      <Text my={4}>
        Welcome to the new internet of digital minds. Owned by you.
      </Text>
    </Box>
  );
};
