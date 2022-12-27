import { Wander } from "./wander";

export interface Image {}

export interface Tag {}

export interface LyfIcon {}

export interface Lyf extends Wander.Entity {
  node: Wander.Node;
  title: string;
  tags: Tag[];
  icon: LyfIcon;
  image?: Image;
  text: string;
}

export interface Collection extends Wander.Entity {}
