import { PermissionInfo } from '@/Data';
import { EventFeed } from "@/commons/Event";
import { DataStore } from "@/pod/DataStore";
import { User } from '@/Identity';

export class Pod implements PodInterface {
  public owner: User;
  public context: Record<string, any>;
  public store: DataStore;
  public feed: EventFeed;

  constructor({ owner, context = {}, feed, store }: PodInterface) {
    this.owner = owner;
    this.context = context;
    this.store = store;
    this.feed = feed;
  }
}

export interface PodInterface {
  owner: User;
  context: Record<string, any>;
  store: DataStore;
  feed: EventFeed;
}