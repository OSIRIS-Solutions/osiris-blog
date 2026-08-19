/**
 * Turns a standalone Markdown image with a title into a semantic figure.
 *
 * ![Descriptive alt text](./image.png "Visible caption")
 */
export default function remarkFigureCaptions() {
	return (tree) => {
		walk(tree);
	};
}

function walk(node) {
	if (!Array.isArray(node.children)) return;

	for (let index = 0; index < node.children.length; index += 1) {
		const child = node.children[index];
		const image = standaloneCaptionedImage(child);

		if (image) {
			const caption = image.title;
			image.title = null;

			node.children[index] = {
				type: 'figure',
				data: { hName: 'figure', hProperties: { className: ['article-figure'] } },
				children: [
					image,
					{
						type: 'figcaption',
						data: { hName: 'figcaption' },
						children: [{ type: 'text', value: caption }],
					},
				],
			};
			continue;
		}

		walk(child);
	}
}

function standaloneCaptionedImage(node) {
	if (node.type !== 'paragraph' || node.children?.length !== 1) return null;

	const [image] = node.children;
	return image.type === 'image' && image.title ? image : null;
}
