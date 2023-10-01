import { scrypt, scryptAsync } from '@noble/hashes/scrypt';
import { schnorr } from '@noble/curves/secp256k1';
import { bytesToHex } from '@noble/hashes/utils';

export type KeyPair = {
  publicKey: string;
  privateKey: string;
};

export function generatePrivateKey(): string {
  return bytesToHex(schnorr.utils.randomPrivateKey())
}

export function getPublicKey(privateKey: string): string {
  return bytesToHex(schnorr.getPublicKey(privateKey))
}

export function createKeyPair(): KeyPair {
  let privateKey = generatePrivateKey() // `sk` is a hex string
  let publicKey = getPublicKey(privateKey) // `pk` is a hex string

  return { privateKey, publicKey };
}

export function passwordHash(password: string, salt: string) {
  return scrypt(
    password, 
    salt, 
    { N: 2 ** 16, r: 8, p: 1, dkLen: 32 }
  );
}
