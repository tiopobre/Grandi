webpackHotUpdate("static\\development\\pages\\nuevo-cultivo.js",{

/***/ "./pages/nuevo-cultivo.jsx":
/*!*********************************!*\
  !*** ./pages/nuevo-cultivo.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layaout_layaout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layaout/layaout */ "./components/Layaout/layaout.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
/* harmony import */ var _hooks_useValidacion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useValidacion */ "./hooks/useValidacion.jsx");
/* harmony import */ var _validacion_validarNuevoCultivo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validacion/validarNuevoCultivo */ "./validacion/validarNuevoCultivo.jsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Daniel Serrano\\Documents\\Grandi\\pages\\nuevo-cultivo.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // para añadir imagenes

var uniqid = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js"); //validaciones




 // context
// State Inicial

var STATE_INICIAL = {
  planta: '',
  alias: '',
  fechaIni: '',
  descripcion: '',
  img: '',
  urlImg: 'll',
  votos: 0
};

var nuevoCultivo = function nuevoCultivo() {
  var _useValidacion = Object(_hooks_useValidacion__WEBPACK_IMPORTED_MODULE_5__["default"])(STATE_INICIAL, _validacion_validarNuevoCultivo__WEBPACK_IMPORTED_MODULE_6__["default"], agregarCultivo),
      valores = _useValidacion.valores,
      errores = _useValidacion.errores,
      handleChange = _useValidacion.handleChange,
      handleSubmit = _useValidacion.handleSubmit;

  var planta = valores.planta,
      alias = valores.alias,
      fechaIni = valores.fechaIni,
      img = valores.img,
      urlImg = valores.urlImg,
      descripcion = valores.descripcion; // State Imagenes

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      imagen = _useState[0],
      setImagen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      urlImagen = _useState2[0],
      setUrlImagen = _useState2[1]; // context con las crud de firebase


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_firebase__WEBPACK_IMPORTED_MODULE_4__["FirebaseContext"]),
      usuario = _useContext.usuario,
      firebase = _useContext.firebase; // Imagenes


  function cambioImagen(e) {
    if (e.target.files[0]) {
      setImagen(e.target.files[0]);
    } // console.log(uniqid.process());
    //crear id imagen


    setUrlImagen(uniqid('cultivo'));
    console.log('id', urlImagen);
  }

  var handleURL = function handleURL() {
    console.log("entra handle url");
    firebase.storage.ref("test_imagenes").child(uniqid('cultivo')).getDownloadURL().then(function (url) {
      console.log("url", url);
      setUrlImagen(url);
    });
  }; // agregar a firestore y storage


  function agregarCultivo() {
    var cultivo;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function agregarCultivo$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('agregando cultivo...');

            if (usuario) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login'));

          case 3:
            firebase.storage.ref('test_imagenes').child(urlImagen).put(imagen);
            handleURL();
            console.log("Usuario", usuario.id); // Crear cultivo

            cultivo = {
              planta: planta,
              alias: alias,
              fechaIni: fechaIni,
              descripcion: descripcion,
              urlImg: urlImagen,
              comentarios: [],
              votos: 0,
              creador: {
                id: usuario.uid,
                nombre: usuario.displayName
              }
            }; //insertar en la base de datos

            firebase.db.collection('cultivos').add(cultivo);
            return _context.abrupt("return", next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/perfil'));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layaout_layaout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "contenedor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "d-flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, "Nuevo Cultivo"), __jsx("div", {
    className: "d-flex flex-row bd-highligh justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, "Planta"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "planta",
    placeholder: "Tipo de planta",
    value: planta,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }), errores.planta && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 48
    }
  }, errores.planta)), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }, "Alias"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "alias",
    placeholder: "alias de tu planta",
    value: alias,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }), __jsx("small", {
    className: "form-text text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, "Dale un alias a tu cultivo.")), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, "Sube una Imagen"), __jsx("input", {
    type: "file",
    onChange: cambioImagen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }, "Fecha Inicial"), __jsx("input", {
    type: "date",
    className: "form-control",
    name: "fechaIni",
    value: fechaIni,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 29
    }
  }), errores.fechaIni && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 50
    }
  }, errores.fechaIni)), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 29
    }
  }, "Descripcion Cultivo"), __jsx("input", {
    className: "form-control",
    name: "descripcion",
    value: descripcion,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  })), __jsx("button", {
    type: "submit",
    value: "crear cultivo",
    className: "btn btn-lg btn-primary btn-block btn-signin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 25
    }
  }, "Agregar Cultivo"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (nuevoCultivo);

/***/ })

})
//# sourceMappingURL=nuevo-cultivo.js.9ec24edb9aaa0bd1519e.hot-update.js.map