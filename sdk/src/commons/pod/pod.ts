import { DataStore } from "@";
import { EventFeed } from "../events/events";
import { User } from "../identity";

export class Pod implements PodInterface {
  public id: string;
  public user: User;
  public context: Record<string, any>;
  public store: DataStore;
  public feed: EventFeed;

  constructor({ id, user, context = {}, feed, store }: PodInterface) {
    this.id = id;
    this.user = user;
    this.context = context;
    this.store = store;
    this.feed = feed;
  }
}

export interface PodInterface {
  id: string;
  user: User;
  context: Record<string, any>;
  store: DataStore;
  feed: EventFeed;
}