import { State } from "./state.js";

export async function startREPL(state: State) {
	state.readline.prompt();

	state.readline.on("line", async (input) => {
		const cleanedInput = cleanInput(input);
		//If input is not empy
		if (cleanedInput.length > 0) {
			const command = state.commandRegistry[cleanedInput[0]];

			if (!command) {
				console.log(`Unknown command: "${cleanedInput}". Type "help" for a list of commands.`);
			}

			else {
				try {
					await command.callback(state);
				} catch (e) {
					console.log((e as Error).message);
				}
			}
		}
		state.readline.prompt();
	})
}

export function cleanInput(input: string): string[] {
	return input
		.trim()
		.toLowerCase()
		.split(" ")
		.filter(Boolean);
}