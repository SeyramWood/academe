(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./resources/js/Pages/student/Courses.js":
/*!***********************************************!*\
  !*** ./resources/js/Pages/student/Courses.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_StudentDashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/StudentDashboard */ "./resources/js/layouts/StudentDashboard.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/Spinner */ "./resources/js/components/Spinner.js");
/* harmony import */ var _components_form_useFormValidation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/form/useFormValidation */ "./resources/js/components/form/useFormValidation.js");
/* harmony import */ var _components_SnackbarAlert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../components/SnackbarAlert */ "./resources/js/components/SnackbarAlert.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary
    },
    displayCourse: {
      width: "100%",
      height: "10rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.5rem",
      color: "#000000"
    },
    width: "80%"
  };
});
var courseState = {
  STATE: {
    programme: "",
    semester: "",
    year: ""
  },
  RULES: {
    programme: "required|numeric",
    semester: "required|string",
    year: "required|string"
  }
};

var Courses = function Courses(_ref) {
  var _React$createElement;

  var programmes = _ref.programmes,
      semesterCourses = _ref.semesterCourses;
  var classes = useStyles();
  var authUser = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])().props.authUser;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      registerForm = _React$useState2[0],
      setRegisterForm = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openAlert = _React$useState4[0],
      setOpenAlert = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      alertMessage = _React$useState6[0],
      setAlertMessage = _React$useState6[1];

  var _useFormValidation = Object(_components_form_useFormValidation__WEBPACK_IMPORTED_MODULE_24__["default"])(_objectSpread(_objectSpread({}, courseState.STATE), {}, {
    programme: authUser.programme_id || "",
    semester: authUser.semester || "",
    year: authUser.year || ""
  }), courseState.RULES, registerCourse),
      values = _useFormValidation.state,
      handleChange = _useFormValidation.handleChange,
      handleBlur = _useFormValidation.handleBlur,
      handleSubmit = _useFormValidation.handleSubmit,
      isSubmitting = _useFormValidation.isSubmitting,
      updateIsSubmitting = _useFormValidation.updateIsSubmitting,
      errors = _useFormValidation.errors,
      clearValues = _useFormValidation.clearValues,
      setServerErrors = _useFormValidation.setServerErrors;

  function registerCourse() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].post("/dashboard/student/register-course", values, {
      errorBag: "registerCourse",
      onSuccess: function onSuccess(page) {
        updateIsSubmitting(false);
        setAlertMessage("Registration successfully done.");
        setOpenAlert(true);
        setTimeout(function () {
          setOpenAlert(false);
        }, 5000);
      },
      onError: function onError(error) {
        setServerErrors({
          programme: error.programme,
          semester: error.semester,
          year: error.year
        });
      }
    });
  }

  var showRegisterForm = function showRegisterForm() {
    setRegisterForm(function (state) {
      return !state;
    });
    clearValues({
      programme: "",
      semester: "",
      year: ""
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SnackbarAlert__WEBPACK_IMPORTED_MODULE_25__["default"], {
    message: alertMessage,
    openAlert: openAlert
  }), ";", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "student-courses"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_19__["default"], {
    "in": registerForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "student-courses-register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", (_React$createElement = {
    noValidate: true,
    autoComplete: "off",
    className: "m-2"
  }, _defineProperty(_React$createElement, "className", classes.formWith), _defineProperty(_React$createElement, "onSubmit", handleSubmit), _React$createElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "programs-details__title secondary"
  }, "Course Registraion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Select Program"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "filled",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "demo-simple-select-filled-label",
    className: errors.programme && errors.programme.length > 0 ? "error" : ""
  }, "Programme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelId: "demo-simple-select-filled-label",
    id: "demo-simple-select-filled",
    name: "programme",
    error: errors.programme && errors.programme.length > 0 && true,
    value: values.programme,
    defaultValue: "ioighiodhgoi",
    onChange: handleChange,
    onBlur: handleBlur,
    disabled: authUser.programme_id && true
  }, programmes.map(function (p) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
      value: p.id,
      key: p.id.toString()
    }, p.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "error"
  }, errors.programme)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Select Semester"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_12__["default"], {
    row: true,
    "aria-label": "semester",
    name: "semester",
    onChange: handleChange,
    onBlur: handleBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "First Semester",
    value: "First Semester",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11__["default"], {
      color: "primary",
      checked: values.semester === "First Semester" ? true : false
    }),
    labelPlacement: "end"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "Second Semester",
    value: "Second Semester",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11__["default"], {
      color: "primary",
      checked: values.semester === "Second Semester" ? true : false
    }),
    labelPlacement: "end"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "error"
  }, errors.semester && errors.semester.length > 0 && errors.semester), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Select Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_12__["default"], {
    row: true,
    "aria-label": "year",
    name: "year",
    onChange: handleChange,
    onBlur: handleBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "Year 1",
    value: "Year 1",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11__["default"], {
      color: "primary",
      checked: values.year === "Year 1" ? true : false
    }),
    labelPlacement: "end"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "Year 2",
    value: "Year 2",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11__["default"], {
      color: "primary",
      checked: values.year === "Year 2" ? true : false
    }),
    labelPlacement: "end"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "Year 3",
    value: "Year 3",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_11__["default"], {
      color: "primary",
      checked: values.year === "Year 3" ? true : false
    }),
    labelPlacement: "end"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "error"
  }, errors.year && errors.year.length > 0 && errors.year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    component: "legend",
    className: "my-3"
  }, "Required fields (*)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "my-3 submit-btn-wrapper btn-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "outlined",
    color: "primary",
    type: "submit",
    disabled: isSubmitting
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_23__["Puff"], {
    size: 20,
    color: "#3f51b5",
    visible: isSubmitting
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, isSubmitting ? "Submitting..." : "Submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "outlined",
    color: "secondary",
    type: "button",
    disabled: isSubmitting,
    onClick: showRegisterForm
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "programs-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    direction: "row",
    justify: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "programs-details__title secondary"
  }, "".concat(authUser.year, " - ").concat(authUser.semester)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: showRegisterForm
  }, "Register Courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true
  }, semesterCourses.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_20__["default"], {
    dense: true
  }, semesterCourses.map(function (c) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: c.id.toString()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_22__["default"], {
      primary: c.title,
      secondary: "Course Code :: ".concat(c.code)
    }));
  })), !semesterCourses.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    style: {
      textAlign: "center"
    }
  }, "No avaialable registered courses. Please click the button above to register!"))))))));
};

Courses.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layouts_StudentDashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Courses);

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

/***/ })

}]);