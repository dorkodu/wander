import { ID, User } from "./Identity";
import { AuthCredientals, Session } from "./auth";
import * as sage from "@dorkodu/sage-client";

/**
 * TODO: implement client-server logic
 * ? data structures like sage classic
 * ? server communication
 * ? validation of types
 */
export class Peer {
  private headers: Record<string, string> = {};
  private session: Session | null = null;

  constructor() {}

  authenticate({ identifier, password }: AuthCredientals): boolean {
    // try to create a session
    const authResult = true;

    // dummy data
    const dummySession: Session = {
      user: {
        id: 1,
        username: "doruk.dorkodu.com",
        publicKey: "1234567890abcdefgi",
      },
    };

    if (authResult) {
      // save credientials locally for future use
      this.session = dummySession;
    }

    return authResult;
  }

  setRequestHeader(header: string, value: string) {
    this.headers[header] = value;
  }

  whoAmI() {
    return this.session.user ?? null;
    // returns the current user's session
    // just for fun..
  }

  connectToPod({ pod }: { pod: string }) {
    // authenticate
    // if succeeds
    return PodConnection();
  }
}

interface Connection {}

function PodConnection() {
  return {
    list({ repo, type }: { repo: string; type: string }) {}, // general purpose listing
    create(identifier: { pod: string; type: string }, object: {}) {},
    read({ id }: { type: string; id: ID }) {},
    send() {},
    delete() {},
  };
}
