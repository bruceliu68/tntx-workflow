/*
 * @CreatDate: 2020-07-30 15:11:01
 * @Describe: 决策流绘制基类
 */

import "./index.less";
import { message } from "antd";
import dagre from "dagre";
import graphlib from "graphlib";
import stencilItem from "./stencilItem";
import { hasLoop, checkIsExistedLink } from "./utils";

class Workflow {
	constructor(el, config) {
		this.config = {
			...config
		};
		this.zoom = 1;
		this.firstCopy = true;
		this.init(el);
	}

	init(el) {
		this.graph = new joint.dia.Graph();
		this.keyboard = new joint.ui.Keyboard();
		this.paper = new joint.dia.Paper({
			width: 2000,
			height: 1500,
			model: this.graph,
			interactive: { vertexAdd: this.config.vertexAdd },
			defaultLink: new joint.dia.Link({
				markup: [
					'<path class="connection" stroke="#B2BECD" d="M 0 0 0 0"/>',
					'<path class="marker-source" fill="#B2BECD" stroke="#B2BECD" d="M 0 0 0 0"/>',
					'<path class="marker-target" fill="#B2BECD" stroke="#B2BECD" d="M 0 0 0 0"/>',
					'<path class="connection-wrap" d="M 0 0 0 0"/>',
					'<g class="labels" />',
					'<g class="marker-vertices"/>',
					'<g class="marker-arrowheads"/>',
					'<g class="link-tools" />'
				].join(""),
				attrs: {
					".marker-target": { fill: "#B2BECD", d: "M 10 0 L 0 5 L 10 10 z" }
				},
				bpmnType: "SequenceFlow"
			}),
			defaultRouter: {
				name: this.config.router // orthogonal,manhattan,metro,normal
			}
		}).on({
			"blank:pointerdown": (evt, x, y) => {
				if (this.keyboard.isActive("shift ctrl command", evt)) {
					if (this.selection) {
						this.selection.startSelecting(evt, x, y);
					}
				} else {
					if (this.selection) {
						this.selection.cancelSelection();
					}
					if (!this.firstCopy) {
						window.selectionModels = null;
					}
					this.paperScroller.startPanning(evt, x, y);
				}
			},
			"element:pointerdown": (cellView, evt) => {
				if (this.keyboard.isActive("ctrl meta", evt)) {
					if (this.selection) {
						this.selection.collection.add(cellView.model);
					}
				}
			}
		});
		this.addPaperScroller(el);
		if (this.config.navigation) {
			this.addNavigation(el);
		}
		this.addStencil();
		this.addCommandManager();
		this.addSnaplines();
		this.addClipboard();
		this.addSelection();
		this.paperListener();
		this.keyboardListener();
	}

	setData(data) {
		this.graph.clear();
		this.graph.fromJSON(data);
	}

	paperListener() {
		this.elementClick();
	}

	// 单击节点
	elementClick() {
		this.paper.on("element:pointerclick", (cellView) => {
			this.customHalo(cellView);
		});
	}

	// 校验连线
	validateLink(link) {
		let isLinksSourceTarget = !link.get("source").id || !link.get("target").id;
		let isExisted = checkIsExistedLink(this.graph, link) || link.hasLoop({ deep: true });
		let isLoop = hasLoop(this.graph, link.attributes);
		if (isLinksSourceTarget || isExisted || isLoop) {
			link.remove();
		}
	}

	customHalo(cellView) {
		let halo = new joint.ui.Halo({
			cellView: cellView,
			boxContent: false,
			clearAll: true
		});

		halo.removeHandle("clone");
		halo.removeHandle("resize");
		halo.removeHandle("rotate");
		halo.removeHandle("fork");
		halo.removeHandle("unlink");
		halo.changeHandle("link", { icon: require("./img/link.png") });
		halo.changeHandle("remove", { icon: require("./img/remove.png") });

		halo.on("action:link:add", (link) => {
			this.validateLink(link);
		});
		halo.on("action:remove:pointerup", () => {
			halo.remove();
		});

		halo.render();
	}

	// 对画布实现平移，滚动操作
	addPaperScroller(el) {
		this.paperScroller = new joint.ui.PaperScroller({
			paper: this.paper,
			autoResizePaper: true,
			padding: 0,
			cursor: "pointer"
		});
		el.append(this.paperScroller.render().el);
	}

	// 添加小窗口
	addNavigation(el) {
		this.nav = new joint.ui.Navigator({
			paperScroller: this.paperScroller,
			width: 160,
			height: 120,
			padding: 5,
			zoomOptions: { max: 2, min: 0.2 }
		});
		el.append(this.nav.render().el);
	}

