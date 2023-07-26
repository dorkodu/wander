import { generatePrivateKey } from "./commons/Crypto";

export type ID = string | number | DID;

export type DID = {
  method: string;
  key: string;
};

export interface User {
  id: ID;
  names: Name[];
  publicKey: string;
  privateKey?: string;
}

export type Account = {
  user: User;
  permissions: AccountPermissions;
  knownAs: string;
};

export type AccountPermissions = any;
export type DecentralizedUsername = string;

export type CID = {
  hash: string;
};

export type DIDDocument = {
  signingKey: string;
  recoveryKey: string;
  username: string;
  seed: string;
};


export type NewAccountInput = {
  username: string;
  email: string;
  password: string;
};


export function createAccount({ username, password, email }: NewAccountInput) {
  //? generate new keys
  let sk = generatePrivateKey() // `sk` is a hex string
  let pk = getPublicKey(sk) // `pk` is a hex string
}

