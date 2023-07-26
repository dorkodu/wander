export interface Connection {}

// ---------------- POD ----------------------

function createPodConnection() {
  return {
    list({ type, args }: { type: EntityType, args: Arguments }) {}, // general purpose listing
    create(identifier: { pod: string; type: string }, object: {}) {},
    read({ id }: { type: string; id: ID }) {},
    update() {},
    delete() {},
  };
}

export interface PodConnection {
  list: ({ repo, type }: { repo: string; type: string }) => string[];
  create(identifier: { pod: string; type: string }, object: {}) =>
  read({ id }: { type: string; id: ID }) {},
  update() {},
  delete() {},
}

// ---------------- SEED ----------------------

export interface SeedConnection {
  list: ({ repo, type }: { repo: string; type: string }) => string[];
  publish: (identifier: { pod: string; type: string }, object: {}) => boolean;
  on: (eventName: string, callback: CallableFunction) => void;
}

function createSeedConnection(): SeedConnection {
  return {
    list: ({ repo, type }: { repo: string; type: string }) => string[];
    publish: (identifier: { pod: string; type: string }, object: {}) => boolean;
    on: (eventName: string, callback: CallableFunction) => void;
    } satisfies SeedConnection;
}
