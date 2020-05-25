webpackHotUpdate("static\\development\\pages\\perfil.js",{

/***/ "./pages/perfil.jsx":
/*!**************************!*\
  !*** ./pages/perfil.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layaout_layaout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layaout/layaout */ "./components/Layaout/layaout.jsx");
/* harmony import */ var _components_Dinamicos_cardCultivo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dinamicos/cardCultivo */ "./components/Dinamicos/cardCultivo.jsx");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
/* harmony import */ var _components_Dinamicos_cardPlanta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Dinamicos/cardPlanta */ "./components/Dinamicos/cardPlanta.jsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\JSP_1\\OneDrive\\Documents\\GitHub\\Grandi\\pages\\perfil.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var LoginPage = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./login */ "./pages/login.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./login */ "./pages/login.jsx")];
    },
    modules: ["./login"]
  }
});

 // context



var Perfil = function Perfil() {
  // Context de firebase
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_7__["FirebaseContext"]),
      usuario = _useContext.usuario,
      firebase = _useContext.firebase; // enrutador


  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); //State

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      cultivos = _useState[0],
      setCultivos = _useState[1]; // query de cultivos


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (usuario) {
      console.log("entra para query", usuario.uid);

      var obtenerCultivos = function obtenerCultivos() {
        firebase.db.collection('cultivos').where('creador.id', '==', usuario.uid).onSnapshot(manejarSnapShot);
      };

      obtenerCultivos();
    }
  }, [usuario]); // snapshot

  function manejarSnapShot(snapshot) {
    var cultivos = snapshot.docs.map(function (doc) {
      return _objectSpread({
        id: doc.id
      }, doc.data());
    }); // enviar el resultado de la conultaal state

    setCultivos(cultivos);
    console.log("CULTIVOS : ", cultivos);
  }

  if (usuario) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layaout_layaout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }, usuario && __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "row justify-content-md-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-md-auto usuario",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 20
      }
    }, __jsx("div", {
      className: "icono",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 24
      }
    }, __jsx("img", {
      src: "static/imgs/usuario.png",
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 28
      }
    })))), __jsx("div", {
      className: "row justify-content-md-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 14
      }
    }, __jsx("h4", {
      className: "col-md-auto planta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 16
      }
    }, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 51
      }
    }, usuario.displayName))), __jsx("div", {
      className: "row justify-content-md-center agrega",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 14
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "col-md-auto",
      href: "/agregaNuevo-cultivo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 14
      }
    }, __jsx("button", {
      type: "button",
      value: "nuevo-cultivo",
      className: "btn btn-primary ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, "Agregar Cultivo"))), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 12
      }
    }), __jsx("hr", {
      className: "linea-separada",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 18
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 51
      }
    }), __jsx("div", {
      "class": "row justify-content-md-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, __jsx("h1", {
      className: "col-md-auto planta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 18
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 53
      }
    }, "Tus Cultivos"))), __jsx("div", {
      id: "interior",
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, cultivos.map(function (element) {
      return __jsx(_components_Dinamicos_cardCultivo__WEBPACK_IMPORTED_MODULE_3__["default"] //states
      , {
        key: element.id,
        cultivo: element,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 23
        }
      });
    })))));
  } else {
    //return router.push('/login');  // enrutador 
    return __jsx(LoginPage, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Perfil);

/***/ })

})
//# sourceMappingURL=perfil.js.c1fe6214617a7c7bb741.hot-update.js.map