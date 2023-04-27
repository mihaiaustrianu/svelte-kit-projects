<script lang="ts">
	import Button from './Button.svelte';
	export let date;
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric'
	});
</script>

<section class={'title'}>
	<h1>Events in {humanReadableDate}</h1>
	<Button link="/events">Show all events</Button>
</section>

<style>
	.title {
		margin: 2rem auto;
		width: 90%;
		max-width: 40rem;
		text-align: center;
	}
</style>
