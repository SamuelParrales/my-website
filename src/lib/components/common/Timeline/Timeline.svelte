<script lang="ts">
	export let title = 'none';
	import Card from '../../ui/card/card.svelte';
	import CardHeader from '../../ui/card/card-header.svelte';
	import CardContent from '../../ui/card/card-content.svelte';
	import TimelineElement from './TimelineElement.svelte';
	import type { TimeLineData } from './interfaces';
	export let data: TimeLineData[] = [];

</script>

<Card class="bg-background border rounded-lg border-neutral-700">
	<CardHeader class="rounded-lg bg-card">
		<h2 class="mb-1 text-4xl text-primary transition-all duration-300">{title}</h2>
	</CardHeader>
	<CardContent class="px-8 pt-8 pb-2">
		{#each data as d}
			<TimelineElement element={d} />
		{/each}
	</CardContent>
</Card>
