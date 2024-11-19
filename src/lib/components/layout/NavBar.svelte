<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import * as Sheet from '$lib/components/ui/sheet';
	import Icon from '@iconify/svelte';
	import Button from '../ui/button/button.svelte';
	import iconWeb from '$lib/assets/icon-home.webp';
	import { base } from '$app/paths'
	import { menus } from '$lib/data/menus';
</script>

<nav
	class="flex justify-center bg-neutral-950/20 items-center py-2 px-4 z-50 fixed w-screen backdrop-blur-sm shadow-md"
>
	<Menubar.Root class="border-none flex justify-between bg-transparent m-0 p-0 w-10/12 md:w-3/4">
		<div class="w-9">
			<Menubar.Menu>
				<a href={base}><img src={iconWeb} class="w-max" alt="" /></a>
			</Menubar.Menu>
		</div>
		<div class="hidden md:block">
			{#each menus as link}
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
		<div class="w-9 hidden md:block"></div>

		<div class="md:hidden">
			<Sheet.Root>
				<Sheet.Trigger class="flex justify-center items-center"
					><Icon class="text-3xl" icon="solar:hamburger-menu-linear" /></Sheet.Trigger
				>
				<Sheet.Content class="flex justify-center items-center flex-col bg-neutral-950/20">
					{#each menus as link}
						<Button
							variant="ghost"
							href={link.href}
							class="rounded-xl text-lg gap-1 p-5 w-full
									transition-all duration-300 hover:bg-neutral-500/20
								"
							><Icon
								class={link.className}
								icon={link.icon}
								style="filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 1));"
							/>
							<span>{link.name}</span></Button
						>
					{/each}
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</Menubar.Root>
</nav>

<style>
	span {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
	}
</style>
