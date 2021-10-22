(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["abandonedChannelPreview"],{

/***/ "../ui/component/abandonedChannelPreview/index.js":
/*!********************************************************!*\
  !*** ../ui/component/abandonedChannelPreview/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"../ui/component/abandonedChannelPreview/view.jsx\");\n\n\n\nvar select = function select(state, props) {\n  return {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select)(_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L2FiYW5kb25lZENoYW5uZWxQcmV2aWV3L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL2NvbXBvbmVudC9hYmFuZG9uZWRDaGFubmVsUHJldmlldy9pbmRleC5qcz8wZTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBYmFuZG9uZWRDaGFubmVsUHJldmlldyBmcm9tICcuL3ZpZXcnO1xyXG5cclxuY29uc3Qgc2VsZWN0ID0gKHN0YXRlLCBwcm9wcykgPT4gKHt9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0KShBYmFuZG9uZWRDaGFubmVsUHJldmlldyk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/component/abandonedChannelPreview/index.js\n");

/***/ }),

/***/ "../ui/component/abandonedChannelPreview/view.jsx":
/*!********************************************************!*\
  !*** ../ui/component/abandonedChannelPreview/view.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var component_channelThumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/channelThumbnail */ \"../ui/component/channelThumbnail/index.js\");\n/* harmony import */ var util_lbryURI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util/lbryURI */ \"../ui/util/lbryURI.js\");\n/* harmony import */ var component_channelBlockButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! component/channelBlockButton */ \"../ui/component/channelBlockButton/index.js\");\n/* harmony import */ var component_channelMuteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! component/channelMuteButton */ \"../ui/component/channelMuteButton/index.js\");\n/* harmony import */ var component_subscribeButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! component/subscribeButton */ \"../ui/component/subscribeButton/index.js\");\n\n\n\n\n\n\n\n\nfunction AbandonedChannelPreview(props) {\n  var uri = props.uri,\n      type = props.type;\n\n  var _parseURI = Object(util_lbryURI__WEBPACK_IMPORTED_MODULE_3__[\"parseURI\"])(uri),\n      channelName = _parseURI.channelName;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('claim-preview__wrapper', 'claim-preview__wrapper--notice')\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('claim-preview', {\n      'claim-preview--large': type === 'large'\n    })\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_channelThumbnail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    uri: uri\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"claim-preview__text\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"claim-preview-metadata\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"claim-preview-info\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"claim-preview__title\"\n  }, channelName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"media__subtitle\"\n  }, __(\"This channel may have been unpublished.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"claim-preview__actions\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"section__actions\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_channelBlockButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    uri: uri\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_channelMuteButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    uri: uri\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_subscribeButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    uri: uri\n  }))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AbandonedChannelPreview);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L2FiYW5kb25lZENoYW5uZWxQcmV2aWV3L3ZpZXcuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL2NvbXBvbmVudC9hYmFuZG9uZWRDaGFubmVsUHJldmlldy92aWV3LmpzeD9kYjQwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ2hhbm5lbFRodW1ibmFpbCBmcm9tICdjb21wb25lbnQvY2hhbm5lbFRodW1ibmFpbCc7XHJcbmltcG9ydCB7IHBhcnNlVVJJIH0gZnJvbSAndXRpbC9sYnJ5VVJJJztcclxuaW1wb3J0IENoYW5uZWxCbG9ja0J1dHRvbiBmcm9tICdjb21wb25lbnQvY2hhbm5lbEJsb2NrQnV0dG9uJztcclxuaW1wb3J0IENoYW5uZWxNdXRlQnV0dG9uIGZyb20gJ2NvbXBvbmVudC9jaGFubmVsTXV0ZUJ1dHRvbic7XHJcbmltcG9ydCBTdWJzY3JpYmVCdXR0b24gZnJvbSAnY29tcG9uZW50L3N1YnNjcmliZUJ1dHRvbic7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHVyaTogc3RyaW5nLFxyXG4gIHR5cGU6IHN0cmluZyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIEFiYW5kb25lZENoYW5uZWxQcmV2aWV3KHByb3BzOiBQcm9wcykge1xyXG4gIGNvbnN0IHsgdXJpLCB0eXBlIH0gPSBwcm9wcztcclxuICBjb25zdCB7IGNoYW5uZWxOYW1lIH0gPSBwYXJzZVVSSSh1cmkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnY2xhaW0tcHJldmlld19fd3JhcHBlcicsICdjbGFpbS1wcmV2aWV3X193cmFwcGVyLS1ub3RpY2UnKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdjbGFpbS1wcmV2aWV3JywgeyAnY2xhaW0tcHJldmlldy0tbGFyZ2UnOiB0eXBlID09PSAnbGFyZ2UnIH0pfT5cclxuICAgICAgICA8Q2hhbm5lbFRodW1ibmFpbCB1cmk9e3VyaX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsYWltLXByZXZpZXdfX3RleHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xhaW0tcHJldmlldy1tZXRhZGF0YVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsYWltLXByZXZpZXctaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xhaW0tcHJldmlld19fdGl0bGVcIj57Y2hhbm5lbE5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhX19zdWJ0aXRsZVwiPntfXyhgVGhpcyBjaGFubmVsIG1heSBoYXZlIGJlZW4gdW5wdWJsaXNoZWQuYCl9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xhaW0tcHJldmlld19fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2FjdGlvbnNcIj5cclxuICAgICAgICAgICAgICA8Q2hhbm5lbEJsb2NrQnV0dG9uIHVyaT17dXJpfSAvPlxyXG4gICAgICAgICAgICAgIDxDaGFubmVsTXV0ZUJ1dHRvbiB1cmk9e3VyaX0gLz5cclxuICAgICAgICAgICAgICA8U3Vic2NyaWJlQnV0dG9uIHVyaT17dXJpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJhbmRvbmVkQ2hhbm5lbFByZXZpZXc7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/component/abandonedChannelPreview/view.jsx\n");

