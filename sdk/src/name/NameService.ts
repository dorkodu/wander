import { NSID, NSIDDocument, PublicKey, WanderID } from "./Name";

export type SchemaNames = Record<string, NSIDDocument>;
export type UsernameDirectory = Record<string, NSIDDocument>;
export type Names = Record<string, WanderID>;
export type Usernames = Record<string, NSIDDocument>;

export class NameService {
  private schemaNames: SchemaNames;
  private addressBook: AddressBook;

  constructor({ book }: { book: AddressBook }) {
    this.addressBook = book;
  }
}

export class AddressBook {
  private schemaNames: SchemaNames;
  private names: Record<string, PublicKey>;
  private links: Record<string, CID>;
}
