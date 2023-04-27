<script lang="ts">
	import EventItem from './EventItem.svelte';

	export let items: Event[];

	interface Event {
		id: string;
		title: string;
		description: string;
		location: string;
		date: string;
		image: string;
		isFeatured: boolean;
	}
</script>

<ul class={'list'}>
	{#each items as item}
		{@const { id, title, location, image, date } = item}
		<EventItem {id} {title} {location} {image} {date} />
	{/each}
</ul>

<style>
	.list {
		width: 90%;
		max-width: 40rem;
		margin: 5rem auto;
	}
</style>
