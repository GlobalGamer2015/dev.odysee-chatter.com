(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalFileSelection"],{

/***/ "../ui/component/common/file-list.jsx":
/*!********************************************!*\
  !*** ../ui/component/common/file-list.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reakit_Radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reakit/Radio */ \"../node_modules/reakit/es/Radio/index.js\");\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\n\n // Same as FormField type=\"radio\" but it works with reakit:\n\nvar ForwardedRadio = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"radio\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({}, props, {\n    type: \"radio\",\n    ref: ref\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: props.id\n  }, props.label));\n});\n\nfunction FileList(props) {\n  var files = props.files,\n      onChange = props.onChange;\n  var radio = Object(reakit_Radio__WEBPACK_IMPORTED_MODULE_1__[\"useRadioState\"])();\n\n  var getFile = function getFile(value) {\n    if (files && files.length) {\n      return files.find(function (file) {\n        return file.name === value;\n      });\n    }\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {\n    if (radio.stops.length) {\n      if (!radio.currentId) {\n        radio.first();\n      } else {\n        var first = radio.stops[0].ref.current; // First auto-selection\n\n        if (first && first.id === radio.currentId && !radio.state) {\n          var file = getFile(first.value); // Update state and select new file\n\n          onChange(file);\n          radio.setState(first.value);\n        }\n\n        if (radio.state) {\n          // Find selected element\n          var stop = radio.stops.find(function (item) {\n            return item.id === radio.currentId;\n          });\n          var element = stop && stop.ref.current; // Only update state if new item is selected\n\n          if (element && element.value !== radio.state) {\n            var _file = getFile(element.value); // Sselect new file and update state\n\n\n            onChange(_file);\n            radio.setState(element.value);\n          }\n        }\n      }\n    }\n  }, [radio, onChange]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'file-list'\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reakit_Radio__WEBPACK_IMPORTED_MODULE_1__[\"RadioGroup\"], _extends({}, radio, {\n    \"aria-label\": \"files\"\n  }), files.map(function (_ref) {\n    var name = _ref.name;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reakit_Radio__WEBPACK_IMPORTED_MODULE_1__[\"Radio\"], _extends({\n      key: name\n    }, radio, {\n      value: name,\n      label: name,\n      as: ForwardedRadio\n    }));\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L2NvbW1vbi9maWxlLWxpc3QuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL2NvbXBvbmVudC9jb21tb24vZmlsZS1saXN0LmpzeD82YTU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJhZGlvU3RhdGUsIFJhZGlvLCBSYWRpb0dyb3VwIH0gZnJvbSAncmVha2l0L1JhZGlvJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgZmlsZXM6IEFycmF5PFdlYkZpbGU+LFxyXG4gIG9uQ2hhbmdlOiAoV2ViRmlsZSB8IHZvaWQpID0+IHZvaWQsXHJcbn07XHJcblxyXG50eXBlIFJhZGlvUHJvcHMgPSB7XHJcbiAgaWQ6IHN0cmluZyxcclxuICBsYWJlbDogc3RyaW5nLFxyXG59O1xyXG5cclxuLy8gU2FtZSBhcyBGb3JtRmllbGQgdHlwZT1cInJhZGlvXCIgYnV0IGl0IHdvcmtzIHdpdGggcmVha2l0OlxyXG5jb25zdCBGb3J3YXJkZWRSYWRpbyA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzOiBSYWRpb1Byb3BzLCByZWYpID0+IChcclxuICA8c3BhbiBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgPGlucHV0IHsuLi5wcm9wc30gdHlwZT1cInJhZGlvXCIgcmVmPXtyZWZ9IC8+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMuaWR9Pntwcm9wcy5sYWJlbH08L2xhYmVsPlxyXG4gIDwvc3Bhbj5cclxuKSk7XHJcblxyXG5mdW5jdGlvbiBGaWxlTGlzdChwcm9wczogUHJvcHMpIHtcclxuICBjb25zdCB7IGZpbGVzLCBvbkNoYW5nZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgcmFkaW8gPSB1c2VSYWRpb1N0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGdldEZpbGUgPSAodmFsdWU/OiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZpbGVzLmZpbmQoKGZpbGU6IFdlYkZpbGUpID0+IGZpbGUubmFtZSA9PT0gdmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocmFkaW8uc3RvcHMubGVuZ3RoKSB7XHJcbiAgICAgIGlmICghcmFkaW8uY3VycmVudElkKSB7XHJcbiAgICAgICAgcmFkaW8uZmlyc3QoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBmaXJzdCA9IHJhZGlvLnN0b3BzWzBdLnJlZi5jdXJyZW50O1xyXG4gICAgICAgIC8vIEZpcnN0IGF1dG8tc2VsZWN0aW9uXHJcbiAgICAgICAgaWYgKGZpcnN0ICYmIGZpcnN0LmlkID09PSByYWRpby5jdXJyZW50SWQgJiYgIXJhZGlvLnN0YXRlKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlID0gZ2V0RmlsZShmaXJzdC52YWx1ZSk7XHJcbiAgICAgICAgICAvLyBVcGRhdGUgc3RhdGUgYW5kIHNlbGVjdCBuZXcgZmlsZVxyXG4gICAgICAgICAgb25DaGFuZ2UoZmlsZSk7XHJcbiAgICAgICAgICByYWRpby5zZXRTdGF0ZShmaXJzdC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmFkaW8uc3RhdGUpIHtcclxuICAgICAgICAgIC8vIEZpbmQgc2VsZWN0ZWQgZWxlbWVudFxyXG4gICAgICAgICAgY29uc3Qgc3RvcCA9IHJhZGlvLnN0b3BzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSByYWRpby5jdXJyZW50SWQpO1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHN0b3AgJiYgc3RvcC5yZWYuY3VycmVudDtcclxuICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIHN0YXRlIGlmIG5ldyBpdGVtIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnZhbHVlICE9PSByYWRpby5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZ2V0RmlsZShlbGVtZW50LnZhbHVlKTtcclxuICAgICAgICAgICAgLy8gU3NlbGVjdCBuZXcgZmlsZSBhbmQgdXBkYXRlIHN0YXRlXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlKGZpbGUpO1xyXG4gICAgICAgICAgICByYWRpby5zZXRTdGF0ZShlbGVtZW50LnZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcmFkaW8sIG9uQ2hhbmdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17J2ZpbGUtbGlzdCd9PlxyXG4gICAgICA8UmFkaW9Hcm91cCB7Li4ucmFkaW99IGFyaWEtbGFiZWw9XCJmaWxlc1wiPlxyXG4gICAgICAgIHtmaWxlcy5tYXAoKHsgbmFtZSB9KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPFJhZGlvIGtleT17bmFtZX0gey4uLnJhZGlvfSB2YWx1ZT17bmFtZX0gbGFiZWw9e25hbWV9IGFzPXtGb3J3YXJkZWRSYWRpb30gLz47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvUmFkaW9Hcm91cD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVMaXN0O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQThCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBU0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/component/common/file-list.jsx\n");

/***/ }),

