import { Footer, Showcase } from "@/components/Commons";
import { Box, Container, Paper, Text, Title } from "@mantine/core";
import { User } from "@wander/sdk";

export default function Page() {
  return (
    <Container size={1024} p={10}>
      <Header />
      <Showcase content={[<Sidebar />, <Content />]} />
      <Footer />
    </Container>
  );
}

const Header = () => {
  return <Box></Box>;
};
const Sidebar = () => {
  return <Box></Box>;
};

const Content = () => {
  return (
    <Box>
      <UserPaper
        user={{
          id: "1234567890abcdefg",
          names: [],
        }}
      />
    </Box>
  );
};

const UserPaper = ({ user }: { user: User }) => {
  return (
    <Paper>
      <Text>user.</Text>
      <Text>doruk.dorkodu.com</Text>
    </Paper>
  );
};
