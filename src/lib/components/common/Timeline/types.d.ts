import type { TagIcon } from './interfaces';
import type { HTMLAttributes } from 'svelte/elements';
type TagIcons = {
	[key: string]: TagIcon;
};

export type TimeLineProps = HTMLAttributes<HTMLDivElement> & {
	data: TimeLineData[];
	title: string;
};
