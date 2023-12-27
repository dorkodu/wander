import GlassCard from '#/components/cards/GlassCard'
import Emoji from '#/components/custom/Emoji'
import Footer from '#/components/custom/Footer'
import ColorToggle from '#/components/util/ColorToggle'
import { vanilla } from '#/styles/theme'

import * as PremiumStyles from '#/styles/views/Premium.css'
import * as WebsiteStyles from '#/styles/website/Website.css'

import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Group,
  Image,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
} from '@mantine/core'
import {
  IconAdFilled,
  IconAdOff,
  IconArrowRight,
  IconAsterisk,
  IconCheck,
  IconCheckbox,
  IconEqualDouble,
  IconMultiplier2x,
  IconUserCircle,
  IconUsersGroup,
} from '@tabler/icons-react'
import { IconAbacus } from '@tabler/icons-react'
import { Link, useNavigate } from 'react-router-dom'

export default function Welcome() {
  return (
    <Stack p={10} mt="4vw">
      <Hero />

      {ItWorks}
      {Features}
      {Join}
      {Premium}
      {Pricing}
      {FAQ}
    </Stack>
  )
}

const Hero = () => {
  const { colorScheme } = useMantineColorScheme()

  return (
    <Paper p={10}>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Stack gap="sm">
          <div>
            <Image src={'/images/trekie_Icon.svg'} w={100} mx="auto" />
          </div>

          <Title className={WebsiteStyles.Hero.Title}>
            Your Social & Gamified <br /> Life Growth Companion
          </Title>

          <Stack w="90%" maw={320} gap={12} mx="auto">
            <Button size="md" fw={700}>
              GET STARTED
            </Button>
            <Button size="md" fw={700} variant="light">
              I ALREADY HAVE ACCOUNT
            </Button>
          </Stack>
        </Stack>

        <BackgroundImage
          src="/images/liam.jpg"
          maw={500}
          mx="auto"
          my="lg"
          p="lg"
          radius="lg"
        >
          <Stack
            gap="sm"
            maw={380}
            style={{ alignSelf: 'center', justifySelf: 'center' }}
            mx="auto"
          >
            {[
              ['🎯', 'Add Life Goals', 'Design your new life.'],
              ['✅', 'Track Habits & To-Dos', 'Never been more enjoyable.'],
              ['🫂', 'Share Memories', 'Connect with close friends.'],
            ].map(x => (
              <GlassCard key={x[0]}>
                <Group wrap="nowrap">
                  {/* @ts-ignore */}
                  <Emoji emoji={x[0]} size={30} />
                  <Stack gap={0} pr={8}>
                    <Text fw={700}>{x[1]}</Text>
                    <Text>{x[2]}</Text>
                  </Stack>
                </Group>
              </GlassCard>
            ))}
          </Stack>
        </BackgroundImage>
      </SimpleGrid>
    </Paper>
  )
}

const ItWorks = (
  <Paper component="section" p="lg" my="xl">
    <SimpleGrid cols={{ base: 1, sm: 2 }} my={50}>
      <Stack gap={0} style={{ alignSelf: 'center' }}>
        <Emoji emoji="🎮" size={40} />
        <Title order={2} fw={800}>
          Gamify your life.
        </Title>
        <Title order={3} fw={600} c="dimmed">
          It works, backed by science.
        </Title>

        <Text my="xs" maw={500} size="lg">
          Trekie is a <b>gamified productivity app</b> that treats your real
          life like a game. With rewards to motivate you and social features to
          share your journey with close friends.
        </Text>
      </Stack>

      <Flex justify="center" style={{ alignSelf: 'center' }}>
        <Image src="/images/oasis.webp" w="auto" h={300} radius="lg" />
      </Flex>
    </SimpleGrid>
  </Paper>
)

const Features = (
  <Paper p="md" my={50}>
    <Title ta="center" order={2} size={32} fw={800}>
      Features
    </Title>
    <Text mx="auto" size="xl" fw={600} ta="center" maw={400} lh={1.25} my={20}>
      Trekie helps you achieve your goals to become happier, healthier and
      wiser.
    </Text>

    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
      {[
        {
          icon: IconAbacus,
          title: 'Lorem ipsum dolor sit amet consectetur.',
          description:
            'Working with Trekie is fun, and it works! With quick, bite-sized actions you can track your habits, earn XP and coins while getting better at real-world.',
        },
        {
          icon: IconAbacus,
          title: 'Lorem ipsum dolor sit amet consectetur.',
          description:
            'We use a combination of science-backed methods and delightful game mechanics to create this effective productivity experience!',
        },
        {
          icon: IconAbacus,
          title: 'Lorem ipsum dolor sit amet consectetur.',
          description:
            'We make it easy to form a habit of language learning with game-like features, fun challenges, and reminders from our friendly mascot, Duo the owl.',
        },
        {
          icon: IconAbacus,
          title: 'Lorem ipsum dolor sit amet consectetur.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aspernatur dolore doloremque itaque enim. Delectus, possimus.',
        },
        {
          icon: IconAbacus,
          title: 'Lorem ipsum dolor sit amet consectetur.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aspernatur dolore doloremque itaque enim. Delectus, possimus.',
        },
        {
          icon: IconAbacus,
          title: 'Lorem ipsum dolor sit amet consectetur.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aspernatur dolore doloremque itaque enim. Delectus, possimus.',
        },
      ].map(Feature => (
        <Card withBorder>
          <Group gap={10} wrap="nowrap" mb={10}>
            <ThemeIcon variant="light" size={40}>
              <Feature.icon size={26} />
            </ThemeIcon>
            <Text fw={700} lh={1.15}>
              {Feature.title}
            </Text>
          </Group>

          <Text size="sm">{Feature.description}</Text>
        </Card>
      ))}
    </SimpleGrid>
  </Paper>
)

