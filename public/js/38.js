(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./resources/js/Pages/student/Lectures.js":
/*!************************************************!*\
  !*** ./resources/js/Pages/student/Lectures.js ***!
  \************************************************/
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
/* harmony import */ var _components_student_LecturesTreeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/student/LecturesTreeView */ "./resources/js/components/student/LecturesTreeView.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
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
    }
  };
});

var Lectures = function Lectures(_ref) {
  var courses = _ref.courses,
      programmes = _ref.programmes,
      lecturesPerSemester = _ref.lecturesPerSemester,
      semesterCourses = _ref.semesterCourses;
  var classes = useStyles();
  var authUser = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])().props.authUser;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(courses),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      allCourses = _React$useState2[0],
      setAllCourse = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(programmes),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      allProgrammes = _React$useState4[0],
      setAllProgrammes = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({}),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      lectureDetails = _React$useState6[0],
      setLectureDetails = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      displayStatus = _React$useState8[0],
      setDisplayStatus = _React$useState8[1];

  var displayLectureDetails = function displayLectureDetails(id) {
    return setLectureDetails(function () {
      return lecturesPerSemester.find(function (c) {
        return c.id === id;
      });
    });
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    Object.keys(lectureDetails).length > 0 ? setDisplayStatus(true) : setDisplayStatus(false);
  }, [lectureDetails, setDisplayStatus]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "programs-details"
  }, displayStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "programs-details__lists"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    md: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "programs-details__title secondary"
  }, "LECTURE DETAILS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.demo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dense: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "programs-details__title black"
  }, "Lecture"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "/student/watch-video/".concat(lectureDetails.slug),
    className: "linkHover"
  }, lectureDetails.title)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dense: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "programs-details__title black"
  }, "Course"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, lectureDetails.course))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dense: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "programs-details__title black"
  }, "Semester"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, lectureDetails.semester))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dense: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "programs-details__title black"
  }, "Year"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, lectureDetails.year))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    md: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "programs-details__title secondary"
  }, "LECTURER DETAILS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    direction: "row",
    justify: "flex-start",
    alignItems: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    alt: lectureDetails.surname || "",
    src: "/storage/avatar/lecturers/".concat(lectureDetails.avatar),
    className: classes.avaterSmall
  }, "F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "programs-details__title black"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "".concat(lectureDetails.surname || "N/A", " ").concat(lectureDetails.middle_name || "", " ").concat(lectureDetails.other_name || "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "programs-details__title black"
  }, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "".concat(lectureDetails.phone || "N/A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "programs-details__title black"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "".concat(lectureDetails.email || "N/A"))))))), !displayStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.displayCourse
  }, "No lecture is selected!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "programs-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "programs-details__title mb-2 secondary"
  }, "".concat(authUser.year, " - ").concat(authUser.semester)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_student_LecturesTreeView__WEBPACK_IMPORTED_MODULE_4__["default"], {
    semesterCourses: semesterCourses,
    lecturesPerSemester: lecturesPerSemester,
    displayLectureDetails: displayLectureDetails
  })))))));
};

Lectures.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layouts_StudentDashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Lectures);

/***/ }),

/***/ "./resources/js/components/student/LecturesTreeView.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/student/LecturesTreeView.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LecturesTreeView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/TreeView */ "./node_modules/@material-ui/lab/esm/TreeView/index.js");
/* harmony import */ var _material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/TreeItem */ "./node_modules/@material-ui/lab/esm/TreeItem/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var react_spring_web_cjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spring/web.cjs */ "./node_modules/react-spring/web.cjs.js");
/* harmony import */ var react_spring_web_cjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spring_web_cjs__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








 // web.cjs is required for IE 11 support

function MinusSquare(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    fontSize: "inherit",
    style: {
      width: 14,
      height: 14
    }
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"
  }));
}

function PlusSquare(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    fontSize: "inherit",
    style: {
      width: 14,
      height: 14
    }
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z"
  }));
}

function CloseSquare(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    className: "close",
    fontSize: "inherit",
    style: {
      width: 14,
      height: 14
    }
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z"
  }));
}

function TransitionComponent(props) {
  var style = Object(react_spring_web_cjs__WEBPACK_IMPORTED_MODULE_7__["useSpring"])({
    from: {
      opacity: 0,
      transform: "translate3d(20px,0,0)"
    },
    to: {
      opacity: props["in"] ? 1 : 0,
      transform: "translate3d(".concat(props["in"] ? 0 : 20, "px,0,0)")
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring_web_cjs__WEBPACK_IMPORTED_MODULE_7__["animated"].div, {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_6__["default"], props));
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  "in": prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
var StyledTreeItem = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(function (theme) {
  return {
    iconContainer: {
      "& .close": {
        opacity: 0.3
      }
    },
    group: {
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: "1px dashed ".concat(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["fade"])(theme.palette.text.primary, 0.4))
    }
  };
})(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    TransitionComponent: TransitionComponent
  }));
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    height: "auto",
    flexGrow: 1,
    maxWidth: "100%"
  }
});
function LecturesTreeView(_ref) {
  var semesterCourses = _ref.semesterCourses,
      lecturesPerSemester = _ref.lecturesPerSemester,
      displayLectureDetails = _ref.displayLectureDetails;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.root,
    defaultExpanded: ["1"],
    defaultCollapseIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MinusSquare, null),
    defaultExpandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlusSquare, null),
    defaultEndIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CloseSquare, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTreeItem, {
    nodeId: "View Lectures",
    label: "View Lectures"
  }, semesterCourses.map(function (c) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTreeItem, {
      nodeId: c.title,
      label: c.title,
      key: c.title
    }, lecturesPerSemester.map(function (l) {
      return c.id === l.course_id && l.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTreeItem, {
        nodeId: l.title,
        label: l.title,
        key: l.title,
        onClick: function onClick() {
          return displayLectureDetails(l.id);
        }
      });
    }));
  })));
}

/***/ })

}]);