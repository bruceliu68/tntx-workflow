export const Elements = {
	// 开始节点
	start: {
		size: {
			width: 60,
			height: 60
		},
		position: {
			x: 45,
			y: 50
		},
		attrs: {
			root: {
				title: "开始节点"
			},
			body: {
				fill: "#f90",
				stroke: "#f90"
			},
			label: {
				text: "开始",
				fill: "white"
			}
		},
		content: "存放数据"
	},
	// 模型节点
	model: {
		size: {
			width: 100,
			height: 40
		},
		position: {
			x: 25,
			y: 150
		},
		attrs: {
			body: {
				fill: "#40a9ff",
				stroke: "#1c7fd0",
				rx: 4,
				ry: 4
			},
			label: {
				text: "模型",
				fill: "white"
			}
		},
		content: "存放数据"
	},
	// 判断节点
	judge: {
		size: {
			width: 80,
			height: 60
		},
		position: {
			x: 35,
			y: 225
		},
		attrs: {
			body: {
				fill: "#3F51B5",
				stroke: "#26368e",
				refPoints: "0,10 10,0 20,10 10,20"
			},
			label: {
				text: "判断",
				fill: "white"
			}
		},
		content: "存放数据"
	},
	// 判断节点
	end: {
		size: {
			width: 60,
			height: 60
		},
		position: {
			x: 45,
			y: 320
		},
		attrs: {
			root: {
				title: "结束节点"
			},
			body: {
				fill: "rgb(134, 159, 190)",
				stroke: "rgb(134, 159, 190)"
			},
			label: {
				text: "结束",
				fill: "white"
			}
		},
		content: "存放数据"
	}
};
