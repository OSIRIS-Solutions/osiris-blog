export interface Author {
	id: string;
	name: string;
	role: string;
	bio: string;
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
		github: 'https://github.com/jkoblitz',
	},
	{
		id: 'martinique',
		name: 'Martinique Frentrup',
		role: 'Community Managerin',
		bio: 'Begleitet die OSIRIS-Community und berichtet über Meetings, Veranstaltungen und gemeinsame Entwicklungen.',
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

export function getInitials(name: string): string {
	return name
		.split(/\s+/)
		.map((part) => part[0])
		.join('')
		.slice(0, 2)
		.toUpperCase();
}
