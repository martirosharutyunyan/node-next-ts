module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //types



let Container1 = () => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();

  const getUsers = async () => {
    let postToBack = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/getUsers");
    setarr(postToBack.data);
  };

  const {
    0: state,
    1: setstate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: "Martiros",
    surname: "Harutunyan",
    email: "harutunyan.martiros@mail.ru",
    password: "hhs13516",
    confirmPassword: "hhs13516",
    loginEmail: "harutunyan.martiros@mail.ru",
    loginPassword: "hhs13516",
    verificationCode: ""
  });
  const {
    0: arr,
    1: setarr
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: load,
    1: setload
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: counter,
    1: setcounter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: message,
    1: setmessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: token,
    1: settoken
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: userId,
    1: setuserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: verify,
    1: setverify
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: code,
    1: setcode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const autoLogin = async () => {
    if (localStorage.getItem("secret") !== null) {
      let postToBack = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/autoLogin", {
        token: localStorage.getItem("secret")
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    autoLogin();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getUsers();
  }, [load]);

  const changeValue = e => {
    // setstate((prev:objectType):objectType=>{
    //     return {
    //         ...prev,
    //         [e.target.id]:e.target.value
    //     }
    // })
    // parzel te inchi chi ashxatum es verevi dzevy
    setstate(_objectSpread(_objectSpread({}, state), {}, {
      [e.target.id]: e.target.value
    }));
  };

  const clear = () => {
    setstate({
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
      loginEmail: "harutunyan.martiros@mail.ru",
      loginPassword: "hhs13516",
      verificationCode: ""
    });
    setverify(true);
  };

  const deleteUser = async elem => {
    await setload(false);
    let postToBack = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/deleteUser", elem);
    await setload(true);
    setmessage(postToBack.data.message);
    setTimeout(() => {
      setmessage("");
    }, 2000);
  };

  const Registration = async () => {
    try {
      await setload(false);
      let postToBack = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/auth/registr", {
        name: state.name,
        surname: state.surname,
        email: state.email,
        password: state.password
      });
      await setload(true);

      if (postToBack.data.message === 'already exists') {
        setmessage(postToBack.data.message);
        setTimeout(() => {
          setmessage("");
        }, 2000);
      } else {
        setverify(false);
        setcode(postToBack.data.code);
      }

      console.log(postToBack.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loginPost = async () => {
    await setload(false);
    let postToBack1 = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/login', {
      loginEmail: state.loginEmail,
      loginPassword: state.loginPassword
    });
    let postToBack = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/auth/login", {
      loginEmail: state.loginEmail,
      loginPassword: state.loginPassword
    });
    console.log(postToBack.data);

    if (postToBack.data.message === "password is incorect try again") {
      console.log("password is incorect try again");
    } else if (postToBack.data.message === "sorry your login or email are not right") {
      console.log("sorry your login or email are not right");
    } else {
      localStorage.setItem("secret", JSON.stringify({
        token: postToBack.data.token,
        userId: postToBack.data.userEmail._id
      }, null, 2)); // await history.push(`/user/${postToBack.data.userEmail.name}`);
    }

    await setload(true);
    setTimeout(() => {
      setmessage("");
    }, 1000);
  };

  const verificate = async () => {
    setload(false);
    let postToBack = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/auth/save", {
      name: state.name,
      surname: state.surname,
      email: state.email,
      password: state.password,
      verificationCode: state.verificationCode,
      code
    });

    if (postToBack.data.message === 'User saved') {
      setmessage(postToBack.data.message);
      setcounter(true);
      setverify(!verify);
      setstate(_objectSpread(_objectSpread({}, state), {}, {
        verificationCode: ''
      }));
    } else {
      setmessage(postToBack.data.message);
      setTimeout(() => {
        setmessage("");
      }, 2000);
    }

    setload(true);
  };

  if (!load) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "loaderReact",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "spinner-border text-primary",
          style: {
            width: "500px",
            height: "500px"
          },
          role: "status",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: "sr-only",
            children: "Loading..."
          })
        })
      })
    });
  }

  const verification = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
      type: "text",
      onChange: changeValue,
      value: state.verificationCode,
      id: "verificationCode"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
      onClick: verificate,
      children: "click for verification"
    })]
  });

  const registracia = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "registracia",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      style: {
        fontSize: "2vw"
      },
      children: "Registracia"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
      onChange: changeValue,
      value: state.name,
      placeholder: "name",
      type: "text",
      id: "name"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
      onChange: changeValue,
      value: state.surname,
      placeholder: "surname",
      type: "text",
      id: "surname"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
      onChange: changeValue,
      value: state.email,
      placeholder: "email",
      type: "text",
      id: "email"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
      onChange: changeValue,
      value: state.password,
      placeholder: "password",
      type: "password",
      id: "password"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
      onChange: changeValue,
      value: state.confirmPassword,
      placeholder: "confirm Password",
      type: "password",
      id: "confirmPassword"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
      onClick: Registration,
      disabled: state.name.trim() && state.surname.trim() && state.email.trim() && state.password.trim() && state.confirmPassword.trim() && state.confirmPassword === state.password && state.password.length >= 8 && state.confirmPassword.length >= 8 ? false : true,
      children: "click"
    }), verify ? null : verification, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
      onClick: clear,
      children: "clear"
    })]
  });

  const login = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "login",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      style: {
        fontSize: "2vw"
      },
      children: "Login"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
      value: state.loginEmail,
      onChange: changeValue,
      placeholder: "email",
      id: "loginEmail",
      type: "text"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
      value: state.loginPassword,
      onChange: changeValue,
      placeholder: "password",
      id: "loginPassword",
      type: "text"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
      onClick: loginPost,
      children: "click"
    })]
  });

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "div",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        onClick: () => setcounter(!counter),
        children: counter ? "go to registracia" : "go to login"
      }), counter ? login : registracia, arr.map((elem, i) => {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            children: elem.email
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            children: elem.password
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            onClick: deleteUser.bind(null, elem),
            children: "delete"
          })]
        }, elem.id);
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: message
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Container1 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Container1));

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDb250YWluZXIxIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJnZXRVc2VycyIsInBvc3RUb0JhY2siLCJheGlvcyIsInBvc3QiLCJzZXRhcnIiLCJkYXRhIiwic3RhdGUiLCJzZXRzdGF0ZSIsInVzZVN0YXRlIiwibmFtZSIsInN1cm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwibG9naW5FbWFpbCIsImxvZ2luUGFzc3dvcmQiLCJ2ZXJpZmljYXRpb25Db2RlIiwiYXJyIiwibG9hZCIsInNldGxvYWQiLCJjb3VudGVyIiwic2V0Y291bnRlciIsIm1lc3NhZ2UiLCJzZXRtZXNzYWdlIiwidG9rZW4iLCJzZXR0b2tlbiIsInVzZXJJZCIsInNldHVzZXJJZCIsInZlcmlmeSIsInNldHZlcmlmeSIsImNvZGUiLCJzZXRjb2RlIiwiYXV0b0xvZ2luIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsImNoYW5nZVZhbHVlIiwiZSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJjbGVhciIsImRlbGV0ZVVzZXIiLCJlbGVtIiwic2V0VGltZW91dCIsIlJlZ2lzdHJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJsb2dpblBvc3QiLCJwb3N0VG9CYWNrMSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidXNlckVtYWlsIiwiX2lkIiwidmVyaWZpY2F0ZSIsIndpZHRoIiwiaGVpZ2h0IiwidmVyaWZpY2F0aW9uIiwicmVnaXN0cmFjaWEiLCJmb250U2l6ZSIsInRyaW0iLCJsZW5ndGgiLCJsb2dpbiIsIm1hcCIsImkiLCJiaW5kIiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7Q0FFQTs7QUFPQTs7QUFDQSxJQUFJQSxVQUFjLEdBQUcsTUFBTTtBQUN2QixRQUFNQyxPQUFPLEdBQUdDLG1FQUFVLEVBQTFCOztBQUNBLFFBQU1DLFFBQVEsR0FBRyxZQUEyQjtBQUN4QyxRQUFJQyxVQUFxQixHQUFHLE1BQU1DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxXQUFYLENBQWxDO0FBQ0FDLFVBQU0sQ0FBQ0gsVUFBVSxDQUFDSSxJQUFaLENBQU47QUFDSCxHQUhEOztBQUtBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMs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bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgbWVtbywgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuLy90eXBlc1xyXG5pbXBvcnQge1xyXG4gICAgaW5wdXQsXHJcbiAgICBheGlvc1R5cGUsXHJcbiAgICB1c2VyRGF0YVR5cGUsXHJcbiAgICBzdGF0ZVR5cGUsXHJcbn0gZnJvbSBcIi4uL3R5cGVzL3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxubGV0IENvbnRhaW5lcjE6IEZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICAgIGNvbnN0IGdldFVzZXJzID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgIGxldCBwb3N0VG9CYWNrOiBheGlvc1R5cGUgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2dldFVzZXJzXCIpO1xyXG4gICAgICAgIHNldGFycihwb3N0VG9CYWNrLmRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlPHN0YXRlVHlwZT4oe1xyXG4gICAgICAgIG5hbWU6IFwiTWFydGlyb3NcIixcclxuICAgICAgICBzdXJuYW1lOiBcIkhhcnV0dW55YW5cIixcclxuICAgICAgICBlbWFpbDogXCJoYXJ1dHVueWFuLm1hcnRpcm9zQG1haWwucnVcIixcclxuICAgICAgICBwYXNzd29yZDogXCJoaHMxMzUxNlwiLFxyXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJoaHMxMzUxNlwiLFxyXG4gICAgICAgIGxvZ2luRW1haWw6IFwiaGFydXR1bnlhbi5tYXJ0aXJvc0BtYWlsLnJ1XCIsXHJcbiAgICAgICAgbG9naW5QYXNzd29yZDogXCJoaHMxMzUxNlwiLFxyXG4gICAgICAgIHZlcmlmaWNhdGlvbkNvZGU6IFwiXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFthcnIsIHNldGFycl0gPSB1c2VTdGF0ZTx1c2VyRGF0YVR5cGVbXT4oW10pO1xyXG4gICAgY29uc3QgW2xvYWQsIHNldGxvYWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBjb25zdCBbY291bnRlciwgc2V0Y291bnRlcl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRtZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBbdG9rZW4sIHNldHRva2VuXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBbdXNlcklkLCBzZXR1c2VySWRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICAgIGNvbnN0IFt2ZXJpZnksIHNldHZlcmlmeV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIGNvbnN0IFtjb2RlLCBzZXRjb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgYXV0b0xvZ2luID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlY3JldFwiKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgcG9zdFRvQmFjayA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXV0b0xvZ2luXCIsIHtcclxuICAgICAgICAgICAgICAgIHRva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlY3JldFwiKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXV0b0xvZ2luKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICB9LCBbbG9hZF0pO1xyXG4gICAgY29uc3QgY2hhbmdlVmFsdWUgPSAoZTogaW5wdXQpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBzZXRzdGF0ZSgocHJldjpvYmplY3RUeXBlKTpvYmplY3RUeXBlPT57XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIC8vICAgICAgICAgW2UudGFyZ2V0LmlkXTplLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyBwYXJ6ZWwgdGUgaW5jaGkgY2hpIGFzaHhhdHVtIGVzIHZlcmV2aSBkemV2eVxyXG4gICAgICAgIHNldHN0YXRlKHsgLi4uc3RhdGUsIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNsZWFyID0gKCk6dm9pZCA9PiB7XHJcbiAgICAgICAgc2V0c3RhdGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBzdXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgbG9naW5FbWFpbDogXCJoYXJ1dHVueWFuLm1hcnRpcm9zQG1haWwucnVcIixcclxuICAgICAgICAgICAgbG9naW5QYXNzd29yZDogXCJoaHMxMzUxNlwiLFxyXG4gICAgICAgICAgICB2ZXJpZmljYXRpb25Db2RlOiBcIlwiLCAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0dmVyaWZ5KHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKGVsZW06IHVzZXJEYXRhVHlwZSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgIGF3YWl0IHNldGxvYWQoZmFsc2UpO1xyXG4gICAgICAgIGxldCBwb3N0VG9CYWNrOiBheGlvc1R5cGUgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2RlbGV0ZVVzZXJcIiwgZWxlbSk7XHJcbiAgICAgICAgYXdhaXQgc2V0bG9hZCh0cnVlKTtcclxuICAgICAgICBzZXRtZXNzYWdlKHBvc3RUb0JhY2suZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0bWVzc2FnZShcIlwiKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgUmVnaXN0cmF0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldGxvYWQoZmFsc2UpO1xyXG4gICAgICAgICAgICBsZXQgcG9zdFRvQmFjazogYXhpb3NUeXBlID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvYXV0aC9yZWdpc3RyXCIsIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHN0YXRlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBzdXJuYW1lOiBzdGF0ZS5zdXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHN0YXRlLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHN0YXRlLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXdhaXQgc2V0bG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgaWYocG9zdFRvQmFjay5kYXRhLm1lc3NhZ2UgPT09ICdhbHJlYWR5IGV4aXN0cycpe1xyXG4gICAgICAgICAgICAgICAgc2V0bWVzc2FnZShwb3N0VG9CYWNrLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRtZXNzYWdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXR2ZXJpZnkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0Y29kZShwb3N0VG9CYWNrLmRhdGEuY29kZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0VG9CYWNrLmRhdGEpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvZ2luUG9zdCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgICAgICBhd2FpdCBzZXRsb2FkKGZhbHNlKTtcclxuICAgICAgICBsZXQgcG9zdFRvQmFjazE6QXhpb3NSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9sb2dpbicse1xyXG4gICAgICAgICAgICBsb2dpbkVtYWlsOiBzdGF0ZS5sb2dpbkVtYWlsLFxyXG4gICAgICAgICAgICBsb2dpblBhc3N3b3JkOiBzdGF0ZS5sb2dpblBhc3N3b3JkLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHBvc3RUb0JhY2sgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9hdXRoL2xvZ2luXCIsIHtcclxuICAgICAgICAgICAgbG9naW5FbWFpbDogc3RhdGUubG9naW5FbWFpbCxcclxuICAgICAgICAgICAgbG9naW5QYXNzd29yZDogc3RhdGUubG9naW5QYXNzd29yZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwb3N0VG9CYWNrLmRhdGEpXHJcbiAgICAgICAgaWYgKHBvc3RUb0JhY2suZGF0YS5tZXNzYWdlID09PSBcInBhc3N3b3JkIGlzIGluY29yZWN0IHRyeSBhZ2FpblwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQgaXMgaW5jb3JlY3QgdHJ5IGFnYWluXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIHBvc3RUb0JhY2suZGF0YS5tZXNzYWdlID09PVxyXG4gICAgICAgICAgICBcInNvcnJ5IHlvdXIgbG9naW4gb3IgZW1haWwgYXJlIG5vdCByaWdodFwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29ycnkgeW91ciBsb2dpbiBvciBlbWFpbCBhcmUgbm90IHJpZ2h0XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICAgICAgXCJzZWNyZXRcIixcclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHBvc3RUb0JhY2suZGF0YS50b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBwb3N0VG9CYWNrLmRhdGEudXNlckVtYWlsLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vIGF3YWl0IGhpc3RvcnkucHVzaChgL3VzZXIvJHtwb3N0VG9CYWNrLmRhdGEudXNlckVtYWlsLm5hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHNldGxvYWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldG1lc3NhZ2UoXCJcIik7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdmVyaWZpY2F0ZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgICAgICBzZXRsb2FkKGZhbHNlKVxyXG4gICAgICAgIGxldCBwb3N0VG9CYWNrID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvYXV0aC9zYXZlXCIsIHtcclxuICAgICAgICAgICAgbmFtZTogc3RhdGUubmFtZSxcclxuICAgICAgICAgICAgc3VybmFtZTogc3RhdGUuc3VybmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHN0YXRlLmVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogc3RhdGUucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHZlcmlmaWNhdGlvbkNvZGU6IHN0YXRlLnZlcmlmaWNhdGlvbkNvZGUsXHJcbiAgICAgICAgICAgIGNvZGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYocG9zdFRvQmFjay5kYXRhLm1lc3NhZ2UgPT09ICdVc2VyIHNhdmVkJyl7XHJcbiAgICAgICAgICAgIHNldG1lc3NhZ2UocG9zdFRvQmFjay5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHNldGNvdW50ZXIodHJ1ZSlcclxuICAgICAgICAgICAgc2V0dmVyaWZ5KCF2ZXJpZnkpXHJcbiAgICAgICAgICAgIHNldHN0YXRlKHsuLi5zdGF0ZSx2ZXJpZmljYXRpb25Db2RlOicnfSlcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHNldG1lc3NhZ2UocG9zdFRvQmFjay5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0bWVzc2FnZShcIlwiKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldGxvYWQodHJ1ZSlcclxuICAgIH07XHJcbiAgICBpZiAoIWxvYWQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJSZWFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTAwcHhcIiwgaGVpZ2h0OiBcIjUwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmVyaWZpY2F0aW9uID0gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnZlcmlmaWNhdGlvbkNvZGV9XHJcbiAgICAgICAgICAgICAgICBpZD1cInZlcmlmaWNhdGlvbkNvZGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ZlcmlmaWNhdGV9PmNsaWNrIGZvciB2ZXJpZmljYXRpb248L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbiAgICBjb25zdCByZWdpc3RyYWNpYSA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdHJhY2lhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMnZ3XCIgfX0+UmVnaXN0cmFjaWE8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VWYWx1ZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zdXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzdXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwic3VybmFtZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1JlZ2lzdHJhdGlvbn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5uYW1lLnRyaW0oKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnN1cm5hbWUudHJpbSgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZW1haWwudHJpbSgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucGFzc3dvcmQudHJpbSgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY29uZmlybVBhc3N3b3JkLnRyaW0oKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbmZpcm1QYXNzd29yZCA9PT0gc3RhdGUucGFzc3dvcmQgJiZcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5wYXNzd29yZC5sZW5ndGggPj0gOCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbmZpcm1QYXNzd29yZC5sZW5ndGggPj0gOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBjbGlja1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge3ZlcmlmeSA/IG51bGwgOiB2ZXJpZmljYXRpb259XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xlYXJ9PmNsZWFyPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGxvZ2luID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIydndcIiB9fT5Mb2dpbjwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5sb2dpbkVtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImxvZ2luRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5sb2dpblBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImxvZ2luUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2luUG9zdH0+Y2xpY2s8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiBzZXRjb3VudGVyKCFjb3VudGVyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXIgPyBcImdvIHRvIHJlZ2lzdHJhY2lhXCIgOiBcImdvIHRvIGxvZ2luXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICB7Y291bnRlciA/IGxvZ2luIDogcmVnaXN0cmFjaWF9XHJcbiAgICAgICAgICAgICAgICB7YXJyLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoZWxlbTogdXNlckRhdGFUeXBlLCBpOiBudW1iZXIpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZWxlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VsZW0uZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntlbGVtLnBhc3N3b3JkfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZVVzZXIuYmluZChudWxsLCBlbGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyMSA9IG1lbW8oQ29udGFpbmVyMSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==