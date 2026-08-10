export interface Author {
	id: string;
	name: string;
	role: string;
	bio: string;
	roleEn?: string;
	bioEn?: string;
	github?: string;
	website?: string;
	avatar?: string;
}

export const authors: Author[] = [
	{
		id: 'jkoblitz',
		name: 'Julia Koblitz',
		role: 'Gründerin & Lead Developerin',
		bio: 'Entwickelt OSIRIS und schreibt über offene Forschungsinformation, Produktdesign und die Ideen hinter dem System.',
		roleEn: 'Founder & Lead Developer',
		bioEn: 'Develops OSIRIS and writes about open research information, product design, and the ideas behind the system.',
		github: 'https://github.com/jkoblitz',
	},
	{
		id: 'martinique',
		name: 'Martinique Frentrup',
		role: 'Community Managerin',
		bio: 'Begleitet die OSIRIS-Community und berichtet über Meetings, Veranstaltungen und gemeinsame Entwicklungen.',
		roleEn: 'Community Manager',
		bioEn: 'Supports the OSIRIS community and reports on meetings, events, and collaborative developments.',
	},
];

export function getAuthor(id: string): Author {
	return (
		authors.find((author) => author.id === id) ?? {
			id,
			name: id,
			role: 'Autor:in',
			bio: 'Schreibt im OSIRIS Blog.',
		}
	);
}

export function localizeAuthor(author: Author, language: 'de' | 'en'): Author {
	if (language === 'de') return author;
	return {
		...author,
		role: author.roleEn ?? author.role,
		bio: author.bioEn ?? author.bio,
	};
}

export function getInitials(name: string): string {
	return name
		.split(/\s+/)
		.map((part) => part[0])
		.join('')
		.slice(0, 2)
		.toUpperCase();
}
