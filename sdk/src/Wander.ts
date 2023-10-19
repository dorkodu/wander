import { sha256 } from "@noble/hashes/sha256";
import { Document, DocumentTemplate } from "./Data";
import { Account, NewAccountInput, User } from "./Identity";
import { createKeyPair, generatePrivateKey, getPublicKey, passwordHash } from "./commons/Crypto";
import { Event, EventTemplate, UnsignedEvent, getEventHash, getSignature, validateEvent, verifySignature } from "./commons/Event";
import { randomBytes } from "@noble/hashes/utils";
import { EmailName, UserIdentifier } from "./name/Name";
import { Pod } from "./pod/Pod";

export function createDocument({ meta, content, owner, pathName, attributes }: DocumentTemplate): Document {
  return { block: "", content: "", meta: {}, owner: "", pathName: "", attributes: {} }
}

export function createEmptyDocument({}: DocumentTemplate): Document {
  return { block: "", content: "", meta: {}, owner: "", pathName: "" }
}

export function createSchema({}:{}) {
  
}

export function createPod({ user }: { user: User }): Pod {
  const pod = new Pod({});

  return pod;
}

export function createUser({ email, password }: NewAccountInput): User {
  //? generate new keys
  let { privateKey, publicKey } = createKeyPair();

  const salt = randomBytes(16).toString();
  
  const hashedPassword = passwordHash(password, salt);
  
  const emailName: EmailName = email;

  return {
    privateKey,
    publicKey,
    password: hashedPassword,
    names: [
      email,
    ]
  }
}

export function createEvent(eventTemplate: EventTemplate) {
  let sk = generatePrivateKey() // `sk` is a hex string
  let userPubKey = getPublicKey(sk) // `pk` is a hex string
  
  let event: any = {
    ...eventTemplate,
    publicKey: getPublicKey(sk),
  };
  
  event.id = getEventHash(event);
  event.sig = getSignature(event, sk);
  
  let ok = validateEvent(event);
  let veryOk = verifySignature(event);

  console.log(event);
  console.log("event status: ", ok, veryOk);
}