/*
 * @CreatDate: 2021-04-26 17:22:22
 * @Describe: 工具导航
 */

import "./index.less";
import { useState } from "react";
import { Menu, Dropdown, Tooltip, Switch, Button, Icon } from "antd";

export default props => {
	const { graphInstance, toolbar = {}, saveLoading = false } = props;
	const [count, setCount] = useState(100);
	const [isScreen, setIsScreen] = useState(false);

	const onSnapChange = (checked) => {
		if (checked) {
			graphInstance.current.openSnaplines();
		} else {
			graphInstance.current.closeSnaplines();
		}
	};

	const handleSave = () => {
		let obj = {
			data: graphInstance.current.graph.toJSON(),
			cells: graphInstance.current.graph.getCells(),
			elements: graphInstance.current.graph.getElements(),
			links: graphInstance.current.graph.getLinks()
		};
		if (props.onSave) {
			props.onSave(obj);
		}
	};

	const menu = (
		<Menu className="tntx-workflow-format-menu">
			<span className="s1">仅供参考</span>
			<Menu.Item onClick={() => graphInstance.current.format("LR")}>向右对齐</Menu.Item>
			<Menu.Item onClick={() => graphInstance.current.format("TB")}>向下对齐</Menu.Item>
		</Menu>
	);

	const operateMenu = (
		<Menu className="tntx-workflow-operate-menu">
			<span className="s1">操作说明</span>
			<Menu.Item>长按cmd/ctrl，多选组件</Menu.Item>
			<Menu.Item>cmd/ctrl+c，复制组件</Menu.Item>
			<Menu.Item>cmd/ctrl+v，粘贴组件</Menu.Item>
		</Menu>
	);

	const {
		zoom = true,
		clear = true,
		undo = true,
		redo = true,
		print = true,
		formatter = true,
		copyTip = true,
		snapLine = true,
		fullScreen = true,
		onSave = true
	} = toolbar;

	return (
		<div className="tntx-workflow-toolbar">
			{
				zoom &&
				<span className="zoom">
					<Tooltip title="缩小" placement="bottom">
						<Icon
							type="minus"
							className="zoom-out"
							onClick={() => {
								if (count <= 20) return;
								graphInstance.current.zoomOut();
								setCount(count - 20);
							}}
						/>
					</Tooltip>
					<span className="text">{count}%</span>
					<Tooltip title="放大" placement="bottom">
						<Icon
							type="plus"
							className="zoom-in"
							onClick={() => {
								if (count >= 200) return;
								graphInstance.current.zoomIn();
								setCount(count + 20);
							}}
						/>
					</Tooltip>
				</span>
			}
			{
				clear &&
				<Tooltip title="清空画布" placement="bottom">
					<span className="clear-graph" onClick={() => graphInstance.current.clear()}></span>
				</Tooltip>
			}
			{
				undo &&
				<Tooltip title="撤销" placement="bottom">
					<span className="undo" onClick={() => graphInstance.current.undo()}></span>
				</Tooltip>
			}
			{
				redo &&
				<Tooltip title="重做" placement="bottom">
					<span className="redo" onClick={() => graphInstance.current.redo()}></span>
				</Tooltip>
			}
			{
				print &&
				<Tooltip title="打印" placement="bottom">
					<Icon
						type="printer"
						className="print"
						onClick={() => graphInstance.current.print()}
					/>
				</Tooltip>
			}
			{
				formatter &&
				<Dropdown overlay={menu}>
					<Icon type="smile" className="smile" />
				</Dropdown>
			}
			{
				copyTip &&
				<Dropdown overlay={operateMenu}>
					<Icon type="bulb" className="tips" />
				</Dropdown>
			}
			{
				fullScreen &&
				<span className="fullscreen" onClick={() => {
					graphInstance.current.toggleFullScreen(isScreen);
					setIsScreen(!isScreen);
				}}>
					{
						isScreen
							? <Tooltip title="退出全屏" placement="bottom">
								<Icon type="fullscreen-exit" />
							</Tooltip>
							: <Tooltip title="全屏" placement="bottom">
								<Icon type="fullscreen" />
							</Tooltip>
					}
				</span>
			}
			{
				snapLine &&
				<span className="subline">
					辅助线：
					<Switch defaultChecked onChange={onSnapChange} />
				</span>
			}
			{
				onSave &&
				<Button
					className="save"
					icon="save"
					loading={saveLoading}
					onClick={handleSave}
				>
					保存
				</Button>
			}
		</div>
	);
};
