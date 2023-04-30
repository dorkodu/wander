import { createStyles, Image, Container, Title, Button, Text, Stack, rem, Group, Badge } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

const styles = {
  HeroIndex: createStyles((theme) => ({
    wrapper: {
      position: "relative",
      paddingBottom: 80,

      "@media (max-width: 755px)": {
        paddingTop: 80,
        paddingBottom: 60,
      },
    },

    inner: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: theme.spacing.xl,
      alignItems: "center",
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,

      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
        gap: +theme.spacing.md * 2,
      },
    },

    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,

      [theme.fn.smallerThan("md")]: {
        maxWidth: "100%",
        marginRight: 0,
      },
    },

    image: {
      flex: 1,
      maxWidth: 400,
    },

    title: {
      fontWeight: 800,
      fontSize: 40,
      letterSpacing: -1.25,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      maxWidth: 600,

      [theme.fn.smallerThan(520)]: {
        fontSize: 30,
        textAlign: "left",
      },

      [theme.fn.smallerThan(360)]: {
        fontSize: 28,
      },

      [theme.fn.smallerThan(330)]: {
        fontSize: 26,
      },
    },

    description: {
      fontWeight: 500,
      fontSize: theme.fontSizes.xl,

      "@media (max-width: 520px)": {
        fontSize: theme.fontSizes.md,
      },
    },

    cta: {
      marginTop: theme.spacing.md,
      display: "flex",

      "@media (max-width: 520px)": {
        flexDirection: "column",
      },
    },

    ctaButton: {
      "&:not(:first-of-type)": {
        marginLeft: theme.spacing.md,
      },

      "@media (max-width: 520px)": {
        "&:not(:first-of-type)": {
          marginTop: theme.spacing.md,
          marginLeft: 0,
        },
      },
    },
  })),
};

export function HeroIndex() {
  const { classes: $ } = styles.HeroIndex();

  return (
    <Container p={0}>
      <div className={$.inner}>
        <div className={$.content}>
          <Stack spacing={8}>
            <Title className={$.title}>
              <Text mb={-8}>Your life, one place.</Text>
              <Text span>Just like a</Text>
              <Text variant="gradient" gradient={{ from: "#00cc44", to: "lime", deg: 360 }} span>
                &nbsp;digital mind.&nbsp;
              </Text>
            </Title>

            <Text size="xl" color="dimmed" className={$.description} maw={500}>
              With all apps you need, life's like a game. Say hello to&nbsp;
              <i>
                <b>
                  <u>your own digital brain</u>
                </b>
              </i>
              . Fulfill your dreams.
            </Text>
            <div className={$.cta}>
              <Button className={$.ctaButton} size="lg" radius={22} rightIcon={<IconArrowRight />}>
                Create Account
              </Button>
            </div>
          </Stack>
        </div>
        <Image src="/images/dorkodu-ecosystem.svg" className={$.image} />
      </div>
    </Container>
  );
}
