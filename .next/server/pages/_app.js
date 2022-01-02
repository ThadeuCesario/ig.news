/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Header/SignInButton/styles.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/Header/SignInButton/styles.module.scss ***!
  \***************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"signInButton\": \"styles_signInButton__06aMU\",\n\t\"closeIcon\": \"styles_closeIcon__Uc8Wr\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvU2lnbkluQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1NpZ25JbkJ1dHRvbi9zdHlsZXMubW9kdWxlLnNjc3M/Nzg4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzaWduSW5CdXR0b25cIjogXCJzdHlsZXNfc2lnbkluQnV0dG9uX18wNmFNVVwiLFxuXHRcImNsb3NlSWNvblwiOiBcInN0eWxlc19jbG9zZUljb25fX1VjOFdyXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/SignInButton/styles.module.scss\n");

/***/ }),

/***/ "./src/components/Header/styles.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/styles.module.scss ***!
  \**************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"headerContainer\": \"styles_headerContainer__uAgJk\",\n\t\"headerContent\": \"styles_headerContent__h9eUe\",\n\t\"active\": \"styles_active__l7I1o\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3M/NGU3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJDb250YWluZXJcIjogXCJzdHlsZXNfaGVhZGVyQ29udGFpbmVyX191QWdKa1wiLFxuXHRcImhlYWRlckNvbnRlbnRcIjogXCJzdHlsZXNfaGVhZGVyQ29udGVudF9faDllVWVcIixcblx0XCJhY3RpdmVcIjogXCJzdHlsZXNfYWN0aXZlX19sN0kxb1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/styles.module.scss\n");

/***/ }),

