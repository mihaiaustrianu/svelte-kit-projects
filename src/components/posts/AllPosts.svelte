<script lang="ts">
	import type { Post } from '../../types/PostsInterface';
	import PostsGrid from './PostsGrid.svelte';
	export let posts: Post[];
</script>

<section class={'posts'}>
	<h1>All posts</h1>
	<PostsGrid {posts} />
</section>

<style>
	.posts {
		width: 90%;
		max-width: 60rem;
		margin: var(--size-8) auto;
	}

	.posts h1 {
		font-size: var(--size-8);
		color: var(--color-grey-800);
		text-align: center;
	}

	@media (min-width: 768px) {
		.posts h1 {
			font-size: var(--size-16);
		}
	}
</style>
