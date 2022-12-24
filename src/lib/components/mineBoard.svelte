<script>
	import Tile from '$lib/components/mineTile.svelte';
	import { mineField } from '../../store/mineStore';
	import { mineAmount } from '../../store/mineStore';

	function generateMinefield() {
		let generatedMinefield = [];

		generatedMinefield = Array(5)
			.fill(false)
			.map(() => Array(5).fill(false));

		// Keep track of the number of mines placed
		let minesPlaced = 0;

		// Continue placing mines until the desired number has been reached
		while (minesPlaced < $mineAmount) {
			// Generate random x and y coordinates for the mine
			const x = Math.floor(Math.random() * 5);
			const y = Math.floor(Math.random() * 5);

			// If there is not already a mine at the chosen position, place a mine
			if (!generatedMinefield[x][y]) {
				generatedMinefield[x][y] = true;
				minesPlaced++;
			}
		}

		mineField.set(generatedMinefield);
	}

	let options = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
	];

	generateMinefield();
</script>

<div class="card w-full aspect-square p-4 mb-4">
	<div class="w-full h-full grid grid-cols-5 gap-4">
		{#each $mineField as row}
			{#each row as cell}
				<Tile {cell} />
			{/each}
		{/each}
	</div>
</div>

<div class="w-full max-w-lg h-8">
	<select name="Bet" bind:value={$mineAmount} class="w-full h-full">
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>
