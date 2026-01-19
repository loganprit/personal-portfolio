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
	name: 'Logan Pritchett',
	role: 'Full-Stack Web Developer',
	location: 'Orange, TX',
	email: 'contact@loganpritchett.me',
	bio: 'Welcome to my portfolio!',
	about:
		'I specialize in building efficient web applications using React, Node.js, and Express.js, with a focus on clean, maintainable code. My chemical engineering background brings unique analytical and problem-solving skills to software development. Currently expanding my expertise in TypeScript, Next.js, and cloud technologies while staying current with industry trends.'
};

export const tech: Tech[] = [
	{ name: 'JavaScript' },
	{ name: 'TypeScript' },
	{ name: 'React' },
	{ name: 'Node.js' },
	{ name: 'Express.js' },
	{ name: 'Next.js' },
	{ name: 'PostgreSQL' },
	{ name: 'Tailwind CSS' },
	{ name: 'Framer Motion' },
	{ name: 'Tanstack Router' },
	{ name: 'Docker' },
	{ name: 'Git' }
];

export const experience: Experience[] = [
	{
		company: 'FloQast',
		role: 'Software Engineer I',
		start: 'April 2025',
		end: 'Present',
		summary: 'Currently working on the Journal Entry product for FloQast.'
	},
	{
		company: 'Chegg Skills',
		role: 'Software Engineer Trainee',
		start: 'October 2023',
		end: 'October 2024',
		summary:
			'Acquired comprehensive knowledge of industry best practices and software development standards, focusing on full-stack JavaScript development, RESTful APIs, algorithms, and data structures.'
	},
	{
		company: 'Valero St. Charles Refinery',
		role: 'Control Systems Engineering Intern',
		start: 'May 2021',
		end: 'August 2021',
		summary:
			'Contributed to optimizing control systems and enhancing operational efficiency at a major refinery. Resolved 1,300+ critical alarm issues across 75,000 DCS blocks and implemented DCS graphics for pH and speed control optimization.'
	},
	{
		company: 'Valero Meraux Refinery',
		role: 'Process Engineering Intern',
		start: 'May 2020',
		end: 'August 2020',
		summary:
			'Led efforts to improve process efficiency and wastewater treatment control through multi-department collaboration. Developed real-time monitoring systems and automated chemical usage tracking.'
	},
	{
		company: 'Energy Institute - University of Louisiana at Lafayette',
		role: 'Research Apprentice',
		start: 'August 2018',
		end: 'May 2022',
		summary:
			'Conducted research in a high-throughput laboratory environment, focusing on bio-oil catalytic conversion studies. Led operation and maintenance of GC/MS and Shimadzu TOC analytical instruments.'
	}
];

export const projects: Project[] = [
	{
		title: 'Portfolio V3',
		description:
			'Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a responsive design with dark mode support, smooth page transitions, and a glass-morphism UI effect.',
		tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
		links: { repo: 'https://github.com/loganprit/personal-portfolio' }
	},
	{
		title: 'WeLoveMovies',
		description:
			'A movie database application designed to help users discover movies, read reviews, and find local theater showtimes. Features include browsing movies currently showing in theaters and exploring detailed movie descriptions.',
		tags: [
			'TypeScript',
			'React',
			'Tailwind CSS',
			'Tanstack Router',
			'Node.js',
			'PostgreSQL',
			'Docker'
		],
		links: {
			demo: 'https://welovemovies-front-end-ribo.onrender.com/',
			repo: 'https://github.com/loganprit/welovemovies'
		}
	},
	{
		title: 'Portfolio V2',
		description:
			'Single-page portfolio built with HTML5 UP\'s Dimension template, featuring a responsive modal-based layout with smooth transitions and dynamic backgrounds. Implemented with SCSS for enhanced styling capabilities.',
		tags: ['HTML', 'SCSS', 'JavaScript', 'jQuery'],
		links: {
			demo: 'https://v2.loganpritchett.me',
			repo: 'https://github.com/loganprit/personal-portfolio/tree/backup/v2'
		}
	},
	{
		title: 'Periodic Tables',
		description:
			'A full-stack restaurant reservation system designed to manage reservations and table assignments for fine dining restaurants. Features include creating, updating and canceling reservations, assigning reservations to tables, and validating reservation times/dates.',
		tags: ['JavaScript', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'Knex.js'],
		links: {
			demo: 'https://restaurant-reservation-frontend-v5ci.onrender.com/',
			repo: 'https://github.com/loganprit/periodic-tables'
		}
	},
	{
		title: 'GrubDash',
		description:
			'A restaurant management system built with JavaScript, Node.js, Express.js, and PostgreSQL. Features include creating, updating and deleting menu items, as well as searching for items by name.',
		tags: ['JavaScript', 'React', 'Node.js', 'Express.js'],
		links: {
			demo: 'https://grubdash-frontend-ky4l.onrender.com',
			repo: 'https://github.com/loganprit/grubdash'
		}
	},
	{
		title: 'Decoder Ring',
		description:
			'A comprehensive encryption/decryption web application featuring multiple algorithms including Caesar Shift, Polybius Square, and Substitution Cipher. Built with a clean, intuitive interface for encoding and decoding messages in real-time.',
		tags: ['JavaScript', 'HTML5', 'Node.js', 'Bootstrap'],
		links: {
			demo: 'https://loganprit.github.io/decoder-ring/',
			repo: 'https://github.com/loganprit/decoder-ring'
		}
	},
	{
		title: 'Recipe Tracker Application',
		description:
			'A digital culinary companion that transforms recipe management from scattered notes to an organized collection. Built with React for seamless user interaction and comprehensive ingredient and instruction tracking.',
		tags: ['React', 'HTML5', 'CSS', 'Bootstrap'],
		links: {
			demo: 'https://recipe-app-yab9.onrender.com/',
			repo: 'https://github.com/loganprit/recipe-app'
		}
	},
	{
		title: 'Flashcard-o-matic',
		description:
			'A comprehensive study application designed to enhance learning through customizable flashcard decks. Features a clean, intuitive interface for creating, editing, and managing decks and cards with a robust REST API.',
		tags: ['React', 'Express.js', 'Knex.js', 'JavaScript', 'HTML5', 'CSS'],
		links: { repo: 'https://github.com/loganprit/flashcard-o-matic' }
	},
	{
		title: 'Thinkfulbnb',
		description:
			'A mock vacation rental website inspired by platforms like Airbnb and OkCupid, showcasing responsive design that adapts seamlessly from mobile to desktop views.',
		tags: ['HTML5', 'CSS', 'Flexbox'],
		links: {
			demo: 'https://loganprit.github.io/thinkfulbnb/',
			repo: 'https://github.com/loganprit/thinkfulbnb'
		}
	},
	{
		title: 'Local Library',
		description:
			'A digital hub for managing and tracking community library resources. Features a comprehensive dashboard showing library stats, account management, and detailed book tracking capabilities.',
		tags: ['JavaScript', 'Node.js', 'Bootstrap', 'Express.js'],
		links: { repo: 'https://github.com/loganprit/local-library-project' }
	},
	{
		title: 'Portfolio V1',
		description:
			'A static portfolio website built with HTML5, CSS, and JavaScript. Features a clean, intuitive interface with a focus on showcasing an about me section and contact information.',
		tags: ['HTML5', 'CSS', 'JavaScript'],
		links: {
			demo: 'https://v1.loganpritchett.me',
			repo: 'https://github.com/loganprit/personal-portfolio/tree/backup/v1'
		}
	}
];
