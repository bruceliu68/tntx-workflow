/*
 * @Author: liubo 
 * @CreatDate: 2020-01-10 10:15:30 
 * @Describe: flowChart
 */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./index.less";
import Drag from "./Components/Drag";

class FlowChart extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {
		data: {},
		dragFlag: false,
		nodeItem: null,
		dragMouseOffsetX: null,
		dragMouseOffsetY: null
	};

	componentDidMount() {
		this.init();
	}

	init = () => {
		const { initData } = this.props;
		this.setState({
			data: Object.assign({}, initData)
		});
	}

	handleMouseDown = (event, item) => {
		const e = event || window.event;
		const boxOffsetLeft = document.querySelector(".lb-flow-chart").offsetLeft;
		const boxOffsetTop = document.querySelector(".lb-flow-chart").offsetTop;
		const dragMouseOffsetX = e.clientX - item.position.x - boxOffsetLeft;
		const dragMouseOffsetY = e.clientY - item.position.y - boxOffsetTop;
		this.setState({
			dragFlag: true,
			nodeItem: item,
			dragMouseOffsetX,
			dragMouseOffsetY
		});
		document.onmousemove = this.handleMouseMove;
		document.onmouseup = this.handleMouseUp;
	}
	handleMouseMove = (e) => {
		let { dragFlag, nodeItem, data } = this.state;
		if (dragFlag) {
			const position = this.getPosition(e);
			document.getElementById(nodeItem.id).style.left = position.x + "px";
			document.getElementById(nodeItem.id).style.top = position.y + "px";
			data.nodes.forEach(item => {
				if (item.id === nodeItem.id) {
					item.position.x = position.x;
					item.position.y = position.y;
				}
			});
			this.setState({ data });
		}
	}
	handleMouseUp = (e) => {
		this.setState({
			dragFlag: false,
			nodeItem: null,
			dragMouseOffsetX: null,
			dragMouseOffsetY: null
		});
		document.onmousemove = null;
		document.onmouseup = null;
	}

	// 获取节点相对画布的left,top值
	getPosition = (event) => {
		const { dragMouseOffsetX, dragMouseOffsetY } = this.state;
		const e = event || window.event;
		const boxOffsetLeft = document.querySelector(".lb-flow-chart").offsetLeft;
		const boxOffsetTop = document.querySelector(".lb-flow-chart").offsetTop;
		const x = e.clientX - boxOffsetLeft - dragMouseOffsetX;
		const y = e.clientY - boxOffsetTop - dragMouseOffsetY;
		return {
			x,
			y
		};
	}

	render() {
		const { initData } = this.props;

		return (
			<div className="lb-flow-chart">
				{
					initData &&
					initData.nodes &&
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
								onMouseDown={(e) => this.handleMouseDown(e, item)}
							>
								<span className="dot">策</span>
								<span className="ellipsis">{item.content}</span>
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

