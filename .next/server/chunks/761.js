exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 671:
/***/ ((module) => {

// Exports
module.exports = {
	"laptopcontainer": "laptop_laptopcontainer___oMtb",
	"laptopbanner": "laptop_laptopbanner__6aaQu",
	"banner": "laptop_banner__7uG8F",
	"dellLogo": "laptop_dellLogo__2snWg",
	"sennheiserlogo": "laptop_sennheiserlogo__wkZqF",
	"banner_text": "laptop_banner_text__VkYLG",
	"bannertextcolor": "laptop_bannertextcolor__Zz41I",
	"serverbanner": "laptop_serverbanner___Ozez",
	"companylaptop": "laptop_companylaptop__RrS_m",
	"companybanner": "laptop_companybanner__OQl8x",
	"laptopmobilebanner": "laptop_laptopmobilebanner__hFJ3J",
	"logos": "laptop_logos__WzzwU",
	"smartphonebanner": "laptop_smartphonebanner__KpINF",
	"headphonebannerimg": "laptop_headphonebannerimg__joJRH"
};


/***/ }),

/***/ 8959:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "productcard_card__suFSZ",
	"cardimg": "productcard_cardimg__lIrwu",
	"cardTitle": "productcard_cardTitle__toJsk",
	"carddesc": "productcard_carddesc__XrVCT",
	"discount": "productcard_discount__FBXYf",
	"discountprice": "productcard_discountprice__HB6KD",
	"sellingprice": "productcard_sellingprice__xNraX",
	"inc": "productcard_inc__avFIv",
	"viewDetails": "productcard_viewDetails__UZR7P"
};


/***/ }),

/***/ 8012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_productcard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8959);
/* harmony import */ var _styles_productcard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_productcard_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @next/next/no-img-element */ 




const ProductCard = ({ item  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_productcard_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_productcard_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardimg),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: item.imgone,
                        alt: "productimg"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_styles_productcard_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardTitle),
                    children: item.model
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_styles_productcard_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),
                    children: item.desc
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_productcard_module_css__WEBPACK_IMPORTED_MODULE_4___default().viewDetails),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: " View Details "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineArrowRight, {})
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);


/***/ })

};
;