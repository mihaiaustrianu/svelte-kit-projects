<script lang="ts">
	import EventContent from '../../../components/event-detail/EventContent.svelte';
	import EventLogistics from '../../../components/event-detail/EventLogistics.svelte';
	import EventSummary from '../../../components/event-detail/EventSummary.svelte';
	import { getEventById } from '../../../dummy-data';
	import { page } from '$app/stores';
	import ErrorAlert from '../../../components/ErrorAlert.svelte';

	const eventId = $page.params.eventID;
	const event = getEventById(eventId);
</script>

{#if event}
	<EventSummary title={event.title} />
	<EventLogistics
		date={event.date}
		address={event.location}
		image={event.image}
		imageAlt={event.title}
	/>
	<EventContent>
		<p>{event.description}</p>
	</EventContent>
{:else}
	<ErrorAlert>
		<p>No event found</p>
	</ErrorAlert>
{/if}
