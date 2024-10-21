<script>
	import Icon from '@iconify/svelte';
</script>

<header class="flex justify-center items-center">
	<div></div>
	<div class="text-center p-5">
		<h1 class="text-primary text-6xl">Samuel Parrales</h1>
		<h2 class="text-secondary text-3xl">Full Stack Development</h2>
		<h3 class="text-2xl">Turning your ideas into solutions that make a difference.</h3>
		<div class="text-accent text-3xl flex justify-center gap-2">
			<a class="transition-shadow rounded-md" href="/"><Icon icon="brandico:linkedin-rect" /></a>
			<a class="transition-shadow rounded-md" href="/"><Icon icon="fa:github-square" /></a>
		</div>
	</div>
</header>

<style>
	header {
		background-image: linear-gradient(
				to right,
				rgba(255, 255, 255, 0) 0%,
				rgba(0, 0, 0, 0.7) 35%,
				rgba(0, 0, 0, 0.9) 80%
			),
			url(header4.jpg);
		background-repeat: no-repeat;
		height: 600px;
		background-size: cover;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
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

	a:hover{
		box-shadow: 0 0 3px rgba(255, 255, 255, 0.5), 
              0 0 6px rgba(255, 255, 255, 0.5), 
              0 0 20px rgba(255, 255, 255, 0.6);
	}
</style>
