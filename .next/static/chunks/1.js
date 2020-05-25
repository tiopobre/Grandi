(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./hooks/useValidacion.jsx":
/*!*********************************!*\
  !*** ./hooks/useValidacion.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var useValidacion = function useValidacion(stateInicial, validar, fn) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(stateInicial),
      valores = _useState[0],
      setValores = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      errores = _useState2[0],
      setErrores = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      submitForm = _useState3[0],
      setSubmitForm = _useState3[1]; // Funcion que escucha 


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (submitForm) {
      var noErrores = Object.keys(errores).length === 0;

      if (noErrores) {
        fn(); //Funcion que se ejecuta en el componente dependiendo del formulario
      }

      setSubmitForm(false);
    }
  }, [errores]); // Funcion que se ejecuta cuando el usuraio escribe

  var handleChange = function handleChange(e) {
    //console.log('state', valores)
    setValores(_objectSpread({}, valores, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  }; // Funcion que se ejecutara con el submit


  var handleSubmit = function handleSubmit(e) {
    console.log('submit');
    e.preventDefault();
    var erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
    setSubmitForm(true);
  };

  return {
    valores: valores,
    errores: errores,
    handleChange: handleChange,
    handleSubmit: handleSubmit
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useValidacion);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
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
/* harmony import */ var _validacion_validarLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validacion/validarLogin */ "./validacion/validarLogin.jsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\JSP_1\\OneDrive\\Documents\\GitHub\\Grandi\\pages\\login.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 //validaciones


 // State Inicial

var STATE_INICIAL = {
  email: '',
  password: ''
};

var Login = function Login() {
  var _useValidacion = Object(_hooks_useValidacion__WEBPACK_IMPORTED_MODULE_5__["default"])(STATE_INICIAL, _validacion_validarLogin__WEBPACK_IMPORTED_MODULE_6__["default"], iniciasSesion),
      valores = _useValidacion.valores,
      errores = _useValidacion.errores,
      handleChange = _useValidacion.handleChange,
      handleSubmit = _useValidacion.handleSubmit;

  var email = valores.email,
      password = valores.password;

  function iniciasSesion() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function iniciasSesion$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_firebase__WEBPACK_IMPORTED_MODULE_4__["default"].login(email, password));

          case 3:
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.error('Hubo un error al autenticar', _context.t0.message); //guardarError

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 6]], Promise);
  }

  return __jsx(_components_Layaout_layaout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card card-container login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("img", {
    id: "profile-img",
    className: "profile-img-card",
    src: "static/imgs/LOGO_GRANDI.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("p", {
    id: "profile-name",
    className: "profile-name-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("form", {
    className: "form-signin",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("span", {
    id: "reauth-email",
    className: "reauth-email",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), errores.email && __jsx("p", {
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), errores.email && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 30
    }
  }, errores.password), __jsx("button", {
    className: "btn btn-lg btn-primary btn-block btn-signin",
    type: "submit",
    value: "login",
    __self: _this,
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
  var errores = {}; // validar el e-mail de usuario

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

}]);
//# sourceMappingURL=1.js.map