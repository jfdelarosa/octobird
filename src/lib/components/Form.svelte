<script>
	import { user } from '$lib/store';
	import { get } from 'svelte/store';

	let username = '';
	let loading = false;

	async function onSubmit() {
		if (loading || !username) {
			return;
		}

		loading = true;

		const sessionData = get(user);

		await fetch(`api/${username}/change-cover`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(sessionData)
		});

		loading = false;
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<input type="text" bind:value={username} disabled={loading} />
	<button type="submit" disabled={loading}>Cambiar banner</button>
</form>
