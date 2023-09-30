import {
  Button,
  Container,
  Divider,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";

const APIUrl = "/api";

import "@/lib/wander";

async function main() {
  fetch(APIUrl)
    .then(function (response) {
      if (response.status !== 200) {
        console.error(
          "Looks like there was a problem. Status Code: " + response.status
        );

        return;
      }

      // Examine the text in the response
      response.json().then((x) => console.info(x));
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

function Clear() {
  console.clear();
}

function Data() {}

export default function Page() {
  return (
    <div>
      <Container size={1024} p={10}>
        <Image
          src="/mindgarden_Brand-White.svg"
          h="auto"
          w={300}
          fit="contain"
        />
        <Divider my={10} />

        <Title order={2} fw={800}>
          Your Garden
        </Title>
        <Text>This is your own cute place on the Web.</Text>

        <Group my={10}>
          <Button size="md" onClick={main}>
            Request
          </Button>

          <Button size="md" onClick={Clear} color="red">
            Clear
          </Button>
        </Group>

        <Divider my={10} />
        <Button size="md" onClick={Data} color="blue">
          Data
        </Button>
      </Container>
    </div>
  );
}
