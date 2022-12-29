import { Loader } from "@mantine/core";
import { FunctionComponent } from "react";
import { Title, Image } from "@mantine/core";
import WanderLogo from "@assets/wander_app.svg";

const Welcome: FunctionComponent<{}> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ textAlign: "center" }}>
          <Image
            radius="xs"
            src={WanderLogo}
            width={240}
            fit="contain"
            withPlaceholder
            alt="Wander Logo"
            style={{
              margin: "1rem auto",
              paddingRight: ".5rem",
            }}
          />
        </div>
        <Title order={1} align="center">
          Welcome to your digital mind garden.
        </Title>
        <Title order={3} align="center">
          social, gamified, brilliant.
        </Title>
        <div>
          <button>login</button>
          <button>signup</button>
        </div>
        <div>
          <p>
            a <b>dorkodu</b> masterpiece.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
