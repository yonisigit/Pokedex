import { State } from "./state";


export async function commandPokedex(state: State, ...args: string[]): Promise<void> {
  console.log("Your Pokedex:");
  for (const pokemonName in state.pokedex) {
    console.log(` - ${pokemonName}`);
  }
}