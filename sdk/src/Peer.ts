import { AuthCredientals, Session } from "./Identity";

export type Connection = {
  seed;
};

/**
 * TODO: implement client-server logic
 * ? data structures like sage classic
 * ? server communication
 * ? validation of types
 */
export class Peer {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  createSession({ identifier, password }: AuthCredientals) {
    return {} satisfies Session;
  }

  setHeader(header: string, value: string) {}

  list() {} // general purpose

  whoAmI() {} // just for fun..

  create(identifier: {}, object: {}) {}

  read() {}

  send() {}

  delete() {}
}
