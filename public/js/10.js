(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./resources/js/Pages/backend/ManageCourses.js":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/backend/ManageCourses.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/Dashboard */ "./resources/js/layouts/Dashboard.js");
/* harmony import */ var _components_AllCoursesView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AllCoursesView */ "./resources/js/components/AllCoursesView.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _components_form_useFormValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/form/useFormValidation */ "./resources/js/components/form/useFormValidation.js");
/* harmony import */ var _components_DialogComponet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/DialogComponet */ "./resources/js/components/DialogComponet.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/Spinner */ "./resources/js/components/Spinner.js");
/* harmony import */ var _components_SnackbarAlert__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/SnackbarAlert */ "./resources/js/components/SnackbarAlert.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
























var courseState = {
  STATE: {
    programme: "",
    courseTitle: "",
    courseCode: "",
    semester: "",
    year: ""
  },
  RULES: {
    programme: "required|numeric",
    courseTitle: "required|string",
    courseCode: "required|string",
    semester: "required|string",
    year: "required|string"
  }
};
var useToolbarStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    formWith: {
      width: "30rem"
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff"
    }
  };
});

var ManageCourses = function ManageCourses(_ref) {
  var _React$createElement;

  var courses = _ref.courses,
      programmes = _ref.programmes;
  var classes = useToolbarStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openUpdateCourseDialog = _React$useState2[0],
      setUpdateCourseDialog = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openAlert = _React$useState4[0],
      setOpenAlert = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      alertMessage = _React$useState6[0],
      setAlertMessage = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    response: [],
    loading: false
  }),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      filterCourses = _React$useState8[0],
      setFilterCourses = _React$useState8[1];

  var _useFormValidation = Object(_components_form_useFormValidation__WEBPACK_IMPORTED_MODULE_9__["default"])(courseState.STATE, courseState.RULES, updateCourse),
      values = _useFormValidation.state,
      handleChange = _useFormValidation.handleChange,
      handleBlur = _useFormValidation.handleBlur,
      handleSubmit = _useFormValidation.handleSubmit,
      isSubmitting = _useFormValidation.isSubmitting,
      errors = _useFormValidation.errors,
      clearValues = _useFormValidation.clearValues,
      setValues = _useFormValidation.setValues,
      setServerErrors = _useFormValidation.setServerErrors;

  var getCourseToUpdate = function getCourseToUpdate(data) {
    setValues({
      id: data.id,
      programme: data.p_id,
      courseTitle: data.title,
      courseCode: data.code,
      semester: data.semester,
      year: data.year
    });
    setUpdateCourseDialog(true);
  };

  var handleUpdateCourseDialogClose = function handleUpdateCourseDialogClose() {
    setUpdateCourseDialog(false);
    clearValues();
    setServerErrors();
  };

  function updateCourse() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].put("/dashboard/update-course", values, {
      errorBag: "updateCourse",
      onSuccess: function onSuccess(page) {
        setUpdateCourseDialog(false);
        clearValues();
        setAlertMessage("Course updated successfully");
        setOpenAlert(true);
        setTimeout(function () {
          setOpenAlert(false);
        }, 5000);
      },
      onError: function onError(error) {
        setServerErrors({
          programme: error.programme,
          courseTitle: error.courseTitle,
          courseCode: error.courseCode,
          semester: error.semester,
          year: error.year
        });
      }
    });
  }

  var deleteCourse = function deleteCourse(id) {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"]["delete"]("/dashboard/delete-course/".concat(id), {
      onSuccess: function onSuccess(page) {
        setAlertMessage("Course deleted successfully");
        setOpenAlert(true);
        setTimeout(function () {
          setOpenAlert(false);
        }, 5000);
      }
    });
  };

  var handleFilterCourse = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(key) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFilterCourses({
                response: [],
                loading: true
              });
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/dashboard/get-courses/".concat(key));

            case 3:
              res = _context.sent;
              setFilterCourses({
                response: res.data,
                loading: false
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleFilterCourse(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AllCoursesView__WEBPACK_IMPORTED_MODULE_5__["default"], {
    allPrograms: programmes,
    courses: filterCourses.response.length > 0 ? filterCourses.response : courses,
    getCourseToUpdate: getCourseToUpdate,
    deleteCourse: deleteCourse,
    handleFilterCourse: handleFilterCourse
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.backdrop,
    open: filterCourses.loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_23__["default"], {
    color: "inherit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SnackbarAlert__WEBPACK_IMPORTED_MODULE_21__["default"], {
    message: alertMessage,
    openAlert: openAlert
  }), ";", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_DialogComponet__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Update Course",
    openDialog: openUpdateCourseDialog,
    closeDialog: handleUpdateCourseDialogClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", (_React$createElement = {
    noValidate: true,
    autoComplete: "off",
    className: "m-2"
  }, _defineProperty(_React$createElement, "className", classes.formWith), _defineProperty(_React$createElement, "onSubmit", handleSubmit), _React$createElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_15__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Select Program"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "filled",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "demo-simple-select-filled-label",
    className: errors.programme && errors.programme.length > 0 ? "error" : ""
  }, "Programme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__["default"], {
    labelId: "demo-simple-select-filled-label",
    id: "demo-simple-select-filled",
    name: "programme",
    error: errors.programme && errors.programme.length > 0 && true,
    value: values.programme,
    onChange: handleChange,
    onBlur: handleBlur
  }, programmes.map(function (p) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
      value: p.id,
      key: p.id.toString()
    }, p.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "error"
  }, errors.programme)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_15__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Enter Course Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Course Title",
    variant: "filled",
    size: "small",
    name: "courseTitle",
    error: errors.courseTitle && errors.courseTitle.length > 0 && true,
    helperText: errors.courseTitle && errors.courseTitle.length > 0 && errors.courseTitle,
    value: values.courseTitle,
    onChange: handleChange,
    onBlur: handleBlur
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_15__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Enter Course Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Course Code",
    variant: "filled",
    size: "small",
    name: "courseCode",
    error: errors.courseCode && errors.courseCode.length > 0 && true,
    helperText: errors.courseCode && errors.courseCode.length > 0 && errors.courseCode,
    value: values.courseCode,
    onChange: handleChange,
    onBlur: handleBlur
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_15__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Select Semester"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__["default"], {
    row: true,
    "aria-label": "semester",
    name: "semester",
    onChange: handleChange,
    onBlur: handleBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "First Semester",
    value: "First Semester",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12__["default"], {
      color: "primary",
      checked: values.semester === "First Semester" ? true : false
    }),
    labelPlacement: "end"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "Second Semester",
    value: "Second Semester",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12__["default"], {
      color: "primary",
      checked: values.semester === "Second Semester" ? true : false
    }),
    labelPlacement: "end"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "error"
  }, errors.semester && errors.semester.length > 0 && errors.semester), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_15__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Select Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__["default"], {
    row: true,
    "aria-label": "year",
    name: "year",
    onChange: handleChange,
    onBlur: handleBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "Year 1",
    value: "Year 1",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12__["default"], {
      color: "primary",
      checked: values.year === "Year 1" ? true : false
    }),
    labelPlacement: "end"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "Year 2",
    value: "Year 2",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12__["default"], {
      color: "primary",
      checked: values.year === "Year 2" ? true : false
    }),
    labelPlacement: "end"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "Year 3",
    value: "Year 3",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_12__["default"], {
      color: "primary",
      checked: values.year === "Year 3" ? true : false
    }),
    labelPlacement: "end"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "error"
  }, errors.year && errors.year.length > 0 && errors.year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_15__["default"], {
    component: "legend",
    className: "my-3"
  }, "Required fields (*)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "my-3 submit-btn-wrapper btn-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
    variant: "outlined",
    color: "primary",
    type: "submit",
    disabled: isSubmitting
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_20__["Puff"], {
    size: 20,
    color: "#3f51b5",
    visible: isSubmitting
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, isSubmitting ? "Submitting..." : "Submit"))))));
};

