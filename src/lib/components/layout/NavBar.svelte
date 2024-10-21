<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import Icon from '@iconify/svelte';
	import Button from '../ui/button/button.svelte';
	import icon from '$lib/assets/icon.webp';

	const menu = [
		{ name: 'Home', href: '#home', icon: 'akar-icons:home', className: 'me-1 mb-0.5 text-xl' },
		{ name: 'Experiencie', href: '#experiencie', icon: 'hugeicons:tie', className: 'text-xl' },
		{ name: 'Projects', href: '#public-projects', icon: 'proicons:lightbulb', className: 'text-xl' }
	];
</script>

<nav
	class="flex justify-center bg-neutral-950/10 items-center py-2 px-4 z-50 fixed w-screen backdrop-blur-sm shadow-md"
>
	<Menubar.Root class="border-none flex justify-between bg-transparent m-0 p-0 w-3/4">
		<div class="w-9">
			<Menubar.Menu>
				<a href="/"><img src={icon} class="w-max" alt="" /></a>
			</Menubar.Menu>
		</div>
		<div class="">
			{#each menu as link}
				<Menubar.Menu>
					<Button
						variant="ghost"
						href={link.href}
						class="rounded-xl text-lg gap-1 p-5 
				transition-all duration-300 hover:bg-neutral-500/20
				"
						><Icon
							class="drop-shadow-sm {link.className}"
							icon={link.icon}
							style="filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 1));"
						/>
						<span>{link.name}</span></Button
					>
				</Menubar.Menu>
			{/each}
		</div>
		<div class="w-9"></div>
	</Menubar.Root>
</nav>

<style>
	span {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
	}
</style>