/***/ }),

/***/ "../ui/component/channelBlockButton/index.js":
/*!***************************************************!*\
  !*** ../ui/component/channelBlockButton/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/selectors/claims */ \"../ui/redux/selectors/claims.js\");\n/* harmony import */ var redux_actions_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/actions/comments */ \"../ui/redux/actions/comments.js\");\n/* harmony import */ var redux_selectors_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/selectors/comments */ \"../ui/redux/selectors/comments.js\");\n/* harmony import */ var constants_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/comment */ \"../ui/constants/comment.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view */ \"../ui/component/channelBlockButton/view.jsx\");\n\n\n\n\n\n\n\nvar select = function select(state, props) {\n  var isBlocked;\n  var isToggling;\n\n  switch (props.blockLevel) {\n    default:\n    case constants_comment__WEBPACK_IMPORTED_MODULE_4__[\"BLOCK_LEVEL\"].SELF:\n      isBlocked = Object(redux_selectors_comments__WEBPACK_IMPORTED_MODULE_3__[\"makeSelectChannelIsBlocked\"])(props.uri)(state);\n      break;\n\n    case constants_comment__WEBPACK_IMPORTED_MODULE_4__[\"BLOCK_LEVEL\"].MODERATOR:\n      isBlocked = Object(redux_selectors_comments__WEBPACK_IMPORTED_MODULE_3__[\"makeSelectChannelIsModeratorBlockedForCreator\"])(props.uri, props.creatorUri)(state);\n      isToggling = Object(redux_selectors_comments__WEBPACK_IMPORTED_MODULE_3__[\"makeSelectIsTogglingForDelegator\"])(props.uri, props.creatorUri)(state);\n      break;\n\n    case constants_comment__WEBPACK_IMPORTED_MODULE_4__[\"BLOCK_LEVEL\"].ADMIN:\n      isBlocked = Object(redux_selectors_comments__WEBPACK_IMPORTED_MODULE_3__[\"makeSelectChannelIsAdminBlocked\"])(props.uri)(state);\n      break;\n  }\n\n  return {\n    isBlocked: isBlocked,\n    isToggling: isToggling,\n    isBlockingOrUnBlocking: Object(redux_selectors_comments__WEBPACK_IMPORTED_MODULE_3__[\"makeSelectUriIsBlockingOrUnBlocking\"])(props.uri)(state),\n    creatorId: Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__[\"makeSelectClaimIdForUri\"])(props.creatorUri)(state)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, {\n  doCommentModUnBlock: redux_actions_comments__WEBPACK_IMPORTED_MODULE_2__[\"doCommentModUnBlock\"],\n  doCommentModBlock: redux_actions_comments__WEBPACK_IMPORTED_MODULE_2__[\"doCommentModBlock\"],\n  doCommentModUnBlockAsAdmin: redux_actions_comments__WEBPACK_IMPORTED_MODULE_2__[\"doCommentModUnBlockAsAdmin\"],\n  doCommentModBlockAsAdmin: redux_actions_comments__WEBPACK_IMPORTED_MODULE_2__[\"doCommentModBlockAsAdmin\"],\n  doCommentModUnBlockAsModerator: redux_actions_comments__WEBPACK_IMPORTED_MODULE_2__[\"doCommentModUnBlockAsModerator\"],\n  doCommentModBlockAsModerator: redux_actions_comments__WEBPACK_IMPORTED_MODULE_2__[\"doCommentModBlockAsModerator\"]\n})(_view__WEBPACK_IMPORTED_MODULE_5__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L2NoYW5uZWxCbG9ja0J1dHRvbi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9jb21wb25lbnQvY2hhbm5lbEJsb2NrQnV0dG9uL2luZGV4LmpzPzRmYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbWFrZVNlbGVjdENsYWltSWRGb3JVcmkgfSBmcm9tICdyZWR1eC9zZWxlY3RvcnMvY2xhaW1zJztcclxuaW1wb3J0IHtcclxuICBkb0NvbW1lbnRNb2RVbkJsb2NrLFxyXG4gIGRvQ29tbWVudE1vZEJsb2NrLFxyXG4gIGRvQ29tbWVudE1vZEJsb2NrQXNBZG1pbixcclxuICBkb0NvbW1lbnRNb2RVbkJsb2NrQXNBZG1pbixcclxuICBkb0NvbW1lbnRNb2RVbkJsb2NrQXNNb2RlcmF0b3IsXHJcbiAgZG9Db21tZW50TW9kQmxvY2tBc01vZGVyYXRvcixcclxufSBmcm9tICdyZWR1eC9hY3Rpb25zL2NvbW1lbnRzJztcclxuaW1wb3J0IHtcclxuICBtYWtlU2VsZWN0Q2hhbm5lbElzQmxvY2tlZCxcclxuICBtYWtlU2VsZWN0Q2hhbm5lbElzQWRtaW5CbG9ja2VkLFxyXG4gIG1ha2VTZWxlY3RDaGFubmVsSXNNb2RlcmF0b3JCbG9ja2VkRm9yQ3JlYXRvcixcclxuICBtYWtlU2VsZWN0VXJpSXNCbG9ja2luZ09yVW5CbG9ja2luZyxcclxuICBtYWtlU2VsZWN0SXNUb2dnbGluZ0ZvckRlbGVnYXRvcixcclxufSBmcm9tICdyZWR1eC9zZWxlY3RvcnMvY29tbWVudHMnO1xyXG5cclxuaW1wb3J0IHsgQkxPQ0tfTEVWRUwgfSBmcm9tICdjb25zdGFudHMvY29tbWVudCc7XHJcbmltcG9ydCBDaGFubmVsQmxvY2tCdXR0b24gZnJvbSAnLi92aWV3JztcclxuXHJcbmNvbnN0IHNlbGVjdCA9IChzdGF0ZSwgcHJvcHMpID0+IHtcclxuICBsZXQgaXNCbG9ja2VkO1xyXG4gIGxldCBpc1RvZ2dsaW5nO1xyXG5cclxuICBzd2l0Y2ggKHByb3BzLmJsb2NrTGV2ZWwpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICBjYXNlIEJMT0NLX0xFVkVMLlNFTEY6XHJcbiAgICAgIGlzQmxvY2tlZCA9IG1ha2VTZWxlY3RDaGFubmVsSXNCbG9ja2VkKHByb3BzLnVyaSkoc3RhdGUpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIEJMT0NLX0xFVkVMLk1PREVSQVRPUjpcclxuICAgICAgaXNCbG9ja2VkID0gbWFrZVNlbGVjdENoYW5uZWxJc01vZGVyYXRvckJsb2NrZWRGb3JDcmVhdG9yKHByb3BzLnVyaSwgcHJvcHMuY3JlYXRvclVyaSkoc3RhdGUpO1xyXG4gICAgICBpc1RvZ2dsaW5nID0gbWFrZVNlbGVjdElzVG9nZ2xpbmdGb3JEZWxlZ2F0b3IocHJvcHMudXJpLCBwcm9wcy5jcmVhdG9yVXJpKShzdGF0ZSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgQkxPQ0tfTEVWRUwuQURNSU46XHJcbiAgICAgIGlzQmxvY2tlZCA9IG1ha2VTZWxlY3RDaGFubmVsSXNBZG1pbkJsb2NrZWQocHJvcHMudXJpKShzdGF0ZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzQmxvY2tlZCxcclxuICAgIGlzVG9nZ2xpbmcsXHJcbiAgICBpc0Jsb2NraW5nT3JVbkJsb2NraW5nOiBtYWtlU2VsZWN0VXJpSXNCbG9ja2luZ09yVW5CbG9ja2luZyhwcm9wcy51cmkpKHN0YXRlKSxcclxuICAgIGNyZWF0b3JJZDogbWFrZVNlbGVjdENsYWltSWRGb3JVcmkocHJvcHMuY3JlYXRvclVyaSkoc3RhdGUpLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCwge1xyXG4gIGRvQ29tbWVudE1vZFVuQmxvY2ssXHJcbiAgZG9Db21tZW50TW9kQmxvY2ssXHJcbiAgZG9Db21tZW50TW9kVW5CbG9ja0FzQWRtaW4sXHJcbiAgZG9Db21tZW50TW9kQmxvY2tBc0FkbWluLFxyXG4gIGRvQ29tbWVudE1vZFVuQmxvY2tBc01vZGVyYXRvcixcclxuICBkb0NvbW1lbnRNb2RCbG9ja0FzTW9kZXJhdG9yLFxyXG59KShDaGFubmVsQmxvY2tCdXR0b24pO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBcEJBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/component/channelBlockButton/index.js\n");

