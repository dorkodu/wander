import { createStyles, Text, Title, TextInput, Button, Image, Container } from "@mantine/core";
import image from "@assets/gilmour.webp";

const styles = {
  EmailBanner: createStyles((theme) => ({
    wrapper: {
      display: "flex",
      alignItems: "center",
      padding: +theme.spacing.xl * 2,
      borderRadius: theme.radius.lg,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]}`,

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        flexDirection: "column-reverse",
        padding: theme.spacing.xl,
      },
    },

    image: {
      maxWidth: "50%",

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: "80%",
      },
    },

    body: {
      paddingRight: +theme.spacing.xl * 2,

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        paddingRight: 0,
        marginTop: theme.spacing.xl,
      },
    },

    title: {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontWeight: 750,
      letterSpacing: -0.75,
      lineHeight: 1,
      marginBottom: theme.spacing.xs,
    },

    controls: {
      display: "flex",
      marginTop: theme.spacing.xl,
      gap: 5,

      [theme.fn.smallerThan(500)]: {
        flexDirection: "column",
        gap: 10,
      },
    },

    inputWrapper: {
      width: "100%",
      flex: "1",
    },

    input: {
      backgroundColor: theme.colorScheme == "dark" ? theme.colors.dark[6] : theme.colors.gray[2],
      fontWeight: 500,
    },
  })),
};

export const SubstackEmbeddedForm = () => (
  <Container size={400}>
    <iframe
      src="https://dorkodu.substack.com/embed"
      style={{
        width: "100%",
        height: "auto",
      }}
      frameBorder="0"
      scrolling="no"
    />
  </Container>
);

export function EmailBanner() {
  const { classes: $, theme } = styles.EmailBanner();

  return (
    <div className={$.wrapper}>
      <div className={$.body}>
        <Title className={$.title} order={2}>
          Subscribe to our newsletter.
        </Title>
        <Text weight={500} size="lg" mb={5}></Text>
        <Text color="dimmed">
          <b>Once a week;</b> you will never miss important updates and latest news.
        </Text>

        <div className={$.controls}>
          <TextInput
            placeholder="Your Email"
            variant="filled"
            type="email"
            size="md"
            classNames={{ root: $.inputWrapper, input: $.input }}
            radius={12}
          />
          <Button size="md" radius={12}>
            Subscribe
          </Button>
        </div>
      </div>
      <Image
        src={theme.colorScheme === "dark" ? "/images/newsletter_Light.svg" : "/images/newsletter_Dark.svg"}
        className={$.image}
      />
    </div>
  );
}
