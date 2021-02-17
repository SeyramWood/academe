(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/components/DrawerNavigations.js":
/*!******************************************************!*\
  !*** ./resources/js/components/DrawerNavigations.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/HomeOutlined */ "./node_modules/@material-ui/icons/HomeOutlined.js");
/* harmony import */ var _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ExitToAppOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ExitToAppOutlined */ "./node_modules/@material-ui/icons/ExitToAppOutlined.js");
/* harmony import */ var _material_ui_icons_ExitToAppOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToAppOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_MenuBookOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/MenuBookOutlined */ "./node_modules/@material-ui/icons/MenuBookOutlined.js");
/* harmony import */ var _material_ui_icons_MenuBookOutlined__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MenuBookOutlined__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_SchoolOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/SchoolOutlined */ "./node_modules/@material-ui/icons/SchoolOutlined.js");
/* harmony import */ var _material_ui_icons_SchoolOutlined__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SchoolOutlined__WEBPACK_IMPORTED_MODULE_13__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var DrawerNavigations = function DrawerNavigations(_ref) {
  var classes = _ref.classes,
      updateNavName = _ref.updateNavName,
      handleDrawerClose = _ref.handleDrawerClose;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    home: {
      name: "Home",
      to: "/dashboard",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, null)
    },
    programmes: [{
      name: "Programmes",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_SchoolOutlined__WEBPACK_IMPORTED_MODULE_13___default.a, null),
      dropdown: [{
        name: "Programmes & Courses",
        to: "/dashboard/programmes-and-courses"
      }, {
        name: "Manage Programmes",
        to: "/dashboard/manage-programmes"
      }, {
        name: "Manage Courses",
        to: "/dashboard/manage-courses"
      }]
    }],
    lectures: [{
      name: "Lectures",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MenuBookOutlined__WEBPACK_IMPORTED_MODULE_12___default.a, null),
      dropdown: [{
        name: "Upload Lecture",
        to: "/dashboard/upload-lecture"
      }, {
        name: "Create Assignment",
        to: "/dashboard/upload-lecture"
      }]
    }],
    signOut: {
      name: "Sign out",
      to: "/logout",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExitToAppOutlined__WEBPACK_IMPORTED_MODULE_11___default.a, null)
    }
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      navigation = _React$useState2[0],
      setNavigation = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      dropdownActiveLink = _React$useState4[0],
      setDropdownActiveLink = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      navigationIndex = _React$useState6[0],
      setNavigationIndex = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      toggleNavDropdown = _React$useState8[0],
      setToggleNavDropdown = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      toggleNavDropdown1 = _React$useState10[0],
      setToggleNavDropdown1 = _React$useState10[1];

  var handleNavDropdown = function handleNavDropdown() {
    setToggleNavDropdown(!toggleNavDropdown);
    setToggleNavDropdown1(false);
  };

  var handleNavDropdown1 = function handleNavDropdown1() {
    setToggleNavDropdown1(!toggleNavDropdown1);
    setToggleNavDropdown(false);
  };

  var handleNavName = function handleNavName(name, index) {
    handleDrawerClose();
    updateNavName(name);
    setNavigationIndex(index);
    setDropdownActiveLink("");
    setToggleNavDropdown(false);
    setToggleNavDropdown1(false);
  };

  var handleDropdownLinkToggle = function handleDropdownLinkToggle(index) {
    setNavigationIndex(index);
  };

  var handleDropdownActiveLink = function handleDropdownActiveLink(name, index) {
    handleDrawerClose();
    updateNavName(name);
    setNavigationIndex(index);
    setDropdownActiveLink(name);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object.keys(navigation).map(function (key, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: idx
    }, key === "home" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
      href: navigation["".concat(key)].to,
      onClick: function onClick() {
        return handleNavName(navigation["".concat(key)].name, idx);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      button: true,
      selected: navigationIndex === idx,
      className: navigationIndex === idx ? classes.active : "nav-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null, navigation["".concat(key)].icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
      primary: navigation["".concat(key)].name
    }))), key === "programmes" && navigation["".concat(key)].map(function (nav, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        button: true,
        key: index,
        onClick: handleNavDropdown,
        selected: navigationIndex === idx,
        onFocus: function onFocus() {
          return handleDropdownLinkToggle(idx);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null, nav.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: nav.name
      }), toggleNavDropdown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, null)), nav.dropdown.map(function (d, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__["default"], {
          "in": toggleNavDropdown,
          timeout: "auto",
          unmountOnExit: true,
          key: i.toString()
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
          component: "div",
          disablePadding: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
          href: d.to,
          onClick: function onClick() {
            return handleDropdownActiveLink(d.name, idx);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          button: true,
          selected: navigationIndex === d.name,
          className: (classes.nested, dropdownActiveLink === d.name ? classes.active : "")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
          primary: d.name,
          className: "ml-4"
        })))));
      }));
    }), key === "lectures" && navigation["".concat(key)].map(function (nav, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        button: true,
        key: index,
        onClick: handleNavDropdown1,
        selected: navigationIndex === idx,
        onFocus: function onFocus() {
          return handleDropdownLinkToggle(idx);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null, nav.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: nav.name
      }), toggleNavDropdown1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, null)), nav.dropdown.map(function (d, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__["default"], {
          "in": toggleNavDropdown1,
          timeout: "auto",
          unmountOnExit: true,
          key: i.toString()
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
          component: "div",
          disablePadding: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
          href: d.to,
          onClick: function onClick() {
            return handleDropdownActiveLink(d.name, idx);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          button: true,
          selected: navigationIndex === d.name,
          className: (classes.nested, dropdownActiveLink === d.name ? classes.active : "")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
          primary: d.name,
          className: "ml-4"
        })))));
      }));
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__["default"], null), Object.keys(navigation).map(function (key, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: idx
    }, key === "signOut" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
      href: navigation["".concat(key)].to,
      onClick: function onClick() {
        return handleNavName("", idx);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      button: true,
      selected: navigationIndex === idx,
      className: navigationIndex === idx ? classes.active : "nav-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null, navigation["".concat(key)].icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
      primary: navigation["".concat(key)].name
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DrawerNavigations);

/***/ }),

