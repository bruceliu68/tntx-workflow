/*
 * @CreatDate: 2020-07-30 15:33:38
 * @Describe: 决策流配置
 */

import "./index.less";
import { useEffect, useRef } from "react";
import NewWorkflow from "../../Workflow";
import Toolbar from "./Toolbar";
// import { mockData } from "../mockData";

export default props => {
	const { initData, readOnly = false, toolbar, onSave, saveLoading, getGraphInstance, stencilItem, config: nConfig } = props;

	const workflowRef = useRef();
	const stencilRef = useRef();
	const graphInstance = useRef();

	useEffect(() => {
		if (!graphInstance.current) {
			const dom = workflowRef.current;
			const config = {
				stencilDom: stencilRef.current,
				navigation: toolbar ? toolbar.navigation !== false : true,
				stencilItem,
				router: "orthogonal",
				vertexAdd: false,
				...nConfig
			};
			graphInstance.current = new NewWorkflow(dom, config);
			graphInstance.current.setSnaplineColor("#f90");
			if (getGraphInstance) {
				getGraphInstance(graphInstance);
			}
		}

		if (graphInstance.current && initData && initData.cells && initData.cells.length > 0) {
			graphInstance.current.setData(initData);
		}
		// graphInstance.current.setData(mockData);

		return () => {
			graphInstance.current.destroy();
		};
	}, [initData]);

	const isShowToolbar = () => {
		if (!toolbar) return true;
		return toolbar.show !== false;
	};

	return (
		<div className="tntx-workflow">
			<div ref={stencilRef} className={readOnly ? "lb-stencil-look" : "lb-stencil"}></div>
			<div className={readOnly ? "lb-paper lb-paper-look" : "lb-paper"}>
				<div ref={workflowRef} className="workflow-paper"></div>
				{
					!readOnly &&
					isShowToolbar() &&
					<Toolbar
						graphInstance={graphInstance}
						toolbar={toolbar}
						saveLoading={saveLoading}
						onSave={(obj) => onSave(obj)}
					/>
				}
			</div>
		</div>
	);
};
