import { Wander } from "../wander";

export interface Image {}

export interface Tag {
  label: string;
  value?: string;
  color: string;
}

export interface LyfIcon {}

export interface Lyf extends Wander.Entity {
  attributes: {
    title: string;
    tags: Tag[];
    icon: LyfIcon;
    image?: Image;
    text: string;
  };
}

export interface Attribute<T> {
  key: string;
  value: T;
}

export interface IndexCard extends Wander.Entity {
  attributes: {
    title: string;
    text: string;
    tags: Tag[];
  };
}

export interface Collection extends Wander.Entity {}
export interface CardDeck extends Collection {}

export interface Comment extends Wander.Entity {
  author: Wander.User;
}

//? Reaction
export interface Reaction extends Wander.Entity {
  from: Wander.User;
  to: Wander.Entity;
  createdAt: Wander.TimeStamp;
}

export interface EmojiReaction extends Reaction {
  emoji: string;
}

//? Bookmark
export interface Bookmark extends Wander.Entity {
  owner: Wander.User;
  lyf: Lyf;
}