(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/components/DialogComponet.js":
/*!***************************************************!*\
  !*** ./resources/js/components/DialogComponet.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/CloseOutlined */ "./node_modules/@material-ui/icons/CloseOutlined.js");
/* harmony import */ var _material_ui_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var Transition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    direction: "up",
    ref: ref
  }, props));
});

var DialogComponent = function DialogComponent(_ref) {
  var openDialog = _ref.openDialog,
      closeDialog = _ref.closeDialog,
      title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: openDialog,
    TransitionComponent: Transition,
    keepMounted: true,
    "aria-labelledby": "alert-dialog-slide-title",
    "aria-describedby": "alert-dialog-slide-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "alert-dialog-slide-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dialog-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Close dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "secondary",
    onClick: function onClick() {
      return closeDialog();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__["default"], null, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (DialogComponent);

/***/ }),

/***/ "./resources/js/components/SnackbarAlert.js":
/*!**************************************************!*\
  !*** ./resources/js/components/SnackbarAlert.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function Alert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

var SnackbarAlert = function SnackbarAlert(_ref) {
  var _ref$message = _ref.message,
      message = _ref$message === void 0 ? "Alert" : _ref$message,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "success" : _ref$type,
      _ref$openAlert = _ref.openAlert,
      openAlert = _ref$openAlert === void 0 ? false : _ref$openAlert;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: openAlert
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Alert, {
    severity: type
  }, message));
};

/* harmony default export */ __webpack_exports__["default"] = (SnackbarAlert);

/***/ }),

/***/ "./resources/js/components/Spinner.js":
/*!********************************************!*\
  !*** ./resources/js/components/Spinner.js ***!
  \********************************************/
/*! exports provided: Puff, Rings, Oval, BallTriangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Puff", function() { return Puff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rings", function() { return Rings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oval", function() { return Oval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallTriangle", function() { return BallTriangle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner/dist/loader/css/react-spinner-loader.css */ "./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css");
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);




var Puff = function Puff(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 25 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#919191" : _ref$color,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "Puff",
    color: color,
    height: size,
    width: size,
    visible: visible
  });
};

var Rings = function Rings(_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 25 : _ref2$size,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? "#919191" : _ref2$color,
      _ref2$visible = _ref2.visible,
      visible = _ref2$visible === void 0 ? true : _ref2$visible;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "Rings",
    color: color,
    height: size,
    width: size,
    visible: visible
  });
};

var Oval = function Oval(_ref3) {
  var _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? 25 : _ref3$size,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? "#919191" : _ref3$color,
      _ref3$visible = _ref3.visible,
      visible = _ref3$visible === void 0 ? true : _ref3$visible;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "Oval",
    color: color,
    height: size,
    width: size,
    visible: visible
  });
};

var BallTriangle = function BallTriangle(_ref4) {
  var _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? 25 : _ref4$size,
      _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? "#919191" : _ref4$color,
      _ref4$visible = _ref4.visible,
      visible = _ref4$visible === void 0 ? true : _ref4$visible;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "BallTriangle",
    color: color,
    height: size,
    width: size,
    visible: visible
  });
};



/***/ }),

/***/ "./resources/js/components/form/useFormValidation.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/form/useFormValidation.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateForm */ "./resources/js/components/form/validateForm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function useFormValidation(initialState, validationRules, callBack) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(initialState),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      errors = _React$useState4[0],
      setErrors = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isSubmitting = _React$useState6[0],
      setIsSubmitting = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (isSubmitting) {
      var noErrors;
      Object.values(errors).forEach(function (err) {
        noErrors = err.length === 0;
      });

      if (noErrors) {
        callBack();
        setErrors({});
        setTimeout(function () {
          setIsSubmitting(false);
        }, 1000);
      } else {
        setTimeout(function () {
          setIsSubmitting(false);
        }, 1000);
      }
    }
  }, [errors, isSubmitting, callBack]);

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value,
        type = _e$target.type,
        checked = _e$target.checked;
    type === "checkbox" ? setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, name, checked))) : setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, name, value)));
  };

  var handleBlur = function handleBlur() {
    setErrors(Object(_validateForm__WEBPACK_IMPORTED_MODULE_1__["default"])(state, validationRules));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    setTimeout(function () {
      setErrors(Object(_validateForm__WEBPACK_IMPORTED_MODULE_1__["default"])(state, validationRules));
    }, 500);
  };

  var clearValues = function clearValues() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (action) {
      setState(initialState);
      setErrors({});
    }
  };

  var setValues = function setValues() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (Object.keys(data).length > 0) {
      setState(_objectSpread(_objectSpread({}, state), data));
    }
  };

  var setServerErrors = function setServerErrors() {
    var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (Object.keys(err).length > 0) {
      setErrors(_objectSpread(_objectSpread({}, errors), err));
    }
  };

  return {
    handleChange: handleChange,
    handleBlur: handleBlur,
    handleSubmit: handleSubmit,
    isSubmitting: isSubmitting,
    errors: errors,
    state: state,
    clearValues: clearValues,
    setValues: setValues,
    setServerErrors: setServerErrors
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useFormValidation);

/***/ }),

/***/ "./resources/js/components/form/validateForm.js":
/*!******************************************************!*\
  !*** ./resources/js/components/form/validateForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validationRules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationRules */ "./resources/js/components/form/validationRules.js");


