(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/js/Pages/backend/Home.js":
/*!********************************************!*\
  !*** ./resources/js/Pages/backend/Home.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/Dashboard */ "./resources/js/layouts/Dashboard.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_AccountBalanceOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/AccountBalanceOutlined */ "./node_modules/@material-ui/icons/AccountBalanceOutlined.js");
/* harmony import */ var _material_ui_icons_AccountBalanceOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBalanceOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var bizcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bizcharts */ "./node_modules/bizcharts/umd/BizCharts.js");
/* harmony import */ var bizcharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bizcharts__WEBPACK_IMPORTED_MODULE_7__);








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  };
});
var data = [{
  name: "London",
  month: "Jan.",
  avgRainfall: 18.9
}, {
  name: "London",
  month: "Feb.",
  avgRainfall: 28.8
}, {
  name: "London",
  month: "Mar.",
  avgRainfall: 39.3
}, {
  name: "London",
  month: "Apr.",
  avgRainfall: 20.4
}, {
  name: "London",
  month: "May",
  avgRainfall: 47
}, {
  name: "London",
  month: "Jun.",
  avgRainfall: 20.3
}, {
  name: "London",
  month: "Jul.",
  avgRainfall: 24
}, {
  name: "London",
  month: "Aug.",
  avgRainfall: null
}, {
  name: "Paris",
  month: "Jan.",
  avgRainfall: 19.9
}, {
  name: "Paris",
  month: "Feb.",
  avgRainfall: 28.8
}, {
  name: "Paris",
  month: "Mar.",
  avgRainfall: 29.3
}, {
  name: "Paris",
  month: "Apr.",
  avgRainfall: null
}, {
  name: "Paris",
  month: "May",
  avgRainfall: 67
}, {
  name: "Paris",
  month: "Jun.",
  avgRainfall: null
}, {
  name: "Paris",
  month: "Jul.",
  avgRainfall: 23
}, {
  name: "Paris",
  month: "Aug.",
  avgRainfall: null
}, {
  name: "Berlin",
  month: "Jan.",
  avgRainfall: 12.4
}, {
  name: "Berlin",
  month: "Feb.",
  avgRainfall: 23.2
}, {
  name: "Berlin",
  month: "Mar.",
  avgRainfall: 34.5
}, {
  name: "Berlin",
  month: "Apr.",
  avgRainfall: null
}, {
  name: "Berlin",
  month: "May",
  avgRainfall: 52.6
}, {
  name: "Berlin",
  month: "Jun.",
  avgRainfall: 35.5
}, {
  name: "Berlin",
  month: "Jul.",
  avgRainfall: 37.4
}, {
  name: "Berlin",
  month: "Aug.",
  avgRainfall: 42.4
}];
var data2 = [{
  month: "Jan",
  city: "Tokyo",
  temperature: 7
}, {
  month: "Jan",
  city: "London",
  temperature: 3.9
}, {
  month: "Feb",
  city: "Tokyo",
  temperature: 13
}, {
  month: "Feb",
  city: "London",
  temperature: 4.2
}, {
  month: "Mar",
  city: "Tokyo",
  temperature: 16.5
}, {
  month: "Mar",
  city: "London",
  temperature: 5.7
}, {
  month: "Apr",
  city: "Tokyo",
  temperature: 14.5
}, {
  month: "Apr",
  city: "London",
  temperature: 8.5
}, {
  month: "May",
  city: "Tokyo",
  temperature: 10
}, {
  month: "May",
  city: "London",
  temperature: 11.9
}, {
  month: "Jun",
  city: "Tokyo",
  temperature: 7.5
}, {
  month: "Jun",
  city: "London",
  temperature: 15.2
}, {
  month: "Jul",
  city: "Tokyo",
  temperature: 9.2
}, {
  month: "Jul",
  city: "London",
  temperature: 17
}, {
  month: "Aug",
  city: "Tokyo",
  temperature: 14.5
}, {
  month: "Aug",
  city: "London",
  temperature: 16.6
}, {
  month: "Sep",
  city: "Tokyo",
  temperature: 9.3
}, {
  month: "Sep",
  city: "London",
  temperature: 14.2
}, {
  month: "Oct",
  city: "Tokyo",
  temperature: 8.3
}, {
  month: "Oct",
  city: "London",
  temperature: 10.3
}, {
  month: "Nov",
  city: "Tokyo",
  temperature: 8.9
}, {
  month: "Nov",
  city: "London",
  temperature: 5.6
}, {
  month: "Dec",
  city: "Tokyo",
  temperature: 5.6
}, {
  month: "Dec",
  city: "London",
  temperature: 9.8
}];
var data3 = [{
  month: "2015-01-01",
  acc: 84.0
}, {
  month: "2015-02-01",
  acc: 14.9
}, {
  month: "2015-03-01",
  acc: 17.0
}, {
  month: "2015-04-01",
  acc: 20.2
}, {
  month: "2015-05-01",
  acc: 55.6
}, {
  month: "2015-06-01",
  acc: 56.7
}, {
  month: "2015-07-01",
  acc: 30.6
}, {
  month: "2015-08-01",
  acc: 63.2
}, {
  month: "2015-09-01",
  acc: 24.6
}, {
  month: "2015-10-01",
  acc: 14.0
}, {
  month: "2015-11-01",
  acc: 9.4
}, {
  month: "2015-12-01",
  acc: 7.3
}];
var data4 = [{
  year: "2001",
  population: 41.8
}, {
  year: "2002",
  population: 38
}, {
  year: "2003",
  population: 33.7
}, {
  year: "2004",
  population: 30.7
}, {
  year: "2005",
  population: 25.8
}, {
  year: "2006",
  population: 31.7
}, {
  year: "2007",
  population: 33
}, {
  year: "2008",
  population: 46
}, {
  year: "2009",
  population: 38.3
}, {
  year: "2010",
  population: 28
}, {
  year: "2011",
  population: 42.5
}, {
  year: "2012",
  population: 30.3
}];

