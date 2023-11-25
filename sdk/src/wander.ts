import { sha256 } from "@noble/hashes/sha256";

import { Document, DocumentKind, DocumentTemplate } from "@/commons/data";

import { NewAccountInput, User } from "@/commons/identity";

import {
  createKeyPair,
  generatePrivateKey,
  getPublicKey,
  passwordHash,
} from "@/commons/crypto";

import {
  Event,
  EventTemplate,
  UnsignedEvent,
  getEventHash,
  getSignature,
  validateEvent,
  verifySignature,
} from "@/commons/events/events";

import { randomBytes } from "@noble/hashes/utils";

import { Name, NameKind, UserIdentifier } from "@/commons/name";

import { Pod } from "@/commons/pod";
import { PeerConfig, Peer as Peer_ } from "./peer";

export function createDocument({
  meta,
  content,
  owner,
  pathName,
  attributes,
}: DocumentTemplate): Document {
  return {
    meta,
    content: CID;
    parent?: CID;
    hash: string;
    kind: DocumentKind;
    owner: string; // public key
    timestamp: number;
    permissions: DocumentPermissions;
    event: Event
  };
}

export function completeDocument() {}

export function getUser({ publicKey }: { publicKey: string }): User {
  
}

export function createUser({ email, password }: NewAccountInput): User {
  //? generate new keys
  let { privateKey, publicKey } = createKeyPair();

  const salt = randomBytes(16).toString();

  const hashedPassword = passwordHash(password, salt).toString();

  const emailName: Name = { 
    kind: NameKind.Email, 
    value: email 
  };

  return {
    privateKey,
    publicKey,
    password: hashedPassword,
    names: [ emailName ],
  } satisfies User;
}

const secretKey = generatePrivateKey(); // `sk` is a hex string
const publicKey = getPublicKey(secretKey); // `pk` is a hex string

export async function Peer(config: PeerConfig) {
  return new Peer_(config);
}

export * as Event from "@/event"