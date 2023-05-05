<script lang="ts">
	export let items: any;
</script>

<ul class="comments">
	{#each items as item}
		<li>
			<p>{item.text}</p>
			<div>
				By <address>{item.name}</address>
			</div>
		</li>
	{/each}
</ul>

<style>
	.comments {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.comments li {
		text-align: left;
		padding: 0.5rem 0;
		border-bottom: 2px solid #ccc;
	}

	.comments p {
		margin: 0;
	}

	.comments li div {
		text-align: right;
		font-style: italic;
	}

	.comments address {
		display: inline;
	}
</style>
