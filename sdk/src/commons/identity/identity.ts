import { UserIdentifier as Name } from "@/commons/name";

export interface User {
  publicKey: string; // Default Identifier for a User
  names: Name[];
  privateKey?: string; // Not required always
  password?: string; // Not required always
}

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
  email: string;
  password: string;
};