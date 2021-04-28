"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/switch/style/css");

var _switch = _interopRequireDefault(require("antd/es/switch"));

require("antd/es/dropdown/style/css");

var _dropdown = _interopRequireDefault(require("antd/es/dropdown"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/menu/style/css");

var _menu = _interopRequireDefault(require("antd/es/menu"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("./index.less");

var _react = require("react");

/*
 * @CreatDate: 2021-04-26 17:22:22
 * @Describe: 工具导航
 */
var _default = function _default(props) {
  var graphInstance = props.graphInstance,
      _props$toolbar = props.toolbar,
      toolbar = _props$toolbar === void 0 ? {} : _props$toolbar,
      _props$saveLoading = props.saveLoading,
      saveLoading = _props$saveLoading === void 0 ? false : _props$saveLoading;

  var _useState = (0, _react.useState)(100),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isScreen = _useState4[0],
      setIsScreen = _useState4[1];

  var onSnapChange = function onSnapChange(checked) {
    if (checked) {
      graphInstance.current.openSnaplines();
    } else {
      graphInstance.current.closeSnaplines();
    }
  };

  var handleSave = function handleSave() {
    var obj = {
      data: graphInstance.current.graph.toJSON(),
      cells: graphInstance.current.graph.getCells(),
      elements: graphInstance.current.graph.getElements(),
      links: graphInstance.current.graph.getLinks()
    };

    if (props.onSave) {
      props.onSave(obj);
    }
  };

  var menu = /*#__PURE__*/React.createElement(_menu["default"], {
    className: "tntx-workflow-format-menu"
  }, /*#__PURE__*/React.createElement("span", {
    className: "s1"
  }, "\u4EC5\u4F9B\u53C2\u8003"), /*#__PURE__*/React.createElement(_menu["default"].Item, {
    onClick: function onClick() {
      return graphInstance.current.format("LR");
    }
  }, "\u5411\u53F3\u5BF9\u9F50"), /*#__PURE__*/React.createElement(_menu["default"].Item, {
    onClick: function onClick() {
      return graphInstance.current.format("TB");
    }
  }, "\u5411\u4E0B\u5BF9\u9F50"));
  var operateMenu = /*#__PURE__*/React.createElement(_menu["default"], {
    className: "tntx-workflow-operate-menu"
  }, /*#__PURE__*/React.createElement("span", {
    className: "s1"
  }, "\u64CD\u4F5C\u8BF4\u660E"), /*#__PURE__*/React.createElement(_menu["default"].Item, null, "\u957F\u6309cmd/ctrl\uFF0C\u591A\u9009\u7EC4\u4EF6"), /*#__PURE__*/React.createElement(_menu["default"].Item, null, "cmd/ctrl+c\uFF0C\u590D\u5236\u7EC4\u4EF6"), /*#__PURE__*/React.createElement(_menu["default"].Item, null, "cmd/ctrl+v\uFF0C\u7C98\u8D34\u7EC4\u4EF6"));
  var _toolbar$zoom = toolbar.zoom,
      zoom = _toolbar$zoom === void 0 ? true : _toolbar$zoom,
      _toolbar$clear = toolbar.clear,
      clear = _toolbar$clear === void 0 ? true : _toolbar$clear,
      _toolbar$undo = toolbar.undo,
      undo = _toolbar$undo === void 0 ? true : _toolbar$undo,
      _toolbar$redo = toolbar.redo,
      redo = _toolbar$redo === void 0 ? true : _toolbar$redo,
      _toolbar$print = toolbar.print,
      print = _toolbar$print === void 0 ? true : _toolbar$print,
      _toolbar$formatter = toolbar.formatter,
      formatter = _toolbar$formatter === void 0 ? true : _toolbar$formatter,
      _toolbar$copyTip = toolbar.copyTip,
      copyTip = _toolbar$copyTip === void 0 ? true : _toolbar$copyTip,
      _toolbar$snapLine = toolbar.snapLine,
      snapLine = _toolbar$snapLine === void 0 ? true : _toolbar$snapLine,
      _toolbar$fullScreen = toolbar.fullScreen,
      fullScreen = _toolbar$fullScreen === void 0 ? true : _toolbar$fullScreen,
      _toolbar$onSave = toolbar.onSave,
      onSave = _toolbar$onSave === void 0 ? true : _toolbar$onSave;
  return /*#__PURE__*/React.createElement("div", {
    className: "tntx-workflow-toolbar"
  }, zoom && /*#__PURE__*/React.createElement("span", {
    className: "zoom"
  }, /*#__PURE__*/React.createElement(_tooltip["default"], {
    title: "\u7F29\u5C0F"
  }, /*#__PURE__*/React.createElement(_icon["default"], {
    type: "minus",
    className: "zoom-out",
    onClick: function onClick() {
      if (count <= 20) return;
      graphInstance.current.zoomOut();
      setCount(count - 20);
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, count, "%"), /*#__PURE__*/React.createElement(_tooltip["default"], {
    title: "\u653E\u5927"
  }, /*#__PURE__*/React.createElement(_icon["default"], {
    type: "plus",
    className: "zoom-in",
    onClick: function onClick() {
      if (count >= 200) return;
      graphInstance.current.zoomIn();
      setCount(count + 20);
    }
  }))), clear && /*#__PURE__*/React.createElement(_tooltip["default"], {
    title: "\u6E05\u7A7A\u753B\u5E03"
  }, /*#__PURE__*/React.createElement("span", {
    className: "clear-graph",
    onClick: function onClick() {
      return graphInstance.current.clear();
    }
  })), undo && /*#__PURE__*/React.createElement(_tooltip["default"], {
    title: "\u64A4\u9500"
  }, /*#__PURE__*/React.createElement("span", {
    className: "undo",
    onClick: function onClick() {
      return graphInstance.current.undo();
    }
  })), redo && /*#__PURE__*/React.createElement(_tooltip["default"], {
    title: "\u91CD\u505A"
  }, /*#__PURE__*/React.createElement("span", {
    className: "redo",
    onClick: function onClick() {
      return graphInstance.current.redo();
    }
  })), print && /*#__PURE__*/React.createElement(_tooltip["default"], {
    title: "\u6253\u5370"
  }, /*#__PURE__*/React.createElement(_icon["default"], {
    type: "printer",
    className: "print",
    onClick: function onClick() {
      return graphInstance.current.print();
    }
  })), formatter && /*#__PURE__*/React.createElement(_dropdown["default"], {
    overlay: menu
  }, /*#__PURE__*/React.createElement(_icon["default"], {
    type: "smile",
    className: "smile"
  })), copyTip && /*#__PURE__*/React.createElement(_dropdown["default"], {
    overlay: operateMenu
  }, /*#__PURE__*/React.createElement(_icon["default"], {
    type: "bulb",
    className: "tips"
  })), fullScreen && /*#__PURE__*/React.createElement("span", {
    className: "fullscreen",
    onClick: function onClick() {
      graphInstance.current.toggleFullScreen(isScreen);
      setIsScreen(!isScreen);
    }
  }, isScreen ? /*#__PURE__*/React.createElement(_tooltip["default"], {
    title: "\u9000\u51FA\u5168\u5C4F"
  }, /*#__PURE__*/React.createElement(_icon["default"], {
    type: "fullscreen-exit"
  })) : /*#__PURE__*/React.createElement(_tooltip["default"], {
    title: "\u5168\u5C4F"
  }, /*#__PURE__*/React.createElement(_icon["default"], {
    type: "fullscreen"
  }))), snapLine && /*#__PURE__*/React.createElement("span", {
    className: "subline"
  }, "\u8F85\u52A9\u7EBF\uFF1A", /*#__PURE__*/React.createElement(_switch["default"], {
    defaultChecked: true,
    onChange: onSnapChange
  })), onSave && /*#__PURE__*/React.createElement(_button["default"], {
    className: "save",
    icon: "save",
    loading: saveLoading,
    onClick: handleSave
  }, "\u4FDD\u5B58"));
};

exports["default"] = _default;