/*
 * @Author: liubo 
 * @CreatDate: 2020-01-10 10:15:30 
 * @Describe: flowChart
 */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./index.less";
import { jsPlumb } from "jsplumb";

class FlowChart extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {
		config: {
			Anchor: ["Right", "Left"],
			//锚点位置，如left，top，bottom等；对任何没有声明描点的Endpoint设置锚点，
			//用于source或target节点
			//设置为数组可以指定锚点的位置
			Anchors: ["Right", "Left"],  //连线的source和target Anchor
			ConnectionsDetachable: false, //连线是否可用鼠标分离
			ConnectionOverlays: [  //连线的叠加组件，如箭头、标签
				//叠加组件-箭头参数设置
				["Arrow", {
					location: 1,
					visible: true,
					width: 11,
					length: 11,
					id: "ARROW",
					events: {
						click: function () {
						}
					}
				}],
				//叠加组件-标签参数设置
				["Label", {
					location: 0.1,
					cssClass: "aLabel", //hover时label的样式名
					events: {
						click: info => {
							console.log(info);
						}
					},
					visible: true
				}]
			],
			Connector: "Straight",
			//连线的类型，有直线（Sright），有流程图(Flowchart)、贝塞尔曲线（Bezier)，State machine（状态机）
			Container: "module",
			//父级元素id；假如页面元素所在上层不同，最外层父级一定要设置
			DoNotThrowErrors: false,
			//如果请求不存在的Anchor、Endpoint或Connector，是否抛异常
			DragOptions: {},//用于配置拖拽元素的参数
			DropOptions: {},//用于配置元素的drop行为的参数
			Endpoint: "Dot", //端点（锚点）的样式声明
			Endpoints: [null, null],
			//用jsPlumb.connect创建连接时，source端点和target端点的样式设置
			EndpointOverlays: [], //端点的叠加物
			EndpointStyle: { fill: 'transparent', stroke: '#1565C0', radius: 4, strokeWidth: 1 }, //端点的默认样式
			EndpointStyles: [null, null], //连线的source和target端点的样式
			EndpointHoverStyle: { fill: '#1565C0', stroke: '#1565C0', radius: 4, strokeWidth: 1 }, //端点hover时的样式
			EndpointHoverStyles: [null, null], //连线的source和target端点hover时的样式
			HoverPaintStyle: { stroke: '#1565C0', strokeWidth: 3 }, //连线hover时的样式
			LabelStyle: { color: "black" }, //标签的默认样式，用css写法。
			LogEnabled: false, //是否开启jsPlumb内部日志
			Overlays: [], //连线和端点的叠加物
			MaxConnections: 10, //端点支持的最大连接数
			PaintStyle: { stroke: '#1565C0', strokeWidth: 1, joinstyle: 'round' }, //连线样式
			ReattachConnections: true, //是否重新连接使用鼠标分离的线?
			RenderMode: "svg", //默认渲染模式
			Scope: "jsPlumb_DefaultScope", //范围，具有相同scope的点才可
			reattach: true,
		}
	};

	componentDidMount() {
		jsPlumb.ready(this.init);
	}

	init = () => {
		let { config } = this.state;
		const { initData } = this.props;

		this.jsPlumbObj = jsPlumb.getInstance(); // 实例化jsPlumb
		this.jsPlumbObj.setContainer('diagramContainer');
		this.jsPlumbObj.importDefaults(config);
		this.jsPlumbObj.bind('beforeDrop', (connInfo) => {
			// 连线校验 不允许自己连接自己
			// 不允许 一个节点 连接相同锚点
			let isSame = true
			if (connInfo.sourceId === connInfo.targetId) {
				isSame = false
			}
			const uuid = [connInfo.sourceId, connInfo.targetId]
			if (connInfo.dropEndpoint.connections.length > 0) {
				connInfo.dropEndpoint.connections.map((item) => {
					const itemUuid = [item.sourceId, item.targetId]
					if (uuid.sort().toString() === itemUuid.sort().toString()) {
						isSame = false
					}
				})
			}
			return isSame
		});
		if (initData && initData.nodes.length > 0) {
			initData.nodes.map((item) => {
				// 设置节点
				this.setNode(item);
			})
		}
		if (initData && initData.links.length > 0) {
			initData.links.map((item) => {
				// 根据 uuid设置连线
				const connection = this.jsPlumbObj.connect({
					uuids: [item.source, item.target],
				})
				// 连线上label设置
				// if (!item.label) {
				// 	connection.getOverlay("label").canvas.hidden = true // 隐藏label
				// } else {
				// 	connection.getOverlay("label").canvas.className = "jtk-overlay edge-label" // label设置样式
				// 	connection.getOverlay("label").setLabel(item.label)
				// }
			})
		}
		this.dragContent();
	}

	// 设置节点
	setNode = (item) => {
		const { config } = this.state;
		let jsPlumbObj = this.jsPlumbObj;
		// 增加锚点
		const node = document.getElementById(item.id)
		jsPlumbObj.addEndpoint(node, {
			anchors: ['Right'],
			uuid: item.id + '-right'
		}, config);
		jsPlumbObj.addEndpoint(node, {
			anchors: ['Left'],
			location: 1,
			uuid: item.id + '-left'
		}, config);
		jsPlumbObj.addEndpoint(node, {
			anchors: ['Top'],
			uuid: item.id + '-top'
		}, config);
		jsPlumbObj.addEndpoint(node, {
			anchors: ['Bottom'],
			uuid: item.id + '-bottom'
		}, config);
		jsPlumbObj.draggable(node, {
			containment: 'content',
			start: () => {
				jsPlumbObj.destroyDraggable('content') // 销毁拖拽
			},
			stop: () => {
				this.dragContent()
			}
		});
	}

	// 设置画布拖拽
	dragContent = () => {
		this.jsPlumbObj.draggable('content');
	}

	render() {
		const { initData } = this.props;

		return (
			<div className="lb-flow-chart" id="diagramContainer">
				{
					initData &&
					initData.nodes.length > 0 &&
					initData.nodes.map((item, index) => {
						return (
							<div
								id={item.id}
								className="item"
								key={index}
								style={{
									left: item.position.x,
									top: item.position.y
								}}
							>
								{item.content}
							</div>
						)
					})
				}
			</div>
		);
	}
}

// GroovyEditor.propTypes = {
// 	id: PropTypes.string,
// 	defaultCode: PropTypes.string,
// 	code: PropTypes.string,
// 	height: PropTypes.number,
// 	theme: PropTypes.string,
// 	activeLine: PropTypes.bool,
// 	fold: PropTypes.bool,
// 	readOnly: PropTypes.bool,
// 	keywords: PropTypes.array
// };

// GroovyEditor.defaultProps = {
// 	defaultCode: "",
// 	activeLine: true,
// 	fold: true,
// 	theme: "day",
// 	height: 300,
// 	readOnly: false,
// 	keywords: []
// };

export default FlowChart;

