var ac_main =
webpackJsonpac__name_([1],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(43);

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(312);

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(563);

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(578);

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(684);

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(310);

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);


var AppState = /** @class */ (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], AppState);
    return AppState;
}());



/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(271);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(274);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_component__ = __webpack_require__(279);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signup_component__["a"]; });



/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(81);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__headers__ = __webpack_require__(280);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__headers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sessions__ = __webpack_require__(284);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__sessions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notfound__ = __webpack_require__(282);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__notfound__["a"]; });






/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(64);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(50);

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(107);

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(209);

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(629);

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(697);

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(767);

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(266);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(308);

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(133);

/*
 * Angular 2 decorators and services
 */


/*
 * App Component
 * Top Level Component
 */
var AppComponent = /** @class */ (function () {
    function AppComponent(appState) {
        this.appState = appState;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app',
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
            template: "<main>\n                 <router-outlet></router-outlet>\n             </main>",
            styles: [__webpack_require__(582)]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppState */]])
    ], AppComponent);
    return AppComponent;
}());

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_spinner__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_charts__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angularclass_hmr__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environment__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routes__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__navbar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sidebar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__utils__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__errormessage__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_resolver__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__location__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__signup__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__styles_style_css__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__styles_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__styles_style_css__);














/*
 * Platform and Environment providers/directives/pipes
 */


// App is our top level component












// import '../styles/headings.css';
// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_22__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_23__app_service__["a" /* AppState */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = /** @class */ (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // save input values
        store.restoreInputValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__angularclass_hmr__["createInputTransfer"])();
        // remove styles
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__angular_core__["NgModule"])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_24__home__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_25__location__["a" /* LocationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__navbar__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_20__utils__["a" /* SessionExpiredComponent */],
                __WEBPACK_IMPORTED_MODULE_19__sidebar__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__errormessage__["a" /* ErrorMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__utils__["b" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_26__signup__["a" /* SignupFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_spinner__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__["a" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_12__angular_router__["PreloadAllModules"] })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__environment__["b" /* ENV_PROVIDERS */],
                APP_PROVIDERS
            ]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_core__["ApplicationRef"],
            __WEBPACK_IMPORTED_MODULE_23__app_service__["a" /* AppState */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);




var DataResolver = /** @class */ (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    DataResolver = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], DataResolver);
    return DataResolver;
}());

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(136);



var ROUTES = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginFormComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupFormComponent */] }
];


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);




var Email = /** @class */ (function () {
    function Email(emailAddress) {
        this.emailAddress = emailAddress;
    }
    return Email;
}());
var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent(router) {
        this.router = router;
        this.inputLogo = 'assets/img/angularclass-logo.png';
        this.textmessage = 'Forgot your password ?';
        this.emailModel = new Email('');
        var group = {};
        group.email = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required);
        group.type = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('forgotpass');
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"](group);
    }
    ErrorMessageComponent.prototype.resetPassword = function () {
        console.log('Reset email is ', this.form.value['email']);
        this.textmessage = 'Reset successful, redirecting !';
        // setTimeout(function() {
        //   window.location.reload();
        // }, 2000);
    };
    ErrorMessageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-error-message',
            template: __webpack_require__(570),
            styles: [__webpack_require__(583)]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());



/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(16);

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errormessage_component__ = __webpack_require__(269);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__errormessage_component__["a"]; });



/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log('destroyed');
    };
    HomeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__(571),
            styles: [__webpack_require__(584)]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_component__ = __webpack_require__(273);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__location_component__["a"]; });



/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webservices__ = __webpack_require__(287);






