import * as Wander from "@wander/sdk";

const peer = new Wander.Peer();

peer.authenticate({
  identifier: "doruk.dorkodu.com",
  password: "wishyouwerehere",
});

const pod = peer.connectToPod({
  pod: "https://id.dorkodu.com",
});

async function readFile() {
  // fetch & display a public resource
  let response = await peer.read("https://example.com/AnyPublicWebResource");
  console.log(await response.text());

  // login, then fetch & display a private resource
  await client.login(); // see login details below
  let session = 

  if (session.isLoggedIn) {
    session.WebID;
    response = await client.fetch("https://example.com/privateResource");
    await response.text();
  }
}

/*
// create an API instance with my pod
const peer = Wander.connectToPod({
  pod: "",

});

const seed = Wander.connectToSeed({ url: "id.dorkodu.com" });
const seed = Wander.connectToSeed({ url: "id.dorkodu.com", headers: {} });

// sign in using my identifier and password
const response = await pod.createSession({
  identifier: "doruk.dorkodu.com",
  password: "wishyouwerehere",
});

// configure future calls to include the token in the Authorization header
pod.setRequestHeader("Authorization", `Bearer ${response.data.accessToken}`);

await pod.list({
  repo: "alice.com",
  type: "wander:",
});

await pod.get({
  app: "forum",
  type: "Discussion",
  id: 1,
});

await pod.create(
  {
    repo: "alice.com",
    type: "app.bsky.post",
  },
  {
    text: "Second post!",
    createdAt: new Date().toISOString(),
  }
);

await pod.update(
  {
    repo: "alice.com",
    type: "app.bsky.post",
    tid: "1",
  },
  {
    text: "Hello universe!",
  }
);

await pod.delete({
  repo: "alice.com",
  type: "app.bsky.post",
  tid: "1",
});
*/
