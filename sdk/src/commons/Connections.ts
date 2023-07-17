export interface Connection {}

function createPodConnection() {
  return {
    list({ repo, type }: { repo: string; type: string }) {}, // general purpose listing
    create(identifier: { pod: string; type: string }, object: {}) {},
    read({ id }: { type: string; id: ID }) {},
    update() {},
    delete() {},
  };
}

export interface SeedConnection {
  list: ({ repo, type }: { repo: string; type: string }) => string[];
  publish: (identifier: { pod: string; type: string }, object: {}) => boolean;
  on: (eventName: string, callback: CallableFunction) => void;
}

export interface PodConnection {
  list: ({ repo, type }: { repo: string; type: string }) => string[];
  create(identifier: { pod: string; type: string }, object: {}) =>
  read({ id }: { type: string; id: ID }) {},
  update() {},
  delete() {},
}

function createSeedConnection(): SeedConnection {
  return {
    list: ({ repo, type }: { repo: string; type: string }) => string[];
    publish: (identifier: { pod: string; type: string }, object: {}) => boolean;
    on: (eventName: string, callback: CallableFunction) => void;
    } satisfies SeedConnection;
}
