(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pdfViewer"],{

/***/ "../ui/component/IframeReact/index.js":
/*!********************************************!*\
  !*** ../ui/component/IframeReact/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"../ui/component/IframeReact/view.jsx\");\n\n\n\nvar select = function select(state) {\n  return {};\n};\n\nvar perform = function perform() {\n  return {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L0lmcmFtZVJlYWN0L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL2NvbXBvbmVudC9JZnJhbWVSZWFjdC9pbmRleC5qcz85MTI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBJZnJhbWVSZWFjdCBmcm9tICcuL3ZpZXcnO1xyXG5cclxuY29uc3Qgc2VsZWN0ID0gc3RhdGUgPT4gKHt9KTtcclxuXHJcbmNvbnN0IHBlcmZvcm0gPSAoKSA9PiAoe30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QsIHBlcmZvcm0pKElmcmFtZVJlYWN0KTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/component/IframeReact/index.js\n");

/***/ }),

/***/ "../ui/component/IframeReact/view.jsx":
/*!********************************************!*\
  !*** ../ui/component/IframeReact/view.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return I18nMessage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction I18nMessage(props) {\n  var src = props.src,\n      title = props.title; // const iframeRef = useRef();\n  // const [iframeHeight, setIframeHeight] = useState('80vh');\n\n  function onLoad() {\n    /*\r\n      iframe domain restrictions prevent naive design :-(\r\n      const obj = iframeRef.current;\r\n    if (obj) {\r\n      setIframeHeight(obj.contentWindow.document.body.scrollHeight + 'px');\r\n    }\r\n      */\n  }\n\n  return (// style={{height: iframeHeight}}\n    // ref={iframeRef}\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"iframe\", {\n      src: src,\n      title: title,\n      onLoad: onLoad,\n      sandbox: !true\n    })\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L0lmcmFtZVJlYWN0L3ZpZXcuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL2NvbXBvbmVudC9JZnJhbWVSZWFjdC92aWV3LmpzeD80MDk2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGZ1bGxIZWlnaHQ6IGJvb2xlYW4sXHJcbiAgc3JjOiBzdHJpbmcsXHJcbiAgdGl0bGU6IHN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEkxOG5NZXNzYWdlKHByb3BzOiBQcm9wcykge1xyXG4gIGNvbnN0IHsgc3JjLCB0aXRsZSB9ID0gcHJvcHM7XHJcblxyXG4gIC8vIGNvbnN0IGlmcmFtZVJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBjb25zdCBbaWZyYW1lSGVpZ2h0LCBzZXRJZnJhbWVIZWlnaHRdID0gdXNlU3RhdGUoJzgwdmgnKTtcclxuXHJcbiAgZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgLypcclxuXHJcbiAgICBpZnJhbWUgZG9tYWluIHJlc3RyaWN0aW9ucyBwcmV2ZW50IG5haXZlIGRlc2lnbiA6LShcclxuXHJcbiAgICBjb25zdCBvYmogPSBpZnJhbWVSZWYuY3VycmVudDtcclxuICAgIGlmIChvYmopIHtcclxuICAgICAgc2V0SWZyYW1lSGVpZ2h0KG9iai5jb250ZW50V2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgKi9cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyBzdHlsZT17e2hlaWdodDogaWZyYW1lSGVpZ2h0fX1cclxuICAgIC8vIHJlZj17aWZyYW1lUmVmfVxyXG4gICAgPGlmcmFtZSBzcmM9e3NyY30gdGl0bGU9e3RpdGxlfSBvbkxvYWQ9e29uTG9hZH0gc2FuZGJveD17IUlTX1dFQn0gLz5cclxuICApO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/component/IframeReact/view.jsx\n");

/***/ }),

/***/ "../ui/component/viewers/pdfViewer.jsx":
/*!*********************************************!*\
  !*** ../ui/component/viewers/pdfViewer.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var util_context_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util/context-menu */ \"../ui/util/context-menu.js\");\n/* harmony import */ var component_IframeReact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/IframeReact */ \"../ui/component/IframeReact/index.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n\n\n\n\nvar PdfViewer = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(PdfViewer, _React$PureComponent);\n\n  function PdfViewer() {\n    _classCallCheck(this, PdfViewer);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(PdfViewer).apply(this, arguments));\n  }\n\n  _createClass(PdfViewer, [{\n    key: \"render\",\n    value: function render() {\n      var source = this.props.source;\n      var src =  true ? source : undefined;\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        className: \"file-viewer file-viewer--document\",\n        onContextMenu: util_context_menu__WEBPACK_IMPORTED_MODULE_1__[\"stopContextMenu\"]\n      }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n        className: \"file-viewer file-viewer--iframe\"\n      }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](component_IframeReact__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: __('File preview'),\n        src: src\n      })));\n    }\n  }]);\n\n  return PdfViewer;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PdfViewer);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L3ZpZXdlcnMvcGRmVmlld2VyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9jb21wb25lbnQvdmlld2Vycy9wZGZWaWV3ZXIuanN4PzY1NzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzdG9wQ29udGV4dE1lbnUgfSBmcm9tICd1dGlsL2NvbnRleHQtbWVudSc7XHJcbmltcG9ydCBJZnJhbWVSZWFjdCBmcm9tICdjb21wb25lbnQvSWZyYW1lUmVhY3QnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBzb3VyY2U6IHN0cmluZyxcclxufTtcclxuXHJcbmNsYXNzIFBkZlZpZXdlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNvdXJjZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHNyYyA9IElTX1dFQiA/IHNvdXJjZSA6IGBmaWxlOi8vJHtzb3VyY2V9YDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS12aWV3ZXIgZmlsZS12aWV3ZXItLWRvY3VtZW50XCIgb25Db250ZXh0TWVudT17c3RvcENvbnRleHRNZW51fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtdmlld2VyIGZpbGUtdmlld2VyLS1pZnJhbWVcIj5cclxuICAgICAgICAgIDxJZnJhbWVSZWFjdCB0aXRsZT17X18oJ0ZpbGUgcHJldmlldycpfSBzcmM9e3NyY30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGRmVmlld2VyO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7Ozs7QUFYQTtBQUNBO0FBYUE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/component/viewers/pdfViewer.jsx\n");

/***/ })

}]);