ManageCourses.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layouts_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageCourses);

/***/ }),

/***/ "./resources/js/components/AllCoursesView.js":
/*!***************************************************!*\
  !*** ./resources/js/components/AllCoursesView.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "./node_modules/@material-ui/core/esm/TableSortLabel/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/EditOutlined */ "./node_modules/@material-ui/icons/EditOutlined.js");
/* harmony import */ var _material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/AddOutlined */ "./node_modules/@material-ui/icons/AddOutlined.js");
/* harmony import */ var _material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _DialogComponet__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./DialogComponet */ "./resources/js/components/DialogComponet.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Spinner */ "./resources/js/components/Spinner.js");
/* harmony import */ var _form_useFormValidation__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./form/useFormValidation */ "./resources/js/components/form/useFormValidation.js");
/* harmony import */ var _SnackbarAlert__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./SnackbarAlert */ "./resources/js/components/SnackbarAlert.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












































function createData(id, p_id, title, code, semester, year, programme) {
  return {
    id: id,
    p_id: p_id,
    title: title,
    code: code,
    semester: semester,
    year: year,
    programme: programme
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc" ? function (a, b) {
    return descendingComparator(a, b, orderBy);
  } : function (a, b) {
    return -descendingComparator(a, b, orderBy);
  };
}

