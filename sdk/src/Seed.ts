import { Schema } from "./Data";

export type SeedID = string;

export class Seed {
  private id: SeedID;
  private schema: Schema;

  constructor({ schema }: { schema: Schema }) {
    this.schema = schema;
    this.id = generateSeedID();
  }

  //? starts running a seed on wander network using the given transport protocol
  // supports HTTP and WebSocket
  run() {}
}

function generateSeedID(): SeedID {
  let id = "GENESIS";

  return "wander:seed:" + id;
}
