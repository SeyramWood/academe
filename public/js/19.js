(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./resources/js/Pages/backend/ManageLectures.js":
/*!******************************************************!*\
  !*** ./resources/js/Pages/backend/ManageLectures.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/Dashboard */ "./resources/js/layouts/Dashboard.js");
/* harmony import */ var _components_AllLecturesView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AllLecturesView */ "./resources/js/components/AllLecturesView.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _components_form_useFormValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/form/useFormValidation */ "./resources/js/components/form/useFormValidation.js");
/* harmony import */ var _components_DialogComponet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/DialogComponet */ "./resources/js/components/DialogComponet.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Spinner */ "./resources/js/components/Spinner.js");
/* harmony import */ var _components_SnackbarAlert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/SnackbarAlert */ "./resources/js/components/SnackbarAlert.js");
/* harmony import */ var _components_UploadFile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/UploadFile */ "./resources/js/components/UploadFile.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var programmeState = {
  STATE: {
    programme: ""
  },
  RULES: {
    programme: "required|string"
  }
};
var useToolbarStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    formWith: {
      width: "30rem"
    }
  };
});

var ManageLectures = function ManageLectures(_ref) {
  var _React$createElement;

  var lectures = _ref.lectures,
      courses = _ref.courses;
  var classes = useToolbarStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openUpdateProgrammeDialog = _React$useState2[0],
      setUpdateProgrammeDialog = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openAlert = _React$useState4[0],
      setOpenAlert = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      alertMessage = _React$useState6[0],
      setAlertMessage = _React$useState6[1];

  var _useFormValidation = Object(_components_form_useFormValidation__WEBPACK_IMPORTED_MODULE_9__["default"])(programmeState.STATE, programmeState.RULES, updateProgramme),
      values = _useFormValidation.state,
      handleChange = _useFormValidation.handleChange,
      handleSubmit = _useFormValidation.handleSubmit,
      isSubmitting = _useFormValidation.isSubmitting,
      errors = _useFormValidation.errors,
      handleBlur = _useFormValidation.handleBlur,
      clearValues = _useFormValidation.clearValues,
      setValues = _useFormValidation.setValues,
      setServerErrors = _useFormValidation.setServerErrors;

  var getProgrammeToUpdate = function getProgrammeToUpdate(data) {
    setValues({
      id: data.id,
      programme: data.programme
    });
    setUpdateProgrammeDialog(true);
  };

  var handleUpdateProgramDialogClose = function handleUpdateProgramDialogClose() {
    setUpdateProgrammeDialog(false);
    clearValues();
    setServerErrors();
  };

  function updateProgramme() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].put("/dashboard/update-programme", values, {
      errorBag: "updateProgramme",
      onSuccess: function onSuccess(page) {
        setUpdateProgrammeDialog(false);
        clearValues();
        setAlertMessage("Programme updated successfully");
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

  var deleteProgramme = function deleteProgramme(id) {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"]["delete"]("/dashboard/delete-programme/".concat(id), {
      onSuccess: function onSuccess(page) {
        setAlertMessage("Programme deleted successfully");
        setOpenAlert(true);
        setTimeout(function () {
          setOpenAlert(false);
        }, 5000);
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AllLecturesView__WEBPACK_IMPORTED_MODULE_3__["default"], {
    lectures: lectures,
    courses: courses,
    getProgrammeToUpdate: getProgrammeToUpdate,
    deleteProgramme: deleteProgramme
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SnackbarAlert__WEBPACK_IMPORTED_MODULE_12__["default"], {
    message: alertMessage,
    openAlert: openAlert
  }), ";", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_DialogComponet__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Add New Lecture",
    btnText: "Save",
    openDialog: openUpdateProgrammeDialog,
    closeDialog: handleUpdateProgramDialogClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", (_React$createElement = {
    noValidate: true,
    autoComplete: "off",
    className: "m-2"
  }, _defineProperty(_React$createElement, "noValidate", true), _defineProperty(_React$createElement, "className", classes.formWith), _defineProperty(_React$createElement, "onSubmit", handleSubmit), _React$createElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Enter Programme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullWidth: true,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Title",
    variant: "filled",
    size: "small",
    name: "programme",
    error: errors.programme && errors.programme.length > 0 && true,
    helperText: errors.programme && errors.programme.length > 0 && errors.programme,
    value: values.programme,
    onChange: handleChange,
    onBlur: handleBlur
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "legend",
    className: "my-3"
  }, "Required fields (*)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-3 submit-btn-wrapper btn-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "outlined",
    color: "primary",
    type: "submit",
    disabled: isSubmitting
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_11__["Puff"], {
    size: 20,
    color: "#3f51b5",
    visible: isSubmitting
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, isSubmitting ? "Submitting..." : "Submit"))))));
};

