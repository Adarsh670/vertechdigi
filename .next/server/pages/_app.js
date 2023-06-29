(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1003:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Tl1eP",
	"canvas": "Footer_canvas__plwZi",
	"container": "Footer_container__iN3aW",
	"footerLeft": "Footer_footerLeft__0LOiI",
	"footerCenter": "Footer_footerCenter__ga8Tw",
	"footerRight": "Footer_footerRight__rF0Vq",
	"footerFirstRight": "Footer_footerFirstRight__eT4_u",
	"footerCall": "Footer_footerCall__dtZJL",
	"footerWrite": "Footer_footerWrite__1TGRp",
	"footerVisit": "Footer_footerVisit__fzIBr",
	"footerDetails": "Footer_footerDetails__Y4ZnS",
	"copyright": "Footer_copyright__0_Me0",
	"miniMenu": "Footer_miniMenu__EfEFj"
};


/***/ }),

/***/ 6498:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Navbar_header__VcZdC",
	"container": "Navbar_container__rxFeS",
	"header_main": "Navbar_header_main__IhcBQ",
	"menu": "Navbar_menu__66zmq",
	"menu_item": "Navbar_menu_item__RBqNE",
	"logo": "Navbar_logo__E_Sw_",
	"nav_menu": "Navbar_nav_menu__8Bu1D",
	"downarrow": "Navbar_downarrow__ipe0b",
	"sub_menu": "Navbar_sub_menu__yL8gh",
	"menu_item_has_children": "Navbar_menu_item_has_children__SZ9aC",
	"open_nav_menu": "Navbar_open_nav_menu__Asu_Y",
	"open-nav-menu": "Navbar_open-nav-menu__j7HFG",
	"close_nav_menu": "Navbar_close_nav_menu__dqVRI",
	"menu_overlay": "Navbar_menu_overlay__INN86",
	"open": "Navbar_open__TzCF6",
	"plus": "Navbar_plus__3bgMz",
	"active": "Navbar_active__8GnRs"
};


/***/ }),

/***/ 2986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(6498);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: external "react-icons/io"
const io_namespaceObject = require("react-icons/io");
;// CONCATENATED MODULE: ./components/Navbar.jsx






