<script>
	import { user } from '$lib/store';
	import Form from '$lib/components/Form.svelte';
</script>

{#if !$user}
	<a href="/auth">Login</a>
{:else}
	<Form />
{/if}
