import { Account, Entity, Schema, User } from "../Wander";

export interface PodInterface {
  id: PodID;
  account: Account;
  context: Context;
  store: DataStore;
  feed: EventFeed;
}

export class Pod implements PodInterface {
  public id: PodID;
  public account: Account;
  public context: Context;
  public store: DataStore;
  public feed: EventFeed;

  constructor({
    id,
    account,
    context = {},
    feed = {},
    store = {},
  }: PodInterface) {
    this.id = id;
    this.account = account;
    this.context = context;
    this.store = store;
    this.feed = feed;
  }
}

//? some necesssary but temporary type definitions
export type PodID = string;
export type EventID = string;
export type EntityID = string;
export type Context = Record<string, any>;
export type DataStore = Record<EntityID, Entity>;
export type EventFeed = Record<EventID, Event>;
