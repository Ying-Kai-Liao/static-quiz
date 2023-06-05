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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_QuestionCard_QuestionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/QuestionCard/QuestionCard */ \"(app-client)/./components/QuestionCard/QuestionCard.tsx\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button/Button */ \"(app-client)/./components/Button/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// Components\n\n\nconst Quiz = (param)=>{\n    let { questions , totalQuestions  } = param;\n    _s();\n    const [currentQuestionIndex, setCurrentQuestionIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const [score, setScore] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const [userAnswers, setUserAnswers] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleOnAnswerClick = (answer, currentQuestionIndex)=>{\n        // If user has already answered, do nothing\n        if (isQuestionAnswered) return;\n        // Check answer against correct answer\n        const isCorrect = questions[currentQuestionIndex].correct_answer === answer;\n        // Add score if answer is correct\n        if (isCorrect) setScore((prev)=>prev + 1);\n        // Save the answer in the object for user answers\n        setUserAnswers((prev)=>({\n                ...prev,\n                [currentQuestionIndex]: answer\n            }));\n    };\n    const handleChangeQuestion = (step)=>{\n        const newQuestionIndex = currentQuestionIndex + step;\n        if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;\n        setCurrentQuestionIndex(newQuestionIndex);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" p-20 text-black text-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"p-8 font-bold text-[20px] flex\",\n                children: [\n                    \"得分: \",\n                    score\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-black font-bold text-[16px] \",\n                children: [\n                    \"當前第 \",\n                    currentQuestionIndex + 1,\n                    \" 題  共 \",\n                    totalQuestions,\n                    \" 題\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuestionCard_QuestionCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentQuestionIndex: currentQuestionIndex,\n                question: questions[currentQuestionIndex].question,\n                answers: questions[currentQuestionIndex].answers,\n                userAnswer: userAnswers[currentQuestionIndex],\n                correctAnswer: questions[currentQuestionIndex].correct_answer,\n                onClick: handleOnAnswerClick\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-5 gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: \"上一題\",\n                        onClick: ()=>handleChangeQuestion(-1)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: currentQuestionIndex === totalQuestions - 1 ? \"結束\" : \"下一題\",\n                        onClick: currentQuestionIndex === totalQuestions - 1 ? ()=>router.push(\"/finish/\".concat(score)) : ()=>handleChangeQuestion(1)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\next_workspace\\\\static-page\\\\app\\\\quiz\\\\QuizClient.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Quiz, \"dB/RaZOIY5zUpkBLZ9ZUQod/bq4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3F1aXovUXVpekNsaWVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUwQjtBQUNrQjtBQUM1QyxhQUFhO0FBQ3FEO0FBQ2xCO0FBU2hELE1BQU1JLE9BQU87UUFBQyxFQUFFQyxVQUFTLEVBQUVDLGVBQWMsRUFBUzs7SUFDaEQsTUFBTSxDQUFDQyxzQkFBc0JDLHdCQUF3QixHQUFHUixxREFBY1MsQ0FBQztJQUN2RSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1gscURBQWNTLENBQUM7SUFDekMsTUFBTSxDQUFDRyxhQUFhQyxlQUFlLEdBQUdiLHFEQUFjUyxDQUF5QixDQUFDO0lBRTlFLE1BQU1LLHFCQUFxQkYsV0FBVyxDQUFDTCxxQkFBcUIsR0FBRyxPQUFPO0lBRXRFLE1BQU1RLFNBQVNkLDBEQUFTQTtJQUV4QixNQUFNZSxzQkFBc0IsQ0FBQ0MsUUFBZ0JWO1FBQzNDLDJDQUEyQztRQUMzQyxJQUFJTyxvQkFBb0I7UUFDeEIsc0NBQXNDO1FBQ3RDLE1BQU1JLFlBQVliLFNBQVMsQ0FBQ0UscUJBQXFCLENBQUNZLG1CQUFtQkY7UUFDckUsaUNBQWlDO1FBQ2pDLElBQUlDLFdBQVdQLFNBQVNTLENBQUFBLE9BQVFBLE9BQU87UUFDdkMsaURBQWlEO1FBQ2pEUCxlQUFlTyxDQUFBQSxPQUFTO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ2IscUJBQXFCLEVBQUVVO1lBQU87SUFDcEU7SUFFQSxNQUFNSSx1QkFBdUIsQ0FBQ0M7UUFDNUIsTUFBTUMsbUJBQW1CaEIsdUJBQXVCZTtRQUNoRCxJQUFJQyxtQkFBbUIsS0FBS0Esb0JBQW9CakIsZ0JBQWdCO1FBQ2hFRSx3QkFBd0JlO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBRUQsV0FBVTs7b0JBQWlDO29CQUFLZjs7Ozs7OzswQkFDbkQsOERBQUNnQjtnQkFBRUQsV0FBVTs7b0JBQW9DO29CQUMxQ2xCLHVCQUF1QjtvQkFBRTtvQkFBT0Q7b0JBQWU7Ozs7Ozs7MEJBRXRELDhEQUFDSiw2RUFBWUE7Z0JBQ1hLLHNCQUFzQkE7Z0JBQ3RCb0IsVUFBVXRCLFNBQVMsQ0FBQ0UscUJBQXFCLENBQUNvQjtnQkFDMUNDLFNBQVN2QixTQUFTLENBQUNFLHFCQUFxQixDQUFDcUI7Z0JBQ3pDQyxZQUFZakIsV0FBVyxDQUFDTCxxQkFBcUI7Z0JBQzdDdUIsZUFBZXpCLFNBQVMsQ0FBQ0UscUJBQXFCLENBQUNZO2dCQUMvQ1ksU0FBU2Y7Ozs7OzswQkFFWCw4REFBQ1E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDdEIsaUVBQU1BO3dCQUFDNkIsTUFBSzt3QkFBTUQsU0FBUyxJQUFNVixxQkFBcUIsQ0FBQzs7Ozs7O2tDQUN4RCw4REFBQ2xCLGlFQUFNQTt3QkFDTDZCLE1BQU16Qix5QkFBeUJELGlCQUFpQixJQUFJLE9BQU87d0JBQzNEeUIsU0FBU3hCLHlCQUF5QkQsaUJBQWlCLElBQUksSUFBTVMsT0FBT2tCLEtBQUssV0FBaUIsT0FBTnZCLFVBQVcsSUFBTVcscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEk7R0FqRE1qQjs7UUFPV0gsc0RBQVNBOzs7S0FQcEJHO0FBbUROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9xdWl6L1F1aXpDbGllbnQudHN4PzFlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgUXVlc3Rpb25DYXJkIGZyb20gJ0AvY29tcG9uZW50cy9RdWVzdGlvbkNhcmQvUXVlc3Rpb25DYXJkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XHJcbi8vIFR5cGVzXHJcbmltcG9ydCB7IFF1ZXN0aW9uc1N0YXRlIH0gZnJvbSAnQC90eXBlcy9xdWl6JztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcXVlc3Rpb25zOiBRdWVzdGlvbnNTdGF0ZTtcclxuICB0b3RhbFF1ZXN0aW9uczogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgUXVpeiA9ICh7IHF1ZXN0aW9ucywgdG90YWxRdWVzdGlvbnMgfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uSW5kZXgsIHNldEN1cnJlbnRRdWVzdGlvbkluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3VzZXJBbnN3ZXJzLCBzZXRVc2VyQW5zd2Vyc10gPSBSZWFjdC51c2VTdGF0ZTxSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+Pih7fSk7XHJcblxyXG4gIGNvbnN0IGlzUXVlc3Rpb25BbnN3ZXJlZCA9IHVzZXJBbnN3ZXJzW2N1cnJlbnRRdWVzdGlvbkluZGV4XSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uQW5zd2VyQ2xpY2sgPSAoYW5zd2VyOiBzdHJpbmcsIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIC8vIElmIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWQsIGRvIG5vdGhpbmdcclxuICAgIGlmIChpc1F1ZXN0aW9uQW5zd2VyZWQpIHJldHVybjtcclxuICAgIC8vIENoZWNrIGFuc3dlciBhZ2FpbnN0IGNvcnJlY3QgYW5zd2VyXHJcbiAgICBjb25zdCBpc0NvcnJlY3QgPSBxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdLmNvcnJlY3RfYW5zd2VyID09PSBhbnN3ZXI7XHJcbiAgICAvLyBBZGQgc2NvcmUgaWYgYW5zd2VyIGlzIGNvcnJlY3RcclxuICAgIGlmIChpc0NvcnJlY3QpIHNldFNjb3JlKHByZXYgPT4gcHJldiArIDEpO1xyXG4gICAgLy8gU2F2ZSB0aGUgYW5zd2VyIGluIHRoZSBvYmplY3QgZm9yIHVzZXIgYW5zd2Vyc1xyXG4gICAgc2V0VXNlckFuc3dlcnMocHJldiA9PiAoeyAuLi5wcmV2LCBbY3VycmVudFF1ZXN0aW9uSW5kZXhdOiBhbnN3ZXIgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVF1ZXN0aW9uID0gKHN0ZXA6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbmV3UXVlc3Rpb25JbmRleCA9IGN1cnJlbnRRdWVzdGlvbkluZGV4ICsgc3RlcDtcclxuICAgIGlmIChuZXdRdWVzdGlvbkluZGV4IDwgMCB8fCBuZXdRdWVzdGlvbkluZGV4ID49IHRvdGFsUXVlc3Rpb25zKSByZXR1cm47XHJcbiAgICBzZXRDdXJyZW50UXVlc3Rpb25JbmRleChuZXdRdWVzdGlvbkluZGV4KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyBwLTIwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXIgJz5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdwLTggZm9udC1ib2xkIHRleHQtWzIwcHhdIGZsZXgnPuW+l+WIhjoge3Njb3JlfTwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrIGZvbnQtYm9sZCB0ZXh0LVsxNnB4XSAnPlxyXG4gICAgICAgIOeVtuWJjeesrCB7Y3VycmVudFF1ZXN0aW9uSW5kZXggKyAxfSDpoYwgIOWFsSB7dG90YWxRdWVzdGlvbnN9IOmhjFxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxRdWVzdGlvbkNhcmRcclxuICAgICAgICBjdXJyZW50UXVlc3Rpb25JbmRleD17Y3VycmVudFF1ZXN0aW9uSW5kZXh9XHJcbiAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25JbmRleF0ucXVlc3Rpb259XHJcbiAgICAgICAgYW5zd2Vycz17cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbkluZGV4XS5hbnN3ZXJzfVxyXG4gICAgICAgIHVzZXJBbnN3ZXI9e3VzZXJBbnN3ZXJzW2N1cnJlbnRRdWVzdGlvbkluZGV4XX1cclxuICAgICAgICBjb3JyZWN0QW5zd2VyPXtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdLmNvcnJlY3RfYW5zd2VyfVxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQW5zd2VyQ2xpY2t9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC01IGdhcC02Jz5cclxuICAgICAgICA8QnV0dG9uIHRleHQ9J+S4iuS4gOmhjCcgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlUXVlc3Rpb24oLTEpfSAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHRleHQ9e2N1cnJlbnRRdWVzdGlvbkluZGV4ID09PSB0b3RhbFF1ZXN0aW9ucyAtIDEgPyAn57WQ5p2fJyA6ICfkuIvkuIDpoYwnfVxyXG4gICAgICAgICAgb25DbGljaz17Y3VycmVudFF1ZXN0aW9uSW5kZXggPT09IHRvdGFsUXVlc3Rpb25zIC0gMSA/ICgpID0+IHJvdXRlci5wdXNoKGAvZmluaXNoLyR7c2NvcmV9YCkgOiAoKSA9PiBoYW5kbGVDaGFuZ2VRdWVzdGlvbigxKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJRdWVzdGlvbkNhcmQiLCJCdXR0b24iLCJRdWl6IiwicXVlc3Rpb25zIiwidG90YWxRdWVzdGlvbnMiLCJjdXJyZW50UXVlc3Rpb25JbmRleCIsInNldEN1cnJlbnRRdWVzdGlvbkluZGV4IiwidXNlU3RhdGUiLCJzY29yZSIsInNldFNjb3JlIiwidXNlckFuc3dlcnMiLCJzZXRVc2VyQW5zd2VycyIsImlzUXVlc3Rpb25BbnN3ZXJlZCIsInJvdXRlciIsImhhbmRsZU9uQW5zd2VyQ2xpY2siLCJhbnN3ZXIiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsInByZXYiLCJoYW5kbGVDaGFuZ2VRdWVzdGlvbiIsInN0ZXAiLCJuZXdRdWVzdGlvbkluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInF1ZXN0aW9uIiwiYW5zd2VycyIsInVzZXJBbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwib25DbGljayIsInRleHQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/quiz/QuizClient.tsx\n"));

/***/ })

});