ManageLectures.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageLectures);

/***/ }),

/***/ "./resources/js/components/AllLecturesView.js":
/*!****************************************************!*\
  !*** ./resources/js/components/AllLecturesView.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "./node_modules/@material-ui/core/esm/TableSortLabel/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/EditOutlined */ "./node_modules/@material-ui/icons/EditOutlined.js");
/* harmony import */ var _material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/AddOutlined */ "./node_modules/@material-ui/icons/AddOutlined.js");
/* harmony import */ var _material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _DialogComponet__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./DialogComponet */ "./resources/js/components/DialogComponet.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Spinner */ "./resources/js/components/Spinner.js");
/* harmony import */ var _form_useFormValidation__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./form/useFormValidation */ "./resources/js/components/form/useFormValidation.js");
/* harmony import */ var _SnackbarAlert__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./SnackbarAlert */ "./resources/js/components/SnackbarAlert.js");
/* harmony import */ var _UploadFile__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./UploadFile */ "./resources/js/components/UploadFile.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_icons_CloudUploadOutlined__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @material-ui/icons/CloudUploadOutlined */ "./node_modules/@material-ui/icons/CloudUploadOutlined.js");
/* harmony import */ var _material_ui_icons_CloudUploadOutlined__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudUploadOutlined__WEBPACK_IMPORTED_MODULE_39__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










































function createData(id, title, documents, assignment_count, comment_count, course, slug) {
  return {
    id: id,
    title: title,
    documents: documents,
    assignment_count: assignment_count,
    comment_count: comment_count,
    course: course,
    slug: slug
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
  id: "title",
  numeric: false,
  disablePadding: false,
  label: "Title"
}, {
  id: "documents",
  numeric: false,
  disablePadding: false,
  label: "Documents"
}, {
  id: "assignments",
  numeric: false,
  disablePadding: false,
  label: "Assignments"
}, {
  id: "comments",
  numeric: false,
  disablePadding: false,
  label: "Comments"
}, {
  id: "course",
  numeric: false,
  disablePadding: false,
  label: "Course"
}, {
  id: "action",
  numeric: false,
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
    padding: "checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_19__["default"], {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: rowCount > 0 && numSelected === rowCount,
    onChange: onSelectAllClick,
    inputProps: {
      "aria-label": "select all desserts"
    }
  })), headCells.map(function (headCell) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: headCell.id,
      align: headCell.numeric ? "right" : "left",
      padding: headCell.disablePadding ? "none" : "default",
      sortDirection: orderBy === headCell.id ? order : false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_15__["default"], {
      active: orderBy === headCell.id,
      direction: orderBy === headCell.id ? order : "asc",
      onClick: createSortHandler(headCell.id)
    }, headCell.label, orderBy === headCell.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: classes.visuallyHidden
    }, order === "desc" ? "sorted descending" : "sorted ascending") : null));
  })));
}

EnhancedTableHead.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  numSelected: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
  onRequestSort: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  onSelectAllClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  order: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(["asc", "desc"]).isRequired,
  orderBy: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  rowCount: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired
};
var useToolbarStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === "light" ? {
      color: theme.palette.secondary.main,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["lighten"])(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    title: {
      flex: "1 1 100%"
    },
    formWith: {
      width: "30rem"
    },
    width: {
      width: "100%"
    },
    input: {
      display: "none"
    }
  };
});
var lecture = {
  STATE: {
    title: "",
    course: "",
    documents: []
  },
  RULES: {
    title: "required|string",
    course: "required|string"
  }
};

