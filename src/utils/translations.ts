import type { CollectionEntry } from 'astro:content';

export function getTranslationKey(post: CollectionEntry<'blog'>): string {
	if (post.data.translationKey) return post.data.translationKey;
	if (post.data.language === 'en') return post.id.replace(/(?:_en|-en|en)$/i, '');
	return post.id;
}

export function findTranslation(
	post: CollectionEntry<'blog'>,
	posts: CollectionEntry<'blog'>[],
): CollectionEntry<'blog'> | undefined {
	const targetLanguage = post.data.language === 'de' ? 'en' : 'de';
	const key = getTranslationKey(post);
	return posts.find(
		(candidate) =>
			candidate.data.language === targetLanguage && getTranslationKey(candidate) === key,
	);
}
