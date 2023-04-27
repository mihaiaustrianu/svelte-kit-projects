<script lang="ts">
	import { page } from '$app/stores';
	import Button from '../../../components/Button.svelte';
	import ErrorAlert from '../../../components/ErrorAlert.svelte';
	import { getFilteredEvents } from '../../../dummy-data';
	import ResultsTitle from '../../../components/ResultsTitle.svelte';
	import EventsList from '../../../components/EventsList.svelte';

	const filteredData = $page.params.slug.split('/');

	const numYear = +filteredData[0];
	const numMonth = +filteredData[1];

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth
	});

	const date = new Date(numYear, numMonth - 1);
</script>

{#if !filteredData}
	<p class="center">Loading...</p>
{/if}

{#if isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12}
	<ErrorAlert>
		<p>This is not a valid filter!</p>
	</ErrorAlert>
	<div class="center">
		<Button link="/events">Show all events</Button>
	</div>
{:else if !filteredEvents || filteredEvents.length === 0}
	<ErrorAlert>
		<p>No events found !</p>
	</ErrorAlert>
	<div class="center">
		<Button link="/events">Show all events</Button>
	</div>
{:else}
	<ResultsTitle {date} />
	<EventsList items={filteredEvents} />
{/if}
