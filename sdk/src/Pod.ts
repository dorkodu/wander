import { User } from "./Wander";

export interface IPod {
  owner: User;
}

export class Pod implements IPod {}