var LocationComponent = /** @class */ (function () {
    function LocationComponent(http, router, webservice) {
        this.http = http;
        this.router = router;
        this.webservice = webservice;
        this.current = false;
        this.dispMessage = false;
        this.dispError = false;
        this.dispTable = false;
        this.congResults = [];
        this.speedResults = [];
        this.places = [
            { value: 'Hauz Khas', latitude: 28.5494459, longitude: 77.2001368 },
            { value: 'Model Town', latitude: 28.7158727, longitude: 77.1910738 },
            { value: 'Civil Lines', latitude: 28.6814284, longitude: 77.2226866 },
            { value: 'Punjabi Bagh', latitude: 28.6619753, longitude: 77.1241557 },
            { value: 'Najafgarh', latitude: 28.6090126, longitude: 76.9854526 },
            { value: 'Saraswati Vihar', latitude: 28.6964967, longitude: 77.1250482 },
            { value: 'Mukarba Chowk', latitude: 28.7372, longitude: 77.1603 },
            { value: 'Seelampur', latitude: 28.6640177, longitude: 77.2711557 },
            { value: 'Gurugram', latitude: 28.4595, longitude: 77.0266 },
            { value: 'Noida', latitude: 28.5355, longitude: 77.3910 }
        ];
        this.view = [600, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Time of Day';
        this.showYAxisLabel = true;
        this.yAxisLabel1 = 'Congestion Percentage';
        this.yAxisLabel2 = 'Average Speed (kmph)';
    }
    LocationComponent.prototype.ngOnInit = function () {
        this.webservice.isAuthenticated();
    };
    LocationComponent.prototype.ngOnChanges = function () {
        this.graphType = this.type;
        if (this.type === "overview") {
            this.graphType = "Overview";
        }
        else if (this.type === "monthly") {
            var today = new Date();
            var end_date = today.toLocaleDateString();
            var start = new Date();
            start.setDate(today.getDate() - 30);
            var start_date = start.toLocaleDateString();
            this.graphType = start_date + " to " + end_date;
        }
        else if (this.type === "weekly") {
            var today = new Date();
            var end_date = today.toLocaleDateString();
            var start = new Date();
            start.setDate(today.getDate() - 7);
            var start_date = start.toLocaleDateString();
            this.graphType = start_date + " to " + end_date;
        }
        else if (this.type === "daily") {
            var today = new Date();
            var date = today.toLocaleDateString();
            this.graphType = date;
        }
        else {
            this.graphType = "Current Traffic Status";
            this.current = true;
        }
        console.log(this.graphType);
        this.selectedValue = this.places[this.index].value;
        this.getData();
    };
    LocationComponent.prototype.ngOnDestroy = function () {
        console.log('destroyed');
    };
    /**
     * Fetch the data from the python-flask backend
     */
    LocationComponent.prototype.getData = function () {
        var _this = this;
        if (this.selectedValue != '') {
            this.msg = 'Loading Data...';
            this.dispMessage = true;
            this.dispError = false;
            this.dispTable = false;
            var body = {
                location: this.selectedValue,
                type: this.type
            };
            this.webservice.getDataFromBackend(body)
                .subscribe(function (data) {
                _this.congResults = [];
                _this.speedResults = [];
                _this.dispMessage = false;
                _this.dispError = false;
                _this.dispTable = true;
                _this.handleData(data);
            }, function (err) {
                _this.error = 'Server Error: Unable to fetch data';
                _this.dispMessage = false;
                _this.dispError = true;
                _this.dispTable = false;
            });
        }
        else {
            this.error = 'Please select a Location';
            this.dispMessage = false;
            this.dispError = true;
            this.dispTable = false;
        }
    };
    LocationComponent.prototype.handleData = function (data) {
        console.log(data);
        if (!this.current) {
            this.cong_threshold = data[0]['Threshold'];
            this.freeflow_speed = data[0]['NormSpeed'];
            console.log(this.freeflow_speed);
            for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                var key = _a[_i];
                var val1 = {
                    'name': data[key]['Hour'],
                    'value': data[key]['Congestion']
                };
                var val2 = {
                    'name': data[key]['Hour'],
                    'value': data[key]['CurrSpeed']
                };
                this.congResults.push(val1);
                this.speedResults.push(val2);
            }
        }
        else {
            this.freeflow_speed = data['normSpeed'];
            this.current_speed = data['currSpeed'];
            this.congestion_value = data['congestion'];
            this.congType = data['congType'];
        }
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('index'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Number)
    ], LocationComponent.prototype, "index", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('type'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", String)
    ], LocationComponent.prototype, "type", void 0);
    LocationComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'location',
            template: __webpack_require__(572),
            styles: [__webpack_require__(585)],
            providers: [__WEBPACK_IMPORTED_MODULE_5__webservices__["a" /* WebService */], __WEBPACK_IMPORTED_MODULE_3__authentication__["a" /* AuthenticationService */]]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_5__webservices__["a" /* WebService */]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_user__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_timers__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_timers__);








var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(_service, router) {
        this._service = _service;
        this.router = router;
        this.inputLogo = 'assets/img/traffic1.png';
        this.model = new __WEBPACK_IMPORTED_MODULE_4__utils_user__["a" /* UserComponent */](1, '', '');
        this.logintext = 'Sign in to continue';
        this.color = 'black';
        this.forgotPassword = false;
        this.logging = false;
        this.loginMsg = "Validating...";
        var group = {};
        group.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        group.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        group.type = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('login');
        this.myForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"](group);
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        console.log('Inside the login page');
        if (this._service.isAuthenticated()) {
            console.log('We are authenticated, why go to login page again');
            this.router.navigate(['/home']);
        }
    };
    ;
    LoginFormComponent.prototype.loginUser = function () {
        var _this = this;
        this.logging = true;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_timers__["setTimeout"])(function () {
            _this.loginMsg = "Logging...";
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_timers__["setTimeout"])(function () { return _this.loginMsg = "Fetching Data..."; }, 3000);
        }, 3000);
        var body = {
            username: this.myForm.controls['username'].value,
            password: this.myForm.controls['password'].value
        };
        this._service.login(body)
            .subscribe(function (data) {
            _this.logging = false;
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.handleError(error);
        });
    };
    LoginFormComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg;
        this.logging = false;
        if (error === '401 - UNAUTHORIZED') {
            errMsg = 'Incorrect Username or Password or User not Validated Yet';
        }
        else if (error === '403 - FORBIDDEN') {
            errMsg = 'User has not been verified';
        }
        else if (error === '400 - BAD REQUEST') {
            errMsg = 'Bad Request';
        }
        else {
            errMsg = 'Server Error';
        }
        console.error(errMsg); // log to console instead
        this.color = 'red';
        this.logintext = errMsg;
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"].throw(errMsg);
    };
    LoginFormComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "login",
            template: __webpack_require__(573),
            styles: [__webpack_require__(586)],
            // Here we tell Angular that we want the form
            // directives to be available in this component
            providers: [__WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__["a" /* AuthenticationService */]]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_component__ = __webpack_require__(276);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__navbar_component__["a"]; });



