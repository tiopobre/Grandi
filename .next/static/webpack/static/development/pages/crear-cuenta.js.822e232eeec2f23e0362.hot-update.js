webpackHotUpdate("static\\development\\pages\\crear-cuenta.js",{

/***/ "./pages/crear-cuenta.jsx":
/*!********************************!*\
  !*** ./pages/crear-cuenta.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layaout_layaout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layaout/layaout */ "./components/Layaout/layaout.jsx");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
/* harmony import */ var _hooks_useValidacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useValidacion */ "./hooks/useValidacion.jsx");
/* harmony import */ var _validacion_validarCrearCuenta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validacion/validarCrearCuenta */ "./validacion/validarCrearCuenta.jsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Daniel Serrano\\Documents\\Grandi\\pages\\crear-cuenta.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 //validaciones


 // State Inicial

var STATE_INICIAL_CULTIVO = {
  nombre: '',
  email: '',
  password: ''
}; //

var crearCuenta = function crearCuenta() {
  //
  var _useValidacion = Object(_hooks_useValidacion__WEBPACK_IMPORTED_MODULE_4__["default"])(STATE_INICIAL_CULTIVO, _validacion_validarCrearCuenta__WEBPACK_IMPORTED_MODULE_5__["default"], crearCuenta),
      valores = _useValidacion.valores,
      errores = _useValidacion.errores,
      handleChange = _useValidacion.handleChange,
      handleSubmit = _useValidacion.handleSubmit;

  var nombre = valores.nombre,
      email = valores.email,
      password = valores.password; // funcion que crea una cuenta con firebase 

  function crearCuenta() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function crearCuenta$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('creaando cuenta...');
            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].registrar(nombre, email, password));

          case 4:
            Router.push('/perfil');
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            console.error('Hubo un error al crear el usuario', _context.t0.message);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 7]], Promise);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layaout_layaout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 16
    }
  }, __jsx("div", {
    className: "card card-container login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 20
    }
  }, __jsx("h2", {
    className: "d-flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 20
    }
  }, "Crear Cuenta"), __jsx("div", {
    className: "d-flex flex-row bd-highligh justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, "Nombre de Usuario"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "nombre",
    placeholder: "Usuario",
    value: nombre,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }), errores.nombre && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 48
    }
  }, errores.nombre)), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, "Correo electr\xF3nico"), __jsx("input", {
    type: "e-mail",
    className: "form-control",
    name: "email",
    placeholder: "e-mail",
    value: email,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }), errores.email && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 47
    }
  }, errores.email), __jsx("small", {
    id: "emailHelp",
    className: "form-text text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, "Nunca compartiremos tu correo electr\xF3nico con nadie m\xE1s.")), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, "Contrase\xF1a"), __jsx("input", {
    type: "password",
    className: "form-control",
    name: "password",
    placeholder: "Contrase\xF1a",
    value: password,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }), errores.password && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 51
    }
  }, errores.password)), __jsx("button", {
    className: "btn btn-lg btn-primary btn-block btn-signin",
    type: "submit",
    value: "crear cuenta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }, "Crear")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (crearCuenta);

/***/ })

})
//# sourceMappingURL=crear-cuenta.js.822e232eeec2f23e0362.hot-update.js.map