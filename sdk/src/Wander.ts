import { SeedID } from "./Seed";
import { Peer } from "./Peer";

export function Connect({ seed }: { seed: SeedID }) {
  return new Peer({ seed });
}
