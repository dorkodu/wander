import { EventFeed } from "../commons/Event";
import { Account, Entity, Schema, User } from "../Wander";
import { DataStore } from "./DataStore";

export interface PodInterface {
  account: Account;
  context: Context;
  store: DataStore;
  feed: EventFeed;
}

export class Pod implements PodInterface {
  public account: Account;
  public context: Context;
  public store: DataStore;
  public feed: EventFeed;

  constructor({ account, context = {}, feed, store }: PodInterface) {
    this.account = account;
    this.context = context;
    this.store = store;
    this.feed = feed;
  }
}

//? some necesssary but temporary type definitions
export type Context = Record<string, any>;
 