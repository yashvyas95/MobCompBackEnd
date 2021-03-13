(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Itachi_yv\Downloads\demo (2)\demo\frontendapp\src\main.ts */"zUnb");


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/User */ "jraZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class UserComponent {
    constructor(FormBuilder, http, router) {
        this.FormBuilder = FormBuilder;
        this.http = http;
        this.router = router;
        this.user = new _model_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
    }
    onSubmit(userData) {
        console.log("IN onSubmit method");
        console.log(userData.email);
        console.log(userData.password);
        this.http.post('http://localhost:8080/adduser/${userData.email}', userData).subscribe((response) => this.reDirect(), (error) => console.log(error));
    }
    reDirect() {
        this.router.navigate([`./fire-department.component.html`]);
    }
    reDirectToLogin() {
        this.router.navigate([`login`]);
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 2, vars: 0, template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UserWorks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".user-card-form[_ngcontent-%COMP%]{\r\n    max-width: 400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jYXJkLWZvcm17XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SidebarComponent {
    constructor(router) {
        this.router = router;
        this.showFiller = false;
    }
    ngOnInit() {
    }
    goToRequest() {
        this.router.navigateByUrl('/requestEmp');
    }
    goToRescueTeam() {
        this.router.navigateByUrl('/rescueTeam');
    }
    goToUser() {
        this.router.navigateByUrl('/user');
    }
    goToDepartments() {
        this.router.navigateByUrl('/departments');
    }
    goToChatLobby() {
        this.router.navigateByUrl('/chatLobb');
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 18, vars: 0, consts: [[1, "sidebar"], [2, "text-align", "center", "font-size", "1em"], [2, "text-align", "center"], [1, "btnCreateSubreddit", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SideNavigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_4_listener() { return ctx.goToRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_7_listener() { return ctx.goToRescueTeam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rescue Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_10_listener() { return ctx.goToUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Departments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_13_listener() { return ctx.goToDepartments(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_16_listener() { return ctx.goToChatLobby(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ChatLobby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".sidebar[_ngcontent-%COMP%]{\r\n  width: 312px;\r\n  height: 242px;\r\n  --post-line-color: #ccc;    \r\n  border: 1px solid #ccc;\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n  background-color: rgba(255,255,255,0.8);\r\n  color: #878A8C;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  padding:5px;\r\n  margin-top: 50px;\r\n  margin-bottom: 10px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.btnCreatePost[_ngcontent-%COMP%], .btnCreateSubreddit[_ngcontent-%COMP%]{\r\n  background-color: #0079D3;\r\n  border-color: #0079D3;\r\n  color: aliceblue;\r\n  fill: #0079D3;\r\n  border: 1px solid;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  text-decoration: none;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: .5px;\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n  padding: 3px 16px;    \r\n  opacity: 1;\r\n  width: 288px;\r\n  height: 34px;\r\n}\r\n\r\n.btnCreateSubreddit[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n  color: #0079D3;\r\n  background-color: transparent;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  line-height: 20px;\r\n  color: #1c1c1c;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2QyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhcntcclxuICB3aWR0aDogMzEycHg7XHJcbiAgaGVpZ2h0OiAyNDJweDtcclxuICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYzsgICAgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gIGNvbG9yOiAjODc4QThDO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzo1cHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYnRuQ3JlYXRlUG9zdCwgLmJ0bkNyZWF0ZVN1YnJlZGRpdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OUQzO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwNzlEMztcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIGZpbGw6ICMwMDc5RDM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmc6IDNweCAxNnB4OyAgICBcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiAyODhweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi5idG5DcmVhdGVTdWJyZWRkaXR7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGNvbG9yOiAjMDA3OUQzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc2lkZWJhcj51bD5saXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzFjMWMxYztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "4zdL":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class ToolbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 19, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], ["color", "primary"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEIiLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5YdD":
/*!**********************************************!*\
  !*** ./src/app/request/request.component.ts ***!
  \**********************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_Request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Request */ "uLQI");
/* harmony import */ var _model_RequestForSending__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/RequestForSending */ "T/WO");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _services_victim_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/victim-services.service */ "e978");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");












class RequestComponent {
    constructor(ngZone, localStorage, vicService, FormBuilder, http, router) {
        this.ngZone = ngZone;
        this.localStorage = localStorage;
        this.vicService = vicService;
        this.FormBuilder = FormBuilder;
        this.http = http;
        this.router = router;
        this.isHidden = true;
        this.request = new _model_Request__WEBPACK_IMPORTED_MODULE_2__["Request"](0, false, false, false);
        //requestSending: RequestForSending = new RequestForSending("","","",0,);
        this.invalid = true;
        this.requestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            people: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            fire: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            medical: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            crime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
        this.message = "THIS IS MESSAGE";
        // username='user';
        // password='user';
        this.invalidLogin = false;
    }
    ngOnInit() {
        //this.loginService.authenticate("user","user");
    }
    onSubmit(requestData) {
        let nature;
        if (requestData.crime) {
            if (requestData.fire) {
                if (requestData.medical) {
                    nature = 6;
                }
                else {
                    nature = 3;
                }
            }
            else if (requestData.medical) {
                nature = 5;
            }
            else {
                nature = 0;
            }
        }
        else if (requestData.fire) {
            if (requestData.medical) {
                nature = 4;
            }
            else {
                nature = 1;
            }
        }
        else if (requestData.medical) {
            nature = 2;
        }
        console.log(requestData.name);
        console.log("nature" + requestData.nature);
        console.log("NATURE CALCULATED" + nature);
        var rSending = new _model_RequestForSending__WEBPACK_IMPORTED_MODULE_3__["RequestForSending"](requestData.name, requestData.people, nature, requestData.location, 0, true);
        //console.log("NATURE CALCULATED2"+JSON.stringify(rSending));
        this.vicService.addRequest(rSending).subscribe((data) => {
            console.log(data);
            this.localStorage.store('request', data);
            this.ngZone.run(() => this.router.navigateByUrl('requestLanding'));
        }, (error) => console.log(error));
    }
    redirectToLobby() {
        this.router.navigate(['lobby']);
    }
    returnData(response) {
        if (response.id != null) {
            this.router.navigate(['/lobby', response.id]);
        }
        console.log(response.id);
    }
    showRequestForm() {
        // this.loginService.authenticate("user","user");
        if (this.isHidden == true) {
            this.isHidden = false;
        }
        else {
            this.isHidden = true;
        }
    }
    redirectToLogin() {
        this.router.navigate(['./login']);
    }
    sendMessage() {
        this.chatService.sendMessage(this.message);
        this.message = '';
    }
}
RequestComponent.ɵfac = function RequestComponent_Factory(t) { return new (t || RequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_victim_services_service__WEBPACK_IMPORTED_MODULE_5__["VictimServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
RequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestComponent, selectors: [["app-request"]], decls: 37, vars: 4, consts: [[1, "login-section"], [1, "row", "justify-content-md-center"], [1, "col", "col-lg-2"], [1, "col-md-auto"], [1, "card-header", 2, "text-align", "center"], [1, "requestForm-card"], ["group", "request-form", 3, "formGroup", "ngSubmit"], ["matInput", "", "type", "String", "required", "", "formControlName", "name", "placeholder", "Ex. xyz", 1, "form-control"], ["matInput", "", "type", "Number", "required", "", "formControlName", "people", "placeholder", "Ex. 1,2,3...", 1, "form-control"], ["matInput", "", "type", "String", "formControlName", "location", "placeholder", "berlin,...", 1, "form-control"], [1, "example-section"], ["type", "checkbox", "formControlName", "fire", 1, "example-margin", 3, "ngModel", "ngModelChange"], ["formControlName", "medical", 1, "example-margin", 3, "ngModel", "ngModelChange"], ["formControlName", "crime", 1, "example-margin", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "login"]], template: function RequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RequestComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(ctx.requestForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "No. of People");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nature of Assistance Needed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestComponent_Template_mat_checkbox_ngModelChange_25_listener($event) { return ctx.request.fire = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Fire ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestComponent_Template_mat_checkbox_ngModelChange_28_listener($event) { return ctx.request.medical = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Medical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestComponent_Template_mat_checkbox_ngModelChange_31_listener($event) { return ctx.request.crime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Crime ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.requestForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.fire);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.medical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.crime);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"]], styles: [".login-section[_ngcontent-%COMP%]{\r\n    margin: 100px;\r\n    position: center;\r\n}\r\n\r\n\r\n.login-failed[_ngcontent-%COMP%], .register-success[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    border: 2px solid black;\r\n    width: 65%;    \r\n    background-color: red;\r\n}\r\n\r\n\r\n.login-failed-text[_ngcontent-%COMP%], .register-success-text[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 5px;\r\n    font-weight: bold;    \r\n    color: aliceblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJyZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvZ2luLXNlY3Rpb257XHJcbiAgICBtYXJnaW46IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1mYWlsZWQsIC5yZWdpc3Rlci1zdWNjZXNze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDY1JTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5sb2dpbi1mYWlsZWQtdGV4dCwgLnJlZ2lzdGVyLXN1Y2Nlc3MtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICBcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-request',
                templateUrl: './request.component.html',
                styleUrls: ['./request.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }, { type: _services_victim_services_service__WEBPACK_IMPORTED_MODULE_5__["VictimServicesService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "CzMn":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class RequestService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getRequest(id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('id', id.toString());
        //const headers = new HttpHeaders().append('Sec-Fetch-mode','no-cors')
        return this.httpClient.get('http://localhost:8080/api/request/getById/', { params: params });
    }
    completeRequest(id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('id', id);
        return this.httpClient.get('http://localhost:8080/api/request/Completerequest/', { params: params });
    }
    getAllActiveRequest() {
        return this.httpClient.get('http://localhost:8080/api/request/getAllActiveRequest/', {});
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Edq0":
/*!******************************************************************************!*\
  !*** ./src/app/create-department-admin/create-department-admin.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateDepartmentAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDepartmentAdminComponent", function() { return CreateDepartmentAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _model_Department__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Department */ "KPk6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












function CreateDepartmentAdminComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r1.userId, "---", user_r1.department, "");
} }
class CreateDepartmentAdminComponent {
    constructor(httpClient, dialog, data, formBuilder) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.data = data;
        this.formBuilder = formBuilder;
        this.depObj = new _model_Department__WEBPACK_IMPORTED_MODULE_3__["Department"]([], '', '', '');
        this.SelectedEmployees = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.departmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
        this.allemp = data;
    }
    ngOnInit() {
    }
    close() {
        this.dialog.closeAll();
    }
    createDepartment(departmentData) {
        console.log(departmentData);
        console.log(this.SelectedEmployees.value);
        this.depObj.employees = this.SelectedEmployees.value;
        this.depObj.name = departmentData.name;
        this.depObj.location = departmentData.location;
        console.log("DEpartment Creation" + departmentData);
        departmentData.selectedEmployee = this.SelectedEmployees.value;
        return this.httpClient.post('http://localhost:8080/api/department/addDepartment/', this.depObj, { responseType: 'text' }).subscribe();
    }
}
CreateDepartmentAdminComponent.ɵfac = function CreateDepartmentAdminComponent_Factory(t) { return new (t || CreateDepartmentAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CreateDepartmentAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateDepartmentAdminComponent, selectors: [["app-create-department-admin"]], decls: 32, vars: 5, consts: [[1, "col-md-6", "offset-md-10"], ["type", "button", 1, "sign-up", 3, "click"], [1, "col-md-12"], [1, "card"], [1, "card-header", 2, "text-align", "center"], [1, "card-body"], ["group", "Department-form", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "name", 1, "col-md-6", "col-form-label", "text-md-right"], [1, "col-md-6"], ["type", "text", "id", "name", "name", "name", "required", "", "autofocus", "", 1, "form-control", 3, "formControlName"], ["for", "email_address", 1, "col-md-6", "col-form-label", "text-md-right"], ["appearance", "fill"], ["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "location", 1, "col-md-6", "col-form-label", "text-md-right"], ["type", "text", "id", "location", "name", "location", "required", "", "autofocus", "", 1, "form-control", 3, "formControlName"], [1, "col-md-6", "offset-md-4"], ["type", "submit", 1, "sign-up"], [3, "value"]], template: function CreateDepartmentAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateDepartmentAdminComponent_Template_button_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateDepartmentAdminComponent_Template_form_ngSubmit_9_listener() { return ctx.createDepartment(ctx.departmentForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Department name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "All Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CreateDepartmentAdminComponent_mat_option_23_Template, 2, 3, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.departmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.SelectedEmployees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "location");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZGVwYXJ0bWVudC1hZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateDepartmentAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-department-admin',
                templateUrl: './create-department-admin.component.html',
                styleUrls: ['./create-department-admin.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "F1my":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _rescue_team_dialog_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rescue-team-dialog/rescue-team-dialog.component */ "QWLt");
/* harmony import */ var _rescue_team_info_dialog_rescue_team_info_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rescue-team-info-dialog/rescue-team-info-dialog.component */ "qxIg");
/* harmony import */ var _employes_info_dialog_employes_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../employes-info-dialog/employes-info-dialog.component */ "p5Vo");
/* harmony import */ var _all_messages_dialog_all_messages_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../all-messages-dialog/all-messages-dialog.component */ "q3fH");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stomp/stompjs */ "0Lep");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sockjs-client */ "zH15");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _chat_lobby_chat_lobby_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../chat-lobby/chat-lobby.component */ "rwHG");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/message.service */ "tZre");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");


//import {  } from '../services/authentication.service';


















function HomePageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activeRequest_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", activeRequest_r1.requestId, " ", activeRequest_r1.name, " ", activeRequest_r1.location, " ");
} }
class HomePageComponent {
    constructor(messageService, router, localStorage, http, dialog) {
        this.messageService = messageService;
        this.router = router;
        this.localStorage = localStorage;
        this.http = http;
        this.dialog = dialog;
        this.rescueTeamId = 0;
        this.password = 'user';
        this.requestDialogOpen = false;
        this.rescueInfoDialogOpen = false;
        this.employeeInfoDialogOpen = false;
        this.displayedColumns = ['sender', 'content'];
        this.displayedColumnsForRequest = ['requestId', 'name', 'location', 'resTeamObj', 'nature', 'status', 'action', 'action2'];
        console.log(this.localStorage.retrieve('username'));
        this.connect();
        this.newMessages = [];
    }
    ngOnInit() {
        console.log(this.localStorage.retrieve('username'));
        if (this.localStorage.retrieve('username') == null) {
            this.router.navigate(['/']);
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('username', this.localStorage.retrieve('username'));
        this.http.get('http://localhost:8080/api/auth/userByUsername', { params: params }).subscribe((response) => {
            console.log(response),
                this.user = response,
                console.log(this.user.rescueTeamId);
            let params2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('id', this.user.rescueTeamId);
            this.http.get('http://localhost:8080/api/rescueTeam/getById/', { params: params2 }).subscribe((response) => {
                this.rescueTeam = [response],
                    console.log(this.rescueTeam);
                console.log(response);
                this.http.get('http://localhost:8080/api/rescueTeam/getRequestByRescueTeamId/', { params: params2 }).subscribe((response) => {
                    this.requestAssignedToUser = response;
                    console.log(response);
                }, (error) => console.log(error));
            }, (error) => console.log(error));
        }, (error) => console.log(error));
        this.http.get('http://localhost:8080/api/auth/getAllEmp').subscribe((response) => this.AllUsers = response, (error) => console.log(error));
        const params2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('id', this.rescueTeamId.toString());
        this.http.get('http://localhost:8080/api/request/getUserActiveRequest/', { params: params2 }).subscribe((response) => {
            this.active_request = response;
            console.log(response);
        }, (error) => console.log(error));
        this.connect();
        this.messageService.getMessageByUserId(this.user.userId.toString()).subscribe((response) => { this.allMessages = response; }, (error) => { console.log(error); });
        console.log(this.allMessages);
    }
    openRescueDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.data = this.requestAssignedToUser;
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height = "50%";
        dialogConfig.width = "60%";
        dialogConfig.position = { top: "100px", left: "" };
        if (!this.requestDialogOpen) {
            this.dialog.open(_rescue_team_dialog_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_3__["RescueTeamDialogComponent"], dialogConfig);
            this.requestDialogOpen = true;
        }
        else {
            this.dialog.closeAll();
            this.requestDialogOpen = false;
        }
    }
    openRescueTeamInfo() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = this.rescueTeam;
        dialogConfig.autoFocus = true;
        dialogConfig.position = { top: "100px", left: "" };
        if (!this.rescueInfoDialogOpen) {
            this.dialog.open(_rescue_team_info_dialog_rescue_team_info_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RescueTeamInfoDialogComponent"], dialogConfig);
            this.rescueInfoDialogOpen = true;
        }
        else {
            this.dialog.closeAll();
            this.rescueInfoDialogOpen = false;
        }
    }
    openEmployeesInfoDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = this.AllUsers;
        dialogConfig.autoFocus = true;
        dialogConfig.position = { top: "100px", left: "" };
        if (!this.employeeInfoDialogOpen) {
            this.dialog.open(_employes_info_dialog_employes_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EmployesInfoDialogComponent"], dialogConfig);
            this.employeeInfoDialogOpen = true;
        }
        else {
            this.dialog.closeAll();
            this.employeeInfoDialogOpen = false;
        }
    }
    openallMessageDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = this.AllUsers;
        dialogConfig.autoFocus = true;
        dialogConfig.position = { top: "100px", left: "" };
        if (!this.employeeInfoDialogOpen) {
            this.dialog.open(_all_messages_dialog_all_messages_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AllMessagesDialogComponent"], dialogConfig);
            this.employeeInfoDialogOpen = true;
        }
        else {
            this.dialog.closeAll();
            this.employeeInfoDialogOpen = false;
        }
    }
    openChatLobby() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = this.allMessages;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "100%";
        dialogConfig.position = { top: "100px", left: "" };
        this.dialog.open(_chat_lobby_chat_lobby_component__WEBPACK_IMPORTED_MODULE_10__["ChatLobbyComponent"], dialogConfig);
    }
    connect() {
        let socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_8__("http://localhost:8080/socket");
        this.ws = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_7__["Stomp"].over(socket);
        this.ws.connect({}, (frame) => {
            this.ws.subscribe("/topic/chat", (message) => {
                var MessageReceived = JSON.parse(message.body);
                this.newMessages.push(MessageReceived);
                console.log("ALL MESSAGES" + MessageReceived.content);
            });
        });
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_13__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], viewQuery: function HomePageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 31, vars: 1, consts: [[1, "reddit-body"], [1, "container"], [1, "row"], [1, "col-md-9"], [1, "ActiveRequest-card"], [4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "sidebar"], [2, "text-align", "center", "font-size", "1em"], [2, "text-align", "center"], [1, "btnCreateSubreddit", 3, "click"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Active Request Assigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomePageComponent_div_11_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Side-Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_17_listener() { return ctx.openRescueDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Request Assigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_20_listener() { return ctx.openRescueTeamInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Rescue Team Info.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_23_listener() { return ctx.openEmployeesInfoDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_26_listener() { return ctx.openChatLobby(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "ChatLobby");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePageComponent_Template_button_click_29_listener() { return ctx.openallMessageDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.active_request);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"]], styles: [".reddit-body[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]{\r\n  width: 312px;\r\n  height: 274px;\r\n  --post-line-color: #ccc;    \r\n  border: 1px solid #ccc;\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n  background-color: rgba(255,255,255,0.8);\r\n  color: #878A8C;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  padding:5px;\r\n  margin-top: 50px;\r\n  margin-bottom: 10px;\r\n  margin-right: 50px;\r\n}\r\n\r\n.btnCreatePost[_ngcontent-%COMP%], .btnCreateSubreddit[_ngcontent-%COMP%]{\r\n  background-color: #0079D3;\r\n  border-color: #0079D3;\r\n  color: aliceblue;\r\n  fill: #0079D3;\r\n  border: 1px solid;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  text-decoration: none;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: .5px;\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n  padding: 3px 16px;    \r\n  opacity: 1;\r\n  width: 288px;\r\n  height: 34px;\r\n}\r\n\r\n.btnCreateSubreddit[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n  color: #0079D3;\r\n  background-color: transparent;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  line-height: 20px;\r\n  color: #1c1c1c;\r\n}\r\n\r\n.ActiveRequest-card[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n  margin-top: 50px;\r\n  margin-bottom: 10px;\r\n  margin-right: 50px;\r\n  margin-left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEIiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5yZWRkaXQtYm9keXtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnNpZGViYXJ7XHJcbiAgd2lkdGg6IDMxMnB4O1xyXG4gIGhlaWdodDogMjc0cHg7XHJcbiAgLS1wb3N0LWxpbmUtY29sb3I6ICNjY2M7ICAgIFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuICBjb2xvcjogIzg3OEE4QztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6NXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5idG5DcmVhdGVQb3N0LCAuYnRuQ3JlYXRlU3VicmVkZGl0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc5RDM7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3OUQzO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgZmlsbDogIzAwNzlEMztcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogM3B4IDE2cHg7ICAgIFxyXG4gIG9wYWNpdHk6IDE7XHJcbiAgd2lkdGg6IDI4OHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG5cclxuLmJ0bkNyZWF0ZVN1YnJlZGRpdHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY29sb3I6ICMwMDc5RDM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyPnVsPmxpe1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjMWMxYzFjO1xyXG59XHJcblxyXG4uQWN0aXZlUmVxdWVzdC1jYXJke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.css']
            }]
    }], function () { return [{ type: _services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_13__["LocalStorageService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "KPk6":
/*!*************************************!*\
  !*** ./src/app/model/Department.ts ***!
  \*************************************/
/*! exports provided: Department */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
class Department {
    constructor(employees, name, location, status) {
        this.employees = employees;
        this.name = name;
        this.location = location;
        this.status = status;
    }
}


/***/ }),

/***/ "MgOO":
/*!******************************************************************!*\
  !*** ./src/app/message-to-victim/message-to-victim.component.ts ***!
  \******************************************************************/
/*! exports provided: MessageToVictimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageToVictimComponent", function() { return MessageToVictimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stomp/stompjs */ "0Lep");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sockjs-client */ "zH15");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_ChatMessageDto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/ChatMessageDto */ "bWyA");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/request.service */ "CzMn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");












function MessageToVictimComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r1, " ");
} }
class MessageToVictimComponent {
    constructor(dialogRef, localStorage, dialog, data, requestService) {
        this.dialogRef = dialogRef;
        this.localStorage = localStorage;
        this.dialog = dialog;
        this.data = data;
        this.requestService = requestService;
        this.messages = [];
        this.messageVictimForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.requestService.getRequest(this.data).subscribe((response) => {
            this.RequestElement = response;
            console.log(response);
        }, (error) => {
            console.log(error);
        });
        this.user = this.localStorage.retrieve('username');
    }
    ngOnInit() {
        this.connect();
    }
    connect() {
        let socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_4__("http://localhost:8080/socket");
        this.ws = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_3__["Stomp"].over(socket);
        let topic = "/topic/chat/" +
            this.ws.connect({}, (frame) => {
                this.ws.subscribe("/errors", function (message) {
                    alert("Error " + message.body);
                });
                var dataReceived = '';
                this.ws.subscribe("/topic/chat", function (message) {
                    console.log(JSON.parse(message.body.toString()));
                    dataReceived = JSON.parse(message.body);
                    console.log("----------............asdasd." + dataReceived);
                });
                this.messages.push(dataReceived);
            });
    }
    close() {
        console.log("MessageFromADMIN" + this.messageVictimForm.get('message').value);
        this.dialogRef.close();
        console.log("INSIDE-MESSAGE-DIALOG" + this.data);
    }
    sendMessage() {
        console.log("MessageFromADMIN" + this.messageVictimForm.get('message').value);
        console.log("INSIDE-MESSAGE-DIALOG" + this.data);
        let channel = "/app/chat/" + this.RequestElement.requestId + "/send";
        let date = new Date();
        //let messageToSend = new chatMessage(Messagetype.CHAT,this.messageVictimForm.get('message')!.value,this.user);
        let messageToSend = new _model_ChatMessageDto__WEBPACK_IMPORTED_MODULE_5__["ChatMessageDto"](channel, date.toString(), this.user, this.messageVictimForm.get('message').value, this.RequestElement.requestId);
        //let messageToSend = new chatMessage(Messagetype.CHAT,messageContent,"request");
        console.log(messageToSend);
        this.ws.send("/app/chat/" + this.RequestElement.requestId + "/send", {}, JSON.stringify(messageToSend));
        console.log(this.messageVictimForm.get('message').value);
    }
}
MessageToVictimComponent.ɵfac = function MessageToVictimComponent_Factory(t) { return new (t || MessageToVictimComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"])); };
MessageToVictimComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageToVictimComponent, selectors: [["app-message-to-victim"]], decls: 14, vars: 3, consts: [[1, "inbox_chat"], ["class", "channels", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "Message", 1, "col-md-4", "col-form-label", "text-md-right"], [1, "col-md-10"], ["type", "text", "id", "message", "name", "message", "required", "", "autofocus", "", 1, "form-control", 3, "formControlName"], [1, "col-md-6", "offset-md-4"], ["type", "submit", 1, "login"], [1, "login", 3, "click"], [1, "channels"]], template: function MessageToVictimComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageToVictimComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MessageToVictimComponent_Template_form_ngSubmit_2_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Send Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageToVictimComponent_Template_button_click_12_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.messageVictimForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "message");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLXRvLXZpY3RpbS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageToVictimComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message-to-victim',
                templateUrl: './message-to-victim.component.html',
                styleUrls: ['./message-to-victim.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"] }]; }, null); })();


/***/ }),

/***/ "N5zQ":
/*!******************************************************!*\
  !*** ./src/app/rescue-team/rescue-team.component.ts ***!
  \******************************************************/
/*! exports provided: RescueTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescueTeamComponent", function() { return RescueTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RescueTeamComponent {
    constructor() { }
    ngOnInit() {
    }
}
RescueTeamComponent.ɵfac = function RescueTeamComponent_Factory(t) { return new (t || RescueTeamComponent)(); };
RescueTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RescueTeamComponent, selectors: [["app-rescue-team"]], decls: 2, vars: 0, template: function RescueTeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rescue-team works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNjdWUtdGVhbS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RescueTeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rescue-team',
                templateUrl: './rescue-team.component.html',
                styleUrls: ['./rescue-team.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QWLt":
/*!********************************************************************!*\
  !*** ./src/app/rescue-team-dialog/rescue-team-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: RescueTeamDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescueTeamDialogComponent", function() { return RescueTeamDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _message_to_victim_message_to_victim_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message-to-victim/message-to-victim.component */ "MgOO");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/request.service */ "CzMn");










function RescueTeamDialogComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamDialogComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.requestId, " ");
} }
function RescueTeamDialogComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamDialogComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.name, " ");
} }
function RescueTeamDialogComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamDialogComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.location, " ");
} }
function RescueTeamDialogComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " resTeamObj ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamDialogComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.resTeamObj, " ");
} }
function RescueTeamDialogComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " nature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamDialogComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.nature, " ");
} }
function RescueTeamDialogComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamDialogComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.status, " ");
} }
function RescueTeamDialogComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamDialogComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RescueTeamDialogComponent_td_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const element_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.completeRequest(element_r24.requestId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamDialogComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamDialogComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RescueTeamDialogComponent_td_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const element_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.messageDialog(element_r27.requestId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamDialogComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
function RescueTeamDialogComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
class RescueTeamDialogComponent {
    constructor(dialog, data, requestService) {
        this.dialog = dialog;
        this.data = data;
        this.requestService = requestService;
        this.displayedColumns = ['request_id', 'name', 'location', 'resTeamObj', 'nature', 'status', 'action', 'message'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.RequestData = this.data;
        //console.log(this.RequestData.get(0)+"REQYEST");
        console.log(this.data),
            console.log(this.RequestData),
            this.dataSource.data = this.RequestData;
        this.updateSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000).subscribe((val) => {
            this.RequestData = this.data;
        });
    }
    completeRequest(request_id) {
        let data;
        this.requestService.completeRequest(request_id).subscribe((response) => {
            console.log(response),
                data = response;
        }, (error) => console.log(error));
        return data;
    }
    close() {
        this.dialog.closeAll();
    }
    messageDialog(request_id) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = request_id;
        dialogConfig.autoFocus = true;
        dialogConfig.position = { top: "100px", left: "" };
        this.dialog.open(_message_to_victim_message_to_victim_component__WEBPACK_IMPORTED_MODULE_3__["MessageToVictimComponent"], dialogConfig);
    }
}
RescueTeamDialogComponent.ɵfac = function RescueTeamDialogComponent_Factory(t) { return new (t || RescueTeamDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"])); };
RescueTeamDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RescueTeamDialogComponent, selectors: [["app-rescue-team-dialog"]], decls: 32, vars: 3, consts: [["mat-dialog-title", "", 1, "RequestDialog"], [1, "btnCreateSubreddit", 3, "click"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "request_id"], ["mat-header-cell", "", "style", "text-align: center", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: center", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "location"], ["matColumnDef", "resTeamObj"], ["matColumnDef", "nature"], ["matColumnDef", "status"], ["matColumnDef", "action"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "message"], ["mat-header-cell", "", "class", "align-right", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "text-align", "center"], ["mat-cell", "", 2, "text-align", "center"], ["mat-cell", ""], ["mat-header-cell", "", 1, "align-right"], ["mat-header-row", ""], ["mat-row", ""]], template: function RescueTeamDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Request Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RescueTeamDialogComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RescueTeamDialogComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RescueTeamDialogComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RescueTeamDialogComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RescueTeamDialogComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RescueTeamDialogComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RescueTeamDialogComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RescueTeamDialogComponent_th_16_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RescueTeamDialogComponent_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RescueTeamDialogComponent_th_19_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RescueTeamDialogComponent_td_20_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RescueTeamDialogComponent_th_22_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RescueTeamDialogComponent_td_23_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RescueTeamDialogComponent_th_25_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RescueTeamDialogComponent_td_26_Template, 3, 0, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RescueTeamDialogComponent_th_28_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RescueTeamDialogComponent_td_29_Template, 3, 0, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RescueTeamDialogComponent_tr_30_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RescueTeamDialogComponent_tr_31_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.RequestData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\r\n\r\n  .align-right[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    padding: 21px 0;\r\n    justify-content: flex-end;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2N1ZS10ZWFtLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7RUFDM0IiLCJmaWxlIjoicmVzY3VlLXRlYW0tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJ0bkNyZWF0ZVN1YnJlZGRpdHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiAjMDA3OUQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuYWxpZ24tcmlnaHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMjFweCAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RescueTeamDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rescue-team-dialog',
                templateUrl: './rescue-team-dialog.component.html',
                styleUrls: ['./rescue-team-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] }]; }, null); })();


/***/ }),

/***/ "RCl8":
/*!**********************************************************************!*\
  !*** ./src/app/communication-lobby/communication-lobby.component.ts ***!
  \**********************************************************************/
/*! exports provided: CommunicationLobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationLobbyComponent", function() { return CommunicationLobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CommunicationLobbyComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommunicationLobbyComponent.ɵfac = function CommunicationLobbyComponent_Factory(t) { return new (t || CommunicationLobbyComponent)(); };
CommunicationLobbyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommunicationLobbyComponent, selectors: [["app-communication-lobby"]], decls: 2, vars: 0, template: function CommunicationLobbyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "communication-lobby works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tdW5pY2F0aW9uLWxvYmJ5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommunicationLobbyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-communication-lobby',
                templateUrl: './communication-lobby.component.html',
                styleUrls: ['./communication-lobby.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SXdt":
/*!******************************************************************************************!*\
  !*** ./src/app/rescue-team-info-admin-dialog/rescue-team-info-admin-dialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RescueTeamInfoAdminDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescueTeamInfoAdminDialogComponent", function() { return RescueTeamInfoAdminDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _assign_rescue_team_dialog_admin_assign_rescue_team_dialog_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assign-rescue-team-dialog-admin/assign-rescue-team-dialog-admin.component */ "lXvM");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/request.service */ "CzMn");








function RescueTeamInfoAdminDialogComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoAdminDialogComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.rescueTeamId, " ");
} }
function RescueTeamInfoAdminDialogComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " requestId ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoAdminDialogComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.requestId, " ");
} }
function RescueTeamInfoAdminDialogComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoAdminDialogComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.location, " ");
} }
function RescueTeamInfoAdminDialogComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoAdminDialogComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.members, " ");
} }
function RescueTeamInfoAdminDialogComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoAdminDialogComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.nature, " ");
} }
function RescueTeamInfoAdminDialogComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoAdminDialogComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.status, " ");
} }
function RescueTeamInfoAdminDialogComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoAdminDialogComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoAdminDialogComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoAdminDialogComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RescueTeamInfoAdminDialogComponent_td_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const element_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.openAssignDialog(element_r25.rescueTeamId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assign Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoAdminDialogComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function RescueTeamInfoAdminDialogComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
class RescueTeamInfoAdminDialogComponent {
    constructor(requestService, dialog, data) {
        this.requestService = requestService;
        this.dialog = dialog;
        this.data = data;
        this.displayedColumns = ['Id', 'request_id', 'location', 'Members', 'nature', 'status', 'action', 'action2'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.RequestData = this.data;
        //console.log(this.RequestData.get(0)+"REQYEST");
        console.log(this.data),
            console.log(this.RequestData),
            this.dataSource.data = this.RequestData;
        this.activeRequest = this.requestService.getAllActiveRequest().subscribe((response) => {
            this.activeRequest = response;
            console.log(response);
        });
    }
    close() {
        this.dialog.closeAll();
    }
    openAssignDialog(rescueTeamId) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = rescueTeamId;
        dialogConfig.autoFocus = true;
        console.log("HERE" + JSON.stringify(this.activeRequest));
        this.dialog.open(_assign_rescue_team_dialog_admin_assign_rescue_team_dialog_admin_component__WEBPACK_IMPORTED_MODULE_3__["AssignRescueTeamDialogAdminComponent"], dialogConfig);
    }
}
RescueTeamInfoAdminDialogComponent.ɵfac = function RescueTeamInfoAdminDialogComponent_Factory(t) { return new (t || RescueTeamInfoAdminDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
RescueTeamInfoAdminDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RescueTeamInfoAdminDialogComponent, selectors: [["app-rescue-team-info-admin-dialog"]], decls: 32, vars: 3, consts: [["mat-dialog-title", "", "layout-align", "center", 1, "rescueTeamDialog"], [1, "btnCreateSubreddit", 3, "click"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Id"], ["mat-header-cell", "", "class", "align-center", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "request_id"], ["mat-cell", "", "class", "align-center", 4, "matCellDef"], ["matColumnDef", "location"], ["matColumnDef", "Members"], ["matColumnDef", "nature"], ["matColumnDef", "status"], ["matColumnDef", "action"], ["matColumnDef", "action2"], ["mat-header-cell", "", "class", "align-right", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "align-center"], ["mat-cell", ""], ["mat-cell", "", 1, "align-center"], [1, "btnCreateSubreddit"], ["mat-header-cell", "", 1, "align-right"], ["mat-header-row", ""], ["mat-row", ""]], template: function RescueTeamInfoAdminDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rescue Team Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RescueTeamInfoAdminDialogComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RescueTeamInfoAdminDialogComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RescueTeamInfoAdminDialogComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RescueTeamInfoAdminDialogComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RescueTeamInfoAdminDialogComponent_td_11_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RescueTeamInfoAdminDialogComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RescueTeamInfoAdminDialogComponent_td_14_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RescueTeamInfoAdminDialogComponent_th_16_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RescueTeamInfoAdminDialogComponent_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RescueTeamInfoAdminDialogComponent_th_19_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RescueTeamInfoAdminDialogComponent_td_20_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RescueTeamInfoAdminDialogComponent_th_22_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RescueTeamInfoAdminDialogComponent_td_23_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RescueTeamInfoAdminDialogComponent_th_25_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RescueTeamInfoAdminDialogComponent_td_26_Template, 3, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RescueTeamInfoAdminDialogComponent_th_28_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RescueTeamInfoAdminDialogComponent_td_29_Template, 3, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RescueTeamInfoAdminDialogComponent_tr_30_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RescueTeamInfoAdminDialogComponent_tr_31_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.RequestData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\r\n\r\n  \r\n  .align-right[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    padding: 21px 0;\r\n    justify-content: flex-end;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2N1ZS10ZWFtLWluZm8tYWRtaW4tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCw2QkFBNkI7RUFDL0I7OztFQUdBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7RUFDM0IiLCJmaWxlIjoicmVzY3VlLXRlYW0taW5mby1hZG1pbi1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRuQ3JlYXRlU3VicmVkZGl0e1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6ICMwMDc5RDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5hbGlnbi1yaWdodHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAyMXB4IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RescueTeamInfoAdminDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rescue-team-info-admin-dialog',
                templateUrl: './rescue-team-info-admin-dialog.component.html',
                styleUrls: ['./rescue-team-info-admin-dialog.component.css']
            }]
    }], function () { return [{ type: _services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'FrontEnd-app';
    }
}
AppComponent.API_URL = 'http://localhost:8080/api';
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "T/WO":
/*!********************************************!*\
  !*** ./src/app/model/RequestForSending.ts ***!
  \********************************************/
/*! exports provided: RequestForSending */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestForSending", function() { return RequestForSending; });
class RequestForSending {
    constructor(name, numberOfPeople, nature, location, assignedToTeamId, status) {
        this.name = name;
        this.numberOfPeople = numberOfPeople;
        this.nature = nature;
        this.location = location;
        this.assignedToTeamId = assignedToTeamId;
        this.status = status;
    }
}


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _employes_info_dialog_employes_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employes-info-dialog/employes-info-dialog.component */ "p5Vo");
/* harmony import */ var _rescue_team_dialog_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rescue-team-dialog/rescue-team-dialog.component */ "QWLt");
/* harmony import */ var _rescue_team_info_admin_dialog_rescue_team_info_admin_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rescue-team-info-admin-dialog/rescue-team-info-admin-dialog.component */ "SXdt");
/* harmony import */ var _create_rescue_team_dialog_create_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create-rescue-team-dialog/create-rescue-team-dialog.component */ "rH0i");
/* harmony import */ var _chat_lobby_chat_lobby_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chat-lobby/chat-lobby.component */ "rwHG");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../departments/departments.component */ "sy50");
/* harmony import */ var _create_department_admin_create_department_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create-department-admin/create-department-admin.component */ "Edq0");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





