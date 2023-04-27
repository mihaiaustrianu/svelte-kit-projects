<script lang="ts">
	import {} from 'modern-normalize/modern-normalize.css';
	import {} from '../styles/main.scss';
</script>

<header class={'header'}>
	<div class={'logo'}>
		<a href="/">NextEvents</a>
	</div>
	<nav class={'navigation'}>
		<ul>
			<li>
				<a href="/events">Browse All Events</a>
			</li>
		</ul>
	</nav>
</header>
<slot />

<style>
	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 1rem 10%;
		height: 5rem;
		background-color: #202020;
	}

	.logo {
		font-size: 1.5rem;
		color: white;
		font-family: 'Fira', sans-serif;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #94fdfd;
	}

	.logo a {
		text-decoration: none;
		color: #94fdfd;
	}

	.navigation a {
		text-decoration: none;
		color: #74dacc;
		font-size: 1rem;
	}

	@media (min-width: 768px) {
		.logo {
			font-size: 2.5rem;
		}

		.navigation a {
			font-size: 1.5rem;
		}
	}
</style>
