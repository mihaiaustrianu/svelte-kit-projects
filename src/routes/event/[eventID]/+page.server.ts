import { getEventById } from '../../../helpers/api-util';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const event = await getEventById(params.eventID);

	return {
		event: event
	};
};
