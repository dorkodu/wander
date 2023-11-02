import { CID } from "../commons/Identity";

import { PublicKey } from "./Name";

export class NameService {
  private addressBook: AddressBook;

  constructor({ book }: { book: AddressBook }) {
    this.addressBook = book;
  }

  addName(name: string, pubkey: PublicKey) {
    this.addressBook.names[name] = pubkey;
  }

  getUserId(name: string) {}

  getLink(link: string) {}

  addLink(link: string, cid: CID) {
    this.addressBook.links[link] = cid;
  }

  removeName(name: string) {
    delete this.addressBook.names[name];
  }
  removeLink(link: string) {
    delete this.addressBook.links[link];
  }
}

export interface AddressBook {
  names: Record<string, PublicKey>;
  links: Record<string, CID>;
}
