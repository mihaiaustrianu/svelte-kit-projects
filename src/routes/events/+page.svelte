<script lang="ts">
	import EventsList from '../../components/EventsList.svelte';
	import EventsSearch from '../../components/EventsSearch.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const events = data.events;
</script>

<EventsSearch />
<EventsList items={events} />
