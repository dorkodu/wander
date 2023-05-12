import { AuthCredientals, ID, Session } from "./Identity";

export type Connection = {
  type: ConnectionType;
};

export enum ConnectionType {
  SEED = "SEED",
  PEER = "PEER",
  POD = "POD",
}

/**
 * TODO: implement client-server logic
 * ? data structures like sage classic
 * ? server communication
 * ? validation of types
 */
export class Peer {
  private connection: Connection;
  private authCredientials: AuthCredientals | null = null;
  private headers: Record<string, string> = {};
  private session: Session | null = null;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  createSession({ identifier, password }: AuthCredientals): Session {
    // try to create a session
    // save credientials locally for future trial
    return {} satisfies Session;
  }

  setRequestHeader(header: string, value: string) {}

  list({ repo, type }: { repo: string; type: string }) {} // general purpose listing

  whoAmI() {
    // returns the current user's session
  } // just for fun..

  create(identifier: {}, object: {}) {}

  read({ repo, type, tid }: { repo: string; type: string; tid: ID }) {}

  send() {}

  delete() {}
}
