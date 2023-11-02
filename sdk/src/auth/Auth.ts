import * as UCAN from "@ucans/ucans"

import { User } from "../commons/Identity";

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

export function createSession(): Session {

}

export function login(who: LoginCredientals): LoginAttempt {
  let session = createSession();

  return {
    result: true,
    session: {},
  };
}

/*

export async function authUcan() {
  
  // in-memory keypair
  const keypair = await UCAN.EdKeypair.create()

  const $ucan = await UCAN.build({
    audience: "did:key:zabcde...", // recipient DID
    issuer: keypair, // signing key
    capabilities: [ // permissions for ucan
      {
        with: { scheme: "wnfs", hierPart: "//boris.fission.name/public/photos/" },
        can: { namespace: "wnfs", segments: [ "OVERWRITE" ] }
      },
      {
        with: { scheme: "wnfs", hierPart: "//boris.fission.name/private/6m-mLXYuXi5m6vxgRTfJ7k_xzbmpk7LeD3qYt0TM1M0" },
        can: { namespace: "wnfs", segments: [ "APPEND" ] }
      },
      {
        with: { scheme: "mailto", hierPart: "boris@fission.codes" },
        can: { namespace: "msg", segments: [ "SEND" ] }
      }
    ]
  })
  
  const token = UCAN.encode($ucan) // base64 jwt-formatted auth token

  // You can also use your own signing function if you're bringing your own key management solution
  const payload = await UCAN.buildPayload(...);
  const ucan = await UCAN.sign(payload, keyType, signingFn);

}

function verifyUcan () {

  const serviceDID = "did:key:zabcde..."

  // Generate a UCAN on one machine
  const ucan = UCAN.build({})

  // encode the UCAN to send it over to another machine
  const encoded = UCAN.encode(ucan)

  // verify an invocation of a UCAN on another machine (in this example a service)
  const result = await UCAN.verify(encoded, {
    // to make sure we're the intended recipient of this UCAN
    audience: serviceDID,
    // A callback for figuring out whether a UCAN is known to be revoked
    isRevoked: async ucan => false // as a stub. Should look up the UCAN CID in a DB.
    // capabilities required for this invocation & which owner we expect for each capability
    requiredCapabilities: [
      {
        capability: {
          with: { scheme: "mailto", hierPart: "boris@fission.codes" },
          can: { namespace: "msg", segments: [ "SEND" ] }
        },
        rootIssuer: borisDID, // check against a known owner of the boris@fission.codes email address
      }
    ],
  )

  if (result.ok) {
    // The UCAN authorized the user
  } else {
    // Unauthorized
  }
}

*/
