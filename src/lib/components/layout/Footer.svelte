<script>
	import Icon from '@iconify/svelte';
	import Button from '../ui/button/button.svelte';
</script>

<footer class="mt-8 bg-card">
	<div class="grid grid-cols-4 gap-8 py-6 px-12 text-base">
		<div>
			<h3 class="text-xl">About me</h3>
			<p class="text-neutral-400">
				I'm a passionate developer focused on creating innovative and efficient solutions. With
				experience in web development and modern technologies, I specialize in designing intuitive
				interfaces and optimizing application performance
			</p>
		</div>
		<div>
			<h3 class="text-xl">Projects</h3>
			<nav class="flex flex-col justify-start">
				<Button variant="link" class="w-min p-0 text-neutral-400 text-base"
					>SQL from Spreadsheet</Button
				>
				<Button variant="link" class="w-min p-0 text-neutral-400 text-base">News App</Button>
				<Button variant="link" class="w-min p-0 text-neutral-400 text-base">Digimon App</Button>
				<Button variant="link" class="w-min p-0 text-neutral-400 text-base"
					>Nobody answers you no App</Button
				>
			</nav>
		</div>
		<div>
			<h3 class="text-xl">Explore</h3>
			<nav class="flex flex-col justify-start">
				<Button variant="link" class="w-min p-0 text-neutral-400 text-base">Home</Button>
				<Button variant="link" class="w-min p-0 text-neutral-400 text-base">Experience</Button>
				<Button variant="link" class="w-min p-0 text-neutral-400 text-base">Public projects</Button>
			</nav>
		</div>

		<div>
			<h3 class="text-xl">Contact</h3>
			<ul class="flex flex-col text-neutral-400">
				<li class="flex items-center gap-2 my-2">
					<Icon icon="carbon:home" /> <span>Montecristi, Manabí, Ecuador</span>
				</li>
				<li class="flex items-center gap-2">
					<Icon icon="carbon:email" />
					<a href="mailto: samuel.parrales@outlook.com">samuel.parrales@outlook.com</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="text-center py-2 bg-neutral-800"><p>Copyright © Samuel Parrales</p></div>
</footer>
