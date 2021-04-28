"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasLoop = hasLoop;
exports.getSourceCell = getSourceCell;
exports.getTargetCell = getTargetCell;
exports.checkIsExistedLink = checkIsExistedLink;

// 判断链路是否是环
function hasLoop(graph, attributes) {
  var source = attributes.source,
      target = attributes.target;
  var sourceId = source.id;
  var targetId = target.id;

  if (!sourceId || !targetId) {
    return false;
  }

  var loop = sourceId === targetId;

  if (!loop && graph) {
    var sourceElement = getSourceCell(graph, attributes);
    var targetElement = getTargetCell(graph, attributes);
    var sourceLink = graph.getConnectedLinks(targetElement, {
      outbound: true
    });

    if (sourceLink && sourceLink[0]) {
      loop = sourceLink[0].attributes.source.id === targetId;
    } // loop = sourceElement.isEmbeddedIn(targetElement) || targetElement.isEmbeddedIn(sourceElement);

  }

  return loop;
}

function getSourceCell(graph, attributes) {
  var source = attributes.source;
  return source && source.id && graph && graph.getCell(source.id) || null;
}

function getTargetCell(graph, attributes) {
  var target = attributes.target;
  return target && target.id && graph && graph.getCell(target.id) || null;
} // 校验是否重复连线


function checkIsExistedLink(graph, link) {
  var links = graph.getLinks();
  var count = -1;
  $.each(links, function (i, item) {
    if (item.get("source").id === link.get("source").id && item.get("target").id === link.get("target").id) {
      count++;
    }
  });
  return count > 0;
}

;