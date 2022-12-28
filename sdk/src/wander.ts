export namespace Wander {
  export type ID = string;
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
  }

  export interface Entity {
    node: Node;
    type: EntityType;
    attributes: Record<string, any>;
  }

  export interface User {
    id: ID;
  }
}
