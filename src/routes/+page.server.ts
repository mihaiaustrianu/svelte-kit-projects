import type { PageServerLoad } from './$types';
import { getFeaturedPosts } from '../lib/posts-util';

export const load: PageServerLoad = async ({}) => {
	const featuredPosts = getFeaturedPosts();
	return {
		posts: featuredPosts
	};
};
