import { ID, User } from "./Identity";
import { LoginCredientals, Session, login } from "./auth";
import * as sage from "@dorkodu/sage-client";

/**
 * TODO: implement client-server logic
 * ? data structures like sage classic
 * ? server communication
 * ? validation of types
 */
export class Peer {
  public session: Session | null = null;
  private headers: Record<string, string> = {};

  private seeds: string[];

  constructor({ seeds = [] }: { seeds: string[] }) {
    this.seeds = seeds;
  }

  authenticate(who: LoginCredientals): boolean {
    // try to create a session
    const authResult = login(who);

    if (authResult.result) {
      // save credientials and session locally for future use
      this.session = authResult.session;
    }

    return authResult.result;
  }

  setSessionHeader(key: string, value: string) {
    this.headers[key] = value;
  }

  whoAmI() {
    return this.session?.user ?? null;
    // returns the current user's session
    // just for fun..
  }

  connectToPod({ url }: { url: string }) {
    // authenticate
    this.authenticate();
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