//import { RescueTeamInfoDialogComponent } from '../rescue-team-info-dialog/rescue-team-info-dialog.component';













class AdminComponent {
    constructor(router, localStorage, http, dialog) {
        this.router = router;
        this.localStorage = localStorage;
        this.http = http;
        this.dialog = dialog;
        this.rescueTeamId = 0;
        this.password = 'user';
        this.requestDialogOpen = false;
        this.rescueInfoDialogOpen = false;
        this.employeeInfoDialogOpen = false;
        console.log(this.localStorage.retrieve('username'));
    }
    ngOnInit() {
        console.log(this.localStorage.retrieve('username'));
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('username', this.localStorage.retrieve('username'));
        this.http.get('http://localhost:8080/api/request/getAll/').subscribe((response) => { this.request = response, console.log(this.rescueTeam); }, (error) => { console.log(error); });
        this.http.get('http://localhost:8080/api/rescueTeam/getAll/').subscribe((response) => {
            this.rescueTeam = response,
                console.log(this.rescueTeam);
        }, (error) => console.log(error));
        this.http.get('http://localhost:8080/api/auth/getAllEmp').subscribe((response) => this.AllUsers = response, (error) => console.log(error));
        this.updateSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["interval"])(1000).subscribe((val) => {
            this.getallData();
        });
    }
    getallData() {
    }
    openRescueDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.data = this.request;
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.position = { top: "100px", left: "" };
        dialogConfig.width = "200%";
        if (!this.requestDialogOpen) {
            this.dialog.open(_rescue_team_dialog_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RescueTeamDialogComponent"], dialogConfig);
            this.requestDialogOpen = true;
        }
        else {
            this.dialog.closeAll();
            this.requestDialogOpen = false;
        }
    }
    openRescueTeamInfo() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = this.rescueTeam;
        dialogConfig.autoFocus = true;
        if (!this.rescueInfoDialogOpen) {
            this.dialog.open(_rescue_team_info_admin_dialog_rescue_team_info_admin_dialog_component__WEBPACK_IMPORTED_MODULE_5__["RescueTeamInfoAdminDialogComponent"], dialogConfig);
            this.rescueInfoDialogOpen = true;
        }
        else {
            this.dialog.closeAll();
            this.rescueInfoDialogOpen = false;
        }
    }
    openEmployeesInfoDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = this.AllUsers;
        dialogConfig.autoFocus = true;
        if (!this.employeeInfoDialogOpen) {
            this.dialog.open(_employes_info_dialog_employes_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EmployesInfoDialogComponent"], dialogConfig);
            this.employeeInfoDialogOpen = true;
        }
        else {
            this.dialog.closeAll();
            this.employeeInfoDialogOpen = false;
        }
    }
    openChatLobby() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data;
        dialogConfig.width = "200%";
        dialogConfig.position = { top: "100px", left: "" };
        this.dialog.open(_chat_lobby_chat_lobby_component__WEBPACK_IMPORTED_MODULE_7__["ChatLobbyComponent"], dialogConfig);
    }
    createRescueTeam() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = this.AllUsers;
        if (!this.employeeInfoDialogOpen) {
            this.dialog.open(_create_rescue_team_dialog_create_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CreateRescueTeamDialogComponent"], dialogConfig);
            this.employeeInfoDialogOpen = true;
        }
        else {
            this.dialog.closeAll();
            this.employeeInfoDialogOpen = false;
        }
    }
    createDepartment() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = this.AllUsers;
        this.dialog.open(_create_department_admin_create_department_admin_component__WEBPACK_IMPORTED_MODULE_9__["CreateDepartmentAdminComponent"], dialogConfig);
    }
    openDepartmentDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data;
        this.dialog.open(_departments_departments_component__WEBPACK_IMPORTED_MODULE_8__["DepartmentsComponent"], dialogConfig);
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_12__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 40, vars: 0, consts: [[1, "reddit-body"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-button", ""], [1, "col-md-3"], [1, "sidebar"], [2, "text-align", "center", "font-size", "1em"], [2, "text-align", "center"], [1, "btnCreateSubreddit", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "All Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "LIKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Side-Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_20_listener() { return ctx.openRescueDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "All Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_23_listener() { return ctx.openRescueTeamInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Rescue Team Info.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_26_listener() { return ctx.openDepartmentDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Departments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_29_listener() { return ctx.openEmployeesInfoDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_32_listener() { return ctx.openChatLobby(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "ChatLobby");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_35_listener() { return ctx.createRescueTeam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Create Rescue Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_38_listener() { return ctx.createDepartment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Create Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: [".table[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  \r\n  .reddit-body[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]{\r\n    width: 312px;\r\n    height: 300px;\r\n    --post-line-color: #ccc;    \r\n    border: 1px solid #ccc;\r\n    margin-bottom: 10px;\r\n    overflow: hidden;\r\n    background-color: rgba(255,255,255,0.8);\r\n    color: #878A8C;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    padding:5px;\r\n    margin-top: 50px;\r\n    margin-bottom: 10px;\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  .btnCreatePost[_ngcontent-%COMP%], .btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    background-color: #0079D3;\r\n    border-color: #0079D3;\r\n    color: aliceblue;\r\n    fill: #0079D3;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    line-height: 24px;\r\n    text-transform: uppercase;\r\n    padding: 3px 16px;    \r\n    opacity: 1;\r\n    width: 288px;\r\n    height: 34px;\r\n  }\r\n  \r\n  .btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    line-height: 20px;\r\n    color: #1c1c1c;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEIiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAucmVkZGl0LWJvZHl7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXJ7XHJcbiAgICB3aWR0aDogMzEycHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgLS1wb3N0LWxpbmUtY29sb3I6ICNjY2M7ICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgY29sb3I6ICM4NzhBOEM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG5DcmVhdGVQb3N0LCAuYnRuQ3JlYXRlU3VicmVkZGl0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlEMztcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNzlEMztcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmaWxsOiAjMDA3OUQzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogM3B4IDE2cHg7ICAgIFxyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAyODhweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bkNyZWF0ZVN1YnJlZGRpdHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiAjMDA3OUQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyPnVsPmxpe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_12__["LocalStorageService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "WeyK":
/*!****************************************************************************!*\
  !*** ./src/app/message-to-user-dialog/message-to-user-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: MessageToUserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageToUserDialogComponent", function() { return MessageToUserDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stomp/stompjs */ "0Lep");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sockjs-client */ "zH15");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_ChatMessageDto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/ChatMessageDto */ "bWyA");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/request.service */ "CzMn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");













function MessageToUserDialogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const com_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", com_r1, " ");
} }
class MessageToUserDialogComponent {
    constructor(authService, dialogRef, localStorage, dialog, data, requestService) {
        this.authService = authService;
        this.dialogRef = dialogRef;
        this.localStorage = localStorage;
        this.dialog = dialog;
        this.data = data;
        this.requestService = requestService;
        this.coms = [];
        this.messageToUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.user = this.localStorage.retrieve('username');
        this.receivingUser = this.data;
        this.sendingUser = this.user;
    }
    ngOnInit() {
        this.connect();
        console.log("INMESSAGE TO USER DIALOG" + this.data);
    }
    connect() {
        let socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_4__("http://localhost:8080/socket");
        this.ws = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_3__["Stomp"].over(socket);
        let topic = "/topic/chat/" +
            this.ws.connect({}, (frame) => {
                this.ws.subscribe("/errors", function (message) {
                    alert("Error " + message.body);
                });
                this.ws.subscribe("/topic/chat/" + this.data, function (message) {
                    var x = JSON.parse(message.body);
                    console.log("----------............asdasd." + x);
                });
                this.ws.subscribe("/topic/chat", function (message) {
                    var x = (JSON.parse(message.body));
                    console.log("----------............asdasd." + x);
                });
            });
    }
    close() {
        console.log("MessageFromADMIN" + this.messageToUserForm.get('message').value);
        this.dialogRef.close();
        console.log("INSIDE-MESSAGE-DIALOG" + this.data);
    }
    sendMessage() {
        this.coms.push(this.messageToUserForm.get('message').value);
        console.log("SENDING USER" + this.sendingUser);
        console.log("RECEIVING  USER" + this.receivingUser);
        let instantDate = Date();
        let user = this.authService.getUserId(this.sendingUser);
        console.log("USER HERE" + user);
        let channel = "/app/chat/" + user + "/sendToUser";
        console.log("SENDINGTOUSER" + user);
        console.log("CHANNEL" + channel);
        let messageDTOtoSend = new _model_ChatMessageDto__WEBPACK_IMPORTED_MODULE_5__["ChatMessageDto"](channel, instantDate, this.user, this.messageToUserForm.get('message').value, this.data);
        console.log(messageDTOtoSend);
        this.ws.send("/app/chat/" + user + "/sendToUser", {}, JSON.stringify(messageDTOtoSend));
        console.log(this.messageToUserForm.get('message').value);
        //  this.communicatioMessages.push(this.messageToUserForm.get('message')!.value);
    }
}
MessageToUserDialogComponent.ɵfac = function MessageToUserDialogComponent_Factory(t) { return new (t || MessageToUserDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_8__["RequestService"])); };
MessageToUserDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageToUserDialogComponent, selectors: [["app-message-to-user-dialog"]], decls: 16, vars: 3, consts: [[1, "inbox_chat"], ["class", "channels", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "Message", 1, "col-md-4", "col-form-label", "text-md-right"], [1, "col-md-10"], ["type", "text", "id", "message", "name", "user_name", "required", "", "autofocus", "", 1, "form-control", 3, "formControlName"], [1, "col-md-6", "offset-md-4"], ["type", "submit", 1, "login"], [1, "login", 3, "click"], [1, "channels"]], template: function MessageToUserDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Message Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MessageToUserDialogComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MessageToUserDialogComponent_Template_form_ngSubmit_4_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Send Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageToUserDialogComponent_Template_button_click_14_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.coms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.messageToUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "message");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLXRvLXVzZXItZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageToUserDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message-to-user-dialog',
                templateUrl: './message-to-user-dialog.component.html',
                styleUrls: ['./message-to-user-dialog.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_request_service__WEBPACK_IMPORTED_MODULE_8__["RequestService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request/request.component */ "5YdD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logout/logout.component */ "n1B2");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/token-interceptor */ "w6Rq");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _rescue_team_rescue_team_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rescue-team/rescue-team.component */ "N5zQ");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _app_chat_lobby_chat_lobby_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../app/chat-lobby/chat-lobby.component */ "rwHG");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_rescue_team_dialog_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../app/rescue-team-dialog/rescue-team-dialog.component */ "QWLt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _rescue_team_info_dialog_rescue_team_info_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./rescue-team-info-dialog/rescue-team-info-dialog.component */ "qxIg");
/* harmony import */ var _employes_info_dialog_employes_info_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./employes-info-dialog/employes-info-dialog.component */ "p5Vo");
/* harmony import */ var _rescue_team_info_admin_dialog_rescue_team_info_admin_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./rescue-team-info-admin-dialog/rescue-team-info-admin-dialog.component */ "SXdt");
/* harmony import */ var _communication_lobby_communication_lobby_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./communication-lobby/communication-lobby.component */ "RCl8");
/* harmony import */ var _create_rescue_team_dialog_create_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./create-rescue-team-dialog/create-rescue-team-dialog.component */ "rH0i");
/* harmony import */ var _message_to_victim_message_to_victim_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./message-to-victim/message-to-victim.component */ "MgOO");
/* harmony import */ var _message_to_user_dialog_message_to_user_dialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./message-to-user-dialog/message-to-user-dialog.component */ "WeyK");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./departments/departments.component */ "sy50");
/* harmony import */ var _request_landing_request_landing_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./request-landing/request-landing.component */ "ZrfD");
/* harmony import */ var _request_login_request_login_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./request-login/request-login.component */ "sXbv");
/* harmony import */ var _all_messages_dialog_all_messages_dialog_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./all-messages-dialog/all-messages-dialog.component */ "q3fH");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _assign_rescue_team_dialog_admin_assign_rescue_team_dialog_admin_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./assign-rescue-team-dialog-admin/assign-rescue-team-dialog-admin.component */ "lXvM");
/* harmony import */ var _create_department_admin_create_department_admin_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./create-department-admin/create-department-admin.component */ "Edq0");











