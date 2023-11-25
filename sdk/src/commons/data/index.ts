import { CID } from "@/commons/misc/cid";
import { Event } from "@/commons/events";

export interface Document extends DocumentTemplate {
  parent?: CID;
  hash: string;
  timestamp: number;
  event: Event
}

export interface DocumentTemplate {
  meta: Record<string, any>;
  data: CID;
  kind: DocumentKind;
  owner: string;
  permissions: DocumentPermissions;
}

export enum DocumentKind {
  Blank = 0,
  Text = 1,
  Metadata = 2,
  User = 3,
  Event = 4,
  Schema = 5,
  Reshare = 10,
}

export interface DocumentPermissions {
  public: {} & BasicPermissions
  private: {} & BasicPermissions
}

export interface BasicPermissions {
  read: boolean;
  write: boolean;
}