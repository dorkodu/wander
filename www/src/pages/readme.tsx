import { Showcase, WIP } from "@/components/Commons";
import Meta from "@/components/Meta";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import { createStyles, Title, Text, Button, Container, Group, rem, Stack, Image, List, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight } from "@tabler/icons-react";
import { NextPage } from "next";
import Head from "next/head";

const meta = {
  title: "README",
  description: `The Dorkodu Manifesto`,
  keywords: `dorkodu readme, dorkodu manifesto`,
  url: "/readme",
};

const Readme: NextPage = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>

      <Hero />
      <WIP />
      {/**
        <Container my={50} mx={0} px={0}>
          <Act1 />
          <Act2 />
          <Act3 />
        </Container>
      */}
    </WebsiteLayout>
  );
};

export default Readme;

const Hero = () => {
  const { classes: $, theme } = styles.Hero();

  return (
    <Showcase
      content={[
        <>
          <Title
            order={1}
            size={48}
            color="dimmed"
            variant="gradient"
            gradient={{ from: "#00cc44", to: "lime", deg: 180 }}
            className={$.title}
          >
            README
          </Title>
          <Title order={2} size="h1" weight={800} className={$.headline}>
            The Dorkodu Manifesto
          </Title>
          <Text my={8} size={18} maw={425}>
            <div>A story of tools for the human mind.</div>
          </Text>
          <Text size={18} maw={425} color="dimmed">
            <div>
              Your very own set of tools to build and explore the new internet. From private notes to decentralized
              communities.
            </div>
          </Text>
        </>,
        <Image src="/images/undraw/terms.svg" className={$.image} />,
      ]}
    />
  );
};

const Jobs = () => {
  const isBigScreen = useMediaQuery("(min-width: 760px)");

  return (
    <Container my={50}>
      <Group noWrap={isBigScreen} spacing={20}>
        <Stack spacing={0} maw={600}>
          <Title order={2}>Work @ Dorkodu</Title>
          <Text color="dimmed" weight={500} size="lg">
            Join the revolution.
          </Text>
          <Text my={8}>
            {`
          We're proud of our mission and the business we've built around it. 
          We work really hard, and most days we love our jobs. 
        `}
          </Text>
          <div>
            <Button variant="gradient" rightIcon={<IconArrowRight />} size="lg" radius={18} mt={10}>
              Explore Open Roles
            </Button>
          </div>
        </Stack>
        <Image src="/images/undraw_pair-programming.svg" alt="" />
      </Group>
    </Container>
  );
};

const Act1 = () => {
  return (
    <StoryAct>
      <Title>Act I.</Title>
      <Text>
        {`
         This is not a manifesto.
         This is not a codex, not a whitepaper, and not a secret master plan.
         That person is you. 
        `}
      </Text>
      <Text>
        {`
          This is just a simple story.
          A story told in three acts.
        `}
      </Text>
      <Text>
        {`
          This is a simple story, but a good story.
          Like all simple stories, it has a beginning, a middle and an end.
          Like all good stories, it's a story about magic.
        `}
      </Text>
      <Text>
        {`
          This is a story waiting to be read.
          Ideally in one sitting and with a hot beverage by your side.
          It is waiting to be read by the one person it was specifically written for.
        `}
      </Text>
    </StoryAct>
  );
};

const Act2 = () => {
  return (
    <Showcase
      content={[
        <StoryAct>
          <Title>Act Title</Title>
          <Text>
            And then, once a connection had been established, you suddenly had access to a completely new world. A world
            of seemingly infinite yet unknown possibilities. A world full of ideas, resources and thoughts from people
            all around the globe. A world waiting for you to be explored.
          </Text>
          <Text>It was mind blowing.A magical moment.</Text>
          <Text>
            Everyone of us has experienced their own transformative moments with computers. The first time you touched a
            touchscreen. The first time you wrote and executed a line of code. The first time you discovered a video
            game that completely consumed you.
          </Text>
          <Text>
            It’s often difficult to describe these moments because, like magic, they lie beyond articulation. They have
            to be experienced.
          </Text>
          <Text>
            Computers are not magic in themselves. It’s the software that runs on them, the interaction between bits and
            atoms, that makes them magical.
          </Text>
          <Text>
            One ingredient of computer magic is software’s ability to create even more magical experiences. It’s a tool
            for tools. Great software supports human intellect. But magical software enhances human creativity.
          </Text>
          <Text>
            The early pioneers of modern computing described computers as “dream machines”. What got them excited about
            computers was not so much what they were, but everything they had the potential to be.
          </Text>
          <Text>
            This is the other facet of software magic: It stretches our imagination beyond what we thought was possible.
            Great software makes us feel like we live in the future. But magical software allows us to imagine the
            future that comes after it.
          </Text>
          <Text>We look back at these magical moments with nostalgia.</Text>
          <Text weight={500}>What happened to them?</Text>
        </StoryAct>,
        <Image src="/image/undraw/" />,
      ]}
    />
  );
};

const Act3 = () => {
  return (
    <StoryAct>
      <Title>Act Title</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos qui magni repellendus voluptas
        voluptatum est? Facilis voluptatem sapiente tempora, odio exercitationem molestias animi distinctio et, placeat
        nostrum veritatis dolore!
      </Text>
    </StoryAct>
  );
};

const AlanKayQuote = () => (
  <Container>
    <Text weight={500} size="xl">
      “The best way to predict the future is to invent it.”
    </Text>
    <Text weight={700} size="lg">
      — Alan Kay
    </Text>
  </Container>
);

const StoryAct = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container size={600} my={40}>
      {children}
    </Container>
  );
};

const styles = {
  Hero: createStyles((theme) => ({
    title: {
      color: theme.colorScheme == "dark" ? theme.colors.gray[6] : theme.colors.gray[5],
      fontSize: rem(40),
      lineHeight: 1,
      fontWeight: 900,
      letterSpacing: -1,

      [theme.fn.smallerThan("xs")]: {
        fontSize: rem(28),
      },
    },

    headline: {
      color: theme.colorScheme == "dark" ? theme.white : theme.black,
      letterSpacing: -0.8,
    },

    description: {},

    inner: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,

      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
        alignItems: "center",
        gap: 40,
      },
    },

    content: {
      maxWidth: rem(600),
      marginRight: `calc(${theme.spacing.xl} * 3)`,

      [theme.fn.smallerThan("md")]: {
        maxWidth: "100%",
        marginRight: 0,
      },
    },

    image: {
      maxWidth: 360,
      marginRight: "auto",
      marginLeft: "auto",
    },
  })),
};
