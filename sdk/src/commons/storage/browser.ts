import { StorageInterface } from "./interface"

export class BrowserStorage implements StorageInterface {
  read: <T>(key: string) => {  }
  write: <T>(key: string, val: T) => Promise<T>
  remove: (key: string) => Promise<void>
  list: () => void
  exists: () => void
  clear: () => Promise<void>
}