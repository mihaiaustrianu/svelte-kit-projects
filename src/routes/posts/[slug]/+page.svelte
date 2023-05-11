<script lang="ts">
	import PostContent from '../../../components/posts/post-detail/PostContent.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const post = data.post;
</script>

<PostContent {post} />
