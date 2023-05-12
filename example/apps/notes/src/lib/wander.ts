import * as Wander from "@wander/sdk";

// create an API instance with my pod
const pod = Wander.connectToPod({ seed: "id.dorkodu.com" });

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
