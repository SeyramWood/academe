(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/js/Pages/backend/ManageProgrammes.js":
/*!********************************************************!*\
  !*** ./resources/js/Pages/backend/ManageProgrammes.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/Dashboard */ "./resources/js/layouts/Dashboard.js");
/* harmony import */ var _components_AllProgrammesView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AllProgrammesView */ "./resources/js/components/AllProgrammesView.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _components_form_useFormValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/form/useFormValidation */ "./resources/js/components/form/useFormValidation.js");
/* harmony import */ var _components_DialogComponet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/DialogComponet */ "./resources/js/components/DialogComponet.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Spinner */ "./resources/js/components/Spinner.js");
/* harmony import */ var _components_SnackbarAlert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/SnackbarAlert */ "./resources/js/components/SnackbarAlert.js");
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

var ManageProgrammes = function ManageProgrammes(_ref) {
  var _React$createElement;

  var programmes = _ref.programmes;
  var classes = useToolbarStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      programmeId = _React$useState2[0],
      setProgrammeId = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openUpdateProgrammeDialog = _React$useState4[0],
      setUpdateProgrammeDialog = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      openAlert = _React$useState6[0],
      setOpenAlert = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      alertMessage = _React$useState8[0],
      setAlertMessage = _React$useState8[1];

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AllProgrammesView__WEBPACK_IMPORTED_MODULE_3__["default"], {
    programmes: programmes,
    getProgrammeToUpdate: getProgrammeToUpdate,
    deleteProgramme: deleteProgramme
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SnackbarAlert__WEBPACK_IMPORTED_MODULE_12__["default"], {
    message: alertMessage,
    openAlert: openAlert
  }), ";", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_DialogComponet__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Update Programme",
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
    label: "Programme",
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

ManageProgrammes.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ManageProgrammes);

/***/ }),

/***/ "./resources/js/components/AllProgrammesView.js":
/*!******************************************************!*\
  !*** ./resources/js/components/AllProgrammesView.js ***!
  \******************************************************/
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
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Spinner */ "./resources/js/components/Spinner.js");
/* harmony import */ var _form_useFormValidation__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./form/useFormValidation */ "./resources/js/components/form/useFormValidation.js");
/* harmony import */ var _SnackbarAlert__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SnackbarAlert */ "./resources/js/components/SnackbarAlert.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

































function createData(id, name, year_1, year_2, year_3) {
  return {
    id: id,
    name: name,
    year_1: year_1,
    year_2: year_2,
    year_3: year_3
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
  id: "name",
  numeric: false,
  disablePadding: false,
  label: "Name"
}, {
  id: "year1",
  numeric: false,
  disablePadding: false,
  label: "Courses (Year 1)"
}, {
  id: "year2",
  numeric: false,
  disablePadding: false,
  label: "Courses (Year 2)"
}, {
  id: "year3",
  numeric: false,
  disablePadding: false,
  label: "Course (Year 3)"
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
var programmeState = {
  STATE: {
    programme: ""
  },
  RULES: {
    programme: "required|string"
  }
};

var EnhancedTableToolbar = function EnhancedTableToolbar(props) {
  var _React$createElement;

  var classes = useToolbarStyles();
  var numSelected = props.numSelected,
      selected = props.selected,
      clearSelected = props.clearSelected;

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
      openAddProgramDialog = _React$useState6[0],
      setAddProgramDialog = _React$useState6[1];

  var _useFormValidation = Object(_form_useFormValidation__WEBPACK_IMPORTED_MODULE_29__["default"])(programmeState.STATE, programmeState.RULES, addNewProgramme),
      values = _useFormValidation.state,
      handleChange = _useFormValidation.handleChange,
      handleSubmit = _useFormValidation.handleSubmit,
      isSubmitting = _useFormValidation.isSubmitting,
      errors = _useFormValidation.errors,
      handleBlur = _useFormValidation.handleBlur,
      clearValues = _useFormValidation.clearValues,
      setServerErrors = _useFormValidation.setServerErrors;

  var handleAddProgramDialogOpen = function handleAddProgramDialogOpen() {
    setAddProgramDialog(true);
  };

  var handleAddProgramDialogClose = function handleAddProgramDialogClose() {
    setAddProgramDialog(false);
    clearValues();
    setServerErrors();
  };

  function addNewProgramme() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].post("/dashboard/create-programme", values, {
      errorBag: "createProgramme",
      onSuccess: function onSuccess(page) {
        clearValues();
        setAlertMessage("Programme added successfully");
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SnackbarAlert__WEBPACK_IMPORTED_MODULE_30__["default"], {
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
  }, "All Programmes")), numSelected > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: "Delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-label": "delete",
    onClick: deleteCourses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_21___default.a, null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: "Add new program"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-label": "add new program",
    color: "primary",
    onClick: handleAddProgramDialogOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_20___default.a, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DialogComponet__WEBPACK_IMPORTED_MODULE_23__["default"], {
    title: "Add New Program",
    btnText: "Add",
    openDialog: openAddProgramDialog,
    closeDialog: handleAddProgramDialogClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", (_React$createElement = {
    noValidate: true,
    autoComplete: "off",
    className: "m-2"
  }, _defineProperty(_React$createElement, "noValidate", true), _defineProperty(_React$createElement, "className", classes.formWith), _defineProperty(_React$createElement, "onSubmit", handleSubmit), _React$createElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_25__["default"], {
    component: "legend",
    className: "my-3",
    required: true
  }, "Enter Programme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_27__["default"], {
    fullWidth: true,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_24__["default"], {
    label: "Programme",
    id: "course-title",
    variant: "filled",
    size: "small",
    name: "programme",
    error: errors.programme && errors.programme.length > 0 && true,
    helperText: errors.programme && errors.programme.length > 0 && errors.programme,
    value: values.programme,
    onChange: handleChange,
    onBlur: handleBlur
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_25__["default"], {
    component: "legend",
    className: "my-3"
  }, "Required fields (*)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-3 submit-btn-wrapper btn-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_26__["default"], {
    variant: "outlined",
    color: "primary",
    type: "submit",
    disabled: isSubmitting
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_28__["Puff"], {
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

var AllProgramsView = function AllProgramsView(_ref) {
  var programmes = _ref.programmes,
      getProgrammeToUpdate = _ref.getProgrammeToUpdate,
      deleteProgramme = _ref.deleteProgramme;
  var classes = useStyles();
  var rows = programmes.map(function (p) {
    return createData(p.id, p.name, p.year_1, p.year_2, p.year_3);
  });

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("desc"),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      order = _React$useState8[0],
      setOrder = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("id"),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      orderBy = _React$useState10[0],
      setOrderBy = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      selected = _React$useState12[0],
      setSelected = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      page = _React$useState14[0],
      setPage = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(5),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      rowsPerPage = _React$useState16[0],
      setRowsPerPage = _React$useState16[1];

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
    clearSelected: clearSelected
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
    }, row.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], null, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], null, row.year_1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], null, row.year_2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], null, row.year_3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      "aria-label": "edit",
      color: "primary",
      onClick: function onClick() {
        return getProgrammeToUpdate({
          id: row.id,
          programme: row.name
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_19___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      "aria-label": "delete",
      color: "secondary",
      onClick: function onClick() {
        return deleteProgramme(row.id);
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

/* harmony default export */ __webpack_exports__["default"] = (AllProgramsView);

/***/ })

}]);