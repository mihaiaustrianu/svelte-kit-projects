import { getFeaturedEvents } from '../helpers/api-util';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const events = await getFeaturedEvents();

	return {
		featuredEvents: events
	};
};
