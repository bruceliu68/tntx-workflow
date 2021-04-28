"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("./index.less");

var _react = require("react");

var _index2 = _interopRequireDefault(require("../index"));

var _Toolbar = _interopRequireDefault(require("./Toolbar"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { mockData } from "../mockData";
var _default = function _default(props) {
  var initData = props.initData,
      _props$readOnly = props.readOnly,
      readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
      toolbar = props.toolbar,
      _onSave = props.onSave,
      saveLoading = props.saveLoading,
      getGraphInstance = props.getGraphInstance,
      stencilItem = props.stencilItem,
      nConfig = props.config;
  var workflowRef = (0, _react.useRef)();
  var stencilRef = (0, _react.useRef)();
  var graphInstance = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (!graphInstance.current) {
      var dom = workflowRef.current;

      var config = _objectSpread({
        stencilDom: stencilRef.current,
        navigation: toolbar ? toolbar.navigation !== false : true,
        stencilItem: stencilItem,
        router: "orthogonal",
        vertexAdd: false
      }, nConfig);

      graphInstance.current = new _index2["default"](dom, config);
      graphInstance.current.setSnaplineColor("#f90");

      if (getGraphInstance) {
        getGraphInstance(graphInstance);
      }
    }

    if (graphInstance.current && initData && initData.cells && initData.cells.length > 0) {
      graphInstance.current.setData(initData);
    } // graphInstance.current.setData(mockData);


    return function () {
      graphInstance.current.destroy();
    };
  }, [initData]);

  var isShowToolbar = function isShowToolbar() {
    if (!toolbar) return true;
    return toolbar.show !== false;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "tntx-workflow"
  }, /*#__PURE__*/React.createElement("div", {
    ref: stencilRef,
    className: readOnly ? "lb-stencil-look" : "lb-stencil"
  }), /*#__PURE__*/React.createElement("div", {
    className: readOnly ? "lb-paper lb-paper-look" : "lb-paper"
  }, /*#__PURE__*/React.createElement("div", {
    ref: workflowRef,
    className: "workflow-paper"
  }), !readOnly && isShowToolbar() && /*#__PURE__*/React.createElement(_Toolbar["default"], {
    graphInstance: graphInstance,
    toolbar: toolbar,
    saveLoading: saveLoading,
    onSave: function onSave(obj) {
      return _onSave(obj);
    }
  })));
};

exports["default"] = _default;