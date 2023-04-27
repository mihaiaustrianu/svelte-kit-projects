<script lang="ts">
	import EventsList from '../../components/EventsList.svelte';
	import EventsSearch from '../../components/EventsSearch.svelte';
	import { getAllEvents } from '../../dummy-data';

	const events = getAllEvents();
</script>

<EventsSearch />
<EventsList items={events} />
