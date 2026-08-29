export type Language = 'de' | 'en';

export const ui = {
	de: {
		skipToContent: 'Zum Inhalt springen',
		mainNavigation: 'Hauptnavigation',
		footerNavigation: 'Fußnavigation',
		homeLabel: 'OSIRIS Blog – Startseite',
		posts: 'Beiträge',
		authors: 'Autor:innen',
		allPosts: 'Alle Beiträge',
		readMore: 'Weiterlesen',
		by: 'Von',
		updated: 'Aktualisiert am',
		writtenBy: 'Geschrieben von',
		perspectives: 'Perspektiven',
		authorsHeadline: 'Die Menschen hinter dem Blog.',
		allAuthors: 'Alle Autor:innen',
		postsBy: 'Beiträge von',
		post: 'Beitrag',
		postsPlural: 'Beiträge',
		postsWithTag: 'Beiträge mit dem Tag',
		tagDescription: 'Beiträge zum Thema {tag} im OSIRIS Blog.',
		filterLabel: 'Beiträge nach Tag entdecken',
		allPostsLabel: 'Alle Beiträge',
		showMoreTags: 'Weitere Tags anzeigen',
		showFewerTags: 'Weniger Tags anzeigen',
		eyebrow: 'OSIRIS Blog',
		headline: 'Neues, Ideen|und Einblicke.',
		intro:
			'Geschichten aus der Entwicklung, Updates aus der Community und Gedanken zu offener Forschungsinformation.',
		footerCopy: 'Neuigkeiten aus dem offenen OSIRIS-Ökosystem.',
		languageSwitch: 'Sprache auswählen',
		readArticle: 'lesen',
		readingTime: (minutes: number) => `ca. ${minutes} Min. Lesezeit`,
		imprint: 'Impressum',
	},
	en: {
		skipToContent: 'Skip to content',
		mainNavigation: 'Main navigation',
		footerNavigation: 'Footer navigation',
		homeLabel: 'OSIRIS Blog – Home',
		posts: 'Posts',
		authors: 'Authors',
		allPosts: 'All posts',
		readMore: 'Read more',
		by: 'By',
		updated: 'Updated on',
		writtenBy: 'Written by',
		perspectives: 'Perspectives',
		authorsHeadline: 'The people behind the blog.',
		allAuthors: 'All authors',
		postsBy: 'Posts by',
		post: 'post',
		postsPlural: 'posts',
		postsWithTag: 'Posts tagged',
		tagDescription: 'Posts about {tag} on the OSIRIS Blog.',
		filterLabel: 'Explore posts by tag',
		allPostsLabel: 'All posts',
		showMoreTags: 'Show more tags',
		showFewerTags: 'Show fewer tags',
		eyebrow: 'OSIRIS Blog',
		headline: 'News, ideas|and insights.',
		intro:
			'Stories from development, updates from the community, and thoughts on open research information.',
		footerCopy: 'News from the open OSIRIS ecosystem.',
		languageSwitch: 'Choose language',
		readArticle: 'read',
		readingTime: (minutes: number) => `~${minutes} min read`,
		imprint: 'Imprint',
	},
} as const;

export function getUi(language: Language) {
	return ui[language];
}

export function homePath(language: Language) {
	return language === 'de' ? '/' : '/en/';
}

export function authorsPath(language: Language, authorId?: string) {
	const base = language === 'de' ? '/autorinnen/' : '/en/authors/';
	return authorId ? `${base}${authorId}/` : base;
}

export function tagsPath(language: Language, tagSlug: string) {
	return language === 'de' ? `/tags/${tagSlug}/` : `/en/tags/${tagSlug}/`;
}

export function rssPath(language: Language) {
	return language === 'de' ? '/rss.xml' : '/en/rss.xml';
}

export function imprintPath(language: Language) {
	return language === 'de' ? '/impressum/' : '/en/imprint/';
}
