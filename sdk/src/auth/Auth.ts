import {
  validateEvent,
  verifySignature,
  getSignature,
  getEventHash,
  generatePrivateKey,
  getPublicKey,
} from "nostr-tools";

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

  createAccount() {
    //? generate new keys
    const sk = generatePrivateKey(); // `sk` is a hex string
    const pk = getPublicKey(sk); // `pk` is a hex string
  },
};