var EnhancedTableToolbar = function EnhancedTableToolbar(props) {
  var _React$createElement;

  var classes = useToolbarStyles();
  var numSelected = props.numSelected,
      selected = props.selected,
      clearSelected = props.clearSelected,
      allCourses = props.allCourses;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openAlert = _React$useState2[0],
      setOpenAlert = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      alertMessage = _React$useState4[0],
      setAlertMessage = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isVideoUploading = _React$useState6[0],
      setIsVideoUploading = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      openAddLectureDialog = _React$useState8[0],
      setAddLectureDialog = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      video = _React$useState10[0],
      setVideo = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      videoIsRequired = _React$useState12[0],
      setVideoIsRequired = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      documentsError = _React$useState14[0],
      setDocumentsError = _React$useState14[1];

  var _useFormValidation = Object(_form_useFormValidation__WEBPACK_IMPORTED_MODULE_32__["default"])(lecture.STATE, lecture.RULES, addNewLecture),
      values = _useFormValidation.state,
      handleChange = _useFormValidation.handleChange,
      handleBlur = _useFormValidation.handleBlur,
      handleSubmit = _useFormValidation.handleSubmit,
      isSubmitting = _useFormValidation.isSubmitting,
      updateIsSubmitting = _useFormValidation.updateIsSubmitting,
      errors = _useFormValidation.errors,
      clearValues = _useFormValidation.clearValues,
      setServerErrors = _useFormValidation.setServerErrors;

  var handleAddLectureDialogOpen = function handleAddLectureDialogOpen() {
    setAddLectureDialog(true);
  };

  var handleAddLectureDialogClose = function handleAddLectureDialogClose() {
    setAddLectureDialog(false);
    clearValues();
    setServerErrors();
    setVideoIsRequired("");
    setDocumentsError("");
  };

  var lectureFormData = function lectureFormData() {
    var formData = new FormData();

    if (values.documents.length > 0) {
      formData.append("title", values.title);
      formData.append("course", values.course);
      formData.append("video", video);
      values.documents.forEach(function (e, i) {
        formData.append("documents[".concat(i, "]"), e);
      });
    } else {
      formData.append("title", values.title);
      formData.append("course", values.course);
      formData.append("video", video);
    }

    return formData;
  };

  function addNewLecture() {
    setVideoIsRequired("");
    setDocumentsError("");
    var lecture = lectureFormData(values);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].post("/dashboard/create-lecture", lecture, {
      errorBag: "createLecture",
      onSuccess: function onSuccess(page) {
        updateIsSubmitting(false);
        clearValues();
        setAlertMessage("Lecture created successfully");
        setOpenAlert(true);
        setTimeout(function () {
          setOpenAlert(false);
        }, 5000);
      },
      onError: function onError(error) {
        error.documents && setDocumentsError(error.documents);
        error.video && setVideoIsRequired(error.video);
        error.title && setServerErrors({
          title: error.title
        });
        error.course && setServerErrors({
          course: error.course
        });
      }
    });
  }

  var deleteCourses = function deleteCourses() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"]["delete"]("/dashboard/delete-programmes/".concat(selected), {
      onSuccess: function onSuccess(page) {
        clearSelected();
        setAlertMessage("Programmes deleted successfully");
        setOpenAlert(true);
        setTimeout(function () {
          setOpenAlert(false);
        }, 5000);
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SnackbarAlert__WEBPACK_IMPORTED_MODULE_33__["default"], {
    message: alertMessage,
    openAlert: openAlert
  }), ";", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, _defineProperty({}, classes.highlight, numSelected > 0))
  }, numSelected > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classes.title,
    color: "inherit",
    variant: "subtitle1",
    component: "div"
  }, numSelected, " selected") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classes.title,
    variant: "h6",
    id: "tableTitle",
    component: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "secondary"
  }, "All Lectures")), numSelected > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], {
    title: "Delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__["default"], {
    "aria-label": "delete",
    onClick: deleteCourses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24___default.a, null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], {
    title: "Upload new lecture"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__["default"], {
    "aria-label": "Upload new lecture",
    color: "primary",
    onClick: handleAddLectureDialogOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_23___default.a, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DialogComponet__WEBPACK_IMPORTED_MODULE_26__["default"], {
    title: "Add New Lecture",
    btnText: "Add",
    openDialog: openAddLectureDialog,
    closeDialog: handleAddLectureDialogClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", (_React$createElement = {
    noValidate: true,
    autoComplete: "off",
    className: "m-2"
  }, _defineProperty(_React$createElement, "noValidate", true), _defineProperty(_React$createElement, "className", classes.formWith), _defineProperty(_React$createElement, "onSubmit", handleSubmit), _React$createElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_28__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Lecture Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_30__["default"], {
    fullWidth: true,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_27__["default"], {
    label: "Enter title",
    id: "lecture-title",
    variant: "filled",
    size: "small",
    name: "title",
    value: values.title,
    error: errors.title && errors.title.length > 0 && true,
    helperText: errors.title || "",
    onChange: handleChange,
    onBlur: handleBlur
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_28__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Select Course"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_30__["default"], {
    variant: "filled",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_36__["default"], {
    id: "course-label",
    className: errors.course && errors.course.length > 0 ? "error" : ""
  }, "Select Course"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_35__["default"], {
    labelId: "course-label",
    id: "course-select",
    name: "course",
    error: errors.course && errors.course.length > 0 && true,
    value: values.course,
    onChange: handleChange,
    onBlur: handleBlur
  }, allCourses.map(function (c) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_37__["default"], {
      value: c.id,
      key: c.id.toString()
    }, c.title);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_38__["default"], {
    className: "error"
  }, errors.course)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_28__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Select Video"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UploadFile__WEBPACK_IMPORTED_MODULE_34__["default"], {
    btnText: "upload video",
    fileUploading: setIsVideoUploading,
    getFileName: setVideo,
    resetFile: openAddLectureDialog,
    location: "lectures"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_38__["default"], {
    className: "error"
  }, videoIsRequired), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_28__["default"], {
    component: "legend",
    className: "my-3"
  }, "Documents"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_30__["default"], {
    fullWidth: true,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    accept: ".pdf",
    className: classes.input,
    id: "attach-documents",
    multiple: true,
    type: "file",
    name: "documents",
    onChange: handleChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "attach-documents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_29__["default"], {
    variant: "contained",
    color: "primary",
    component: "span",
    className: "upload-file-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_CloudUploadOutlined__WEBPACK_IMPORTED_MODULE_39___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "upload-file-btn-text"
  }, "Add cocuments")), values.documents && values.documents.map(function (e) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "upload-file-name",
      key: e.name
    }, e.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_38__["default"], {
    className: "error"
  }, documentsError)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_28__["default"], {
    component: "legend",
    className: "my-3"
  }, "Required fields (*)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-3 submit-btn-wrapper btn-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_29__["default"], {
    variant: "outlined",
    color: "primary",
    type: "submit",
    disabled: isSubmitting || isVideoUploading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_31__["Puff"], {
    size: 20,
    color: "#3f51b5",
    visible: isSubmitting
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, isSubmitting ? "Submitting..." : "Submit"))))));
};

