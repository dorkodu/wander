import { CID, DID, ID, User } from "./Identity";

export type Hash = string;

export type Operation = {
  type: string; // operation type
  prev: string; // pointer to the CID of the previous operation in the log
  sig: string; // base64url encoded signature of the operation
  // ... other operation-specific data
};

export type FreeFormData = DID | Entity;

export type TimeStamp = number;

export interface Entity {
  id: ID;
  meta: Record<string, any>;
  data: FreeFormData;
  owner: User;
  timestamp: TimeStamp;
}

export interface Attribute<T> {
  type: T;
  data: T;
}

export interface ImmutableEntity extends Entity {
  parent: CID;
  did: DID;
  hash: string;
}
