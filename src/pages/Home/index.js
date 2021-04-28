/*
 * @Author: liubo
 * @CreatDate: 2018-09-30 17:13:02
 * @Describe: 首页
 */

import "./index.less";
import React, { PureComponent } from "react";
import _ from "lodash";
import { Elements } from "./Elements";
import { Toolbar } from "./Toolbar";

class Home extends PureComponent {

	componentDidMount() {
		// 创建数据
		let graph = new joint.dia.Graph();
		// 创建画布
		let paperDom = $(".main-in");
		let paper = new joint.dia.Paper({
			width: 2000,
			height: 1500,
			model: graph,
			gridSize: 10,
			drawGrid: true,
			defaultRouter: {
				name: "normal" // orthogonal,manhattan,metro,normal
			}
		});

		// 创建拖拽画板
		let stencil = new joint.ui.Stencil({
			paper: paper,
			width: 150,
			height: 800
		});
		$(".left-panel").append(stencil.render().el);
		// 画板节点
		let start = new joint.shapes.standard.Circle(Elements.start);
		let model = new joint.shapes.standard.Rectangle(Elements.model);
		let judge = new joint.shapes.standard.Polygon(Elements.judge);
		let end = new joint.shapes.standard.Circle(Elements.end);
		// 加载
		stencil.load([start, model, judge, end]);

		// 对画布实现平移，滚动操作
		let paperScroller = new joint.ui.PaperScroller({
			paper: paper,
			autoResizePaper: true,
			padding: 0,
			cursor: "pointer"
		});
		paperScroller.center();
		paperDom.append(paperScroller.render().el);

		// 导航区域
		let nav = new joint.ui.Navigator({
			paperScroller: paperScroller,
			width: 160,
			height: 120,
			padding: 5,
			zoomOptions: { max: 2, min: 0.2 }
		});
		paperDom.append(nav.render().el);

		// 辅助线
		let snaplines = new joint.ui.Snaplines({ paper: paper });
		snaplines.startListening();

		// 命令面板
		let commandManager = new joint.dia.CommandManager({ graph: graph });

		// 工具栏
		let toolbar = new joint.ui.Toolbar({
			...Toolbar,
			references: {
				paperScroller: paperScroller,
				commandManager: commandManager
			}
		});
		toolbar.on({
			"clear:pointerclick": _.bind(graph.clear, graph),
			"print:pointerclick": _.bind(paper.print, paper)
		});
		paperDom.append(toolbar.render().el);

		// 注册tooltip
		let tooltip = new joint.ui.Tooltip({
			target: "[data-tooltip]",
			direction: "auto",
			padding: 10
		});

		// 事件
		paper.on("cell:pointerclick", (cellView) => {
			if (cellView.model instanceof joint.dia.Link) return;

			let halo = new joint.ui.Halo({ cellView: cellView });
			// 监听连线 - 这里可以判断是否可连线
			halo.on("action:link:add", (link) => {
				if (!link.get("source").id || !link.get("target").id) {
					link.remove();
				} else {
					// 换一个好看的线
					let flow = new joint.shapes.bpmn.Flow({
						source: { id: link.get("source").id },
						target: { id: link.get("target").id }
					});
					flow.attr(".connection/stroke", "#B2BECD");
					flow.attr(".marker-target/fill", "#B2BECD");
					flow.attr(".marker-target/stroke", "#B2BECD");
					link.remove();
					graph.addCell(flow);
				}
			});
			halo.render();
		});

		// 线-配置按钮点击
		paper.on("link:options", (linkView, evt, x, y) => {
			alert("我被你点啦");
		});

	}

	render() {

		return (
			<div className="g-flow">
				<div className="left-panel"></div>
				<div className="main">
					<div className="main-in"></div>
				</div>
			</div>
		);
	}
}

export default Home;
