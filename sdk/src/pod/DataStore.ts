import { Account, Entity, Schema, User } from "../Wander";
import { Context } from "./Pod";
import { InMemoryStorage, StorageInterface } from "./Storage";

export class DataStore {
  public storage: StorageInterface;

  constructor({ storage }: { storage: StorageInterface }) {
    this.storage = storage;
  }
}
