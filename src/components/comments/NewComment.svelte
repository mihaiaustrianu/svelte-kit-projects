<script lang="ts">
	export let onAddComment: any;
	let isInvalid = false;

	let emailValue: string;
	let nameValue: string;
	let commentValue: string;

	function sendCommentHandler() {
		const enteredEmail = emailValue;
		const enteredName = nameValue;
		const enteredComment = commentValue;

		if (
			!enteredEmail ||
			enteredEmail.trim() === '' ||
			!enteredEmail.includes('@') ||
			!enteredName ||
			enteredName.trim() === '' ||
			!enteredComment ||
			enteredComment.trim() === ''
		) {
			isInvalid = true;
			return;
		}
		onAddComment({
			email: enteredEmail,
			name: enteredName,
			text: enteredComment
		});
	}
</script>

<form class={'form'} on:submit|preventDefault={sendCommentHandler}>
	<div class={'row'}>
		<div class={'control'}>
			<label for="email">Your email</label>
			<input type="email" id="email" bind:value={emailValue} />
		</div>
		<div class={'control'}>
			<label for="name">Your name</label>
			<input type="text" id="name" bind:value={nameValue} />
		</div>
	</div>
	<div class={'control'}>
		<label for="comment">Your comment</label>
		<textarea id="comment" rows="5" bind:value={commentValue} />
	</div>
	{#if isInvalid}
		<p>Please enter a valid email address and comment!</p>
	{/if}

	<button class={'btn'}>Submit</button>
</form>

<style>
	.form {
		margin: 2rem auto;
		width: 100%;
		border-radius: 6px;
		background-color: #03be9f;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
		padding: 1rem;
	}

	.row {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.control {
		margin-bottom: 0.5rem;
		flex: 1;
		min-width: 10rem;
	}

	.control label {
		display: block;
		font-weight: bold;
		margin-bottom: 0.5rem;
		color: white;
		text-align: left;
	}

	.control input,
	.control textarea {
		font: inherit;
		padding: 0.25rem;
		border-radius: 4px;
		border: 1px solid #ccc;
		width: 100%;
		background-color: #dcfff9;
	}

	.form .btn {
		background-color: white;
	}
</style>
