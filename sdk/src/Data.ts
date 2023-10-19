import { Serializable } from "child_process";
import { CID, DID, ID, User } from "./Identity";
import { PublicKey, UserIdentifier } from "./name/Name";

export type Hash = string;


export type PermissionInfo = Set<{
  who: string;
  read: boolean;
  write: boolean;
}>;

export type FreeFormData<T = any> = DID | Document | Record<string, Attribute<T>>;
export type EntityType = string;

export type TimeStamp = number;

export interface DocumentTemplate {}

export interface Document {
  block: ID;
  pathName: string;
  owner: UserIdentifier;
  meta: Record<string, string>;
  attributes: Attribute<T>;
  content: string;
}

export interface Attribute<T> {
  name: string;
  description?: string;
  data: T;
}

export enum BlockKind {
  
}

export interface Block {
  cid: string;
  did: DID;
  parent?: CID;
  hash: string;
  kind: BlockKind;
  owner: UserIdentifier;
  timestamp: TimeStamp;
  permissions: PermissionInfo;
  data: CID;
}

export type Method<TInput, TOutput> = {
  name: string;
  description?: string;
  do: (input: TInput) => TOutput;
};

export type Stringifiable = string | number | boolean | bigint | object;

export type StandardMethodInput = Record<string, Stringifiable>;
export type StandardMethodOutput = Stringifiable;

export type Schema = {
  methods: Record<string, Method<StandardMethodInput, StandardMethodOutput>>;
  entities: Record<string, Document>;
};

export type EventID = string;
export type EntityID = string;
