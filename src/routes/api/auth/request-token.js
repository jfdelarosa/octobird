import { client } from '$lib/twitter';

export async function get() {
	try {
		const body = await client.getRequestToken('http://localhost:3000/auth/callback');

		return {
			body
		};
	} catch ({ message }) {
		return {
			status: 400,
			body: { message }
		};
	}
}
