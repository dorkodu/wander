import { createStyles, Image, Container, Title, Button, Text, Stack, rem, Group, Badge } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export function HeroAbout() {
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
        letterSpacing: -1,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `${theme.fontFamily}`,
        maxWidth: 600,

        "@media (max-width: 520px)": {
          fontSize: 26,
          textAlign: "left",
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
          height: 42,
          fontSize: theme.fontSizes.md,

          "&:not(:first-of-type)": {
            marginTop: theme.spacing.md,
            marginLeft: 0,
          },
        },
      },
    })),
  };

  const { classes } = styles.HeroIndex();

  return (
    <Container p={0}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Stack spacing={8}>
            <Title className={classes.title}>
              Your life, one place.
              <br />
              Just like a digital mind.
            </Title>

            <Text size="xl" color="dimmed" className={classes.description} maw={500}>
              With all tools you need, life is like a game. Fulfill your dreams. Say hello to&nbsp;
              <i>
                <b>
                  <u>your second mind</u>
                </b>
              </i>
              .
            </Text>
            <div className={classes.cta}>
              <Button className={classes.ctaButton} size="lg" radius={22} rightIcon={<IconArrowRight />}>
                Create Account
              </Button>
            </div>
          </Stack>
        </div>
        <Image src="/images/dorkodu-ecosystem.svg" className={classes.image} />
      </div>
    </Container>
  );
}
