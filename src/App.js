import React from 'react';
import ReactDOM from 'react-dom';

import FlowChart from './components/FlowChart';
// import GroovyEditor from "groovy-edit-react";
import "./index.less";

const data = {
    nodes: [
        {
            id: "0001",
            size: { width: 100, height: 30 },
            position: { x: 100, y: 100 },
            content: "节点1", // string or html 内容
            selected: false, // 节点选中状态
        },
        {
            id: "0002",
            size: { width: 100, height: 30 },
            position: { x: 300, y: 300 },
            content: "节点2", // string or html 内容
            selected: false, // 节点选中状态
        }
    ],
    links: [
        {
            source: "0001", // 源节点
            target: "0002", // 目标节点
            type: "line", // 直线：line，曲线：curve，贝塞尔曲线：besselcurve
            displacement: 30, // 源节点与目标节点中心点的偏移量
            content: "线", // string or html 内容
            attrs: { // 样式
                fill: "#f00"
            }
        }
    ]
};

ReactDOM.render(
    <div className="g-wrap">
        <FlowChart />
    </div>,
    document.getElementById('app')
);
