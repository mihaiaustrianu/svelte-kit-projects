<section class={'hero'}>
	<div class={'image'}>
		<img
			src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80"
			alt="This is showing the author"
			width="300"
			height="300"
		/>
	</div>
	<h1>Hi, I'm Mihai !</h1>
	<p>This is my personal blog where I document all my personal projects!</p>
</section>

<style>
	.hero {
		text-align: center;
		background-image: linear-gradient(to bottom, var(--color-grey-900), var(--color-grey-800));
		padding: var(--size-8) 0;
	}

	.image {
		width: 300px;
		height: 300px;
		box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
		border-radius: 50%;
		overflow: hidden;
		background-color: var(--color-grey-700);
		margin: auto;
	}

	.image img {
		object-fit: cover;
		object-position: top;
		width: 100%;
		height: 100%;
	}

	.hero h1 {
		font-size: var(--size-16);
		margin: var(--size-4) 0;
		color: var(--color-grey-300);
	}

	.hero p {
		font-size: var(--size-6);
		color: var(--color-grey-200);
		width: 90%;
		max-width: 40rem;
		margin: auto;
	}
</style>
