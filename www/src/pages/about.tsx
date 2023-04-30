import { NextPage } from "next";
import Head from "next/head";

import {
  Text,
  Title,
  Stack,
  SimpleGrid,
  Image,
  List,
  Container,
  Divider,
  Group,
  Box,
  createStyles,
  Highlight,
} from "@mantine/core";
import { Button, rem } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

import WebsiteLayout from "@/layouts/WebsiteLayout";
import Meta from "@/components/Meta";

import { TeamMember, TheRingMember } from "@/components/Member";
import { people, story } from "@/data/company";

import { ArrowRight, Emoji, GreenBook, GrowingHeart, MoneyWithWings, MountainSnowy, People } from "@/styles/emoji";
import { SectionTitle, Showcase, StarDivider, StoryCard } from "@/components/Commons";
import Link from "next/link";

const meta = {
  title: "About — Dorkodu",
  description: `Your Dream Fulfillment Technology Company.`,
  keywords: `about dorkodu, about dorkodu.com, dream fulfillment company, technology, the dorkodu company, dream technology`,
  url: "/about",
};

const About: NextPage = () => {
  return (
    <WebsiteLayout>
      <Head>
        <Meta {...meta} />
      </Head>

      <Hero />
      <OurTeam />
      <StarDivider />
      <Investors />
      <Story />
      <Jobs />
      <Press />
    </WebsiteLayout>
  );
};

export default About;

const Hero = () => {
  const { classes: $, theme } = styles.Hero();

  return (
    <Container mb={50} p={0}>
      <div className={$.inner}>
        <div className={$.content}>
          <Title order={1} size="h2" color="dimmed" className={$.title}>
            About Dorkodu
          </Title>
          <Title order={2} size="h1" weight={800} className={$.headline}>
            <Text variant="gradient" gradient={{ from: "#00cc40", to: "lime", deg: 180 }} span>
              Life Fulfillment
            </Text>
            <Text mt={-8}>Technology Company</Text>
            <Text mt={-8}>for the Humankind.</Text>
          </Title>
          <Text my={8} size={18} maw={425}>
            We combine gamification, human-centric design with our superior technology to create products that help
            people&nbsp;
            <Text span weight={500}>
              fulfill their lifes
            </Text>
            .
          </Text>

          <List
            mt={20}
            spacing={8}
            icon={
              <Text size={28} color="green">
                ⁕
              </Text>
            }
            sx={{
              display: "none",
            }}
          >
            <List.Item>
              <Text weight={600}>Free & Open Source.</Text>
              <Text color="dimmed">All packages have MIT license.</Text>
            </List.Item>
            <List.Item>
              <Text weight={600}>Free & Open Source.</Text>
              <Text color="dimmed">All packages have MIT license.</Text>
            </List.Item>
            <List.Item>
              <Text weight={600}>Free & Open Source.</Text>
              <Text color="dimmed">All packages have MIT license.</Text>
            </List.Item>
          </List>
        </div>
        <Image src="/images/undraw/dawn.svg" className={$.image} />
      </div>
    </Container>
  );
};

const OurTeam = () => {
  return (
    <Container id="people" py={25} px={0}>
      <SectionTitle title="Our People" text="Here's to the crazy ones." icon={People} />

      <Stack spacing={30} mt={40}>
        {people.theRing.map((member) => (
          <TheRingMember member={member} key={member.name} />
        ))}
      </Stack>

      <Divider my={40} />

      <SimpleGrid cols={2} spacing={25} breakpoints={[{ maxWidth: 600, cols: 1, spacing: 40 }]}>
        {people.members.map((member) => (
          <TeamMember member={member} key={member.name} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

const Jobs = () => {
  return (
    <Container my={50}>
      <Stack spacing={0} maw={480}>
        <Title order={2} sx={{ letterSpacing: -0.5, lineHeight: 1.1 }}>
          <Text sx={{ lineHeight: 1 }} weight={800} span>
            Join us;
          </Text>
          &nbsp;
          <Text sx={{ lineHeight: 1 }} weight={500} color="dimmed" span>
            and help bring the <b>human spirit</b> back into <b>technology</b>.
          </Text>
        </Title>

        <Text my={8} size={18}>
          If you believe in our mission of liberating the humankind with meaningful technology, we’d love to talk to
          you.
        </Text>
        <div>
          <Link href="/jobs">
            <Button rightIcon={<IconArrowRight />} size="lg" radius={22} mt={10}>
              Explore Open Roles
            </Button>
          </Link>
        </div>
      </Stack>
    </Container>
  );
};

const Investors = () => {
  return (
    <Box pb={80}>
      <Showcase
        content={[
          <Box>
            <SectionTitle
              icon={MoneyWithWings}
              text="Sorry, we're not backed by your popular capital fund. And we have no eyes on an exit."
              title="Investors?"
            />
          </Box>,
          <>
            <Text mb={10} weight={600}>
              We are proudly an <i>indie</i> tech company.
            </Text>
            <List icon={<Emoji size={24} emoji={ArrowRight} />} center spacing={4}>
              <List.Item>
                <Text>To do things no one would give us permission to do.</Text>
              </List.Item>
              <List.Item>
                <Text>To create products that are not just "fast horses".</Text>
              </List.Item>
              <List.Item>
                <Text>To fix problems Wall Street doesn't care about.</Text>
              </List.Item>
              <List.Item>
                <Text>To skip safe, and go for original.</Text>
              </List.Item>
            </List>
          </>,
        ]}
      />
    </Box>
  );
};

const Press = () => {
  return <></>;
};

const Story = () => {
  return (
    <>
      <SectionTitle title="Our Story" text="A timeline of pursuing meaning in technology." icon={GreenBook} />
      <Container my={50} px={0}>
        <SimpleGrid cols={2} spacing="lg" breakpoints={[{ maxWidth: "36rem", cols: 1, spacing: "sm" }]}>
          {story.map((item, index) => (
            <StoryCard icon={item.icon} text={item.text} key={index} order={index + 1} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

const styles = {
  Hero: createStyles((theme) => ({
    title: {
      color: theme.colorScheme == "dark" ? theme.colors.gray[6] : theme.colors.gray[5],
      fontSize: rem(28),
      lineHeight: 1.2,
      fontWeight: 700,
      letterSpacing: -0.75,

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
      maxWidth: 400,
    },
  })),
};