const Premium = (
  <>
    <Divider
      label={<Image src="/images/trekie_SUPER_Badge.svg" h={48} w="auto" />}
    />
    <Paper shadow="sm" className={PremiumStyles.Banner.Root}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <Stack gap="xs">
          <Title className={PremiumStyles.Banner.Title} c="white">
            Supercharge Your <br /> Gamified Productivity.
          </Title>
          <Text className={PremiumStyles.Banner.Text}>
            Reaching your life goals never been more fun. <br />
            Your first super-week is on us.
          </Text>
          <Button
            size="lg"
            className={PremiumStyles.Banner.Button}
            rightSection={<IconArrowRight stroke={2.5} />}
          >
            Try For Free
          </Button>
        </Stack>
        <Box style={{ alignSelf: 'center', maxWidth: 380 }}>
          <List spacing="sm">
            {[
              [
                <IconAdOff />,
                'Ad-free',
                'No interruptions, full productivity.',
              ],
              [
                <IconMultiplier2x />,
                'Doubled Gains',
                'More coins, XP and items available.',
              ],
              [
                <IconUsersGroup />,
                'Groups',
                'Share common goals & habits with friends. Say hello to social productivity boost!',
              ],
            ].map(x => (
              <List.Item
                key={x[1]}
                icon={
                  <ThemeIcon variant="light" c="white" size={36}>
                    {x[0]}
                  </ThemeIcon>
                }
              >
                <Text fw={700} c="white" lh={1.1}>
                  {x[1]}
                </Text>
                <Text c="white">{x[2]}</Text>
              </List.Item>
            ))}
          </List>
        </Box>
      </SimpleGrid>
    </Paper>
  </>
)

const Join = (
  <Paper>
    <Title></Title>
  </Paper>
)

const WhyMeWhyNot = (
  <Paper>
    <Title>Why?</Title>
    <Text>
      We need to create the next generation human. <br />
      This is a civilizational moment in human history. <br />
      We will go extinct, or will adapt to our new digital-native reality.
    </Text>
    <Text>
      Your life fulfillment companion. Know who you are and where you want to
      go. We will assist in that way.
    </Text>
    <Text>
      {[
        'original',
        'authentic',
        'self-aware',
        'idealist',
        'high-grit',
        'optimist',
        'emphatetic',
        'belonged',
        'humane',
      ]}
    </Text>
    <Text>
      Connect with your real close friends, people you love, work on yourself
      while seeing yourself get better every day.
    </Text>
    <Text>
      Relax and be your true authentic self. Get to know yourself better, find
      your purpose and passion for life. Set goals, add habits and todos.
    </Text>
    <Text>
      Be motivated, commit to your goals, track your actions and see yourself
      making progress.
    </Text>
    <Text>Be optimist, happy and enjoy a peace of mind.</Text>
  </Paper>
)

const CallToAction = (
  <Paper>
    <Title ta="center">Call to Action</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
      aliquam?
    </Text>
  </Paper>
)

const DorkoduShilling = (
  <Paper className={WebsiteStyles.DorkoduBanner.Root}>
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
      <Stack gap="xs">
        <Title className={WebsiteStyles.DorkoduBanner.Title} c="white">
          We are bringing meaning <br /> back to technology again.
        </Title>
        <Text className={WebsiteStyles.DorkoduBanner.Text}>
          Reaching your life goals never been more fun. <br />
          Your first super-week is on us.
        </Text>
        <Button
          size="lg"
          className={WebsiteStyles.DorkoduBanner.Button}
          rightSection={<IconArrowRight stroke={2.5} />}
        >
          Join
        </Button>
      </Stack>
      <Box style={{ alignSelf: 'center', maxWidth: 380 }}>
        <Image src="https://dorkodu.com/images/dorkodu-ecosystem.svg" />
      </Box>
    </SimpleGrid>
  </Paper>
)

const FAQ = (
  <Paper>
    <Title>FAQs</Title>
    <Text>
      We need to create the next generation human. <br />
      This is a civilizational moment in human history. <br />
      We will go extinct, or will adapt to our new digital-native reality.
    </Text>
  </Paper>
)

const Pricing = (
  <Paper>
    <Title>Pricing</Title>
    <Text>
      We need to create the next generation human. <br />
      This is a civilizational moment in human history. <br />
      We will go extinct, or will adapt to our new digital-native reality.
    </Text>

    <SimpleGrid my={20} cols={{ base: 1, sm: 2 }}>
      <Card withBorder shadow="sm">
        <Text>Free</Text>
        <Text></Text>
        <Text></Text>
      </Card>

      <Card withBorder shadow="sm">
        <Text>Premium</Text>
        <Text></Text>
        <Text></Text>
      </Card>
    </SimpleGrid>

    <Card withBorder shadow="sm">
      <Text>Business</Text>
      <Text>
        Do you need more? Contact us, we can offer a solution that suit your
        needs.
      </Text>
      <Text></Text>
    </Card>
  </Paper>
)
