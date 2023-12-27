import { Anchor, Flex } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import ColorToggle from "../util/ColorToggle";
import LanguagePicker from "../util/LanguagePicker";

function Footer() {
  const navigate = useNavigate();

  const preventNavigate = (ev: React.MouseEvent, route: string) => {
    ev.preventDefault();
    navigate(route);
  };

  return (
    <>
      <Flex direction="column" align="center">
        <Flex gap="xs">
          <Anchor
            href="/privacy-policy"
            onClick={(ev) => preventNavigate(ev, "/privacy-policy")}>
            Privacy Policy
          </Anchor>
          <Anchor
            href="/terms-of-service"
            onClick={(ev) => preventNavigate(ev, "/terms-of-service")}>
            Terms of Service
          </Anchor>
          <Anchor href="/about" onClick={(ev) => preventNavigate(ev, "/about")}>
            About
          </Anchor>
        </Flex>

        <Anchor href="https://dorkodu.com" target="_blank">
          Dorkodu © {new Date().getFullYear()}
        </Anchor>
      </Flex>

      <Flex justify="center">
        <LanguagePicker />
      </Flex>

      <Flex justify="center">
        <ColorToggle />
      </Flex>
    </>
  );
}

export default Footer;
