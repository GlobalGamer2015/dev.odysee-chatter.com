(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalConfirmThumbnailUpload"],{

/***/ "../ui/modal/modal.jsx":
/*!*****************************!*\
  !*** ../ui/modal/modal.jsx ***!
  \*****************************/
/*! exports provided: Modal, ExpandableModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExpandableModal\", function() { return ExpandableModal; });\n/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"../node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var effects_use_screensize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! effects/use-screensize */ \"../ui/effects/use-screensize.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n} // These should probably just be combined into one modal component\n\n\n\n\n\n\n\n\nfunction Modal(props) {\n  var children = props.children,\n      _props$type = props.type,\n      type = _props$type === void 0 ? 'alert' : _props$type,\n      _props$confirmButtonL = props.confirmButtonLabel,\n      confirmButtonLabel = _props$confirmButtonL === void 0 ? __('OK') : _props$confirmButtonL,\n      _props$confirmButtonD = props.confirmButtonDisabled,\n      confirmButtonDisabled = _props$confirmButtonD === void 0 ? false : _props$confirmButtonD,\n      onConfirmed = props.onConfirmed,\n      _props$abortButtonLab = props.abortButtonLabel,\n      abortButtonLabel = _props$abortButtonLab === void 0 ? __('Cancel') : _props$abortButtonLab,\n      _props$abortButtonDis = props.abortButtonDisabled,\n      abortButtonDisabled = _props$abortButtonDis === void 0 ? false : _props$abortButtonDis,\n      onAborted = props.onAborted,\n      className = props.className,\n      title = props.title,\n      modalProps = _objectWithoutProperties(props, [\"children\", \"type\", \"confirmButtonLabel\", \"confirmButtonDisabled\", \"onConfirmed\", \"abortButtonLabel\", \"abortButtonDisabled\", \"onAborted\", \"className\", \"title\"]);\n\n  var isMobile = Object(effects_use_screensize__WEBPACK_IMPORTED_MODULE_5__[\"useIsMobile\"])();\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, modalProps, {\n    onRequestClose: onAborted || onConfirmed,\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('modal', className, {\n      'modal--card-internal': type === 'card'\n    }),\n    overlayClassName: \"modal-overlay\"\n  }), title && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"h1\", {\n    className: \"card__title card__title--deprecated\"\n  }, title), type === 'card' && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    iconSize: isMobile ? 24 : undefined,\n    button: \"close\",\n    \"aria-label\": __('Close'),\n    icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE\"],\n    onClick: onAborted\n  }), children, type === 'custom' || type === 'card' ? null : // custom modals define their own buttons\n  react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    className: \"card__actions\"\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: \"primary\",\n    label: confirmButtonLabel,\n    disabled: confirmButtonDisabled,\n    onClick: onConfirmed\n  }), type === 'confirm' ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: \"link\",\n    label: abortButtonLabel,\n    disabled: abortButtonDisabled,\n    onClick: onAborted\n  }) : null));\n}\nvar ExpandableModal = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ExpandableModal, _React$PureComponent);\n\n  function ExpandableModal(props) {\n    var _this;\n\n    _classCallCheck(this, ExpandableModal);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpandableModal).call(this, props));\n    _this.state = {\n      expanded: false\n    };\n    return _this;\n  }\n\n  _createClass(ExpandableModal, [{\n    key: \"toggleExpanded\",\n    value: function toggleExpanded() {\n      this.setState({\n        expanded: !this.state.expanded\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Modal, _extends({\n        type: \"custom\"\n      }, this.props), this.props.children, this.state.expanded ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", null, this.props.extraContent) : null, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"card__actions\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"primary\",\n        label: this.props.confirmButtonLabel,\n        onClick: this.props.onConfirmed\n      }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"link\",\n        label: !this.state.expanded ? this.props.expandButtonLabel : this.props.hideButtonLabel,\n        onClick: function onClick() {\n          _this2.toggleExpanded();\n        }\n      })));\n    }\n  }]);\n\n  return ExpandableModal;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"PureComponent\"]);\n\n_defineProperty(ExpandableModal, \"defaultProps\", {\n  confirmButtonLabel: __('OK'),\n  expandButtonLabel: __('Show More...'),\n  hideButtonLabel: __('Show Less')\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsLmpzeD9mMDY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbi8vIFRoZXNlIHNob3VsZCBwcm9iYWJseSBqdXN0IGJlIGNvbWJpbmVkIGludG8gb25lIG1vZGFsIGNvbXBvbmVudFxyXG5pbXBvcnQgKiBhcyBJQ09OUyBmcm9tICdjb25zdGFudHMvaWNvbnMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnQvYnV0dG9uJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZUlzTW9iaWxlIH0gZnJvbSAnZWZmZWN0cy91c2Utc2NyZWVuc2l6ZSc7XHJcblxyXG50eXBlIE1vZGFsUHJvcHMgPSB7XHJcbiAgdHlwZT86IHN0cmluZyxcclxuICBvdmVybGF5PzogYm9vbGVhbixcclxuICBjb25maXJtQnV0dG9uTGFiZWw/OiBzdHJpbmcsXHJcbiAgYWJvcnRCdXR0b25MYWJlbD86IHN0cmluZyxcclxuICBjb25maXJtQnV0dG9uRGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gIGFib3J0QnV0dG9uRGlzYWJsZWQ/OiBib29sZWFuLFxyXG4gIG9uQ29uZmlybWVkPzogKGFueSkgPT4gYW55LFxyXG4gIG9uQWJvcnRlZD86IChhbnkpID0+IGFueSxcclxuICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxyXG4gIGV4dHJhQ29udGVudD86IFJlYWN0Lk5vZGUsXHJcbiAgZXhwYW5kQnV0dG9uTGFiZWw/OiBzdHJpbmcsXHJcbiAgaGlkZUJ1dHRvbkxhYmVsPzogc3RyaW5nLFxyXG4gIHRpdGxlPzogc3RyaW5nIHwgUmVhY3QuTm9kZSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNb2RhbChwcm9wczogTW9kYWxQcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgdHlwZSA9ICdhbGVydCcsXHJcbiAgICBjb25maXJtQnV0dG9uTGFiZWwgPSBfXygnT0snKSxcclxuICAgIGNvbmZpcm1CdXR0b25EaXNhYmxlZCA9IGZhbHNlLFxyXG4gICAgb25Db25maXJtZWQsXHJcbiAgICBhYm9ydEJ1dHRvbkxhYmVsID0gX18oJ0NhbmNlbCcpLFxyXG4gICAgYWJvcnRCdXR0b25EaXNhYmxlZCA9IGZhbHNlLFxyXG4gICAgb25BYm9ydGVkLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdGl0bGUsXHJcbiAgICAuLi5tb2RhbFByb3BzXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBpc01vYmlsZSA9IHVzZUlzTW9iaWxlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3RNb2RhbFxyXG4gICAgICB7Li4ubW9kYWxQcm9wc31cclxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e29uQWJvcnRlZCB8fCBvbkNvbmZpcm1lZH1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtb2RhbCcsIGNsYXNzTmFtZSwge1xyXG4gICAgICAgICdtb2RhbC0tY2FyZC1pbnRlcm5hbCc6IHR5cGUgPT09ICdjYXJkJyxcclxuICAgICAgfSl9XHJcbiAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCJcclxuICAgID5cclxuICAgICAge3RpdGxlICYmIDxoMSBjbGFzc05hbWU9XCJjYXJkX190aXRsZSBjYXJkX190aXRsZS0tZGVwcmVjYXRlZFwiPnt0aXRsZX08L2gxPn1cclxuICAgICAge3R5cGUgPT09ICdjYXJkJyAmJiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgaWNvblNpemU9e2lzTW9iaWxlID8gMjQgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICBidXR0b249XCJjbG9zZVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPXtfXygnQ2xvc2UnKX1cclxuICAgICAgICAgIGljb249e0lDT05TLlJFTU9WRX1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uQWJvcnRlZH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIHt0eXBlID09PSAnY3VzdG9tJyB8fCB0eXBlID09PSAnY2FyZCcgPyBudWxsIDogKCAvLyBjdXN0b20gbW9kYWxzIGRlZmluZSB0aGVpciBvd24gYnV0dG9uc1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJwcmltYXJ5XCIgbGFiZWw9e2NvbmZpcm1CdXR0b25MYWJlbH0gZGlzYWJsZWQ9e2NvbmZpcm1CdXR0b25EaXNhYmxlZH0gb25DbGljaz17b25Db25maXJtZWR9IC8+XHJcbiAgICAgICAgICB7dHlwZSA9PT0gJ2NvbmZpcm0nID8gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGJ1dHRvbj1cImxpbmtcIiBsYWJlbD17YWJvcnRCdXR0b25MYWJlbH0gZGlzYWJsZWQ9e2Fib3J0QnV0dG9uRGlzYWJsZWR9IG9uQ2xpY2s9e29uQWJvcnRlZH0gLz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9SZWFjdE1vZGFsPlxyXG4gICk7XHJcbn1cclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgZXhwYW5kZWQ6IGJvb2xlYW4sXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZU1vZGFsIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxNb2RhbFByb3BzLCBTdGF0ZT4ge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb25maXJtQnV0dG9uTGFiZWw6IF9fKCdPSycpLFxyXG4gICAgZXhwYW5kQnV0dG9uTGFiZWw6IF9fKCdTaG93IE1vcmUuLi4nKSxcclxuICAgIGhpZGVCdXR0b25MYWJlbDogX18oJ1Nob3cgTGVzcycpLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBNb2RhbFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUV4cGFuZGVkKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsIHR5cGU9XCJjdXN0b21cIiB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAge3RoaXMuc3RhdGUuZXhwYW5kZWQgPyA8ZGl2Pnt0aGlzLnByb3BzLmV4dHJhQ29udGVudH08L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJwcmltYXJ5XCIgbGFiZWw9e3RoaXMucHJvcHMuY29uZmlybUJ1dHRvbkxhYmVsfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ29uZmlybWVkfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBidXR0b249XCJsaW5rXCJcclxuICAgICAgICAgICAgbGFiZWw9eyF0aGlzLnN0YXRlLmV4cGFuZGVkID8gdGhpcy5wcm9wcy5leHBhbmRCdXR0b25MYWJlbCA6IHRoaXMucHJvcHMuaGlkZUJ1dHRvbkxhYmVsfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlZCgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFjQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBUUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFNQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQURBO0FBR0E7QUFuQkE7QUFBQTtBQUFBO0FBcUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQXRDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBdUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modal.jsx\n");