EnhancedTableToolbar.propTypes = {
  numSelected: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
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

var AllLecturesView = function AllLecturesView(_ref) {
  var lectures = _ref.lectures,
      courses = _ref.courses,
      getProgrammeToUpdate = _ref.getProgrammeToUpdate,
      deleteProgramme = _ref.deleteProgramme;
  var classes = useStyles();
  var rows = lectures.map(function (l) {
    return createData(l.id, l.title, l.documents ? JSON.parse(l.documents).length : 0, l.assignment_count, l.comment_count, l.course, l.slug);
  });

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("desc"),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      order = _React$useState16[0],
      setOrder = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("id"),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      orderBy = _React$useState18[0],
      setOrderBy = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      selected = _React$useState20[0],
      setSelected = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      page = _React$useState22[0],
      setPage = _React$useState22[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(5),
      _React$useState24 = _slicedToArray(_React$useState23, 2),
      rowsPerPage = _React$useState24[0],
      setRowsPerPage = _React$useState24[1];

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EnhancedTableToolbar, {
    numSelected: selected.length,
    selected: selected,
    clearSelected: clearSelected,
    allCourses: courses
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], null, stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {
    var isItemSelected = isSelected(row.id);
    var labelId = "enhanced-table-checkbox-".concat(index);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
      hover: true,
      role: "checkbox",
      "aria-checked": isItemSelected,
      tabIndex: -1,
      key: row.id,
      selected: isItemSelected
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      padding: "checkbox",
      onClick: function onClick(event) {
        return handleClick(event, row.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_19__["default"], {
      checked: isItemSelected,
      inputProps: {
        "aria-labelledby": labelId
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      component: "th",
      id: labelId,
      scope: "row",
      padding: "none"
    }, row.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/watch-video/".concat(row.slug)
    }, row.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], null, row.documents), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], null, row.assignment_count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], null, row.comment_count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], null, row.course), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__["default"], {
      "aria-label": "edit",
      color: "primary",
      onClick: function onClick() {
        return getProgrammeToUpdate({
          id: row.id,
          lecture: row.title
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_22___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__["default"], {
      "aria-label": "delete",
      color: "secondary",
      onClick: function onClick() {
        return deleteProgramme(row.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24___default.a, null)))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_13__["default"], {
    rowsPerPageOptions: [5, 10, 25],
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AllLecturesView);

/***/ }),

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

/***/ "./resources/js/components/UploadFile.js":
/*!***********************************************!*\
  !*** ./resources/js/components/UploadFile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_CloudUploadOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/CloudUploadOutlined */ "./node_modules/@material-ui/icons/CloudUploadOutlined.js");
/* harmony import */ var _material_ui_icons_CloudUploadOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudUploadOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    width: {
      width: "100%"
    },
    input: {
      display: "none"
    }
  };
});

