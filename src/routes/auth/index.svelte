<script context="module">
	export async function load() {
		const request = await fetch('api/auth/request-token');
		const { oauth_token } = await request.json();

		return {
			status: 301,
			redirect: `https://api.twitter.com/oauth/authenticate?oauth_token=${oauth_token}`
		};
	}
</script>
