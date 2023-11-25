import { Entity, Document, Schema } from "@/commons/data";
import { CID, User } from "@/commons/identity";

import { StorageInterface } from "@/storage/Storage";

export class DataStore {
  public storage: StorageInterface;

  constructor({ storage }: { storage: StorageInterface }) {
    this.storage = storage;
  }

  create(document: Document): Entity {}
  read(cid: CID) {}
  update(cid: CID, mutation: (old: Document) => Document) {}
  delete(cid: CID) {}

  list(by: string, value: string) {}
  
  find(by: string, value: string) {}
}
