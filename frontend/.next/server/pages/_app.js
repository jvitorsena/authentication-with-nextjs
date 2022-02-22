"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* async function api() {
    await axios.create({baseURL: "http://localhost:5000"})
}
 */ const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "http://localhost:5000"
});
const headers = {
    'headers': {
        'Content-Type': 'application/json'
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    api,
    headers
});


/***/ }),

/***/ 823:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(915);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(757);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
async function usuarioNormalizado(userData) {
    // const token = await usuarioFirebase.getIdToken()
    return {
        id: userData.id,
        name: userData.name,
        user: userData.user,
        iat: userData.iat,
        exp: userData.exp,
        token: userData.token
    };
}
function gerenciarCookie(logado) {
    if (logado) {
        Cookies.set('admin-template-cod3r-auth', 'logado', {
            expires: 7
        });
    // console.log(Cookies.get('admin-template-cod3r-auth'))
    } else {
        Cookies.remove('admin-template-cod3r-auth');
    }
}
function AuthProvider(props) {
    const { 0: carregando , 1: setCarregando  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: usuario1 , 1: setUsuario  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: msg , 1: setMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        type: '',
        mensagem: ''
    });
    async function configurarSessao(userData) {
        if (userData === null || userData === void 0 ? void 0 : userData.user) {
            // console.log('tem usuario')
            // console.log(userData)
            const usuario = await usuarioNormalizado(userData);
            // console.log(usuario)
            setUsuario(userData);
            // gerenciarCookie(true)
            // setCarregando(false)
            return usuario;
        } else {
            setUsuario(null);
            // gerenciarCookie(false)
            // setCarregando(false)
            return null;
        }
    }
    async function userSync(user) {
        void async function() {
            if (js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('admin')) {
                const { api , headers  } = _api_api_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z;
                const cookie = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('admin');
                const res = await api.post('/users/token', {
                    token: cookie
                }, headers).then((response)=>{
                    return response.data[0];
                });
            // configurarSessao(res)
            // return () => res()
            // setUsuario(res)
            }
        }();
    }
    /* Inicio login */ async function login(usuario, senha) {
        try {
            await js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove('admin');
            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            };
            await axios__WEBPACK_IMPORTED_MODULE_3___default().create({
                baseURL: 'http://localhost:5000'
            }).post("/signin", {
                user: usuario,
                password: senha
            }, headers).then((response)=>{
                configurarSessao(response.data);
                js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set('admin', response.data.token);
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/');
            }).catch((err)=>{
                setMsg({
                    type: 'error',
                    mensagem: err.response.data
                });
            });
        } finally{
            return msg;
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        void async function() {
            if (js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('admin')) {
                const { api , headers  } = _api_api_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z;
                const cookie = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('admin');
                const res = await api.post('/users/token', {
                    token: cookie
                }, headers).then((response)=>{
                    return response.data[0];
                });
                // configurarSessao(res)
                // return () => res()
                setUsuario(res);
            }
        }();
    }, []);
    /* Fim Login */ /*     async function logout() {
            try {
                setCarregando(true)
                await firebase.auth().signOut()
                await configurarSessao(null)
            } finally {
                setCarregando(false)
            }
        } */ /* useEffect(() => {
        if (Cookies.get('admin-template-cod3r-auth')) {
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        } else {
            setCarregando(false)
        }
    }, []) */ return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            userSync,
            usuario: usuario1,
            carregando,
            login
        },
        children: props.children
    }));
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AuthContext)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(823);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__]);
_data_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_data_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__/* .AuthProvider */ .H, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    }));
}
async function getServerSideProps(context) {
    const { api , headers  } = Api;
    const parsedCookie = cookie.parse(context.req.headers.cookie);
    const Cookie = parsedCookie.admin;
    const res = await (await api.post("/validateToken", {
        token: Cookie
    }, headers)).data;
    console.log(res);
    return {
        props: {
            res
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(654));
module.exports = __webpack_exports__;

})();