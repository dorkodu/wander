import { FunctionComponent } from "react";

const Welcome: FunctionComponent<{}> = ({}) => {
  return (
    <div>
      <h1>Welcome to Wander</h1>
      <h3>Your digital mind garden.</h3>
      <p>social & gamified</p>
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
  );
};

export default Welcome;
