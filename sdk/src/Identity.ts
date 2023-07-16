import { generatePrivateKey } from "./commons/Crypto";

export type ID = string | number | DID;

export type DID = {
  method: string;
  key: string;
};

export interface User {
  id: ID;
  username: string;
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
  password: string;
};


export function createAccount({ username, password }: NewAccountInput) {
  //? generate new keys
  const privKey = generatePrivateKey()
}

