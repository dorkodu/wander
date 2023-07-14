import { ColorToggleSegment } from "@/components/ColorToggle";
import { Footer } from "@/components/Commons";

import { ArrowRight, Emoji } from "@/styles/emoji";
import {
  Anchor,
  Box,
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
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconAsterisk } from "@tabler/icons-react";

export default function Welcome() {
  return (
    <Container size={1024} p={10}>
      <Header />
      <Hero />
      <Features />
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

        <Box>
          <Stack my={20} maw={300} mx="auto">
            <Button size="lg" radius="lg">
              Connect
            </Button>
            <Button size="lg" radius="lg" variant="light">
              Create Account
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

const Features = () => {
  return (
    <Container size={360}>
      <List
        icon={
          <ThemeIcon color="blue" variant="light" size={28}>
            <IconAsterisk stroke={3} size={20} />
          </ThemeIcon>
        }
        spacing={8}
        center>
        <List.Item>
          <Text weight={700}>Local-first</Text>
          <Text>Work on your device & then sync.</Text>
        </List.Item>
        <List.Item>
          <Text weight={700}>Privacy-friendly</Text>
          <Text>Only you can see your private objects. Fully encrypted.</Text>
        </List.Item>
        <List.Item>
          <b>Open Source</b>
          <Text>Collective work for the Humankind. Free forever.</Text>
        </List.Item>
        <List.Item>
          <b>Own Your Data</b>
          <Text>
            Signed with your key. Stored on your pod and personal devices.
          </Text>
        </List.Item>
      </List>
    </Container>
  );
};