/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication__ = __webpack_require__(62);



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.locationIndex = this.index;
        console.log(this.locationIndex);
    };
    NavbarComponent.prototype.ngOnChanges = function () {
        this.locationIndex = this.index;
        console.log(this.locationIndex);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('index'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Number)
    ], NavbarComponent.prototype, "index", void 0);
    NavbarComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(574),
            styles: [__webpack_require__(587)]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication__["a" /* AuthenticationService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar_component__ = __webpack_require__(278);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sidebar_component__["a"]; });



/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication__ = __webpack_require__(62);



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
        this.locationIndex = 0;
        this.inputLogo = 'assets/img/traffic.png';
        this.places = ['Hauz Khas', 'Model Town', 'Civil Lines', 'Punjabi Bagh', 'Najafgarh', 'Saraswati Vihar', 'Mukarba Chowk', 'Seelampur', 'Gurugram', 'Noida'];
    }
    SidebarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.ngOnDestroy = function () {
        console.log('destroyed');
    };
    SidebarComponent.prototype.changeLocation = function (loc) {
        this.locationIndex = loc;
    };
    SidebarComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sidebar',
            template: __webpack_require__(575),
            styles: [__webpack_require__(588)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__authentication__["a" /* AuthenticationService */]]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication__["a" /* AuthenticationService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_user__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);







var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(_service, router) {
        this._service = _service;
        this.router = router;
        this.inputLogo = 'assets/img/traffic1.png';
        this.model = new __WEBPACK_IMPORTED_MODULE_4__utils_user__["a" /* UserComponent */](1, '', '');
        this.logintext = 'Sign Up';
        this.color = 'black';
        this.forgotPassword = false;
        this.logging = false;
        var group = {};
        group.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        group.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        group.cnfmpassword = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        group.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        group.phone = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        group.dob = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        group.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.myForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"](group);
    }
    SignupFormComponent.prototype.ngOnInit = function () {
        console.log('Inside the signup page');
        if (this._service.isAuthenticated()) {
            console.log('We are authenticated, why go to login page again');
            this.router.navigate(['/login']);
        }
    };
    SignupFormComponent.prototype.loginUser = function () {
        var _this = this;
        var password = this.myForm.controls['password'].value;
        var cnfmpassword = this.myForm.controls['cnfmpassword'].value;
        var phone = this.myForm.controls['phone'].value;
        var email = this.myForm.controls['email'].value;
        var regexexpPhone = new RegExp('^[0-9]{10,10}$');
        if (password != cnfmpassword) {
            alert("Password and Confirm Password Do Not Match");
        }
        else if (phone.length != 10) {
            alert("Enter a valid phone number");
        }
        else if (password.length < 9 || password.length > 15) {
            alert("Password Length should be between 9 and 15");
        }
        else if (regexexpPhone.test(phone) == false) {
            alert("Invalid Phone Number");
        }
        else {
            this.logging = true;
            var body = {
                username: this.myForm.controls['username'].value,
                password: this.myForm.controls['password'].value,
                name: this.myForm.controls['name'].value,
                date: this.myForm.controls['dob'].value,
                phone: this.myForm.controls['phone'].value,
                email: this.myForm.controls['email'].value
            };
            this._service.signup(body)
                .subscribe(function (data) {
                _this.logging = false;
                _this.router.navigate(['/login']);
            }, function (error) {
                _this.handleError(error);
            });
        }
    };
    SignupFormComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg;
        this.logging = false;
        if (error === '401 - UNAUTHORIZED') {
            errMsg = 'Incorrect Username or Password';
        }
        else if (error === '400 - BAD REQUEST') {
            errMsg = 'Bad Request';
        }
        else {
            errMsg = 'Server Error';
        }
        console.error(errMsg); // log to console instead
        this.color = 'red';
        this.logintext = errMsg;
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"].throw(errMsg);
    };
    SignupFormComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "signup",
            template: __webpack_require__(576),
            styles: [__webpack_require__(589)],
            // Here we tell Angular that we want the form
            // directives to be available in this component
            providers: [__WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__["a" /* AuthenticationService */]]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(202);

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xhrheaders__ = __webpack_require__(281);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__xhrheaders__["a"]; });