function stableSort(array, comparator) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

var headCells = [{
  id: "id",
  numeric: false,
  disablePadding: true,
  label: "#ID"
}, {
  id: "course-title",
  numeric: false,
  disablePadding: false,
  label: "Course Title"
}, {
  id: "course-code",
  numeric: false,
  disablePadding: false,
  label: "Course Code"
}, {
  id: "semester",
  numeric: false,
  disablePadding: false,
  label: "Semester"
}, {
  id: "year",
  numeric: false,
  disablePadding: false,
  label: "Year"
}, {
  id: "programme",
  numeric: false,
  disablePadding: false,
  label: "Programme"
}, {
  id: "action",
  numeric: true,
  disablePadding: false,
  label: "Actions"
}];

function EnhancedTableHead(props) {
  var classes = props.classes,
      onSelectAllClick = props.onSelectAllClick,
      order = props.order,
      orderBy = props.orderBy,
      numSelected = props.numSelected,
      rowCount = props.rowCount,
      onRequestSort = props.onRequestSort;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    padding: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: rowCount > 0 && numSelected === rowCount,
    onChange: onSelectAllClick,
    inputProps: {
      "aria-label": "select all desserts"
    }
  })), headCells.map(function (headCell) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: headCell.id,
      align: headCell.numeric ? "right" : "left",
      padding: headCell.disablePadding ? "none" : "default",
      sortDirection: orderBy === headCell.id ? order : false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
      active: orderBy === headCell.id,
      direction: orderBy === headCell.id ? order : "asc",
      onClick: createSortHandler(headCell.id)
    }, headCell.label, orderBy === headCell.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: classes.visuallyHidden
    }, order === "desc" ? "sorted descending" : "sorted ascending") : null));
  })));
}

EnhancedTableHead.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  numSelected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  onRequestSort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSelectAllClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  order: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["asc", "desc"]).isRequired,
  orderBy: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  rowCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
var useToolbarStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === "light" ? {
      color: theme.palette.secondary.main,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["lighten"])(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    title: {
      flex: "1 1 100%"
    },
    formWith: {
      width: "30rem"
    }
  };
});
var courseState = {
  STATE: {
    programme: "",
    courseTitle: "",
    courseCode: "",
    semester: "",
    year: ""
  },
  RULES: {
    programme: "required|numeric",
    courseTitle: "required|string",
    courseCode: "required|string",
    semester: "required|string",
    year: "required|string"
  }
};

