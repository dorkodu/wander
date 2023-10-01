import { Block, Document, Schema } from "@/Data";
import { CID, User } from "@/Identity";

import { StorageInterface } from "@/storage/Storage";

export class DataStore {
  public storage: StorageInterface;

  constructor({ storage }: { storage: StorageInterface }) {
    this.storage = storage;
  }

  create(document: Document): Block {}
  read(cid: CID) {}
  update(cid: CID, mutation: (old: Document) => Document) {}
  delete(cid: CID) {}

  list(by: string, value: string) {}
  
  find(by: string, value: string) {}
}
