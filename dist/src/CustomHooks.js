"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useSignUpForm = function useSignUpForm(initialValues, callback) {
  var _useState = (0, _react.useState)(initialValues),
      _useState2 = _slicedToArray(_useState, 2),
      inputs = _useState2[0],
      setInputs = _useState2[1];

  var handleSubmit = function handleSubmit(event) {
    if (event) event.preventDefault();
    callback();
  };

  var handleInputChange = function handleInputChange(event) {
    event.persist();
    setInputs(function (inputs) {
      return _objectSpread({}, inputs, _defineProperty({}, event.target.name, event.target.value));
    });
  };

  return {
    handleSubmit: handleSubmit,
    handleInputChange: handleInputChange,
    inputs: inputs
  };
};

var _default = useSignUpForm;
exports.default = _default;

//# sourceMappingURL=CustomHooks.js.map