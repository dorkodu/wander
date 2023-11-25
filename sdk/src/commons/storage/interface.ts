export interface StorageInterface {
  read: <T>(key: string) => Promise<T | null>
  write: <T>(key: string, val: T) => Promise<T>
  remove: (key: string) => Promise<void>
  list: () => void
  exists: () => void
  clear: () => Promise<void>
}