<script lang="ts">
	import type { Post } from '../../types/PostsInterface';

	export let post: Post;
	const { title, image, excerpt, date, slug } = post;

	const imagePath = `/images/posts/${slug}/${image}`;

	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const linkPath = `/posts/${slug}`;
</script>

<li class={'post'}>
	<a href={linkPath}>
		<div class={'image'}>
			<img src={imagePath} alt={title} height={200} />
		</div>
		<div class={'content'}>
			<h3>{title}</h3>
			<time>{formattedDate}</time>
			<p>{excerpt}</p>
		</div>
	</a>
</li>

<style>
	.post {
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
		background-color: var(--color-grey-800);
		text-align: center;
	}

	.post a {
		color: var(--color-grey-100);
	}

	.image {
		width: auto;
		max-height: 20rem;
		overflow: hidden;
	}

	.image img {
		object-fit: cover;
		width: 100%;
	}

	.content {
		padding: var(--size-4);
	}

	.content h3 {
		margin: var(--size-2) 0;
		font-size: var(--size-6);
	}

	.content time {
		font-style: italic;
		color: var(--color-grey-300);
	}

	.content p {
		line-height: var(--size-6);
	}
</style>
