import type { PageServerLoad } from './$types';
import { getPostData } from '$lib/posts-util';

export const load: PageServerLoad = ({ params }) => {
	const slug = params.slug;
	const postData = getPostData(slug);
	return {
		post: postData
	};
};
