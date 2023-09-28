import { ID, User } from "./Identity";
import { LoginCredientals, Session, login } from "./auth";
import { sage } from '@dorkodu/sage';

interface PeerConfig {
  seeds?: string[];
}

/**
 * TODO: implement client-server logic
 * ? data structures like sage classic
 * ? server communication
 * ? validation of types
 */
export class Peer {
  public session: Session | null = null;
  private headers: Record<string, string> = {};
  private sage = sage.use<Schema>();

  private seeds: string[];

  constructor({ seeds = [] }: PeerConfig) {
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
    return createPodConnection();
  }

  connectToSeed({ url }: { url: string }) {
    // authenticate
    // if succeeds
    return createSeedConnection();
  }
}
