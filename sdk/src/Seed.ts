export type SeedID = string;

/**
 * TODO: implement client-server logic
 * ? data structures like sage classic
 * ? server communication
 * ? validation of types
 */
export class Seed {
  public url: string;

  constructor(url: string) {
    this.url = url;
  }

  createSession({ identifier, password }: AuthCredientals) {
    return {} satisfies Wander.Session;
  }

  setHeader(header: string, value: string) {}

  list() {} // general purpose

  whoAmI() {} // just for fun..

  create(identifier: {}, object: {}) {}

  read() {}

  send() {}

  delete() {}
}
