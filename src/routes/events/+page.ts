import type { PageLoad } from '../$types';
import { getAllEvents } from '../../helpers/api-util';

export const load: PageLoad = async () => {
	const events = await getAllEvents();

	return {
		events: events
	};
};
