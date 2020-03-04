/*
 * @Author: liubo 
 * @CreatDate: 2020-01-10 10:15:30 
 * @Describe: flowChart
 */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./index.less";
import Snap from "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js";

class FlowChart extends PureComponent {

	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}

	state = {
		treeData: null
	};

	componentDidMount() {
		const { current } = this.ref;
		const { initData } = this.props;

		const svg = Snap(current);
		const startNode = svg.circle(150, 150, 20).drag();
		const policyNode = svg.circle(250, 150, 20).drag();
		const endNode = svg.circle(350, 150, 20).drag();
		this.setState({
			treeData: Object.assign({}, initData)
		});
	}

	render() {
		const { treeData } = this.state;

		return (
			<div className="lb-flow-chart">
				<svg ref={this.ref} width="100%" height="100%"></svg>
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

