import { Location } from "./pokeapi";
import { State } from "./state";


export async function commandExplore(state: State, ...locationArgs: string[]) {

  if (locationArgs.length !== 1){
    throw new Error("you must provide a location name");
  }

  const locationName = locationArgs[0];
  const location: Location = await state.pokeapi.fetchLocation(locationName);
  console.log(`Exploring ${locationName}...`);
  console.log("Found Pokemon:");
  for (const encounter of location.pokemon_encounters){
    console.log(` - ${encounter.pokemon.name}`);
  }
}