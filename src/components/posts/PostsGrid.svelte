<script lang="ts">
	import PostItem from './PostItem.svelte';
	import type { Post } from '../../types/PostsInterface';

	export let posts: Post[];
</script>

<ul>
	{#each posts as post}
		<PostItem {post} />
	{/each}
</ul>
