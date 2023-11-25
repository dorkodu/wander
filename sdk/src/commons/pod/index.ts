export * as DataStore from "./datastore"

import { User } from '@/commons/identity';

import { Pod } from './pod';

import {  } from "@/commons/crypto";

export function createPod({ user }: { user: User }): Pod {
  const pod = new Pod({
    id: generatePodId(),
    user,
    
  });

  return pod;
}

export function openLocalPod({ user }: { user: User }): Pod {
  const pod = new Pod({});
  
  return pod;
}

export function generatePodID(user: User) {
  let uuid = rab;

  return `wander:pod:${uuid}`; 
}