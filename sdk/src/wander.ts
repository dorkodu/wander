export namespace Wander {
  export type ID = string;

  export type DID = {
    method: string;
    key: string;
  };

  export type DIDDocument = {
    signingKey: string;
    recoveryKey: string;
    username: string;
    seed: string;
  };

  export type Operation = {
    type: string; // operation type
    prev: string; // pointer to the CID of the previous operation in the log
    sig: string; // base64url encoded signature of the operation
    // ... other operation-specific data
  };

  export type NSID = {
    authority: string;
  };

  export type TimeStamp = number;

  export interface Node {
    id: ID;
    meta: Record<string, any>;
    data: Entity;
    owner: User;
    timestamp: TimeStamp;
  }

  export enum EntityType {
    Lyf = "wander:Lyf",
    WebPage = "wander:WebPage",
    Person = "wander:Person",
    User = "wander:User",
  }

  export interface Entity {
    node: Node;
    type: EntityType;
    attributes: Record<string, any>;
  }

  export interface User {
    id: ID;
  }

  export class Peer {
    public url: string;

    constructor(url: string) {
      this.url = url;
    }

    get(type: EntityType, id: ID) {}
  }
}
