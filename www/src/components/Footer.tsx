import {
  Anchor,
  Card,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer>
      <Card shadow="xs" radius="lg">
        <SimpleGrid
          cols={{
            sm: 2,
            md: 3,
            lg: 4,
          }}>
          <Stack gap={0}>
            <Image display="inline-block" src="/wander_Icon.svg" w={64} />
          </Stack>
          <Stack gap={0}>
            <Title order={4}>About</Title>
            <Anchor href="/explainer">Explainer</Anchor>
            <Anchor href="/docs">Docs</Anchor>
            <Anchor href="/ecosystem">Ecosystem</Anchor>
            <Anchor href="/faq">FAQs</Anchor>
            <Anchor href="https://dorkodu.com">The Company</Anchor>
          </Stack>
          <Stack gap={0}>
            <Title order={4}>Social</Title>
            {
              // SOCIAL LINKS
              [
                {
                  text: "GitHub",
                  to: "https://github.com/dorkodu/wander",
                  icon: <IconBrandGithub />,
                },
                {
                  text: "Twitter/X",
                  to: "https://x.com/dorkodu",
                  icon: <IconBrandTwitter />,
                },
                {
                  text: "Telegram",
                  to: "https://t.me/dorkodu",
                  icon: <IconBrandTelegram />,
                },
                {
                  text: "Discord",
                  to: "https://discord.gg/dorkodu",
                  icon: <IconBrandDiscord />,
                },
              ].map((link) => (
                <Anchor key={link.text} href={link.to}>
                  {link.icon}
                  {link.text}
                </Anchor>
              ))
            }
          </Stack>
          <Stack gap={0}>
            <Text></Text>
            <Text c="dimmed" fw={700}>
              © 2024 Dorkodu
            </Text>
          </Stack>
        </SimpleGrid>
      </Card>
    </footer>
  );
}
