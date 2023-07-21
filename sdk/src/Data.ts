import { Serializable } from "child_process";
import { CID, DID, ID, User } from "./Identity";

export type Hash = string;

export type Operation = {
  type: string; // operation type
  prev: string; // pointer to the CID of the previous operation in the log
  sig: string; // base64url encoded signature of the operation
  // ... other operation-specific data
};

export type PermissionInfo = object;

export type FreeFormData = DID | Record<string, Attribute<any>>;
export type EntityType = string;

export type TimeStamp = number;

export interface Entity {
  id: ID;
  type: EntityType;
  meta: Record<string, string>;
  data: FreeFormData;
  owner: User;
  permissions: PermissionInfo;
  timestamp: TimeStamp;
}

export interface Attribute<T> {
  name: string;
  description?: string;
  data: T;
}

export interface ImmutableEntity extends Entity {
  parent: CID;
  did: DID;
  hash: string;
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
  entities: Record<string, Entity>;
};

/** 
  export interface TokenLexicon {
    lexicon: 1;
    id: "com.example.trafficLight";
    type: "record";
    record: {
      type: "object";
      required: ["state"];
      properties: {
        state: { type: "string"; enum: ["red", "yellow", "green"] };
      };
    };
  }

  const Lexicon: LexiconDocument = {
    lexicon: 1,
    id: "com.example.getProfile",
    type: "query",
    parameters: {
      user: { type: "string", required: true },
    },
    output: {
      encoding: "application/json",
      schema: {
        type: "object",
        required: ["did", "name"],
        properties: {
          did: { type: "string" },
          name: { type: "string" },
          displayName: { type: "string", maxLength: 64 },
          description: { type: "string", maxLength: 256 },
        },
      },
    },
  };
*/

export type EventID = string;
export type EntityID = string;
