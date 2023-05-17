export type ID = string | number | DID;

export type DID = {
  method: string;
  key: string;
};

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

export interface User {
  id: ID;
  username: string;
  publicKey: string;
}
