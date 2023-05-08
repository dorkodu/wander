import * as Wander from "@wander/sdk";

// create an API instance with my PDS
const api = Wander.Connect({ node: "id.dorkodu.com" });

// sign in using my identifier and password
const response = await api.createSession({
  identifier: "doruk.dorkodu.com",
  password: "wishyouwerehere",
});

// configure future calls to include the token in the Authorization header
api.setHeader("Authorization", `Bearer ${response.data.accessToken}`);

await api.Pod.list({
  repo: "alice.com",
  type: "app.bsky.post",
});

await api.Pod.get({
  repo: "alice.com",
  type: "app.bsky.post",
  id: "1",
});

await api.Pod.create(
  {
    repo: "alice.com",
    type: "app.bsky.post",
  },
  {
    text: "Second post!",
    createdAt: new Date().toISOString(),
  }
);

await api.Pod.send(
  {
    repo: "alice.com",
    type: "app.bsky.post",
    tid: "1",
  },
  {
    text: "Hello universe!",
  }
);

await api.com.atproto.repo.deleteRecord({
  repo: "alice.com",
  type: "app.bsky.post",
  tid: "1",
});