/***/ "./src/components/Header/SignInButton/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/Header/SignInButton/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Header/SignInButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst SignInButton = ()=>{\n    const isUserLoggedIn = false;\n    return isUserLoggedIn ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),\n        type: \"button\",\n        __source: {\n            fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/SignInButton/index.tsx\",\n            lineNumber: 10,\n            columnNumber: 13\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {\n                color: \"#04d361\",\n                __source: {\n                    fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/SignInButton/index.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                },\n                __self: undefined\n            }),\n            \"Thadeu Ces\\xe1rio\",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, {\n                color: \"#737380\",\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().closeIcon),\n                __source: {\n                    fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/SignInButton/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                },\n                __self: undefined\n            })\n        ]\n    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),\n        type: \"button\",\n        __source: {\n            fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/SignInButton/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {\n                color: \"#eba417\",\n                __source: {\n                    fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/SignInButton/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                },\n                __self: undefined\n            }),\n            \"Sing in with Github\"\n        ]\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInButton);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvU2lnbkluQnV0dG9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0w7QUFDTztBQUV6QyxLQUFLLENBQUNHLFlBQVksT0FBUyxDQUFDO0lBQ3hCLEtBQUssQ0FBQ0MsY0FBYyxHQUFHLEtBQUs7SUFFNUIsTUFBTSxDQUFDQSxjQUFjLHlFQUVaQyxDQUFNO1FBQUNDLFNBQVMsRUFBRUoseUVBQW1CO1FBQUVNLElBQUksRUFBQyxDQUFROzs7Ozs7OztpRkFDaERSLG9EQUFRO2dCQUFDUyxLQUFLLEVBQUMsQ0FBUzs7Ozs7Ozs7WUFBRyxDQUU1QjtpRkFBQ1IsK0NBQUc7Z0JBQUNRLEtBQUssRUFBQyxDQUFTO2dCQUFDSCxTQUFTLEVBQUVKLHNFQUFnQjs7Ozs7Ozs7OytFQUtuREcsQ0FBTTtRQUFDQyxTQUFTLEVBQUVKLHlFQUFtQjtRQUFFTSxJQUFJLEVBQUMsQ0FBUTs7Ozs7Ozs7aUZBQ2hEUixvREFBUTtnQkFBQ1MsS0FBSyxFQUFDLENBQVM7Ozs7Ozs7O1lBQUcsQ0FFaEM7OztBQUdaLENBQUM7QUFFRCxpRUFBZU4sWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1NpZ25JbkJ1dHRvbi9pbmRleC50c3g/OThkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZhR2l0aHVifSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQge0ZpWH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7IFxuXG5jb25zdCBTaWduSW5CdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgaXNVc2VyTG9nZ2VkSW4gPSBmYWxzZTtcblxuICAgIHJldHVybiBpc1VzZXJMb2dnZWRJbiA/IChcbiAgICAgICAgKFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zaWduSW5CdXR0b259IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICA8RmFHaXRodWIgY29sb3I9XCIjMDRkMzYxXCIgLz5cbiAgICAgICAgICAgICAgICBUaGFkZXUgQ2Vzw6FyaW9cbiAgICAgICAgICAgICAgICA8RmlYIGNvbG9yPVwiIzczNzM4MFwiIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlSWNvbn0vPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIClcbiAgICApIDogKFxuICAgICAgICAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25JbkJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxGYUdpdGh1YiBjb2xvcj1cIiNlYmE0MTdcIiAvPlxuICAgICAgICAgICAgICAgIFNpbmcgaW4gd2l0aCBHaXRodWJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduSW5CdXR0b247Il0sIm5hbWVzIjpbIkZhR2l0aHViIiwiRmlYIiwic3R5bGVzIiwiU2lnbkluQnV0dG9uIiwiaXNVc2VyTG9nZ2VkSW4iLCJidXR0b24iLCJjbGFzc05hbWUiLCJzaWduSW5CdXR0b24iLCJ0eXBlIiwiY29sb3IiLCJjbG9zZUljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/SignInButton/index.tsx\n");

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Header/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SignInButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInButton */ \"./src/components/Header/SignInButton/index.tsx\");\n\n\n\nconst Header = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContainer),\n        __source: {\n            fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n            lineNumber: 6,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContent),\n            __source: {\n                fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            },\n            __self: undefined,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    src: \"/images/logo.svg\",\n                    alt: \"ig.news Logo\",\n                    __source: {\n                        fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    },\n                    __self: undefined\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n                    __source: {\n                        fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    },\n                    __self: undefined,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active),\n                            __source: {\n                                fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n                                lineNumber: 10,\n                                columnNumber: 21\n                            },\n                            __self: undefined,\n                            children: \"Home\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            __source: {\n                                fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n                                lineNumber: 11,\n                                columnNumber: 21\n                            },\n                            __self: undefined,\n                            children: \"Posts\"\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SignInButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    __source: {\n                        fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    },\n                    __self: undefined\n                })\n            ]\n        })\n    }));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDQTtBQUV6QyxLQUFLLENBQUNFLE1BQU0sT0FBUyxDQUFDO0lBQ2xCLE1BQU0sc0VBQ0RDLENBQU07UUFBQ0MsU0FBUyxFQUFFSiw0RUFBc0I7Ozs7Ozs7d0ZBQ3BDTSxDQUFHO1lBQUNGLFNBQVMsRUFBRUosMEVBQW9COzs7Ozs7OztxRkFDL0JRLENBQUc7b0JBQUNDLEdBQUcsRUFBQyxDQUFrQjtvQkFBQ0MsR0FBRyxFQUFDLENBQWM7Ozs7Ozs7O3NGQUM3Q0MsQ0FBRzs7Ozs7Ozs7NkZBQ0NDLENBQUM7NEJBQUNSLFNBQVMsRUFBRUosbUVBQWE7Ozs7Ozs7c0NBQUUsQ0FBSTs7NkZBQ2hDWSxDQUFDOzs7Ozs7O3NDQUFDLENBQUs7Ozs7cUZBRVhYLHFEQUFZOzs7Ozs7Ozs7OztBQUk3QixDQUFDO0FBRWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4PzQwMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgU2lnbkluQnV0dG9uIGZyb20gJy4vU2lnbkluQnV0dG9uJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGVudH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwiaWcubmV3cyBMb2dvXCIgLz5cbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5hY3RpdmV9PkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhPlBvc3RzPC9hPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxTaWduSW5CdXR0b24vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCB7SGVhZGVyfTsgIl0sIm5hbWVzIjpbInN0eWxlcyIsIlNpZ25JbkJ1dHRvbiIsIkhlYWRlciIsImhlYWRlciIsImNsYXNzTmFtZSIsImhlYWRlckNvbnRhaW5lciIsImRpdiIsImhlYWRlckNvbnRlbnQiLCJpbWciLCJzcmMiLCJhbHQiLCJuYXYiLCJhIiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ \"./src/styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {\n                __source: {\n                    fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/pages/_app.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/pages/_app.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMyQztBQUNiO1NBRXJCQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNOztpRkFFREgsc0RBQU07Ozs7Ozs7O2lGQUNORSxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwUHJvcHN9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2Nzcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();