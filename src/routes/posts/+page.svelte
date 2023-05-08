<script lang="ts">
	import AllPosts from '../../components/posts/AllPosts.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<AllPosts posts={data.posts} />