	// 拖拽面板
	addStencil() {
		this.stencil = new joint.ui.Stencil({
			paper: this.paper
		});
		this.config.stencilDom.append(this.stencil.render().el);
		let data = _.cloneDeep(this.config.stencilItem || stencilItem);
		let arr = [];
		data.forEach(item => {
			let obj;
			if (item.type === "circle") {
				delete item.type;
				obj = new joint.shapes.bpmn.Event({ ...item });
			} else if (item.type === "polygon") {
				delete item.type;
				obj = new joint.shapes.erd.Relationship({ ...item });
			} else if (item.type === "rect") {
				delete item.type;
				obj = new joint.shapes.bpmn.Activity({ ...item });
			}
			arr.push(obj);
		});
		this.stencil.load(arr);
	}

	// 操作面板
	addCommandManager() {
		this.commandManager = new joint.dia.CommandManager({
			graph: this.graph,
			cmdBeforeAdd: (cmdName, cell, graph, options) => {
				options = options || {};
				return !options.ignoreCommandManager;
			}
		});
	}

	// 选择插件
	addSelection() {
		this.selection = new joint.ui.Selection({
			paper: this.paper
		});
	}

	// 注册辅助线并开启
	addSnaplines() {
		this.snaplines = new joint.ui.Snaplines({ paper: this.paper });
		this.openSnaplines();
	}

	openSnaplines() {
		this.snaplines.startListening();
	}

	closeSnaplines() {
		this.snaplines.stopListening();
	}

	setSnaplineColor(color) {
		$(".joint-snaplines").find(".snapline").attr("style", `border-color: ${color}`);
	}

	// 添加粘贴板
	addClipboard() {
		this.clipboard = new joint.ui.Clipboard({ useLocalStorage: true });
	}

	// 监听键盘事件
	keyboardListener() {
		this.copyElements = () => {
			const models = this.selection.collection.models;
			if (!models || models.length === 0) return;
			window.selectionModels = models; // 选中对象存在window对象中，供跨应用粘贴
			message.success("复制成功");
		};
		this.pasteElements = () => {
			const models = window.selectionModels;
			if (!models || models.length === 0) return message.warning("请先选中复制节点，再进行粘贴操作");
			if (this.firstCopy) {
				this.paperScroller.scroll(0, 0);
			}
			let cells = [];
			let cellsMap = this.graph.cloneCells(models);
			for (let k in cellsMap) {
				let item = cellsMap[k];
				item.attributes.position.x = item.attributes.position.x + 20;
				item.attributes.position.y = item.attributes.position.y + 20;
				cells.push(item);
			}
			this.selection.cancelSelection();
			this.graph.addCells(cells);
			this.selection.collection.add(cells);
			window.selectionModels = cells;
			this.firstCopy = false;
		};
		this.keyboard.on("ctrl+c meta+c", this.copyElements);
		this.keyboard.on("ctrl+v meta+v", this.pasteElements);
	}

	// 设置线的颜色
	setLineColor(id, color) {
		let links = this.getLinks();
		links.forEach(item => {
			if (id === item.id) {
				item.attr(".connection/stroke", color);
				item.attr(".marker-target/fill", color);
				item.attr(".marker-target/stroke", color);
			}
		});
	}

	// 设置节点border颜色
	setElementsBorderColor(id, color) {
		let elements = this.getElements();
		elements.forEach(item => {
			if (id === item.id) {
				item.attr(".outer/stroke", color);
				item.attr(".body/stroke", color);
			}
		});
	}

	// 获取所有边
	getLinks() {
		return this.graph.getLinks();
	}

	// 获取所有节点
	getElements() {
		return this.graph.getElements();
	}

	// 清空画布
	clear() {
		this.graph.clear();
	}

	// 撤销
	undo() {
		this.commandManager.undo();
	}

	// 重做
	redo() {
		this.commandManager.redo();
	}

	// 打印
	print() {
		this.paper.print();
	}

	// 放大
	zoomIn() {
		this.paperScroller.zoom(0.2, { max: 2 });
	}

	// 缩小
	zoomOut() {
		this.paperScroller.zoom(-0.2, { min: 0.2 });
	}

	// 美化布局
	format(direction) {
		this.paper.freeze();
		joint.layout.DirectedGraph.layout(this.graph, {
			dagre: dagre,
			graphlib: graphlib,
			rankDir: direction,
			rankSep: 80,
			nodeSep: 80,
			edgeSep: 50,
			marginX: 100,
			marginY: 100
		});
		this.paper.unfreeze();
	}

	// 全屏
	toggleFullScreen(screen) {
		if (!screen) {
			// 全屏
			this.config.stencilDom.parentNode.classList.add("tntx-workflow-fullscreen");
		} else {
			// 退出全屏
			this.config.stencilDom.parentNode.classList.remove("tntx-workflow-fullscreen");
		}
	}

	// 销毁
	destroy() {
		this.graph.destroy();
		this.paper.remove();
		this.stencil.remove();
		this.nav.remove();
		this.paperScroller.remove();
		this.commandManager.destroy();
		if (this.selection) {
			this.selection.remove();
		}
		this.snaplines.remove();
		this.clipboard.remove();
		this.keyboard.off("ctrl+c meta+c", this.copyElements);
		this.keyboard.off("ctrl+v meta+v", this.pasteElements);
		window.templateGraph = null;
	}

}

export default Workflow;
