import { getCollection } from 'astro:content';

/** Published posts, newest first. Drafts show only in `npm run dev`. */
export async function getPosts() {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const postUrl = (id: string) => `/writing/${id}/`;

/** "08 NOV 2026" */
export const longDate = (d: Date) =>
	d
		.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' })
		.toUpperCase();

/** "Nov 08" */
export const shortDate = (d: Date) =>
	d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', timeZone: 'UTC' });
