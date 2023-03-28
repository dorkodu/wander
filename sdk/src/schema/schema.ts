export namespace Wander {
  export interface Schema {}
  export class Client {
    constructor({ schema }: { schema: Wander.Schema }) {}

    createThing({ type, data }: { type: string; data: any }) {}
  }
}

export const Forum: Wander.Schema = {};

const wander = new Wander.Client({ schema: Forum });

const card = wander.createThing({
  type: "forum:Card",
  data: {},
});
