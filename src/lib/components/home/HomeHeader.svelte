<script lang="ts">
	import Icon from '@iconify/svelte';
	import ButtonNeon from '../common/buttons/ButtonNeon.svelte';
	import { socialNerworks } from '$lib/data/socialNetworks';
	import headerImg from '$lib/assets/header.webp';
	let imageUrl = headerImg;
</script>

<header
	id="home"
	class="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 items-end lg:items-center"
	style="--image-url: url('{imageUrl}')"
>
	<div></div>
	<div class="text-center px-5 py-2 md:p-5">
		<h1 class="text-primary text-5xl md:text-6xl">Samuel Parrales</h1>
		<h2 class="text-secondary text-2xl">Full Stack Development</h2>
		<h3 class="text-xl">Turning your ideas into solutions that make a difference.</h3>
		<div class="text-accent text-3xl flex justify-center gap-2">
			{#each socialNerworks as sn}
				<ButtonNeon target="_blank" href={sn.href}><Icon icon={sn.icon} /></ButtonNeon>
			{/each}
		</div>
	</div>
</header>

<style>
	header {
		background-repeat: no-repeat;
		height: 600px;
		background-size: 200%;
		background-image: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.8) 0%,
				rgba(0, 0, 0, 0) 30%,
				rgba(0, 0, 0, 0.3) 55%,
				rgba(0, 0, 0, 1) 70%
			),
			var(--image-url);
		background-position:
			0,
			5% 0;
		@media (min-width: 512px) {
			background-size: 180%;
			background-position:
				0,
				2% 0;
		}
		@media (min-width: 640px) {
			background-size: 149%;
			background-position:
				0,
				0% 0;
		}
		@media (min-width: 768px) {
			background-size: 110%;
			background-position:
				0,
				0% 0;
		}
		@media (min-width: 1024px) {
			background-size: cover;
			background-image: linear-gradient(
					to right,
					rgba(0, 0, 0, 0.8) 0%,
					rgba(0, 0, 0, 0.1) 30%,
					rgba(0, 0, 0, 0.6) 50%,
					rgba(0, 0, 0, 0.78) 80%
				),
				var(--image-url);
			height: 600px;
		}
	}
	h1,
	h2,
	h3 {
		transition-property: text-shadow;
		transition-duration: 0.3s;
		user-select: none;
	}
	h1:hover {
		text-shadow:
			0 0 5px #004c57,
			/* Brillo más cercano */ 0 0 10px #004c57,
			/* Brillo más tenue */ 0 0 20px #004c57,
			/* Efecto de neón sutil */ 0 0 30px #004c57; /* Efecto de neón más oscuro */
	}
	h2:hover {
		text-shadow:
			0 0 5px #336161,
			/* Brillo más cercano */ 0 0 10px #336161,
			/* Brillo más tenue */ 0 0 20px #336161,
			/* Efecto de neón sutil */ 0 0 30px #336161; /* Efecto de neón más oscuro */
	}
	h3 {
		text-shadow:
			0 0 5px rgba(189, 195, 199, 0.9),
			/* Brillo más claro */ 0 0 10px rgba(189, 195, 199, 0.7),
			/* Brillo más difuso */ 0 0 24px rgba(189, 195, 199, 0.5),
			/* Efecto neón más pronunciado */ 0 0 35px rgba(189, 195, 199, 0.3); /* Efecto neón adicional */
	}

	h3:hover {
		text-shadow:
			0 0 15px rgba(189, 195, 199, 0.9),
			/* Brillo más claro */ 0 0 10px rgba(189, 195, 199, 0.7),
			/* Brillo más difuso */ 0 0 20px rgba(201, 207, 211, 0.568),
			/* Efecto neón más pronunciado */ 0 0 30px rgba(201, 207, 212, 0.323); /* Efecto neón adicional */
	}
</style>
