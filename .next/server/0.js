exports.ids = [0];
exports.modules = {

/***/ "./hooks/useValidacion.jsx":
/*!*********************************!*\
  !*** ./hooks/useValidacion.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useValidacion = (stateInicial, validar, fn) => {
  const {
    0: valores,
    1: setValores
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(stateInicial);
  const {
    0: errores,
    1: setErrores
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: submitForm,
    1: setSubmitForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Funcion que escucha 

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;

      if (noErrores) {
        fn(); //Funcion que se ejecuta en el componente dependiendo del formulario
      }

      setSubmitForm(false);
    }
  }, [errores]); // Funcion que se ejecuta cuando el usuraio escribe

  const handleChange = e => {
    //console.log('state', valores)
    setValores(_objectSpread({}, valores, {
      [e.target.name]: e.target.value
    }));
  }; // Funcion que se ejecutara con el submit


  const handleSubmit = e => {
    console.log('submit');
    e.preventDefault();
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
    setSubmitForm(true);
  };

  return {
    valores,
    errores,
    handleChange,
    handleSubmit
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useValidacion);

/***/ }),

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layaout_layaout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layaout/layaout */ "./components/Layaout/layaout.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ "./firebase/index.js");
/* harmony import */ var _hooks_useValidacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useValidacion */ "./hooks/useValidacion.jsx");
/* harmony import */ var _validacion_validarLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validacion/validarLogin */ "./validacion/validarLogin.jsx");
var _jsxFileName = "C:\\Users\\Daniel Serrano\\Documents\\Grandi\\pages\\login.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //validaciones


 // State Inicial

const STATE_INICIAL = {
  email: '',
  password: ''
};

const Login = () => {
  const {
    valores,
    errores,
    handleChange,
    handleSubmit
  } = Object(_hooks_useValidacion__WEBPACK_IMPORTED_MODULE_4__["default"])(STATE_INICIAL, _validacion_validarLogin__WEBPACK_IMPORTED_MODULE_5__["default"], iniciasSesion);
  const {
    email,
    password
  } = valores;

  async function iniciasSesion() {
    try {
      await _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].login(email, password);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    } catch (error) {
      console.error('Hubo un error al autenticar', error.message); //guardarError
    }
  }

  return __jsx(_components_Layaout_layaout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card card-container login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("img", {
    id: "profile-img",
    className: "profile-img-card",
    src: "static/imgs/LOGO_GRANDI.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("p", {
    id: "profile-name",
    className: "profile-name-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("form", {
    className: "form-signin",
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("span", {
    id: "reauth-email",
    className: "reauth-email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("input", {
    name: "email",
    type: "email",
    id: "inputEmail",
    className: "form-control",
    placeholder: "e-mail",
    required: true,
    autoFocus: true,
    value: email,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), errores.email && __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 31
    }
  }, errores.email), __jsx("input", {
    name: "password",
    type: "password",
    id: "inputPassword",
    className: "form-control",
    placeholder: "Contrase\xF1a",
    required: true,
    autoFocus: true,
    value: password,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), errores.email && __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 30
    }
  }, errores.password), __jsx("button", {
    className: "btn btn-lg btn-primary btn-block btn-signin",
    type: "submit",
    value: "login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Ingresar")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./validacion/validarLogin.jsx":
/*!*************************************!*\
  !*** ./validacion/validarLogin.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validarCrearCuenta; });
function validarCrearCuenta(valores) {
  let errores = {}; // validar el e-mail de usuario

  if (!valores.email) {
    errores.email = "El e-mail es obligtorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "El e-mail no es valido";
  } // validar el password


  if (!valores.password) {
    errores.password = "El Password es obligtorio";
  }

  return errores;
}

/***/ })

};;
//# sourceMappingURL=0.js.map