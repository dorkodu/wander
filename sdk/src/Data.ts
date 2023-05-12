import { CID, DID, ID, NSID, User } from "./Identity";

export type Hash = string;

export type Operation = {
  type: string; // operation type
  prev: string; // pointer to the CID of the previous operation in the log
  sig: string; // base64url encoded signature of the operation
  // ... other operation-specific data
};

export type FreeFormData = DID | Record<string, Attribute>;

export type TimeStamp = number;

export interface Entity {
  id: ID;
  meta: Record<string, any>;
  data: FreeFormData;
  owner: User;
  timestamp: TimeStamp;
}

export interface Attribute<T> {
  data: T;
  description?: string;
}

export interface ImmutableEntity extends Entity {
  parent: CID;
  did: DID;
  hash: string;
}

export interface LexiconDocument {
  lexicon: 1;
  id: NSID; // a string or NSID object
  type: "method" | "entity" | "token";
  revision?: number;
  description?: string;
  defs?: JSONSchema;

  // if type == record
  key?: string;
  record?: JSONSchema;

  // if type == query or procedure
  parameters?: Record<string, XrpcParameter>;
  input?: XrpcBody;
  output?: XrpcBody;
  errors?: XrpcError[];
}

export type Method = {};

export type Schema = {
  methods: Record<string, Method>;
};

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
