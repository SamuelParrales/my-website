<script lang="ts">
	import Card from '../../ui/card/card.svelte';
	import CardHeader from '../../ui/card/card-header.svelte';
	import CardContent from '../../ui/card/card-content.svelte';
	import TimelineElement from './TimelineElement.svelte';
	import type { TimeLineData } from './interfaces';

	import type { TimeLineProps } from './types';
	type $$Props = TimeLineProps;
	export let data: TimeLineData[] = [];
	export let title = 'none';
	export let className = '';
</script>

<Card class="bg-background border rounded-lg border-neutral-700 border-animation {className}" {...$$restProps}>
	<CardHeader class="rounded-lg bg-card w-full">
		<h2 class="mb-1 text-4xl text-primary transition-all duration-300">{title}</h2>
	</CardHeader>
	<CardContent class="px-8 pt-8 pb-2">
		{#each data as d}
			<TimelineElement element={d} />
		{/each}
	</CardContent>
</Card>
