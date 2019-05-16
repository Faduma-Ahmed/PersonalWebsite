(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test{\n    min-width: 1375px;\n    min-height: 100%;\n    margin:0 auto;\n    background-color:#d0c1bb;opacity: 1;\n    z-index: 10;\n\n}\nhtml, body, #fullheight {\n    min-height: 100% !important;\n    height: 100%;\n}\n.title {\n    letter-spacing: 3px;\n    font-style: italic;\n    font-weight: 200;\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix3QkFBd0IsQ0FBQyxVQUFVO0lBQ25DLFdBQVc7O0FBRWY7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0e1xuICAgIG1pbi13aWR0aDogMTM3NXB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkMGMxYmI7b3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiAxMDtcblxufVxuaHRtbCwgYm9keSwgI2Z1bGxoZWlnaHQge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4udGl0bGUge1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-header></app-header>\n\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _header_pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/pages/about/about.component */ "./src/app/header/pages/about/about.component.ts");
/* harmony import */ var _header_pages_intro_intro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/pages/intro/intro.component */ "./src/app/header/pages/intro/intro.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__["fab"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _header_pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _header_pages_intro_intro_component__WEBPACK_IMPORTED_MODULE_9__["IntroComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_pages_intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/pages/intro/intro.component */ "./src/app/header/pages/intro/intro.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _header_pages_intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot([
                    { path: 'about', component: _header_pages_intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"] },
                    { path: '**', redirectTo: 'about' }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
            ],
            providers: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-link {\n    min-height: 5px !important;\n    min-width: 10px !important;\n    border-top: solid white;\n    padding: 0 12px !important;\n    font-size: 14px;\n   \n}\n.tabs-group{\n    border-top: 12px solid white;\n    border-bottom: 1px solid white;\n    margin-left: 13%;\n    \n}\n.search {\n    position: absolute;\n    border: 10px solid white; \n    top: 10px !important;\n    right:5px;\n    opacity: 0.5;\n   \n   \n}\n.mat-menu-panel {\n    transition: none !important;\n    box-shadow: none !important;\n    border-right: 1px solid rgb(252, 246, 246);\n    border-left: 1px solid rgb(250, 246, 246);\n    border-bottom: 1px solid rgb(250, 246, 246);\n    background-color: rgb(250, 246, 246);\n    border-radius: 0 !important;\n  \n}\n.mat-menu-item{\n    opacity: 0.6;   \n}\n.logo{\n    position: absolute;\n    border: 5px solid white;\n}\n.fa {\n    border: 5px solid white;\n    line-height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxZQUFZOzs7QUFHaEI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsMENBQTBDO0lBQzFDLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0Msb0NBQW9DO0lBQ3BDLDJCQUEyQjs7QUFFL0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYi1saW5rIHtcbiAgICBtaW4taGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwIDEycHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICBcbn1cbi50YWJzLWdyb3Vwe1xuICAgIGJvcmRlci10b3A6IDEycHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMyU7XG4gICAgXG59XG4uc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlOyBcbiAgICB0b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICByaWdodDo1cHg7XG4gICAgb3BhY2l0eTogMC41O1xuICAgXG4gICBcbn1cbi5tYXQtbWVudS1wYW5lbCB7XG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjUyLCAyNDYsIDI0Nik7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjUwLCAyNDYsIDI0Nik7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNTAsIDI0NiwgMjQ2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNDYsIDI0Nik7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBcbn1cbi5tYXQtbWVudS1pdGVte1xuICAgIG9wYWNpdHk6IDAuNjsgICBcbn1cblxuLmxvZ297XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xufVxuLmZhIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav mat-tab-nav-bar>\n<div class= \"logo\"> <img width=\"170\" height=\"50\"src=\"assets/images/name.png\"></div>\n<div class= \"tabs-group\">\n\n<a mat-tab-link [disableRipple]=\"true\" routerLinkActive=\"active\" routerLink=\"/about\">Login>About</a>\n<a mat-tab-link [disableRipple]=\"true\" [matMenuTriggerFor]=\"menu\">Projects</a>\n<mat-menu #menu=\"matMenu\" >\n    <button mat-menu-item (click)=\"changeTab(2)\" >Technology</button>\n    <button mat-menu-item (click)=\"changeTab(3)\">Sumthing</button>\n     <button mat-menu-item (click)=\"changeTab(4)\">Sumthing Else</button>\n  </mat-menu>\n <a mat-tab-link [disableRipple]=\"true\" justify-self=\"center\">Photos</a>  \n <a mat-tab-link [disableRipple]=\"true\" justify-self=\"center\">Discussions</a>\n</div>  \n\n<!-- <div class= \"contact\" >\n    <a mat-tab-link [disableRipple]=\"true\" justify-self=\"center\">Contact</a>  \n</div> -->\n\n <div class= \"search\">\n    <i class=\"fa fa-github fa-lg\" ></i>\n    <i class=\"fa fa-instagram fa-lg\" ></i>\n    <i class=\"fa fa-twitter fa-lg \" ></i>\n    <i class=\"fa fa-search \" ></i>\n</div>\n\n    \n<router-outlet></router-outlet>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.links = ['About', 'Projects', 'Disscussion', 'Contact'];
        this.activeLink = this.links[0];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // this.titleService.setTitle( 'Faduma Ahmed' );
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/pages/about/about.component.css":
/*!********************************************************!*\
  !*** ./src/app/header/pages/about/about.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.layer{\n    max-width: 1375px;\n    min-height: 1375px;\n    margin:0 auto;\n    background-color:#fbf7f5;\n  \n}\n\n.blurb {\n    background-color:white;\n    position: absolute;\n    min-width: 600px; \n    max-width: 600px;\n    max-height: 490px;\n    opacity: 0.7;\n    bottom: 0;\n    top: 2%;\n    left: 5%;\n    letter-spacing: .75px;\n    line-height: 1.5rem;\n   \n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixtQkFBbUI7O0FBRXZCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5sYXllcntcbiAgICBtYXgtd2lkdGg6IDEzNzVweDtcbiAgICBtaW4taGVpZ2h0OiAxMzc1cHg7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmYmY3ZjU7XG4gIFxufVxuXG4uYmx1cmIge1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1pbi13aWR0aDogNjAwcHg7IFxuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWF4LWhlaWdodDogNDkwcHg7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDIlO1xuICAgIGxlZnQ6IDUlO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNzVweDtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/pages/about/about.component.html":
/*!*********************************************************!*\
  !*** ./src/app/header/pages/about/about.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layer\">\n    <div class= \"blurb\">\n        <h1>Blurb About Yourself</h1>\n        <p>I am a computer engineering student at the University of Waterloo.  </p>\n    </div>\n \n</div>"

/***/ }),

/***/ "./src/app/header/pages/about/about.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/header/pages/about/about.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/header/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/header/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/header/pages/intro/intro.component.css":
/*!********************************************************!*\
  !*** ./src/app/header/pages/intro/intro.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.layer{\n    max-width: 1375px;\n    min-height: 1375px;\n    margin:0 auto;\n    background-color:#fbf7f5;\n\n    \n  \n}\n.title {\n    position: absolute;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n    font-style: italic;\n    opacity: 0.7;\n    top: 44%;\n    left: 68%;\n    font-weight: 200;\n    text-align: center;\n    z-index: 5;\n}\n.self-portait {\n   position: absolute;\n    z-index: 4;\n    border-radius: 98%;\n    opacity: 0.4;\n    bottom: 0;\n    top: 10%;\n    left: 55%;\n    width: 500px;\n    background-color: inherit;\n}\n.text {\n    position: absolute;\n    min-width: 490px; \n    max-width: 490px;\n    opacity: 0.7;\n    bottom: 0;\n    top: 17%;\n    left: 15%;\n    font: normal 14px !important;\n    letter-spacing: .75px;\n    line-height: 1.5rem;\n    -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL3BhZ2VzL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0JBQXdCOzs7O0FBSTVCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtHQUNHLGtCQUFrQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsNENBQTRDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL3BhZ2VzL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5sYXllcntcbiAgICBtYXgtd2lkdGg6IDEzNzVweDtcbiAgICBtaW4taGVpZ2h0OiAxMzc1cHg7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmYmY3ZjU7XG5cbiAgICBcbiAgXG59XG4udGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICB0b3A6IDQ0JTtcbiAgICBsZWZ0OiA2OCU7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogNTtcbn1cbi5zZWxmLXBvcnRhaXQge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgYm9yZGVyLXJhZGl1czogOTglO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogNTUlO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4udGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1pbi13aWR0aDogNDkwcHg7IFxuICAgIG1heC13aWR0aDogNDkwcHg7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDE3JTtcbiAgICBsZWZ0OiAxNSU7XG4gICAgZm9udDogbm9ybWFsIDE0cHggIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjc1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/pages/intro/intro.component.html":
/*!*********************************************************!*\
  !*** ./src/app/header/pages/intro/intro.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layer\">\n   \n    <div class= \"text\">\n        <p>Hi there!</p>\n    <p>As school/co-op takes up a significant portion of my time, I made it a goal to develop and document my personal intrests. \n         Here you should expect to see projects that I have worked on; from web-apps to community initiatives, photos I have taken along the way, \n         and my thoughts on numerous topics; from societal/political matters, new and innovative technologies, to trends in pop-culture. \n         Im currently coding the rest of this site, but I hope you'll stop by to see the finished product.</p>\n         <p> -Faduma M. Ahmed</p>\n</div>\n    <img class=\"self-portait\" src=\"assets/images/SelfPortait.png\">\n</div>"

/***/ }),

/***/ "./src/app/header/pages/intro/intro.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/header/pages/intro/intro.component.ts ***!
  \*******************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/header/pages/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/header/pages/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fadumaahmed/PersonalWebsite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map