const Navbar = ()=>{
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [submenu, setSubmenu] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime.jsx("header", {
            className: (Navbar_module_default()).header,
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (Navbar_module_default()).container,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Navbar_module_default()).header_main,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (Navbar_module_default()).logo,
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    className: (Navbar_module_default()).vlogo,
                                    src: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1685606216/Vertecdigi/Vertechlogo_yneios.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (Navbar_module_default()).open_nav_menu,
                            onClick: ()=>setOpen(!open),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineMenu, {
                                        size: 25
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: open ? `${(Navbar_module_default()).menu_overlay} ${(Navbar_module_default()).active}` : `${(Navbar_module_default()).menu_overlay}`,
                            onClick: ()=>setOpen(!open)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                            className: open ? `${(Navbar_module_default()).nav_menu} ${(Navbar_module_default()).open}` : `${(Navbar_module_default()).nav_menu}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: (Navbar_module_default()).close_nav_menu,
                                    onClick: ()=>setOpen(!open),
                                    children: /*#__PURE__*/ jsx_runtime.jsx(io_namespaceObject.IoMdClose, {
                                        size: 20
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: (Navbar_module_default()).menu,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: (Navbar_module_default()).menu_item,
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/",
                                                onClick: ()=>setOpen(!open),
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: (Navbar_module_default()).menu_item,
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/about",
                                                onClick: ()=>setOpen(!open),
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            className: `${(Navbar_module_default()).menu_item} ${(Navbar_module_default()).menu_item_has_children}`,
                                            onClick: ()=>{
                                                setSubmenu(!submenu);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/",
                                                    children: [
                                                        "Products",
                                                        /*#__PURE__*/ jsx_runtime.jsx(ai_.AiFillCaretDown, {
                                                            className: (Navbar_module_default()).downarrow
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: submenu ? `${(Navbar_module_default()).sub_menu} ${(Navbar_module_default()).active}` : `${(Navbar_module_default()).sub_menu}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: (Navbar_module_default()).menu_item,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/products/laptop",
                                                                onClick: ()=>setOpen(!open),
                                                                children: "Laptop"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: (Navbar_module_default()).menu_item,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/products/desktop",
                                                                onClick: ()=>setOpen(!open),
                                                                children: "Desktop"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: (Navbar_module_default()).menu_item,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/products/smartphones",
                                                                onClick: ()=>setOpen(!open),
                                                                children: "Smart Phones"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: (Navbar_module_default()).menu_item,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/products/network",
                                                                onClick: ()=>setOpen(!open),
                                                                children: "Network infrastructure"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: (Navbar_module_default()).menu_item,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/products/software",
                                                                onClick: ()=>setOpen(!open),
                                                                children: "Software Solutions"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: (Navbar_module_default()).menu_item,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/products/microphones",
                                                                onClick: ()=>setOpen(!open),
                                                                children: "Audio Video solutions"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: (Navbar_module_default()).menu_item,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/products/serverstorage",
                                                                onClick: ()=>setOpen(!open),
                                                                children: "Servers & Storage"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: (Navbar_module_default()).menu_item,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/products/printerscanners",
                                                                onClick: ()=>setOpen(!open),
                                                                children: "Printer & Scanners"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: (Navbar_module_default()).menu_item,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/products/accessories",
                                                                onClick: ()=>setOpen(!open),
                                                                children: "Accessories & peripherals"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            className: (Navbar_module_default()).menu_item,
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/products/ups",
                                                                onClick: ()=>setOpen(!open),
                                                                children: "UPS"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: (Navbar_module_default()).menu_item,
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/blogs",
                                                onClick: ()=>setOpen(!open),
                                                children: "Blog"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            className: (Navbar_module_default()).menu_item,
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/contact",
                                                onClick: ()=>setOpen(!open),
                                                children: "Contact Us"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(1003);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
;// CONCATENATED MODULE: ./components/Footer.jsx





const Footerr = ()=>{
    const top = ()=>{
        window.scrollTo(0, 0);
    };
    (0,external_react_.useEffect)(()=>{
        function drawing() {
            var canvas, ctx, circ, nodes, mouse, SENSITIVITY, SIBLINGS_LIMIT, DENSITY, NODES_QTY, ANCHOR_LENGTH, MOUSE_RADIUS;
            SENSITIVITY = 100;
            SIBLINGS_LIMIT = 100;
            DENSITY = 50; //don't change
            NODES_QTY = 0; //don't change
            ANCHOR_LENGTH = 550;
            MOUSE_RADIUS = 300;
            circ = 1 * Math.PI;
            nodes = [];
            canvas = document.querySelector("canvas");
            resizeWindow();
            mouse = {
                x: canvas.width / 2,
                y: canvas.height / 0
            };
            ctx = canvas.getContext("2d");
            if (!ctx) {
                alert("Ooops! Your browser does not support canvas :'(");
            }
            function Node(x, y) {
                this.anchorX = x;
                this.anchorY = y;
                this.x = Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH);
                this.y = Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH);
                this.vx = Math.random() * 2 - 1;
                this.vy = Math.random() * 2 - 1;
                this.energy = Math.random() * 10;
                this.radius = Math.random();
                this.siblings = [];
                this.brightness = 1;
            }
            Node.prototype.drawNode = function() {
                var color = "#e6e4e480";
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2 * this.radius + 0.5 * this.siblings.length / SIBLINGS_LIMIT, 0, circ);
                ctx.fillStyle = color;
                ctx.fill();
            };
            Node.prototype.drawConnections = function() {
                for(var i = 0; i < this.siblings.length; i++){
                    var color = "#e6e4e480";
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.siblings[i].x, this.siblings[i].y);
                    ctx.lineWidth = 1 - calcDistance(this, this.siblings[i]) / SENSITIVITY;
                    ctx.strokeStyle = color;
                    ctx.stroke();
                }
            };
            Node.prototype.moveNode = function() {
                this.energy -= 1;
                if (this.energy < 1) {
                    this.energy = Math.random() * 80;
                    if (this.x - this.anchorX < -ANCHOR_LENGTH) {
                        this.vx = Math.random() * 2;
                    } else if (this.x - this.anchorX > ANCHOR_LENGTH) {
                        this.vx = Math.random() * -2;
                    } else {
                        this.vx = Math.random() * 4 - 2;
                    }
                    if (this.y - this.anchorY < -ANCHOR_LENGTH) {
                        this.vy = Math.random() * 2;
                    } else if (this.y - this.anchorY > ANCHOR_LENGTH) {
                        this.vy = Math.random() * -2;
                    } else {
                        this.vy = Math.random() * 4 - 2;
                    }
                }
                this.x += this.vx * this.energy / 100;
                this.y += this.vy * this.energy / 100;
            };
            function initNodes() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                nodes = [];
                for(var i = DENSITY; i < canvas.width; i += DENSITY){
                    for(var j = DENSITY; j < canvas.height; j += DENSITY){
                        nodes.push(new Node(i, j));
                        NODES_QTY++;
                    }
                }
            }
            function calcDistance(node1, node2) {
                return Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2));
            }
            function findSiblings() {
                var node1, node2, distance;
                for(var i = 0; i < NODES_QTY; i++){
                    node1 = nodes[i];
                    node1.siblings = [];
                    for(var j = 0; j < NODES_QTY; j++){
                        node2 = nodes[j];
                        if (node1 !== node2) {
                            distance = calcDistance(node1, node2);
                            if (distance < SENSITIVITY) {
                                if (node1.siblings.length < SIBLINGS_LIMIT) {
                                    node1.siblings.push(node2);
                                } else {
                                    var node_sibling_distance = 0;
                                    var max_distance = 0;
                                    var s;
                                    for(var k = 0; k < SIBLINGS_LIMIT; k++){
                                        node_sibling_distance = calcDistance(node1, node1.siblings[k]);
                                        if (node_sibling_distance > max_distance) {
                                            max_distance = node_sibling_distance;
                                            s = k;
                                        }
                                    }
                                    if (distance < max_distance) {
                                        node1.siblings.splice(s, 1);
                                        node1.siblings.push(node2);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            function redrawScene() {
                resizeWindow();
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                findSiblings();
                var i, node, distance;
                for(i = 0; i < NODES_QTY; i++){
                    node = nodes[i];
                    distance = calcDistance({
                        x: mouse.x,
                        y: mouse.y
                    }, node);
                    if (distance < MOUSE_RADIUS) {
                        node.brightness = 0.5 - distance / MOUSE_RADIUS;
                    } else {
                        node.brightness = 0;
                    }
                }
                for(i = 0; i < NODES_QTY; i++){
                    node = nodes[i];
                    if (node.brightness) {
                        node.drawNode();
                        node.drawConnections();
                    }
                    node.moveNode();
                }
                requestAnimationFrame(redrawScene);
            }
            function initHandlers() {
                document.addEventListener("resize", resizeWindow, false);
                canvas.addEventListener("mousemove", mousemoveHandler, false);
            }
            function resizeWindow() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            function mousemoveHandler(e) {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            }
            initHandlers();
            initNodes();
            redrawScene();
        }
        drawing();
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: (Footer_module_default()).footer,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("canvas", {
                style: {
                    height: "400px"
                },
                className: (Footer_module_default()).canvas
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Footer_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Footer_module_default()).footerLeft,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: "Vertech Digicom"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    " ",
                                    "Vertech Digicom is a Gurgaon based company with a highly dedicated sales and support team. We specialize in helping enterprises across multiple industries manage and leverage IT to improve their business performance."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (Footer_module_default()).footerCenter
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Footer_module_default()).footerRight,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (Footer_module_default()).footerFirstRight,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (Footer_module_default()).footerCall,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                children: "CALL"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: (Footer_module_default()).footerDetails,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "+91-9910992507"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (Footer_module_default()).footerWrite,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                children: "WRITE"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: (Footer_module_default()).footerDetails,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "sales@vertechdigi.com"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (Footer_module_default()).footerVisit,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                children: "VISIT"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: (Footer_module_default()).footerDetails,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "941, Sector 47, Gurugram,",
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                        " Haryana 122001"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (Footer_module_default()).miniMenu,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/about",
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/products/laptop",
                                                children: "Products"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/blogs",
                                                children: "Blog"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (Footer_module_default()).copyright,
                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "\xa9VERTECH DIGICOM 2023. ALL RIGHTS RESERVED."
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Footer = (Footerr);

;// CONCATENATED MODULE: ./components/Layout.jsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(components_Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664], () => (__webpack_exec__(2986)));
module.exports = __webpack_exports__;

})();