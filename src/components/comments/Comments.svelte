<script lang="ts">
	import CommentList from './CommentList.svelte';
	import NewComment from './NewComment.svelte';

	export let eventID: string;

	let comments: any = [];
	let showComments = false;

	function toggleCommentsHandler() {
		showComments = !showComments;
	}

	function addCommentHandler(commentData: any) {
		fetch('/api/comments/' + eventID, {
			method: 'POST',
			body: JSON.stringify(commentData),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	}
	$: if (showComments) {
		fetch('/api/comments/' + eventID)
			.then((response) => response.json())
			.then((data) => {
				comments = data.comments;
			});
	}
</script>

<section class={'comments'}>
	<button on:click={toggleCommentsHandler}>
		{showComments ? 'Hide' : 'Show'} Comments
	</button>
	{#if showComments}
		<NewComment onAddComment={addCommentHandler} />
		<CommentList items={comments} />
	{/if}
</section>

<style>
	.comments {
		margin: 3rem auto;
		width: 90%;
		max-width: 40rem;
		text-align: center;
	}

	.comments button {
		font: inherit;
		border-radius: 6px;
		padding: 0.5rem 1rem;
		background-color: transparent;
		color: #03be9f;
		border: 1px solid #03be9f;
		cursor: pointer;
	}

	.comments button:hover,
	.comments button:active {
		background-color: #dcfff9;
	}
</style>
