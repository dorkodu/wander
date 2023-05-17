import { User } from "../Identity";

export type Session = {
  user: User;
};

export type AuthCredientals = {
  identifier: string;
  password: string;
};

export const Auth = {
  login(who: AuthCredientals) {},
};
