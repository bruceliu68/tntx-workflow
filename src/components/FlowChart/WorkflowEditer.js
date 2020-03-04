import Snap from "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js";

/**
 * @class
 */

class WorkflowEditer {
    constructor(config) {
        this.config = config;
        this.templates = config.templates;
        if (!config.dom) return;
        this.wrapClass = "workflow-editor";
        this.dom = this.initDom(config.dom);
        this.svg = Snap(document.getElementById("svg"));
        this.historyIndex = -1;
        this.historyList = [];
        this.dragInfo = {
            flag: false,
            nodeItem: null,
            mouseOffsetX: null,
            mouseOffsetY: null
        };
        this.currentData = {};
    }

    // 初始化dom
    initDom(dom) {
        dom.innerHTML = `<div class=${this.wrapClass}>
            <svg id="svg" width="100%" height="100%"></svg>
        </div>`;
        return dom;
    }

    // 初始化数据
    setInitData(data) {
        if (!data) return;
        this.currentData = Object.assign({}, data);
        this.render(data);
        this.historyPush(data);
    }

    // 渲染
    render(data) {
        this.addNodes(data.nodes);
        this.addLinks(data.links, data.nodes);
    }

    // 节点添加
    addNodes(nodes) {
        nodes.forEach(item => {
            let findObj = this.templates.find(k => k.type === item.type);
            if (findObj) {
                let dom = findObj.dom.cloneNode(true);
                dom.id = item.id;
                dom.style.left = item.position.x + "px";
                dom.style.top = item.position.y + "px";
                if (item.content) {
                    dom.querySelector(".ellipsis").innerText = item.content;
                }
                dom.onmousedown = (e) => this.handleMouseDown(e, item);
                this.dom.querySelector(`.${this.wrapClass}`).appendChild(dom);
            }
        });
    }

    // 节点拖动事件
    handleMouseDown(event, item) {
        const e = event || window.event;
        const boxOffsetLeft = document.querySelector(`.${this.wrapClass}`).offsetLeft;
        const boxOffsetTop = document.querySelector(`.${this.wrapClass}`).offsetTop;
        const mouseOffsetX = e.clientX - item.position.x - boxOffsetLeft;
        const mouseOffsetY = e.clientY - item.position.y - boxOffsetTop;
        this.dragInfo = {
            flag: true,
            nodeItem: item,
            mouseOffsetX,
            mouseOffsetY
        };
        document.onmousemove = this.handleMouseMove;
        document.onmouseup = this.handleMouseUp;
    }

    handleMouseMove = (e) => {
        const { flag, nodeItem } = this.dragInfo;
        let { nodes, links } = this.currentData;
        if (flag) {
            const position = this.getPosition(e);
            document.getElementById(nodeItem.id).style.left = position.x + "px";
            document.getElementById(nodeItem.id).style.top = position.y + "px";
            nodes.forEach(item => {
                if (item.id === nodeItem.id) {
                    item.position.x = position.x;
                    item.position.y = position.y;
                }
            });
            this.clearPath();
            this.addLinks(links, nodes);
        }
    }

    handleMouseUp = (e) => {
        this.dragInfo = {
            flag: false,
            nodeItem: null,
            mouseOffsetX: null,
            mouseOffsetY: null
        };
        document.onmousemove = null;
        document.onmouseup = null;
    }

    // 获取节点相对画布的left,top值
    getPosition = (event) => {
        const { mouseOffsetX, mouseOffsetY } = this.dragInfo;
        const e = event || window.event;
        const boxOffsetLeft = document.querySelector(`.${this.wrapClass}`).offsetLeft;
        const boxOffsetTop = document.querySelector(`.${this.wrapClass}`).offsetTop;
        const x = e.clientX - boxOffsetLeft - mouseOffsetX;
        const y = e.clientY - boxOffsetTop - mouseOffsetY;
        return {
            x,
            y
        };
    }

    // 画线
    addLinks(links, nodes) {
        links.forEach(item => {
            const sourceNode = nodes.find(k => k.id === item.source);
            const targetNode = nodes.find(k => k.id === item.target);
            const path = this.getPath(sourceNode, targetNode, item.type);

            // 箭头
            const arrow = this.svg.paper.path("M2,2 L2,11 L10,6 L2,2").attr({
                fill: "#B2BECD"
            });
            // 变身标记
            const markerEnd = arrow.marker(0, 0, 13, 13, 2, 6);
            // 画线
            this.svg.paper.path(path.path).attr({
                stroke: "#B2BECD",
                "marker-end": markerEnd
            });

        });
    }

    // 清除所有线条
    clearPath() {
        this.svg.paper.clear();
    }

