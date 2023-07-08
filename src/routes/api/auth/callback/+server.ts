import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = (event) => {
	console.log(event);
};
