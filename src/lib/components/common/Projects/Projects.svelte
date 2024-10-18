<script lang="ts">
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	import Tag from '../Tag.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { tick } from 'svelte';
	import Icon from '@iconify/svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	export let title;
	export let data;

	let dialogOpen = false,
		currentPrevImg: HTMLImageElement;
</script>

<Card class="bg-background border rounded-lg border-neutral-700">
	<CardHeader class="rounded-lg bg-card">
		<h2 class="mb-1 text-4xl text-primary">{title}</h2>
	</CardHeader>
	<CardContent class="px-4 pt-8 pb-2">
		{#each data as project, index}
			<div class="grid grid-cols-2 gap-4 mb-8">
				<div class="flex flex-col justify-between gap-2 m-2">
					<div class="h-full">
						<h3 class="text-secondary text-2xl">{project.title}</h3>
						<p>{project.description}</p>
						<div class="flex gap-2">
							<Button
								variant="link"
								class="flex items-center gap-1 w-min text-md p-0"
								target="_blank"
								href={project.demo}
							>
								<Icon icon="carbon:link" /> <span class="text-neutral-400 font-alegreya">Demo</span>
							</Button>
							<Button
								variant="link"
								class="flex items-center gap-1 w-min text-md p-0"
								target="_blank"
								href={project.demo}
							>
								<Icon icon="carbon:link" />
								<span class="text-neutral-400 font-alegreya">Repository</span>
							</Button>
						</div>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag}
							<Tag {tag} />
						{/each}
					</div>
				</div>
				<div
					class="overflow-hidden rounded-tl-xl rounded-br-xl shadow-lg shadow-gray-700 h-52"
					role="button"
					tabindex="0"
					on:click={async (e) => {
						dialogOpen = true;
						const htmlImg = e.currentTarget.querySelector('img');
						if (htmlImg instanceof HTMLImageElement) {
							await tick();
							currentPrevImg.src = htmlImg.src;
							currentPrevImg.alt = htmlImg.alt;
						}
					}}
					on:keydown={(e) => {
						if (e.key !== 'Enter' && e.key !== ' ') return;
						e.preventDefault();
						e.currentTarget.click();
					}}
				>
					<img
						class="transition duration-300 hover:scale-125 object-cover h-full"
						height="10"
						src={project.srcImg}
						alt="aa"
					/>
				</div>
			</div>
			{#if index != data.length - 1}
				<Separator class="mb-8" />
			{/if}
		{/each}
	</CardContent>
</Card>
<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Content
		class="border-none bg-transparent h-full min-w-full flex justify-center items-center"
	>
		<img
			class="mx-auto rounded shadow-lg shadow-gray-700"
			bind:this={currentPrevImg}
			alt="no specify"
		/>
	</Dialog.Content>
</Dialog.Root>

<style>
	/* #prueba{
        background: linear-gradient(to bottom left, rgb(33, 39, 45), rgb(15, 23, 28), rgb(13, 17, 22));
    } */
</style>
