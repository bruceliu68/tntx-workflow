/*
 * @Author: liubo 
 * @CreatDate: 2020-01-10 10:15:30 
 * @Describe: flowChart
 */

import React, { PureComponent } from "react";
import "./index.less";
import WorkflowEditer from "./WorkflowEditer";

class FlowChart extends PureComponent {

	state = {
		initData: {
			nodes: [
				{
					id: "0001",
					size: { width: 100, height: 30 },
					position: { x: 100, y: 250 },
					type: "policy",
					content: "节点1",
					selected: false, // 节点选中状态
				},
				{
					id: "0002",
					size: { width: 100, height: 30 },
					position: { x: 300, y: 300 },
					content: "节点2",
					type: "formula",
					selected: false, // 节点选中状态
				},
				{
					id: "0003",
					size: { width: 100, height: 30 },
					position: { x: 300, y: 100 },
					content: "节点3",
					type: "formula",
					selected: false, // 节点选中状态
				}
			],
			links: [
				{
					source: "0001", // 源节点
					target: "0002", // 目标节点
					type: "line", // 直线：line，曲线：curve，贝塞尔曲线：besselcurve
					displacement: 30, // 源节点与目标节点中心点的偏移量
					content: "线", // string or html 内容
					attrs: { // 样式
						fill: "#f00"
					}
				},
				{
					source: "0001", // 源节点
					target: "0003", // 目标节点
					type: "line", // 直线：line，曲线：curve，贝塞尔曲线：besselcurve
					displacement: 30, // 源节点与目标节点中心点的偏移量
					content: "线", // string or html 内容
					attrs: { // 样式
						fill: "#f00"
					}
				}
			]
		}
	};

	// 编辑器实例
	editor = {};

	componentDidMount() {
		const { initData } = this.state;

		const templates = this.registerTemplate();
		this.editor = new WorkflowEditer({
			dom: this.editorRef,
			templates
		});
		this.editor.setInitData(initData);
		console.log(this.editor);
	}

	// 注册模板节点
	registerTemplate = () => {
		let templates = [];
		templates.push({
			type: "policy",
			dom: this.policyRef
		});
		templates.push({
			type: "formula",
			dom: this.formulaRef
		});
		return templates;
	}

	// 销毁
	componentWillUnmount() {
		this.editor.destroy();
	}

	render() {
		return (
			<div className="lb-flow-chart">
				<div
					className="flow-chart"
					ref={ref => this.editorRef = ref}
				>
				</div>
				<div className="leftbar">
					<div className="item" data-type="policy" ref={ref => this.policyRef = ref}>
						<span className="dot">策</span>
						<span className="ellipsis">策略集</span>
					</div>
					<div className="item" data-type="formula" ref={ref => this.formulaRef = ref}>
						<span className="dot">算</span>
						<span className="ellipsis">计算公式</span>
					</div>
				</div>
			</div>
		);
	}
}

export default FlowChart;

