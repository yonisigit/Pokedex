import { Cache, CacheEntry } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache

  constructor(cacheInterval: number) {
    this.cache = new Cache(cacheInterval);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area?offset=0&limit=20`;

    const cachedLocations = this.cache.get<ShallowLocations>(url);
    if (cachedLocations) {
      return cachedLocations;
    }

    try {
      const response = await fetch(url, {
        method: "GET"
      });
      const locations: ShallowLocations = await response.json();
      this.cache.add(url, locations);
      return locations;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

    const cachedLocation = this.cache.get<Location>(url);
    if (cachedLocation) {
      return cachedLocation;
    }
    try {
      const response = await fetch(url, {
        method: "GET"
      });
      const location: Location = await response.json();
      this.cache.add(url, location);
      return location;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

export type ShallowLocations = {
  count: number
  next: string
  previous: any
  results: Array<{
    name: string
    url: string
  }>
}

export type Location = {
  encounter_method_rates: Array<{
    encounter_method: {
      name: string
      url: string
    }
    version_details: Array<{
      rate: number
      version: {
        name: string
        url: string
      }
    }>
  }>
  game_index: number
  id: number
  location: {
    name: string
    url: string
  }
  name: string
  names: Array<{
    language: {
      name: string
      url: string
    }
    name: string
  }>
  pokemon_encounters: Array<{
    pokemon: {
      name: string
      url: string
    }
    version_details: Array<{
      encounter_details: Array<{
        chance: number
        condition_values: Array<any>
        max_level: number
        method: {
          name: string
          url: string
        }
        min_level: number
      }>
      max_chance: number
      version: {
        name: string
        url: string
      }
    }>
  }>
}
