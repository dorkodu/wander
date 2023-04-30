import Dorkodu from "@/types/dorkodu";
import { Badge, Box, Center, Grid, Group, Image, Paper, Stack, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import { IconConfetti, IconMoodHappy } from "@tabler/icons-react";

export const ProductLinkCard = ({ project }: { project: Dorkodu.Project }) => {
  const theme = useMantineTheme();

  return (
    <Paper
      p={10}
      component="a"
      href={project.link}
      withBorder
      shadow="sm"
      radius="lg"
      sx={{
        backgroundColor: theme.colorScheme == "dark" ? theme.colors.dark[8] : theme.colors.white,
      }}
    >
      <Group pr={10}>
        <Image src={project.image} width={60} height={60} fit="contain" alt={project.title} withPlaceholder />
        <Stack spacing={0}>
          <Text weight={800} size={24} color={theme.colorScheme == "dark" ? theme.white : theme.colors.dark[9]}>
            {project.title}
          </Text>
          <Text weight={500} color="dimmed" size="md">
            {project.tagline}
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
};

export const ProductShowcaseGrid = ({ products }: { products: Dorkodu.Project[] }) => {
  const theme = useMantineTheme();

  return (
    <Grid my={20} gutter={8}>
      {products.map((item) => (
        <Grid.Col span="content" key={item.title}>
          <ProductLinkCard project={item} />
        </Grid.Col>
      ))}
      <Grid.Col span="content" key="more-soon">
        <Center h={80} p="lg">
          <Badge size="xl" variant="light" p="md" radius={10}>
            <Center>
              <span>More Coming Soon!</span>
            </Center>
          </Badge>
        </Center>
      </Grid.Col>
    </Grid>
  );
};