/***/ }),

/***/ "../ui/component/channelBlockButton/view.jsx":
/*!***************************************************!*\
  !*** ../ui/component/channelBlockButton/view.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var constants_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/comment */ \"../ui/constants/comment.js\");\n\n\n\n\nfunction ChannelBlockButton(props) {\n  var uri = props.uri,\n      blockLevel = props.blockLevel,\n      creatorUri = props.creatorUri,\n      doCommentModUnBlock = props.doCommentModUnBlock,\n      doCommentModBlock = props.doCommentModBlock,\n      doCommentModUnBlockAsAdmin = props.doCommentModUnBlockAsAdmin,\n      doCommentModBlockAsAdmin = props.doCommentModBlockAsAdmin,\n      doCommentModUnBlockAsModerator = props.doCommentModUnBlockAsModerator,\n      doCommentModBlockAsModerator = props.doCommentModBlockAsModerator,\n      isBlocked = props.isBlocked,\n      isBlockingOrUnBlocking = props.isBlockingOrUnBlocking,\n      isToggling = props.isToggling;\n\n  function handleClick() {\n    switch (blockLevel) {\n      default:\n      case constants_comment__WEBPACK_IMPORTED_MODULE_2__[\"BLOCK_LEVEL\"].SELF:\n        if (isBlocked) {\n          doCommentModUnBlock(uri, false);\n        } else {\n          doCommentModBlock(uri, undefined, false);\n        }\n\n        break;\n\n      case constants_comment__WEBPACK_IMPORTED_MODULE_2__[\"BLOCK_LEVEL\"].MODERATOR:\n        if (creatorUri) {\n          if (isBlocked) {\n            doCommentModUnBlockAsModerator(uri, creatorUri, '');\n          } else {\n            doCommentModBlockAsModerator(uri, creatorUri, '');\n          }\n        }\n\n        break;\n\n      case constants_comment__WEBPACK_IMPORTED_MODULE_2__[\"BLOCK_LEVEL\"].ADMIN:\n        if (isBlocked) {\n          doCommentModUnBlockAsAdmin(uri, '');\n        } else {\n          doCommentModBlockAsAdmin(uri, '');\n        }\n\n        break;\n    }\n  }\n\n  function getButtonText(blockLevel) {\n    switch (blockLevel) {\n      default:\n      case constants_comment__WEBPACK_IMPORTED_MODULE_2__[\"BLOCK_LEVEL\"].SELF:\n      case constants_comment__WEBPACK_IMPORTED_MODULE_2__[\"BLOCK_LEVEL\"].ADMIN:\n        return isBlocked ? isBlockingOrUnBlocking ? __('Unblocking...') : __('Unblock') : isBlockingOrUnBlocking ? __('Blocking...') : __('Block');\n\n      case constants_comment__WEBPACK_IMPORTED_MODULE_2__[\"BLOCK_LEVEL\"].MODERATOR:\n        if (isToggling) {\n          return isBlocked ? __('Unblocking...') : __('Blocking...');\n        } else {\n          return isBlocked ? __('Unblock') : __('Block');\n        }\n\n    }\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    button: isBlocked ? 'alt' : 'secondary',\n    label: getButtonText(blockLevel),\n    onClick: handleClick\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChannelBlockButton);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L2NoYW5uZWxCbG9ja0J1dHRvbi92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9jb21wb25lbnQvY2hhbm5lbEJsb2NrQnV0dG9uL3ZpZXcuanN4PzFhYjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnQvYnV0dG9uJztcclxuaW1wb3J0IHsgQkxPQ0tfTEVWRUwgfSBmcm9tICdjb25zdGFudHMvY29tbWVudCc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHVyaTogc3RyaW5nLFxyXG4gIGJsb2NrTGV2ZWw/OiBzdHJpbmcsXHJcbiAgY3JlYXRvclVyaT86IHN0cmluZyxcclxuICBpc0Jsb2NrZWQ6IGJvb2xlYW4sXHJcbiAgaXNCbG9ja2luZ09yVW5CbG9ja2luZzogYm9vbGVhbixcclxuICBpc1RvZ2dsaW5nOiBib29sZWFuLFxyXG4gIGRvQ29tbWVudE1vZFVuQmxvY2s6IChzdHJpbmcsIGJvb2xlYW4pID0+IHZvaWQsXHJcbiAgZG9Db21tZW50TW9kQmxvY2s6IChzdHJpbmcsID9OdW1iZXIsIGJvb2xlYW4pID0+IHZvaWQsXHJcbiAgZG9Db21tZW50TW9kVW5CbG9ja0FzQWRtaW46IChzdHJpbmcsIHN0cmluZykgPT4gdm9pZCxcclxuICBkb0NvbW1lbnRNb2RCbG9ja0FzQWRtaW46IChzdHJpbmcsIHN0cmluZykgPT4gdm9pZCxcclxuICBkb0NvbW1lbnRNb2RVbkJsb2NrQXNNb2RlcmF0b3I6IChzdHJpbmcsIHN0cmluZywgc3RyaW5nKSA9PiB2b2lkLFxyXG4gIGRvQ29tbWVudE1vZEJsb2NrQXNNb2RlcmF0b3I6IChzdHJpbmcsIHN0cmluZywgc3RyaW5nKSA9PiB2b2lkLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gQ2hhbm5lbEJsb2NrQnV0dG9uKHByb3BzOiBQcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIHVyaSxcclxuICAgIGJsb2NrTGV2ZWwsXHJcbiAgICBjcmVhdG9yVXJpLFxyXG4gICAgZG9Db21tZW50TW9kVW5CbG9jayxcclxuICAgIGRvQ29tbWVudE1vZEJsb2NrLFxyXG4gICAgZG9Db21tZW50TW9kVW5CbG9ja0FzQWRtaW4sXHJcbiAgICBkb0NvbW1lbnRNb2RCbG9ja0FzQWRtaW4sXHJcbiAgICBkb0NvbW1lbnRNb2RVbkJsb2NrQXNNb2RlcmF0b3IsXHJcbiAgICBkb0NvbW1lbnRNb2RCbG9ja0FzTW9kZXJhdG9yLFxyXG4gICAgaXNCbG9ja2VkLFxyXG4gICAgaXNCbG9ja2luZ09yVW5CbG9ja2luZyxcclxuICAgIGlzVG9nZ2xpbmcsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcclxuICAgIHN3aXRjaCAoYmxvY2tMZXZlbCkge1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICBjYXNlIEJMT0NLX0xFVkVMLlNFTEY6XHJcbiAgICAgICAgaWYgKGlzQmxvY2tlZCkge1xyXG4gICAgICAgICAgZG9Db21tZW50TW9kVW5CbG9jayh1cmksIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZG9Db21tZW50TW9kQmxvY2sodXJpLCB1bmRlZmluZWQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEJMT0NLX0xFVkVMLk1PREVSQVRPUjpcclxuICAgICAgICBpZiAoY3JlYXRvclVyaSkge1xyXG4gICAgICAgICAgaWYgKGlzQmxvY2tlZCkge1xyXG4gICAgICAgICAgICBkb0NvbW1lbnRNb2RVbkJsb2NrQXNNb2RlcmF0b3IodXJpLCBjcmVhdG9yVXJpLCAnJyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb0NvbW1lbnRNb2RCbG9ja0FzTW9kZXJhdG9yKHVyaSwgY3JlYXRvclVyaSwgJycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQkxPQ0tfTEVWRUwuQURNSU46XHJcbiAgICAgICAgaWYgKGlzQmxvY2tlZCkge1xyXG4gICAgICAgICAgZG9Db21tZW50TW9kVW5CbG9ja0FzQWRtaW4odXJpLCAnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRvQ29tbWVudE1vZEJsb2NrQXNBZG1pbih1cmksICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRCdXR0b25UZXh0KGJsb2NrTGV2ZWwpIHtcclxuICAgIHN3aXRjaCAoYmxvY2tMZXZlbCkge1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICBjYXNlIEJMT0NLX0xFVkVMLlNFTEY6XHJcbiAgICAgIGNhc2UgQkxPQ0tfTEVWRUwuQURNSU46XHJcbiAgICAgICAgcmV0dXJuIGlzQmxvY2tlZFxyXG4gICAgICAgICAgPyBpc0Jsb2NraW5nT3JVbkJsb2NraW5nXHJcbiAgICAgICAgICAgID8gX18oJ1VuYmxvY2tpbmcuLi4nKVxyXG4gICAgICAgICAgICA6IF9fKCdVbmJsb2NrJylcclxuICAgICAgICAgIDogaXNCbG9ja2luZ09yVW5CbG9ja2luZ1xyXG4gICAgICAgICAgPyBfXygnQmxvY2tpbmcuLi4nKVxyXG4gICAgICAgICAgOiBfXygnQmxvY2snKTtcclxuXHJcbiAgICAgIGNhc2UgQkxPQ0tfTEVWRUwuTU9ERVJBVE9SOlxyXG4gICAgICAgIGlmIChpc1RvZ2dsaW5nKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXNCbG9ja2VkID8gX18oJ1VuYmxvY2tpbmcuLi4nKSA6IF9fKCdCbG9ja2luZy4uLicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gaXNCbG9ja2VkID8gX18oJ1VuYmxvY2snKSA6IF9fKCdCbG9jaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiA8QnV0dG9uIGJ1dHRvbj17aXNCbG9ja2VkID8gJ2FsdCcgOiAnc2Vjb25kYXJ5J30gbGFiZWw9e2dldEJ1dHRvblRleHQoYmxvY2tMZXZlbCl9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbEJsb2NrQnV0dG9uO1xyXG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUExQkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFsQkE7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/component/channelBlockButton/view.jsx\n");

