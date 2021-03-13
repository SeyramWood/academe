(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./resources/js/Pages/WatchVideo.js":
/*!******************************************!*\
  !*** ./resources/js/Pages/WatchVideo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Dashboard */ "./resources/js/layouts/Dashboard.js");
/* harmony import */ var _components_video_VideoDetials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/video/VideoDetials */ "./resources/js/components/video/VideoDetials.js");
/* harmony import */ var _components_video_PlayVideo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/video/PlayVideo */ "./resources/js/components/video/PlayVideo.js");
/* harmony import */ var _components_video_ListVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/video/ListVideo */ "./resources/js/components/video/ListVideo.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_useFetchData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/useFetchData */ "./resources/js/components/useFetchData.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    formWidth: {
      width: "100%"
    }
  };
});

var WatchVideo = function WatchVideo(_ref) {
  var lecture = _ref.lecture,
      relatedLectures = _ref.relatedLectures,
      courses = _ref.courses;
  var classes = useStyles();
  var authUser = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["usePage"])().props.authUser;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedCourse = _React$useState2[0],
      setSelectedCourse = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      courseDropdown = _React$useState4[0],
      setCourseDropdown = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(relatedLectures),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      relLectures = _React$useState6[0],
      setRelLectures = _React$useState6[1];

  var _useFetchData = Object(_components_useFetchData__WEBPACK_IMPORTED_MODULE_13__["default"])("/get-lectures-by-course/".concat(selectedCourse)),
      _useFetchData2 = _slicedToArray(_useFetchData, 2),
      filteredLectures = _useFetchData2[0],
      loading = _useFetchData2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!selectedCourse) {
      setRelLectures(relatedLectures);
    }
  }, [selectedCourse]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "video__page__layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "video__page__layout__right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "video__page__layout__right__player"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_video_PlayVideo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    lecture: lecture
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "video__page__layout__right__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_video_VideoDetials__WEBPACK_IMPORTED_MODULE_4__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "video__page__layout__left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "video__page__layout__left__header"
  }, "Related Videos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: classes.formWidth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.formWidth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "demo-controlled-open-select-label"
  }, "Filter videos by course"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_11__["default"], {
    labelId: "demo-controlled-open-select-label",
    id: "demo-controlled-open-select",
    open: courseDropdown,
    onClose: function onClose() {
      return setCourseDropdown(false);
    },
    onOpen: function onOpen() {
      return setCourseDropdown(true);
    },
    value: selectedCourse,
    onChange: function onChange(e) {
      return setSelectedCourse(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("em", null, "None")), courses.map(function (c) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      value: c.id,
      key: c.id.toString()
    }, c.title);
  })))), !selectedCourse && relLectures.map(function (l) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_video_ListVideo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      lecture: l,
      key: l.id.toString()
    });
  }), selectedCourse && !loading && filteredLectures && filteredLectures.data.map(function (l) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_video_ListVideo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      lecture: l,
      key: l.id.toString()
    });
  }), selectedCourse && !filteredLectures && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "No video found!"), selectedCourse && loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Loading..."))));
};

WatchVideo.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layouts_Dashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (WatchVideo);

/***/ })

}]);