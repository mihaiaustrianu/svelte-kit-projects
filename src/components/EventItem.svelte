<script lang="ts">
	import Button from './Button.svelte';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
	import MdDateRange from 'svelte-icons/md/MdDateRange.svelte';

	export let title: string;
	export let image: string;
	export let date: string;
	export let location: string;
	export let id: string;

	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const formattedAddress = location.replace(' ,', '\n');
	const exploreLink = `/event/${id}`;
</script>

<li class={'item'}>
	<img src={image} alt={title} />
	<div class={'content'}>
		<div class={'summary'}>
			<h2>{title}</h2>
			<div class={'date'}>
				<div class="date-icon"><MdDateRange /></div>

				<time>{humanReadableDate}</time>
			</div>
			<div class={'address'}>
				<address>{formattedAddress}</address>
			</div>
		</div>
		<div class={'actions'}>
			<Button link={exploreLink}>
				<span>Explore Event</span>
				<span class={'icon'}>
					<FaArrowRight />
				</span>
			</Button>
		</div>
	</div>
</li>

<style>
	.item {
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
		border-radius: 8px;
		overflow: hidden;
		background-color: white;
		margin: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.item img {
		width: 100%;
		object-fit: cover;
		height: 10rem;
	}

	.content {
		width: 100%;
		padding: 0 1rem;
		text-align: center;
	}

	.content h2 {
		margin: 0.5rem 0;
	}

	.date,
	.address {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.date-icon,
	.address svg {
		width: 1.25rem;
		height: 1.25rem;
		color: #666666;
	}

	.content time {
		color: #666666;
		font-weight: bold;
	}

	.content address {
		margin: 0.5rem 0;
		color: #666666;
		white-space: pre;
	}

	.actions {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	.actions span {
		vertical-align: middle;
	}

	.icon {
		margin-left: 0.5rem;
		display: inline-flex;
		justify-content: center;
		align-items: center;
	}

	.icon {
		width: 1.25rem;
		height: 1.25rem;
	}

	@media (min-width: 768px) {
		.item {
			flex-direction: row;
		}

		.item img {
			width: 40%;
			height: 14rem;
		}

		.content {
			width: 60%;
			padding: 0;
			text-align: left;
		}

		.content h2 {
			margin: 1rem 0;
		}

		.actions {
			flex-direction: row;
			justify-content: flex-end;
		}
	}
</style>
