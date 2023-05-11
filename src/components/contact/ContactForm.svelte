<script lang="ts">
	import type { NotificationType } from '../../types/NotificationInterface';
	import Notification from '../ui/Notification.svelte';
	import { sendContactData } from './SendContactData';

	let enteredEmail = '';
	let enteredName = '';
	let enteredMessage = '';

	let requestStatus: any = '';
	let requestError: any = '';

	async function sendMessageHandler() {
		requestStatus = 'pending';

		try {
			await sendContactData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage
			});
			requestStatus = 'success';
			enteredEmail = '';
			enteredMessage = '';
			enteredName = '';
		} catch (error: any) {
			requestError = error.message;
			requestStatus = 'error';
		}
	}

	let notification: NotificationType;

	$: if (requestStatus === 'success' || requestStatus === 'error') {
		const timer = setTimeout(() => {
			requestError = null;
			requestStatus = null;
		}, 3000);
		if (requestStatus == null) {
			clearTimeout(timer);
		}
	}

	$: if (requestStatus === 'pending') {
		notification = {
			status: 'pending',
			title: 'Sending message...',
			message: 'Your message is on its way'
		};
	}

	$: if (requestStatus === 'success') {
		notification = {
			status: 'success',
			title: 'Success',
			message: 'Your message was sent'
		};
	}

	$: if (requestStatus === 'error') {
		notification = {
			status: 'error',
			title: 'Error',
			message: requestError
		};
	}
</script>

<section class={'contact'}>
	<form class={'form'} on:submit|preventDefault={sendMessageHandler}>
		<div class={'controls'}>
			<div class={'control'}>
				<label for="email"> Your email</label>
				<input type="email" id="email" required bind:value={enteredEmail} />
			</div>
			<div class={'control'}>
				<label for="name">Your name</label>
				<input type="text" id="name" required bind:value={enteredName} />
			</div>
		</div>
		<div class={'control'}>
			<label for="message" />
			<textarea id="message" rows="5" required bind:value={enteredMessage} />
		</div>
		<div class={'actions'}>
			<button>Send message</button>
		</div>
	</form>
	{#if notification && requestStatus != null}
		<Notification {notification} />
	{/if}
</section>

<style>
	.contact {
		margin: var(--size-8) auto;
		border-radius: 6px;
		background-color: var(--color-grey-100);
		width: 90%;
		max-width: 50rem;
		padding: var(--size-4);
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
		font-size: var(--size-6);
	}

	.contact h1 {
		font-size: var(--size-8);
		margin: var(--size-4) 0;
		text-align: left;
	}

	.form label {
		display: block;
		font-family: 'Oswald', sans-serif;
		font-weight: bold;
		margin: var(--size-2) 0 var(--size-1) 0;
	}

	.form input,
	.form textarea {
		font: inherit;
		padding: var(--size-1);
		border-radius: 4px;
		width: 100%;
		border: 1px solid var(--color-grey-400);
		background-color: var(--color-grey-50);
		resize: none;
	}

	.controls {
		display: flex;
		column-gap: 1rem;
		flex-wrap: wrap;
	}

	.control {
		flex: 1;
		min-width: 10rem;
	}

	.actions {
		margin-top: var(--size-4);
		text-align: right;
	}

	.form button {
		font: inherit;
		cursor: pointer;
		background-color: var(--color-primary-700);
		border: 1px solid var(--color-primary-700);
		padding: var(--size-2) var(--size-4);
		border-radius: 4px;
		color: var(--color-primary-50);
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	}

	.form button:hover {
		background-color: var(--color-primary-500);
		border-color: var(--color-primary-500);
	}

	@media (min-width: 768px) {
		.contact h1 {
			font-size: var(--size-16);
			text-align: center;
		}
	}
</style>
