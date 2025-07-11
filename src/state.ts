import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";


export type State = {
  readline: Interface,
  commandRegistry: Record<string, CLICommand>,
  pokedex: Record<string, Pokemon>,
  pokeapi: PokeAPI,
  nextLocationsURL: string,
  prevLocationsURL: string,
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(cacheInterval: number): State {
  return {
    readline: createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "Pokedex > ",
    }),
    commandRegistry: getCommands(),
    pokeapi: new PokeAPI(cacheInterval),
    pokedex: {},
    nextLocationsURL: "",
    prevLocationsURL: "",
  }
}