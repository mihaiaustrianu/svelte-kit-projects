<script lang="ts">
	import type { Post } from '../../../types/PostsInterface';
	import PostHeader from './PostHeader.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import ImageRenderer from './renderers/ImageRenderer.svelte';
	import CodeRenderer from './renderers/CodeRenderer.svelte';

	export let post: Post;
	const imagePath = `/images/posts/${post.slug}/${post.image}`;
</script>

<article class={'content'}>
	<PostHeader title={post.title} image={imagePath} />
	<SvelteMarkdown renderers={{ image: ImageRenderer, code: CodeRenderer }} source={post.content} />
</article>

<style>
	.content {
		width: 95%;
		max-width: 60rem;
		margin: var(--size-8) auto;
		font-size: var(--size-5);
		line-height: var(--size-8);
		background-color: var(--color-grey-100);
		border-radius: 6px;
		padding: var(--size-4);
	}
	@media (min-width: 768px) {
		.content {
			padding: var(--size-8);
		}
	}
</style>
