import * as Wander from "@wander/sdk";

const peer = new Wander.Peer({
  seeds: [],
});

// configure future calls to include the token in the Authorization header
peer.setSessionHeader("Authorization", `Bearer 1234567890abcdefg`);

const result = peer.authenticate({
  user: "doruk.dorkodu.com",
  password: "wishyouwerehere",
});

const pod = peer.connectToPod({
  url: "https://id.dorkodu.com",
});

const seed = peer.connectToSeed({ url: "id.dorkodu.com" });
seed;

/*
// create an API instance with my pod

const seed = Wander.connectToSeed({ url: "id.dorkodu.com" });
const seed = Wander.connectToSeed({ url: "id.dorkodu.com", headers: {} });

// sign in using my identifier and password
const response = await pod.createSession({
  identifier: "doruk.dorkodu.com",
  password: "wishyouwerehere",
});


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
