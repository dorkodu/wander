### TL;DR:



A data repository is a collection of signed data



They're like Git repos but for database records



Users put their public activity in these repos

# Data Repositories[#](https://atproto.com/guides/data-repos#data-repositories)

A data repository is a collection of data published by a single user. Repositories are self-authenticating data structures, meaning each update is signed and can be verified by anyone.

They are described in both depth in the [Repository specification](https://atproto.com/specs/repository).

## Data Layout[#](https://atproto.com/guides/data-repos#data-layout)

The content of a repository is laid out in a [Merkle Search Tree (MST)](https://hal.inria.fr/hal-02303490/document) which reduces the state to a single root hash. It can be visualized as the following layout:

```
┌────────────────┐
│     Commit     │  (Signed Root)
└───────┬────────┘
        ↓
┌────────────────┐
│   Tree Nodes   │
└───────┬────────┘
        ↓
┌────────────────┐
│     Record     │
└────────────────┘
```

Every node is an [IPLD](https://ipld.io/) object ([dag-cbor](https://ipld.io/docs/codecs/known/dag-cbor/)) which is referenced by a [CID](https://github.com/multiformats/cid) hash. The arrows in the diagram above represent a CID reference.

This layout is reflected in the [AT URIs](https://atproto.com/specs/at-uri-scheme):

```
Root       | at://alice.com
Collection | at://alice.com/app.bsky.feed.post
Record     | at://alice.com/app.bsky.feed.post/1234
```

A “commit” to a data repository is simply a keypair signature over a Root node’s CID. Each mutation to the repository produces a new Commit node.

## Identifier Types[#](https://atproto.com/guides/data-repos#identifier-types)

Multiple types of identifiers are used within a Personal Data Repository.

| **DIDs**  | [Decentralized IDs (DIDs)](https://w3c.github.io/did-core/) identify data repositories. They are broadly used as user IDs, but since every user has one data repository then a DID can be considered a reference to a data repository. The format of a DID varies by the “DID method” used but all DIDs ultimately resolve to a keypair and a list of service providers. This keypair can sign commits to the data repository. |
| --------- | ------------------------------------------------------------ |
| **CIDs**  | [Content IDs (CIDs)](https://github.com/multiformats/cid) identify content using a fingerprint hash. They are used throughout the repository to reference the objects (nodes) within it. When a node in the repository changes, its CID also changes. Parents which reference the node must then update their reference, which in turn changes the parent’s CID as well. This chains all the way to the Commit node, which is then signed. |
| **NSIDs** | [Namespaced Identifiers (NSIDs)](https://atproto.com/specs/nsid) identify the Lexicon type for groups of records within a repository. |
| **rkey**  | [Record Keys](https://atproto.com/specs/record-key) ("rkeys") identify individual records within a collection in a given repository. The format is specified by the collection Lexicon, with some collections having only a single record with a key like "self", and other collections having many records, with keys using a base32-encoded timestamp called a Timestamp Identifier (TID). |