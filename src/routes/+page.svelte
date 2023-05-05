<script lang="ts">
	import EventsList from '../components/EventsList.svelte';
	import NewsletterRegistration from '../components/NewsletterRegistration.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const events = data.featuredEvents;
</script>

<NewsletterRegistration />
<EventsList items={events} />
