<script lang="ts">
	import FeaturedPosts from '../components/home-page/FeaturedPosts.svelte';
	import Hero from '../components/home-page/Hero.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Hero />
<FeaturedPosts posts={data.posts} />
