/**
 * IPFS
 * 
 * @author Doruk Eray
 * @description This library defines common building blocks for IPFS, IPLD and Multiformats technologies.
 */

import * as Block from 'multiformats/block';
import * as codec from '@ipld/dag-cbor';
import { sha256 as hasher } from 'multiformats/hashes/sha2';
import { MultihashHasher } from 'multiformats/dist/types/src/hashes/hasher';
import { BlockEncoder } from 'multiformats/dist/types/src/interface';

/**
 * 
 * 
 */

export async function createBlock(value: unknown) {

  return await Block.encode({ value, codec, hasher });

  // if you have the cid you can also verify the hash on decode
  // block = await Block.create({ bytes: block.bytes, cid: block.cid, codec, hasher })
}

export async function decodeBlock(value: unknown) {
  return await Block.decode({ bytes: block.bytes, codec, hasher })
}
