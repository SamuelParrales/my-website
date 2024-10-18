
export interface TagIcon {
	name: string;
	icon: string;
	class: string;
}
export interface TimeLineData {
	job: string;
	company: string;
	location: string;
	type: string;
	start: date;
	end: date | 'now';
    description: string,
    tags: TagIcon[]
}
