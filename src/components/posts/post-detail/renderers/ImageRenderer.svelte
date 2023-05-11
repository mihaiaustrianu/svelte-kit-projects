<script lang="ts">
	export let href = '';
	export let title = '';
	export let text = '';
</script>

<img src={href} {title} alt={text} />

<style>
	img {
		margin: var(--size-4) auto;
		width: 100%;
		max-width: 600px;
	}
</style>
