"use strict";
exports.id = 89;
exports.ids = [89];
exports.modules = {

/***/ 89:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function AuthInput(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center mt-4 ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: "pr-3 text-gray-700",
                    children: props.label
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: props.type,
                    value: props.value,
                    onChange: (e)=>{
                        var ref;
                        return (ref = props.changeValue) === null || ref === void 0 ? void 0 : ref.call(props, e.target.value);
                    },
                    placeholder: props.placeholder,
                    disabled: props.disabled,
                    className: `
                        px-4 py-1 rounded-lg bg-gray-200 mt-2
                        border focus:border-blue-500 focus:bg-white
                        focus:outline-none
                        shadow-lg
                    `
                })
            ]
        })
    }));
};


/***/ })

};
;