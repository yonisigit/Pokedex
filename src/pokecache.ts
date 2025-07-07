export type CacheEntry<T> = {
  createdAt: number,
  val: T
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(intervalNum: number) {
    this.#interval = intervalNum;
    this.#startReapLoop();
  }

  #reap() {
    this.#cache.forEach((cacheEntry, key) => {
      const reapTime = Date.now() - this.#interval;
      if (cacheEntry.createdAt < reapTime) {
        this.#cache.delete(key);
      }
    })
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }

  stopReapLoop() {
    if (this.#reapIntervalId) {
      clearInterval(this.#reapIntervalId);
      this.#reapIntervalId = undefined;
    }

  }

  add<T>(key: string, val: T): void {
    const newEntry: CacheEntry<T> = {
      createdAt: Date.now(),
      val: val
    };
    this.#cache.set(key, newEntry);
  }

  get<T>(key: string): T | undefined {
    const cacheObj = this.#cache.get(key);
    if (cacheObj !== undefined){
      return cacheObj?.val;
    } else{
      return undefined;
    }
    // const cacheObj = this.#cache.get(key);
    // return cacheObj?.val;
  }
}