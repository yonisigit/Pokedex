import { startREPL } from "./repl.js";
import { initState } from "./state.js";

async function main() {
  const state = initState();
  await startREPL(state);
  /*
  const response = await fetch("https://pokeapi.co/api/v2/location-area/", {
   method: "GET"
  })
  const obj = await response.json();
  console.log(obj);
  */
}

main();