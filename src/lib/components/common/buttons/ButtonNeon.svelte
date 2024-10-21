<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	type $$Props = HTMLAnchorAttributes;

	export let className: string | undefined = '';
	export let href: string | null = '';
</script>

<a class="transition-shadow rounded-md {className}" {href} {...$$restProps}><slot></slot></a>

<style>
	a:hover {
		box-shadow:
			0 0 3px rgba(255, 255, 255, 0.5),
			0 0 6px rgba(255, 255, 255, 0.5),
			0 0 20px rgba(255, 255, 255, 0.6);
	}
</style>