/***/ }),

/***/ "../ui/modal/modalConfirmThumbnailUpload/index.js":
/*!********************************************************!*\
  !*** ../ui/modal/modalConfirmThumbnailUpload/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var redux_actions_publish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/actions/publish */ \"../ui/redux/actions/publish.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalConfirmThumbnailUpload/view.jsx\");\n\n\n\n\n\nvar perform = function perform(dispatch) {\n  return {\n    closeModal: function closeModal() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_1__[\"doHideModal\"])());\n    },\n    upload: function upload(file, cb) {\n      return dispatch(Object(redux_actions_publish__WEBPACK_IMPORTED_MODULE_2__[\"doUploadThumbnail\"])(null, file, null, null, file.path, cb));\n    },\n    updatePublishForm: function updatePublishForm(value) {\n      return dispatch(Object(redux_actions_publish__WEBPACK_IMPORTED_MODULE_2__[\"doUpdatePublishForm\"])(value));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(null, perform)(_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxDb25maXJtVGh1bWJuYWlsVXBsb2FkL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsQ29uZmlybVRodW1ibmFpbFVwbG9hZC9pbmRleC5qcz9hN2IwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGRvSGlkZU1vZGFsIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9hcHAnO1xyXG5pbXBvcnQgeyBkb1VwbG9hZFRodW1ibmFpbCwgZG9VcGRhdGVQdWJsaXNoRm9ybSB9IGZyb20gJ3JlZHV4L2FjdGlvbnMvcHVibGlzaCc7XHJcbmltcG9ydCBNb2RhbENvbmZpcm1UaHVtYm5haWxVcGxvYWQgZnJvbSAnLi92aWV3JztcclxuXHJcbmNvbnN0IHBlcmZvcm0gPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgY2xvc2VNb2RhbDogKCkgPT4gZGlzcGF0Y2goZG9IaWRlTW9kYWwoKSksXHJcbiAgdXBsb2FkOiAoZmlsZSwgY2IpID0+IGRpc3BhdGNoKGRvVXBsb2FkVGh1bWJuYWlsKG51bGwsIGZpbGUsIG51bGwsIG51bGwsIGZpbGUucGF0aCwgY2IpKSxcclxuICB1cGRhdGVQdWJsaXNoRm9ybTogKHZhbHVlKSA9PiBkaXNwYXRjaChkb1VwZGF0ZVB1Ymxpc2hGb3JtKHZhbHVlKSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBwZXJmb3JtKShNb2RhbENvbmZpcm1UaHVtYm5haWxVcGxvYWQpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUVBO0FBQUE7QUFGQTtBQUdBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFDQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modalConfirmThumbnailUpload/index.js\n");

