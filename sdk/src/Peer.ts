import { PermissionInfo } from "./Data";
import { ID, User } from "./Identity";
import { LoginCredientals, Session, login } from "./auth";

import * as Sage from '@/commons/Sage';

interface PeerConfig {
  seeds?: string[];
  logging: boolean;
  cache: boolean;
  podSchema: DefaultSchema
}

export type WanderEventKind = string;

export type WanderEvent = {
  kind: WanderEventKind;
  info: string | boolean | number | object;
};

type DefaultSchema = { resources: [] };

export class Peer {
  public session: Session | null = null;
  private headers: Record<string, string> = {};
  
  // TODO: add Sage types 
  private sage: any;

  private config: PeerConfig;

  private callbacks: Record<WanderEventKind, Function> = {}

  private seeds: string[];

  constructor(config: PeerConfig) {
    this.config = config;
    this.seeds = config.seeds ?? [];
    this.sage = Sage.use()
  }

  accessClaim(namespace: string, permisions: PermissionInfo) {}

  cache(namespace: string) {}

  on(eventName: WanderEventKind, callback: (event?: WanderEvent) => void) {

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
