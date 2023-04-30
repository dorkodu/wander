export type FAQ = {
  q: string;
  a: React.ReactNode;
};

export const faqs: FAQ[] = [
  {
    q: "What is Dorkodu?",
    a: (
      <>
        We are an indie tech company.
        <br />
        We create social & gamified productivity apps to help you fulfill your dream life.
      </>
    ),
  },
  {
    q: `What's about the name "Dorkodu"?`,
    a: (
      <>
        We made it up: <b>Doruk + Berk + Code</b>. Add some alliteration. Voila!
        <br />
        We needed an <b>original, authentic name</b> which also had to be available as <i>.com</i> domain.
      </>
    ),
  },
  {
    q: "How much it costs?",
    a: "It is free to create a Dorkodu account, and will always be.",
  },
  {
    q: "What does the company do?",
    a: "Our company builds the products and technology to help you fulfill your dream life.",
  },
  {
    q: `What does "dream fulfillment technology company" mean?`,
    a: (
      <>
        This is a simple statement which explains our purpose.
        <br />
        We are here to make all your dreams possible, help you make them come true, with the help of meaningful, humane
        technology and our apps, which are tools for your mind.
      </>
    ),
  },
  {
    q: `How to install Dorkodu's mobile apps?`,
    a: (
      <>
        <b>
          <i>Proudly</i>, we don't release our apps on big-tech monopoly app stores.
        </b>
        <ul>
          <li>You can install Dorkodu apps by opening them on web.</li>
          <li>Your browser will suggest you to install it.</li>
          <li>Add the app to your home screen, and enjoy the show!</li>
        </ul>
      </>
    ),
  },
];
