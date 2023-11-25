import { CID } from "../misc/cid";

export interface AddressBook {
  /**
   * Store <name, PublicKey>
   */
  names: Record<string, string>; 

  /**
   * Store <name, CID> for documents
   */
  links: Record<string, string>;
}

export class NameRegistry {
  private addressBook: AddressBook;

  constructor({ book }: { book: AddressBook }) {
    this.addressBook = book;
  }

  addName(name: string, publicKey: string) {
    this.addressBook.names[name] = publicKey;
  }

  getUserPublicKey(name: string) {
    return this.addressBook.names[name];
  }

  getLink(path: string) {
    return this.addressBook.links[path];
  }

  addLink(link: string, cid: string) {
    this.addressBook.links[link] = cid;
  }

  removeName(name: string) {
    delete this.addressBook.names[name];
  }
  removeLink(link: string) {
    delete this.addressBook.links[link];
  }
}