import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
  rem,
  Box,
  Card,
  Paper,
} from "@mantine/core";

const styles = {
  FeaturedUseCases: createStyles((theme) => ({
    wrapper: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },

    item: {
      display: "flex",
      gap: 12,
      backgroundColor: theme.colorScheme == "dark" ? theme.colors.dark[8] : theme.colors.white,
    },

    itemIcon: {
      padding: theme.spacing.xs,
      marginRight: theme.spacing.md,
    },

    itemTitle: {
      marginBottom: `calc(${theme.spacing.xs} / 2)`,
    },

    supTitle: {
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: 800,
      fontSize: theme.fontSizes.md,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
    },

    title: {
      lineHeight: 1,
      textAlign: "center",
      marginTop: theme.spacing.xl,
    },

    description: {
      marginTop: theme.spacing.xs,
    },

    highlight: {
      backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
      padding: rem(5),
      paddingTop: 0,
      borderRadius: theme.radius.sm,
      display: "inline-block",
      color: theme.colorScheme === "dark" ? theme.white : "inherit",
    },
  })),
};

interface UseCase {
  icon?: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}

interface FeaturedUseCasesData {
  supTitle: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  useCases: UseCase[];
}

export function FeaturedUseCases({ supTitle, title, description, useCases }: FeaturedUseCasesData) {
  const { classes } = styles.FeaturedUseCases();

  const items = useCases.map((item) => (
    <Paper withBorder shadow="sm" p={16} radius={16} className={classes.item} key={item.title}>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        {item.icon}
      </svg>
      <Box sx={{ width: `calc(100% - 24px)` }}>
        <Text fw={700} fz="lg" mb={4} className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </Box>
    </Paper>
  ));

  return (
    <Container size={900} className={classes.wrapper}>
      <Text className={classes.supTitle}>{supTitle}</Text>

      <Container size={600} p={0}>
        <Title className={classes.title} order={2} mb={24}>
          {title}
        </Title>
        <Text className={classes.description}>{description}</Text>
      </Container>

      <SimpleGrid
        cols={2}
        spacing={10}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        style={{ marginTop: 30 }}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
}

export function UseCaseCard({ icon, title, description, image }: UseCase) {}
