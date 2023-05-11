<script lang="ts">
	import Highlight from 'svelte-highlight';
	import javascript from 'svelte-highlight/languages/javascript';
	import 'svelte-highlight/styles/github.css';

	export let lang = '';
	// export let raw = '';
	export let text = '';
</script>

<Highlight code={text} language={javascript} />