/***/ "../ui/modal/modal.jsx":
/*!*****************************!*\
  !*** ../ui/modal/modal.jsx ***!
  \*****************************/
/*! exports provided: Modal, ExpandableModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExpandableModal\", function() { return ExpandableModal; });\n/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"../node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var effects_use_screensize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! effects/use-screensize */ \"../ui/effects/use-screensize.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n} // These should probably just be combined into one modal component\n\n\n\n\n\n\n\n\nfunction Modal(props) {\n  var children = props.children,\n      _props$type = props.type,\n      type = _props$type === void 0 ? 'alert' : _props$type,\n      _props$confirmButtonL = props.confirmButtonLabel,\n      confirmButtonLabel = _props$confirmButtonL === void 0 ? __('OK') : _props$confirmButtonL,\n      _props$confirmButtonD = props.confirmButtonDisabled,\n      confirmButtonDisabled = _props$confirmButtonD === void 0 ? false : _props$confirmButtonD,\n      onConfirmed = props.onConfirmed,\n      _props$abortButtonLab = props.abortButtonLabel,\n      abortButtonLabel = _props$abortButtonLab === void 0 ? __('Cancel') : _props$abortButtonLab,\n      _props$abortButtonDis = props.abortButtonDisabled,\n      abortButtonDisabled = _props$abortButtonDis === void 0 ? false : _props$abortButtonDis,\n      onAborted = props.onAborted,\n      className = props.className,\n      title = props.title,\n      modalProps = _objectWithoutProperties(props, [\"children\", \"type\", \"confirmButtonLabel\", \"confirmButtonDisabled\", \"onConfirmed\", \"abortButtonLabel\", \"abortButtonDisabled\", \"onAborted\", \"className\", \"title\"]);\n\n  var isMobile = Object(effects_use_screensize__WEBPACK_IMPORTED_MODULE_5__[\"useIsMobile\"])();\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, modalProps, {\n    onRequestClose: onAborted || onConfirmed,\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('modal', className, {\n      'modal--card-internal': type === 'card'\n    }),\n    overlayClassName: \"modal-overlay\"\n  }), title && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"h1\", {\n    className: \"card__title card__title--deprecated\"\n  }, title), type === 'card' && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    iconSize: isMobile ? 24 : undefined,\n    button: \"close\",\n    \"aria-label\": __('Close'),\n    icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE\"],\n    onClick: onAborted\n  }), children, type === 'custom' || type === 'card' ? null : // custom modals define their own buttons\n  react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    className: \"card__actions\"\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: \"primary\",\n    label: confirmButtonLabel,\n    disabled: confirmButtonDisabled,\n    onClick: onConfirmed\n  }), type === 'confirm' ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: \"link\",\n    label: abortButtonLabel,\n    disabled: abortButtonDisabled,\n    onClick: onAborted\n  }) : null));\n}\nvar ExpandableModal = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ExpandableModal, _React$PureComponent);\n\n  function ExpandableModal(props) {\n    var _this;\n\n    _classCallCheck(this, ExpandableModal);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpandableModal).call(this, props));\n    _this.state = {\n      expanded: false\n    };\n    return _this;\n  }\n\n  _createClass(ExpandableModal, [{\n    key: \"toggleExpanded\",\n    value: function toggleExpanded() {\n      this.setState({\n        expanded: !this.state.expanded\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Modal, _extends({\n        type: \"custom\"\n      }, this.props), this.props.children, this.state.expanded ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", null, this.props.extraContent) : null, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"card__actions\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"primary\",\n        label: this.props.confirmButtonLabel,\n        onClick: this.props.onConfirmed\n      }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"link\",\n        label: !this.state.expanded ? this.props.expandButtonLabel : this.props.hideButtonLabel,\n        onClick: function onClick() {\n          _this2.toggleExpanded();\n        }\n      })));\n    }\n  }]);\n\n  return ExpandableModal;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"PureComponent\"]);\n\n_defineProperty(ExpandableModal, \"defaultProps\", {\n  confirmButtonLabel: __('OK'),\n  expandButtonLabel: __('Show More...'),\n  hideButtonLabel: __('Show Less')\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsLmpzeD9mMDY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbi8vIFRoZXNlIHNob3VsZCBwcm9iYWJseSBqdXN0IGJlIGNvbWJpbmVkIGludG8gb25lIG1vZGFsIGNvbXBvbmVudFxyXG5pbXBvcnQgKiBhcyBJQ09OUyBmcm9tICdjb25zdGFudHMvaWNvbnMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnQvYnV0dG9uJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZUlzTW9iaWxlIH0gZnJvbSAnZWZmZWN0cy91c2Utc2NyZWVuc2l6ZSc7XHJcblxyXG50eXBlIE1vZGFsUHJvcHMgPSB7XHJcbiAgdHlwZT86IHN0cmluZyxcclxuICBvdmVybGF5PzogYm9vbGVhbixcclxuICBjb25maXJtQnV0dG9uTGFiZWw/OiBzdHJpbmcsXHJcbiAgYWJvcnRCdXR0b25MYWJlbD86IHN0cmluZyxcclxuICBjb25maXJtQnV0dG9uRGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gIGFib3J0QnV0dG9uRGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gIG9uQ29uZmlybWVkPzogKGFueSkgPT4gYW55LFxyXG4gIG9uQWJvcnRlZD86IChhbnkpID0+IGFueSxcclxuICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxyXG4gIGV4dHJhQ29udGVudD86IFJlYWN0Lk5vZGUsXHJcbiAgZXhwYW5kQnV0dG9uTGFiZWw/OiBzdHJpbmcsXHJcbiAgaGlkZUJ1dHRvbkxhYmVsPzogc3RyaW5nLFxyXG4gIHRpdGxlPzogc3RyaW5nIHwgUmVhY3QuTm9kZSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNb2RhbChwcm9wczogTW9kYWxQcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgdHlwZSA9ICdhbGVydCcsXHJcbiAgICBjb25maXJtQnV0dG9uTGFiZWwgPSBfXygnT0snKSxcclxuICAgIGNvbmZpcm1CdXR0b25EaXNhYmxlZCA9IGZhbHNlLFxyXG4gICAgb25Db25maXJtZWQsXHJcbiAgICBhYm9ydEJ1dHRvbkxhYmVsID0gX18oJ0NhbmNlbCcpLFxyXG4gICAgYWJvcnRCdXR0b25EaXNhYmxlZCA9IGZhbHNlLFxyXG4gICAgb25BYm9ydGVkLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGl0bGUsXHJcbiAgICAuLi5tb2RhbFByb3BzXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHVzZUlzTW9iaWxlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3RNb2RhbFxyXG4gICAgICB7Li4ubW9kYWxQcm9wc31cclxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e29uQWJvcnRlZCB8fCBvbkNvbmZpcm1lZH1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtb2RhbCcsIGNsYXNzTmFtZSwge1xyXG4gICAgICAgICdtb2RhbC0tY2FyZC1pbnRlcm5hbCc6IHR5cGUgPT09ICdjYXJkJyxcclxuICAgICAgfSl9XHJcbiAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCJcclxuICAgID5cclxuICAgICAge3RpdGxlICYmIDxoMSBjbGFzc05hbWU9XCJjYXJkX190aXRsZSBjYXJkX190aXRsZS0tZGVwcmVjYXRlZFwiPnt0aXRsZX08L2gxPn1cclxuICAgICAge3R5cGUgPT09ICdjYXJkJyAmJiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgaWNvblNpemU9e2lzTW9iaWxlID8gMjQgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICBidXR0b249XCJjbG9zZVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPXtfXygnQ2xvc2UnKX1cclxuICAgICAgICAgIGljb249e0lDT05TLlJFTU9WRX1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uQWJvcnRlZH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIHt0eXBlID09PSAnY3VzdG9tJyB8fCB0eXBlID09PSAnY2FyZCcgPyBudWxsIDogKCAvLyBjdXN0b20gbW9kYWxzIGRlZmluZSB0aGVpciBvd24gYnV0dG9uc1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJwcmltYXJ5XCIgbGFiZWw9e2NvbmZpcm1CdXR0b25MYWJlbH0gZGlzYWJsZWQ9e2NvbmZpcm1CdXR0b25EaXNhYmxlZH0gb25DbGljaz17b25Db25maXJtZWR9IC8+XHJcbiAgICAgICAgICB7dHlwZSA9PT0gJ2NvbmZpcm0nID8gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGJ1dHRvbj1cImxpbmtcIiBsYWJlbD17YWJvcnRCdXR0b25MYWJlbH0gZGlzYWJsZWQ9e2Fib3J0QnV0dG9uRGlzYWJsZWR9IG9uQ2xpY2s9e29uQWJvcnRlZH0gLz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9SZWFjdE1vZGFsPlxyXG4gICk7XHJcbn1cclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgZXhwYW5kZWQ6IGJvb2xlYW4sXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZU1vZGFsIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxNb2RhbFByb3BzLCBTdGF0ZT4ge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb25maXJtQnV0dG9uTGFiZWw6IF9fKCdPSycpLFxyXG4gICAgZXhwYW5kQnV0dG9uTGFiZWw6IF9fKCdTaG93IE1vcmUuLi4nKSxcclxuICAgIGhpZGVCdXR0b25MYWJlbDogX18oJ1Nob3cgTGVzcycpLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBNb2RhbFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUV4cGFuZGVkKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsIHR5cGU9XCJjdXN0b21cIiB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAge3RoaXMuc3RhdGUuZXhwYW5kZWQgPyA8ZGl2Pnt0aGlzLnByb3BzLmV4dHJhQ29udGVudH08L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJwcmltYXJ5XCIgbGFiZWw9e3RoaXMucHJvcHMuY29uZmlybUJ1dHRvbkxhYmVsfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ29uZmlybWVkfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBidXR0b249XCJsaW5rXCJcclxuICAgICAgICAgICAgbGFiZWw9eyF0aGlzLnN0YXRlLmV4cGFuZGVkID8gdGhpcy5wcm9wcy5leHBhbmRCdXR0b25MYWJlbCA6IHRoaXMucHJvcHMuaGlkZUJ1dHRvbkxhYmVsfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlZCgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFjQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBUUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFNQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQURBO0FBR0E7QUFuQkE7QUFBQTtBQUFBO0FBcUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQXRDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBdUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modal.jsx\n");

