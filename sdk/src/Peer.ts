import { ID, User } from "./Identity";
import * as Auth from "./auth";
import * as sage from "@dorkodu/sage-client";

/**
 * TODO: implement client-server logic
 * ? data structures like sage classic
 * ? server communication
 * ? validation of types
 */
export class Peer {
  private headers: Record<string, string> = {};
  private session: Session;
  private seeds: string[];

  constructor({ seeds = [] }: { seeds: string[] }) {
    this.seeds = seeds;
  }

  authenticate({ identifier, password }: AuthCredientals): boolean {
    // try to create a session
    const authResult = Auth.;

    if (authResult) {
      // save credientials locally for future use
      this.session = dummySession;
    }

    return authResult;
  }

  setSessionHeader(key: string, value: string) {
    this.session.headers[key] = value;
  }

  whoAmI() {
    return this.session?.user ?? null;
    // returns the current user's session
    // just for fun..
  }

  getSession() {
    return this.session;
  }

  connectToPod({ pod }: { pod: string }) {
    // authenticate
    // if succeeds
    return PodConnection();
  }

  connectToSeed({ url }: { url: string }) {
    // authenticate
    // if succeeds
    return SeedConnection();
  }
}

interface Connection {}

function PodConnection() {
  return {
    list({ repo, type }: { repo: string; type: string }) {}, // general purpose listing
    create(identifier: { pod: string; type: string }, object: {}) {},
    read({ id }: { type: string; id: ID }) {},
    update() {},
    delete() {},
  };
}

function SeedConnection() {
  return {
    list({ repo, type }: { repo: string; type: string }) {}, // general purpose listing
    create(identifier: { pod: string; type: string }, object: {}) {},
    read({ id }: { type: string; id: ID }) {},
    update() {},
    delete() {},
    on(event: string, callback: CallableFunction) {},
  };
}
