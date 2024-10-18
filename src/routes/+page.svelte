<script lang="ts">
	import Projects from '$lib/components/common/Projects/Projects.svelte';
	import { tagIcons } from '$lib/components/common/Timeline/data';
	import type { TimeLineData } from '$lib/components/common/Timeline/interfaces';
	import Timeline from '$lib/components/common/Timeline/Timeline.svelte';
	import HomeHeader from '$lib/components/home/HomeHeader.svelte';
	import app1 from '$lib/assets/apps/app1.webp';
	import app2 from '$lib/assets/apps/app2.webp';
	import app3 from '$lib/assets/apps/app3.webp';
	import app4 from '$lib/assets/apps/app4.webp';

	const data: TimeLineData[] = [
		{
			job: 'Full Stack Development',
			company: 'J&S Catering Service',
			location: 'Riobamba, Chimborazo, Ecuador',
			description:
				'The development of a catering inventory management system improved efficiency in services and planning processes.',
			start: new Date('2022-04'),
			end: new Date('2022-12'),
			tags: [tagIcons.JavaScript, tagIcons.Laravel, tagIcons.MariaDB, tagIcons.Bootstrap],
			type: 'Freelance'
		},
		{
			job: 'Web Development',
			company: 'Sistemas Génesis',
			location: 'Portoviejo, Manabí, Ecuador',
			type: 'Full-time in-person',
			start: new Date('2022-12'),
			end: new Date('2024-11'),
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
			start: new Date('2024-02'),
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
	];

	const projectsData = [
		{
			title: 'SQL from Spreadsheet',
			description: 'Transform your xlsx to insert or update sql.',
			tags: [
				tagIcons.TypeScript,
				tagIcons.React,
				tagIcons.Vite,
				tagIcons.Tailwind,
				tagIcons.Shadcn
			],
			srcImg: app1,
			demo: 'https://github.com/SamuelParrales/app-nobody-answers-you-no'
		},
		{
			title: 'News App',
			description: 'View news in different languages ​​and countries.',
			tags: [tagIcons.JavaScript, tagIcons.React, tagIcons.Vite, tagIcons.SCSS],
			srcImg: app2,
			demo: 'https://github.com/SamuelParrales/app-nobody-answers-you-no'
		},
		{
			title: 'Digimon App',
			description: 'More than 1000 digimon available.',
			tags: [tagIcons.JavaScript, tagIcons.React, tagIcons.Vite, tagIcons.SCSS],
			srcImg: app3,
			demo: ''
		},
		{
			title: 'Nobody answers you no App',
			description: 'With this app you can have a partner.',
			tags: [tagIcons.JavaScript, tagIcons.HTML, tagIcons.CSS],
			srcImg: app4,
			demo: 'https://github.com/SamuelParrales/app-nobody-answers-you-no'
		}
	];
</script>

<HomeHeader />
<main class="mt-8">
	<div class="mx-auto max-w-3xl">
		<Timeline title="Expecience" {data} />
	</div>
</main>
<section class="mt-8">
	<div class="mx-auto max-w-3xl">
		<Projects title="Public projects" data={projectsData} />
	</div>
</section>
<footer class="mt-8"></footer>
<section></section>
