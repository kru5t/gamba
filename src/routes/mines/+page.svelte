<script>
	import Board from '$lib/components/mineBoard.svelte';

	import { tilesClicked, mineResult, gameState, multi } from '../../store/mineStore';
	import { toastStore } from '@skeletonlabs/skeleton';

	let unique = {};

	function start() {
		multi.set(0);
		unique = {};
		tilesClicked.set(0);
		mineResult.set(false);
		gameState.set('game');
	}

	function end() {
		gameState.set('post');
		// triggerToast();
		multi.set(0);
	}

	function triggerToast() {
		const t = {
			message: `Won ${$multi.toFixed(2)}x !`,
			autohide: true,
			timeout: 5000,
			classes: 'bg-primary-500'
		};
		toastStore.trigger(t);
	}
</script>

<div class="w-full h-full flex flex-col justify-center items-center">
	<h2 class="font-bold my-4">Mines</h2>
	<div class="w-full px-2 max-w-lg">
		{#key unique}
			<Board />
		{/key}
		{#if $gameState === 'pre'}
			<button class="w-full btn btn-filled-tertiary my-4" on:click={start}>Play</button>
		{:else if $gameState === 'game'}
			<button class="w-full btn btn-ghost-tertiary my-4" on:click={end}
				>Cashout @ {$multi.toFixed(2)}x</button
			>
		{:else if $gameState === 'post'}
			<button class="w-full btn btn-filled-tertiary my-4" on:click={start}>Play</button>
		{/if}
	</div>
</div>
