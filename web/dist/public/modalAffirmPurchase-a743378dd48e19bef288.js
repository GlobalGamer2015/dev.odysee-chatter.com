(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalAffirmPurchase"],{

/***/ "../ui/modal/modal.jsx":
/*!*****************************!*\
  !*** ../ui/modal/modal.jsx ***!
  \*****************************/
/*! exports provided: Modal, ExpandableModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExpandableModal\", function() { return ExpandableModal; });\n/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"../node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var effects_use_screensize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! effects/use-screensize */ \"../ui/effects/use-screensize.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n} // These should probably just be combined into one modal component\n\n\n\n\n\n\n\n\nfunction Modal(props) {\n  var children = props.children,\n      _props$type = props.type,\n      type = _props$type === void 0 ? 'alert' : _props$type,\n      _props$confirmButtonL = props.confirmButtonLabel,\n      confirmButtonLabel = _props$confirmButtonL === void 0 ? __('OK') : _props$confirmButtonL,\n      _props$confirmButtonD = props.confirmButtonDisabled,\n      confirmButtonDisabled = _props$confirmButtonD === void 0 ? false : _props$confirmButtonD,\n      onConfirmed = props.onConfirmed,\n      _props$abortButtonLab = props.abortButtonLabel,\n      abortButtonLabel = _props$abortButtonLab === void 0 ? __('Cancel') : _props$abortButtonLab,\n      _props$abortButtonDis = props.abortButtonDisabled,\n      abortButtonDisabled = _props$abortButtonDis === void 0 ? false : _props$abortButtonDis,\n      onAborted = props.onAborted,\n      className = props.className,\n      title = props.title,\n      modalProps = _objectWithoutProperties(props, [\"children\", \"type\", \"confirmButtonLabel\", \"confirmButtonDisabled\", \"onConfirmed\", \"abortButtonLabel\", \"abortButtonDisabled\", \"onAborted\", \"className\", \"title\"]);\n\n  var isMobile = Object(effects_use_screensize__WEBPACK_IMPORTED_MODULE_5__[\"useIsMobile\"])();\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, modalProps, {\n    onRequestClose: onAborted || onConfirmed,\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('modal', className, {\n      'modal--card-internal': type === 'card'\n    }),\n    overlayClassName: \"modal-overlay\"\n  }), title && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"h1\", {\n    className: \"card__title card__title--deprecated\"\n  }, title), type === 'card' && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    iconSize: isMobile ? 24 : undefined,\n    button: \"close\",\n    \"aria-label\": __('Close'),\n    icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE\"],\n    onClick: onAborted\n  }), children, type === 'custom' || type === 'card' ? null : // custom modals define their own buttons\n  react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    className: \"card__actions\"\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: \"primary\",\n    label: confirmButtonLabel,\n    disabled: confirmButtonDisabled,\n    onClick: onConfirmed\n  }), type === 'confirm' ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: \"link\",\n    label: abortButtonLabel,\n    disabled: abortButtonDisabled,\n    onClick: onAborted\n  }) : null));\n}\nvar ExpandableModal = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ExpandableModal, _React$PureComponent);\n\n  function ExpandableModal(props) {\n    var _this;\n\n    _classCallCheck(this, ExpandableModal);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpandableModal).call(this, props));\n    _this.state = {\n      expanded: false\n    };\n    return _this;\n  }\n\n  _createClass(ExpandableModal, [{\n    key: \"toggleExpanded\",\n    value: function toggleExpanded() {\n      this.setState({\n        expanded: !this.state.expanded\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Modal, _extends({\n        type: \"custom\"\n      }, this.props), this.props.children, this.state.expanded ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", null, this.props.extraContent) : null, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"card__actions\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"primary\",\n        label: this.props.confirmButtonLabel,\n        onClick: this.props.onConfirmed\n      }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"link\",\n        label: !this.state.expanded ? this.props.expandButtonLabel : this.props.hideButtonLabel,\n        onClick: function onClick() {\n          _this2.toggleExpanded();\n        }\n      })));\n    }\n  }]);\n\n  return ExpandableModal;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"PureComponent\"]);\n\n_defineProperty(ExpandableModal, \"defaultProps\", {\n  confirmButtonLabel: __('OK'),\n  expandButtonLabel: __('Show More...'),\n  hideButtonLabel: __('Show Less')\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsLmpzeD9mMDY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbi8vIFRoZXNlIHNob3VsZCBwcm9iYWJseSBqdXN0IGJlIGNvbWJpbmVkIGludG8gb25lIG1vZGFsIGNvbXBvbmVudFxyXG5pbXBvcnQgKiBhcyBJQ09OUyBmcm9tICdjb25zdGFudHMvaWNvbnMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnQvYnV0dG9uJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZUlzTW9iaWxlIH0gZnJvbSAnZWZmZWN0cy91c2Utc2NyZWVuc2l6ZSc7XHJcblxyXG50eXBlIE1vZGFsUHJvcHMgPSB7XHJcbiAgdHlwZT86IHN0cmluZyxcclxuICBvdmVybGF5PzogYm9vbGVhbixcclxuICBjb25maXJtQnV0dG9uTGFiZWw/OiBzdHJpbmcsXHJcbiAgYWJvcnRCdXR0b25MYWJlbD86IHN0cmluZyxcclxuICBjb25maXJtQnV0dG9uRGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gIGFib3J0QnV0dG9uRGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gIG9uQ29uZmlybWVkPzogKGFueSkgPT4gYW55LFxyXG4gIG9uQWJvcnRlZD86IChhbnkpID0+IGFueSxcclxuICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxyXG4gIGV4dHJhQ29udGVudD86IFJlYWN0Lk5vZGUsXHJcbiAgZXhwYW5kQnV0dG9uTGFiZWw/OiBzdHJpbmcsXHJcbiAgaGlkZUJ1dHRvbkxhYmVsPzogc3RyaW5nLFxyXG4gIHRpdGxlPzogc3RyaW5nIHwgUmVhY3QuTm9kZSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNb2RhbChwcm9wczogTW9kYWxQcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgdHlwZSA9ICdhbGVydCcsXHJcbiAgICBjb25maXJtQnV0dG9uTGFiZWwgPSBfXygnT0snKSxcclxuICAgIGNvbmZpcm1CdXR0b25EaXNhYmxlZCA9IGZhbHNlLFxyXG4gICAgb25Db25maXJtZWQsXHJcbiAgICBhYm9ydEJ1dHRvbkxhYmVsID0gX18oJ0NhbmNlbCcpLFxyXG4gICAgYWJvcnRCdXR0b25EaXNhYmxlZCA9IGZhbHNlLFxyXG4gICAgb25BYm9ydGVkLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGl0bGUsXHJcbiAgICAuLi5tb2RhbFByb3BzXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHVzZUlzTW9iaWxlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3RNb2RhbFxyXG4gICAgICB7Li4ubW9kYWxQcm9wc31cclxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e29uQWJvcnRlZCB8fCBvbkNvbmZpcm1lZH1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtb2RhbCcsIGNsYXNzTmFtZSwge1xyXG4gICAgICAgICdtb2RhbC0tY2FyZC1pbnRlcm5hbCc6IHR5cGUgPT09ICdjYXJkJyxcclxuICAgICAgfSl9XHJcbiAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCJcclxuICAgID5cclxuICAgICAge3RpdGxlICYmIDxoMSBjbGFzc05hbWU9XCJjYXJkX190aXRsZSBjYXJkX190aXRsZS0tZGVwcmVjYXRlZFwiPnt0aXRsZX08L2gxPn1cclxuICAgICAge3R5cGUgPT09ICdjYXJkJyAmJiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgaWNvblNpemU9e2lzTW9iaWxlID8gMjQgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICBidXR0b249XCJjbG9zZVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPXtfXygnQ2xvc2UnKX1cclxuICAgICAgICAgIGljb249e0lDT05TLlJFTU9WRX1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uQWJvcnRlZH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIHt0eXBlID09PSAnY3VzdG9tJyB8fCB0eXBlID09PSAnY2FyZCcgPyBudWxsIDogKCAvLyBjdXN0b20gbW9kYWxzIGRlZmluZSB0aGVpciBvd24gYnV0dG9uc1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJwcmltYXJ5XCIgbGFiZWw9e2NvbmZpcm1CdXR0b25MYWJlbH0gZGlzYWJsZWQ9e2NvbmZpcm1CdXR0b25EaXNhYmxlZH0gb25DbGljaz17b25Db25maXJtZWR9IC8+XHJcbiAgICAgICAgICB7dHlwZSA9PT0gJ2NvbmZpcm0nID8gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGJ1dHRvbj1cImxpbmtcIiBsYWJlbD17YWJvcnRCdXR0b25MYWJlbH0gZGlzYWJsZWQ9e2Fib3J0QnV0dG9uRGlzYWJsZWR9IG9uQ2xpY2s9e29uQWJvcnRlZH0gLz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9SZWFjdE1vZGFsPlxyXG4gICk7XHJcbn1cclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgZXhwYW5kZWQ6IGJvb2xlYW4sXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZU1vZGFsIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxNb2RhbFByb3BzLCBTdGF0ZT4ge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb25maXJtQnV0dG9uTGFiZWw6IF9fKCdPSycpLFxyXG4gICAgZXhwYW5kQnV0dG9uTGFiZWw6IF9fKCdTaG93IE1vcmUuLi4nKSxcclxuICAgIGhpZGVCdXR0b25MYWJlbDogX18oJ1Nob3cgTGVzcycpLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBNb2RhbFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUV4cGFuZGVkKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsIHR5cGU9XCJjdXN0b21cIiB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAge3RoaXMuc3RhdGUuZXhwYW5kZWQgPyA8ZGl2Pnt0aGlzLnByb3BzLmV4dHJhQ29udGVudH08L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJwcmltYXJ5XCIgbGFiZWw9e3RoaXMucHJvcHMuY29uZmlybUJ1dHRvbkxhYmVsfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ29uZmlybWVkfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBidXR0b249XCJsaW5rXCJcclxuICAgICAgICAgICAgbGFiZWw9eyF0aGlzLnN0YXRlLmV4cGFuZGVkID8gdGhpcy5wcm9wcy5leHBhbmRCdXR0b25MYWJlbCA6IHRoaXMucHJvcHMuaGlkZUJ1dHRvbkxhYmVsfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlZCgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFjQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBUUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFNQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQURBO0FBR0E7QUFuQkE7QUFBQTtBQUFBO0FBcUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQXRDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBdUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modal.jsx\n");

