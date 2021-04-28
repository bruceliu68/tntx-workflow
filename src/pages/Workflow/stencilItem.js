const data = [
	{
		type: "circle",
		position: { x: 34, y: 35 },
		size: { width: 50, height: 50 },
		attrs: {
			".label": {
				fill: "#fff",
				text: "开始",
				refY: "-44"
			},
			".body": {
				refWidth: "100%",
				refHeight: "100%",
				rx: "1%",
				ry: "2%",
				stroke: "none",
				fill: "#628FE4"
			}
		}
	},
	{
		type: "circle",
		position: { x: 34, y: 95 },
		size: { width: 50, height: 50 },
		attrs: {
			".label": {
				fill: "#fff",
				text: "暂停",
				refY: "-44"
			},
			".body": {
				refWidth: "100%",
				refHeight: "100%",
				rx: "1%",
				ry: "2%",
				stroke: "none",
				fill: "#E6B55E"
			}
		}
	},
	{
		type: "circle",
		position: { x: 34, y: 155 },
		size: { width: 50, height: 50 },
		attrs: {
			".label": {
				fill: "#fff",
				text: "结束",
				refY: "-44"
			},
			".body": {
				refWidth: "100%",
				refHeight: "100%",
				rx: "1%",
				ry: "2%",
				stroke: "none",
				fill: "#869FBE"
			}
		}
	},
	{
		type: "polygon",
		position: { x: 34, y: 215 },
		size: { width: 54, height: 48 },
		attrs: {
			".outer": {
				fill: "rgba(246,118,19,0.10)",
				stroke: "#F67613",
				"stroke-width": 1,
				"stroke-dasharray": "0"
			},
			text: {
				"text": "排他",
				"font-size": 12,
				"font-weight": "Normal",
				"fill": "#F67613",
				"stroke-width": 1
			}
		}
	},
	{
		type: "polygon",
		position: { x: 34, y: 275 },
		size: { width: 54, height: 48 },
		attrs: {
			".outer": {
				fill: "rgba(36,175,149,0.10)",
				stroke: "#03BD7F",
				"stroke-width": 1,
				"stroke-dasharray": "0"
			},
			text: {
				"text": "并行",
				"font-size": 12,
				"font-weight": "Normal",
				"fill": "#03BD7F",
				"stroke-width": 1
			}
		}
	},
	{
		type: "rect",
		position: { x: 10, y: 338 },
		size: { width: 100, height: 28 },
		content: "<span class='dot'>策</span><span class='ellipsis'>策略集</span>",
		attrs: {
			".body": {
				refWidth: "100%",
				refHeight: "100%",
				rx: "14px",
				ry: "14px",
				stroke: "#CCD9FD",
				fill: "#EAEEFA"
			}
		}
	},
	{
		type: "rect",
		position: { x: 10, y: 383 },
		size: { width: 100, height: 28 },
		content: "<span class='dot' style=\"background: #CFAB67;\">三</span><span class='ellipsis'>三方服务</span>",
		attrs: {
			".body": {
				refWidth: "100%",
				refHeight: "100%",
				rx: "14px",
				ry: "14px",
				stroke: "#CCD9FD",
				fill: "#EAEEFA"
			}
		}
	},
	{
		type: "rect",
		position: { x: 10, y: 427 },
		size: { width: 100, height: 28 },
		content: "<span class='dot' style=\"background: #67CFCB;\">补</span><span class='ellipsis'>决策补充</span>",
		attrs: {
			".body": {
				refWidth: "100%",
				refHeight: "100%",
				rx: "14px",
				ry: "14px",
				stroke: "#CCD9FD",
				fill: "#EAEEFA"
			}
		}
	},
	{
		type: "rect",
		position: { x: 10, y: 471 },
		size: { width: 100, height: 28 },
		content: "<span class='dot' style=\"background: #CF6767;\">工</span><span class='ellipsis'>决策工具</span>",
		attrs: {
			".body": {
				refWidth: "100%",
				refHeight: "100%",
				rx: "14px",
				ry: "14px",
				stroke: "#CCD9FD",
				fill: "#EAEEFA"
			}
		}
	},
	{
		type: "rect",
		position: { x: 10, y: 515 },
		size: { width: 100, height: 28 },
		content: "<span class='dot' style=\"background: #4DA9C9;\">模</span><span class='ellipsis'>模型</span>",
		attrs: {
			".body": {
				refWidth: "100%",
				refHeight: "100%",
				rx: "14px",
				ry: "14px",
				stroke: "#CCD9FD",
				fill: "#EAEEFA"
			}
		}
	},
	{
		type: "rect",
		position: { x: 10, y: 559 },
		size: { width: 100, height: 28 },
		content: "<span class='dot' style=\"background: #D97B4E;\">算</span><span class='ellipsis'>计算公式</span>",
		attrs: {
			".body": {
				refWidth: "100%",
				refHeight: "100%",
				rx: "14px",
				ry: "14px",
				stroke: "#CCD9FD",
				fill: "#EAEEFA"
			}
		}
	},
	{
		type: "rect",
		position: { x: 10, y: 603 },
		size: { width: 100, height: 28 },
		content: "<span class='dot' style=\"background: #9367C6;\">挑</span><span class='ellipsis'>冠军挑战者</span>",
		attrs: {
			".body": {
				refWidth: "100%",
				refHeight: "100%",
				rx: "14px",
				ry: "14px",
				stroke: "#CCD9FD",
				fill: "#EAEEFA"
			}
		}
	},
	{
		type: "rect",
		position: { x: 10, y: 647 },
		size: { width: 100, height: 28 },
		content: "<span class='dot' style=\"background: #8390DB;\">动</span><span class='ellipsis'>动作</span>",
		attrs: {
			".body": {
				refWidth: "100%",
				refHeight: "100%",
				rx: "14px",
				ry: "14px",
				stroke: "#CCD9FD",
				fill: "#EAEEFA"
			}
		}
	}
];

export default data;
