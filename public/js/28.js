(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./resources/js/Pages/Welcome.js":
/*!***************************************!*\
  !*** ./resources/js/Pages/Welcome.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_useFormValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form/useFormValidation */ "./resources/js/components/form/useFormValidation.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Spinner */ "./resources/js/components/Spinner.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var account = {
  STATE: {
    userId: "",
    password: "",
    password_confirmation: "",
    email: ""
  },
  RULES: {
    userId: "required|string|min:3",
    password: "required|min:6|max:16",
    password_confirmation: "required>The confirm password field is required|min:6>The confirm password must be 6 characters minimum|max:16>The confirm password must be 16 characters maximum",
    email: "required|email"
  }
};

var Welcome = function Welcome(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      IDAuthenticated = _React$useState4[0],
      setIDAuthenticated = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      accountType = _React$useState6[0],
      setAccountType = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      userType = _React$useState8[0],
      setUserType = _React$useState8[1];

  var _useFormValidation = Object(_components_form_useFormValidation__WEBPACK_IMPORTED_MODULE_2__["default"])(account.STATE, account.RULES, createAccount),
      values = _useFormValidation.state,
      handleChange = _useFormValidation.handleChange,
      handleBlur = _useFormValidation.handleBlur,
      handleSubmit = _useFormValidation.handleSubmit,
      isSubmitting = _useFormValidation.isSubmitting,
      updateIsSubmitting = _useFormValidation.updateIsSubmitting,
      errors = _useFormValidation.errors,
      clearValues = _useFormValidation.clearValues,
      setServerErrors = _useFormValidation.setServerErrors;

  var _useFormValidation2 = Object(_components_form_useFormValidation__WEBPACK_IMPORTED_MODULE_2__["default"])({
    userId: ""
  }, {
    userId: "required|string|min:3"
  }, authenticateId),
      authId = _useFormValidation2.state,
      authChange = _useFormValidation2.handleChange,
      authBlur = _useFormValidation2.handleBlur,
      authSubmit = _useFormValidation2.handleSubmit,
      authSubmitting = _useFormValidation2.isSubmitting,
      authUpdateIsSubmitting = _useFormValidation2.updateIsSubmitting,
      authErrors = _useFormValidation2.errors,
      authClear = _useFormValidation2.clearValues,
      authSetErrors = _useFormValidation2.setServerErrors;

  var _useFormValidation3 = Object(_components_form_useFormValidation__WEBPACK_IMPORTED_MODULE_2__["default"])({
    userId: "",
    password: ""
  }, {
    userId: "required|string|min:3",
    password: "required|string"
  }, loginUser),
      login = _useFormValidation3.state,
      loginChange = _useFormValidation3.handleChange,
      loginBlur = _useFormValidation3.handleBlur,
      loginSubmit = _useFormValidation3.handleSubmit,
      loginSubmitting = _useFormValidation3.isSubmitting,
      loginErrors = _useFormValidation3.errors,
      loginClear = _useFormValidation3.clearValues,
      loginSetErrors = _useFormValidation3.setServerErrors;

  var showAccountForm = function showAccountForm(type) {
    setAccountType(type);
    setActive(true);
  };

  var clearAccountForm = function clearAccountForm(type) {
    setActive(false);
    setAccountType(type);
    clearValues();
    setServerErrors();
  };

  var checkLoginUserId = function checkLoginUserId(id) {
    var student1 = /^375/;
    var student2 = /^348/;
    var faculty = /^388/;

    if (student1.exec(id) || student2.exec(id)) {
      setUserType("student");
      return true;
    } else if (faculty.exec(id)) {
      setUserType("faculty");
      return true;
    }

    setUserType("");
    return false;
  };

  function authenticateId() {
    if (checkLoginUserId(authId.userId)) {
      setTimeout(function () {
        login.userId = authId.userId;
        setIDAuthenticated(true);
        authUpdateIsSubmitting(false);
      }, 1000);
    } else {
      setTimeout(function () {
        authSetErrors({
          userId: "Invalid user ID"
        });
      }, 1000);
      setTimeout(function () {
        authUpdateIsSubmitting(false);
      }, 3000);
    }
  }

  function loginUser() {
    var data = _objectSpread(_objectSpread({}, login), {}, {
      userType: userType
    });

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].post("/signin", data, {
      errorBag: "signin",
      onSuccess: function onSuccess(page) {},
      onError: function onError(error) {
        error.userId && loginSetErrors({
          userId: error.userId
        });
        error.password && loginSetErrors({
          password: error.password
        });
      }
    });
  }

  function createAccount() {
    var _data;

    var student1 = /^375/;
    var student2 = /^348/;
    var faculty = /^388/;

    if (accountType === "student") {
      if (!student1.exec(values.userId)) {
        if (!student2.exec(values.userId)) {
          setTimeout(function () {
            setServerErrors({
              userId: "Invalid user ID, ID must start with 375 or 348"
            });
          }, 1000);
          return;
        }
      }
    }

    if (accountType === "faculty") {
      if (!faculty.exec(values.userId)) {
        setTimeout(function () {
          setServerErrors({
            userId: "Invalid user ID, ID must start with 388"
          });
        }, 1000);
        return;
      }
    }

    var userID = accountType === "faculty" ? "faculty_id" : "student_id";
    var data = (_data = {}, _defineProperty(_data, userID, values.userId), _defineProperty(_data, "password", values.password), _defineProperty(_data, "password_confirmation", values.password_confirmation), _defineProperty(_data, "email", values.email), _defineProperty(_data, "accountType", accountType), _data);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].post("/create-account", data, {
      errorBag: "createAccount",
      onSuccess: function onSuccess(page) {
        updateIsSubmitting(false);
      },
      onError: function onError(error) {
        updateIsSubmitting(false);
        setServerErrors({
          userId: error.student_id || error.faculty_id ? error.student_id || error.faculty_id : "",
          password: error.password ? error.password : "",
          email: error.email ? error.email : ""
        });
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "login__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container ".concat(active ? "right-panel-active" : ""),
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-container sign-up-container"
  }, accountType === "student" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    action: "#",
    className: "account signup-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo-container-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/storage/logo/lancaster-1.png",
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Create Your Student Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "userId",
    placeholder: "Student ID",
    className: errors.userId && errors.userId.length > 0 ? "invalid-input" : "",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.userId
  }), errors.userId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error-message"
  }, errors.userId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Password",
    className: errors.password && errors.password.length > 0 ? "invalid-input" : "",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.password
  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error-message"
  }, errors.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "password",
    name: "password_confirmation",
    placeholder: "Confirm Password",
    className: errors.password_confirmation && errors.password_confirmation.length > 0 ? "invalid-input" : "",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.password_confirmation
  }), errors.password_confirmation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error-message"
  }, errors.password_confirmation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email",
    className: errors.email && errors.email.length > 0 ? "invalid-input" : "",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.email
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error-message"
  }, errors.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "mt-3"
  }, "Sign Up")), accountType === "faculty" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    action: "#",
    className: "account signup-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo-container-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/storage/logo/lancaster-1.png",
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Create Your Faculty Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "userId",
    placeholder: "Faculty ID",
    className: errors.userId && errors.userId.length > 0 ? "invalid-input" : "",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.userId
  }), errors.userId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error-message"
  }, errors.userId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Password",
    className: errors.password && errors.password.length > 0 ? "invalid-input" : "",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.password
  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error-message"
  }, errors.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "password",
    name: "password_confirmation",
    placeholder: "Confirm Password",
    className: errors.password_confirmation && errors.password_confirmation.length > 0 ? "invalid-input" : "",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.password_confirmation
  }), errors.password_confirmation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error-message"
  }, errors.password_confirmation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email",
    className: errors.email && errors.email.length > 0 ? "invalid-input" : "",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.email
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error-message"
  }, errors.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "mt-3",
    type: "submit"
  }, "Sign Up"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-container sign-in-container"
  }, !IDAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "account login-form",
    onSubmit: authSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo-container-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/storage/logo/lancaster-1.png",
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "login-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "login-info-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Student:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Please use your student ID")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "login-info-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Faculty:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Please use your faculty ID"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "Enter user ID",
    name: "userId",
    className: authErrors.userId && authErrors.userId.length > 0 ? "invalid-input" : "",
    onChange: authChange,
    onBlur: authBlur,
    value: authId.userId
  }), authErrors.userId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error-message"
  }, authErrors.userId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "mt-3",
    type: "submit",
    disabled: authSubmitting
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, authSubmitting ? "Authenticating..." : "Authenticate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#"
  }, "Forgot your password?")), IDAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    action: "#",
    className: "account login-form",
    onSubmit: loginSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo-container-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/storage/logo/lancaster-1.png",
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "login-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "login-info-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Student:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Please use your student ID")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "login-info-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Faculty:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Please use your faculty ID"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    placeholder: "User ID",
    name: "userId",
    className: loginErrors.userId && loginErrors.userId.length > 0 ? "invalid-input" : "",
    onChange: loginChange,
    onBlur: loginBlur,
    value: login.userId
  }), loginErrors.userId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error-message"
  }, loginErrors.userId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Password",
    className: loginErrors.password && loginErrors.password.length > 0 ? "invalid-input" : "",
    onChange: loginChange,
    onBlur: loginBlur,
    value: login.password
  }), loginErrors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error-message"
  }, loginErrors.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "mt-3",
    type: "submit"
  }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#"
  }, "Forgot your password?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "overlay-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "overlay-panel overlay-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Welcome Back!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "To keep connected with us please login with your personal info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "ghost",
    id: "signIn",
    onClick: clearAccountForm
  }, "Sign In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "overlay-panel overlay-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Create Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Enter personal details to create new account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sign-up-btns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "ghost",
    id: "signUp",
    onClick: function onClick() {
      return showAccountForm("student");
    }
  }, "Student"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "ghost",
    id: "signUp",
    onClick: function onClick() {
      return showAccountForm("faculty");
    }
  }, "Faculty")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ })

}]);