/***/ }),

/***/ "../ui/component/channelMuteButton/index.js":
/*!**************************************************!*\
  !*** ../ui/component/channelMuteButton/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_blocked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/blocked */ \"../ui/redux/actions/blocked.js\");\n/* harmony import */ var redux_selectors_blocked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/selectors/blocked */ \"../ui/redux/selectors/blocked.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"../ui/component/channelMuteButton/view.jsx\");\n\n\n\n\n\nvar select = function select(state, props) {\n  return {\n    isMuted: Object(redux_selectors_blocked__WEBPACK_IMPORTED_MODULE_2__[\"makeSelectChannelIsMuted\"])(props.uri)(state)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, {\n  doChannelMute: redux_actions_blocked__WEBPACK_IMPORTED_MODULE_1__[\"doChannelMute\"],\n  doChannelUnmute: redux_actions_blocked__WEBPACK_IMPORTED_MODULE_1__[\"doChannelUnmute\"]\n})(_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L2NoYW5uZWxNdXRlQnV0dG9uL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL2NvbXBvbmVudC9jaGFubmVsTXV0ZUJ1dHRvbi9pbmRleC5qcz8xZDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGRvQ2hhbm5lbE11dGUsIGRvQ2hhbm5lbFVubXV0ZSB9IGZyb20gJ3JlZHV4L2FjdGlvbnMvYmxvY2tlZCc7XHJcbmltcG9ydCB7IG1ha2VTZWxlY3RDaGFubmVsSXNNdXRlZCB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9ibG9ja2VkJztcclxuaW1wb3J0IENoYW5uZWxNdXRlQnV0dG9uIGZyb20gJy4vdmlldyc7XHJcblxyXG5jb25zdCBzZWxlY3QgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xyXG4gIGlzTXV0ZWQ6IG1ha2VTZWxlY3RDaGFubmVsSXNNdXRlZChwcm9wcy51cmkpKHN0YXRlKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCwge1xyXG4gIGRvQ2hhbm5lbE11dGUsXHJcbiAgZG9DaGFubmVsVW5tdXRlLFxyXG59KShDaGFubmVsTXV0ZUJ1dHRvbik7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/component/channelMuteButton/index.js\n");

