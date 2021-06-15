## @tntx/workflow 流程图解决方案

![image](https://github.com/bruceliu68/tntx-workflow/blob/master/src/pages/Workflow/img/overview.png)

### 前言
由于我们底层用的是joint.js，所以开发前需要安装必要的依赖，依赖下载如下：
- [点击下载 jquery.min.js](https://sinan.tongdun.me/cdn/bucket/disk/book/2805/3245/20210428144801486_jquery.min.js?download=true "点击下载JQuery")
- [点击下载 lodash.min.js](https://sinan.tongdun.me/cdn/bucket/disk/book/2805/3245/20210428144810298_lodash.min.js?download=true "点击下载lodash.min.js")
- [点击下载 backbone.min.js](https://sinan.tongdun.me/cdn/bucket/disk/book/2805/3245/20210428144814676_backbone.min.js?download=true "点击下载 backbone.min.js")
- [点击下载 joint.min.js](https://sinan.tongdun.me/cdn/bucket/disk/book/2805/3245/20210428144745127_joint.min.js?download=true "点击下载 joint.min.js")
- [点击下载 joint.min.css](https://sinan.tongdun.me/cdn/bucket/disk/book/2805/3245/20210428144752623_joint.min.css?download=true "点击下载 joint.min.css")

#### 推荐引入方式
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>流程图解决方案</title>
    <link href="/joint/joint.min.css" rel="stylesheet" />
    <script src="/joint/jquery.min.js"></script>
    <script src="/joint/lodash.min.js"></script>
    <script src="/joint/backbone.min.js"></script>
    <script src="/joint/joint.min.js"></script>
</head>

<body>
    <div id="app"></div>
</body>

</html>
```

### 安装
```bash
npm i @tntx/workflow
```

### 如何使用
```jsx
import React, { useRef } from "react";
import ReactDOM from 'react-dom';
import Workflow from "@tntx/workflow";

const Demo = props => {
    const graphInstance = useRef();

    return (
        <div style={{ width: 1000, height: 800 }}>
            <Workflow
                saveLoading={false} // 与onSave配合使用
                onSave={(obj) => {
                    console.log(obj); // 返回的数据
                }}
                getGraphInstance={(ref) => { graphInstance.current = ref.current; }} // 获取画布实例
            />
        </div>
    )
};

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);
```

### API
| 参数 | 说明 | 类型 | 默认值 |
| ------------ | ------------ | ------------ | ------------ |
| initData | 初始化渲染数据 | Object | -- |
| readOnly | 设置只读模式 | Boolen | false |
| config   | 决策流相关配置 | Object | 往下看 |
| toolbar | 控制工具栏功能 | Object | 往下看 |
| saveLoading | 只有在toolbar的onSave模式下起作用 | Boolen | false |
| onSave | 按钮保存回调 | Function 返回obj | -- |
| stencilItem | 拖拽面板数据 | Array | 内置默认数据，可自定义 |
| getGraphInstance | 获取画布实例 | Function 返回实例 | -- |

### config对象
```js
{
    router: "orthogonal", // 连线模式，默认orthogonal， orthogonal, manhattan, metro, normal
	vertexAdd: false // 是否支持线添加转折点，默认false
}
```

### toolbar对象
```js
{
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
}
```

### stencilItem 数据结果,此处展示内置数据
```js
[
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
]
```

### getGraphInstance 实例提供的方法
| 方法 | 说明 |
| ------------ | ------------ |
| clear() | 清空画布 |
| undo() | 撤销 |
| redo() | 重做 |
| print() | 打印 |
| zoomIn() | 放大 |
| zoomOut() | 缩小 |
| format(direction) | 格式化："LR, TB" |
| toggleFullScreen(boolen) | 全屏切换 |
| setData(data) | 重置画布数据 |
| destroy() | 销毁 |
| getLinks() | 获取所有线 |
| getElements() | 获取所有节点 |
| setLineColor(id, color) | 设置线的颜色 |
| setElementsBorderColor(id, color) | 设置节点border的颜色 |
| openSnaplines() | 开启辅助线 |
| closeSnaplines() | 关闭辅助线 |
| setSnaplineColor(color) | 给辅助线更换颜色 |

### 此外实例还暴露出graph和paper这两个对象
#### 如果你想监听画布数据的变化，你可以这样：
#### graph.events
The following list contains events that you can react on:
- **change** - generic event triggered for any change in the graph
- **add** - triggered when a new cell is added to the graph
- **remove** - triggered when a cell is removed from the graph

```js
graphInstance.current.graph.on('add', function(cell) { 
    console.log("画布有新加数据啦~");
})
```

#### 如果你想监听节点、线、画布的单击、双击、右击事件，你可以这样：
#### paper.events 
The following list contains events that you can react on in a paper:

```js
graphInstance.current.paper.on('element:pointerclick', function(cellView, e, x, y) { 
    console.log("我是节点单击~");
})
```

| 事件 | 说明 |
| ------------ | ------------ |
| pointerclick | 单击事件 |
| cell:pointerclick | 节点和线的单击事件，回调函数传递cellView, evt, x和y作为参数。 |
| link:pointerclick | 线的单击事件，回调函数传递cellView, evt, x和y作为参数。 |
| element:pointerclick | 节点的单击事件，回调函数传递cellView, evt, x和y作为参数。 |
| blank:pointerclick | 空白画布的单击事件，回调函数传递evt, x和y作为参数。 |
| pointerdblclick | 双击事件 |
| cell:pointerdblclick | 节点和线的双击事件，回调函数传递cellView, evt, x和y作为参数。 |
| link:pointerdblclick | 线的双击事件，回调函数传递cellView, evt, x和y作为参数。 |
| element:pointerdblclick | 节点的双击事件，回调函数传递cellView, evt, x和y作为参数。 |
| blank:pointerdblclick | 空白画布的双击事件，回调函数传递evt, x和y作为参数。 |
| contextmenu | 右键单击事件 |
| cell:contextmenu | 节点和线的右键单击事件，回调函数传递cellView, evt, x和y作为参数。 |
| link:contextmenu | 线的右键单击事件，回调函数传递cellView, evt, x和y作为参数。 |
| element:contextmenu | 节点的右键单击事件，回调函数传递cellView, evt, x和y作为参数。 |
| blank:contextmenu | 空白画布的右键单击事件，回调函数传递evt, x和y作为参数。 |

#### 更多扩展，请访问joint官方API文档 https://resources.jointjs.com/mmap/joint.html














