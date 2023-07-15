/*

A special event with kind 3, meaning "contact list" is defined as having a list of p tags, one for each of the followed/known profiles one is following.
Each tag entry should contain the key for the profile, a relay URL where events from that key can be found (can be set to an empty string if not needed), and a local name (or "petname") for that profile (can also be set to an empty string or not provided), i.e., ["p", <32-bytes hex key>, <main relay URL>, <petname>]. The content can be anything and should be ignored.
For example:

{
  "kind": 3,
  "tags": [
    ["p", "91cf9..4e5ca", "wss://alicerelay.com/", "alice"],
    ["p", "14aeb..8dad4", "wss://bobrelay.com/nostr", "bob"],
    ["p", "612ae..e610f", "ws://carolrelay.com/ws", "carol"]
  ],
  "content": "",
  ...other fields
}

["p", <32-bytes hex key>, <main relay URL>, <petname>]

Every new contact list that gets published overwrites the past ones, so it should contain all entries. Relays and clients SHOULD delete past contact lists as soon as they receive a new one.
- Profile discovery and context augmentation
- Relay sharing
- Petname scheme
- 
*/