var Home = function Home(_ref) {
  var user = _ref.user;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard-summary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "small",
    color: "secondary",
    "aria-label": "like"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountBalanceOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "123"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Total Lecturers"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard-summary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "small",
    color: "primary",
    "aria-label": "like"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountBalanceOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "123"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Total Students"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard-summary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "small",
    color: "secondary",
    "aria-label": "like"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountBalanceOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "123"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Total Teachers"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 6,
    sm: 6,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard-summary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "small",
    color: "primary",
    "aria-label": "like"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountBalanceOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "123"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Total Attendance")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    sm: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["Chart"], {
    height: 300,
    padding: "auto",
    data: data,
    autoFit: true,
    filter: [["avgRainfall", function (val) {
      return val !== null;
    }]]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["Interval"], {
    adjust: [{
      type: "dodge",
      marginRatio: 0
    }],
    color: "name",
    position: "month*avgRainfall"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
    shared: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["Interaction"], {
    type: "active-region"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["Chart"], {
    height: 300,
    data: data4,
    autoFit: true,
    description: {
      visible: true,
      text: "The outer radius of the ring graph determines the size of the ring graph, and the inner radius determines the thickness of the ring graph."
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["Coordinate"], {
    type: "polar",
    innerRadius: 0.2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["Axis"], {
    visible: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
    showTitle: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["Interval"], {
    position: "year*population",
    adjust: "stack",
    color: "year",
    "element-highlight": true,
    style: {
      lineWidth: 1,
      stroke: "#fff"
    },
    label: ["year", {
      offset: -15
    }]
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["Chart"], {
    padding: [10, 20, 50, 40],
    autoFit: true,
    height: 300,
    data: data2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["LineAdvance"], {
    shape: "smooth",
    point: true,
    area: true,
    position: "month*temperature",
    color: "city"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, "xs=6 sm=3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["Chart"], {
    scale: {
      value: {
        min: 0
      }
    },
    padding: [10, 20, 50, 40],
    autoFit: true,
    height: 300,
    data: data3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bizcharts__WEBPACK_IMPORTED_MODULE_7__["Line"], {
    shape: "smooth",
    position: "month*acc",
    color: "l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
  })))))));
};

Home.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: page
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

}]);