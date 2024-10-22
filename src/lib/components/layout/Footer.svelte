<script>
	import Icon from '@iconify/svelte';
	import Button from '../ui/button/button.svelte';
	import ButtonNeon from '../common/buttons/ButtonNeon.svelte';
	import { socialNerworks } from '$lib/data/socialNetworks';
	import { menus } from '$lib/data/menus';
	import { projectsData } from '$lib/data/projectsData';
</script>

<footer class="mt-8 bg-card">
	<div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-6 px-12 text-base">
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
			<nav class="flex flex-col justify-start ">
				{#each projectsData as project}
					<Button variant="link" target='_blank' href={project.demo || project.repository} class="w-min p-0 text-neutral-400 text-base"
						>{project.title}</Button
					>
				{/each}
			</nav>
		</div>
		<div>
			<h3 class="text-xl">Explore</h3>
			<nav class="flex flex-col justify-start">
				{#each menus as link}
					<Button variant="link" href={link.href} class="w-min p-0 text-neutral-400 text-base"
						>{link.name}</Button
					>
				{/each}
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
			<div class="flex justify-start gap-2 text-3xl w-full mt-2">
				{#each socialNerworks as sn}
					<ButtonNeon target="_blank" href={sn.href}><Icon icon={sn.icon} /></ButtonNeon>
				{/each}
			</div>
		</div>
	</div>
	<div class="text-center py-2 bg-neutral-800"><p>Copyright © Samuel Parrales</p></div>
</footer>