/***/ }),

/***/ "../ui/modal/modalFileSelection/index.js":
/*!***********************************************!*\
  !*** ../ui/modal/modalFileSelection/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var redux_actions_publish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/actions/publish */ \"../ui/redux/actions/publish.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalFileSelection/view.jsx\");\n\n\n\n\n\nvar perform = function perform(dispatch) {\n  return {\n    hideModal: function hideModal(props) {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_1__[\"doHideModal\"])(props));\n    },\n    updatePublishForm: function updatePublishForm(value) {\n      return dispatch(Object(redux_actions_publish__WEBPACK_IMPORTED_MODULE_2__[\"doUpdatePublishForm\"])(value));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(null, perform)(_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxGaWxlU2VsZWN0aW9uL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsRmlsZVNlbGVjdGlvbi9pbmRleC5qcz8xZjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGRvSGlkZU1vZGFsIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9hcHAnO1xyXG5pbXBvcnQgeyBkb1VwZGF0ZVB1Ymxpc2hGb3JtIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9wdWJsaXNoJztcclxuXHJcbmltcG9ydCBNb2RhRmlsZVNlbGVjdGlvbiBmcm9tICcuL3ZpZXcnO1xyXG5cclxuY29uc3QgcGVyZm9ybSA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBoaWRlTW9kYWw6IChwcm9wcykgPT4gZGlzcGF0Y2goZG9IaWRlTW9kYWwocHJvcHMpKSxcclxuICB1cGRhdGVQdWJsaXNoRm9ybTogKHZhbHVlKSA9PiBkaXNwYXRjaChkb1VwZGF0ZVB1Ymxpc2hGb3JtKHZhbHVlKSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBwZXJmb3JtKShNb2RhRmlsZVNlbGVjdGlvbik7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modalFileSelection/index.js\n");