/***/ "./resources/js/layouts/Dashboard.js":
/*!*******************************************!*\
  !*** ./resources/js/layouts/Dashboard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_icons_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/NotificationsOutlined */ "./node_modules/@material-ui/icons/NotificationsOutlined.js");
/* harmony import */ var _material_ui_icons_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _components_DrawerNavigations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/DrawerNavigations */ "./resources/js/components/DrawerNavigations.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex",
      flexGrow: 1
    },
    title: _defineProperty({
      display: "none"
    }, theme.breakpoints.up("sm"), {
      display: "block"
    }),
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: _objectSpread(_objectSpread({
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar), {}, {
      justifyContent: "flex-end"
    }),
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth,
      backgroundColor: "#c6d1d86b",
      minHeight: "100vh"
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    orange: {
      color: theme.palette.getContrastText(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_25__["deepOrange"][500]),
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_25__["deepOrange"][500]
    },
    avaterSmall: {
      width: theme.spacing(3),
      height: theme.spacing(3)
    },
    active: {
      color: "rgb(233, 99, 3)"
    }
  };
});

var Dashboard = function Dashboard(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (!localStorage.getItem("navName")) {
      localStorage.setItem("navName", "Home");
    }
  }, []);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openDrawer = _React$useState2[0],
      setOpenDrawer = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      profilePopper = _React$useState4[0],
      setProfilePopper = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      notificationPopper = _React$useState6[0],
      setNotificationPopper = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(localStorage.getItem("navName")),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      navName = _React$useState8[0],
      setNavName = _React$useState8[1];

  var updateNavName = function updateNavName(nav) {
    setNavName(nav);
    nav && localStorage.setItem("navName", nav);
  };

  var handleDrawerOpen = function handleDrawerOpen() {
    return setOpenDrawer(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    return setOpenDrawer(false);
  };

  var profilePopperRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  var notificationPopperRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  var toggleProfilePopper = function toggleProfilePopper() {
    setProfilePopper(function (prevProfilePopperOpen) {
      return !prevProfilePopperOpen;
    });
  };

  var toggleNotificationPopper = function toggleNotificationPopper() {
    setNotificationPopper(function (prevNotificationPopperOpen) {
      return !prevNotificationPopperOpen;
    });
  };

  var handleProfilePopper = function handleProfilePopper(event) {
    if (profilePopperRef.current && profilePopperRef.current.contains(event.target)) {
      return;
    }

    setProfilePopper(false);
  };

  var handleNotificationPopper = function handleNotificationPopper(event) {
    if (notificationPopperRef.current && notificationPopperRef.current.contains(event.target)) {
      return;
    }

    setNotificationPopper(false);
  }; // return focus to the button when we transitioned from !open -> open


  var prevProfilePopperOpen = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(profilePopper);
  var prevNotificationPopperOpen = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(notificationPopper);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (prevProfilePopperOpen.current === true && profilePopper === false) {
      profilePopperRef.current.focus();
    }

    if (prevNotificationPopperOpen.current === true && notificationPopper === false) {
      notificationPopperRef.current.focus();
    }

    prevProfilePopperOpen.current = profilePopper;
    prevNotificationPopperOpen.current = profilePopper;
  }, [profilePopper, notificationPopper, navName]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "fixed",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.appBar, _defineProperty({}, classes.appBarShift, openDrawer))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    edge: "start",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.menuButton, openDrawer && classes.hide)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "toolbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h6",
    noWrap: true,
    className: classes.active
  }, navName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "app-toolbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], {
    title: "Notifications"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    "aria-label": "Toggle notifications",
    onClick: toggleNotificationPopper,
    ref: notificationPopperRef,
    "aria-controls": profilePopper ? "menu-list-grow" : undefined,
    "aria-haspopup": "true",
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_22__["default"], {
    badgeContent: 100,
    color: "secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_NotificationsOutlined__WEBPACK_IMPORTED_MODULE_20___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], {
    title: "Profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "current-user",
    onClick: toggleProfilePopper,
    ref: profilePopperRef,
    "aria-controls": profilePopper ? "menu-list-grow" : undefined,
    "aria-haspopup": "true",
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "current-user__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    alt: "Seyram Wood",
    src: "/storage/avatar/students/sey.jpg",
    className: classes.avatarSmall
  }, "SW")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "current-user__name"
  }, "Seyram Wood Prikah"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_17__["default"], {
    open: profilePopper,
    anchorEl: profilePopperRef.current,
    role: undefined,
    transition: true,
    disablePortal: true,
    placement: "bottom-end"
  }, function (_ref2) {
    var TransitionProps = _ref2.TransitionProps,
        placement = _ref2.placement;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, TransitionProps, {
      style: {
        transformOrigin: placement === "bottom" ? "center top" : "center bottom"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onClickAway: handleProfilePopper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_19__["default"], {
      autoFocusItem: profilePopper,
      id: "menu-list-grow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
      onClick: handleProfilePopper
    }, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
      onClick: handleProfilePopper
    }, "Logout")))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_17__["default"], {
    open: notificationPopper,
    anchorEl: notificationPopperRef.current,
    role: undefined,
    transition: true,
    disablePortal: true,
    placement: "bottom-end"
  }, function (_ref3) {
    var TransitionProps = _ref3.TransitionProps,
        placement = _ref3.placement;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, TransitionProps, {
      style: {
        transformOrigin: placement === "bottom" ? "center top" : "center bottom"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onClickAway: handleNotificationPopper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_19__["default"], {
      autoFocusItem: profilePopper,
      id: "menu-list-grow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
      onClick: handleNotificationPopper
    }, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_18__["default"], {
      onClick: handleNotificationPopper
    }, "Logout")))));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.drawer,
    variant: "persistent",
    anchor: "left",
    open: openDrawer,
    classes: {
      paper: classes.drawerPaper
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.drawerHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uni-logo-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/storage/logo/lancaster-3.png",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleDrawerClose
  }, theme.direction === "ltr" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_12___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_13___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_DrawerNavigations__WEBPACK_IMPORTED_MODULE_23__["default"], {
    classes: classes,
    updateNavName: updateNavName,
    handleDrawerClose: handleDrawerClose
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.content, _defineProperty({}, classes.contentShift, openDrawer))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.drawerHeader
  }), children));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

}]);