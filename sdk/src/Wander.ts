import { SeedID } from "./Seed";
import { ConnectionType, Peer } from "./Peer";

export * from "./Peer";
export * from "./Identity";
export * from "./name/Name";
export * from "./pod/Pod";
export * from "./Seed";
export * from "./Data";

/*
export function connect({ seed }: { seed: SeedID }) {
  return new Peer({ seed });
}

export function connectToPod({ seed }: { seed: SeedID }) {
  return new Peer({ seed });
}

export function connectToSeed({ seed }: { seed: SeedID }) {
  return new Peer({ seed });
}

export function connectToSeed(request: NodeConnectionRequest) {
  return new Peer({
    request,
  });
}

interface NodeConnectionRequest {
  url: string;
  headers: Record<string, string>;
}

*/
