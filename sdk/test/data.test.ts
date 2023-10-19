import { describe, expect, it, test } from 'vitest';

import * as Wander from "@/index" 

describe('Wander.Data', () => {
  // ·······················
  it('document: empty', async ({ expect }) => { 
    let document = Wander.createEmptyDocument();

    expect(document).toBe({});
  })

  it('document: create', async ({ expect }) => { 
    let document = Wander.createDocument();

    expect(document).toBe({});
  })
  
  it('document: read', async ({ expect }) => { /* ... */ })
  
  it('document: validate', async ({ expect }) => { /* ... */ })
  
  it('document: update', async ({ expect }) => { /* ... */ })
})