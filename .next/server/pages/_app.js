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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Header/SignInButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst SignInButton = ()=>{\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    return session ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().signInButton),\n        type: \"button\",\n        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)()\n        ,\n        __source: {\n            fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/SignInButton/index.tsx\",\n            lineNumber: 11,\n            columnNumber: 13\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {\n                color: \"#04d361\",\n                __source: {\n                    fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/SignInButton/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                },\n                __self: undefined\n            }),\n            session.user.name,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, {\n                color: \"#737380\",\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().closeIcon),\n                __source: {\n                    fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/SignInButton/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                },\n                __self: undefined\n            })\n        ]\n    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().signInButton),\n        type: \"button\",\n        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)('github')\n        ,\n        __source: {\n            fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/SignInButton/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {\n                color: \"#eba417\",\n                __source: {\n                    fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/SignInButton/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                },\n                __self: undefined\n            }),\n            \"Sing in with Github\"\n        ]\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInButton);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvU2lnbkluQnV0dG9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDTDtBQUN5QjtBQUNsQjtBQUV6QyxLQUFLLENBQUNNLFlBQVksT0FBUyxDQUFDO0lBQ3hCLEtBQUssQ0FBQyxDQUFDQyxDQUFBQSxJQUFJLEVBQUVDLE9BQU8sR0FBQyxHQUFHSiwyREFBVTtJQUVsQyxNQUFNLENBQUNJLE9BQU8seUVBRUxDLENBQU07UUFDSEMsU0FBUyxFQUFFTCx5RUFBbUI7UUFDOUJPLElBQUksRUFBQyxDQUFRO1FBQ2JDLE9BQU8sTUFBUVYsd0RBQU87Ozs7Ozs7OztpRkFFckJILG9EQUFRO2dCQUFDYyxLQUFLLEVBQUMsQ0FBUzs7Ozs7Ozs7WUFDeEJOLE9BQU8sQ0FBQ08sSUFBSSxDQUFDQyxJQUFJO2lGQUNqQmYsK0NBQUc7Z0JBQUNhLEtBQUssRUFBQyxDQUFTO2dCQUFDSixTQUFTLEVBQUVMLHNFQUFnQjs7Ozs7Ozs7OytFQUtuREksQ0FBTTtRQUNIQyxTQUFTLEVBQUVMLHlFQUFtQjtRQUM5Qk8sSUFBSSxFQUFDLENBQVE7UUFDYkMsT0FBTyxNQUFRWCx1REFBTSxDQUFDLENBQVE7Ozs7Ozs7OztpRkFFN0JGLG9EQUFRO2dCQUFDYyxLQUFLLEVBQUMsQ0FBUzs7Ozs7Ozs7WUFBRyxDQUVoQzs7O0FBR1osQ0FBQztBQUVELGlFQUFlUixZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvU2lnbkluQnV0dG9uL2luZGV4LnRzeD85OGQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmFHaXRodWJ9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7RmlYfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XG5pbXBvcnQge3NpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbn0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7IFxuXG5jb25zdCBTaWduSW5CdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3Qge2RhdGE6IHNlc3Npb259ID0gdXNlU2Vzc2lvbigpOyBcblxuICAgIHJldHVybiBzZXNzaW9uID8gKFxuICAgICAgICAoXG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25JbkJ1dHRvbn0gXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGYUdpdGh1YiBjb2xvcj1cIiMwNGQzNjFcIiAvPlxuICAgICAgICAgICAgICAgIHtzZXNzaW9uLnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgICA8RmlYIGNvbG9yPVwiIzczNzM4MFwiIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlSWNvbn0vPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIClcbiAgICApIDogKFxuICAgICAgICAoXG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25JbkJ1dHRvbn0gXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKCdnaXRodWInKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmFHaXRodWIgY29sb3I9XCIjZWJhNDE3XCIgLz5cbiAgICAgICAgICAgICAgICBTaW5nIGluIHdpdGggR2l0aHViXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKVxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluQnV0dG9uOyJdLCJuYW1lcyI6WyJGYUdpdGh1YiIsIkZpWCIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwic3R5bGVzIiwiU2lnbkluQnV0dG9uIiwiZGF0YSIsInNlc3Npb24iLCJidXR0b24iLCJjbGFzc05hbWUiLCJzaWduSW5CdXR0b24iLCJ0eXBlIiwib25DbGljayIsImNvbG9yIiwidXNlciIsIm5hbWUiLCJjbG9zZUljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/SignInButton/index.tsx\n");

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SignInButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInButton */ \"./src/components/Header/SignInButton/index.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Header/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Header = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContainer),\n        __source: {\n            fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n            lineNumber: 6,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContent),\n            __source: {\n                fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            },\n            __self: undefined,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    src: \"/images/logo.svg\",\n                    alt: \"ig.news Logo\",\n                    __source: {\n                        fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    },\n                    __self: undefined\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n                    __source: {\n                        fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    },\n                    __self: undefined,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active),\n                            __source: {\n                                fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n                                lineNumber: 10,\n                                columnNumber: 21\n                            },\n                            __self: undefined,\n                            children: \"Home\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            __source: {\n                                fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n                                lineNumber: 11,\n                                columnNumber: 21\n                            },\n                            __self: undefined,\n                            children: \"Posts\"\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SignInButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    __source: {\n                        fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/components/Header/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    },\n                    __self: undefined\n                })\n            ]\n        })\n    }));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDQTtBQUV6QyxLQUFLLENBQUNFLE1BQU0sT0FBUyxDQUFDO0lBQ2xCLE1BQU0sc0VBQ0RDLENBQU07UUFBQ0MsU0FBUyxFQUFFSCw0RUFBc0I7Ozs7Ozs7d0ZBQ3BDSyxDQUFHO1lBQUNGLFNBQVMsRUFBRUgsMEVBQW9COzs7Ozs7OztxRkFDL0JPLENBQUc7b0JBQUNDLEdBQUcsRUFBQyxDQUFrQjtvQkFBQ0MsR0FBRyxFQUFDLENBQWM7Ozs7Ozs7O3NGQUM3Q0MsQ0FBRzs7Ozs7Ozs7NkZBQ0NDLENBQUM7NEJBQUNSLFNBQVMsRUFBRUgsbUVBQWE7Ozs7Ozs7c0NBQUUsQ0FBSTs7NkZBQ2hDVyxDQUFDOzs7Ozs7O3NDQUFDLENBQUs7Ozs7cUZBRVhaLHFEQUFZOzs7Ozs7Ozs7OztBQUk3QixDQUFDO0FBRWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4PzQwMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25JbkJ1dHRvbiBmcm9tICcuL1NpZ25JbkJ1dHRvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGVudH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwiaWcubmV3cyBMb2dvXCIgLz5cbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5hY3RpdmV9PkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhPlBvc3RzPC9hPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxTaWduSW5CdXR0b24vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCB7SGVhZGVyfTsgIl0sIm5hbWVzIjpbIlNpZ25JbkJ1dHRvbiIsInN0eWxlcyIsIkhlYWRlciIsImhlYWRlciIsImNsYXNzTmFtZSIsImhlYWRlckNvbnRhaW5lciIsImRpdiIsImhlYWRlckNvbnRlbnQiLCJpbWciLCJzcmMiLCJhbHQiLCJuYXYiLCJhIiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.scss */ \"./src/styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: pageProps.session,\n        __source: {\n            fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {\n                __source: {\n                    fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/pages/_app.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/home/peo_tcesario/Documents/Thadeu/Code/Course/ig.news/src/pages/_app.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzJDO0FBQ0k7QUFDakI7U0FFckJFLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELE1BQU0sdUVBQ0hILDREQUFlO1FBQUNJLE9BQU8sRUFBRUQsU0FBUyxDQUFDQyxPQUFPOzs7Ozs7OztpRkFDeENMLHNEQUFNOzs7Ozs7OztpRkFDTkcsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQge0hlYWRlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHtTZXNzaW9uUHJvdmlkZXJ9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5zY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiU2Vzc2lvblByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

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