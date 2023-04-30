import { Emoji, SadFace } from "@/styles/emoji";
import { Alert, Box, Container, Flex, Group, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export const SectionTitle = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => {
  return (
    <Container>
      <Flex gap={15} align="center">
        <Box sx={{ width: 40 }}>{icon}</Box>
        <Box sx={{ width: "100% - 40px" }}>
          <Title
            order={2}
            sx={{
              letterSpacing: -0.75,
            }}
          >
            {title}
          </Title>
          <Text weight={500} color="dimmed" maw={400}>
            {text}
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export const StarDivider = () => {
  const theme = useMantineTheme();

  return (
    <Text
      weight={600}
      size="5rem"
      mr={5}
      mt={"2.5rem"}
      mb={"4rem"}
      color={theme.colorScheme == "dark" ? theme.colors.dark[6] : theme.colors.gray[3]}
      sx={{ userSelect: "none" }}
      align="center"
    >
      ꘏
    </Text>
  );
};

export const StoryCard = ({ icon, text, order }: { icon: React.ReactNode; text: React.ReactNode; order: number }) => {
  const theme = useMantineTheme();

  return (
    <Paper
      shadow="sm"
      withBorder
      p="md"
      m={10}
      sx={{
        backgroundColor: theme.colorScheme == "dark" ? theme.colors.dark[8] : theme.white,
      }}
      radius={10}
    >
      <Group position="apart" mb={8}>
        <Box w={36}>{icon}</Box>
        <Text weight={900} size={30} variant="gradient">
          {order}
        </Text>
      </Group>
      <div>{text}</div>
    </Paper>
  );
};

export const punctuation = ["＊", "⁕", "๛", "⹈", "꘏", "꘎", "⋆", "⭑", "☸"];

export const Showcase = ({
  content,
  noCenter = false,
  size = 1,
}: {
  noCenter?: boolean;
  size?: number;
  content: [React.ReactNode, React.ReactNode];
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 720px)");

  return (
    <Container py={40} px={0}>
      <Flex
        direction={isSmallScreen ? "column" : "row"}
        align={noCenter ? "flex-start" : "center"}
        justify={noCenter ? "flex-start" : "center"}
        gap={20}
      >
        <div style={{ flex: size }}>{content[0]}</div>
        <div style={{ flex: 1 }}>{content[1]}</div>
      </Flex>
    </Container>
  );
};

export const WIP = () => (
  <Container size={600} my={50}>
    <Paper
      radius={10}
      sx={($) => ({
        backgroundColor: $.colors.orange[2],
        padding: 12,
      })}
    >
      <Group noWrap>
        <Emoji size={40} emoji={SadFace} />
        <div>
          <Title
            order={3}
            sx={($) => ({
              color: $.colors.yellow[7],
            })}
          >
            Oops!
          </Title>
          <Text color="dark">This page is currently not available.</Text>
        </div>
      </Group>
    </Paper>
  </Container>
);
