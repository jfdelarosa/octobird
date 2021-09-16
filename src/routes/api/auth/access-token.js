import { client } from '$lib/twitter';

export async function post({ body }) {
	try {
		const { oauth_token, oauth_verifier } = body;

		const res = await client.getAccessToken({
			oauth_token,
			oauth_verifier
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
