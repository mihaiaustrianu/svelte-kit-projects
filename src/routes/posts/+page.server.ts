import type { PageServerLoad } from './$types';
import { getAllPosts } from '$lib/posts-util';

export const load: PageServerLoad = ({}) => {
	const allPosts = getAllPosts();
	return {
		posts: allPosts
	};
};