var EnhancedTableToolbar = function EnhancedTableToolbar(props) {
  var _React$createElement;

  var classes = useToolbarStyles();
  var numSelected = props.numSelected,
      selected = props.selected,
      clearSelected = props.clearSelected,
      allPrograms = props.allPrograms,
      handleFilterCourse = props.handleFilterCourse;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openAddCourseDialog = _React$useState2[0],
      setAddCourseDialog = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openAlert = _React$useState4[0],
      setOpenAlert = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      alertMessage = _React$useState6[0],
      setAlertMessage = _React$useState6[1];

  var filterCoursPopperRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      filterCoursePopper = _React$useState8[0],
      setFilterCoursePopper = _React$useState8[1];

  var _useFormValidation = Object(_form_useFormValidation__WEBPACK_IMPORTED_MODULE_37__["default"])(courseState.STATE, courseState.RULES, addNewCourse),
      values = _useFormValidation.state,
      handleChange = _useFormValidation.handleChange,
      handleBlur = _useFormValidation.handleBlur,
      handleSubmit = _useFormValidation.handleSubmit,
      isSubmitting = _useFormValidation.isSubmitting,
      errors = _useFormValidation.errors,
      clearValues = _useFormValidation.clearValues,
      setServerErrors = _useFormValidation.setServerErrors;

  var handleAddCourseDialogOpen = function handleAddCourseDialogOpen() {
    setAddCourseDialog(true);
  };

  var handleAddCourseDialogClose = function handleAddCourseDialogClose() {
    setAddCourseDialog(false);
    clearValues();
    setServerErrors();
  };

  function addNewCourse() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].post("/dashboard/create-course", values, {
      errorBag: "createCourse",
      onSuccess: function onSuccess(page) {
        clearValues();
        setAlertMessage("Course added successfully");
        setOpenAlert(true);
        setTimeout(function () {
          setOpenAlert(false);
        }, 5000);
      },
      onError: function onError(error) {
        setServerErrors({
          programme: error.programme
        });
      }
    });
  }

  var deleteCourses = function deleteCourses() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"]["delete"]("/dashboard/delete-courses/".concat(selected), {
      onSuccess: function onSuccess(page) {
        clearSelected();
        setAlertMessage("Courses deleted successfully");
        setOpenAlert(true);
        setTimeout(function () {
          setOpenAlert(false);
        }, 5000);
      }
    });
  };

  var toggleFilterCoursePopper = function toggleFilterCoursePopper() {
    setFilterCoursePopper(function (filterCoursePopper) {
      return !filterCoursePopper;
    });
  };

  var handleFilterCoursePopper = function handleFilterCoursePopper(event, key) {
    if (key) {
      handleFilterCourse(key);
    }

    if (filterCoursPopperRef.current && filterCoursPopperRef.current.contains(event.target)) {
      return;
    }

    setFilterCoursePopper(false);
  }; // return focus to the button when we transitioned from !open -> open


  var prevFilterCoursePopperOpen = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(filterCoursePopper);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (prevFilterCoursePopperOpen.current === true && prevFilterCoursePopperOpen === false) {
      filterCoursPopperRef.current.focus();
    }

    prevFilterCoursePopperOpen.current = filterCoursePopper;
  }, [filterCoursePopper]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SnackbarAlert__WEBPACK_IMPORTED_MODULE_38__["default"], {
    message: alertMessage,
    openAlert: openAlert
  }), ";", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, _defineProperty({}, classes.highlight, numSelected > 0))
  }, numSelected > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.title,
    color: "inherit",
    variant: "subtitle1",
    component: "div"
  }, numSelected, " selected") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.title,
    variant: "h6",
    id: "tableTitle",
    component: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "secondary"
  }, "All Courses")), numSelected > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: "Delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-label": "delete",
    onClick: deleteCourses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_21___default.a, null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: "Filter courses"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-label": "filter list",
    onClick: toggleFilterCoursePopper,
    ref: filterCoursPopperRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_22___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: "Add new program"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-label": "add new program",
    color: "primary",
    onClick: handleAddCourseDialogOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_20___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_40__["default"], {
    open: filterCoursePopper,
    anchorEl: filterCoursPopperRef.current,
    role: undefined,
    transition: true,
    disablePortal: true,
    placement: "bottom-end"
  }, function (_ref) {
    var TransitionProps = _ref.TransitionProps,
        placement = _ref.placement;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_39__["default"], _extends({}, TransitionProps, {
      style: {
        transformOrigin: placement === "bottom" ? "center top" : "center bottom"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_41__["default"], {
      onClickAway: function onClickAway(e) {
        return handleFilterCoursePopper(e, "");
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_34__["default"], {
      autoFocusItem: filterCoursePopper,
      id: "menu-list-grow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      onClick: function onClick(e) {
        return handleFilterCoursePopper(e, "First Semester");
      }
    }, "First Semester"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      onClick: function onClick(e) {
        return handleFilterCoursePopper(e, "Second Semester");
      }
    }, "Second Semester"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      onClick: function onClick(e) {
        return handleFilterCoursePopper(e, "Year 1");
      }
    }, "Year 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      onClick: function onClick(e) {
        return handleFilterCoursePopper(e, "Year 2");
      }
    }, "Year 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      onClick: function onClick(e) {
        return handleFilterCoursePopper(e, "Year 3");
      }
    }, "Year 3")))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DialogComponet__WEBPACK_IMPORTED_MODULE_23__["default"], {
    title: "Add New Course",
    openDialog: openAddCourseDialog,
    closeDialog: handleAddCourseDialogClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", (_React$createElement = {
    noValidate: true,
    autoComplete: "off",
    className: "m-2"
  }, _defineProperty(_React$createElement, "className", classes.formWith), _defineProperty(_React$createElement, "onSubmit", handleSubmit), _React$createElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_30__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Select Program"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_26__["default"], {
    variant: "filled",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_32__["default"], {
    id: "demo-simple-select-filled-label",
    className: errors.programme && errors.programme.length > 0 ? "error" : ""
  }, "Programme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_31__["default"], {
    labelId: "demo-simple-select-filled-label",
    id: "demo-simple-select-filled",
    name: "programme",
    error: errors.programme && errors.programme.length > 0 && true,
    value: values.programme,
    onChange: handleChange,
    onBlur: handleBlur
  }, allPrograms.map(function (p) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      value: p.id,
      key: p.id.toString()
    }, p.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_25__["default"], {
    className: "error"
  }, errors.programme)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_30__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Enter Course Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_26__["default"], {
    fullWidth: true,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_24__["default"], {
    label: "Course Title",
    id: "course-title",
    variant: "filled",
    size: "small",
    name: "courseTitle",
    error: errors.courseTitle && errors.courseTitle.length > 0 && true,
    helperText: errors.courseTitle && errors.courseTitle.length > 0 && errors.courseTitle,
    value: values.courseTitle,
    onChange: handleChange,
    onBlur: handleBlur
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_30__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Enter Course Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_26__["default"], {
    fullWidth: true,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_24__["default"], {
    label: "Course Code",
    id: "courses-code",
    variant: "filled",
    size: "small",
    name: "courseCode",
    error: errors.courseCode && errors.courseCode.length > 0 && true,
    helperText: errors.courseCode && errors.courseCode.length > 0 && errors.courseCode,
    value: values.courseCode,
    onChange: handleChange,
    onBlur: handleBlur
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_30__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Select Semester"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_28__["default"], {
    row: true,
    "aria-label": "semester",
    name: "semester",
    onChange: handleChange,
    onBlur: handleBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_29__["default"], {
    label: "First Semester",
    value: "First Semester",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_27__["default"], {
      color: "primary",
      checked: values.semester === "First Semester" ? true : false
    }),
    labelPlacement: "end"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_29__["default"], {
    label: "Second Semester",
    value: "Second Semester",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_27__["default"], {
      color: "primary",
      checked: values.semester === "Second Semester" ? true : false
    }),
    labelPlacement: "end"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_25__["default"], {
    className: "error"
  }, errors.semester && errors.semester.length > 0 && errors.semester), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_30__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Select Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_28__["default"], {
    row: true,
    "aria-label": "year",
    name: "year",
    onChange: handleChange,
    onBlur: handleBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_29__["default"], {
    label: "Year 1",
    value: "Year 1",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_27__["default"], {
      color: "primary",
      checked: values.year === "Year 1" ? true : false
    }),
    labelPlacement: "end"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_29__["default"], {
    label: "Year 2",
    value: "Year 2",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_27__["default"], {
      color: "primary",
      checked: values.year === "Year 2" ? true : false
    }),
    labelPlacement: "end"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_29__["default"], {
    label: "Year 3",
    value: "Year 3",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_27__["default"], {
      color: "primary",
      checked: values.year === "Year 3" ? true : false
    }),
    labelPlacement: "end"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_25__["default"], {
    className: "error"
  }, errors.year && errors.year.length > 0 && errors.year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_30__["default"], {
    component: "legend",
    className: "my-3"
  }, "Required fields (*)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-3 submit-btn-wrapper btn-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_35__["default"], {
    variant: "outlined",
    color: "primary",
    type: "submit",
    disabled: isSubmitting
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_36__["Puff"], {
    size: 20,
    color: "#3f51b5",
    visible: isSubmitting
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, isSubmitting ? "Submitting..." : "Submit"))))));
};

