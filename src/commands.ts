import { inspect } from "node:util";
import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMapNext, commandMapPrev } from "./command_map.js";
import { CLICommand } from "./state.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";


export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays next batch of location areas",
      callback: commandMapNext,
    },
    mapb: {
      name: "mapb",
      description: "Displays previous batch of location areas",
      callback: commandMapPrev,
    },
    explore: {
      name: "explore",
      description: "Displays the pokemon in given location area",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Attempts to catch given pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Displays data about given pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Displays the pokemon in the pokedex",
      callback: commandPokedex,
    }
  };
}