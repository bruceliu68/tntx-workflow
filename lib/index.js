"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("./index.less");

var _dagre = _interopRequireDefault(require("dagre"));

var _graphlib = _interopRequireDefault(require("graphlib"));

var _stencilItem = _interopRequireDefault(require("./stencilItem"));

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Workflow = /*#__PURE__*/function () {
  function Workflow(el, config) {
    (0, _classCallCheck2["default"])(this, Workflow);
    this.config = _objectSpread({}, config);
    this.zoom = 1;
    this.firstCopy = true;
    this.init(el);
  }

  (0, _createClass2["default"])(Workflow, [{
    key: "init",
    value: function init(el) {
      var _this = this;

      this.graph = new joint.dia.Graph();
      this.keyboard = new joint.ui.Keyboard();
      this.paper = new joint.dia.Paper({
        width: 2000,
        height: 1500,
        model: this.graph,
        interactive: {
          vertexAdd: this.config.vertexAdd
        },
        defaultLink: new joint.dia.Link({
          markup: ['<path class="connection" stroke="#B2BECD" d="M 0 0 0 0"/>', '<path class="marker-source" fill="#B2BECD" stroke="#B2BECD" d="M 0 0 0 0"/>', '<path class="marker-target" fill="#B2BECD" stroke="#B2BECD" d="M 0 0 0 0"/>', '<path class="connection-wrap" d="M 0 0 0 0"/>', '<g class="labels" />', '<g class="marker-vertices"/>', '<g class="marker-arrowheads"/>', '<g class="link-tools" />'].join(""),
          attrs: {
            ".marker-target": {
              fill: "#B2BECD",
              d: "M 10 0 L 0 5 L 10 10 z"
            }
          },
          bpmnType: "SequenceFlow"
        }),
        defaultRouter: {
          name: this.config.router // orthogonal,manhattan,metro,normal

        }
      }).on({
        "blank:pointerdown": function blankPointerdown(evt, x, y) {
          if (_this.keyboard.isActive("shift ctrl command", evt)) {
            if (_this.selection) {
              _this.selection.startSelecting(evt, x, y);
            }
          } else {
            if (_this.selection) {
              _this.selection.cancelSelection();
            }

            if (!_this.firstCopy) {
              window.selectionModels = null;
            }

            _this.paperScroller.startPanning(evt, x, y);
          }
        },
        "element:pointerdown": function elementPointerdown(cellView, evt) {
          if (_this.keyboard.isActive("ctrl meta", evt)) {
            if (_this.selection) {
              _this.selection.collection.add(cellView.model);
            }
          }
        }
      });
      this.addPaperScroller(el);

      if (this.config.navigation) {
        this.addNavigation(el);
      }

      this.addStencil();
      this.addCommandManager();
      this.addSnaplines();
      this.addClipboard();
      this.addSelection();
      this.paperListener();
      this.keyboardListener();
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.graph.clear();
      this.graph.fromJSON(data);
    }
  }, {
    key: "paperListener",
    value: function paperListener() {
      this.elementClick();
    } // 单击节点

  }, {
    key: "elementClick",
    value: function elementClick() {
      var _this2 = this;

      this.paper.on("element:pointerclick", function (cellView) {
        _this2.customHalo(cellView);
      });
    } // 校验连线

  }, {
    key: "validateLink",
    value: function validateLink(link) {
      var isLinksSourceTarget = !link.get("source").id || !link.get("target").id;
      var isExisted = (0, _utils.checkIsExistedLink)(this.graph, link) || link.hasLoop({
        deep: true
      });
      var isLoop = (0, _utils.hasLoop)(this.graph, link.attributes);

      if (isLinksSourceTarget || isExisted || isLoop) {
        link.remove();
      }
    }
  }, {
    key: "customHalo",
    value: function customHalo(cellView) {
      var _this3 = this;

      var halo = new joint.ui.Halo({
        cellView: cellView,
        boxContent: false,
        clearAll: true
      });
      halo.removeHandle("clone");
      halo.removeHandle("resize");
      halo.removeHandle("rotate");
      halo.removeHandle("fork");
      halo.removeHandle("unlink");
      halo.changeHandle("link", {
        icon: require("./img/link.png")
      });
      halo.changeHandle("remove", {
        icon: require("./img/remove.png")
      });
      halo.on("action:link:add", function (link) {
        _this3.validateLink(link);
      });
      halo.on("action:remove:pointerup", function () {
        halo.remove();
      });
      halo.render();
    } // 对画布实现平移，滚动操作

  }, {
    key: "addPaperScroller",
    value: function addPaperScroller(el) {
      this.paperScroller = new joint.ui.PaperScroller({
        paper: this.paper,
        autoResizePaper: true,
        padding: 0,
        cursor: "pointer"
      });
      el.append(this.paperScroller.render().el);
    } // 添加小窗口

  }, {
    key: "addNavigation",
    value: function addNavigation(el) {
      this.nav = new joint.ui.Navigator({
        paperScroller: this.paperScroller,
        width: 160,
        height: 120,
        padding: 5,
        zoomOptions: {
          max: 2,
          min: 0.2
        }
      });
      el.append(this.nav.render().el);
    } // 拖拽面板

  }, {
    key: "addStencil",
    value: function addStencil() {
      this.stencil = new joint.ui.Stencil({
        paper: this.paper
      });
      this.config.stencilDom.append(this.stencil.render().el);

      var data = _.cloneDeep(this.config.stencilItem || _stencilItem["default"]);

      var arr = [];
      data.forEach(function (item) {
        var obj;

        if (item.type === "circle") {
          delete item.type;
          obj = new joint.shapes.bpmn.Event(_objectSpread({}, item));
        } else if (item.type === "polygon") {
          delete item.type;
          obj = new joint.shapes.erd.Relationship(_objectSpread({}, item));
        } else if (item.type === "rect") {
          delete item.type;
          obj = new joint.shapes.bpmn.Activity(_objectSpread({}, item));
        }

        arr.push(obj);
      });
      this.stencil.load(arr);
    } // 操作面板

  }, {
    key: "addCommandManager",
    value: function addCommandManager() {
      this.commandManager = new joint.dia.CommandManager({
        graph: this.graph,
        cmdBeforeAdd: function cmdBeforeAdd(cmdName, cell, graph, options) {
          options = options || {};
          return !options.ignoreCommandManager;
        }
      });
    } // 选择插件

  }, {
    key: "addSelection",
    value: function addSelection() {
      this.selection = new joint.ui.Selection({
        paper: this.paper
      });
    } // 注册辅助线并开启

  }, {
    key: "addSnaplines",
    value: function addSnaplines() {
      this.snaplines = new joint.ui.Snaplines({
        paper: this.paper
      });
      this.openSnaplines();
    }
  }, {
    key: "openSnaplines",
    value: function openSnaplines() {
      this.snaplines.startListening();
    }
  }, {
    key: "closeSnaplines",
    value: function closeSnaplines() {
      this.snaplines.stopListening();
    }
  }, {
    key: "setSnaplineColor",
    value: function setSnaplineColor(color) {
      $(".joint-snaplines").find(".snapline").attr("style", "border-color: ".concat(color));
    } // 添加粘贴板

  }, {
    key: "addClipboard",
    value: function addClipboard() {
      this.clipboard = new joint.ui.Clipboard({
        useLocalStorage: true
      });
    } // 监听键盘事件

  }, {
    key: "keyboardListener",
    value: function keyboardListener() {
      var _this4 = this;

      this.copyElements = function () {
        var models = _this4.selection.collection.models;
        if (!models || models.length === 0) return;
        window.selectionModels = models; // 选中对象存在window对象中，供跨应用粘贴

        _message2["default"].success("复制成功");
      };

      this.pasteElements = function () {
        var models = window.selectionModels;
        if (!models || models.length === 0) return _message2["default"].warning("请先选中复制节点，再进行粘贴操作");

        if (_this4.firstCopy) {
          _this4.paperScroller.scroll(0, 0);
        }

        var cells = [];

        var cellsMap = _this4.graph.cloneCells(models);

        for (var k in cellsMap) {
          var item = cellsMap[k];
          item.attributes.position.x = item.attributes.position.x + 20;
          item.attributes.position.y = item.attributes.position.y + 20;
          cells.push(item);
        }

        _this4.selection.cancelSelection();

        _this4.graph.addCells(cells);

        _this4.selection.collection.add(cells);

        window.selectionModels = cells;
        _this4.firstCopy = false;
      };

      this.keyboard.on("ctrl+c meta+c", this.copyElements);
      this.keyboard.on("ctrl+v meta+v", this.pasteElements);
    } // 设置线的颜色

  }, {
    key: "setLineColor",
    value: function setLineColor(id, color) {
      var links = this.getLinks();
      links.forEach(function (item) {
        if (id === item.id) {
          item.attr(".connection/stroke", color);
          item.attr(".marker-target/fill", color);
          item.attr(".marker-target/stroke", color);
        }
      });
    } // 设置节点border颜色

  }, {
    key: "setElementsBorderColor",
    value: function setElementsBorderColor(id, color) {
      var elements = this.getElements();
      elements.forEach(function (item) {
        if (id === item.id) {
          item.attr(".outer/stroke", color);
          item.attr(".body/stroke", color);
        }
      });
    } // 获取所有边

  }, {
    key: "getLinks",
    value: function getLinks() {
      return this.graph.getLinks();
    } // 获取所有节点

  }, {
    key: "getElements",
    value: function getElements() {
      return this.graph.getElements();
    } // 清空画布

  }, {
    key: "clear",
    value: function clear() {
      this.graph.clear();
    } // 撤销

  }, {
    key: "undo",
    value: function undo() {
      this.commandManager.undo();
    } // 重做

  }, {
    key: "redo",
    value: function redo() {
      this.commandManager.redo();
    } // 打印

  }, {
    key: "print",
    value: function print() {
      this.paper.print();
    } // 放大

  }, {
    key: "zoomIn",
    value: function zoomIn() {
      this.paperScroller.zoom(0.2, {
        max: 2
      });
    } // 缩小

  }, {
    key: "zoomOut",
    value: function zoomOut() {
      this.paperScroller.zoom(-0.2, {
        min: 0.2
      });
    } // 美化布局

  }, {
    key: "format",
    value: function format(direction) {
      this.paper.freeze();
      joint.layout.DirectedGraph.layout(this.graph, {
        dagre: _dagre["default"],
        graphlib: _graphlib["default"],
        rankDir: direction,
        rankSep: 80,
        nodeSep: 80,
        edgeSep: 50,
        marginX: 100,
        marginY: 100
      });
      this.paper.unfreeze();
    } // 全屏

  }, {
    key: "toggleFullScreen",
    value: function toggleFullScreen(screen) {
      if (!screen) {
        // 全屏
        this.config.stencilDom.parentNode.classList.add("tntx-workflow-fullscreen");
      } else {
        // 退出全屏
        this.config.stencilDom.parentNode.classList.remove("tntx-workflow-fullscreen");
      }
    } // 销毁

  }, {
    key: "destroy",
    value: function destroy() {
      this.graph.destroy();
      this.paper.remove();
      this.stencil.remove();
      this.nav.remove();
      this.paperScroller.remove();
      this.commandManager.destroy();

      if (this.selection) {
        this.selection.remove();
      }

      this.snaplines.remove();
      this.clipboard.remove();
      this.keyboard.off("ctrl+c meta+c", this.copyElements);
      this.keyboard.off("ctrl+v meta+v", this.pasteElements);
      window.templateGraph = null;
    }
  }]);
  return Workflow;
}();

var _default = Workflow;
exports["default"] = _default;