/***/ }),

/***/ "../ui/modal/modalAffirmPurchase/index.js":
/*!************************************************!*\
  !*** ../ui/modal/modalAffirmPurchase/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/content */ \"../ui/redux/actions/content.js\");\n/* harmony import */ var redux_selectors_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/selectors/content */ \"../ui/redux/selectors/content.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var redux_selectors_claims__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux/selectors/claims */ \"../ui/redux/selectors/claims.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalAffirmPurchase/view.jsx\");\n\n\n\n\n\n\n\nvar select = function select(state, props) {\n  return {\n    metadata: Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_4__[\"makeSelectMetadataForUri\"])(props.uri)(state),\n    playingUri: Object(redux_selectors_content__WEBPACK_IMPORTED_MODULE_2__[\"selectPlayingUri\"])(state)\n  };\n};\n\nvar perform = function perform(dispatch) {\n  return {\n    analyticsPurchaseEvent: function analyticsPurchaseEvent(fileInfo) {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_3__[\"doAnaltyicsPurchaseEvent\"])(fileInfo));\n    },\n    setPlayingUri: function setPlayingUri(uri) {\n      return dispatch(Object(redux_actions_content__WEBPACK_IMPORTED_MODULE_1__[\"doSetPlayingUri\"])({\n        uri: uri\n      }));\n    },\n    closeModal: function closeModal() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_3__[\"doHideModal\"])());\n    },\n    loadVideo: function loadVideo(uri, onSuccess) {\n      return dispatch(Object(redux_actions_content__WEBPACK_IMPORTED_MODULE_1__[\"doPlayUri\"])(uri, true, undefined, onSuccess));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_5__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxBZmZpcm1QdXJjaGFzZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbEFmZmlybVB1cmNoYXNlL2luZGV4LmpzP2NhZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZG9QbGF5VXJpLCBkb1NldFBsYXlpbmdVcmkgfSBmcm9tICdyZWR1eC9hY3Rpb25zL2NvbnRlbnQnO1xyXG5pbXBvcnQgeyBzZWxlY3RQbGF5aW5nVXJpIH0gZnJvbSAncmVkdXgvc2VsZWN0b3JzL2NvbnRlbnQnO1xyXG5pbXBvcnQgeyBkb0hpZGVNb2RhbCwgZG9BbmFsdHlpY3NQdXJjaGFzZUV2ZW50IH0gZnJvbSAncmVkdXgvYWN0aW9ucy9hcHAnO1xyXG5pbXBvcnQgeyBtYWtlU2VsZWN0TWV0YWRhdGFGb3JVcmkgfSBmcm9tICdyZWR1eC9zZWxlY3RvcnMvY2xhaW1zJztcclxuaW1wb3J0IE1vZGFsQWZmaXJtUHVyY2hhc2UgZnJvbSAnLi92aWV3JztcclxuXHJcbmNvbnN0IHNlbGVjdCA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XHJcbiAgbWV0YWRhdGE6IG1ha2VTZWxlY3RNZXRhZGF0YUZvclVyaShwcm9wcy51cmkpKHN0YXRlKSxcclxuICBwbGF5aW5nVXJpOiBzZWxlY3RQbGF5aW5nVXJpKHN0YXRlKSxcclxufSk7XHJcblxyXG5jb25zdCBwZXJmb3JtID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGFuYWx5dGljc1B1cmNoYXNlRXZlbnQ6IChmaWxlSW5mbykgPT4gZGlzcGF0Y2goZG9BbmFsdHlpY3NQdXJjaGFzZUV2ZW50KGZpbGVJbmZvKSksXHJcbiAgc2V0UGxheWluZ1VyaTogKHVyaSkgPT4gZGlzcGF0Y2goZG9TZXRQbGF5aW5nVXJpKHsgdXJpIH0pKSxcclxuICBjbG9zZU1vZGFsOiAoKSA9PiBkaXNwYXRjaChkb0hpZGVNb2RhbCgpKSxcclxuICBsb2FkVmlkZW86ICh1cmksIG9uU3VjY2VzcykgPT4gZGlzcGF0Y2goZG9QbGF5VXJpKHVyaSwgdHJ1ZSwgdW5kZWZpbmVkLCBvblN1Y2Nlc3MpKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCwgcGVyZm9ybSkoTW9kYWxBZmZpcm1QdXJjaGFzZSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFHQTtBQUFBO0FBSEE7QUFJQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQ0E7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/modal/modalAffirmPurchase/index.js\n");

