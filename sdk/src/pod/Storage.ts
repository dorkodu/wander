export interface StorageInterface {
  data: Record<EntityID, Entity>;
}

export class InMemoryStorage implements StorageInterface {}

export class LocalStorage implements StorageInterface {}
export class IndexedDBStorage implements StorageInterface {}
export class PostgresStorage implements StorageInterface {}
