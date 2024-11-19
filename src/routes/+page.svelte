<script lang="ts">
	import { tagIcons } from '$lib/components/common/Timeline/data';
	import type { TimeLineData } from '$lib/components/common/Timeline/interfaces';
	import Timeline from '$lib/components/common/Timeline/Timeline.svelte';
	import HomeHeader from '$lib/components/home/HomeHeader.svelte';

	import Projects from '$lib/components/common/Projects/Projects.svelte';
	import { projectsData } from '$lib/data/projectsData';

	const data: TimeLineData[] = [
		{
			job: 'Full Stack Development',
			company: 'J&S Catering Service',
			location: 'Riobamba, Chimborazo, Ecuador',
			description:
				'The development of a catering inventory management system improved efficiency in services and planning processes.',
			start: new Date('2022-05-01T00:00:01'),
			end: new Date('2022-11-01T00:00:01'),
			tags: [
				tagIcons.JavaScript,
				tagIcons.Laravel,
				tagIcons.MariaDB,
				tagIcons.Heroku,
				tagIcons.Bootstrap
			],
			type: 'Freelance'
		},
		{
			job: 'Web Development',
			company: 'Sistemas Génesis',
			location: 'Portoviejo, Manabí, Ecuador',
			type: 'Full-time in-person',
			start: new Date('2022-11-01T00:00:01'),
			end: new Date('2024-11-01T00:00:01'),
			description: `I worked with the <strong>Genesis Web contable</strong>, improving efficiency by optimizing queries, as well as developing sophisticated UIs and new functionalities, such as integration with a fingerprint security system, billing UI, real-time advertising module, agricultural module, among others.`,
			tags: [
				tagIcons.JavaScript,
				tagIcons.MongoDB,
				tagIcons.Expressjs,
				tagIcons.React,
				tagIcons.Nodejs,
				tagIcons.PHP,
				tagIcons.AngularJS,
				tagIcons.SQL_Anywhere,
				tagIcons.Bootstrap,
				tagIcons.Slack
			]
		},
		{
			job: 'Full Stack Development',
			company: 'Lion Tech',
			location: 'Santiago de Chile, Chile',
			type: 'Freelance',
			start: new Date('2024-02-01T00:00:01'),
			end: 'now',
			description:
				'Creation of functionalities and integration of services to the Connect platform, with the purpose of offering more information about electricity consumption to customers.',
			tags: [
				tagIcons.TypeScript,
				tagIcons.Nextjs,
				tagIcons.React,
				tagIcons.PostgreSQL,
				tagIcons.Docker,
				tagIcons.MongoDB,
				tagIcons.Prisma,
				tagIcons.Tailwind,
				tagIcons.Jira,
				tagIcons.Trello
			]
		}
	].reverse();
</script>

<HomeHeader />
<main class="mt-8 px-3">
	<div class="mx-auto max-w-3xl">
		<Timeline id="experience" title="Experience" {data} />
	</div>
</main>
<section class="mt-8 mb-16 px-3">
	<div class="mx-auto max-w-3xl">
		<Projects id="public-projects" title="Public projects" data={projectsData} />
	</div>
</section>

<style>
	
</style>