/***/ }),

/***/ "../ui/modal/modalAffirmPurchase/view.jsx":
/*!************************************************!*\
  !*** ../ui/modal/modalAffirmPurchase/view.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var component_filePrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/filePrice */ \"../ui/component/filePrice/index.js\");\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var component_common_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! component/common/card */ \"../ui/component/common/card.jsx\");\n/* harmony import */ var component_i18nMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! component/i18nMessage */ \"../ui/component/i18nMessage/index.js\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var util_lbryURI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util/lbryURI */ \"../ui/util/lbryURI.js\");\nfunction _slicedToArray(arr, i) {\n  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\n\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nfunction _iterableToArrayLimit(arr, i) {\n  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) {\n    return;\n  }\n\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n\n\n\n\n\n\n\n // This number is tied to transitions in scss/purchase.scss\n\nvar ANIMATION_LENGTH = 2500;\n\nfunction ModalAffirmPurchase(props) {\n  var closeModal = props.closeModal,\n      loadVideo = props.loadVideo,\n      title = props.metadata.title,\n      uri = props.uri,\n      analyticsPurchaseEvent = props.analyticsPurchaseEvent,\n      playingUri = props.playingUri,\n      setPlayingUri = props.setPlayingUri;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      success = _React$useState2[0],\n      setSuccess = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      purchasing = _React$useState4[0],\n      setPurchasing = _React$useState4[1];\n\n  var modalTitle = __('Confirm Purchase');\n\n  function onAffirmPurchase() {\n    setPurchasing(true);\n    loadVideo(uri, function (fileInfo) {\n      setPurchasing(false);\n      setSuccess(true);\n      analyticsPurchaseEvent(fileInfo);\n\n      if (!playingUri || playingUri.uri !== uri) {\n        setPlayingUri(uri);\n      }\n    });\n  }\n\n  function cancelPurchase() {\n    if (playingUri && Object(util_lbryURI__WEBPACK_IMPORTED_MODULE_7__[\"isURIEqual\"])(uri, playingUri.uri)) {\n      setPlayingUri(null);\n    }\n\n    closeModal();\n  }\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {\n    var timeout;\n\n    if (success) {\n      timeout = setTimeout(function () {\n        closeModal();\n        setSuccess(false);\n      }, ANIMATION_LENGTH);\n    }\n\n    return function () {\n      if (timeout) {\n        clearTimeout(timeout);\n      }\n    };\n  }, [success, uri]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n    type: \"card\",\n    isOpen: true,\n    contentLabel: modalTitle,\n    onAborted: cancelPurchase\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_common_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: modalTitle,\n    subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('purchase-stuff', {\n        'purchase-stuff--purchased': success\n      })\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, success && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"purchase-stuff__text--purchased\"\n    }, __('Purchased!'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"purchase_stuff__subtext--purchased\"\n    }, __('This content will now be in your Library.'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_i18nMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      tokens: {\n        claim_title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, title ? \"\\\"\".concat(title, \"\\\"\") : uri)\n      }\n    }, \"Are you sure you want to purchase %claim_title%?\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_filePrice__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      uri: uri,\n      showFullPrice: true,\n      type: \"modal\"\n    }))),\n    actions: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"section__actions\",\n      style: success ? {\n        visibility: 'hidden'\n      } : undefined\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      button: \"primary\",\n      disabled: purchasing,\n      label: purchasing ? __('Purchasing...') : __('Purchase'),\n      onClick: onAffirmPurchase\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      button: \"link\",\n      label: __('Cancel'),\n      onClick: cancelPurchase\n    }))\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalAffirmPurchase);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxBZmZpcm1QdXJjaGFzZS92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbEFmZmlybVB1cmNoYXNlL3ZpZXcuanN4PzAwNzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBGaWxlUHJpY2UgZnJvbSAnY29tcG9uZW50L2ZpbGVQcmljZSc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnbW9kYWwvbW9kYWwnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdjb21wb25lbnQvY29tbW9uL2NhcmQnO1xyXG5pbXBvcnQgSTE4bk1lc3NhZ2UgZnJvbSAnY29tcG9uZW50L2kxOG5NZXNzYWdlJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnQvYnV0dG9uJztcclxuaW1wb3J0IHsgaXNVUklFcXVhbCB9IGZyb20gJ3V0aWwvbGJyeVVSSSc7XHJcblxyXG4vLyBUaGlzIG51bWJlciBpcyB0aWVkIHRvIHRyYW5zaXRpb25zIGluIHNjc3MvcHVyY2hhc2Uuc2Nzc1xyXG5jb25zdCBBTklNQVRJT05fTEVOR1RIID0gMjUwMDtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2xvc2VNb2RhbDogKCkgPT4gdm9pZCxcclxuICBsb2FkVmlkZW86IChzdHJpbmcsIChHZXRSZXNwb25zZSkgPT4gdm9pZCkgPT4gdm9pZCxcclxuICB1cmk6IHN0cmluZyxcclxuICBjYW5jZWxQdXJjaGFzZTogKCkgPT4gdm9pZCxcclxuICBtZXRhZGF0YTogU3RyZWFtTWV0YWRhdGEsXHJcbiAgYW5hbHl0aWNzUHVyY2hhc2VFdmVudDogKEdldFJlc3BvbnNlKSA9PiB2b2lkLFxyXG4gIHBsYXlpbmdVcmk6ID9QbGF5aW5nVXJpLFxyXG4gIHNldFBsYXlpbmdVcmk6ICg/c3RyaW5nKSA9PiB2b2lkLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gTW9kYWxBZmZpcm1QdXJjaGFzZShwcm9wczogUHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBjbG9zZU1vZGFsLFxyXG4gICAgbG9hZFZpZGVvLFxyXG4gICAgbWV0YWRhdGE6IHsgdGl0bGUgfSxcclxuICAgIHVyaSxcclxuICAgIGFuYWx5dGljc1B1cmNoYXNlRXZlbnQsXHJcbiAgICBwbGF5aW5nVXJpLFxyXG4gICAgc2V0UGxheWluZ1VyaSxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwdXJjaGFzaW5nLCBzZXRQdXJjaGFzaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBtb2RhbFRpdGxlID0gX18oJ0NvbmZpcm0gUHVyY2hhc2UnKTtcclxuXHJcbiAgZnVuY3Rpb24gb25BZmZpcm1QdXJjaGFzZSgpIHtcclxuICAgIHNldFB1cmNoYXNpbmcodHJ1ZSk7XHJcbiAgICBsb2FkVmlkZW8odXJpLCAoZmlsZUluZm8pID0+IHtcclxuICAgICAgc2V0UHVyY2hhc2luZyhmYWxzZSk7XHJcbiAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgICAgIGFuYWx5dGljc1B1cmNoYXNlRXZlbnQoZmlsZUluZm8pO1xyXG5cclxuICAgICAgaWYgKCFwbGF5aW5nVXJpIHx8IHBsYXlpbmdVcmkudXJpICE9PSB1cmkpIHtcclxuICAgICAgICBzZXRQbGF5aW5nVXJpKHVyaSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuY2VsUHVyY2hhc2UoKSB7XHJcbiAgICBpZiAocGxheWluZ1VyaSAmJiBpc1VSSUVxdWFsKHVyaSwgcGxheWluZ1VyaS51cmkpKSB7XHJcbiAgICAgIHNldFBsYXlpbmdVcmkobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0aW1lb3V0O1xyXG4gICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKTtcclxuICAgICAgfSwgQU5JTUFUSU9OX0xFTkdUSCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHRpbWVvdXQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW3N1Y2Nlc3MsIHVyaV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsIHR5cGU9XCJjYXJkXCIgaXNPcGVuIGNvbnRlbnRMYWJlbD17bW9kYWxUaXRsZX0gb25BYm9ydGVkPXtjYW5jZWxQdXJjaGFzZX0+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgdGl0bGU9e21vZGFsVGl0bGV9XHJcbiAgICAgICAgc3VidGl0bGU9e1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3B1cmNoYXNlLXN0dWZmJywgeyAncHVyY2hhc2Utc3R1ZmYtLXB1cmNoYXNlZCc6IHN1Y2Nlc3MgfSl9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyY2hhc2Utc3R1ZmZfX3RleHQtLXB1cmNoYXNlZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7X18oJ1B1cmNoYXNlZCEnKX1cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJjaGFzZV9zdHVmZl9fc3VidGV4dC0tcHVyY2hhc2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge19fKCdUaGlzIGNvbnRlbnQgd2lsbCBub3cgYmUgaW4geW91ciBMaWJyYXJ5LicpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgey8qIEtlZXAgdGhpcyBtZXNzYWdlIHJlbmRlcmVkIGJ1dCBoaWRkZW4gc28gdGhlIHdpZHRoIGRvZXNuJ3QgY2hhbmdlICovfVxyXG4gICAgICAgICAgICAgIDxJMThuTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgdG9rZW5zPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNsYWltX3RpdGxlOiA8c3Ryb25nPnt0aXRsZSA/IGBcIiR7dGl0bGV9XCJgIDogdXJpfTwvc3Ryb25nPixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHB1cmNoYXNlICVjbGFpbV90aXRsZSU/XHJcbiAgICAgICAgICAgICAgPC9JMThuTWVzc2FnZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEZpbGVQcmljZSB1cmk9e3VyaX0gc2hvd0Z1bGxQcmljZSB0eXBlPVwibW9kYWxcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9fYWN0aW9uc1wiIHN0eWxlPXtzdWNjZXNzID8geyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9IDogdW5kZWZpbmVkfT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGJ1dHRvbj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtwdXJjaGFzaW5nfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtwdXJjaGFzaW5nID8gX18oJ1B1cmNoYXNpbmcuLi4nKSA6IF9fKCdQdXJjaGFzZScpfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQWZmaXJtUHVyY2hhc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uPVwibGlua1wiIGxhYmVsPXtfXygnQ2FuY2VsJyl9IG9uQ2xpY2s9e2NhbmNlbFB1cmNoYXNlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbEFmZmlybVB1cmNoYXNlO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVRBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQW5DQTtBQXlDQTtBQUNBO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/modal/modalAffirmPurchase/view.jsx\n");

/***/ })

}]);