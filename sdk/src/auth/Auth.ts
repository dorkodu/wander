import { User } from "../Identity";

export type Session = {
  user: User;
  headers: Record<string, string>;
  credientals: {
    who: UserIdentifier;
    password: string;
  };
};

export type LoginCredientals = {
  user: UserIdentifier;
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
