import { NSID, NSIDDocument, WanderID } from "./Name";

export type SchemaNames = Record<string, NSIDDocument>;
export type UsernameDirectory = Record<string, NSIDDocument>;
export type Names = Record<string, WanderID>;
export type Usernames = Record<string, NSIDDocument>;

export class NameService {
  private schemaNames: SchemaNames;
  private names: Record<string, WanderId>;
  private links: Record<string, NSID>;

  constructor({ schemaNames, names, links }) {
    this.links = links;
    this.schemaNames = schemaNames;
    this.links = links;
  }
}
