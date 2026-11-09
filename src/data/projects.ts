export type ProjectStatus = 'Exploring' | 'Building' | 'Shipped' | 'Paused';

export interface Project {
	title: string;
	status: ProjectStatus;
	summary: string;
	repo?: string; // full URL
	writeup?: string; // e.g. '/writing/my-post/'
	featured?: boolean; // shown under "Current projects" on the home page
}

export const PROJECTS: Project[] = [
	{
		title: 'Emerging Horizons Digest',
		status: 'Building',
		summary: 'An AI digest of the sources I chose: Anthropic, Epoch AI, and The Economist.',
		featured: true,
	},
	{
		title: 'mattcarr.co',
		status: 'Building',
		summary:
			'This site: a plain static notebook on GitHub Pages, my first agentic-engineering project.',
		featured: true,
	},
	{
		title: 'Guitar practice studio',
		status: 'Exploring',
		summary: 'A practice app for lessons, repertoire, and recordings, all in one place.',
		featured: true,
	},
	{
		title: 'AI data centers & the environment',
		status: 'Exploring',
		summary:
			'A data project on what running AI costs the environment, and how well the numbers hold up.',
		featured: true,
	},
];
