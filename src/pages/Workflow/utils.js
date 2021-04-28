// 判断链路是否是环
export function hasLoop(graph, attributes) {
	const { source, target } = attributes;
	const sourceId = source.id;
	const targetId = target.id;

	if (!sourceId || !targetId) {
		return false;
	}

	let loop = sourceId === targetId;

	if (!loop && graph) {

		const sourceElement = getSourceCell(graph, attributes);
		const targetElement = getTargetCell(graph, attributes);
		const sourceLink = graph.getConnectedLinks(targetElement, { outbound: true });

		if (sourceLink && sourceLink[0]) {
			loop = sourceLink[0].attributes.source.id === targetId;
		}

		// loop = sourceElement.isEmbeddedIn(targetElement) || targetElement.isEmbeddedIn(sourceElement);
	}

	return loop;
}

export function getSourceCell(graph, attributes) {
	const source = attributes.source;
	return (source && source.id && graph && graph.getCell(source.id)) || null;
}

export function getTargetCell(graph, attributes) {
	const target = attributes.target;
	return (target && target.id && graph && graph.getCell(target.id)) || null;
}

// 校验是否重复连线
export function checkIsExistedLink(graph, link) {
	let links = graph.getLinks();
	let count = -1;
	$.each(links, (i, item) => {
		if (item.get("source").id === link.get("source").id && item.get("target").id === link.get("target").id) {
			count++;
		}
	});
	return count > 0;
};
