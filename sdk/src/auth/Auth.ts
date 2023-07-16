import { User } from "../Identity";
import { generatePrivateKey } from "../commons/Crypto";

export type Session = {
  user: User;
  headers: Record<string, string>;
};

export type LoginCredientals = {
  identifier: string;
  password: string;
};

export type LoginAttempt = {
  result: boolean;
  session: Session;
};

export function createSession() {}

export function login(who: LoginCredientals): LoginAttempt {
  let session = createSession();

  return {
    result: true,
    session: {},
  };
}
