import { ColorToggleSegment } from "@/components/ColorToggle";

import { ArrowRight, Emoji } from "@/styles/emoji";
import {
  Anchor,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  List,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

export default function Welcome() {
  return (
    <Container size={1024} p={10}>
      <Header />
      <Hero />
      <Features />
      <Divider my="lg" maw={600} mx="auto" />
      <Footer />
    </Container>
  );
}

const Header = () => {
  const theme = useMantineTheme();

  return (
    <Container>
      <Image
        src={
          theme.colorScheme == "dark"
            ? "/images/wander_Logo_Light.svg"
            : "/images/wander_Logo_Dark.svg"
        }
        maw={250}
        mx="auto"
        my={10}
      />
    </Container>
  );
};

const Hero = () => {
  return (
    <Container size={500} my={50}>
      <Stack spacing={8}>
        <Title
          weight={800}
          sx={{ letterSpacing: -1, lineHeight: 1.1 }}
          size={30}
          align="center">
          Your Mind Garden 🪴
        </Title>
        <Text
          size="xl"
          color="dimmed"
          maw={500}
          weight={500}
          align="center"
          my={-5}>
          This <b>minimalistic</b> peer for Wander
        </Text>
        <Group my={8} position="center">
          <Button size="md" radius="lg">
            Connect Your Wallet
          </Button>
          <Button size="md" radius="lg" variant="light">
            Create Account
          </Button>
        </Group>
      </Stack>
    </Container>
  );
};

const Features = () => {
  return (
    <Container size={360}>
      <List icon={<Emoji emoji={ArrowRight} size={24} />} center>
        <List.Item>Local-first</List.Item>
        <List.Item>Privacy-friendly</List.Item>
        <List.Item>Privacy-friendly</List.Item>
        <List.Item>Privacy-friendly</List.Item>
      </List>
    </Container>
  );
};

const Footer = () => {
  const links = [
    { link: "https://dorkodu.com", label: "Dorkodu" },
    { link: "https://dorkodu.com/privacy", label: "Privacy" },
    { link: "https://garden.dorkodu.com", label: "Garden" },
    { link: "https://dorkodu.com/jobs", label: "Jobs" },
  ];

  const items = links.map((link) => (
    <Anchor color="dimmed" key={link.label} href={link.link} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <Flex direction="column" my={20}>
      <Flex direction="column" align="center" gap="xs">
        <Flex gap="xs" justify="center" wrap="wrap">
          {items}
        </Flex>

        <Text color="dimmed" weight={450}>
          <b>Dorkodu</b> &copy; {new Date().getFullYear()}
        </Text>

        <ColorToggleSegment size="50" />
      </Flex>

      <Space h="xs" />
    </Flex>
  );
};
