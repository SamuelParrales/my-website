<script lang="ts">
	import Particles, { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	import { loadSlim } from '@tsparticles/slim';

	let ParticlesComponent: typeof Particles;

	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		ParticlesComponent = module.default;
	});

	let onParticlesLoaded = (event: CustomEvent<{ container: any }>) => {
		const particlesContainer = event.detail.container;
	};

	void particlesInit(async (engine) => {
		// call this once per app
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(main);
		await loadSlim(engine);
	});
</script>

<svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	options={{
		particles: {
			color: {
				value: '#007281'
			},
			links: {
				enable: true,
				color: '#66B2B2'
			},
			move: {
				enable: true
			},
			number: {
				value: 16
			}
		}
	}}
	on:particlesLoaded={onParticlesLoaded}
/>
