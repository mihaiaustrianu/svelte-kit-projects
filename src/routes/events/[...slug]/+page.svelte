<script lang="ts">
	import { page } from '$app/stores';
	import Button from '../../../components/Button.svelte';
	import ErrorAlert from '../../../components/ErrorAlert.svelte';
	import ResultsTitle from '../../../components/ResultsTitle.svelte';
	import EventsList from '../../../components/EventsList.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	const filteredData = $page.params.slug.split('/');

	const filteredEvents = data.filteredEvents;

	const date = data.date;
</script>

{#if !filteredData}
	<p class="center">Loading...</p>
{/if}

{#if data.error}
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
