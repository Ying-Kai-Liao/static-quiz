"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/quiz/QuizClient.tsx":
/*!*********************************!*\
  !*** ./app/quiz/QuizClient.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_QuestionCard_QuestionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/QuestionCard/QuestionCard */ \"(app-client)/./components/QuestionCard/QuestionCard.tsx\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button/Button */ \"(app-client)/./components/Button/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// Components\n\n\nconst Quiz = (param)=>{\n    let { questions , totalQuestions  } = param;\n    _s();\n    const [currentQuestionIndex, setCurrentQuestionIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const [score, setScore] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const [userAnswers, setUserAnswers] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleOnAnswerClick = (answer, currentQuestionIndex)=>{\n        // If user has already answered, do nothing\n        if (isQuestionAnswered) return;\n        // Check answer against correct answer\n        const isCorrect = questions[currentQuestionIndex].correct_answer === answer;\n        // Add score if answer is correct\n        if (isCorrect) setScore((prev)=>prev + 1);\n        // Save the answer in the object for user answers\n        setUserAnswers((prev)=>({\n                ...prev,\n                [currentQuestionIndex]: answer\n            }));\n    };\n    const handleChangeQuestion = (step)=>{\n        const newQuestionIndex = currentQuestionIndex + step;\n        if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;\n        setCurrentQuestionIndex(newQuestionIndex);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" p-20 text-black text-center absolut top-[]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"p-8 font-bold text-[20px]\",\n                children: [\n                    \"得分: \",\n                    score\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-black font-bold text-[16px]\",\n                children: [\n                    \"當前第 \",\n                    currentQuestionIndex + 1,\n                    \" 題  共 \",\n                    totalQuestions,\n                    \" 題\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuestionCard_QuestionCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentQuestionIndex: currentQuestionIndex,\n                question: questions[currentQuestionIndex].question,\n                answers: questions[currentQuestionIndex].answers,\n                userAnswer: userAnswers[currentQuestionIndex],\n                correctAnswer: questions[currentQuestionIndex].correct_answer,\n                onClick: handleOnAnswerClick\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-5 gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: \"上一題\",\n                        onClick: ()=>handleChangeQuestion(-1)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: currentQuestionIndex === totalQuestions - 1 ? \"結束\" : \"下一題\",\n                        onClick: currentQuestionIndex === totalQuestions - 1 ? ()=>router.push(\"/finish/\".concat(score)) : ()=>handleChangeQuestion(1)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Quiz, \"dB/RaZOIY5zUpkBLZ9ZUQod/bq4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3F1aXovUXVpekNsaWVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUwQjtBQUNrQjtBQUM1QyxhQUFhO0FBQ3FEO0FBQ2xCO0FBU2hELE1BQU1JLE9BQU87UUFBQyxFQUFFQyxVQUFTLEVBQUVDLGVBQWMsRUFBUzs7SUFDaEQsTUFBTSxDQUFDQyxzQkFBc0JDLHdCQUF3QixHQUFHUixxREFBY1MsQ0FBQztJQUN2RSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1gscURBQWNTLENBQUM7SUFDekMsTUFBTSxDQUFDRyxhQUFhQyxlQUFlLEdBQUdiLHFEQUFjUyxDQUF5QixDQUFDO0lBRTlFLE1BQU1LLHFCQUFxQkYsV0FBVyxDQUFDTCxxQkFBcUIsR0FBRyxPQUFPO0lBRXRFLE1BQU1RLFNBQVNkLDBEQUFTQTtJQUV4QixNQUFNZSxzQkFBc0IsQ0FBQ0MsUUFBZ0JWO1FBQzNDLDJDQUEyQztRQUMzQyxJQUFJTyxvQkFBb0I7UUFDeEIsc0NBQXNDO1FBQ3RDLE1BQU1JLFlBQVliLFNBQVMsQ0FBQ0UscUJBQXFCLENBQUNZLG1CQUFtQkY7UUFDckUsaUNBQWlDO1FBQ2pDLElBQUlDLFdBQVdQLFNBQVNTLENBQUFBLE9BQVFBLE9BQU87UUFDdkMsaURBQWlEO1FBQ2pEUCxlQUFlTyxDQUFBQSxPQUFTO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ2IscUJBQXFCLEVBQUVVO1lBQU87SUFDcEU7SUFFQSxNQUFNSSx1QkFBdUIsQ0FBQ0M7UUFDNUIsTUFBTUMsbUJBQW1CaEIsdUJBQXVCZTtRQUNoRCxJQUFJQyxtQkFBbUIsS0FBS0Esb0JBQW9CakIsZ0JBQWdCO1FBQ2hFRSx3QkFBd0JlO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBRUQsV0FBVTs7b0JBQTRCO29CQUFLZjs7Ozs7OzswQkFDOUMsOERBQUNnQjtnQkFBRUQsV0FBVTs7b0JBQW1DO29CQUN6Q2xCLHVCQUF1QjtvQkFBRTtvQkFBT0Q7b0JBQWU7Ozs7Ozs7MEJBRXRELDhEQUFDSiw2RUFBWUE7Z0JBQ1hLLHNCQUFzQkE7Z0JBQ3RCb0IsVUFBVXRCLFNBQVMsQ0FBQ0UscUJBQXFCLENBQUNvQjtnQkFDMUNDLFNBQVN2QixTQUFTLENBQUNFLHFCQUFxQixDQUFDcUI7Z0JBQ3pDQyxZQUFZakIsV0FBVyxDQUFDTCxxQkFBcUI7Z0JBQzdDdUIsZUFBZXpCLFNBQVMsQ0FBQ0UscUJBQXFCLENBQUNZO2dCQUMvQ1ksU0FBU2Y7Ozs7OzswQkFFWCw4REFBQ1E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDdEIsaUVBQU1BO3dCQUFDNkIsTUFBSzt3QkFBTUQsU0FBUyxJQUFNVixxQkFBcUIsQ0FBQzs7Ozs7O2tDQUN4RCw4REFBQ2xCLGlFQUFNQTt3QkFDTDZCLE1BQU16Qix5QkFBeUJELGlCQUFpQixJQUFJLE9BQU87d0JBQzNEeUIsU0FBU3hCLHlCQUF5QkQsaUJBQWlCLElBQUksSUFBTVMsT0FBT2tCLEtBQUssV0FBaUIsT0FBTnZCLFVBQVcsSUFBTVcscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEk7R0FqRE1qQjs7UUFPV0gsc0RBQVNBOzs7S0FQcEJHO0FBbUROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9xdWl6L1F1aXpDbGllbnQudHN4PzFlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgUXVlc3Rpb25DYXJkIGZyb20gJ0AvY29tcG9uZW50cy9RdWVzdGlvbkNhcmQvUXVlc3Rpb25DYXJkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XHJcbi8vIFR5cGVzXHJcbmltcG9ydCB7IFF1ZXN0aW9uc1N0YXRlIH0gZnJvbSAnQC90eXBlcy9xdWl6JztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcXVlc3Rpb25zOiBRdWVzdGlvbnNTdGF0ZTtcclxuICB0b3RhbFF1ZXN0aW9uczogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgUXVpeiA9ICh7IHF1ZXN0aW9ucywgdG90YWxRdWVzdGlvbnMgfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uSW5kZXgsIHNldEN1cnJlbnRRdWVzdGlvbkluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3VzZXJBbnN3ZXJzLCBzZXRVc2VyQW5zd2Vyc10gPSBSZWFjdC51c2VTdGF0ZTxSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+Pih7fSk7XHJcblxyXG4gIGNvbnN0IGlzUXVlc3Rpb25BbnN3ZXJlZCA9IHVzZXJBbnN3ZXJzW2N1cnJlbnRRdWVzdGlvbkluZGV4XSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uQW5zd2VyQ2xpY2sgPSAoYW5zd2VyOiBzdHJpbmcsIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIC8vIElmIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWQsIGRvIG5vdGhpbmdcclxuICAgIGlmIChpc1F1ZXN0aW9uQW5zd2VyZWQpIHJldHVybjtcclxuICAgIC8vIENoZWNrIGFuc3dlciBhZ2FpbnN0IGNvcnJlY3QgYW5zd2VyXHJcbiAgICBjb25zdCBpc0NvcnJlY3QgPSBxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdLmNvcnJlY3RfYW5zd2VyID09PSBhbnN3ZXI7XHJcbiAgICAvLyBBZGQgc2NvcmUgaWYgYW5zd2VyIGlzIGNvcnJlY3RcclxuICAgIGlmIChpc0NvcnJlY3QpIHNldFNjb3JlKHByZXYgPT4gcHJldiArIDEpO1xyXG4gICAgLy8gU2F2ZSB0aGUgYW5zd2VyIGluIHRoZSBvYmplY3QgZm9yIHVzZXIgYW5zd2Vyc1xyXG4gICAgc2V0VXNlckFuc3dlcnMocHJldiA9PiAoeyAuLi5wcmV2LCBbY3VycmVudFF1ZXN0aW9uSW5kZXhdOiBhbnN3ZXIgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVF1ZXN0aW9uID0gKHN0ZXA6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbmV3UXVlc3Rpb25JbmRleCA9IGN1cnJlbnRRdWVzdGlvbkluZGV4ICsgc3RlcDtcclxuICAgIGlmIChuZXdRdWVzdGlvbkluZGV4IDwgMCB8fCBuZXdRdWVzdGlvbkluZGV4ID49IHRvdGFsUXVlc3Rpb25zKSByZXR1cm47XHJcbiAgICBzZXRDdXJyZW50UXVlc3Rpb25JbmRleChuZXdRdWVzdGlvbkluZGV4KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBwLTIwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXIgYWJzb2x1dCB0b3AtW10nPlxyXG4gICAgICA8cCBjbGFzc05hbWU9J3AtOCBmb250LWJvbGQgdGV4dC1bMjBweF0nPuW+l+WIhjoge3Njb3JlfTwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrIGZvbnQtYm9sZCB0ZXh0LVsxNnB4XSc+XHJcbiAgICAgICAg55W25YmN56ysIHtjdXJyZW50UXVlc3Rpb25JbmRleCArIDF9IOmhjCAg5YWxIHt0b3RhbFF1ZXN0aW9uc30g6aGMXHJcbiAgICAgIDwvcD5cclxuICAgICAgPFF1ZXN0aW9uQ2FyZFxyXG4gICAgICAgIGN1cnJlbnRRdWVzdGlvbkluZGV4PXtjdXJyZW50UXVlc3Rpb25JbmRleH1cclxuICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbkluZGV4XS5xdWVzdGlvbn1cclxuICAgICAgICBhbnN3ZXJzPXtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdLmFuc3dlcnN9XHJcbiAgICAgICAgdXNlckFuc3dlcj17dXNlckFuc3dlcnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdfVxyXG4gICAgICAgIGNvcnJlY3RBbnN3ZXI9e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25JbmRleF0uY29ycmVjdF9hbnN3ZXJ9XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlT25BbnN3ZXJDbGlja31cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTUgZ2FwLTYnPlxyXG4gICAgICAgIDxCdXR0b24gdGV4dD0n5LiK5LiA6aGMJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VRdWVzdGlvbigtMSl9IC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdGV4dD17Y3VycmVudFF1ZXN0aW9uSW5kZXggPT09IHRvdGFsUXVlc3Rpb25zIC0gMSA/ICfntZDmnZ8nIDogJ+S4i+S4gOmhjCd9XHJcbiAgICAgICAgICBvbkNsaWNrPXtjdXJyZW50UXVlc3Rpb25JbmRleCA9PT0gdG90YWxRdWVzdGlvbnMgLSAxID8gKCkgPT4gcm91dGVyLnB1c2goYC9maW5pc2gvJHtzY29yZX1gKSA6ICgpID0+IGhhbmRsZUNoYW5nZVF1ZXN0aW9uKDEpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1aXo7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIlF1ZXN0aW9uQ2FyZCIsIkJ1dHRvbiIsIlF1aXoiLCJxdWVzdGlvbnMiLCJ0b3RhbFF1ZXN0aW9ucyIsImN1cnJlbnRRdWVzdGlvbkluZGV4Iiwic2V0Q3VycmVudFF1ZXN0aW9uSW5kZXgiLCJ1c2VTdGF0ZSIsInNjb3JlIiwic2V0U2NvcmUiLCJ1c2VyQW5zd2VycyIsInNldFVzZXJBbnN3ZXJzIiwiaXNRdWVzdGlvbkFuc3dlcmVkIiwicm91dGVyIiwiaGFuZGxlT25BbnN3ZXJDbGljayIsImFuc3dlciIsImlzQ29ycmVjdCIsImNvcnJlY3RfYW5zd2VyIiwicHJldiIsImhhbmRsZUNoYW5nZVF1ZXN0aW9uIiwic3RlcCIsIm5ld1F1ZXN0aW9uSW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwidXNlckFuc3dlciIsImNvcnJlY3RBbnN3ZXIiLCJvbkNsaWNrIiwidGV4dCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/quiz/QuizClient.tsx\n"));

/***/ })

});