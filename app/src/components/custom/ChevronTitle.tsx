import { Anchor, Flex, Title, TitleOrder } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

interface Props {
  href?: string;
  order?: TitleOrder;
}

function ChevronTitle({
  children,
  href,
  order,
}: React.PropsWithChildren<Props>) {
  const navigate = useNavigate();

  const preventNavigate = (ev: React.MouseEvent, route: string) => {
    ev.preventDefault();
    route && navigate(route);
  };

  return (
    <Anchor
      underline="never"
      href={href}
      onClick={(ev) => preventNavigate(ev, href ?? "")}>
      <Flex align="center">
        <Title order={order}>{children}</Title>
        <IconChevronRight />
      </Flex>
    </Anchor>
  );
}

export default ChevronTitle;
