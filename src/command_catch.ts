
import { Pokemon } from "./pokeapi";
import { State } from "./state"

export async function commandCatch(state: State, ...catchArgs: string[]) {
  if (catchArgs.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const pokemonName = catchArgs[0];
  const pokemon: Pokemon = await state.pokeapi.fetchPokemon(pokemonName);

  console.log(`Throwing a Pokeball at ${pokemon.name}...`);
  const res = Math.floor(Math.random() * pokemon.base_experience);
  if (res > 40) {
    console.log(`${pokemon.name} escaped!`);
    return;
  }

  console.log(`${pokemon.name} was caught!`);
  console.log("You may now inspect it with the inspect command.");
  state.pokedex[pokemon.name] = pokemon;
}