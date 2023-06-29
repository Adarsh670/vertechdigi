(() => {
var exports = {};
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 9672:
/***/ ((module) => {

// Exports
module.exports = {
	"blogSection": "blogs_blogSection__AStTV",
	"blogBanner": "blogs_blogBanner__hSEXz",
	"blogs": "blogs_blogs__tDIX8",
	"blog": "blogs_blog__oeFX0",
	"blogDesc": "blogs_blogDesc__h9OjV",
	"writter": "blogs_writter__zOUNL",
	"blogTitle": "blogs_blogTitle__69m9R",
	"blogHalf": "blogs_blogHalf__O3Wwv",
	"blogImg": "blogs_blogImg__OBFtU",
	"readMoreBlog": "blogs_readMoreBlog__s9h9f",
	"blogScreen": "blogs_blogScreen__vax2k",
	"blogScreenImg": "blogs_blogScreenImg__ITSyi",
	"blogScreenDes": "blogs_blogScreenDes__rQ9RQ",
	"title": "blogs_title__lYh9u",
	"titleHeading": "blogs_titleHeading__1FFNh"
};


/***/ }),

/***/ 2654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9672);
/* harmony import */ var _styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3__);
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
                            fdata.title
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().blogScreen),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: fdata.img,
                        className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().blogScreenImg),
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().blogScreenDes),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                                children: fdata.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: fdata.minidesc
                            }),
                            fdata.automation ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fdata?.automation
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.automationdesc
                                    })
                                ]
                            }) : "",
                            fdata.access ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fdata?.access
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.accessdesc
                                    })
                                ]
                            }) : "",
                            fdata.engagement ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fdata?.engagement
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.engagementdesc
                                    })
                                ]
                            }) : "",
                            fdata.security ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fdata?.security
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.securitydesc
                                    })
                                ]
                            }) : "",
                            fdata.thepoweroftechnology ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fdata?.thepoweroftechnology
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.thepoweroftechnologydesc
                                    })
                                ]
                            }) : "",
                            fdata.leveraging ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fdata?.leveraging
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.leveragindesc
                                    })
                                ]
                            }) : "",
                            fdata.enhancingcustomer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fdata?.enhancingcustomer
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.echancingcustomerdesc
                                    })
                                ]
                            }) : "",
                            fdata.thecloudadvantage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fdata?.thecloudadvantage
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.thecloudadvantagedesc
                                    })
                                ]
                            }) : "",
                            fdata.securingyourgrowingbsiness ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fdata?.securingyourgrowingbsiness
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.securingyourgrowingbsinessdesc
                                    })
                                ]
                            }) : "",
                            fdata.Conclusiondesc ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Conclusion"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.Conclusiondesc
                                    })
                                ]
                            }) : "",
                            fdata.identify ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Identify"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.identify
                                    })
                                ]
                            }) : "",
                            fdata.cpuandgraphics ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "CPU and Graphics"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.cpuandgraphics
                                    })
                                ]
                            }) : "",
                            fdata.ramandstorage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Ram and Storage"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.ramandstorage
                                    })
                                ]
                            }) : "",
                            fdata.display ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Display"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.display
                                    })
                                ]
                            }) : "",
                            fdata.battery ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Battery"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.battery
                                    })
                                ]
                            }) : "",
                            fdata.brand ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Brand"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.brand
                                    })
                                ]
                            }) : "",
                            fdata.reviews ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Reviews"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.reviews
                                    })
                                ]
                            }) : "",
                            fdata.upgradability ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Upgradability"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.upgradability
                                    })
                                ]
                            }) : "",
                            fdata.comparingprices ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Comparing Prices"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: fdata?.comparingprices
                                    })
                                ]
                            }) : "",
                            fdata.Question1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Question: ",
                                            fdata?.Question1
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Ans:"
                                            }),
                                            " ",
                                            fdata?.ans1
                                        ]
                                    })
                                ]
                            }) : "",
                            fdata.Question2 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Question: ",
                                            fdata?.Question2
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Ans:"
                                            }),
                                            " ",
                                            fdata?.ans2
                                        ]
                                    })
                                ]
                            }) : "",
                            fdata.Question3 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Question: ",
                                            fdata?.Question3
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Ans:"
                                            }),
                                            " ",
                                            fdata?.ans3
                                        ]
                                    })
                                ]
                            }) : "",
                            fdata.Question4 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Question: ",
                                            fdata?.Question4
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Ans:"
                                            }),
                                            " ",
                                            fdata?.ans4
                                        ]
                                    })
                                ]
                            }) : "",
                            fdata.Question5 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Question: ",
                                            fdata?.Question5
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Ans:"
                                            }),
                                            " ",
                                            fdata?.ans5
                                        ]
                                    })
                                ]
                            }) : "",
                            fdata.Question6 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Question: ",
                                            fdata?.Question6
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Ans:"
                                            }),
                                            " ",
                                            fdata?.ans6
                                        ]
                                    })
                                ]
                            }) : "",
                            fdata.Question7 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Question: ",
                                            fdata?.Question7
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Ans:"
                                            }),
                                            " ",
                                            fdata?.ans7
                                        ]
                                    })
                                ]
                            }) : "",
                            fdata.Question8 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Question: ",
                                            fdata?.Question8
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Ans:"
                                            }),
                                            " ",
                                            fdata?.ans8
                                        ]
                                    })
                                ]
                            }) : "",
                            fdata.Question9 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_blogs_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleHeading),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Question: ",
                                            fdata?.Question9
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Ans:"
                                            }),
                                            " ",
                                            fdata?.ans9
                                        ]
                                    })
                                ]
                            }) : ""
                        ]
                    })
                ]
            })
        ]
    });
};
async function getStaticPaths() {
    const res = await fetch(`https://laptop-rd4s.onrender.com/blogs`);
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
    const res = await fetch(`https://laptop-rd4s.onrender.com/blogs?slug=${id}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (product);


/***/ }),

/***/ 3559:
/***/ (() => {



/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(2654)));
module.exports = __webpack_exports__;

})();