/* eslint-disable @typescript-eslint/ban-ts-comment */

import * as Wander from "@wander/sdk";

// export const peer = new Wander.Peer({ seeds: [], logging: true, cache: false });

const document = Wander.createDocument({});
const account = Wander.createUser({ email: "doruk@dorkodu.com", password: "wishyouwerehere" });