import { Entity, Schema, User } from "./Wander";

export interface PodInterface {
  account: Account;
  context: Context;
  store: DataStore;
}

export class Pod {
  public account: Account;
  public context: Context;
  public store: DataStore;

  constructor({ account, context = {}, store = {} }: PodInterface) {
    this.account = account;
    this.context = context;
    this.store = store;
  }
}

export type Account = {
  user: User;
  permissions: AccountPermissions;
  knownAs: string;
};

export type AccountPermissions = any;
export type Context = Record<string, any>;
export type DataStore = Record<string, Entity>;
