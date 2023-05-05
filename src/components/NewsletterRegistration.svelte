<script lang="ts">
	let emailValue: String;
	function registrationHandler() {
		fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify({ email: emailValue }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	}
</script>

<section class={'newsletter'}>
	<h2>Sign up to stay updated!</h2>
	<form on:submit|preventDefault={registrationHandler}>
		<div class="control">
			<input
				type="email"
				id="email"
				placeholder="Your email"
				aria-label="Your email"
				bind:value={emailValue}
			/>
			<button>Register</button>
		</div>
	</form>
</section>

<style>
	.newsletter {
		margin: 3rem auto;
		width: 90%;
		max-width: 20rem;
	}

	.newsletter h2 {
		text-align: center;
	}

	.control input {
		font: inherit;
		padding: 0.25rem;
		border-radius: 4px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border: 1px solid #ccc;
	}

	.newsletter button {
		background-color: #03be9f;
		border: 1px solid #03be9f;
		border-radius: 6px;
		color: #dafff7;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		font: inherit;
		cursor: pointer;
	}

	.newsletter button:hover,
	.newsletter button:active {
		background-color: #02afa1;
		border-color: #02afa1;
	}

	.control {
		display: flex;
	}

	.control input {
		flex: 1;
	}
</style>
