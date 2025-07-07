import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMapNext, commandMapPrev } from "./command_map.js";
import { CLICommand } from "./state.js";


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
  };
}