//import {MatTableModule} from '@angular/material/table';










//import { HttpInterceptorService } from './services/http-interceptor.service';








//import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_20__["TokenInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_21__["NgxWebstorageModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot(),
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_46__["MatPaginatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _request_request_component__WEBPACK_IMPORTED_MODULE_4__["RequestComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
        _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__["HomePageComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_23__["SignupComponent"],
        _rescue_team_rescue_team_component__WEBPACK_IMPORTED_MODULE_24__["RescueTeamComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"],
        _app_chat_lobby_chat_lobby_component__WEBPACK_IMPORTED_MODULE_26__["ChatLobbyComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["SidebarComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_30__["ToolbarComponent"],
        _app_rescue_team_dialog_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_32__["RescueTeamDialogComponent"],
        _rescue_team_info_dialog_rescue_team_info_dialog_component__WEBPACK_IMPORTED_MODULE_34__["RescueTeamInfoDialogComponent"],
        _employes_info_dialog_employes_info_dialog_component__WEBPACK_IMPORTED_MODULE_35__["EmployesInfoDialogComponent"],
        _rescue_team_info_admin_dialog_rescue_team_info_admin_dialog_component__WEBPACK_IMPORTED_MODULE_36__["RescueTeamInfoAdminDialogComponent"],
        _communication_lobby_communication_lobby_component__WEBPACK_IMPORTED_MODULE_37__["CommunicationLobbyComponent"],
        _create_rescue_team_dialog_create_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_38__["CreateRescueTeamDialogComponent"],
        _message_to_victim_message_to_victim_component__WEBPACK_IMPORTED_MODULE_39__["MessageToVictimComponent"],
        _message_to_user_dialog_message_to_user_dialog_component__WEBPACK_IMPORTED_MODULE_40__["MessageToUserDialogComponent"],
        _departments_departments_component__WEBPACK_IMPORTED_MODULE_41__["DepartmentsComponent"],
        _request_landing_request_landing_component__WEBPACK_IMPORTED_MODULE_42__["RequestLandingComponent"],
        _request_login_request_login_component__WEBPACK_IMPORTED_MODULE_43__["RequestLoginComponent"],
        _all_messages_dialog_all_messages_dialog_component__WEBPACK_IMPORTED_MODULE_44__["AllMessagesDialogComponent"],
        _assign_rescue_team_dialog_admin_assign_rescue_team_dialog_admin_component__WEBPACK_IMPORTED_MODULE_47__["AssignRescueTeamDialogAdminComponent"],
        _create_department_admin_create_department_admin_component__WEBPACK_IMPORTED_MODULE_48__["CreateDepartmentAdminComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_21__["NgxWebstorageModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_46__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _request_request_component__WEBPACK_IMPORTED_MODULE_4__["RequestComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                    _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"],
                    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__["HomePageComponent"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_23__["SignupComponent"],
                    _rescue_team_rescue_team_component__WEBPACK_IMPORTED_MODULE_24__["RescueTeamComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"],
                    _app_chat_lobby_chat_lobby_component__WEBPACK_IMPORTED_MODULE_26__["ChatLobbyComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["SidebarComponent"],
                    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_30__["ToolbarComponent"],
                    _app_rescue_team_dialog_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_32__["RescueTeamDialogComponent"],
                    _rescue_team_info_dialog_rescue_team_info_dialog_component__WEBPACK_IMPORTED_MODULE_34__["RescueTeamInfoDialogComponent"],
                    _employes_info_dialog_employes_info_dialog_component__WEBPACK_IMPORTED_MODULE_35__["EmployesInfoDialogComponent"],
                    _rescue_team_info_admin_dialog_rescue_team_info_admin_dialog_component__WEBPACK_IMPORTED_MODULE_36__["RescueTeamInfoAdminDialogComponent"],
                    _communication_lobby_communication_lobby_component__WEBPACK_IMPORTED_MODULE_37__["CommunicationLobbyComponent"],
                    _create_rescue_team_dialog_create_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_38__["CreateRescueTeamDialogComponent"],
                    _message_to_victim_message_to_victim_component__WEBPACK_IMPORTED_MODULE_39__["MessageToVictimComponent"],
                    _message_to_user_dialog_message_to_user_dialog_component__WEBPACK_IMPORTED_MODULE_40__["MessageToUserDialogComponent"],
                    _departments_departments_component__WEBPACK_IMPORTED_MODULE_41__["DepartmentsComponent"],
                    _request_landing_request_landing_component__WEBPACK_IMPORTED_MODULE_42__["RequestLandingComponent"],
                    _request_login_request_login_component__WEBPACK_IMPORTED_MODULE_43__["RequestLoginComponent"],
                    _all_messages_dialog_all_messages_dialog_component__WEBPACK_IMPORTED_MODULE_44__["AllMessagesDialogComponent"],
                    _assign_rescue_team_dialog_admin_assign_rescue_team_dialog_admin_component__WEBPACK_IMPORTED_MODULE_47__["AssignRescueTeamDialogAdminComponent"],
                    _create_department_admin_create_department_admin_component__WEBPACK_IMPORTED_MODULE_48__["CreateDepartmentAdminComponent"]
                ],
                entryComponents: [_app_rescue_team_dialog_rescue_team_dialog_component__WEBPACK_IMPORTED_MODULE_32__["RescueTeamDialogComponent"], _rescue_team_info_admin_dialog_rescue_team_info_admin_dialog_component__WEBPACK_IMPORTED_MODULE_36__["RescueTeamInfoAdminDialogComponent"], _employes_info_dialog_employes_info_dialog_component__WEBPACK_IMPORTED_MODULE_35__["EmployesInfoDialogComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                    ngx_webstorage__WEBPACK_IMPORTED_MODULE_21__["NgxWebstorageModule"].forRoot(),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot(),
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_46__["MatPaginatorModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_20__["TokenInterceptor"],
                        multi: true
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZrfD":
/*!**************************************************************!*\
  !*** ./src/app/request-landing/request-landing.component.ts ***!
  \**************************************************************/
/*! exports provided: RequestLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestLandingComponent", function() { return RequestLandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stomp/stompjs */ "0Lep");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "zH15");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _chat_lobby_chat_lobby_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat-lobby/chat-lobby.component */ "rwHG");
/* harmony import */ var _all_messages_dialog_all_messages_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../all-messages-dialog/all-messages-dialog.component */ "q3fH");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/request.service */ "CzMn");
/* harmony import */ var _services_rescue_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/rescue-team.service */ "mEkH");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/message.service */ "tZre");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "+0xr");

















function RequestLandingComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestLandingComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r14.sender, " ");
} }
function RequestLandingComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestLandingComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.content, " ");
} }
function RequestLandingComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " timestamp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestLandingComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.timestamp, " ");
} }
function RequestLandingComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
function RequestLandingComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function RequestLandingComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Request Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestLandingComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.requestId, " ");
} }
function RequestLandingComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestLandingComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.members, " ");
} }
function RequestLandingComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
function RequestLandingComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
class RequestLandingComponent {
    constructor(dialog, http, requestService, rescueTeamService, localStorage, messageService) {
        this.dialog = dialog;
        this.http = http;
        this.requestService = requestService;
        this.rescueTeamService = rescueTeamService;
        this.localStorage = localStorage;
        this.messageService = messageService;
        this.displayedColumns = ['sender', 'content', 'timestamp'];
        this.displayedColumns2 = ['requestId', 'members'];
    }
    ngOnInit() {
        console.log(this.localStorage.retrieve('request'));
        this.RequestObj = this.requestService.getRequest(this.localStorage.retrieve('request').requestId);
        let RescueTeamAssignedObj;
        console.log(this.localStorage.retrieve('request').resTeamObj);
        let params2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('id', this.localStorage.retrieve('request').resTeamObj);
        this.http.get('http://localhost:8080/api/rescueTeam/getById/', { params: params2 }).subscribe((response) => {
            JSON.stringify(response);
            this.rescueTeamData = [response];
            console.log(response);
            console.log("RESCUE TEAM DATA " + this.rescueTeamData);
        }, (error) => { console.log(error); });
        // console.log("X"+x);
        //console.log(this.rescueTeamData);
        this.messageService.getMessageByRequestId(this.localStorage.retrieve('request').requestId).subscribe((response) => { this.allMessages = response; }, (error) => { console.log(error); });
        console.log(this.allMessages);
        this.connect();
        //this.allMessages=this.messageService.getMessageByUserId(this.localStorage.retrieve('request').requestId);  
        console.log(this.allMessages);
    }
    connect() {
        let socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__("http://localhost:8080/socket");
        this.ws = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__["Stomp"].over(socket);
        let topic = "/topic/chat/" +
            this.ws.connect({}, (frame) => {
                this.ws.subscribe("/errors", function (message) {
                    alert("Error " + message.body);
                });
                var dataReceived = '';
                this.ws.subscribe("/topic/chat", (message) => {
                    console.log(JSON.parse(message.body.toString()));
                    dataReceived = JSON.stringify(message.body);
                    this.allCOllection.push(dataReceived);
                    console.log("----------............asdasd." + dataReceived);
                });
            });
    }
    openChatLobby() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = this.allMessages;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "100%";
        dialogConfig.position = { top: "100px", left: "" };
        this.dialog.open(_chat_lobby_chat_lobby_component__WEBPACK_IMPORTED_MODULE_5__["ChatLobbyComponent"], dialogConfig);
    }
    openAllMessages() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = this.allMessages;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "100%";
        dialogConfig.position = { top: "100px", left: "" };
        this.dialog.open(_all_messages_dialog_all_messages_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AllMessagesDialogComponent"], dialogConfig);
    }
}
RequestLandingComponent.ɵfac = function RequestLandingComponent_Factory(t) { return new (t || RequestLandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rescue_team_service__WEBPACK_IMPORTED_MODULE_8__["RescueTeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"])); };
RequestLandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestLandingComponent, selectors: [["app-request-landing"]], decls: 52, vars: 6, consts: [[1, "reddit-body"], [1, "container"], [1, "row"], [1, "col-md-9"], ["cols", "1", "rowHeight", "1:1"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "sender"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "content"], ["matColumnDef", "timestamp"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "requestId"], ["matColumnDef", "members"], [1, "col-md-3"], [1, "sidebar"], [2, "text-align", "center", "font-size", "1em"], [2, "text-align", "center"], [1, "btnCreateSubreddit", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function RequestLandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "All Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RequestLandingComponent_th_15_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RequestLandingComponent_td_16_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RequestLandingComponent_th_18_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RequestLandingComponent_td_19_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RequestLandingComponent_th_21_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RequestLandingComponent_td_22_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RequestLandingComponent_tr_23_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RequestLandingComponent_tr_24_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Rescue Team Assigned Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RequestLandingComponent_th_34_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RequestLandingComponent_td_35_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RequestLandingComponent_th_37_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RequestLandingComponent_td_38_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RequestLandingComponent_tr_39_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RequestLandingComponent_tr_40_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Side-Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestLandingComponent_Template_button_click_47_listener() { return ctx.openChatLobby(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ChatLobby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestLandingComponent_Template_button_click_50_listener() { return ctx.openAllMessages(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.allMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.rescueTeamData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns2);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRowDef"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRow"]], styles: [".table[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  \r\n  .reddit-body[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]{\r\n    width: 312px;\r\n    height: 150px;\r\n    --post-line-color: #ccc;    \r\n    border: 1px solid #ccc;\r\n    margin-bottom: 10px;\r\n    overflow: hidden;\r\n    background-color: rgba(255,255,255,0.8);\r\n    color: #878A8C;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    padding:5px;\r\n    margin-top: 50px;\r\n    margin-bottom: 10px;\r\n    margin-right: 50px;\r\n  }\r\n  \r\n  .btnCreatePost[_ngcontent-%COMP%], .btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    background-color: #0079D3;\r\n    border-color: #0079D3;\r\n    color: aliceblue;\r\n    fill: #0079D3;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    line-height: 24px;\r\n    text-transform: uppercase;\r\n    padding: 3px 16px;    \r\n    opacity: 1;\r\n    width: 288px;\r\n    height: 34px;\r\n  }\r\n  \r\n  .btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    line-height: 20px;\r\n    color: #1c1c1c;\r\n  }\r\n  \r\n  .ActiveRequest-card[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: 50px;\r\n    margin-bottom: 10px;\r\n    margin-right: 50px;\r\n    margin-left: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtbGFuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCIiwiZmlsZSI6InJlcXVlc3QtbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZWRkaXQtYm9keXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhcntcclxuICAgIHdpZHRoOiAzMTJweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYzsgICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XHJcbiAgICBjb2xvcjogIzg3OEE4QztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG5DcmVhdGVQb3N0LCAuYnRuQ3JlYXRlU3VicmVkZGl0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlEMztcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNzlEMztcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmaWxsOiAjMDA3OUQzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogM3B4IDE2cHg7ICAgIFxyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAyODhweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bkNyZWF0ZVN1YnJlZGRpdHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiAjMDA3OUQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyPnVsPmxpe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgfVxyXG4gIFxyXG4gIC5BY3RpdmVSZXF1ZXN0LWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestLandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-request-landing',
                templateUrl: './request-landing.component.html',
                styleUrls: ['./request-landing.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"] }, { type: _services_rescue_team_service__WEBPACK_IMPORTED_MODULE_8__["RescueTeamService"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"] }, { type: _services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "aqjQ":
/*!*************************************!*\
  !*** ./src/app/model/RescueTeam.ts ***!
  \*************************************/
/*! exports provided: RescueTeam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescueTeam", function() { return RescueTeam; });
class RescueTeam {
    constructor(members, requestIdAssigned, location, nature, status) {
        this.members = members;
        this.requestIdAssigned = requestIdAssigned;
        this.location = location;
        this.nature = nature;
        this.status = status;
    }
}


/***/ }),

/***/ "bWyA":
/*!*****************************************!*\
  !*** ./src/app/model/ChatMessageDto.ts ***!
  \*****************************************/
/*! exports provided: ChatMessageDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageDto", function() { return ChatMessageDto; });
class ChatMessageDto {
    constructor(channel, timestamp, sender, content, receiver) {
        this.channel = channel;
        this.sender = sender;
        this.content = content;
        this.timestamp = timestamp;
        this.receiver = receiver;
    }
}


/***/ }),

/***/ "e978":
/*!*****************************************************!*\
  !*** ./src/app/services/victim-services.service.ts ***!
  \*****************************************************/
/*! exports provided: VictimServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VictimServicesService", function() { return VictimServicesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");





class VictimServicesService {
    constructor(httpClient, localStorage) {
        this.httpClient = httpClient;
        this.localStorage = localStorage;
    }
    /*
      addRequest(requestForSending: RequestForSending): Observable<Request> {
        return this.httpClient.post<Request>('http://localhost:8080/api/request/addRequest',
          requestForSending).pipe(map(data => {
            return true;
          }));
      }
    */
    getRequest(id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('id', id.toString());
        return this.httpClient.get('http://localhost:8080/api/request/getById/', { params: params });
    }
    addRequest(requestForSending) {
        console.log("REQUEST SENDING" + requestForSending);
        var req = this.httpClient.post('http://localhost:8080/api/request/addRequest', requestForSending);
        console.log("VICTIM-SERVIE" + JSON.stringify(req));
        this.localStorage.store('request', req);
        return req;
    }
}
VictimServicesService.ɵfac = function VictimServicesService_Factory(t) { return new (t || VictimServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"])); };
VictimServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VictimServicesService, factory: VictimServicesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VictimServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.username, " ");
} }
function HeaderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Generate Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Request Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.loggedIn.subscribe((data) => this.isLoggedIn = data);
        this.authService.username.subscribe((data) => this.username = data);
        this.isLoggedIn = this.authService.isLoggedIn();
        this.username = this.authService.getUserName();
    }
    goToUserProfile() {
        this.router.navigateByUrl('/user-profile/' + this.username);
    }
    logout() {
        this.authService.logout();
        this.isLoggedIn = false;
        this.router.navigateByUrl('/login');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 2, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "flex-grow-1"], ["aria-label", "Home", "routerLink", "/home", 1, "logo"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", 1, "reddit-icon-svg"], ["fill", "#FF4500", "cx", "10", "cy", "10", "r", "10"], [1, "reddit-text"], [1, "flex-grow-1", "float-right"], ["ngbDropdown", "", "class", "float-right", 4, "ngIf"], [4, "ngIf"], ["ngbDropdown", "", 1, "float-right"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 1, "float-right", "sign-up", "mr-2", 3, "click"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "userdetails"], ["src", "https://www.redditstatic.com/avatars/avatar_default_08_D4E815.png", 1, "account-icon"], ["routerLink", "/signup", 1, "float-right", "sign-up", "mr-2"], ["routerLink", "/login", 1, "float-right", "sign-up", "mr-2"], ["routerLink", "/request", 1, "float-right", "sign-up", "mr-2"], ["routerLink", "/requestLogin", 1, "float-right", "sign-up", "mr-2"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Disaster Management Application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 7, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 9, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["header[_ngcontent-%COMP%]{\r\n    border-radius: 1px solid;\r\n}\r\n.reddit-icon-svg[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    padding: 8px 8px 8px 0;\r\n    width: 50px;\r\n}\r\n.reddit-text[_ngcontent-%COMP%]{        \r\n    font-weight: 700;\r\n    height: 40px;\r\n    width: 40px;    \r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\r\n.login[_ngcontent-%COMP%], .sign-up[_ngcontent-%COMP%]{    \r\n    background-color: transparent;\r\n    border-color: #0079D3;\r\n    color: #0079D3;\r\n    fill: #0079D3;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    line-height: 24px;\r\n    text-transform: uppercase;\r\n    padding: 3px 16px;\r\n    opacity: 1;  \r\n}\r\n.sign-up[_ngcontent-%COMP%]{\r\n    background-color: #0079D3;\r\n    border-color: #0079D3;\r\n    color: aliceblue;\r\n}\r\n.sign-up[_ngcontent-%COMP%]:hover{\r\n    opacity: 0.6;\r\n}\r\n.userdetails[_ngcontent-%COMP%]{    \r\n    background-color: transparent;\r\n    border-color: #0079D3;\r\n    color: #0079D3;\r\n    fill: #0079D3;\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    letter-spacing: 1px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    letter-spacing: .5px;\r\n    line-height: 24px;\r\n    text-transform: uppercase;\r\n    padding: 3px 16px;\r\n    opacity: 1;\r\n    border: 0px;\r\n}\r\n.userdetails[_ngcontent-%COMP%]:hover{\r\n    border: 1px solid;\r\n}\r\n.dropdown-item[_ngcontent-%COMP%]{\r\n    background-color: #f8f9fa;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 18px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.dropdown-item[_ngcontent-%COMP%]:hover{\r\n    background-color: #0079D3;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n    background-color: #f8f9fa;\r\n}\r\n.account-icon[_ngcontent-%COMP%]{\r\n    border-radius: 4px;\r\n    float: left;\r\n    margin-right: 5px;\r\n    max-height: 24px;\r\n    max-width: 24px;\r\n}\r\n.btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsNkJBQTZCO0VBQy9CIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4IHNvbGlkO1xyXG59XHJcbi5yZWRkaXQtaWNvbi1zdmd7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWRkaXQtdGV4dHsgICAgICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4OyAgICBcclxufVxyXG4ubG9nb3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxvZ2luLCAuc2lnbi11cHsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNzlEMztcclxuICAgIGNvbG9yOiAjMDA3OUQzO1xyXG4gICAgZmlsbDogIzAwNzlEMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiAzcHggMTZweDtcclxuICAgIG9wYWNpdHk6IDE7ICBcclxufVxyXG5cclxuLnNpZ24tdXB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OUQzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3OUQzO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLnNpZ24tdXA6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi51c2VyZGV0YWlsc3sgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNzlEMztcclxuICAgIGNvbG9yOiAjMDA3OUQzO1xyXG4gICAgZmlsbDogIzAwNzlEMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiAzcHggMTZweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuLnVzZXJkZXRhaWxzOmhvdmVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlEMztcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4uYWNjb3VudC1pY29ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1heC1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXgtd2lkdGg6IDI0cHg7XHJcbn1cclxuXHJcbi5idG5DcmVhdGVTdWJyZWRkaXR7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogIzAwNzlEMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "iNhY":
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sockjs-client */ "zH15");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stomp/stompjs */ "0Lep");




