<script context="module">
	import { user } from '$lib/store';

	export async function load({ page }) {
		const oauth_token = page.query.get('oauth_token');
		const oauth_verifier = page.query.get('oauth_verifier');

		const request = await fetch('/api/auth/access-token', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				oauth_token,
				oauth_verifier
			})
		});

		const response = await request.json();

		user.set(response);

		return {
			status: 301,
			redirect: '/'
		};
	}
</script>
