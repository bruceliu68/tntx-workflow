/*
 * @Author: liubo
 * @CreatDate: 2018-09-30 17:13:02
 * @Describe: 测试首页
 */

import "./index.less";
import React, { PureComponent } from "react";
import BgCanvas from "@/components/BgCanvas";
import { connect } from "react-redux";

class Home extends PureComponent {

	componentDidMount() {
		dispatch({
			type: "global/changeState",
			payload: {
				count: 2
			}
		});
	}

	render() {
		const { globalState } = this.props;

		return (
			<div className="g-home">
				<div className="wrap">
					<img className="pic" src={require("./img/mypic.jpeg")} alt="" />
					<label className="title">TDS-PRO</label>
					<div className="txt">欢迎参观我的网站</div>
					store中取过来的数据：{globalState.count}
				</div>
				<div className="copyright">Copyright @2019 Bruceliu出品</div>
				<BgCanvas />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	globalState: state.global
});

export default connect(mapStateToProps)(Home);
