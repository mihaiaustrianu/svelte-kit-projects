<script lang="ts">
	import EventsList from '../components/EventsList.svelte';
	import { getFeaturedEvents } from '../dummy-data';

	const events = getFeaturedEvents();
</script>

<EventsList items={events} />
