export const Toolbar = {
	groups: {
		"zoom": {
			index: 1
		},
		"snapline": {
			index: 2
		},
		"clear": {
			index: 3
		},
		"undo-redo": {
			index: 4
		},
		"snapline2": {
			index: 5
		},
		"print": {
			index: 6
		},
		"fullscreen": {
			index: 7
		}
	},
	tools: [
		{
			type: "zoom-to-fit",
			name: "zoom-to-fit",
			group: "zoom",
			attrs: {
				button: {
					"class": "zoom-to-fit",
					"data-tooltip": "适配到最佳",
					"data-tooltip-position": "bottom",
					"data-tooltip-position-selector": ".toolbar-container"
				}
			}
		},
		{
			type: "zoom-out",
			name: "zoom-out",
			group: "zoom",
			attrs: {
				button: {
					"class": "zoom-out",
					"data-tooltip": "缩小",
					"data-tooltip-position": "bottom",
					"data-tooltip-position-selector": ".toolbar-container"
				}
			}
		},
		{
			type: "zoom-slider",
			name: "zoom-slider",
			group: "zoom"
		},
		{
			type: "zoom-in",
			name: "zoom-in",
			group: "zoom",
			attrs: {
				button: {
					"class": "zoom-in",
					"data-tooltip": "放大",
					"data-tooltip-position": "bottom",
					"data-tooltip-position-selector": ".toolbar-container"
				}
			}
		},
		{
			type: "separator",
			group: "snapline"
		},
		{
			type: "button",
			name: "clear",
			group: "clear",
			attrs: {
				button: {
					id: "btn-clear",
					"class": "btn-clear",
					"data-tooltip": "清空画布",
					"data-tooltip-position": "bottom",
					"data-tooltip-position-selector": ".toolbar-container"
				}
			}
		},
		{
			type: "undo",
			name: "undo",
			group: "undo-redo",
			attrs: {
				button: {
					"class": "btn-undo",
					"data-tooltip": "撤销",
					"data-tooltip-position": "bottom",
					"data-tooltip-position-selector": ".toolbar-container"
				}
			}
		},
		{
			type: "redo",
			name: "redo",
			group: "undo-redo",
			attrs: {
				button: {
					"class": "btn-redo",
					"data-tooltip": "重做",
					"data-tooltip-position": "bottom",
					"data-tooltip-position-selector": ".toolbar-container"
				}
			}
		},
		{
			type: "separator",
			group: "snapline2"
		},
		{
			type: "button",
			name: "print",
			group: "print",
			attrs: {
				button: {
					id: "btn-print",
					"class": "btn-print",
					"data-tooltip": "打印",
					"data-tooltip-position": "bottom",
					"data-tooltip-position-selector": ".toolbar-container"
				}
			}
		},
		{
			type: "fullscreen",
			name: "fullscreen",
			group: "fullscreen",
			attrs: {
				button: {
					"class": "btn-fullscreen",
					"data-tooltip": "全屏",
					"data-tooltip-position": "bottom",
					"data-tooltip-position-selector": ".toolbar-container"
				}
			}
		}
	]
};