/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jsonHeader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(32);

function jsonHeader() {
    var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
    var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({
        headers: header
    });
    return options;
}


/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notfound_component__ = __webpack_require__(283);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__notfound_component__["a"]; });



/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router) {
        this.router = router;
    }
    NotFoundComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/login']);
    };
    NotFoundComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            template: "\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"span12\">\n        <div class=\"hero-unit center\">\n            <h1>Page Not Found <small><font face=\"Tahoma\" color=\"red\">Error 404</font></small></h1>\n            <br />\n            <p>The page you requested could not be found, either contact your webmaster</p>\n            <p> Use your browsers <b>Back</b> button to go back</p>\n            <p><b>Or you could just press this neat little button:</b></p>\n            <a (click)=\"redirectToLogin()\" class=\"btn btn-large btn-info\"> Take me to login page</a>\n          </div>\n          <br />\n          <!-- By ConnerT HTML & CSS Enthusiast -->\n      </div>\n    </div>\n  </div>\n    ",
            styles: [".center {text-align: center; margin-left: auto;      margin-right: auto; margin-bottom: auto; margin-top: auto;}"]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sessions_component__ = __webpack_require__(285);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sessions_component__["a"]; });



/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionExpiredComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(36);



var SessionExpiredComponent = /** @class */ (function () {
    function SessionExpiredComponent(router) {
        this.router = router;
    }
    SessionExpiredComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/login']);
    };
    SessionExpiredComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'session-expired',
            template: "<div class=\"well center-block\" style=\"width:300px;\">\n                  <div class=\"panel panel-danger\">\n                  <div class=\"panel-heading text-center center-block\">\n                  Sorry your session has expired !</div>\n                  <div class=\"panel-body\">\n                    <a class=\"btn btn-large btn-info center-block\"\n                        (click)=\"redirectToLogin()\" >\n                        Login\n                    </a>\n                  </div>\n            </div>\n            </div>"
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], SessionExpiredComponent);
    return SessionExpiredComponent;
}());



/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var UserComponent = /** @class */ (function () {
    function UserComponent(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    return UserComponent;
}());



/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webservices_services__ = __webpack_require__(288);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__webservices_services__["a"]; });



/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication__ = __webpack_require__(62);



var WebService = /** @class */ (function () {
    function WebService(authService) {
        this.authService = authService;
    }
    WebService.prototype.getDataFromBackend = function (data) {
        return this.authService.postResource(data, '/api/getLocationOverview');
    };
    WebService.prototype.isAuthenticated = function () {
        if (!this.authService.isAuthenticated()) {
            this.authService.clearUserDataAndRedirect();
        }
    };
    WebService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication__["a" /* AuthenticationService */]])
    ], WebService);
    return WebService;
}());



/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(217);
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  font-family: Arial, Helvetica, sans-serif\n}\n\nspan.active {\n  background-color: gray;\n}\n", ""]);

// exports


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(undefined);
// imports


// module
exports.push([module.i, ".form-signin\n{\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n.form-signin .form-signin-heading, .form-signin .checkbox\n{\n    margin-bottom: 10px;\n}\n.form-signin .checkbox\n{\n    font-weight: normal;\n}\n.form-signin .form-control\n{\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.form-signin .form-control:focus\n{\n    z-index: 2;\n}\n.form-signin input[type=\"text\"]\n{\n    margin-bottom: -1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.form-signin input[type=\"password\"]\n{\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.account-wall\n{\n    margin-top: 20px;\n    padding: 40px 0px 20px 0px;\n    background-color: #f7f7f7;\n    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.login-title\n{\n    color: #555;\n    font-size: 18px;\n    font-weight: 400;\n    display: block;\n}\n.profile-img\n{\n    width: auto;\n    height: 80px;\n    margin: auto;\n    display: block;\n    -moz-border-radius: 50%;\n    -webkit-border-radius: 50%;\n    border-radius: 30px;\n}\n.need-help\n{\n    margin-top: 10px;\n}\n.new-account\n{\n    display: block;\n    margin-top: 10px;\n}\n.modal-footer {   border-top: 0px; }\n", ""]);

// exports


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(undefined);
// imports


// module
exports.push([module.i, "/* .homeBody{\n  margin-top: 5em !important; \n  text-align: center !important;\n  align-content: center !important;\n}\n\n.error{\n  font-size: 2em;\n  color: red;\n}\n\n.message{\n  color: #ffcc00;\n  font-size: 2em;\n}\n\n.getdata{\n  width: 6em;\n}\n\n.datatable{\n  margin: 1em;\n  text-align: center !important;\n  align-content: center !important;\n}\n\ntd{\n  padding: 1em;\n}\n\nspinner {\n  border-color: #ffcc00 rgba(79, 106, 167, 0.1) rgba(79, 106, 167, 0.1) !important;\n} */", ""]);

