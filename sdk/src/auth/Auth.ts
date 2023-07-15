import { User } from "../Identity";

export type Session = {
  user: User;
  headers: Record<string, string>;
};

export type LoginCredientals = {
  identifier: string;
  password: string;
};

export type NewAccount = {
  username: string;
  password: string;
};

export const Auth = {
  login(who: LoginCredientals) {},

  createAccount({ username, password }: NewAccount) {
    //? generate new keys
  },
};
