import { getPublicKey } from "@/commons/crypto";
import { Event, EventTemplate, getEventHash, getSignature, validateEvent, verifySignature } from "@/commons/events";

export { create, verify };

function create(eventTemplate: EventTemplate, secret: string) {
  let event: any = {
    ...eventTemplate,
    publicKey: getPublicKey(secret),
  };

  event.id = getEventHash(event);
  event.sig = getSignature(event, secret);
}

function verify(event: Event) {
  let ok = validateEvent(event)
  let veryOk = verifySignature(event)

  return ok && veryOk
}