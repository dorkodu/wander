import { PermissionInfo } from "./Data";
import { ID, User } from "./Identity";
import { LoginCredientals, Session, login } from "./auth";

interface PeerConfig {
  seeds?: string[];
  logging?: boolean;
  cache?: boolean;
}

type EventKind = string;

type Event = {
  kind: EventKind;
  info: string | boolean | number | object;
};

export const PeerEventKinds = [
  // PEER -----------------
  "peer:ready",
  "peer:anonymous",
  "peer:connected",
  "peer:disconnected",
  "peer:connecting",
  "peer:authing",
  "peer:network-online",
  // NETWORK --------------
  "network:busy",
  "network:online",
  "network:offline",
  // SYNC -----------------
  "sync:doing",
  "sync:done",
  "sync:error",
  // SYNC -----------------
]

export class Peer {
  public session: Session | null = null;
  private headers: Record<string, string> = {};
  
  private config: PeerConfig;
  private callbacks: Record<EventKind, Function> = {}

  private seeds: string[];

  constructor(config: PeerConfig) {
    this.config = config;
    this.seeds = config.seeds ?? [];
  }

  accessClaim(namespace: string, permisions: PermissionInfo) {}

  cache(namespace: string) {}

  on(eventName: EventKind, callback: (event?: Event) => void) {

  }
  
  addSpace(space: {name: string;}) {}

  space(name: string) {}

  async storeFile({ type, name, content }: { type: string, name: string, content: string }) {}

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
