import { CID } from "../Identity";

import { NSID, NSIDDocument, PublicKey, WanderID } from "./Name";

export type SchemaNames = Record<string, NSIDDocument>;
export type UsernameDirectory = Record<string, NSIDDocument>;
export type Names = Record<string, WanderID>;
export type Usernames = Record<string, NSIDDocument>;

export class NameService {
  private addressBook: AddressBook;

  constructor({ book }: { book: AddressBook }) {
    this.addressBook = book;
  }

  addName(name: string, pubkey: PublicKey) {
    this.addressBook.names[name] = pubkey;
  }

  addLink(link: string, cid: CID) {
    this.addressBook.links[link] = cid;
  }

  removeName() {}
  removeLink({}) {}
}

export interface AddressBook {
  names: Record<string, PublicKey>;
  links: Record<string, CID>;
}
