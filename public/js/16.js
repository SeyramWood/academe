(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ })

}]);