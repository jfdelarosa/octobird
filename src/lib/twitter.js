import Twitter from 'twitter-lite';

export const client = new Twitter({
	consumer_key: import.meta.env.VITE_TWITTER_API_KEY,
	consumer_secret: import.meta.env.VITE_TWITTER_API_KEY_SECRET
});
