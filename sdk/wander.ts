namespace Wander {
  export type ID = string;

  export interface Node {
    id: ID;
    meta: Record<string, any>;
    data: Entity;
    owner: User;
    timestamp: EpochTimeStamp;
  }

  export enum EntityType {
    "Lyf",
    "WebPage",
  }

  export interface Entity {
    id: ID;
    type: EntityType;
    attributes: Record<string, any>;
  }

  export interface User {
    id: ID;
  }

  // dummy examples
  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class ExampleClass {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
}
