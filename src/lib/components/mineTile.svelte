<script>
	export let cell;
	let clicked = false;

	import { mineResult, mineAmount, tilesClicked, multi, gameState } from '../../store/mineStore';

	function tileClick() {
		if (clicked === false) {
			if (cell === true) {
				mineResult.set(true);
				tilesClicked.set(0);
				multi.set(0);
				gameState.set('post');
			} else {
				mineResult.set(false);
				tilesClicked.update((n) => n + 1);
				multi.set((1 - ((25 - $mineAmount) / 25) ** $tilesClicked) * 4 + 1);
			}
			clicked = true;
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

{#if $gameState === 'pre'}
	<button
		class="h-full w-full col-auto bg-surface-600 rounded-sm cursor-default"
		on:click={tileClick}
	/>
{:else if $gameState === 'game'}
	{#if clicked === true}
		<button
			class="h-full w-full col-auto bg-surface-500 rounded-sm cursor-default text-green-500 p-2 "
			on:click={tileClick}
		>
			<svg class="w-auto h-auto" viewBox="0 0 256 256"
				><path
					fill="currentColor"
					d="M236 139.3L139.3 236a15.9 15.9 0 0 1-22.6 0L20 139.3a16.1 16.1 0 0 1 0-22.6L116.7 20a16.1 16.1 0 0 1 22.6 0l96.7 96.7a16.1 16.1 0 0 1 0 22.6Z"
				/></svg
			>
		</button>
	{:else}
		<button
			class="h-full w-full col-auto bg-surface-600 rounded-sm cursor-pointer hover:bg-surface-500"
			on:click={tileClick}
		>
			<svg class="w-auto h-auto invisible" viewBox="0 0 256 256"
				><path
					fill="currentColor"
					d="M236 139.3L139.3 236a15.9 15.9 0 0 1-22.6 0L20 139.3a16.1 16.1 0 0 1 0-22.6L116.7 20a16.1 16.1 0 0 1 22.6 0l96.7 96.7a16.1 16.1 0 0 1 0 22.6Z"
				/></svg
			>
		</button>
	{/if}
{:else if $gameState === 'post'}
	{#if clicked === true}
		{#if cell === true}
			<button class="h-full w-full bg-surface-500 text-red-500 rounded-sm p-2 cursor-default">
				<svg class="w-auto h-auto" viewBox="0 0 256 256"
					><path
						fill="currentColor"
						d="M124.1 16.1c-51.6 1.9-93.7 43.6-96 95.3A99.4 99.4 0 0 0 72 198.9V216a16 16 0 0 0 16 16h8a4 4 0 0 0 4-4v-23.7a8.2 8.2 0 0 1 7.5-8.3a8 8 0 0 1 8.5 8v24a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-23.7a8.2 8.2 0 0 1 7.5-8.3a8 8 0 0 1 8.5 8v24a4 4 0 0 0 4 4h8a16 16 0 0 0 16-16v-17.1a100 100 0 0 0-59.9-182.8ZM92 152a20 20 0 1 1 20-20a20.1 20.1 0 0 1-20 20Zm72 0a20 20 0 1 1 20-20a20.1 20.1 0 0 1-20 20Z"
					/></svg
				>
			</button>
		{:else}
			<button class="h-full w-full bg-surface-500 text-green-500 rounded-sm p-2 cursor-default">
				<svg class="w-auto h-auto" viewBox="0 0 256 256"
					><path
						fill="currentColor"
						d="M236 139.3L139.3 236a15.9 15.9 0 0 1-22.6 0L20 139.3a16.1 16.1 0 0 1 0-22.6L116.7 20a16.1 16.1 0 0 1 22.6 0l96.7 96.7a16.1 16.1 0 0 1 0 22.6Z"
					/></svg
				>
			</button>
		{/if}
	{:else if cell === true}
		<button class="h-full w-full bg-surface-600 text-red-500 rounded-sm p-2 cursor-default">
			<svg class="w-auto h-auto" viewBox="0 0 256 256"
				><path
					fill="currentColor"
					d="M124.1 16.1c-51.6 1.9-93.7 43.6-96 95.3A99.4 99.4 0 0 0 72 198.9V216a16 16 0 0 0 16 16h8a4 4 0 0 0 4-4v-23.7a8.2 8.2 0 0 1 7.5-8.3a8 8 0 0 1 8.5 8v24a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-23.7a8.2 8.2 0 0 1 7.5-8.3a8 8 0 0 1 8.5 8v24a4 4 0 0 0 4 4h8a16 16 0 0 0 16-16v-17.1a100 100 0 0 0-59.9-182.8ZM92 152a20 20 0 1 1 20-20a20.1 20.1 0 0 1-20 20Zm72 0a20 20 0 1 1 20-20a20.1 20.1 0 0 1-20 20Z"
				/></svg
			>
		</button>
	{:else}
		<button class="h-full w-full bg-surface-600 text-green-500 rounded-sm p-2 cursor-default">
			<svg class="w-auto h-auto" viewBox="0 0 256 256"
				><path
					fill="currentColor"
					d="M236 139.3L139.3 236a15.9 15.9 0 0 1-22.6 0L20 139.3a16.1 16.1 0 0 1 0-22.6L116.7 20a16.1 16.1 0 0 1 22.6 0l96.7 96.7a16.1 16.1 0 0 1 0 22.6Z"
				/></svg
			>
		</button>
	{/if}
{/if}
