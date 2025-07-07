import { startREPL } from "./repl.js";
import { initState } from "./state.js";

const INTERVAL = 1000 * 60 * 5;

async function main() {
  const state = initState(INTERVAL);
  await startREPL(state);
}

main();