// exports


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(undefined);
// imports


// module
exports.push([module.i, ".homeBody{\n    margin-top: 1em !important; \n    text-align: center !important;\n    align-content: center !important;\n    position: relative;\n    height: 530px !important;\n  }\n  \n  .error{\n    font-size: 2em;\n    color: red;\n  }\n  \n  .message{\n    color: #ffcc00;\n    font-size: 2em;\n  }\n  \n  .getdata{\n    width: 6em;\n  }\n  \n  .datatable{\n    margin: 1em;\n    text-align: center !important;\n    align-content: center !important;\n  }\n  \n  td{\n    padding: 1em;\n  }\n  \n  spinner {\n    border-color: #ffcc00 rgba(79, 106, 167, 0.1) rgba(79, 106, 167, 0.1) !important;\n  }\n\n  .low{\n    color: green;\n  }\n\n  .medium{\n    color: yellow;\n  }\n\n  .high{\n    color: red;\n  }\n\n  .currentTable{\n    text-align: center;\n    width: 100%;\n  }\n\n  .currentTable table{\n    margin: 0px auto;\n  }\n\n  .refresh{    \n    background-color: #4932B3;\n    color: #fff;\n    padding: 1em 2em;\n  }", ""]);

// exports


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(undefined);
// imports


// module
exports.push([module.i, ".form-signin\n{\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n.form-signin .form-signin-heading, .form-signin .checkbox\n{\n    margin-bottom: 10px;\n}\n.form-signin .checkbox\n{\n    font-weight: normal;\n}\n.form-signin .form-control\n{\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.form-signin .form-control:focus\n{\n    z-index: 2;\n}\n.form-signin input[type=\"text\"]\n{\n    margin-bottom: -1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.form-signin input[type=\"password\"]\n{\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.account-wall\n{\n    margin-top: 20px;\n    padding: 40px 0px 20px 0px;\n    background-color: #f7f7f7;\n    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);\n}\n.login-title\n{\n    color: #555;\n    font-size: 18px;\n    font-weight: 400;\n    display: block;\n}\n.profile-img\n{\n    width: auto;\n    height: 80px;\n    margin: auto;\n    display: block;\n    -moz-border-radius: 50%;\n    -webkit-border-radius: 50%;\n    border-radius: 30px;\n}\n.need-help\n{\n    margin-top: 10px;\n}\n.new-account\n{\n    display: block;\n    margin-top: 10px;\n}\n.modal-footer {   \n    border-top: 0px; \n}\n\n.login-text{\n    font-size: 2em;\n}", ""]);

// exports


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(undefined);
// imports


// module
exports.push([module.i, ".page-heading{\n    font-size: 2.5em;\n    color: #fff;\n    background-color: #4932B3;\n    padding: 0.5em;\n}\n\n.menu{\n    cursor: pointer;\n}\n\n.right-heading{\n    float: right;\n    color: #fff;\n    border: 2px solid #fff;\n    font-size: 0.6em;\n    padding: 0.3em;\n    border-radius: 0.5em;\n}\n\na {\n    color: #fff;\n}\n\n.place-name{\n    height: auto;\n    padding: 1.2em 2em 1.2em 2em;\n    color: #fff;\n    border-bottom: 1px solid #fff;\n    font-size: 1.2 em;\n    cursor: pointer;\n}\n\n.mat-sidenav{\n    background-color: #4932B3;\n    text-align: center;\n}\n\nimg{\n    margin: 1.2em 0em;\n}", ""]);

// exports


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(undefined);
// imports


// module
exports.push([module.i, ".form-signin\n{\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n.form-signin .form-signin-heading, .form-signin .checkbox\n{\n    margin-bottom: 10px;\n}\n.form-signin .checkbox\n{\n    font-weight: normal;\n}\n.form-signin .form-control\n{\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.form-signin .form-control:focus\n{\n    z-index: 2;\n}\n.form-signin input[type=\"text\"]\n{\n    margin-bottom: -1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.form-signin input[type=\"password\"]\n{\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.account-wall\n{\n    margin-top: 20px;\n    padding: 40px 0px 20px 0px;\n    background-color: #f7f7f7;\n    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);\n}\n.login-title\n{\n    color: #555;\n    font-size: 18px;\n    font-weight: 400;\n    display: block;\n}\n.profile-img\n{\n    width: auto;\n    height: 80px;\n    margin: auto;\n    display: block;\n    -moz-border-radius: 50%;\n    -webkit-border-radius: 50%;\n    border-radius: 30px;\n}\n.need-help\n{\n    margin-top: 10px;\n}\n.new-account\n{\n    display: block;\n    margin-top: 10px;\n}\n.modal-footer {   \n    border-top: 0px; \n}\n\n.login-text{\n    font-size: 2em;\n}", ""]);

