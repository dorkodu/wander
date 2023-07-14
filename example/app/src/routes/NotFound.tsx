import { Footer } from "@/components/Commons";
import { title } from "@/styles/css";

import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Page() {
  return (
    <Container size={1024} p={10}>
      <Header />
      <Hero />
      <Space h={50} />
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
        <Title weight={500} sx={($) => title($)} size={30} align="center">
          <Text weight={800} span>
            404
          </Text>{" "}
          Not Found
        </Title>

        <Text
          size="xl"
          color="dimmed"
          maw={500}
          weight={500}
          align="center"
          my={-5}>
          You shouldn't be here.
        </Text>

        <Flex justify="center" my={20}>
          <Link to="/welcome">
            <Button size="lg" radius={20} rightIcon={<IconArrowRight />}>
              Go Back Home
            </Button>
          </Link>
        </Flex>
      </Stack>
    </Container>
  );
};
