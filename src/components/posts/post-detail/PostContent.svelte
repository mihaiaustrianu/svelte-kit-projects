<script lang="ts">
	import PostHeader from './PostHeader.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	const DUMMY_POST = {
		title: 'The Importance of Exercise for Mental Health',
		image: 'getting-started-nextjs.png',
		excerpt:
			'Regular exercise has been shown to have numerous benefits for mental health, including reducing symptoms of anxiety and depression.',
		date: '2022-04-25',
		slug: 'getting-started-nextjs1',
		content: '# This is a first post'
	};
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
</script>

<article class={'content'}>
	<PostHeader title={DUMMY_POST.title} image={imagePath} />
	<SvelteMarkdown source={DUMMY_POST.content} />
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

	.content p {
		color: var(--color-grey-800);
	}

	.content .image {
		margin: var(--size-4) auto;
		width: 100%;
		max-width: 600px;
	}

	@media (min-width: 768px) {
		.content {
			padding: var(--size-8);
		}
	}
</style>