var decamelize = function decamelize(str, separator) {
  separator = typeof separator === "undefined" ? " " : separator;
  return str.replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2").toLowerCase();
};

var validateForm = function validateForm(values, rules) {
  var errors = {};

  for (var ruleKey in rules) {
    var _loop = function _loop(valueKey) {
      if (ruleKey === valueKey) {
        errors["".concat(valueKey)] = [];
        var rulesArray = rules[ruleKey].split("|");
        rulesArray.forEach(function (rule) {
          var mainRule = "";
          var mainRuleMessage = "";

          if (rule.includes(">")) {
            mainRule = rule.split(">")[0];
            mainRuleMessage = rule.split(">")[1];
          } else {
            mainRule = rule;
          }

          if (mainRule === "required" && !values[valueKey]) {
            mainRuleMessage.length > 0 ? errors["".concat(valueKey)].push(mainRuleMessage) : errors["".concat(valueKey)].push("The ".concat(decamelize(valueKey), " field is required"));
          } else if (values[valueKey]) {
            if (mainRule === "alpha" && !Object(_validationRules__WEBPACK_IMPORTED_MODULE_0__["testAlpha"])(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors["".concat(valueKey)].push(mainRuleMessage) : errors["".concat(valueKey)].push("The ".concat(decamelize(valueKey), " field must be alphabetic characters"));
            }

            if (mainRule === "alpha_num" && !Object(_validationRules__WEBPACK_IMPORTED_MODULE_0__["testAlphaNum"])(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors["".concat(valueKey)].push(mainRuleMessage) : errors["".concat(valueKey)].push("The ".concat(decamelize(valueKey), " field must be alphanumeric"));
            }

            if (mainRule === "alpha_dash" && !Object(_validationRules__WEBPACK_IMPORTED_MODULE_0__["testAlphaDash"])(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors["".concat(valueKey)].push(mainRuleMessage) : errors["".concat(valueKey)].push("The ".concat(decamelize(valueKey), " field must be alphanumeric with dashes or underscore"));
            }

            if (mainRule === "string" && !Object(_validationRules__WEBPACK_IMPORTED_MODULE_0__["testString"])(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors["".concat(valueKey)].push(mainRuleMessage) : errors["".concat(valueKey)].push("The ".concat(decamelize(valueKey), " field must be string"));
            }

            if (mainRule === "numeric" && !Object(_validationRules__WEBPACK_IMPORTED_MODULE_0__["testNumeric"])(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors["".concat(valueKey)].push(mainRuleMessage) : errors["".concat(valueKey)].push("The ".concat(decamelize(valueKey), " field must be numeric"));
            }

            if (mainRule === "email" && !Object(_validationRules__WEBPACK_IMPORTED_MODULE_0__["testEmail"])(values[valueKey])) {
              mainRuleMessage.length > 0 ? errors["".concat(valueKey)].push(mainRuleMessage) : errors["".concat(valueKey)].push("The ".concat(decamelize(valueKey), " field must be a valid email"));
            }

            if (mainRule.includes(":")) {
              var key = mainRule.split(":")[0];
              var value = mainRule.split(":")[1];

              switch (key.toLowerCase()) {
                case "min":
                  if (values[valueKey].length < parseInt(value)) {
                    mainRuleMessage.length > 0 ? errors["".concat(valueKey)].push(mainRuleMessage) : errors["".concat(valueKey)].push("The ".concat(decamelize(valueKey), " must be ").concat(value, " characters minimum"));
                  }

                  break;

                case "max":
                  if (values[valueKey].length > parseInt(value)) {
                    mainRuleMessage.length > 0 ? errors["".concat(valueKey)].push(mainRuleMessage) : errors["".concat(valueKey)].push("The ".concat(decamelize(valueKey), " must be ").concat(value, " characters maximum"));
                  }

                  break;

                case "match":
                  if (values[valueKey] !== values[value]) {
                    mainRuleMessage.length > 0 ? errors["".concat(valueKey)].push(mainRuleMessage) : errors["".concat(valueKey)].push("The ".concat(decamelize(valueKey), " dose not match ").concat(value));
                  }

                  break;

                default:
                  break;
              }
            }
          }
        });
      }
    };

    for (var valueKey in values) {
      _loop(valueKey);
    }
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validateForm);

/***/ }),

/***/ "./resources/js/components/form/validationRules.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/form/validationRules.js ***!
  \*********************************************************/
/*! exports provided: testAlpha, testAlphaNum, testString, testAlphaDash, testNumeric, testEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testAlpha", function() { return testAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testAlphaNum", function() { return testAlphaNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testString", function() { return testString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testAlphaDash", function() { return testAlphaDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testNumeric", function() { return testNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testEmail", function() { return testEmail; });
var testAlpha = function testAlpha(value) {
  return /^[A-Za-z]+$/.test(value);
};
var testAlphaNum = function testAlphaNum(value) {
  return /^[0-9A-Za-z]+$/.test(value);
};
var testString = function testString(value) {
  return /^[0-9A-Za-z ]+$/.test(value);
};
var testAlphaDash = function testAlphaDash(value) {
  return /^[0-9A-Za-z-_]+$/.test(value);
};
var testNumeric = function testNumeric(value) {
  return /^[0-9]+$/.test(value);
};
var testEmail = function testEmail(value) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
};

/***/ })

}]);