class WebSocketService {
    constructor() {
        this.topic = "/topic/chat";
        this.chatMessages = [];
    }
    connect() {
        console.log("Initialize WebSocket Connection");
        this.stompClient = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__["Stomp"].over(function () {
            return new WebSocket('ws://localhost:8080/socket/');
        });
        const _this = this;
        let ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_1__(this.webSocket);
        console.log(ws);
        this.stompClient.connect({}, (frame) => {
            this.stompClient.subscribe(_this.topic, (sdkEvent) => {
                this.onMessageReceived(sdkEvent);
            });
            //_this.stompClient.reconnect_delay = 2000;
        });
    }
    /*
      public openWebSocket(){
        this.webSocket = new WebSocket('ws://localhost:8080/ws');
    
        this.webSocket.onopen = (event: any) => {
          console.log('Open: ', event);
        };
    
        this.webSocket.onmessage = (event: any) => {
          const chatMessageDto = JSON.parse(event.data);
          this.chatMessages.push(chatMessageDto);
        };
    
        this.webSocket.onclose = (event : any) => {
          console.log('Close: ', event);
        };
      }
    */
    sendMessage(message) {
        console.log("calling logout api via web socket");
        this.stompClient.send("/app/hello", {}, JSON.stringify(message));
    }
    closeWebSocket() {
        this.webSocket.close();
    }
    onMessageReceived(message) {
        console.log("Message Recieved from Server :: " + message);
        // this.handleMessage(JSON.stringify(message.body));
    }
}
WebSocketService.ɵfac = function WebSocketService_Factory(t) { return new (t || WebSocketService)(); };
WebSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebSocketService, factory: WebSocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebSocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jraZ":
/*!*******************************!*\
  !*** ./src/app/model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor() {
        this.id = '';
        this.username = '';
        this.password = '';
        this.fullName = '';
    }
}


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");

//import { SignupRequestPayload } from '../signup/singup-request.payload';






class AuthService {
    constructor(httpClient, localStorage) {
        this.httpClient = httpClient;
        this.localStorage = localStorage;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.username = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refreshTokenPayload = {
            refreshToken: this.getRefreshToken(),
            username: this.getUserName()
        };
    }
    signup(signupRequestPayload) {
        return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequestPayload, { responseType: 'text' });
    }
    login(loginRequestPayload) {
        return this.httpClient.post('http://localhost:8080/api/auth/login', loginRequestPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            this.localStorage.store('authenticationToken', data.authenticationToken);
            this.localStorage.store('username', data.username);
            this.localStorage.store('refreshToken', data.refreshToken);
            this.localStorage.store('expiresAt', data.expiresAt);
            this.localStorage.store('role', data.role);
            this.localStorage.store('department', data.department);
            this.loggedIn.emit(true);
            this.username.emit(data.username);
            return true;
        }));
    }
    getJwtToken() {
        return this.localStorage.retrieve('authenticationToken');
    }
    refreshToken() {
        return this.httpClient.post('http://localhost:8080/api/auth/refresh/token', this.refreshTokenPayload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => {
            this.localStorage.clear('authenticationToken');
            this.localStorage.clear('expiresAt');
            this.localStorage.store('authenticationToken', response.authenticationToken);
            this.localStorage.store('expiresAt', response.expiresAt);
        }));
    }
    logout() {
        this.httpClient.post('http://localhost:8080/api/auth/logout', this.refreshTokenPayload, { responseType: 'text' })
            .subscribe(data => {
            console.log(data);
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        });
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('username');
        this.localStorage.clear('refreshToken');
        this.localStorage.clear('expiresAt');
        this.localStorage.clear('role');
        this.localStorage.clear('department');
    }
    getUserId(username) {
        let params2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().append('username', username);
        let user;
        this.httpClient.get('http://localhost:8080/api/auth/userByUsername', { params: params2 }).subscribe((response) => { user = response, console.log("IN AUTH SERVICE" + user); }, (error) => { console.log("ERROR IN AUTH SERVICE GET USER ID"); });
        return user;
    }
    getUserName() {
        return this.localStorage.retrieve('username');
    }
    getRefreshToken() {
        return this.localStorage.retrieve('refreshToken');
    }
    isLoggedIn() {
        return this.getJwtToken() != null;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }]; }, { loggedIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], username: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "lXvM":
/*!**********************************************************************************************!*\
  !*** ./src/app/assign-rescue-team-dialog-admin/assign-rescue-team-dialog-admin.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AssignRescueTeamDialogAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignRescueTeamDialogAdminComponent", function() { return AssignRescueTeamDialogAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_rescue_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/rescue-team.service */ "mEkH");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/request.service */ "CzMn");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");







function AssignRescueTeamDialogAdminComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssignRescueTeamDialogAdminComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.requestId, " ");
} }
function AssignRescueTeamDialogAdminComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssignRescueTeamDialogAdminComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.name, " ");
} }
function AssignRescueTeamDialogAdminComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssignRescueTeamDialogAdminComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.location, " ");
} }
function AssignRescueTeamDialogAdminComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " nature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssignRescueTeamDialogAdminComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.nature, " ");
} }
function AssignRescueTeamDialogAdminComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssignRescueTeamDialogAdminComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.status, " ");
} }
function AssignRescueTeamDialogAdminComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Assign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssignRescueTeamDialogAdminComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignRescueTeamDialogAdminComponent_td_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.assignRequest(element_r19.requestId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssignRescueTeamDialogAdminComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function AssignRescueTeamDialogAdminComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
class AssignRescueTeamDialogAdminComponent {
    constructor(rescueTeamService, requestService, dialog, data) {
        this.rescueTeamService = rescueTeamService;
        this.requestService = requestService;
        this.dialog = dialog;
        this.data = data;
        this.displayedColumns = ['request_id', 'name', 'location', 'nature', 'status', 'assign'];
    }
    ngOnInit() {
        this.requestService.getAllActiveRequest().subscribe((response) => {
            this.activeRequest = response;
            console.log(response);
        });
    }
    close() {
        this.dialog.closeAll();
    }
    assignRequest(requestId) {
        console.log(requestId);
        console.log(this.data);
        this.rescueTeamService.assignRequest(requestId, this.data);
    }
}
AssignRescueTeamDialogAdminComponent.ɵfac = function AssignRescueTeamDialogAdminComponent_Factory(t) { return new (t || AssignRescueTeamDialogAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rescue_team_service__WEBPACK_IMPORTED_MODULE_2__["RescueTeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AssignRescueTeamDialogAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignRescueTeamDialogAdminComponent, selectors: [["app-assign-rescue-team-dialog-admin"]], decls: 26, vars: 3, consts: [["mat-dialog-title", "", 1, "AssignRequestDialog"], [1, "btnCreateSubreddit", 3, "click"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "request_id"], ["mat-header-cell", "", "style", "text-align: center", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: center", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "location"], ["matColumnDef", "nature"], ["matColumnDef", "status"], ["matColumnDef", "assign"], ["mat-header-cell", "", "class", "align-right", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "text-align", "center"], ["mat-cell", "", 2, "text-align", "center"], ["mat-header-cell", "", 1, "align-right"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function AssignRescueTeamDialogAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AssignRequestDialog Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignRescueTeamDialogAdminComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AssignRescueTeamDialogAdminComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AssignRescueTeamDialogAdminComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AssignRescueTeamDialogAdminComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AssignRescueTeamDialogAdminComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AssignRescueTeamDialogAdminComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AssignRescueTeamDialogAdminComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AssignRescueTeamDialogAdminComponent_th_16_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AssignRescueTeamDialogAdminComponent_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AssignRescueTeamDialogAdminComponent_th_19_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AssignRescueTeamDialogAdminComponent_td_20_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AssignRescueTeamDialogAdminComponent_th_22_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AssignRescueTeamDialogAdminComponent_td_23_Template, 3, 0, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AssignRescueTeamDialogAdminComponent_tr_24_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AssignRescueTeamDialogAdminComponent_tr_25_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.activeRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ24tcmVzY3VlLXRlYW0tZGlhbG9nLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignRescueTeamDialogAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assign-rescue-team-dialog-admin',
                templateUrl: './assign-rescue-team-dialog-admin.component.html',
                styleUrls: ['./assign-rescue-team-dialog-admin.component.css']
            }]
    }], function () { return [{ type: _services_rescue_team_service__WEBPACK_IMPORTED_MODULE_2__["RescueTeamService"] }, { type: _services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "mEkH":
/*!*************************************************!*\
  !*** ./src/app/services/rescue-team.service.ts ***!
  \*************************************************/
/*! exports provided: RescueTeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescueTeamService", function() { return RescueTeamService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class RescueTeamService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getRescueTeam(id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('id', id);
        return this.httpClient.get('http://localhost:8080/api/rescueTeam/getById/', { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            console.log(data);
            return data;
        }));
    }
    /*
      getmembers(id:number):Observable<any>{
        const params = new HttpParams().append('id',id.toString());
        return this.httpClient.get('http://localhost:8080/api').subscribe();
      }
    */
    createRescueTeam(resTeam) {
        console.log(resTeam);
        //const params = new HttpParams().append('id',id);
        console.log("RESCUETEAM SERVICE" + resTeam);
        return this.httpClient.post('http://localhost:8080/api/rescueTeam/addRescueTeam/', resTeam, { responseType: 'text' }).subscribe();
    }
    assignRequest(requestId, rescueTeamId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('requestId', requestId).append('rescueTeamId', rescueTeamId);
        return this.httpClient.get('http://localhost:8080/api/rescueTeam/assignRequestToResTeam/', { params: params }).subscribe();
    }
}
RescueTeamService.ɵfac = function RescueTeamService_Factory(t) { return new (t || RescueTeamService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RescueTeamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RescueTeamService, factory: RescueTeamService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RescueTeamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "n1B2":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LogoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        //this.authenticationService.logOut();
        // this.router.navigate(['login']);
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 2, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "p5Vo":
/*!************************************************************************!*\
  !*** ./src/app/employes-info-dialog/employes-info-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: EmployesInfoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployesInfoDialogComponent", function() { return EmployesInfoDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _message_to_user_dialog_message_to_user_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message-to-user-dialog/message-to-user-dialog.component */ "WeyK");







function EmployesInfoDialogComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployesInfoDialogComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.userId, " ");
} }
function EmployesInfoDialogComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployesInfoDialogComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.username, " ");
} }
function EmployesInfoDialogComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " rescueTeamId ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployesInfoDialogComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.rescueTeamId, " ");
} }
function EmployesInfoDialogComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployesInfoDialogComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployesInfoDialogComponent_td_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const element_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.messageToUserDialog(element_r13.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployesInfoDialogComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
function EmployesInfoDialogComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
class EmployesInfoDialogComponent {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.displayedColumns = ['Id', 'fullName', 'rescueTeamID', 'action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.Alluser = this.data;
        //console.log(this.RequestData.get(0)+"REQYEST");
        console.log(this.data),
            console.log(this.Alluser),
            this.dataSource.data = this.Alluser;
    }
    close() {
        this.dialog.closeAll();
    }
    messageToUserDialog(user) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.data = user;
        dialogConfig.autoFocus = true;
        dialogConfig.position = { top: "100px", left: "" };
        console.log("USEID::::::" + user);
        this.dialog.open(_message_to_user_dialog_message_to_user_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MessageToUserDialogComponent"], dialogConfig);
    }
}
EmployesInfoDialogComponent.ɵfac = function EmployesInfoDialogComponent_Factory(t) { return new (t || EmployesInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
EmployesInfoDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployesInfoDialogComponent, selectors: [["app-employes-info-dialog"]], decls: 20, vars: 3, consts: [["mat-dialog-title", "", "layout-align", "center", 1, "EmployeeInfoDialog"], [1, "btnCreateSubreddit", 3, "click"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fullName"], ["matColumnDef", "rescueTeamID"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function EmployesInfoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployesInfoDialogComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmployesInfoDialogComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmployesInfoDialogComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmployesInfoDialogComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EmployesInfoDialogComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmployesInfoDialogComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmployesInfoDialogComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EmployesInfoDialogComponent_th_16_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EmployesInfoDialogComponent_td_17_Template, 3, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EmployesInfoDialogComponent_tr_18_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EmployesInfoDialogComponent_tr_19_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.Alluser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVzLWluZm8tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtFQUMvQiIsImZpbGUiOiJlbXBsb3llcy1pbmZvLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkNyZWF0ZVN1YnJlZGRpdHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiAjMDA3OUQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployesInfoDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employes-info-dialog',
                templateUrl: './employes-info-dialog.component.html',
                styleUrls: ['./employes-info-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "q3fH":
/*!**********************************************************************!*\
  !*** ./src/app/all-messages-dialog/all-messages-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: AllMessagesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMessagesDialogComponent", function() { return AllMessagesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class AllMessagesDialogComponent {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
    }
    ngOnInit() {
        console.log(this.data);
    }
    close() {
        this.dialog.closeAll();
    }
}
AllMessagesDialogComponent.ɵfac = function AllMessagesDialogComponent_Factory(t) { return new (t || AllMessagesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AllMessagesDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllMessagesDialogComponent, selectors: [["app-all-messages-dialog"]], decls: 5, vars: 0, consts: [["mat-dialog-title", "", "layout-align", "center", 1, "allMessagesDialog"], [1, "btnCreateSubreddit", 3, "click"]], template: function AllMessagesDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllMessagesDialogComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-dialog-content");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"]], styles: [".btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1tZXNzYWdlcy1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtFQUMvQiIsImZpbGUiOiJhbGwtbWVzc2FnZXMtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJ0bkNyZWF0ZVN1YnJlZGRpdHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiAjMDA3OUQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllMessagesDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-messages-dialog',
                templateUrl: './all-messages-dialog.component.html',
                styleUrls: ['./all-messages-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "qxIg":
/*!******************************************************************************!*\
  !*** ./src/app/rescue-team-info-dialog/rescue-team-info-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: RescueTeamInfoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescueTeamInfoDialogComponent", function() { return RescueTeamInfoDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");






function RescueTeamInfoDialogComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoDialogComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.rescueTeamId, " ");
} }
function RescueTeamInfoDialogComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " requestId ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoDialogComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.requestId, " ");
} }
function RescueTeamInfoDialogComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoDialogComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.location, " ");
} }
function RescueTeamInfoDialogComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoDialogComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.members, " ");
} }
function RescueTeamInfoDialogComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoDialogComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.status, " ");
} }
function RescueTeamInfoDialogComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoDialogComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RescueTeamInfoDialogComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function RescueTeamInfoDialogComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
class RescueTeamInfoDialogComponent {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.displayedColumns = ['Id', 'request_id', 'location', 'members', 'status', 'action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.RequestData = this.data;
        //console.log(this.RequestData.get(0)+"REQYEST");
        console.log(this.data),
            console.log(this.RequestData),
            this.dataSource.data = this.RequestData;
    }
    close() {
        this.dialog.closeAll();
    }
}
RescueTeamInfoDialogComponent.ɵfac = function RescueTeamInfoDialogComponent_Factory(t) { return new (t || RescueTeamInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
RescueTeamInfoDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RescueTeamInfoDialogComponent, selectors: [["app-rescue-team-info-dialog"]], decls: 26, vars: 3, consts: [["mat-dialog-title", "", "layout-align", "center", 1, "rescueTeamDialog"], [1, "btnCreateSubreddit", 3, "click"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "request_id"], ["mat-header-cell", "", "style", "text-align: center", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: center", 4, "matCellDef"], ["matColumnDef", "location"], ["matColumnDef", "members"], ["matColumnDef", "status"], ["matColumnDef", "action"], ["mat-header-cell", "", "class", "align-right", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 2, "text-align", "center"], ["mat-cell", "", 2, "text-align", "center"], ["mat-header-cell", "", 1, "align-right"], [1, "btnCreateSubreddit"], ["mat-header-row", ""], ["mat-row", ""]], template: function RescueTeamInfoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rescue Team Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RescueTeamInfoDialogComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RescueTeamInfoDialogComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RescueTeamInfoDialogComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RescueTeamInfoDialogComponent_th_10_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RescueTeamInfoDialogComponent_td_11_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RescueTeamInfoDialogComponent_th_13_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RescueTeamInfoDialogComponent_td_14_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RescueTeamInfoDialogComponent_th_16_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RescueTeamInfoDialogComponent_td_17_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RescueTeamInfoDialogComponent_th_19_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RescueTeamInfoDialogComponent_td_20_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RescueTeamInfoDialogComponent_th_22_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RescueTeamInfoDialogComponent_td_23_Template, 3, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RescueTeamInfoDialogComponent_tr_24_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RescueTeamInfoDialogComponent_tr_25_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.RequestData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\r\n\r\n  \r\n  .align-right[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    padding: 21px 0;\r\n    justify-content: flex-end;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2N1ZS10ZWFtLWluZm8tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtFQUMvQjs7O0VBR0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJyZXNjdWUtdGVhbS1pbmZvLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkNyZWF0ZVN1YnJlZGRpdHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiAjMDA3OUQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBcclxuICAuYWxpZ24tcmlnaHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMjFweCAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RescueTeamInfoDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rescue-team-info-dialog',
                templateUrl: './rescue-team-info-dialog.component.html',
                styleUrls: ['./rescue-team-info-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "rH0i":
/*!**********************************************************************************!*\
  !*** ./src/app/create-rescue-team-dialog/create-rescue-team-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateRescueTeamDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRescueTeamDialogComponent", function() { return CreateRescueTeamDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _model_RescueTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/RescueTeam */ "aqjQ");
/* harmony import */ var _services_rescue_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rescue-team.service */ "mEkH");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function CreateRescueTeamDialogComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r1.userId, "---", user_r1.department, "");
} }
class CreateRescueTeamDialogComponent {
    constructor(rescueTeamservice, dialog, data, FormBuilder) {
        this.rescueTeamservice = rescueTeamservice;
        this.dialog = dialog;
        this.data = data;
        this.FormBuilder = FormBuilder;
        this.rescueTeam = new _model_RescueTeam__WEBPACK_IMPORTED_MODULE_3__["RescueTeam"]([], 0, '', '', '');
        this.SelectedEmployees = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.rescueTeamForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            selectedEmployee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            fire: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            medical: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            crime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
        this.AllEmp = this.data;
        console.log(this.AllEmp);
    }
    ngOnInit() {
        //cthis.AllEmp=this.data;
    }
    close() {
        this.dialog.closeAll();
    }
    createRescueTeam(rescueTeamData) {
        let nature;
        if (rescueTeamData.crime) {
            if (rescueTeamData.fire) {
                if (rescueTeamData.medical) {
                    nature = 6;
                }
                else {
                    nature = 3;
                }
            }
            else if (rescueTeamData.medical) {
                nature = 5;
            }
            else {
                nature = 0;
            }
        }
        else if (rescueTeamData.fire) {
            if (rescueTeamData.medical) {
                nature = 4;
            }
            else {
                nature = 1;
            }
        }
        else if (rescueTeamData.medical) {
            nature = 2;
        }
        console.log(nature);
        console.log(rescueTeamData);
        console.log(this.SelectedEmployees.value);
        this.rescueTeam.members = this.SelectedEmployees.value;
        this.rescueTeam.location = this.rescueTeamForm.value.location;
        console.log(this.rescueTeam);
        this.rescueTeam.nature = nature;
        this.rescueTeam.status = "true";
        this.rescueTeamservice.createRescueTeam(this.rescueTeam);
    }
}
CreateRescueTeamDialogComponent.ɵfac = function CreateRescueTeamDialogComponent_Factory(t) { return new (t || CreateRescueTeamDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rescue_team_service__WEBPACK_IMPORTED_MODULE_4__["RescueTeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CreateRescueTeamDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateRescueTeamDialogComponent, selectors: [["app-create-rescue-team-dialog"]], decls: 39, vars: 7, consts: [[1, "col-md-6", "offset-md-10"], ["type", "button", 1, "sign-up", 3, "click"], [1, "col-md-12"], [1, "card"], [1, "card-header", 2, "text-align", "center"], [1, "card-body"], ["group", "rescueTeam-form", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], [1, "example-section"], ["formControlName", "fire", 1, "example-margin", 3, "ngModel", "ngModelChange"], ["formControlName", "medical", 1, "example-margin", 3, "ngModel", "ngModelChange"], ["formControlName", "crime", 1, "example-margin", 3, "ngModel", "ngModelChange"], ["for", "email_address", 1, "col-md-6", "col-form-label", "text-md-right"], [1, "col-md-6"], ["appearance", "fill"], ["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "location", 1, "col-md-6", "col-form-label", "text-md-right"], ["type", "text", "id", "location", "name", "location", "required", "", "autofocus", "", 1, "form-control", 3, "formControlName"], [1, "col-md-6", "offset-md-4"], ["type", "submit", 1, "sign-up"], [3, "value"]], template: function CreateRescueTeamDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateRescueTeamDialogComponent_Template_button_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register Rescue Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateRescueTeamDialogComponent_Template_form_ngSubmit_9_listener() { return ctx.createRescueTeam(ctx.rescueTeamForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nature of Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRescueTeamDialogComponent_Template_mat_checkbox_ngModelChange_14_listener($event) { return ctx.fire = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRescueTeamDialogComponent_Template_mat_checkbox_ngModelChange_17_listener($event) { return ctx.medical = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Medical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateRescueTeamDialogComponent_Template_mat_checkbox_ngModelChange_20_listener($event) { return ctx.crime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Crime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "All Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CreateRescueTeamDialogComponent_mat_option_30_Template, 2, 3, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rescueTeamForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fire);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.medical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.SelectedEmployees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AllEmp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "location");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: [".btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1yZXNjdWUtdGVhbS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtFQUMvQiIsImZpbGUiOiJjcmVhdGUtcmVzY3VlLXRlYW0tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJ0bkNyZWF0ZVN1YnJlZGRpdHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiAjMDA3OUQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateRescueTeamDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-rescue-team-dialog',
                templateUrl: './create-rescue-team-dialog.component.html',
                styleUrls: ['./create-rescue-team-dialog.component.css']
            }]
    }], function () { return [{ type: _services_rescue_team_service__WEBPACK_IMPORTED_MODULE_4__["RescueTeamService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "rc/I":
/*!************************************************!*\
  !*** ./src/app/services/department.service.ts ***!
  \************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DepartmentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    createDepartment(Dep) {
        console.log(Dep);
        //const params = new HttpParams().append('id',id);
        console.log("DepartmentService SERVICE" + Dep);
        return this.httpClient.post('http://localhost:8080/api/rescueTeam/addRescueTeam/', Dep, { responseType: 'text' }).subscribe();
    }
    getAllDepartments() {
        return this.httpClient.get('http://localhost:8080/api/department/getAll/', {});
    }
}
DepartmentService.ɵfac = function DepartmentService_Factory(t) { return new (t || DepartmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DepartmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DepartmentService, factory: DepartmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");









function SignupComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a valid username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a valid Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", department_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](department_r4);
} }
class SignupComponent {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.Departments = ["Fire", "Medical", "Army", "Police", "Scientist"];
        this.signupRequestPayload = {
            username: '',
            email: '',
            password: '',
            department: ''
        };
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    signup() {
        this.signupRequestPayload.email = this.signupForm.get('email').value;
        this.signupRequestPayload.username = this.signupForm.get('username').value;
        this.signupRequestPayload.password = this.signupForm.get('password').value;
        this.signupRequestPayload.department = this.signupForm.get('department').value;
        this.authService.signup(this.signupRequestPayload)
            .subscribe(data => {
            this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
        }, error => {
            console.log(error);
            this.toastr.error('Registration Failed! Please try again');
        });
    }
    changeCity(e) {
        this.Departments.setValue(e.target.value, {
            onlySelf: true
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 43, vars: 8, consts: [[1, "register-section"], [1, "row", "justify-content-center"], [1, "col-md-3"], [1, "col-md-6"], [1, "card"], [1, "card-header", 2, "text-align", "center"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "email_address", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "id", "email_address", "name", "email-address", "required", "", "autofocus", "", 1, "form-control", 3, "formControlName"], [4, "ngIf"], [1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "required", "", "autofocus", "", 1, "form-control", 3, "formControlName"], ["for", "password", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "password", "id", "password", "name", "password", "required", "", 1, "form-control", 3, "formControlName"], ["for", "department", 1, "col-md-4", "col-form-label", "text-md-right"], ["appearance", "fill"], ["formControlName", "department", 1, "custom-select", 3, "change"], ["value", "", "disabled", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-md-6", "offset-md-4"], ["type", "submit", 1, "sign-up"], [3, "ngValue"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_9_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "E-Mail Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_span_15_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignupComponent_span_21_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SignupComponent_span_27_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SignupComponent_Template_select_change_35_listener($event) { return ctx.changeCity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Choose your Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SignupComponent_option_38_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("email").valid && ctx.signupForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("username").valid && ctx.signupForm.get("username").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("password").valid && ctx.signupForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Departments);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".register-section[_ngcontent-%COMP%] {\r\n    margin: 100px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAxMDBweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "rwHG":
/*!****************************************************!*\
  !*** ./src/app/chat-lobby/chat-lobby.component.ts ***!
  \****************************************************/
/*! exports provided: ChatLobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatLobbyComponent", function() { return ChatLobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stomp/stompjs */ "0Lep");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sockjs-client */ "zH15");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_ChatMessageDto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/ChatMessageDto */ "bWyA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _services_victim_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/victim-services.service */ "e978");
/* harmony import */ var _services_rescue_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/rescue-team.service */ "mEkH");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/web-socket.service */ "iNhY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");














function ChatLobbyComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", channel_r2, " ");
} }
function ChatLobbyComponent_li_18_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r3.content, " ");
} }
function ChatLobbyComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatLobbyComponent_li_18_div_5_Template, 4, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r3.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.sentMessages);
} }
class ChatLobbyComponent {
    constructor(dialog, localStorage, vicServices, reqServices, webSocketService, data) {
        this.dialog = dialog;
        this.localStorage = localStorage;
        this.vicServices = vicServices;
        this.reqServices = reqServices;
        this.webSocketService = webSocketService;
        this.data = data;
        this.webSocketEndPoint = 'http://localhost:8080/ws';
        this.topic = "/topic/greetings";
        this.title = 'WebSocketChatRoom';
        this.greetings = [];
        this.disabled = true;
        //greetings: string[] = [];
        this.showConversation = false;
        this.request = this.localStorage.retrieve('request');
        this.user = this.localStorage.retrieve('username');
        if (this.user != null) {
            console.log("INSIDE");
        }
        else {
            console.log(this.request);
            console.log(this.request.resTeamObj);
            this.vicServices.getRequest(this.request.requestId).subscribe(data => {
                console.log(data),
                    this.rescueTeam = this.reqServices.getRescueTeam(data.resTeamObj).subscribe((response) => {
                        console.log(response),
                            this.rescueTeam = response,
                            this.channelList = this.rescueTeam.members;
                    }, (error) => console.log(error));
            }, error => {
                console.log(error);
            });
            //  this.channelList=[this.emp1,this.emp2,this.emp3];
        }
        this.chatform = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            messageInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    ngOnInit() {
        //this.request = this.localStorage.retrieve('request');this.request = this.localStorage.retrieve('request');
        this.messages = this.data;
        console.log(this.messages);
        this.connect();
    }
    connect() {
        //connect to stomp where stomp endpoint is exposed
        //let ws = new SockJS(http://localhost:8080/greeting);
        let socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_2__("http://localhost:8080/socket");
        let messages1;
        this.ws = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_1__["Stomp"].over(socket);
        this.ws.connect({}, (frame) => {
            this.ws.subscribe("/errors", function (message) {
                alert("Error " + message.body);
            });
            this.ws.subscribe("/topic/chat", (message) => {
                console.log((message.body));
                //console.log(JSON.parse(message.body.content))
                var MessageReceived = (message.body);
                // console.log(MessageReceived);
                this.messages.push(MessageReceived);
                console.log(this.messages);
                console.log("ALL MESSAGES" + this.messages);
                //this.messages.push(messages1);
                // this.messages.set("content",message.body.content)
                // console.log(this.messages);
            });
            let messageToSend = { sender: this.user, type: 'JOIN' };
            //new chatMessage(Messagetype.CHAT,this.chatform.get('message').value,"TEST");
            //this.ws.send("/app/chat/"+this.request.resTeamObj+"/addUser",{},JSON.stringify(messageToSend));
            //let messageContent = "TEST_MESSAGE";
            //let messageToSend2 = new chatMessage(Messagetype.CHAT,messageContent,this.user);
            // this.ws.send("/app/chat/"+this.request.resTeamObj+"/sendMessage",{},JSON.stringify(messageToSend2));
            this.ws.subscribe("/topic/chat/channel/1", (message) => {
                var x = console.log(JSON.parse(message.body));
                console.log("----------............asdasd." + x);
            });
            this.disabled = true;
        }, function (error) {
            alert("STOMP error " + error);
        });
        //let messageToSend = new chatMessage(Messagetype.CHAT,"TEST MESSAGE",this.user);
        //this.ws.send("/topic/chat/", {}, JSON.stringify(messageToSend));
    }
    disconnect() {
        this.webSocketService.closeWebSocket();
    }
    sendMessage() {
        let timestamp = new Date();
        let messageContent = this.chatform.get('messageInput').value;
        console.log("Message INPUT" + messageContent);
        //let messageToSend = new chatMessage(Messagetype.CHAT,messageContent,"request");
        //chat/{rescueTeamId}/send
        let channel = "/app/chat/" + this.rescueTeam.rescueTeamId + "/sendToRescueTeam";
        let messageToSend = new _model_ChatMessageDto__WEBPACK_IMPORTED_MODULE_3__["ChatMessageDto"](channel, Date(), this.request.requestId.toString(), messageContent, this.rescueTeam.rescueTeamId);
        console.log(messageToSend);
        this.ws.send(channel, {}, JSON.stringify(messageToSend));
        //this.ws.send("/app/chat", {},messageContent);
    }
    sendMessage2() {
        //const message = new ChatMessageDto("test2",this.newmessage);
        this.webSocketService.sendMessage("Message");
        console.log();
    }
    close() {
        this.dialog.closeAll();
    }
}
ChatLobbyComponent.ɵfac = function ChatLobbyComponent_Factory(t) { return new (t || ChatLobbyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_victim_services_service__WEBPACK_IMPORTED_MODULE_7__["VictimServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rescue_team_service__WEBPACK_IMPORTED_MODULE_8__["RescueTeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_web_socket_service__WEBPACK_IMPORTED_MODULE_9__["WebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])); };
ChatLobbyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatLobbyComponent, selectors: [["app-chat-lobby"]], decls: 24, vars: 4, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"), "integrity", "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh", "crossorigin", "anonymous"], ["href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"), "type", "text/css", "rel", "stylesheet"], [1, "container"], [1, "text-center"], [1, "btnCreateSubreddit", 3, "click"], [1, "messaging"], [1, "inbox_msg"], [1, "inbox_people"], [1, "headind_srch"], [1, "channel_heading"], [1, "inbox_chat"], ["class", "channels", 4, "ngFor", "ngForOf"], [1, "mesgs"], [1, "msg_history"], ["class", "message", 4, "ngFor", "ngForOf"], [1, "type_msg"], [1, "input_msg_write", 3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "Type a message", "name", "newMessage", "required", "", 1, "write_msg", 3, "formControlName"], ["type", "submit", 1, "msg_send_btn"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane-o"], [1, "channels"], [1, "chat_list"], [1, "chat_people"], [1, "chat_ib"], [1, "message"], [1, "received_msg"], [1, "received_withd_msg"], ["class", "outgoing_msg", 4, "ngFor", "ngForOf"], [1, "outgoing_msg"], [1, "sent_msg"]], template: function ChatLobbyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Messaging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatLobbyComponent_Template_button_click_5_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChatLobbyComponent_div_15_Template, 6, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChatLobbyComponent_li_18_Template, 6, 2, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChatLobbyComponent_Template_form_ngSubmit_20_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.channelList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.chatform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "messageInput");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]], styles: [".login[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tmax-width: 60px;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n}\r\n\r\n.btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\tmax-width: 1170px;\r\n\tmargin: auto;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.inbox_people[_ngcontent-%COMP%] {\r\n\tbackground: #f8f8f8 none repeat scroll 0 0;\r\n\tfloat: left;\r\n\toverflow: hidden;\r\n\twidth: 40%;\r\n\tborder-right: 1px solid #c4c4c4;\r\n}\r\n\r\n.inbox_msg[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #c4c4c4;\r\n\tclear: both;\r\n\toverflow: hidden;\r\n}\r\n\r\n.top_spac[_ngcontent-%COMP%] {\r\n\tmargin: 20px 0 0;\r\n}\r\n\r\n.channel_heading[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\twidth: 40%;\r\n}\r\n\r\n.srch_bar[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\ttext-align: right;\r\n\twidth: 60%;\r\n}\r\n\r\n.headind_srch[_ngcontent-%COMP%] {\r\n\tpadding: 10px 29px 10px 20px;\r\n\toverflow: hidden;\r\n\tborder-bottom: 1px solid #c4c4c4;\r\n}\r\n\r\n.channel_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n\tcolor: #05728f;\r\n\tfont-size: 21px;\r\n\tmargin: auto;\r\n}\r\n\r\n.srch_bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #cdcdcd;\r\n\tborder-width: 0 0 1px 0;\r\n\twidth: 80%;\r\n\tpadding: 2px 0 4px 6px;\r\n\tbackground: none;\r\n}\r\n\r\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n\tborder: medium none;\r\n\tpadding: 0;\r\n\tcolor: #707070;\r\n\tfont-size: 18px;\r\n}\r\n\r\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\r\n\tmargin: 0 0 0 -27px;\r\n}\r\n\r\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n\tfont-size: 15px;\r\n\tcolor: #464646;\r\n\tmargin: 0 0 8px 0;\r\n}\r\n\r\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tfont-size: 13px;\r\n\tfloat: right;\r\n}\r\n\r\n.chat_ib[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tfont-size: 14px;\r\n\tcolor: #989898;\r\n\tmargin: auto\r\n}\r\n\r\n.chat_img[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\twidth: 11%;\r\n}\r\n\r\n.chat_ib[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\tpadding: 0 0 0 15px;\r\n\twidth: 88%;\r\n}\r\n\r\n.chat_people[_ngcontent-%COMP%] {\r\n\toverflow: hidden;\r\n\tclear: both;\r\n}\r\n\r\n.chat_list[_ngcontent-%COMP%] {\r\n\tborder-bottom: 1px solid #c4c4c4;\r\n\tmargin: 0;\r\n\tpadding: 18px 16px 10px;\r\n}\r\n\r\n.inbox_chat[_ngcontent-%COMP%] {\r\n\theight: 550px;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n.active_chat[_ngcontent-%COMP%] {\r\n\tbackground: #ebebeb;\r\n}\r\n\r\n.incoming_msg_img[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\twidth: 6%;\r\n}\r\n\r\n.received_msg[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tpadding: 0 0 0 10px;\r\n\tvertical-align: top;\r\n\twidth: 92%;\r\n}\r\n\r\n.received_withd_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tbackground: #ebebeb none repeat scroll 0 0;\r\n\tborder-radius: 3px;\r\n\tcolor: #646464;\r\n\tfont-size: 14px;\r\n\tmargin: 0;\r\n\tpadding: 5px 10px 5px 12px;\r\n\twidth: 100%;\r\n}\r\n\r\n.time_date[_ngcontent-%COMP%] {\r\n\tcolor: #747474;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin: 8px 0 0;\r\n}\r\n\r\n.received_withd_msg[_ngcontent-%COMP%] {\r\n\twidth: 57%;\r\n}\r\n\r\n.mesgs[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\tpadding: 30px 15px 0 25px;\r\n\twidth: 60%;\r\n}\r\n\r\n.sent_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tbackground: #05728f none repeat scroll 0 0;\r\n\tborder-radius: 3px;\r\n\tfont-size: 14px;\r\n\tmargin: 0;\r\n\tcolor: #fff;\r\n\tpadding: 5px 10px 5px 12px;\r\n\twidth: 100%;\r\n}\r\n\r\n.outgoing_msg[_ngcontent-%COMP%] {\r\n\toverflow: hidden;\r\n\tmargin: 26px 0 26px;\r\n}\r\n\r\n.sent_msg[_ngcontent-%COMP%] {\r\n\tfloat: right;\r\n\twidth: 46%;\r\n}\r\n\r\n.input_msg_write[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n\tborder: medium none;\r\n\tcolor: #4c4c4c;\r\n\tfont-size: 15px;\r\n\tmin-height: 48px;\r\n\twidth: 100%;\r\n}\r\n\r\n.type_msg[_ngcontent-%COMP%] {\r\n\tborder-top: 1px solid #c4c4c4;\r\n\tposition: relative;\r\n}\r\n\r\n.msg_send_btn[_ngcontent-%COMP%] {\r\n\tbackground: #05728f none repeat scroll 0 0;\r\n\tborder: medium none;\r\n\tborder-radius: 50%;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tfont-size: 17px;\r\n\theight: 33px;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 11px;\r\n\twidth: 33px;\r\n}\r\n\r\n.messaging[_ngcontent-%COMP%] {\r\n\tpadding: 0 0 50px 0;\r\n}\r\n\r\n.msg_history[_ngcontent-%COMP%] {\r\n\theight: 516px;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n\tlist-style-type: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtbG9iYnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsZUFBZTtDQUNmLFFBQVE7Q0FDUixTQUFTO0NBQ1QsZ0NBQWdDO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCw2QkFBNkI7RUFDL0I7O0FBQ0Y7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDViwrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixnQkFBZ0I7Q0FDaEIsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsdUJBQXVCO0NBQ3ZCLFVBQVU7Q0FDVixzQkFBc0I7Q0FDdEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsbURBQW1EO0NBQ25ELG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsY0FBYztDQUNkLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0NBQWdDO0NBQ2hDLFNBQVM7Q0FDVCx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLFVBQVU7QUFDWDs7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGVBQWU7Q0FDZixTQUFTO0NBQ1QsMEJBQTBCO0NBQzFCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsZUFBZTtDQUNmLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsMEJBQTBCO0NBQzFCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osVUFBVTtBQUNYOztBQUVBO0NBQ0MsbURBQW1EO0NBQ25ELG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyw2QkFBNkI7Q0FDN0Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsMENBQTBDO0NBQzFDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGVBQWU7Q0FDZixlQUFlO0NBQ2YsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULFdBQVc7QUFDWjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEIiLCJmaWxlIjoiY2hhdC1sb2JieS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWF4LXdpZHRoOiA2MHB4O1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJ0bkNyZWF0ZVN1YnJlZGRpdHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGNvbG9yOiAjMDA3OUQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4uY29udGFpbmVyIHtcclxuXHRtYXgtd2lkdGg6IDExNzBweDtcclxuXHRtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmltZyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5ib3hfcGVvcGxlIHtcclxuXHRiYWNrZ3JvdW5kOiAjZjhmOGY4IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR3aWR0aDogNDAlO1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbn1cclxuXHJcbi5pbmJveF9tc2cge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRvcF9zcGFjIHtcclxuXHRtYXJnaW46IDIwcHggMCAwO1xyXG59XHJcblxyXG4uY2hhbm5lbF9oZWFkaW5nIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uc3JjaF9iYXIge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHR3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uaGVhZGluZF9zcmNoIHtcclxuXHRwYWRkaW5nOiAxMHB4IDI5cHggMTBweCAyMHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbn1cclxuXHJcbi5jaGFubmVsX2hlYWRpbmcgaDQge1xyXG5cdGNvbG9yOiAjMDU3MjhmO1xyXG5cdGZvbnQtc2l6ZTogMjFweDtcclxuXHRtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5zcmNoX2JhciBpbnB1dCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcclxuXHRib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcclxuXHR3aWR0aDogODAlO1xyXG5cdHBhZGRpbmc6IDJweCAwIDRweCA2cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiBidXR0b24ge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRib3JkZXI6IG1lZGl1bSBub25lO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Y29sb3I6ICM3MDcwNzA7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuXHRtYXJnaW46IDAgMCAwIC0yN3B4O1xyXG59XHJcblxyXG4uY2hhdF9pYiBoNSB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGNvbG9yOiAjNDY0NjQ2O1xyXG5cdG1hcmdpbjogMCAwIDhweCAwO1xyXG59XHJcblxyXG4uY2hhdF9pYiBoNSBzcGFuIHtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2hhdF9pYiBwIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y29sb3I6ICM5ODk4OTg7XHJcblx0bWFyZ2luOiBhdXRvXHJcbn1cclxuXHJcbi5jaGF0X2ltZyB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDExJTtcclxufVxyXG5cclxuLmNoYXRfaWIge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHBhZGRpbmc6IDAgMCAwIDE1cHg7XHJcblx0d2lkdGg6IDg4JTtcclxufVxyXG5cclxuLmNoYXRfcGVvcGxlIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY2hhdF9saXN0IHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMThweCAxNnB4IDEwcHg7XHJcbn1cclxuXHJcbi5pbmJveF9jaGF0IHtcclxuXHRoZWlnaHQ6IDU1MHB4O1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmFjdGl2ZV9jaGF0IHtcclxuXHRiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG59XHJcblxyXG4uaW5jb21pbmdfbXNnX2ltZyB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiA2JTtcclxufVxyXG5cclxuLnJlY2VpdmVkX21zZyB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDAgMCAwIDEwcHg7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHR3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xyXG5cdGJhY2tncm91bmQ6ICNlYmViZWIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Y29sb3I6ICM2NDY0NjQ7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpbWVfZGF0ZSB7XHJcblx0Y29sb3I6ICM3NDc0NzQ7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbjogOHB4IDAgMDtcclxufVxyXG5cclxuLnJlY2VpdmVkX3dpdGhkX21zZyB7XHJcblx0d2lkdGg6IDU3JTtcclxufVxyXG5cclxuLm1lc2dzIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRwYWRkaW5nOiAzMHB4IDE1cHggMCAyNXB4O1xyXG5cdHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5zZW50X21zZyBwIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDU3MjhmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW46IDA7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0cGFkZGluZzogNXB4IDEwcHggNXB4IDEycHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5vdXRnb2luZ19tc2cge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWFyZ2luOiAyNnB4IDAgMjZweDtcclxufVxyXG5cclxuLnNlbnRfbXNnIHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0d2lkdGg6IDQ2JTtcclxufVxyXG5cclxuLmlucHV0X21zZ193cml0ZSBpbnB1dCB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG5cdGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcblx0Y29sb3I6ICM0YzRjNGM7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdG1pbi1oZWlnaHQ6IDQ4cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50eXBlX21zZyB7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNjNGM0YzQ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubXNnX3NlbmRfYnRuIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDU3MjhmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0Ym9yZGVyOiBtZWRpdW0gbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxuXHRoZWlnaHQ6IDMzcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRvcDogMTFweDtcclxuXHR3aWR0aDogMzNweDtcclxufVxyXG5cclxuLm1lc3NhZ2luZyB7XHJcblx0cGFkZGluZzogMCAwIDUwcHggMDtcclxufVxyXG5cclxuLm1zZ19oaXN0b3J5IHtcclxuXHRoZWlnaHQ6IDUxNnB4O1xyXG5cdG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatLobbyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-lobby',
                templateUrl: './chat-lobby.component.html',
                styleUrls: ['./chat-lobby.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }, { type: _services_victim_services_service__WEBPACK_IMPORTED_MODULE_7__["VictimServicesService"] }, { type: _services_rescue_team_service__WEBPACK_IMPORTED_MODULE_8__["RescueTeamService"] }, { type: _services_web_socket_service__WEBPACK_IMPORTED_MODULE_9__["WebSocketService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "sXbv":
/*!**********************************************************!*\
  !*** ./src/app/request-login/request-login.component.ts ***!
  \**********************************************************/
/*! exports provided: RequestLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestLoginComponent", function() { return RequestLoginComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");








class RequestLoginComponent {
    constructor(localStorage, httpClient, router) {
        this.localStorage = localStorage;
        this.httpClient = httpClient;
        this.router = router;
        this.requestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    fetchRequest() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('fullName', this.requestForm.get('fullName').value).append('location', this.requestForm.get('location').value);
        console.log(this.requestForm.get('location').value);
        console.log(params);
        this.httpClient.get('http://localhost:8080/api/request/victimLogin/', { params: params }).subscribe((response) => {
            console.log(response);
            this.localStorage.store('request', response);
            if (response != null) {
                this.router.navigate(['requestLanding']);
            }
            else {
                this.router.navigate(['requestLogin']);
            }
        });
    }
}
RequestLoginComponent.ɵfac = function RequestLoginComponent_Factory(t) { return new (t || RequestLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RequestLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RequestLoginComponent, selectors: [["app-request-login"]], decls: 24, vars: 3, consts: [[1, "login-section"], [1, "row", "justify-content-center"], [1, "col-md-3"], [1, "col-md-6"], [1, "card"], [1, "card-header", 2, "text-align", "center"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "victim_name", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "id", "victim_name", "name", "victim_name", "required", "", "autofocus", "", 1, "form-control", 3, "formControlName"], ["for", "location", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "id", "location", "name", "location", "required", "", 1, "form-control", 3, "formControlName"], [1, "col-md-6", "offset-md-4"], ["type", "submit", 1, "login"]], template: function RequestLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Victim Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RequestLoginComponent_Template_form_ngSubmit_9_listener() { return ctx.fetchRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.requestForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "fullName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "location");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".login-section[_ngcontent-%COMP%]{\r\n    margin: 100px;\r\n}\r\n\r\n.login-failed[_ngcontent-%COMP%], .register-success[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    border: 2px solid black;\r\n    width: 65%;    \r\n    background-color: red;\r\n}\r\n\r\n.login-failed-text[_ngcontent-%COMP%], .register-success-text[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 5px;\r\n    font-weight: bold;    \r\n    color: aliceblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJyZXF1ZXN0LWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tc2VjdGlvbntcclxuICAgIG1hcmdpbjogMTAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mYWlsZWQsIC5yZWdpc3Rlci1zdWNjZXNze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDY1JTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5sb2dpbi1mYWlsZWQtdGV4dCwgLnJlZ2lzdGVyLXN1Y2Nlc3MtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICBcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-request-login',
                templateUrl: './request-login.component.html',
                styleUrls: ['./request-login.component.css']
            }]
    }], function () { return [{ type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "sy50":
/*!******************************************************!*\
  !*** ./src/app/departments/departments.component.ts ***!
  \******************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/department.service */ "rc/I");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");






function DepartmentsComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DepartmentsComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.department_id, " ");
} }
function DepartmentsComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DepartmentsComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.name, " ");
} }
function DepartmentsComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Employees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DepartmentsComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.employees, " ");
} }
function DepartmentsComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DepartmentsComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.location, " ");
} }
function DepartmentsComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " status. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DepartmentsComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.status, " ");
} }
function DepartmentsComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
function DepartmentsComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
class DepartmentsComponent {
    constructor(departmentService, dialog, data) {
        this.departmentService = departmentService;
        this.dialog = dialog;
        this.data = data;
        this.displayedColumns = ['department_id', 'name', 'employees', 'location', 'status'];
        this.allemp = data;
    }
    ngOnInit() {
        console.log(this.allemp);
        this.departmentService.getAllDepartments().subscribe((response) => {
            console.log(response);
            this.allDep = response;
            console.log(this.allDep);
        });
    }
    close() {
        this.dialog.closeAll();
    }
}
DepartmentsComponent.ɵfac = function DepartmentsComponent_Factory(t) { return new (t || DepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_department_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DepartmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentsComponent, selectors: [["app-departments"]], decls: 23, vars: 3, consts: [["mat-dialog-title", "", 1, "AssignRequestDialog"], [1, "btnCreateSubreddit", 3, "click"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "department_id"], ["mat-header-cell", "", "style", "text-align: center", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "text-align: center", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "employees"], ["matColumnDef", "location"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "text-align", "center"], ["mat-cell", "", 2, "text-align", "center"], ["mat-header-row", ""], ["mat-row", ""]], template: function DepartmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Departments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DepartmentsComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DepartmentsComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DepartmentsComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DepartmentsComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DepartmentsComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DepartmentsComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DepartmentsComponent_th_16_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DepartmentsComponent_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DepartmentsComponent_th_19_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DepartmentsComponent_td_20_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DepartmentsComponent_tr_21_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DepartmentsComponent_tr_22_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.allDep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".btnCreateSubreddit[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    color: #0079D3;\r\n    background-color: transparent;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydG1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCw2QkFBNkI7RUFDL0IiLCJmaWxlIjoiZGVwYXJ0bWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRuQ3JlYXRlU3VicmVkZGl0e1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6ICMwMDc5RDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-departments',
                templateUrl: './departments.component.html',
                styleUrls: ['./departments.component.css']
            }]
    }], function () { return [{ type: _services_department_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class MessageService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getMessageByRequestId(requestId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('requestId', requestId.toString());
        console.log("GetMESSAGEBYUSERID" + params);
        return this.httpClient.get('http://localhost:8080/api/message/getmessages/', { params: params });
    }
    getMessageByUserId(userId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('userId', userId.toString());
        console.log("GetMESSAGEBYUSERID" + params);
        return this.httpClient.get('http://localhost:8080/api/message/getmessagesByUserId/', { params: params });
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "uLQI":
/*!**********************************!*\
  !*** ./src/app/model/Request.ts ***!
  \**********************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
class Request {
    constructor(people, fire, medical, crime) {
        this.people = people;
        this.fire = fire;
        this.medical = medical;
        this.crime = crime;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/login/login.component */ "vtpD");
/* harmony import */ var _app_request_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/request/request.component */ "5YdD");
/* harmony import */ var _app_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/logout/logout.component */ "n1B2");
/* harmony import */ var _app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/home-page/home-page.component */ "F1my");
/* harmony import */ var _app_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/admin/admin.component */ "TRGY");
/* harmony import */ var _app_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/signup/signup.component */ "rd1V");
/* harmony import */ var _app_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/header/header.component */ "fECr");
/* harmony import */ var _app_chat_lobby_chat_lobby_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/chat-lobby/chat-lobby.component */ "rwHG");
/* harmony import */ var _app_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _app_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _app_request_landing_request_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/request-landing/request-landing.component */ "ZrfD");
/* harmony import */ var _app_request_login_request_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/request-login/request-login.component */ "sXbv");
















