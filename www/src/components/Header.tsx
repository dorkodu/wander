import {
  Anchor,
  Button,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { ColorToggleSegment } from "./ColorToggle";

export function Header() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <header>
      <Group justify="space-between">
        <Image src="/wander_Logo_Dark.svg" height={64} m={1} p={1} />
        <Group>
          {
            // Anchor Links
            [
              ["/", "Home"],
              ["/docs", "Docs"],
              ["/ecosystem", "Ecosystem"],
            ].map((link) => (
              <Anchor key={link[1]} c="blue" fw={700} href={link[0]}>
                {link[1]}
              </Anchor>
            ))
          }
        </Group>
        <Group gap={8}>
          <Button radius="lg" fw={800} size="md">
            Explore
          </Button>
          <Button radius="lg" fw={800} size="md" variant="light">
            Docs
          </Button>
          <ColorToggleSegment size="xs" />
        </Group>
      </Group>
    </header>
  );
}

const APIKEY = "qZ5T6dHEcb08KZkcwobb4FvsR";
const APISECRET = "bAZJkO5jrcs2bqk4pA4ygJJkX26JRQwVDFynGUVxZr6mpArM73";

let accessToken = "1330420425306804225-Tms4nFPkKMOlAgxHiIKfntaKDWZMsT";
let accessSecret = "tCAUSDvdugS2kHTcy5Sag2st9MhzubSVTfw9Lj97WbZ8F";