// exports


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(undefined);
// imports
exports.i(__webpack_require__(293), "");

// module
exports.push([module.i, "/* Master Styles */\n\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\nh2, h3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody, input[text], button {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\na {\n  cursor: pointer;\n  cursor: hand;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\n\n/* Navigation link styles */\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.router-link-active {\n  color: #039be5;\n}\n\n/* items class */\n.items {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 24em;\n}\n.items li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.items li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.items li.selected:hover {\n  background-color: #BBD8DC;\n  color: white;\n}\n.items .text {\n  position: relative;\n  top: -3px;\n}\n.items {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 24em;\n}\n.items li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.items li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.items li.selected {\n  background-color: #CFD8DC;\n  color: white;\n}\n\n.items li.selected:hover {\n  background-color: #BBD8DC;\n}\n.items .text {\n  position: relative;\n  top: -3px;\n}\n.items .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n/* everywhere else */\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n", ""]);

// exports


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(307);

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(141);

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(309);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(78);

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(0);

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\n      <h1 class=\"text-center login-title\" style=\"color: red;\">{{textmessage}}</h1>\n      <div class=\"account-wall\">\n        <img class=\"profile-img\" [src]=\"inputLogo\" alt=\"\">\n        <form #passwordResetForm=\"ngForm\" (ngSubmit)=\"resetPassword()\" [formGroup]=\"form\" class=\"form-signin\">\n          <div class=\"form-group text-center\">\n            <p>If you have forgotten your password you can reset it here.</p>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"emailAddress\" type=\"text\" required autofocus placeholder=\"email address\" class=\"form-control\" formControlName=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!passwordResetForm.valid\">Send My Password</button>\n          </div>\n          <label class=\"checkbox text-center\">\n            <a [routerLink]=\" ['/login'] \" class=\"glyphicon-triangle-left need-help\">Back to login</a><span class=\"clearfix\"> </span>\n          </label>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<sidebar></sidebar>"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<div class=\"homeBody\">\n    <h4>\n        {{selectedValue}} - {{graphType}}\n    </h4>\n      <br/>\n      <span class='message' *ngIf=\"dispMessage\">\n        <spinner [size]=\"25\" [tickness]=\"4\"></spinner>\n        {{msg}}\n      </span>     \n      <span class='error'  *ngIf=\"dispError\">\n        {{error}}\n        <button class=\"refresh\" (click)=\"getData()\">Refresh</button>\n      </span>   \n      <div class='datatable'  *ngIf=\"dispTable && !current\">\n        <table>\n          <tr>\n            <td>\n              Congestion Threshold = {{cong_threshold}}\n              <ngx-charts-bar-vertical\n                [view]=\"view\"\n                [results]=\"congResults\"\n                [gradient]=\"gradient\"\n                [xAxis]=\"showXAxis\"\n                [yAxis]=\"showYAxis\"\n                [legend]=\"showLegend\"\n                [showXAxisLabel]=\"showXAxisLabel\"\n                [showYAxisLabel]=\"showYAxisLabel\"\n                [xAxisLabel]=\"xAxisLabel\"\n                [yAxisLabel]=\"yAxisLabel1\">\n              </ngx-charts-bar-vertical>\n            </td>\n            <td>\n              Free Flow Speed = {{freeflow_speed}}\n              <ngx-charts-bar-vertical\n                [view]=\"view\"\n                [results]=\"speedResults\"\n                [gradient]=\"gradient\"\n                [xAxis]=\"showXAxis\"\n                [yAxis]=\"showYAxis\"\n                [legend]=\"showLegend\"\n                [showXAxisLabel]=\"showXAxisLabel\"\n                [showYAxisLabel]=\"showYAxisLabel\"\n                [xAxisLabel]=\"xAxisLabel\"\n                [yAxisLabel]=\"yAxisLabel2\">\n              </ngx-charts-bar-vertical>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"currentTable\" *ngIf=\"dispTable && current\">\n        <table>\n          <tr>\n            <td>Current Speed</td>\n            <td>{{current_speed}}</td>\n          </tr>\n          <tr>\n            <td>Free Flow Speed</td>\n            <td>{{freeflow_speed}}</td>\n          </tr>\n          <tr>\n            <td>Congestion Percentage</td>\n            <td>{{congestion_value}}</td>\n          </tr>\n          <tr>\n            <td>Traffic Condition</td>\n            <td>\n              <span *ngIf='congType == \"Low\"' class=\"low\">{{congType}}</span>\n              <span *ngIf='congType == \"Medium\"' class=\"medium\">{{congType}}</span>\n              <span *ngIf='congType == \"High\"' class=\"high\">{{congType}}</span>\n            </td>\n          </tr>\n        </table>\n        <button class=\"refresh\" (click)=\"getData()\">Refresh</button>\n      </div>\n</div>\n\n"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!forgotPassword\">\n  <div class=\"row\">\n    <h1 class=\"text-center\">Traffic Congestion Prediction</h1>\n    <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\n      <h1 class=\"text-center login-title\" [ngStyle]=\"{'color': color}\">{{logintext}}</h1>\n      <div class=\"account-wall\">\n        <img class=\"profile-img\" [src]=\"inputLogo\" alt=\"\">\n        <form #registrationForm=\"ngForm\" (ngSubmit)=\"loginUser()\" [formGroup]=\"myForm\" class=\"form-signin\">\n          <div class=\"form-group\">\n            <input id=\"username\" type=\"text\" required autofocus placeholder=\"Username\" class=\"form-control\" formControlName=\"username\">\n            <div class=\"errorMessage\" *ngIf=\"myForm.controls['username'].touched && !myForm.controls['username'].valid\">Username is required</div>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"password\" type=\"password\" required class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n            <div class=\"errorMessage\" *ngIf=\"myForm.controls['password'].touched && !myForm.controls['password'].valid\">Password is required</div>\n          </div>\n          <div class=\"form-group\" *ngIf=\"!logging\">\n            <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!registrationForm.valid\">Sign in</button>\n          </div>\n          <div *ngIf=\"logging\" class=\"login-text\">\n            <spinner [size]=\"25\" [tickness]=\"4\"></spinner>\n            {{loginMsg}}\n          </div>\n        </form>\n      </div>\n      <br>\n      <a routerLink=\"/signup\" routerLinkActive=\"active\">Sign Up, if already not a member</a>      \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Overview\">\n    <location \n      [index]=\"locationIndex\"\n      type=\"overview\">\n    </location>\n  </mat-tab>\n  <mat-tab label=\"Monthly Summary\">\n    <location \n      [index]=\"locationIndex\"\n      type=\"monthly\">\n    </location>\n  </mat-tab>\n  <mat-tab label=\"Weekly Summary\">\n    <location \n      [index]=\"locationIndex\"\n      type=\"weekly\">\n    </location>\n  </mat-tab>\n  <mat-tab label=\"Daily Summary\">\n    <location \n      [index]=\"locationIndex\"\n      type=\"daily\">\n    </location>\n  </mat-tab>\n  <mat-tab label=\"Current Status\">\n    <location \n      [index]=\"locationIndex\"\n      type=\"current\">\n    </location>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav #start>\n        <span class=\"logo\"><img [src]=\"inputLogo\" height=\"70px\" width=\"75px\"></span>\n        <ul class=\"places-list\" style=\"list-style: none; padding:0%\">\n            <li class=\"place-name\" *ngFor=\"let place of places; let idx = index\">\n                <span (click)=\"changeLocation(idx)\"><b>{{places[idx]}}</b></span>\n            </li>\n        </ul>\n    </mat-sidenav>\n    <mat-sidenav-content>\n    <div class=\"page-heading\">\n        <i class=\"material-icons menu\" (click)=\"start.toggle(undefined, 'mouse')\">menu</i>   \n        <span>Traffic Congestion Predictions</span> \n        <div class=\"right-heading\">\n            <a (click)=\"logout()\"><b>Logout</b></a>\n        </div>  \n    </div>\n    <navbar [index]=\"locationIndex\"></navbar>\n    </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!forgotPassword\">\n    <div class=\"row\">\n      <h1 class=\"text-center\">Traffic Congestion Prediction</h1>\n      <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\n        <h1 class=\"text-center login-title\" [ngStyle]=\"{'color': color}\">{{logintext}}</h1>\n        <div class=\"account-wall\">\n        <img class=\"profile-img\" [src]=\"inputLogo\" alt=\"\">\n        <form #registrationForm=\"ngForm\" (ngSubmit)=\"loginUser()\" [formGroup]=\"myForm\" class=\"form-signin\">\n          <div class=\"form-group\">\n            <input id=\"username\" type=\"text\" required autofocus placeholder=\"Username\" class=\"form-control\" formControlName=\"username\">\n            <div class=\"errorMessage\" *ngIf=\"myForm.controls['username'].touched && !myForm.controls['username'].valid\">Username is required</div>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"name\" type=\"text\" required autofocus placeholder=\"Name\" class=\"form-control\" formControlName=\"name\">\n            <div class=\"errorMessage\" *ngIf=\"myForm.controls['name'].touched && !myForm.controls['name'].valid\">Name is required</div>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"password\" type=\"password\" required autofocus placeholder=\"Password\" class=\"form-control\" formControlName=\"password\">\n            <div class=\"errorMessage\" *ngIf=\"myForm.controls['password'].touched && !myForm.controls['password'].valid\">Password is required</div>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"cnfmpassword\" type=\"password\" required autofocus placeholder=\"Confirm Password\" class=\"form-control\" formControlName=\"cnfmpassword\">\n            <div class=\"errorMessage\" *ngIf=\"myForm.controls['cnfmpassword'].touched && !myForm.controls['cnfmpassword'].valid\">Confirm Password is required</div>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"dob\" type=\"text\" required autofocus placeholder=\"Date of Birth (MMM dd, yyyy)\" class=\"form-control\" formControlName=\"dob\">\n            <div class=\"errorMessage\" *ngIf=\"myForm.controls['dob'].touched && !myForm.controls['dob'].valid\">Date of Birth is required</div>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"phone\" type=\"text\" required autofocus placeholder=\"Phone No\" class=\"form-control\" formControlName=\"phone\">\n            <div class=\"errorMessage\" *ngIf=\"myForm.controls['phone'].touched && !myForm.controls['phone'].valid\">Phone No is required</div>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"email\" type=\"email\" required autofocus placeholder=\"Email\" class=\"form-control\" formControlName=\"email\">\n            <div class=\"errorMessage\" *ngIf=\"myForm.controls['email'].touched && !myForm.controls['email'].valid\">Email is required</div>\n          </div>\n          <div class=\"form-group\" *ngIf=\"!logging\">\n              <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!registrationForm.valid\">Sign Up</button>\n          </div>\n          <div *ngIf=\"logging\" class=\"login-text\">\n            <spinner [size]=\"25\" [tickness]=\"4\"></spinner>\n            Signing Up. Please wait...\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(579)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(294);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(295);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(296);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(297);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(298);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(299);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(300);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(301);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(572);

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(136);

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(143);

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(201);

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(204);

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(208);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(14);

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(215);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__(80);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });



