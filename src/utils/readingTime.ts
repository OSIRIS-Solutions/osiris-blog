const WORDS_PER_MINUTE = 220;

export interface ReadingTime {
	minutes: number;
	words: number;
}

/** Estimate reading time from a Markdown or MDX source during the static build. */
export function getReadingTime(source: string | undefined): ReadingTime {
	const text = (source ?? '')
		// Code blocks are useful content, but their tokens do not map well to prose reading speed.
		.replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, ' ')
		// Keep alt text and captions, but drop the image destination.
		.replace(/!\[([^\]]*)]\(\s*[^)\s]+(?:\s+["']([^"']*)["'])?\s*\)/g, '$1 $2')
		// Keep link labels while dropping destinations.
		.replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
		.replace(/<[^>]+>/g, ' ')
		.replace(/https?:\/\/\S+/g, ' ')
		.replace(/[`*_>#|~=\-]+/g, ' ');

	const words = text.match(/[\p{L}\p{N}]+(?:[’'][\p{L}\p{N}]+)*/gu)?.length ?? 0;

	return {
		minutes: Math.max(1, Math.ceil(words / WORDS_PER_MINUTE)),
		words,
	};
}
