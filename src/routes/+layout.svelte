<script>
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<Toast />
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><h2 class="font-bold">Gamba</h2></a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
