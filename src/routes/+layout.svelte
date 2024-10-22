<script lang="ts">
	import '../app.css';

	import Footer from '$lib/components/layout/Footer.svelte';
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import MainParticles from '$lib/components/common/MainParticles.svelte';
	
</script>

<!-- <MainParticles/> -->

<NavBar />
<slot></slot>
<Footer />