/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(306);

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(539);

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(547);

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(553);

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(580);

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(596);

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(621);

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(649);

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(679);

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(693);

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(709);

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(711);

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(717);

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(722);

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(760);

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(763);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(137);






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.loginSuccessful = true;
    }
    AuthenticationService.prototype.isAuthenticated = function () {
        return !this.checkTokenExpired();
    };
    AuthenticationService.prototype.clearUserDataAndRedirect = function () {
        localStorage.clear();
        this.router.navigate(['/sessionexpired']);
    };
    /**
     * Sends a login request
     *
     */
    AuthenticationService.prototype.login = function (body) {
        return this.http.post('/api/login', body, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* jsonHeader */])())
            .map(this.extractToken)
            .catch(this.handleError);
    };
    /**
   * Sends a signup request
   *
   */
    AuthenticationService.prototype.signup = function (body) {
        return this.http.post('/api/signup', body, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* jsonHeader */])())
            .catch(this.handleError);
    };
    /**
     * Logout method to send a logout request to the server and clear localStorage
     */
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        if (this.isAuthenticated()) {
            this.getResource('/api/logout')
                .subscribe(function (data) { return _this.handleLogout(data); }, function (error) {
                if (error.status === 401) {
                    _this.router.navigate(['/sessionexpired']);
                }
            }, function () { return console.log('got data'); });
        }
        else {
            this.clearUserDataAndRedirect();
        }
    };
    /**
     *
     * Post resource to send a post request to the server.
     * Extracts the current token from the local storage else redirects to
     * session expired modal.
     */
    AuthenticationService.prototype.postResource = function (body, url) {
        var token = localStorage.getItem('token');
        var postHeader = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ Authorization: 'Bearer ' + token });
        postHeader.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: postHeader });
        return this.http.post(url, body, options).map(function (res) { return res.json(); });
    };
    /**
     * Get resource to fetch data from server using an end point as `url`
     */
    AuthenticationService.prototype.getResource = function (url) {
        var token = localStorage.getItem('token');
        var getHeader = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ Authorization: 'Bearer ' + token });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: getHeader });
        return this.http.get(url, options);
    };
    AuthenticationService.prototype.extractToken = function (res) {
        var body = res.json();
        if (res.status === 200) {
            var response = 'response';
            var tokenString = 'jwt';
            var token = body[tokenString];
            //TODO: Decode token and get expiry time from here, someone has to implement this. :(
            var expiry = new Date(body['exp']);
            var maxTokenExpiryTime = expiry.getTime();
            localStorage.setItem('token', token);
            localStorage.setItem('exp', String(maxTokenExpiryTime));
        }
    };
    /**
     *
     * This function checks if the current token of the app has been expired
     * based on the first time authentication from server
     */
    AuthenticationService.prototype.checkTokenExpired = function () {
        var expiryTime = Number(localStorage.getItem('exp'));
        var curTime = Math.floor(new Date().getTime() / 1000);
        if (curTime > expiryTime) {
            console.log('Session expired.');
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    /**
     *
     * On logout, clear the local storage and redirect to login page
     */
    AuthenticationService.prototype.handleLogout = function (data) {
        if (data.status === 200) {
            localStorage.clear();
            this.router.navigate(['/login']);
        }
    };
    AuthenticationService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_component__ = __webpack_require__(286);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_component__["a"]; });



/***/ })

},[289]);
//# sourceMappingURL=main.bundle.js.map