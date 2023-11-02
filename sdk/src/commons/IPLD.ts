/**
 * IPLD
 * 
 * @author Doruk Eray
 * @description This library defines common building blocks for IPLD and Multiformats technologies.
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

  let block = await Block.encode({ value, codec, hasher });

  // you can also decode blocks from their binary state
  // block = await Block.decode({ bytes: block.bytes, codec, hasher })

  // if you have the cid you can also verify the hash on decode
  // block = await Block.create({ bytes: block.bytes, cid: block.cid, codec, hasher })
}