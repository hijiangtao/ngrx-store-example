function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _my_counter_my_counter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./my-counter/my-counter.component */
    "./src/app/my-counter/my-counter.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ngrx-store-example';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 1,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-my-counter");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " app is running!");
        }
      },
      directives: [_my_counter_my_counter_component__WEBPACK_IMPORTED_MODULE_1__["MyCounterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reducers */
    "./src/app/reducers/index.ts");
    /* harmony import */


    var _my_counter_my_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-counter/my-counter.component */
    "./src/app/my-counter/my-counter.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
      /**
       * 在 app.module.ts 中注册全局状态
       * 多个状态属性，可以在这里引入不同的 reducer 初始化
       */
      _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_5__["actionReducerMap"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        /**
         * 组件
         */
        _my_counter_my_counter_component__WEBPACK_IMPORTED_MODULE_6__["MyCounterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
          /**
           * 组件
           */
          _my_counter_my_counter_component__WEBPACK_IMPORTED_MODULE_6__["MyCounterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
          /**
           * 在 app.module.ts 中注册全局状态
           * 多个状态属性，可以在这里引入不同的 reducer 初始化
           */
          _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_5__["actionReducerMap"])],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/my-counter/my-counter.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/my-counter/my-counter.component.ts ***!
    \****************************************************/

  /*! exports provided: MyCounterComponent */

  /***/
  function srcAppMyCounterMyCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCounterComponent", function () {
      return MyCounterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _reducers_counter_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../reducers/counter.actions */
    "./src/app/reducers/counter.actions.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * 在组件中 DI store，然后通过 select 选中相应状态，状态变更通过 dispatch 派发
     */


    var MyCounterComponent =
    /*#__PURE__*/
    function () {
      /**
       * 在组件中注入使用
       * @param store Store
       */
      function MyCounterComponent(store) {
        _classCallCheck(this, MyCounterComponent);

        this.store = store;
        /**
         * 选中 count
         */

        this.count$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('count'));
      }

      _createClass(MyCounterComponent, [{
        key: "increment",
        value: function increment() {
          this.store.dispatch(Object(_reducers_counter_actions__WEBPACK_IMPORTED_MODULE_2__["increment"])());
        }
      }, {
        key: "decrement",
        value: function decrement() {
          this.store.dispatch(Object(_reducers_counter_actions__WEBPACK_IMPORTED_MODULE_2__["decrement"])());
        }
      }, {
        key: "reset",
        value: function reset() {
          this.store.dispatch(Object(_reducers_counter_actions__WEBPACK_IMPORTED_MODULE_2__["reset"])());
        }
      }]);

      return MyCounterComponent;
    }();

    MyCounterComponent.ɵfac = function MyCounterComponent_Factory(t) {
      return new (t || MyCounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    MyCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyCounterComponent,
      selectors: [["app-my-counter"]],
      decls: 10,
      vars: 3,
      consts: [["id", "increment", 3, "click"], ["id", "decrement", 3, "click"], ["id", "reset", 3, "click"]],
      template: function MyCounterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyCounterComponent_Template_button_click_1_listener() {
            return ctx.increment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Increment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyCounterComponent_Template_button_click_6_listener() {
            return ctx.decrement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Decrement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyCounterComponent_Template_button_click_8_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reset Counter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current Count: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.count$), "");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWNvdW50ZXIvbXktY291bnRlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-counter',
          templateUrl: './my-counter.component.html',
          styleUrls: ['./my-counter.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/reducers/counter.actions.ts":
  /*!*********************************************!*\
    !*** ./src/app/reducers/counter.actions.ts ***!
    \*********************************************/

  /*! exports provided: increment, decrement, reset */

  /***/
  function srcAppReducersCounterActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "increment", function () {
      return increment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "decrement", function () {
      return decrement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reset", function () {
      return reset;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /**
     * Actions是信息的载体，它发送数据到reducer，然后reducer更新store。Actions是store能接受数据的唯一方式。
     */


    var increment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Counter Component] Increment');
    var decrement = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Counter Component] Decrement');
    var reset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Counter Component] Reset');
    /***/
  },

  /***/
  "./src/app/reducers/counter.reducer.ts":
  /*!*********************************************!*\
    !*** ./src/app/reducers/counter.reducer.ts ***!
    \*********************************************/

  /*! exports provided: initialState, reducer */

  /***/
  function srcAppReducersCounterReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _counter_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./counter.actions */
    "./src/app/reducers/counter.actions.ts");
    /**
     * Reducers规定了行为对应的具体状态变化。它是纯函数，通过接收前一个状态和派发行为返回新对象作为下一个状态的方式来改变状态，新对象通常用Object.assign和扩展语法来实现。
     */


    var initialState = 0; // tslint:disable-next-line: variable-name

    var _counterReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_counter_actions__WEBPACK_IMPORTED_MODULE_1__["increment"], function (state) {
      return state + 1;
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_counter_actions__WEBPACK_IMPORTED_MODULE_1__["decrement"], function (state) {
      return state - 1;
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_counter_actions__WEBPACK_IMPORTED_MODULE_1__["reset"], function (state) {
      return 0;
    }));

    function reducer(state, action) {
      return _counterReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/reducers/index.ts":
  /*!***********************************!*\
    !*** ./src/app/reducers/index.ts ***!
    \***********************************/

  /*! exports provided: reducer, actionReducerMap */

  /***/
  function srcAppReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "actionReducerMap", function () {
      return actionReducerMap;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngrx-store-freeze */
    "./node_modules/ngrx-store-freeze/es6/index.js");
    /* harmony import */


    var _counter_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./counter.reducer */
    "./src/app/reducers/counter.reducer.ts");
    /* harmony import */


    var _layout_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout.reducer */
    "./src/app/reducers/layout.reducer.ts");
    /**
     * Todo 是否使用 ngrx-store-freeze 还需要进一步调研
     */


    var environment = {
      production: false
    };
    var reducers = {
      count: _counter_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
      layout: _layout_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]
    };
    /**
     * 合并 reducer
     */

    var developmentReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["compose"])(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_1__["storeFreeze"], _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers);
    var productionReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers);
    /**
     * combineReducers 示例
     * @param state
     * @param action
     */

    function reducer(state, action) {
      if (environment.production) {
        return productionReducer(state, action);
      } else {
        return developmentReducer(state, action);
      }
    }
    /**
     * ActionReducerMap
     */


    var actionReducerMap = {
      count: _counter_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
      reducer: reducer
    };
    /***/
  },

  /***/
  "./src/app/reducers/layout.action.ts":
  /*!*******************************************!*\
    !*** ./src/app/reducers/layout.action.ts ***!
    \*******************************************/

  /*! exports provided: ActionTypes, OpenSidenavAction, CloseSidenavAction */

  /***/
  function srcAppReducersLayoutActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpenSidenavAction", function () {
      return OpenSidenavAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloseSidenavAction", function () {
      return CloseSidenavAction;
    });
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./util */
    "./src/app/reducers/util.ts");

    var ActionTypes = {
      OPEN_SIDENAV: Object(_util__WEBPACK_IMPORTED_MODULE_0__["type"])('[Layout] Open Sidenav'),
      CLOSE_SIDENAV: Object(_util__WEBPACK_IMPORTED_MODULE_0__["type"])('[Layout] Close Sidenav')
    };

    var OpenSidenavAction = function OpenSidenavAction() {
      _classCallCheck(this, OpenSidenavAction);

      this.type = ActionTypes.OPEN_SIDENAV;
    };

    var CloseSidenavAction = function CloseSidenavAction() {
      _classCallCheck(this, CloseSidenavAction);

      this.type = ActionTypes.CLOSE_SIDENAV;
    };
    /***/

  },

  /***/
  "./src/app/reducers/layout.reducer.ts":
  /*!********************************************!*\
    !*** ./src/app/reducers/layout.reducer.ts ***!
    \********************************************/

  /*! exports provided: reducer, getShowSidenav */

  /***/
  function srcAppReducersLayoutReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getShowSidenav", function () {
      return getShowSidenav;
    });
    /* harmony import */


    var _layout_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./layout.action */
    "./src/app/reducers/layout.action.ts");
    /**
     * 包含 state reducer selector 的一个 reducer 示例
     */


    var initialState = {
      showSidenav: false
    };

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _layout_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CLOSE_SIDENAV:
          return {
            showSidenav: false
          };

        case _layout_action__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].OPEN_SIDENAV:
          return {
            showSidenav: true
          };

        default:
          return state;
      }
    }

    var getShowSidenav = function getShowSidenav(state) {
      return state.showSidenav;
    };
    /***/

  },

  /***/
  "./src/app/reducers/util.ts":
  /*!**********************************!*\
    !*** ./src/app/reducers/util.ts ***!
    \**********************************/

  /*! exports provided: type */

  /***/
  function srcAppReducersUtilTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "type", function () {
      return type;
    });

    var typeCache = {};

    function type(label) {
      if (typeCache[label]) {
        throw new Error("Action type \"".concat(label, "\" is not unique\""));
      }

      typeCache[label] = true;
      return label;
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/hijiangtao/Documents/git/study/ngrx-store-example/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map