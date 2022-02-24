"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/loading.d3c84f51.gif","height":200,"width":200});

/***/ }),

/***/ 354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MyModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function MyModal(props) {
    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    function closeModal() {
        next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/login');
    // setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true);
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                appear: true,
                show: isOpen,
                as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
                    as: "div",
                    className: "fixed inset-0 z-10 overflow-y-auto",
                    onClose: closeModal,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "min-h-screen px-4 text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Overlay, {
                                    className: "fixed inset-0"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block h-screen align-middle",
                                "aria-hidden": "true",
                                children: "​"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Title, {
                                            as: "h3",
                                            className: "text-lg font-medium leading-6 text-gray-900",
                                            children: props.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-gray-500",
                                                children: props.subTitle
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                className: "inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
                                                onClick: closeModal,
                                                children: props.btnTitle
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 548:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NewUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_AuthInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var _data_api_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(757);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TableModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(938);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TableModal__WEBPACK_IMPORTED_MODULE_4__]);
_TableModal__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function NewUser(props) {
    const { 0: password1 , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
    const { 0: newUser , 1: setNewUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
    const { 0: nameUser , 1: setNameUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        type: '',
        mensagem: ''
    });
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
    async function register(user, name, password) {
        const { api , headers  } = _data_api_api_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
        await api.post("/users", {
            user: user,
            name: name,
            password: password
        }, headers).then((response)=>{
            setStatus({
                type: 'success',
                mensagem: response.data.mensagem
            });
        }).catch((err)=>{
            if (err.response) {
                setError(err.response.data);
            } else {
                setStatus({
                    type: 'error',
                    mensagem: "Erro: Tente mais tarde!"
                });
            }
        });
        await status.type == 'success' ? window.location.reload() : null;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-slate-300 p-4 rounded-2xl shadow-lg flex flex-col items-center",
        children: [
            status.type == 'success' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TableModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: "Usuario cadastrado!",
                subTitle: status.mensagem,
                btnTitle: "sair"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-red-600",
                children: status.mensagem
            }),
            error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `,
                children: [
                    (0,_icons__WEBPACK_IMPORTED_MODULE_5__/* .IconeAtencao */ .wn)(),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "ml-3",
                        children: error
                    })
                ]
            }) : false,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-3xl font-bold p-5 text-gray-700",
                children: "Novo Usuario"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-end",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_AuthInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        label: "Name: ",
                        value: newUser,
                        type: "text",
                        changeValue: setNewUser,
                        disabled: false
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_AuthInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        label: "User: ",
                        value: nameUser,
                        type: "text",
                        changeValue: setNameUser,
                        disabled: false
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_AuthInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        label: "Password: ",
                        value: password1,
                        type: "password",
                        changeValue: setPassword,
                        disabled: false
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>register(nameUser, newUser, password1)
                                ,
                                onKeyPress: (e)=>console.log(e)
                                ,
                                className: `
                    bg-green-500 hover:bg-green-400
                    text-white rounded-lg px-11 py-3
                    shadow-lg mt-8
                  `,
                                children: "Registrar"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>props.setProps('welcome')
                                ,
                                onKeyPress: (e)=>console.log(e)
                                ,
                                className: `
                    bg-green-500 hover:bg-green-400
                    text-white rounded-lg px-11 py-3
                    shadow-lg mt-8 ml-6
                  `,
                                children: "Voltar"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 232:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Example)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(728);
/* harmony import */ var _data_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(757);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TableModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(938);
/* harmony import */ var _UserEditModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(207);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TableModal__WEBPACK_IMPORTED_MODULE_5__, _UserEditModal__WEBPACK_IMPORTED_MODULE_6__]);
([_TableModal__WEBPACK_IMPORTED_MODULE_5__, _UserEditModal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Example({ usersData , setProps  }) {
    const { 0: showModal , 1: setShowModal  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: modalEdit , 1: setModalEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: id1 , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
    const { 0: nameUser , 1: setNameUser  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
    const { 0: createdAt1 , 1: setCreatedAt  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
    const { 0: updatedAt1 , 1: setUpdatedAt  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
    const { 0: password1 , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
    const { api , headers  } = _data_api_api__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
    const del = async function(atr, name) {
        const url = "http://localhost:5000/users/".concat(atr);
        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        };
        const users = await axios__WEBPACK_IMPORTED_MODULE_3___default()["delete"](url, {
            data: {}
        }).then((response)=>{
        // console.log(response.data)
        });
        // setUserName(name)
        setShowModal(true);
    };
    const edit = (id, name, user, createdAt, updatedAt, password)=>{
        setId(id);
        setUser(user);
        setNameUser(name);
        setPassword(password);
        setCreatedAt(createdAt);
        setUpdatedAt(updatedAt);
        setModalEdit(true);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            showModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TableModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "Usuario deletado",
                btnTitle: "sair",
                subTitle: user1
            }) : null,
            modalEdit ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserEditModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                showModal: setModalEdit,
                id: id1,
                user: user1,
                userName: nameUser,
                createdAt: createdAt1,
                updatedAt: updatedAt1,
                password: password1
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                className: "min-w-full divide-y divide-gray-200",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                        className: "bg-gray-50",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    scope: "col",
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Name"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    scope: "col",
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Data Cria\xe7\xe3o"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    scope: "col",
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Data Altera\xe7\xe3o"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    scope: "col",
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Ativo"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                    scope: "col",
                                                    className: "relative px-6 py-3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Edit"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                        className: "bg-white divide-y divide-gray-200",
                                        children: usersData.map((person)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex items-center",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "text-sm font-medium text-gray-900",
                                                                        children: person.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: person.user
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        style: {
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-sm text-gray-900",
                                                                children: person.createdAt.substr(0, 10).split('-').join('/')
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-sm text-gray-500"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        style: {
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-sm text-gray-900",
                                                                children: person.updatedAt.substr(0, 16).split('-').join('/')
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-sm text-gray-500"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
                                                            children: person.isActive ? 'ativo' : 'desativo'
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                        className: "flex flex-row items-center px-3 py-4 whitespace-nowrap text-right text-sm font-medium",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                onClick: ()=>edit(person.id, person.name, person.user, person.createdAt, person.updatedAt, person.password)
                                                                ,
                                                                className: "text-indigo-600 hover:text-indigo-900 mr-3",
                                                                children: "Edit"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "text-indigo-600 hover:text-indigo-900",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    onClick: ()=>del(person.id, person.name)
                                                                    ,
                                                                    children: _icons__WEBPACK_IMPORTED_MODULE_1__/* .TrashIcon */ .XH
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, person.id)
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-white w-full flex flex-col items-end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setProps('welcome')
                                    ,
                                    onKeyPress: (e)=>console.log(e)
                                    ,
                                    className: `
                                    bg-green-600 hover:bg-green-500
                                    text-white rounded-lg px-11 py-3 ml-5
                                    shadow-lg mr-9 mb-4 mt-6
                                    `,
                                    children: "Voltar"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MyModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function MyModal(props) {
    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    function closeModal() {
        window.location.reload();
    // setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true);
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
            appear: true,
            show: isOpen,
            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
                as: "div",
                className: "fixed inset-0 z-10 overflow-y-auto",
                onClose: closeModal,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "min-h-screen px-4 text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Overlay, {
                                className: "fixed inset-0"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "inline-block h-screen align-middle",
                            "aria-hidden": "true",
                            children: "​"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Title, {
                                        as: "h3",
                                        className: "text-lg font-medium leading-6 text-gray-900",
                                        children: props.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm text-gray-500",
                                            children: props.subTitle
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-4 flex flex-col items-end",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
                                            onClick: closeModal,
                                            children: props.btnTitle
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MyModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_AuthInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89);
/* harmony import */ var _data_api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(757);
/* harmony import */ var _components_icons_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function MyModal(props) {
    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: id , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.user);
    const { 0: nameUser , 1: setNameUser  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.userName);
    const { 0: createdAt , 1: setCreatedAt  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { 0: updatedAt , 1: setUpdatedAt  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { 0: password1 , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    function closeModal() {
        // window.location.reload()
        // setIsOpen(false)
        props.showModal(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    console.log(props.id);
    const put = async (user, name, password)=>{
        const { api , headers  } = _data_api_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;
        const url = `/users/${props.id}`;
        await api.put(url, {
            user: user,
            name: name,
            password: password
        }, headers).then((response)=>{
            window.location.reload();
        }).catch((err)=>setError(err.response.data)
        );
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
            appear: true,
            show: isOpen,
            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
                as: "div",
                className: "fixed inset-0 z-10 overflow-y-auto",
                onClose: closeModal,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "min-h-screen px-4 text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Overlay, {
                                className: "fixed inset-0"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "inline-block h-screen align-middle",
                            "aria-hidden": "true",
                            children: "​"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Title, {
                                        as: "h3",
                                        className: "text-lg font-medium leading-6 text-gray-900"
                                    }),
                                    error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `,
                                        children: [
                                            (0,_components_icons_index__WEBPACK_IMPORTED_MODULE_5__/* .IconeAtencao */ .wn)(),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "ml-3",
                                                children: error
                                            })
                                        ]
                                    }) : false,
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-2 text-sm text-gray-500 flex flex-col items-end pr-10",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_AuthInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                label: "Id:",
                                                changeValue: setId,
                                                value: id,
                                                placeholder: props.id,
                                                type: "text",
                                                disabled: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_AuthInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                label: "Usuario:",
                                                changeValue: setUser,
                                                value: user1,
                                                placeholder: props.user,
                                                type: "text",
                                                disabled: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_AuthInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                label: "Nome:",
                                                changeValue: setNameUser,
                                                value: nameUser,
                                                placeholder: props.userName,
                                                type: "text",
                                                disabled: false
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_AuthInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                label: "Nova senha:",
                                                changeValue: setPassword,
                                                value: password1,
                                                type: "password",
                                                disabled: false,
                                                placeholder: "**********"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_AuthInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                label: "Created at:",
                                                changeValue: setCreatedAt,
                                                value: createdAt,
                                                placeholder: props.createdAt.substr(0, 16).split('-').join('/'),
                                                type: "text",
                                                disabled: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_auth_AuthInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                label: "Updated at:",
                                                changeValue: setUpdatedAt,
                                                value: updatedAt,
                                                placeholder: props.updatedAt.substr(0, 16).split('-').join('/'),
                                                type: "text",
                                                disabled: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-4 flex flex-col items-end",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "mr-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
                                                    // onClick={closeModal}
                                                    onClick: ()=>put(user1, nameUser, password1)
                                                    ,
                                                    children: "Salvar"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
                                                    // onClick={closeModal}
                                                    onClick: ()=>closeModal()
                                                    ,
                                                    children: "Voltar"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 298:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Welcome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Welcome({ userName , setProps  }) {
    function logout() {
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove('admin');
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-slate-200 p-4 rounded-2xl shadow-lg flex flex-col items-end",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: "text-3xl font-bold p-5 text-gray-700",
                children: [
                    "Bem vindo ao meu sistema !",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-base",
                        children: [
                            "Usuario: ",
                            userName
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setProps('register')
                        ,
                        onKeyPress: (e)=>console.log(e)
                        ,
                        className: `
              bg-green-500 hover:bg-green-400
              text-white rounded-lg px-6 py-3 ml-5
              shadow-lg
            `,
                        children: "Novo Usuario"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>logout()
                        ,
                        onKeyPress: (e)=>console.log(e)
                        ,
                        className: `
              bg-red-600 hover:bg-red-500
              text-white rounded-lg px-11 py-3 ml-5
              shadow-lg
            `,
                        children: "Sair"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>setProps('table')
                    ,
                    onKeyPress: (e)=>console.log(e)
                    ,
                    className: `
              bg-green-500 hover:bg-green-400
              text-white rounded-lg px-7 py-3 mt-4
              shadow-lg
            `,
                    children: "Usuarios cadastrados"
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ForcarAutenticacao)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var _public_images_loading_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(511);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(354);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Modal__WEBPACK_IMPORTED_MODULE_3__]);
_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ForcarAutenticacao(props) {
    function renderizarConteudo() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: props.children
        }));
    }
    function renderizarCarregando() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `
                flex justify-center items-center h-screen
            `,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: _public_images_loading_gif__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
            })
        }));
    }
    function error() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Deslogado"
            })
        }));
    }
    if (props.validation) {
        return renderizarConteudo();
    } else if (!props.validation) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: "Falha ao acessar esta p\xe1gina !",
                subTitle: "Para ter acesso ao sistema, por favor fa\xe7a o login",
                btnTitle: "Fazer login"
            })
        }));
    } else {
        return null;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wn": () => (/* binding */ IconeAtencao),
/* harmony export */   "XH": () => (/* binding */ TrashIcon)
/* harmony export */ });
/* unused harmony exports IconeCasa, IconeAjustes, IconeSino, IconeSair, IconeSol, IconeLua */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// Pra mais icones acessar... https://heroicons.com/
const IconeCasa = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    })
});
const IconeAjustes = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    })
});
const IconeSino = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    })
});
const IconeSair = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    })
});
const IconeSol = (tamanho = 6)=>/*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: `h-${tamanho} w-${tamanho}`,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        })
    })
;
const IconeLua = (tamanho = 6)=>/*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: `h-${tamanho} w-${tamanho}`,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        })
    })
;
const IconeAtencao = (tamanho = 6)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: `h-${tamanho} w-${tamanho}`,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        })
    })
;
const TrashIcon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
});


/***/ }),

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

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_auth_ForcarAutenticacao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(122);
/* harmony import */ var _data_api_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(757);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NewUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(548);
/* harmony import */ var _components_Welcome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(298);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(232);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_auth_ForcarAutenticacao__WEBPACK_IMPORTED_MODULE_1__, _components_NewUser__WEBPACK_IMPORTED_MODULE_5__, _components_Welcome__WEBPACK_IMPORTED_MODULE_6__, _components_Table__WEBPACK_IMPORTED_MODULE_7__]);
([_components_auth_ForcarAutenticacao__WEBPACK_IMPORTED_MODULE_1__, _components_NewUser__WEBPACK_IMPORTED_MODULE_5__, _components_Welcome__WEBPACK_IMPORTED_MODULE_6__, _components_Table__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Home(props) {
    console.log(props.getAllUsers);
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('welcome');
    const user = props.userLoged[0];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_ForcarAutenticacao__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            validation: props.validationToken,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500",
                children: [
                    visible == 'welcome' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Welcome__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        userName: user === null || user === void 0 ? void 0 : user.name,
                        setProps: setVisible
                    }) : null,
                    visible == 'register' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NewUser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        setProps: setVisible
                    }) : null,
                    visible == 'table' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Table__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        usersData: props.getAllUsers,
                        setProps: setVisible
                    }) : null
                ]
            })
        })
    }));
};
async function getServerSideProps(context) {
    const { api , headers  } = _data_api_api_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
    var _cookie;
    const parsedCookie = cookie__WEBPACK_IMPORTED_MODULE_3__.parse((_cookie = context.req.headers.cookie) !== null && _cookie !== void 0 ? _cookie : '');
    var _admin;
    const Cookie = (_admin = parsedCookie.admin) !== null && _admin !== void 0 ? _admin : '';
    const validationToken = await (await api.post("/validateToken", {
        token: Cookie
    }, headers)).data;
    const userLoged = await (await api.post('/users/token', {
        token: Cookie
    }, headers)).data;
    const getAllUsers = await (await api.get('/users')).data;
    return {
        props: {
            validationToken,
            userLoged,
            getAllUsers
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

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

/***/ 185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [675,89], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();