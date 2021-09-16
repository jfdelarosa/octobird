import Twitter from 'twitter-lite';
import { createImage } from '$lib/canvas';
import { getChart } from '$lib/github';

export async function post({ params, body }) {
	try {
		const { username } = params;
		const { oauth_token, oauth_token_secret } = body;

		const clientOptions = {
			consumer_key: import.meta.env.VITE_TWITTER_API_KEY,
			consumer_secret: import.meta.env.VITE_TWITTER_API_KEY_SECRET,
			access_token_key: oauth_token,
			access_token_secret: oauth_token_secret
		};

		const client = new Twitter(clientOptions);

		const { data } = await getChart(username);
		const banner = createImage(username, data, true);

		console.error(banner);
		const res = await client.post('account/update_profile_banner', {
			banner
		});

		return {
			body: res
		};
	} catch (error) {
		const message = error.message || error;
		return {
			status: 400,
			body: { message }
		};
	}
}
