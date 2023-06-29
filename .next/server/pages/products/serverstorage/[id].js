"use strict";
(() => {
var exports = {};
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 6754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_productdetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7872);
/* harmony import */ var _styles_productdetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_productdetail_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3559);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */ 



const product = ({ data  })=>{
    const fdata = data[0];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "VertechDigiCom - ",
                            fdata.model
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_productdetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_productdetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().productheader),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_productdetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: (_styles_productdetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().sliderImg) + " " + (_styles_productdetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().microphone),
                                src: fdata.imgone,
                                alt: fdata.model
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_productdetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: fdata.model
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Key Features"
                                        }),
                                        fdata.Articlenumber ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "Article number (SKU) \xa0:",
                                                fdata.Articlenumber
                                            ]
                                        }) : "",
                                        fdata.Wearingstyle ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "Wearing style \xa0:",
                                                fdata.Wearingstyle
                                            ]
                                        }) : "",
                                        fdata.EarCoupling ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "Ear Coupling \xa0:",
                                                fdata.EarCoupling
                                            ]
                                        }) : "",
                                        fdata.Bluetoothversion ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            children: [
                                                "Bluetooth version \xa0:",
                                                fdata.Bluetoothversion
                                            ]
                                        }) : "",
                                        fdata.avidexa ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.avidexa
                                        }) : "",
                                        fdata.avidexb ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.avidexb
                                        }) : "",
                                        fdata.avidexc ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.avidexc
                                        }) : "",
                                        fdata.avidexd ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.avidexd
                                        }) : "",
                                        fdata.avidexe ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.avidexe
                                        }) : "",
                                        fdata.interface ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.interface
                                        }) : "",
                                        fdata.interfaceone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.interfaceone
                                        }) : "",
                                        fdata.systemrequirementone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.systemrequirementone
                                        }) : "",
                                        fdata.systemrequirementtwo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.systemrequirementtwo
                                        }) : "",
                                        fdata.systemrequirementthree ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.systemrequirementthree
                                        }) : "",
                                        fdata.systemrequirementfour ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.systemrequirementfour
                                        }) : "",
                                        fdata.Supportedbrowsersone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.Supportedbrowsersone
                                        }) : "",
                                        fdata.Supportedbrowserstwo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.Supportedbrowserstwo
                                        }) : "",
                                        fdata.Supportedbrowsersthree ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.Supportedbrowsersthree
                                        }) : "",
                                        fdata.Supportedbrowsersfour ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.Supportedbrowsersfour
                                        }) : "",
                                        fdata.cpumodel ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.cpumodel
                                        }) : "",
                                        fdata.cpufrequency ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.cpufrequency
                                        }) : "",
                                        fdata.systemmemory ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.systemmemory
                                        }) : "",
                                        fdata.drivebays ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.drivebays
                                        }) : "",
                                        fdata.compatibledrivetype ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.compatibledrivetype
                                        }) : "",
                                        fdata.Portone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.Portone
                                        }) : "",
                                        fdata.Porttwo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.Porttwo
                                        }) : "",
                                        fdata.base ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.base
                                        }) : "",
                                        fdata.trustedplatformmodule ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.trustedplatformmodule
                                        }) : "",
                                        fdata.chassis ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.chassis
                                        }) : "",
                                        fdata.processor ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.processor
                                        }) : "",
                                        fdata.MemoryDIMM ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.MemoryDIMM
                                        }) : "",
                                        fdata.Memory ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.Memory
                                        }) : "",
                                        fdata.Raid ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.Raid
                                        }) : "",
                                        fdata.Harddrive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: fdata.Harddrive
                                        }) : ""
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
async function getStaticPaths() {
    const res = await fetch(`https://laptop-rd4s.onrender.com/serverstorage`);
    const data = await res.json();
    const paths = data.map((curElem)=>{
        return {
            params: {
                id: curElem.slug.toString()
            }
        };
    });
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(`https://laptop-rd4s.onrender.com/serverstorage?slug=${id}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (product);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,12], () => (__webpack_exec__(6754)));
module.exports = __webpack_exports__;

})();