/***/ }),

/***/ "../ui/modal/modalFileSelection/view.jsx":
/*!***********************************************!*\
  !*** ../ui/modal/modalFileSelection/view.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var constants_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/pages */ \"../ui/constants/pages.js\");\n/* harmony import */ var constants_pages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(constants_pages__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"../node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var component_common_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! component/common/card */ \"../ui/component/common/card.jsx\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var component_common_file_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! component/common/file-list */ \"../ui/component/common/file-list.jsx\");\nfunction _slicedToArray(arr, i) {\n  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\n\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nfunction _iterableToArrayLimit(arr, i) {\n  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) {\n    return;\n  }\n\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n\n\n\n\n\n\n\n\nvar PUBLISH_URL = \"/$/\".concat(constants_pages__WEBPACK_IMPORTED_MODULE_1__[\"UPLOAD\"]);\n\nvar ModalFileSelection = function ModalFileSelection(props) {\n  var history = props.history,\n      files = props.files,\n      hideModal = props.hideModal,\n      updatePublishForm = props.updatePublishForm;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      selectedFile = _React$useState2[0],\n      setSelectedFile = _React$useState2[1];\n\n  var navigateToPublish = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function () {\n    // Navigate only if location is not publish area:\n    // - Prevent spam in history\n    if (history.location.pathname !== PUBLISH_URL) {\n      history.push(PUBLISH_URL);\n    }\n  }, [history]);\n\n  function handleCloseModal() {\n    hideModal();\n    setSelectedFile(null);\n  }\n\n  function handleSubmit() {\n    updatePublishForm({\n      filePath: selectedFile\n    });\n    handleCloseModal();\n    navigateToPublish();\n  }\n\n  var handleFileChange = function handleFileChange(file) {\n    // $FlowFixMe\n    setSelectedFile(file);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n    isOpen: true,\n    type: \"card\",\n    onAborted: handleCloseModal,\n    onConfirmed: handleCloseModal\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_common_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"PUBLISH\"],\n    title: __('Choose a file'),\n    subtitle: __('Only one file is allowed, choose wisely:'),\n    actions: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_common_file_list__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      files: files,\n      onChange: handleFileChange\n    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"section__actions\"\n    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      disabled: !selectedFile || !files || !files.length,\n      button: \"primary\",\n      label: __('Accept'),\n      onClick: handleSubmit\n    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      button: \"link\",\n      label: __('Cancel'),\n      onClick: handleCloseModal\n    })))\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(ModalFileSelection));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxGaWxlU2VsZWN0aW9uL3ZpZXcuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsRmlsZVNlbGVjdGlvbi92aWV3LmpzeD9lYTMyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbmltcG9ydCAqIGFzIElDT05TIGZyb20gJ2NvbnN0YW50cy9pY29ucyc7XHJcbmltcG9ydCAqIGFzIFBBR0VTIGZyb20gJ2NvbnN0YW50cy9wYWdlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnbW9kYWwvbW9kYWwnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IENhcmQgZnJvbSAnY29tcG9uZW50L2NvbW1vbi9jYXJkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnQvYnV0dG9uJztcclxuaW1wb3J0IEZpbGVMaXN0IGZyb20gJ2NvbXBvbmVudC9jb21tb24vZmlsZS1saXN0JztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgZmlsZXM6IEFycmF5PFdlYkZpbGU+LFxyXG4gIGhpZGVNb2RhbDogKCkgPT4gdm9pZCxcclxuICB1cGRhdGVQdWJsaXNoRm9ybTogKHt9KSA9PiB2b2lkLFxyXG4gIGhpc3Rvcnk6IHtcclxuICAgIGxvY2F0aW9uOiB7IHBhdGhuYW1lOiBzdHJpbmcgfSxcclxuICAgIHB1c2g6IHN0cmluZyA9PiB2b2lkLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBQVUJMSVNIX1VSTCA9IGAvJC8ke1BBR0VTLlVQTE9BRH1gO1xyXG5cclxuY29uc3QgTW9kYWxGaWxlU2VsZWN0aW9uID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaGlzdG9yeSwgZmlsZXMsIGhpZGVNb2RhbCwgdXBkYXRlUHVibGlzaEZvcm0gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgbmF2aWdhdGVUb1B1Ymxpc2ggPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAvLyBOYXZpZ2F0ZSBvbmx5IGlmIGxvY2F0aW9uIGlzIG5vdCBwdWJsaXNoIGFyZWE6XHJcbiAgICAvLyAtIFByZXZlbnQgc3BhbSBpbiBoaXN0b3J5XHJcbiAgICBpZiAoaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSAhPT0gUFVCTElTSF9VUkwpIHtcclxuICAgICAgaGlzdG9yeS5wdXNoKFBVQkxJU0hfVVJMKTtcclxuICAgIH1cclxuICB9LCBbaGlzdG9yeV0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZU1vZGFsKCkge1xyXG4gICAgaGlkZU1vZGFsKCk7XHJcbiAgICBzZXRTZWxlY3RlZEZpbGUobnVsbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICB1cGRhdGVQdWJsaXNoRm9ybSh7IGZpbGVQYXRoOiBzZWxlY3RlZEZpbGUgfSk7XHJcbiAgICBoYW5kbGVDbG9zZU1vZGFsKCk7XHJcbiAgICBuYXZpZ2F0ZVRvUHVibGlzaCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChmaWxlPzogV2ViRmlsZSkgPT4ge1xyXG4gICAgLy8gJEZsb3dGaXhNZVxyXG4gICAgc2V0U2VsZWN0ZWRGaWxlKGZpbGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWwgaXNPcGVuIHR5cGU9XCJjYXJkXCIgb25BYm9ydGVkPXtoYW5kbGVDbG9zZU1vZGFsfSBvbkNvbmZpcm1lZD17aGFuZGxlQ2xvc2VNb2RhbH0+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgaWNvbj17SUNPTlMuUFVCTElTSH1cclxuICAgICAgICB0aXRsZT17X18oJ0Nob29zZSBhIGZpbGUnKX1cclxuICAgICAgICBzdWJ0aXRsZT17X18oJ09ubHkgb25lIGZpbGUgaXMgYWxsb3dlZCwgY2hvb3NlIHdpc2VseTonKX1cclxuICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEZpbGVMaXN0IGZpbGVzPXtmaWxlc30gb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2FjdGlvbnNcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkRmlsZSB8fCAhZmlsZXMgfHwgIWZpbGVzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e19fKCdBY2NlcHQnKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uPVwibGlua1wiIGxhYmVsPXtfXygnQ2FuY2VsJyl9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihNb2RhbEZpbGVTZWxlY3Rpb24pO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQWhCQTtBQTlCQTtBQUNBO0FBc0RBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modalFileSelection/view.jsx\n");

/***/ })

}]);