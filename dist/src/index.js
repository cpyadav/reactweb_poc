"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Signup = _interopRequireDefault(require("./Signup"));

require("bulma/css/bulma.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @render react
 * @name Hook-Form
 * @description A Sign Up form built using Custom React Hooks
 * @example
 * <SignUp/>
 */
_reactDom.default.render(_react.default.createElement(_Signup.default, null), document.getElementById('root'));

//# sourceMappingURL=index.js.map