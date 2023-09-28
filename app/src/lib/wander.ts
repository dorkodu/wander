import * as Wander from "@wander/sdk";

const wander = new Wander.Peer({
  seeds: [],
});

// configure future calls to include the token in the Authorization header
wander.setSessionHeader("Authorization", `Bearer 1234567890abcdefg`);

const result = wander.authenticate({
  user: "doruk.dorkodu.com",
  password: "wishyouwerehere",
});

// get current authenticated user's session
const session = wander.session;

//
const pod = wander.connectToPod({
  url: "https://id.dorkodu.com",
});

//? SEED CONNECTION

const seed = wander.connectToSeed({ url: "id.dorkodu.com" });

seed.on("connect", () => {
  console.log(`connected to ${seed.url}`);
});

seed.on("error", () => {
  console.log(`failed to connect to ${seed.url}`);
});

await seed.connect();

//? Event Subscriptions

let sub = seed.subscribe([
  {
    ids: ["d7dd5eb3ab747e16f8d0212d53032ea2a7cadef53837e5a6c66d42849fcb9027"],
  },
]);

sub.on("event", (event: any) => {
  console.log("we got the event we wanted:", event);
});

sub.on("eose", () => {
  sub.unsubscribe();
});

//? Publishing Events

let sk = generatePrivateKey();
let pk = getPublicKey(sk);

let sub = seed.sub([
  {
    kinds: [1],
    authors: [pk],
  },
]);

sub.on("event", (event) => {
  console.log("got event:", event);
});

let event = {
  kind: 1,
  pubkey: pk,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: "hello world",
};

event.id = getEventHash(event);
event.sig = getSignature(event, sk);

let pub = relay.publish(event);

pub.on("ok", () => {
  console.log(`${relay.url} has accepted our event`);
});

pub.on("failed", (reason) => {
  console.log(`failed to publish to ${relay.url}: ${reason}`);
});

let events = await relay.list([{ kinds: [0, 1] }]);
let event = await relay.get({
  ids: ["44e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245"],
});

relay.close();

//? Pod CRUDs

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
