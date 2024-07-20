"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/components/Modal.js

// Assurez-vous de créer un fichier CSS pour le style

var Modal = function Modal(_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    title = _ref.title,
    children = _ref.children;
  if (!show) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, title), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    className: "modal-close-button"
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    className: "modal-close-button"
  }, "Close"))));
};
var _default = exports["default"] = Modal;