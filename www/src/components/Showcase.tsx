import { Container, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

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
        gap={20}>
        <div style={{ flex: size }}>{content[0]}</div>
        <div style={{ flex: 1 }}>{content[1]}</div>
      </Flex>
    </Container>
  );
};
