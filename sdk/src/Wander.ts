import { Document, DocumentTemplate } from "./Data";
import { NewAccountInput } from "./Identity";
import { generatePrivateKey, getPublicKey } from "./commons/Crypto";
import { Event, EventTemplate, UnsignedEvent, getEventHash, getSignature, validateEvent, verifySignature } from "./commons/Event";


export function createDocument({}: DocumentTemplate): Document {

}

export function createSchema({}:{}) {
  
}

export function createAccount({ username, password, email }: NewAccountInput) {
  //? generate new keys
  let privateKey = generatePrivateKey() // `sk` is a hex string
  let publicKey = getPublicKey(privateKey) // `pk` is a hex string
}

export function createEvent(eventTemplate: EventTemplate) {
  let sk = generatePrivateKey() // `sk` is a hex string
  let userPubKey = getPublicKey(sk) // `pk` is a hex string
  
  let event: any = {
    ...eventTemplate,
    publicKey: getPublicKey(sk),
  };
  
  event.id = getEventHash(event);
  event.sig = getSignature(event, sk);
  
  let ok = validateEvent(event);
  let veryOk = verifySignature(event);

  console.log(event);
  console.log("event status: ", ok, veryOk);
}