EnhancedTableToolbar.propTypes = {
  numSelected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    }
  };
});

var AllCoursesView = function AllCoursesView(_ref2) {
  var allPrograms = _ref2.allPrograms,
      courses = _ref2.courses,
      getCourseToUpdate = _ref2.getCourseToUpdate,
      deleteCourse = _ref2.deleteCourse,
      handleFilterCourse = _ref2.handleFilterCourse;
  var classes = useStyles();

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("desc"),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      order = _React$useState10[0],
      setOrder = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("id"),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      orderBy = _React$useState12[0],
      setOrderBy = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      selected = _React$useState14[0],
      setSelected = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      page = _React$useState16[0],
      setPage = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(5),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      rowsPerPage = _React$useState18[0],
      setRowsPerPage = _React$useState18[1];

  var rows = courses.map(function (c) {
    return createData(c.id, c.programme_id, c.title, c.code, c.semester, c.year, c.programme);
  });

  var handleRequestSort = function handleRequestSort(event, property) {
    var isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  var handleSelectAllClick = function handleSelectAllClick(event) {
    if (event.target.checked) {
      var newSelecteds = rows.map(function (n) {
        return n.id;
      });
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  var clearSelected = function clearSelected() {
    setSelected([]);
  };

  var handleClick = function handleClick(event, id) {
    var selectedIndex = selected.indexOf(id);
    var newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  var isSelected = function isSelected(name) {
    return selected.indexOf(name) !== -1;
  };

  var emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EnhancedTableToolbar, {
    numSelected: selected.length,
    selected: selected,
    clearSelected: clearSelected,
    allPrograms: allPrograms,
    handleFilterCourse: handleFilterCourse
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.table,
    "aria-labelledby": "tableTitle",
    size: "small",
    "aria-label": "enhanced table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EnhancedTableHead, {
    classes: classes,
    numSelected: selected.length,
    order: order,
    orderBy: orderBy,
    onSelectAllClick: handleSelectAllClick,
    onRequestSort: handleRequestSort,
    rowCount: rows.length
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__["default"], null, stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {
    var isItemSelected = isSelected(row.id);
    var labelId = "enhanced-table-checkbox-".concat(index);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      hover: true,
      role: "checkbox",
      "aria-checked": isItemSelected,
      tabIndex: -1,
      key: row.id,
      selected: isItemSelected
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      padding: "checkbox",
      onClick: function onClick(event) {
        return handleClick(event, row.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
      checked: isItemSelected,
      inputProps: {
        "aria-labelledby": labelId
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "th",
      id: labelId,
      scope: "row",
      padding: "none"
    }, row.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], null, row.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], null, row.code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], null, row.semester), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], null, row.year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], null, row.programme), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      "aria-label": "edit",
      color: "primary",
      onClick: function onClick() {
        return getCourseToUpdate(row);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_19___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      "aria-label": "delete",
      color: "secondary",
      onClick: function onClick() {
        return deleteCourse(row.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_21___default.a, null)))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_10__["default"], {
    rowsPerPageOptions: [5, 10, 25],
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AllCoursesView);

/***/ })

}]);