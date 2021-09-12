import { createImage } from '$lib/canvas';
import { getChart } from '$lib/github';

export async function post({ params }) {
	const base_url = import.meta.env.VITE_TWITTER_API_URL;
	const { username } = params;

	const { data } = await getChart(username);
	const banner = createImage(username, data);

	fetch(`${base_url}/account/update_profile_banner.json`, {
		body: {
			banner
		}
	});
}