const routes = [
    { path: 'login', component: _app_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'request', component: _app_request_request_component__WEBPACK_IMPORTED_MODULE_3__["RequestComponent"], },
    { path: 'logout', component: _app_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"], canActivate: [] },
    { path: 'admin', component: _app_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], canActivate: [] },
    { path: 'signup', component: _app_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], canActivate: [] },
    { path: 'header', component: _app_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], canActivate: [] },
    { path: 'chatLobby', component: _app_chat_lobby_chat_lobby_component__WEBPACK_IMPORTED_MODULE_9__["ChatLobbyComponent"], canActivate: [] },
    { path: '', component: _app_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], canActivate: [] },
    { path: 'sidebar', component: _app_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], canActivate: [] },
    { path: 'toolbar', component: _app_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ToolbarComponent"], canActivate: [] },
    { path: 'home', component: _app_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"], canActivate: [] },
    { path: 'requestLanding', component: _app_request_landing_request_landing_component__WEBPACK_IMPORTED_MODULE_12__["RequestLandingComponent"], canActivate: [] },
    { path: 'requestLogin', component: _app_request_login_request_login_component__WEBPACK_IMPORTED_MODULE_13__["RequestLoginComponent"], canActivate: [] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ "e4Ts");









class LoginComponent {
    constructor(authService, activatedRoute, router, toastr, localStorage) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastr = toastr;
        this.localStorage = localStorage;
        this.registerSuccessMessage = '';
        this.isError = false;
        this.loginRequestPayload = {
            username: '',
            password: ''
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
        this.activatedRoute.queryParams
            .subscribe(params => {
            if (params.registered !== undefined && params.registered === 'true') {
                this.toastr.success('Signup Successful');
                this.registerSuccessMessage = 'Please Check your inbox for activation email '
                    + 'activate your account before you Login!';
            }
        });
    }
    login() {
        this.loginRequestPayload.username = this.loginForm.get('username').value;
        this.loginRequestPayload.password = this.loginForm.get('password').value;
        console.log(this.loginForm.get('username').value);
        console.log(this.loginForm.get('password').value);
        let responseData;
        let errorData;
        this.authService.login(this.loginRequestPayload).subscribe((response) => {
            if (response) {
                if (this.localStorage.retrieve('role') == "ADMIN" || (this.loginForm.get('username').value == "admin" && this.loginForm.get('password').value == "admin")) {
                    console.log("INSIDE");
                    this.router.navigate(['admin']);
                }
                else {
                    this.router.navigate(['home']);
                }
            }
            else {
                this.isError = true;
                console.log("LOGIN ERROR");
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorData);
                this.router.navigateByUrl('/login');
            }
        }, (error) => errorData = error);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 28, vars: 3, consts: [[1, "login-section"], [1, "row", "justify-content-center"], [1, "col-md-3"], [1, "col-md-6"], [1, "card"], [1, "card-header", 2, "text-align", "center"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "user_name", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "id", "user_name", "name", "user_name", "required", "", "autofocus", "", 1, "form-control", 3, "formControlName"], ["for", "password", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "password", "id", "password", "name", "password", "required", "", 1, "form-control", 3, "formControlName"], [1, "col-md-6", "offset-md-4"], ["type", "submit", 1, "login"], [2, "padding-left", "15px"], ["routerLink", "/signup"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "New User? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", "password");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".login-section[_ngcontent-%COMP%]{\r\n    margin: 100px;\r\n}\r\n\r\n.login-failed[_ngcontent-%COMP%], .register-success[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    border: 2px solid black;\r\n    width: 65%;    \r\n    background-color: red;\r\n}\r\n\r\n.login-failed-text[_ngcontent-%COMP%], .register-success-text[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 5px;\r\n    font-weight: bold;    \r\n    color: aliceblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1zZWN0aW9ue1xyXG4gICAgbWFyZ2luOiAxMDBweDtcclxufVxyXG5cclxuLmxvZ2luLWZhaWxlZCwgLnJlZ2lzdGVyLXN1Y2Nlc3N7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogNjUlOyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmxvZ2luLWZhaWxlZC10ZXh0LCAucmVnaXN0ZXItc3VjY2Vzcy10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "w6Rq":
/*!***********************************************!*\
  !*** ./src/app/services/token-interceptor.ts ***!
  \***********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");






class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.isTokenRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    intercept(req, next) {
        if (req.url.indexOf('refresh') !== -1 || req.url.indexOf('login') !== -1) {
            return next.handle(req);
        }
        const jwtToken = this.authService.getJwtToken();
        if (jwtToken) {
            return next.handle(this.addToken(req, jwtToken)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]
                    && error.status === 403) {
                    return this.handleAuthErrors(req, next);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                }
            }));
        }
        return next.handle(req);
    }
    handleAuthErrors(req, next) {
        if (!this.isTokenRefreshing) {
            this.isTokenRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((refreshTokenResponse) => {
                this.isTokenRefreshing = false;
                this.refreshTokenSubject
                    .next(refreshTokenResponse.authenticationToken);
                return next.handle(this.addToken(req, refreshTokenResponse.authenticationToken));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(result => result !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((res) => {
                return next.handle(this.addToken(req, this.authService.getJwtToken()));
            }));
        }
    }
    addToken(req, jwtToken) {
        return req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + jwtToken)
        });
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map