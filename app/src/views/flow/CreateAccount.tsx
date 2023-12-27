import Footer from "#/components/custom/Footer";
import { useTrekie } from "#/stores/trekieStore";
import {
  Button,
  Flex,
  Image,
  Modal,
  PasswordInput,
  Text,
  TextInput,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useColorScheme, useInputState } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Flex
      direction="column"
      justify="center"
      p="md"
      mx="auto"
      mih="100%"
      maw={360}>
      <Flex direction="column" gap="md">
        <Flex justify="center">
          <Image
            src={
              colorScheme == "dark"
                ? "/images/superapp_Brand-Cool-White.svg"
                : "/images/superapp_Brand-Cool.svg"
            }
            alt="the Mascot of Trekie"
            w={250}
            h={"auto"}
          />
        </Flex>

        <Title order={1} lh={1.25} fw={"bold"}>
          Join Dorkodu
        </Title>

        <Title order={2} lh={1.25} fw={"bold"}>
          Create Your Account
        </Title>

        <Text>
          Connect to your account to get the best experience from Dorkodu apps
          you use.
        </Text>

        <Button>Get Started</Button>

        <Button variant="default">I Already Have An Account</Button>

        <Footer />
      </Flex>
    </Flex>
  );
}

function SignupModal(props: { opened: boolean; onClose: () => void }) {
  const navigate = useNavigate();

  const [username, setUsername] = useInputState("");
  const [email, setEmail] = useInputState("");
  const [password, setPassword] = useInputState("");

  const signup = () => {
    const user: IUser = {
      id: Date.now().toString(),
      username,
      name: username,
      email,
      bio: "",
      joinDate: Date.now(),
      totalXp: 0,
      dailyXpCurrent: 0,
      dailyXpTarget: 0,
      lastXpDate: 0,
      streaks: 0,
      lastStreakDate: 0,
      followerCount: 0,
      followingCount: 0,
      premium: false,
    };

    useTrekie.getState().auth(user);
    navigate("/home");
  };

  return (
    <Modal
      opened={props.opened}
      onClose={props.onClose}
      lockScroll={false}
      centered
      size={360}
      title="Signup to Trekie">
      <Flex direction="column" gap="md">
        <TextInput value={username} onChange={setUsername} label="Username" />

        <TextInput
          value={email}
          onChange={setEmail}
          label="Email"
          type="email"
        />

        <PasswordInput
          value={password}
          onChange={setPassword}
          label="Password"
        />

        <Button onClick={signup}>Let's Start!</Button>
      </Flex>
    </Modal>
  );
}
