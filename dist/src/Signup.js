"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CustomHooks = _interopRequireDefault(require("./CustomHooks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Signup = function Signup() {
  var signup = function signup() {
    alert("User Created! \nName: ".concat(inputs.firstName, " ").concat(inputs.lastName, "\nEmail: ").concat(inputs.email));
  };

  var _useSignUpForm = (0, _CustomHooks.default)({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: ''
  }, signup),
      inputs = _useSignUpForm.inputs,
      handleInputChange = _useSignUpForm.handleInputChange,
      handleSubmit = _useSignUpForm.handleSubmit;

  return _react.default.createElement("div", {
    className: "section is-fullheight"
  }, _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "column is-4 is-offset-4"
  }, _react.default.createElement("div", {
    className: "box"
  }, _react.default.createElement("form", {
    onSubmit: handleSubmit,
    autoComplete: "off"
  }, _react.default.createElement("div", {
    className: "field"
  }, _react.default.createElement("label", {
    className: "label has-text-centered"
  }, "First Name"), _react.default.createElement("div", {
    className: "control"
  }, _react.default.createElement("input", {
    className: "input",
    type: "text",
    name: "firstName",
    onChange: handleInputChange,
    value: inputs.firstName,
    required: true
  }))), _react.default.createElement("div", {
    className: "field"
  }, _react.default.createElement("label", {
    className: "label has-text-centered"
  }, "Last Name"), _react.default.createElement("div", {
    className: "control"
  }, _react.default.createElement("input", {
    className: "input",
    type: "text",
    name: "lastName",
    onChange: handleInputChange,
    value: inputs.lastName,
    required: true
  }))), _react.default.createElement("div", {
    className: "field"
  }, _react.default.createElement("label", {
    className: "label has-text-centered"
  }, "Email Address"), _react.default.createElement("div", {
    className: "control"
  }, _react.default.createElement("input", {
    className: "input",
    type: "email",
    name: "email",
    onChange: handleInputChange,
    value: inputs.email,
    required: true
  }))), _react.default.createElement("div", {
    className: "field"
  }, _react.default.createElement("label", {
    className: "label has-text-centered"
  }, "Password"), _react.default.createElement("div", {
    className: "control"
  }, _react.default.createElement("input", {
    className: "input",
    type: "password",
    name: "password1",
    onChange: handleInputChange,
    value: inputs.password1
  }))), _react.default.createElement("div", {
    className: "field"
  }, _react.default.createElement("label", {
    className: "label has-text-centered"
  }, "Re-enter Password"), _react.default.createElement("div", {
    className: "control"
  }, _react.default.createElement("input", {
    className: "input",
    type: "password",
    name: "password2",
    onChange: handleInputChange,
    value: inputs.password2
  }))), _react.default.createElement("button", {
    className: "button is-block is-fullwidth is-success",
    type: "submit"
  }, "Sign Up"))))));
};

var _default = Signup;
exports.default = _default;

//# sourceMappingURL=Signup.js.map