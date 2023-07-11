import { User } from "../Identity";

export type Session = {
  user: User;
  headers: Record<string, string>;
};

export type AuthCredientals = {
  identifier: string;
  password: string;
};

export const Auth = {
  login(who: AuthCredientals) {},

  createAccount() {
    //? generate new keys
  },
};
