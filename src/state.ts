import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI, ShallowLocations } from "./pokeapi.js";


export type State = {
  readline: Interface,
  commandRegistry: Record<string, CLICommand>,
  pokeapi: PokeAPI,
  nextLocationsURL: string,
  prevLocationsURL: string,
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export function initState(): State {
  return {
    readline: createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "Pokedex > ",
    }),
    commandRegistry: getCommands(),
    pokeapi: new PokeAPI(),
    nextLocationsURL: "",
    prevLocationsURL: ""
  }
}