function chunksReducer(state, action) {
  switch (action.type) {
    case "appendChunks":
      return [].concat(_toConsumableArray(state), [action.blob]);

    case "shiftChunks":
      state.shift();
      return state;

    case "clearChunks":
      return [];

    default:
      return state;
  }
}

var UploadFile = function UploadFile(_ref) {
  var _ref$btnText = _ref.btnText,
      btnText = _ref$btnText === void 0 ? "upload" : _ref$btnText,
      fileUploading = _ref.fileUploading,
      getFileName = _ref.getFileName,
      resetFile = _ref.resetFile,
      _ref$location = _ref.location,
      location = _ref$location === void 0 ? "" : _ref$location;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(undefined),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      file = _React$useState2[0],
      setFile = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      chunksCounter = _React$useState4[0],
      setChunksCounter = _React$useState4[1];

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_1___default.a.useReducer(chunksReducer, []),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      chunks = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      chunkSize = _React$useState6[0],
      setChunkSize = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      uploaded = _React$useState8[0],
      setUploaded = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      fileProgress = _React$useState10[0],
      setFileProgress = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      isUploading = _React$useState12[0],
      setIsUploading = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      fileExistError = _React$useState14[0],
      setFileExistError = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      fileLocation = _React$useState16[0],
      setFileLocation = _React$useState16[1];

  var initialRender = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(true);
  var config = {
    headers: {
      "Content-Type": "application/octet-stream"
    },
    onUploadProgress: function onUploadProgress(event) {
      if (parseInt(event.loaded / event.total * 100) === 100) {
        setUploaded(function (uploaded) {
          return uploaded += parseFloat(100 / chunkSize);
        });
      }
    }
  };

  var upload = function upload(data) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/dashboard/upload/".concat(fileLocation), data, config).then(function (res) {
      if (res.data.uploaded) {
        setIsUploading(false);
        dispatch({
          type: "clearChunks"
        });
        setChunksCounter(0);
      } else {
        if (!res.data.exist) {
          dispatch({
            type: "shiftChunks"
          });
          setChunksCounter(function (chunksCounter) {
            return chunksCounter - 1;
          });
        } else {
          setFileExistError("The video already uploaded!");
          setIsUploading(false);
          dispatch({
            type: "clearChunks"
          });
          setChunksCounter(0);
        }
      }
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var handleFileChange = function handleFileChange(e) {
    e.preventDefault();
    var _file = e.target.files[0];
    setFile(undefined);
    dispatch({
      type: "clearChunks"
    });
    setChunkSize(0);
    setUploaded(0);
    setFile(_file);
    getFileName(function () {
      return _file.name;
    });
    setFileLocation(location);
    setFileExistError("");
    var size = 1048576 * 3; // 3mb;

    setChunkSize(Math.ceil(_file.size / size));
    setChunksCounter(Math.ceil(_file.size / size));
    var chunkSize = Math.ceil(_file.size / size);

    for (var i = 0; i < chunkSize; i++) {
      var blob = _file.slice(i * size, Math.min(i * size + size, _file.size), _file.type);

      dispatch({
        type: "appendChunks",
        blob: blob
      });
    }

    setFileProgress(true);
    setIsUploading(true);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (chunksCounter > 0) {
        var formData = new FormData();
        formData.set("is_last", chunks.length === 1);
        formData.set("file", chunks[0], "".concat(file.name, ".part"));
        upload(formData);
      }
    }
  }, [chunksCounter]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    fileUploading(function () {
      return isUploading;
    });
  }, [isUploading]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (!resetFile) {
      if (file) {
        setFile(undefined);
        dispatch({
          type: "clearChunks"
        });
        setChunkSize(0);
        setUploaded(0);
        getFileName(function () {
          return "";
        });
        setFileExistError("");
        setFileProgress(false);
        setFileLocation();
      }
    }
  }, [resetFile]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: (classes.width, "upload-box")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    accept: "video/*",
    className: classes.input,
    id: "video-file",
    type: "file",
    required: true,
    disabled: isUploading,
    onChange: handleFileChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "video-file"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "contained",
    color: "primary",
    component: "span",
    disabled: isUploading,
    className: "upload-file-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_CloudUploadOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "upload-file-btn-text"
  }, btnText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "upload-file-name"
  }, file && "".concat(file.name.substr(0, 50), "..."))), fileProgress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    width: "100%",
    mr: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "determinate",
    value: uploaded
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_10__["default"], {
    minWidth: 35
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body2",
    color: "textSecondary"
  }, "".concat(Math.round(uploaded), "%")))), fileExistError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "upload-file-name error"
  }, fileExistError));
};

/* harmony default export */ __webpack_exports__["default"] = (UploadFile);

/***/ })

}]);