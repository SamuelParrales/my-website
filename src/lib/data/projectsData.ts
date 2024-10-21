import { tagIcons } from '$lib/components/common/Timeline/data';
import app1 from '$lib/assets/apps/app1.webp';
import app2 from '$lib/assets/apps/app2.webp';
import app3 from '$lib/assets/apps/app3.webp';
import app4 from '$lib/assets/apps/app4.webp';
export const projectsData = [
	{
		id: 'sql-from-spreadsheet',
		title: 'SQL from Spreadsheet',
		description: 'Transform your xlsx to insert or update sql.',
		tags: [tagIcons.TypeScript, tagIcons.React, tagIcons.Vite, tagIcons.Tailwind, tagIcons.Shadcn],
		srcImg: app1,
		demo: 'https://samuelparrales.github.io/sql-query-from-spreadsheet/',
		repository: 'https://github.com/SamuelParrales/sql-query-from-spreadsheet'
	},
	{
		id: 'news-app',
		title: 'News App',
		description: 'View news in different languages and countries.',
		tags: [tagIcons.JavaScript, tagIcons.React, tagIcons.Redux, tagIcons.Vite, tagIcons.SCSS],
		srcImg: app2,
		demo: 'https://samuelparrales.github.io/react-news-app/',
		repository: 'https://github.com/SamuelParrales/react-news-app'
	},
	{
		id: 'digimon-app',
		title: 'Digimon App',
		description: 'More than 1000 digimon available.',
		tags: [tagIcons.JavaScript, tagIcons.React, tagIcons.Redux, tagIcons.Vite, tagIcons.SCSS],
		srcImg: app3,
		demo: 'https://samuelparrales.github.io/react-digimon-app/',
		repository: 'https://github.com/SamuelParrales/react-digimon-app'
	},
	{
		id: 'nobody-answers-you-no-app',
		title: 'Nobody answers you no App',
		description: 'With this app you can have a partner.',
		tags: [tagIcons.JavaScript, tagIcons.HTML, tagIcons.CSS],
		srcImg: app4,
		demo: 'https://samuelparrales.github.io/app-nobody-answers-you-no/',
		repository: 'https://github.com/SamuelParrales/app-nobody-answers-you-no',
		example:
			'https://samuelparrales.github.io/app-nobody-answers-you-no/dialog-box.html?question=will+you+marry+me%3F&answer=Ok%2C+we%27re+going+to+have+12+kids.'
	}
];
