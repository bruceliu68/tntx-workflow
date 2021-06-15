/*
 * @CreatDate: 2018-09-30 17:13:02
 * @Describe: 测试次页
 */

import { useRef, useEffect } from "react";
import Workflow from "../Workflow/Template";
import mockData from "./mockData";

export default props => {
	const graphInstance = useRef();

	useEffect(() => {
		if (graphInstance?.current) {
			graphInstance.current.paper.on("element:pointerclick", (cellView, e) => {
				console.log("单击线", e);
			});
		}
	}, [graphInstance?.current]);

	return (
		<div style={{ width: 1000, height: 800 }}>
			<Workflow
				initData={mockData}
				readOnly={true} // 默认false
				config={{
					router: "orthogonal", // 连线模式，默认orthogonal， orthogonal,manhattan,metro,normal
					vertexAdd: false // 是否支持线添加转折点，默认false
				}}
				toolbar={{
					show: true, // 默认true  工具类是否显示
					zoom: true, // 默认true, 放大缩小
					clear: true, // 默认true 清空画布
					undo: true, // 默认true  撤销
					redo: true, // 默认true  重做
					print: true, // 默认true 打印
					formatter: true, // 默认true  格式化
					copyTip: true, // 默认true  复制粘贴提示
					snapLine: true, // 默认true  辅助线
					fullScreen: true, // 默认true  全屏功能
					onSave: true, // 默认true  保存按钮
					navigation: true // 默认true  小窗口导航
				}}
				saveLoading={false} // 与onSave配合使用
				onSave={(obj) => {
					console.log(obj);
				}}
				getGraphInstance={(ref) => { graphInstance.current = ref.current; }}
			/>
			<button onClick={() => {
				// console.log(graphInstance.current.clear());

			}}>sdfsdf</button>
		</div>
	);
};

