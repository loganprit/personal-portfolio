export type Profile = {
	name: string;
	role: string;
	location?: string;
	email: string;
	bio: string;
	about: string;
};

export type Tech = { name: string };

export type Experience = {
	company: string;
	role: string;
	start: string;
	end?: string;
	summary?: string;
};

export type Project = {
	title: string;
	description: string;
	tags: string[];
	links: { demo?: string; repo?: string };
	image?: string;
};

export const profile: Profile = {
	name: 'Your Name',
	role: 'Full‑Stack Developer',
	location: 'City, Country',
	email: 'hello@example.com',
	bio: 'I build performant, delightful web apps with TypeScript and Svelte.',
	about:
		'This is a short about paragraph used as placeholder text. Replace with your story, values, and what you enjoy building.'
};

export const tech: Tech[] = [
	{ name: 'TypeScript' },
	{ name: 'SvelteKit' },
	{ name: 'Node.js' },
	{ name: 'Bun' },
	{ name: 'Tailwind CSS' },
	{ name: 'PostgreSQL' },
	{ name: 'Vercel' }
];

export const experience: Experience[] = [
	{
		company: 'Acme Corp',
		role: 'Senior Engineer',
		start: '2023',
		end: '2025',
		summary: 'Led feature delivery and performance initiatives across the web platform.'
	},
	{
		company: 'Globex',
		role: 'Software Engineer',
		start: '2021',
		end: '2023',
		summary: 'Built product experiences end‑to‑end with TypeScript and cloud services.'
	}
];

export const projects: Project[] = [
	{
		title: 'Project One',
		description: 'An example project with a brief description.',
		tags: ['Svelte', 'TypeScript'],
		links: { demo: '#', repo: '#' }
	},
	{
		title: 'Project Two',
		description: 'Another example project showcasing UI patterns.',
		tags: ['SvelteKit', 'Bun'],
		links: { repo: '#' }
	},
	{
		title: 'Project Three',
		description: 'A performant app with minimal dependencies.',
		tags: ['Tailwind', 'Vite'],
		links: { demo: '#' }
	}
];
