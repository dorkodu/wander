import { PublicKey } from "keystore-idb/lib/types";

export enum NameKind {
  Web,
  Email,
  Display,
}

export interface Name {
  kind: NameKind,
  value: string;
}

export type UserIdentifier = Name | PublicKey;