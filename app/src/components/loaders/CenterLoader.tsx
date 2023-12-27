import { Flex, Loader } from "@mantine/core";
import { useDelay } from "../hooks";

export default function CenterLoader() {
  const delay = useDelay();
  if (delay) return null;

  return (
    <Flex
      align="center"
      justify="center"
      pos="fixed"
      top={0}
      bottom={0}
      left={0}
      right={0}>
      <Loader type="dots" />
    </Flex>
  );
}