    // 获取路径，返回路径及起始点坐标
    getPath(sourceNode, targetNode, type) {
        const sP = this.getAnchor(sourceNode);
        const tP = this.getAnchor(targetNode);
        let x, y, x1, y1;
        const hypotenuse = 7.8; // 斜边长度
        if ((sP.position.y < tP.position.y - 50) && (Math.abs(tP.position.x - sP.position.x) < sP.size.width * 2)) { // 第一和第四象限
            const angle = Snap.angle(sP.bottom.x, sP.bottom.y, tP.top.x, tP.top.y) - 180;
            // 已知斜边和角度
            // 角度的对边=斜边*sin弧度
            // 角度邻边=斜边*cos弧度
            let offsetX = 0, offsetY = 0;
            x = sP.bottom.x;
            y = sP.bottom.y;
            x1 = tP.top.x;
            y1 = tP.top.y;
            if (angle === 90) { // 垂直
                offsetX = 0;
                offsetY = hypotenuse;
                x1 = tP.top.x - offsetX;
                y1 = tP.top.y - offsetY;
            } else if (angle > 0 && angle < 90) { // 第四象限
                // 弧度= 角度 * Math.PI / 180;
                const radian = angle * Math.PI / 180;
                offsetX = hypotenuse * Math.cos(radian);
                offsetY = hypotenuse * Math.sin(radian);
                x1 = tP.top.x - offsetX;
                y1 = tP.top.y - offsetY;
            } else if (angle > 90 && angle < 180) { // 第一象限
                const radian = (180 - angle) * Math.PI / 180;
                offsetX = hypotenuse * Math.cos(radian);
                offsetY = hypotenuse * Math.sin(radian);
                x1 = tP.top.x + offsetX;
                y1 = tP.top.y - offsetY;
            }
        } else if ((sP.position.y - 50 > tP.position.y) && (Math.abs(tP.position.x - sP.position.x) < sP.size.width * 2)) { // 第二和第三象限
            let angle = Snap.angle(sP.top.x, sP.top.y, tP.bottom.x, tP.bottom.y) - 180;
            angle = Math.abs(angle);
            let offsetX = 0, offsetY = 0;
            x = sP.top.x;
            y = sP.top.y;
            x1 = tP.bottom.x;
            y1 = tP.bottom.y;
            if (angle === 90) { // 垂直
                offsetX = 0;
                offsetY = hypotenuse;
                x1 = tP.bottom.x - offsetX;
                y1 = tP.bottom.y + offsetY;
            } else if (angle > 0 && angle < 90) {
                const radian = angle * Math.PI / 180;
                offsetX = hypotenuse * Math.cos(radian);
                offsetY = hypotenuse * Math.sin(radian);
                x1 = tP.bottom.x - offsetX;
                y1 = tP.bottom.y + offsetY;
            } else if (angle > 90 && angle < 180) {
                const radian = (180 - angle) * Math.PI / 180;
                offsetX = hypotenuse * Math.cos(radian);
                offsetY = hypotenuse * Math.sin(radian);
                x1 = tP.bottom.x + offsetX;
                y1 = tP.bottom.y + offsetY;
            }
        } else {
            if (sP.position.x < tP.position.x) { // R - L
                let angle = Snap.angle(sP.right.x, sP.right.y, tP.left.x, tP.left.y) - 180;
                angle = Math.abs(angle);
                let offsetX = 0, offsetY = 0;
                x = sP.right.x;
                y = sP.right.y;
                x1 = tP.left.x;
                y1 = tP.left.y;
                const radian = angle * Math.PI / 180;
                offsetX = hypotenuse * Math.cos(radian);
                offsetY = hypotenuse * Math.sin(radian);
                x1 = tP.left.x - offsetX;
                if (sP.position.y < tP.position.y) {
                    y1 = tP.left.y - offsetY;
                } else {
                    y1 = tP.left.y + offsetY;
                }
            } else { // L - R
                let angle = Snap.angle(sP.left.x, sP.left.y, tP.right.x, tP.right.y) - 180;
                angle = Math.abs(angle);
                let offsetX = 0, offsetY = 0;
                x = sP.left.x;
                y = sP.left.y;
                x1 = tP.right.x + offsetX;
                y1 = tP.right.y;
                const radian = angle * Math.PI / 180;
                offsetX = hypotenuse * Math.cos(radian);
                offsetY = hypotenuse * Math.sin(radian);
                x1 = tP.right.x + hypotenuse;
                if (sP.position.y < tP.position.y) {
                    y1 = tP.right.y - offsetY;
                } else {
                    y1 = tP.right.y + offsetY;
                }
            }
        }
        let path = `M${x} ${y}L${x1} ${y1}`; // 默认直线
        if (type === "curve") { // 曲线

        } else if (type === "besselcurve") { // 贝塞尔曲线

        }
        return {
            path,
            startPoint: {
                x,
                y
            },
            endPoint: {
                x1,
                y1
            }
        };
    }

    // 获取节点上下左右中点4个点坐标
    getAnchor(node) {
        const position = node.position;
        const size = node.size;
        const left = {
            x: position.x,
            y: position.y + size.height / 2
        };
        const right = {
            x: position.x + size.width,
            y: position.y + size.height / 2
        };
        const top = {
            x: position.x + size.width / 2,
            y: position.y
        };
        const bottom = {
            x: position.x + size.width / 2,
            y: position.y + size.height
        };
        const obj = {
            left,
            right,
            top,
            bottom,
            position,
            size
        };
        return obj;
    }

    // 添加历史记录
    historyPush(data) {
        this.historyList.push(JSON.stringify(data).trim(" "));
        this.historyIndex++;
    }

	/**
	 * 销毁函数
	 */
    destroy() {
        // this.graph = null;
        // this.dom.innerHTML = null;
        // this.controller = null;
        // this.schema = null;
    }

	/**
	 * 重绘 
	 */
    repaint() {
        // this.graph.render(this.schema.data);
    }

	/**
	 * 清空画布
	 */
    clearGraph() {
        // this.graph.line.clear();
        // this.graph.node.clear();
    }
}

export default WorkflowEditer;
// export { Event, MMEditor, Schema, Snap, Graph, Controller, eve, mina };