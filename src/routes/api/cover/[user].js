import { createImage } from '$lib/canvas';
import { getChart } from '$lib/github';

export async function get({ params }) {
	try {
		const { user } = params;

		if (!user) {
			throw new Error('User is required');
		}

		const { data } = await getChart(user);
		const image = createImage(user, data);

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
