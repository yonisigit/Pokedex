import { exit } from "node:process";
import { CLICommand, State } from "./state.js";

export async function commandExit(state: State) {
  console.log("Closing the Pokedex... Goodbye!");
  state.readline.close();
  state.pokeapi.closeCache();
  exit(0);
}