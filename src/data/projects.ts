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
		title: 'mattcarr.co',
		status: 'Building',
		summary:
			'This site: a plain static notebook on GitHub Pages, my first agentic-engineering project.',
		featured: true,
	}
];
