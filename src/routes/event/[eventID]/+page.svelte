<script lang="ts">
	import EventContent from '../../../components/event-detail/EventContent.svelte';
	import EventLogistics from '../../../components/event-detail/EventLogistics.svelte';
	import EventSummary from '../../../components/event-detail/EventSummary.svelte';
	import ErrorAlert from '../../../components/ErrorAlert.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.event}
	<EventSummary title={data.event.title} />
	<EventLogistics
		date={data.event.date}
		address={data.event.location}
		image={data.event.image}
		imageAlt={data.event.title}
	/>
	<EventContent>
		<p>{data.event.description}</p>
	</EventContent>
{:else}
	<ErrorAlert>
		<p>No event found</p>
	</ErrorAlert>
{/if}
