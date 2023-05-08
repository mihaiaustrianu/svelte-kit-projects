import type { PageServerLoad } from './$types';
import { getFeaturedPosts } from '../lib/posts-util';

export const load: PageServerLoad = async ({}) => {
	const featuredPosts = getFeaturedPosts();
	console.log(featuredPosts);

	return {
		posts: featuredPosts
	};
};
