"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_configured_website"] = self["webpackChunkwebpack_configured_website"] || []).push([["src_pages_courses_js"],{

/***/ "./src/assets/css/font-awesome.min.css":
/*!*********************************************!*\
  !*** ./src/assets/css/font-awesome.min.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-configured-website/./src/assets/css/font-awesome.min.css?");

/***/ }),

/***/ "./src/data/courses.json":
/*!*******************************!*\
  !*** ./src/data/courses.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"title\":\"Javascript Ninja\",\"price\":9.99,\"description\":\"Get updated of the all the things around javascript. This course forms the foundation of all javascript faameworks.\",\"imageUrl\":\"https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png\",\"author\":\"Max\"},{\"title\":\"CSS Ninja\",\"price\":11.5,\"description\":\"Get all the expertise required to build some awesome websites. In this course we go though the core concepts of css , and also advanced concepts such as animation.\",\"imageUrl\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png\",\"author\":\"Jack\"},{\"title\":\"React Ninja\",\"price\":15.5,\"description\":\"Learn how to build single page applications using one of the most popular front end framework - React. We will see how to build an either project and deploy to AWS cloud.\",\"imageUrl\":\"https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png\",\"author\":\"Alex\"}]');\n\n//# sourceURL=webpack://webpack-configured-website/./src/data/courses.json?");

/***/ }),

/***/ "./src/pages/courses.js":
/*!******************************!*\
  !*** ./src/pages/courses.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_courses_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/courses.json */ \"./src/data/courses.json\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! types.js */ \"./node_modules/types.js/index.js\");\n/* harmony import */ var types_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(types_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validate.js */ \"./node_modules/validate.js/validate.js\");\n/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! toastr */ \"./node_modules/toastr/toastr.js\");\n/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index.css */ \"./src/index.css\");\n/* harmony import */ var _vendor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_vendor.scss */ \"./src/_vendor.scss\");\n/* harmony import */ var _assets_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/css/font-awesome.min.css */ \"./src/assets/css/font-awesome.min.css\");\n\n\n\n\n\n\n\n\n\n\n\nfunction loadCourses() {\n\tconst courseListSection = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#course-list')[0];\n\n\tlet courseItems = '';\n\tlodash__WEBPACK_IMPORTED_MODULE_5___default().each(_data_courses_json__WEBPACK_IMPORTED_MODULE_0__, (course) => {\n\t\tconst courseItem =\n\t\t\t'<div class=\"card mb-3 rounded-3\" style=\"max-width: 350px\"><div class=\"row g-0 p-3\"><div class=\"col-md-4\"> <img src=\"' +\n\t\t\tcourse.imageUrl +\n\t\t\t'\" class=\"img-fluid rounded-start\"alt=\"css\"/></div><div class=\"col-md-8\"><div class=\"card-body\"><h2 class=\"card-title\">' +\n\t\t\tcourse.title +\n\t\t\t'</h2><p class=\"card-text\">' +\n\t\t\tcourse.description +\n\t\t\t'</p><p class=\"card-text\"><strong>Author: </strong><small class=\"text-muted\">' +\n\t\t\tcourse.author +\n\t\t\t'</small></p></div></div></div> </div>';\n\t\tcourseItems += courseItem;\n\t});\n\n\tcourseListSection.innerHTML = courseItems;\n}\n\nloadCourses();\n\n\n//# sourceURL=webpack://webpack-configured-website/./src/pages/courses.js?");

/***/ })

}]);