/***/ }),

/***/ "../ui/modal/modalConfirmThumbnailUpload/view.jsx":
/*!********************************************************!*\
  !*** ../ui/modal/modalConfirmThumbnailUpload/view.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config */ \"../config.js\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n\n\n\n\nvar ModalConfirmThumbnailUpload = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ModalConfirmThumbnailUpload, _React$PureComponent);\n\n  function ModalConfirmThumbnailUpload() {\n    _classCallCheck(this, ModalConfirmThumbnailUpload);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ModalConfirmThumbnailUpload).apply(this, arguments));\n  }\n\n  _createClass(ModalConfirmThumbnailUpload, [{\n    key: \"upload\",\n    value: function upload() {\n      var _this$props = this.props,\n          upload = _this$props.upload,\n          updatePublishForm = _this$props.updatePublishForm,\n          cb = _this$props.cb,\n          closeModal = _this$props.closeModal,\n          file = _this$props.file;\n\n      if (file) {\n        upload(file, cb);\n        updatePublishForm({\n          thumbnailPath: file.path\n        });\n        closeModal();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var _this$props2 = this.props,\n          closeModal = _this$props2.closeModal,\n          file = _this$props2.file;\n      var filePath = file && (file.path || file.name);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n        isOpen: true,\n        title: __('Upload thumbnail'),\n        contentLabel: __('Confirm Thumbnail Upload'),\n        type: \"confirm\",\n        confirmButtonLabel: __('Upload'),\n        onConfirmed: function onConfirmed() {\n          return _this.upload();\n        },\n        onAborted: closeModal\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, __('Are you sure you want to upload this thumbnail to %domain%', {\n        domain: config__WEBPACK_IMPORTED_MODULE_2__[\"DOMAIN\"]\n      }), \"?\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"blockquote\", null, filePath));\n    }\n  }]);\n\n  return ModalConfirmThumbnailUpload;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalConfirmThumbnailUpload);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxDb25maXJtVGh1bWJuYWlsVXBsb2FkL3ZpZXcuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsQ29uZmlybVRodW1ibmFpbFVwbG9hZC92aWV3LmpzeD80ZWEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnbW9kYWwvbW9kYWwnO1xyXG5pbXBvcnQgeyBET01BSU4gfSBmcm9tICdjb25maWcnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBmaWxlOiBXZWJGaWxlLFxyXG4gIHVwbG9hZDogKFdlYkZpbGUsIChzdHJpbmcpID0+IHZvaWQpID0+IHZvaWQsXHJcbiAgY2I6IChzdHJpbmcpID0+IHZvaWQsXHJcbiAgY2xvc2VNb2RhbDogKCkgPT4gdm9pZCxcclxuICB1cGRhdGVQdWJsaXNoRm9ybTogKHt9KSA9PiB2b2lkLFxyXG59O1xyXG5cclxuY2xhc3MgTW9kYWxDb25maXJtVGh1bWJuYWlsVXBsb2FkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xyXG4gIHVwbG9hZCgpIHtcclxuICAgIGNvbnN0IHsgdXBsb2FkLCB1cGRhdGVQdWJsaXNoRm9ybSwgY2IsIGNsb3NlTW9kYWwsIGZpbGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICB1cGxvYWQoZmlsZSwgY2IpO1xyXG4gICAgICB1cGRhdGVQdWJsaXNoRm9ybSh7IHRodW1ibmFpbFBhdGg6IGZpbGUucGF0aCB9KTtcclxuICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbG9zZU1vZGFsLCBmaWxlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlICYmIChmaWxlLnBhdGggfHwgZmlsZS5uYW1lKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBpc09wZW5cclxuICAgICAgICB0aXRsZT17X18oJ1VwbG9hZCB0aHVtYm5haWwnKX1cclxuICAgICAgICBjb250ZW50TGFiZWw9e19fKCdDb25maXJtIFRodW1ibmFpbCBVcGxvYWQnKX1cclxuICAgICAgICB0eXBlPVwiY29uZmlybVwiXHJcbiAgICAgICAgY29uZmlybUJ1dHRvbkxhYmVsPXtfXygnVXBsb2FkJyl9XHJcbiAgICAgICAgb25Db25maXJtZWQ9eygpID0+IHRoaXMudXBsb2FkKCl9XHJcbiAgICAgICAgb25BYm9ydGVkPXtjbG9zZU1vZGFsfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGxhYmVsPntfXygnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHVwbG9hZCB0aGlzIHRodW1ibmFpbCB0byAlZG9tYWluJScsIHsgZG9tYWluOiBET01BSU4gfSl9PzwvbGFiZWw+XHJcblxyXG4gICAgICAgIDxibG9ja3F1b3RlPntmaWxlUGF0aH08L2Jsb2NrcXVvdGU+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDb25maXJtVGh1bWJuYWlsVXBsb2FkO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQU9BO0FBUEE7QUFTQTtBQUFBO0FBS0E7Ozs7QUE3QkE7QUFDQTtBQStCQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modalConfirmThumbnailUpload/view.jsx\n");

/***/ })

}]);