export const NAMESPACE_DELIMITER = ":";

export interface NSIDDocument {
  namespace: string;
  id: string;
  toString(): string;
}

export type WanderID = string | number;

export const NSID = {
  create({ namespace, id }: { namespace: string; id: string }): NSIDDocument {
    return {
      namespace,
      id,
      toString() {
        return this.namespace + NAMESPACE_DELIMITER + this.id;
      },
    };
  },
  getNamespace(nsid: string) {
    const parts = nsid.split(NAMESPACE_DELIMITER);
    return parts[0];
  },
  getName(nsid: string) {
    const parts = nsid.split(NAMESPACE_DELIMITER);
    return parts[1];
  },
};

export type UserIdentifier = Webname | Mailname | PublicKey;
export type Webname = string;
export type Mailname = string;
export type PublicKey = string;
