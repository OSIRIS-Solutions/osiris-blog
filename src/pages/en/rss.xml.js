import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE } from '../../consts';
import { getUi } from '../../i18n/ui';

export async function GET(context) {
	const posts = (await getCollection('blog', ({ data }) => !data.draft && data.language === 'en')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
	return rss({
		title: SITE_TITLE,
		description: getUi('en').intro,
		site: context.site,
		customData: '<language>en</language>',
		items: posts.map((post) => ({ ...post.data, link: `/blog/${post.id}/` })),
	});
}