/***/ }),

/***/ "../ui/component/channelMuteButton/view.jsx":
/*!**************************************************!*\
  !*** ../ui/component/channelMuteButton/view.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n\n\n\nfunction ChannelMuteButton(props) {\n  var uri = props.uri,\n      doChannelMute = props.doChannelMute,\n      doChannelUnmute = props.doChannelUnmute,\n      isMuted = props.isMuted;\n\n  function handleClick() {\n    if (isMuted) {\n      doChannelUnmute(uri, false);\n    } else {\n      doChannelMute(uri, false);\n    }\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    button: isMuted ? 'alt' : 'secondary',\n    label: isMuted ? __('Unmute') : __('Mute'),\n    onClick: handleClick\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChannelMuteButton);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L2NoYW5uZWxNdXRlQnV0dG9uL3ZpZXcuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL2NvbXBvbmVudC9jaGFubmVsTXV0ZUJ1dHRvbi92aWV3LmpzeD82NDRjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50L2J1dHRvbic7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHVyaTogc3RyaW5nLFxyXG4gIGlzTXV0ZWQ6IGJvb2xlYW4sXHJcbiAgY2hhbm5lbENsYWltOiA/Q2hhbm5lbENsYWltLFxyXG4gIGRvQ2hhbm5lbE11dGU6IChzdHJpbmcsIGJvb2xlYW4pID0+IHZvaWQsXHJcbiAgZG9DaGFubmVsVW5tdXRlOiAoc3RyaW5nLCBib29sZWFuKSA9PiB2b2lkLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gQ2hhbm5lbE11dGVCdXR0b24ocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgeyB1cmksIGRvQ2hhbm5lbE11dGUsIGRvQ2hhbm5lbFVubXV0ZSwgaXNNdXRlZCB9ID0gcHJvcHM7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgaWYgKGlzTXV0ZWQpIHtcclxuICAgICAgZG9DaGFubmVsVW5tdXRlKHVyaSwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9DaGFubmVsTXV0ZSh1cmksIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIGJ1dHRvbj17aXNNdXRlZCA/ICdhbHQnIDogJ3NlY29uZGFyeSd9IGxhYmVsPXtpc011dGVkID8gX18oJ1VubXV0ZScpIDogX18oJ011dGUnKX0gb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbE11dGVCdXR0b247XHJcbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/component/channelMuteButton/view.jsx\n");

/***/ })

}]);