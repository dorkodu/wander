import type { Event } from "./Event";

export const utf8Decoder = new TextDecoder("utf-8");
export const utf8Encoder = new TextEncoder();

export const globalContext =
  typeof window !== "undefined"
    ? window
    : typeof self === "object"
    ? self
    : global;

export const getGlobalContext = (): any => {
  return typeof window !== "undefined"
    ? window
    : typeof self === "object"
    ? self
    : global;
};

export const isLocalStorageAvailable = (): boolean => {
  const context = getGlobalContext();

  if (!("localStorage" in context)) {
    return false;
  }

  try {
    context.localStorage.setItem("rs-check", "1");
    context.localStorage.removeItem("rs-check");
    return true;
  } catch (error) {
    return false;
  }
};

export function normalizeURL(url: string): string {
  let p = new URL(url);
  p.pathname = p.pathname.replace(/\/+/g, "/");
  if (p.pathname.endsWith("/")) p.pathname = p.pathname.slice(0, -1);
  if (
    (p.port === "80" && p.protocol === "ws:") ||
    (p.port === "443" && p.protocol === "wss:")
  )
    p.port = "";
  p.searchParams.sort();
  p.hash = "";
  return p.toString();
}

/**
 * Extract and parse JSON data from localStorage.
 *
 * @param {string} key - localStorage key
 *
 * @returns {object} parsed object or undefined
 */
export const getJSONFromLocalStorage = (
  key: string
): { [key: string]: any } => {
  const context = getGlobalContext() as Window;

  try {
    return JSON.parse(context.localStorage.getItem(key));
  } catch (e) {}
};

/**
 * Decide if data should be treated as binary based on the content (presence of non-printable characters
 * or replacement character) and content-type.
 *
 * @param {string} content - The data
 * @param {string} mimeType - The data's content-type
 *
 * @returns {boolean}
 */
export const shouldBeTreatedAsBinary = (
  content: string | ArrayBuffer,
  mimeType: string
): boolean => {
  // eslint-disable-next-line no-control-regex
  return !!(
    (mimeType && mimeType.match(/charset=binary/)) ||
    /[\x00-\x08\x0E-\x1F\uFFFD]/.test(content as string)
  );
};

//
// fast insert-into-sorted-array functions adapted from https://github.com/terrymorse58/fast-sorted-array
//
export function insertEventIntoDescendingList(
  sortedArray: Event<number>[],
  event: Event<number>
) {
  let start = 0;
  let end = sortedArray.length - 1;
  let midPoint;
  let position = start;

  if (end < 0) {
    position = 0;
  } else if (event.createdAt < sortedArray[end].createdAt) {
    position = end + 1;
  } else if (event.createdAt >= sortedArray[start].createdAt) {
    position = start;
  } else
    while (true) {
      if (end <= start + 1) {
        position = end;
        break;
      }
      midPoint = Math.floor(start + (end - start) / 2);
      if (sortedArray[midPoint].createdAt > event.createdAt) {
        start = midPoint;
      } else if (sortedArray[midPoint].createdAt < event.createdAt) {
        end = midPoint;
      } else {
        // aMidPoint === num
        position = midPoint;
        break;
      }
    }

  // insert when num is NOT already in (no duplicates)
  if (sortedArray[position]?.id !== event.id) {
    return [
      ...sortedArray.slice(0, position),
      event,
      ...sortedArray.slice(position),
    ];
  }

  return sortedArray;
}

export function insertEventIntoAscendingList(
  sortedArray: Event<number>[],
  event: Event<number>
) {
  let start = 0;
  let end = sortedArray.length - 1;
  let midPoint;
  let position = start;

  if (end < 0) {
    position = 0;
  } else if (event.createdAt > sortedArray[end].createdAt) {
    position = end + 1;
  } else if (event.createdAt <= sortedArray[start].createdAt) {
    position = start;
  } else
    while (true) {
      if (end <= start + 1) {
        position = end;
        break;
      }
      midPoint = Math.floor(start + (end - start) / 2);
      if (sortedArray[midPoint].createdAt < event.createdAt) {
        start = midPoint;
      } else if (sortedArray[midPoint].createdAt > event.createdAt) {
        end = midPoint;
      } else {
        // aMidPoint === num
        position = midPoint;
        break;
      }
    }

  // insert when num is NOT already in (no duplicates)
  if (sortedArray[position]?.id !== event.id) {
    return [
      ...sortedArray.slice(0, position),
      event,
      ...sortedArray.slice(position),
    ];
  }

  return sortedArray;
}

export class MessageNode {
  private _value: string;
  private _next: MessageNode | null;

  public get value(): string {
    return this._value;
  }
  public set value(message: string) {
    this._value = message;
  }
  public get next(): MessageNode | null {
    return this._next;
  }
  public set next(node: MessageNode | null) {
    this._next = node;
  }

  constructor(message: string) {
    this._value = message;
    this._next = null;
  }
}

export class MessageQueue {
  private _first: MessageNode | null;
  private _last: MessageNode | null;

  public get first(): MessageNode | null {
    return this._first;
  }
  public set first(messageNode: MessageNode | null) {
    this._first = messageNode;
  }
  public get last(): MessageNode | null {
    return this._last;
  }
  public set last(messageNode: MessageNode | null) {
    this._last = messageNode;
  }
  private _size: number;
  public get size(): number {
    return this._size;
  }
  public set size(v: number) {
    this._size = v;
  }

  constructor() {
    this._first = null;
    this._last = null;
    this._size = 0;
  }
  enqueue(message: string): boolean {
    const newNode = new MessageNode(message);
    if (this._size === 0 || !this._last) {
      this._first = newNode;
      this._last = newNode;
    } else {
      this._last.next = newNode;
      this._last = newNode;
    }
    this._size++;
    return true;
  }
  dequeue(): string | null {
    if (this._size === 0 || !this._first) return null;

    let prev = this._first;
    this._first = prev.next;
    prev.next = null;

    this._size--;
    return prev.value;
  }
}
