export type ID = string | number | DID;

export type DID = {
  method: string;
  key: string;
};

export type DecentralizedUsername = string;

export type CID = {
  hash: string;
};

export type NSID = {
  authority: string;
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
  keys: string[];
}

export type Session = {};

export type AuthCredientals = {
  identifier: string;
  password: string;
};

export const Auth = {
  login(who: AuthCredientals) {},
};
