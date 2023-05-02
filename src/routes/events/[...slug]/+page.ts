import type { PageLoad } from '../../$types';
import { getFilteredEvents } from '../../../helpers/api-util';

export const load: PageLoad = async ({ params }) => {
	const filteredData = params.slug.split('/');

	const numYear = +filteredData[0];
	const numMonth = +filteredData[1];

	if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12) {
		return {
			error: true
		};
	}

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth
	});

	const date = new Date(numYear, numMonth - 1);

	return {
		filteredEvents: filteredEvents,
		date: date
	};
};
