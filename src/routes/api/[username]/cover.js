import { createImage } from '$lib/canvas';
import { getChart } from '$lib/github';

export async function get({ params }) {
	try {
		const { username } = params;

		if (!username) {
			throw new Error('User is required');
		}

		const {
			data: { contributions }
		} = await getChart(username);
		const image = createImage(username, contributions, true);

		return {
			headers: {
				'content-type': 'image/png'
			},
			body: image
		};
	} catch ({ message }) {
		return {
			body: {
				message
			}
		};
	}
}
