/** Keeps Markdown tables semantic while giving them a scrollable visual wrapper. */
export default function remarkResponsiveTables() {
	return (tree) => {
		wrapTables(tree);
	};
}

function wrapTables(node) {
	if (!Array.isArray(node.children)) return;

	for (let index = 0; index < node.children.length; index += 1) {
		const child = node.children[index];

		if (child.type === 'table') {
			node.children[index] = {
				type: 'tableWrapper',
				data: { hName: 'div', hProperties: { className: ['table-scroll'] } },
				children: [child],
			};
			continue;
		}

		wrapTables(child);
	}
}
