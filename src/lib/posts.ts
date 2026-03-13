import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
	const posts = await getCollection('posts', ({ data }) => !data.draft);

	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getFeaturedPosts() {
	const posts = await getPublishedPosts();

	return posts.filter((post) => post.data.featured);
}
