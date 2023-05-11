<script lang="ts">
	import PostItem from './PostItem.svelte';
	import type { Post } from '../../types/PostsInterface';

	export let posts: Post[];
</script>

<ul class="grid">
	{#each posts as post}
		<PostItem {post} />
	{/each}
</ul>

<style>
	.grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 1.5rem;
		align-content: center;
	}
</style>
