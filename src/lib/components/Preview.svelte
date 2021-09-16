<script>
	import { onMount } from 'svelte';

	export let username;

	onMount(async () => {
		const request = await fetch(`api/cover/${username}`);
		const response = await request.json();

		console.log(response);
	});
</script>
