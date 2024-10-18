<script>
	import Icon from '@iconify/svelte';
	import Tag from '../Tag.svelte';

	export let element;
</script>

<div class="mb-8">
	<div class="flex gap-2 -ml-4">
		<span class="bg-primary rounded-full p-1"
			><Icon class="text-primary-foreground text-2xl" icon="game-icons:archery-target" /></span
		>
		<h3 class="text-secondary text-2xl">{element.job}</h3>
	</div>
	<div class="border-l-2 px-6 border-neutral-700">
		<p class="leading-5 text-xl -mt-1 text-neutral-400 font-alegreya">
			{element.company} · {element.type}
		</p>
		<p class="leading-5 text-neutral-400 font-alegreya">
			<time datetime={element.start.toLocaleDateString('fr-CA')}
				>{element.start.toLocaleString('en-US', { month: 'short', year: 'numeric' })}</time
			>
			-
			<time datetime={element.end=='now' ? new Date().toLocaleDateString('fr-CA') : element.end.toLocaleDateString('fr-CA')}
				>{element.end=='now'? 'Present': element.end.toLocaleString('en-US', { month: 'short', year: 'numeric' })}</time
			>
		</p>
		<p class="leading-5 mb-4 text-neutral-400 font-alegreya">
			{element.location}
		</p>
		<p class="mb-4">
			{@html element.description}
		</p>
		<div class="flex flex-wrap gap-2">
			{#each element.tags as tag}
				<Tag {tag} />
			{/each}
		</div>
	</div>
</div>
