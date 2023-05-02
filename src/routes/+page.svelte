<script lang="ts">
	import EventsList from '../components/EventsList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const events = data.featuredEvents;
</script>

<EventsList items={events} />
