import { State } from "./state.js";

export async function commandMapNext(state: State){
  const locations = await state.pokeapi.fetchLocations(state.nextLocationsURL);

  state.prevLocationsURL = locations.previous;
  state.nextLocationsURL = locations.next;
  
  for (const location of locations.results){
    console.log(location.name);
  }
}

export async function commandMapPrev(state: State){
  if (!state.prevLocationsURL){
    throw new Error("you're on the first page");
  }

  const locations = await state.pokeapi.fetchLocations(state.prevLocationsURL);

  state.prevLocationsURL = locations.previous;
  state.nextLocationsURL = locations.next;
  
  for (const location of locations.results){
    console.log(location.name);
  }
}