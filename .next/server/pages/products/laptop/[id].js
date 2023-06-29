"use strict";
(() => {
var exports = {};
exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 7053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/productdetail.module.css
var productdetail_module = __webpack_require__(7872);
var productdetail_module_default = /*#__PURE__*/__webpack_require__.n(productdetail_module);
;// CONCATENATED MODULE: external "react-responsive-carousel"
const external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");
// EXTERNAL MODULE: ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min = __webpack_require__(3559);
;// CONCATENATED MODULE: ./pages/products/laptop/[id].js
/* eslint-disable @next/next/no-img-element */ 




const product = ({ data  })=>{
    const fdata = data[0];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("title", {
                        children: [
                            "VertechDigiCom - ",
                            fdata.desc
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (productdetail_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (productdetail_module_default()).productheader,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (productdetail_module_default()).left,
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    className: (productdetail_module_default()).sliderImg,
                                    src: fdata.imgone,
                                    alt: fdata.model
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (productdetail_module_default()).right,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        children: fdata.desc
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: "Key Features"
                                            }),
                                            fdata.display ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: fdata.display
                                            }) : "",
                                            fdata.memory ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: fdata.memory
                                            }) : "",
                                            fdata.processor ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: fdata.processor
                                            }) : "",
                                            fdata.os ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: fdata.os
                                            }) : "",
                                            fdata.graphics ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: fdata.graphics
                                            }) : "",
                                            fdata.includedsoftware ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: fdata.includedsoftware
                                            }) : "",
                                            fdata.warranty ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: fdata.warranty
                                            }) : ""
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (productdetail_module_default()).specifications,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "Specifications"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        className: (productdetail_module_default()).specificationheading,
                                        children: "LAPTOP CATEGORY"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border-b-2 py-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "font-bold",
                                                        children: "Condition"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "New"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Laptop Type"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "Thin and Light"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col mt-5 lg:mt-0 col-span-2 md:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Lifestyle"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "Everyday Use | Office Use | Work"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        className: (productdetail_module_default()).specificationheading,
                                        children: "MANUFACTURER DETAILS"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border-b-2 py-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "font-bold",
                                                        children: "Brand"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: fdata.brand
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Model Number"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: fdata.modelseries
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col mt-3 lg:mt-0 col-span-2 md:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Model Series"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: fdata.modelnumber
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        className: (productdetail_module_default()).specificationheading,
                                        children: "OPERATING SYSTEM"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border-b-2 py-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "font-bold",
                                                        children: "OS Type"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        children: [
                                                            fdata.ostype,
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "OS Architecture"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "64-bit"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-col mt-3 lg:mt-0 col-span-2 md:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "OS Name & Version"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: fdata.osnameversion
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
async function getStaticPaths() {
    const res = await fetch(`https://laptop-rd4s.onrender.com/laptop`);
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
    console.log(id);
    const res = await fetch(`https://laptop-rd4s.onrender.com/laptop?slug=${id}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    };
}
/* harmony default export */ const _id_ = (product);


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
var __webpack_exports__ = __webpack_require__.X(0, [893,12], () => (__webpack_exec__(7053)));
module.exports = __webpack_exports__;

})();