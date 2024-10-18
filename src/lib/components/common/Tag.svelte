<script>
	import Icon from '@iconify/svelte';
	export let tag;
</script>

<div
	class="tag flex items-center p-2 gap-2 min-w-max rounded-md select-none
    bg-gradient-to-bl from-gray-800 to-neutral-900
    transition-opacity opacity-85 hover:opacity-100
    "
>
	<Icon class={`text-accent ${tag.class}`} icon={tag.icon} /><span
		class="text-neutral-300 font-alegreya">{tag.name}</span
	>
</div>
