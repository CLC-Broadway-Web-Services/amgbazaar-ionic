(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/account/account.page.html":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n    <ion-grid class=\"my-account-header\">\n        <ion-row>\n            <ion-col>\n                <ion-item color=\"transperant\" lines=\"none\">\n                    <ion-icon class=\"icon-header-icon ion-margin-end\" name=\"person\" slot=\"start\"></ion-icon>\n                    <ion-label class=\"account-name\">{{\"Account\" | translate}}</ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"header-menus\" justify-content-between=\"\">\n            <ion-col>\n                <ion-item color=\"transperant\" lines=\"none\" (click)=\"goTo('tabs/account/wishlist')\" *ngIf=\"settings.customer?.id\" class=\"ion-activatable\">\n                    <ion-icon class=\"ion-margin-end\" name=\"heart\" slot=\"start\"></ion-icon>\n                    <ion-label>{{\"Wishlist\" | translate}}</ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item color=\"transperant\" lines=\"none\" (click)=\"goTo('tabs/account/wallet')\" *ngIf=\"settings.customer?.id && settings.settings?.enable_wallet\" class=\"ion-activatable\">\n                    <ion-icon class=\"ion-margin-end\" name=\"wallet\" slot=\"start\"></ion-icon>\n                    <ion-label>{{\"Wallet\" | translate}}</ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-item (click)=\"goTo('tabs/account/login')\" lines=\"inset\" *ngIf=\"!settings.customer?.id\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"log-in\" mode=\"md\" slot=\"start\"></ion-icon>\n              <ion-label>{{\"Login\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <ion-item (click)=\"goTo('tabs/account/register')\" lines=\"inset\" *ngIf=\"!settings.customer?.id\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"person\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Register\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <ion-item (click)=\"goTo('tabs/account/points')\" lines=\"inset\" *ngIf=\"settings.reward\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"cash\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Points\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <ion-item (click)=\"goTo('tabs/account/address')\" lines=\"inset\" *ngIf=\"settings.customer?.id\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"pin\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Address\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <ion-item (click)=\"goTo('tabs/account/orders')\" lines=\"inset\" *ngIf=\"settings.customer?.id\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Orders\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <a href=\"https://wa.me/{{settings.settings?.whatsapp_number}}\">\n       <ion-item lines=\"inset\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Whatsapp us\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        </a>\n        <ion-item (click)=\"email(settings?.settings?.support_email)\" *ngIf=\"settings?.settings?.support_email\" lines=\"inset\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"mail\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Email us\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n\n        <ion-item lines=\"inset\" (click)=\"goTo('tabs/account/map')\" class=\"ion-activatable\" *ngIf=\"settings.settings?.switchLocations\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"compass\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Locations\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"inset\" class=\"ion-activatable\" (click)=\"shareApp()\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"share-alt\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Invite Friends\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n<!--        <ion-item lines=\"inset\" class=\"ion-activatable\" (click)=\"rateApp()\">-->\n<!--            <ion-icon class=\"icon-start ion-margin-end\" name=\"star\" slot=\"start\"></ion-icon>-->\n<!--            <ion-label>{{\"Rate us\" | translate}}</ion-label>-->\n<!--            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>-->\n<!--        </ion-item>-->\n<!--        <ion-item lines=\"inset\" (click)=\"goTo('tabs/account/blogs')\" lines=\"inset\" class=\"ion-activatable\">-->\n<!--          <ion-icon class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>-->\n<!--        <ion-label>{{\"Blog\" | translate}}</ion-label>-->\n<!--           <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>-->\n<!--        </ion-item>-->\n<!--        <ion-item *ngIf=\"settings.languages?.length\" lines=\"inset\" (click)=\"goTo('tabs/account/setting')\" lines=\"inset\" class=\"ion-activatable\">-->\n<!--            <ion-icon class=\"icon-start ion-margin-end\" name=\"globe\" slot=\"start\"></ion-icon>-->\n<!--            <ion-label>{{\"Language\" | translate}}</ion-label>-->\n<!--            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>-->\n<!--        </ion-item>-->\n\n        <div *ngFor=\"let page of settings.pages\">\n        <ion-item lines=\"inset\" *ngIf=\"page.url\" (click)=\"goTo('/tabs/account/post/'+page.url)\" lines=\"inset\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>\n            <ion-label>{{page.title}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        </div>\n        <ion-item lines=\"inset\" class=\"ion-activatable\" (click)=\"log_out()\" *ngIf=\"settings.customer?.id\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"log-out\" mode=\"md\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Logout\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n      </ion-list>\n\n      <ion-list *ngIf=\"settings.vendor\">\n      <ion-list-header>\n        <ion-label>{{\"Vendor\" | translate}}</ion-label>\n      </ion-list-header>\n\n      <ion-item lines=\"inset\" (click)=\"goTo('tabs/account/vendor-orders')\" class=\"ion-activatable\">\n        <ion-icon class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>\n        <ion-label>{{\"Orders\" | translate}}</ion-label>\n           <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"inset\" (click)=\"goTo('tabs/account/vendor-products')\" class=\"ion-activatable\">\n        <ion-icon class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>\n        <ion-label>{{\"Products\" | translate}}</ion-label>\n           <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"inset\" (click)=\"goTo('tabs/account/add-products')\" class=\"ion-activatable\">\n        <ion-icon class=\"icon-start ion-margin-end\" name=\"add-circle\" slot=\"start\"></ion-icon>\n        <ion-label>{{\"Add Products\" | translate}}</ion-label>\n           <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n      </ion-item>\n\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/account.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-start {\n  background-color: var(--account-header, #36454f);\n  color: var(--account-header-text, #000);\n  font-size: 18px; }\n\n.my-account-header {\n  background-color: var(--account-header, #36454f);\n  color: var(--account-header-text, #000);\n  padding-top: 20px; }\n\n.my-account-header .account-name {\n    font-size: 22px;\n    font-weight: 600;\n    color: var(--account-header-text, #000); }\n\n.my-account-header .header-menus ion-item {\n    color: var(--account-header-text, #000); }\n\n.my-account-header .header-menus ion-icon {\n    margin-right: 10px; }\n\n.icon-header-icon {\n  padding: 15px;\n  background-color: var(--account-header-text, #000);\n  border-radius: 50%;\n  font-size: xx-large;\n  color: var(--account-header, #36454f);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\nion-list a {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdEQUFnRDtFQUNoRCx1Q0FBdUM7RUFFdkMsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGdEQUFnRDtFQUNoRCx1Q0FBdUM7RUFDdkMsaUJBQWlCLEVBQUE7O0FBSHJCO0lBS1EsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1Q0FBdUMsRUFBQTs7QUFQL0M7SUFXWSx1Q0FBdUMsRUFBQTs7QUFYbkQ7SUFjWSxrQkFBa0IsRUFBQTs7QUFJOUI7RUFDSSxhQUFhO0VBQ2Isa0RBQWtEO0VBQ2xELGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLCtHQUErRyxFQUFBOztBQUVuSDtFQUVRLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1zdGFydCB7XG4gICAgLy9wYWRkaW5nOiA2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXIsICMzNjQ1NGYpOyAvLyBVbkNvbW1lbnQgdGhpcyB0byBhZGQgYmFja2dyb3VuZCBjb2xvciB0byBpY29uXG4gICAgY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xuICAgIC8vYm9yZGVyLXJhZGl1czogNTAlOyAvLyBUdW5lIHRoaXMgdG8gYWRkIHJvdW5kZWQgY29ybmVyIHdoZW4gYWRkZWQgYmFja2dyb3VuZCBjb2xvclxuICAgIGZvbnQtc2l6ZTogMThweDsgLy8gQWRqdXN0IHRoZSBzaXplIG9mIHRoZSBpY29uXG59XG4ubXktYWNjb3VudC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLCAjMzY0NTRmKTtcbiAgICBjb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXItdGV4dCwgIzAwMCk7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLmFjY291bnQtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xuICAgIH1cbiAgICAuaGVhZGVyLW1lbnVzIHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5pY29uLWhlYWRlci1pY29uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGNvbG9yOiB2YXIoLS1hY2NvdW50LWhlYWRlciwgIzM2NDU0Zik7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuaW9uLWxpc3Qge1xuICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/account/account.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ "./node_modules/@ionic-native/app-rate/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../config */ "./src/app/config.ts");









var AccountPage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function AccountPage(config, api, navCtrl, settings, platform, appRate, emailComposer, socialSharing) {
        this.config = config;
        this.api = api;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.platform = platform;
        this.appRate = appRate;
        this.emailComposer = emailComposer;
        this.socialSharing = socialSharing;
    }
    // tslint:disable-next-line: use-life-cycle-interface
    AccountPage.prototype.ngOnInit = function () {
    };
    AccountPage.prototype.goTo = function (path) {
        this.navCtrl.navigateForward(path);
    };
    AccountPage.prototype.log_out = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.settings.customer.id = undefined;
                        this.settings.vendor = false;
                        this.settings.wishlist = [];
                        return [4 /*yield*/, this.api.postItem('logout').subscribe(function (res) { }, function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        window.AccountKitPlugin.logout();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.rateApp = function () {
        if (this.platform.is('cordova')) {
            this.appRate.preferences.storeAppURL = {
                ios: this.settings.settings.rate_app_ios_id,
                android: this.settings.settings.rate_app_android_id,
                windows: 'ms-windows-store://review/?ProductId=' + this.settings.settings.rate_app_windows_id
            };
            this.appRate.promptForRating(true);
        }
    };
    AccountPage.prototype.shareApp = function () {
        if (this.platform.is('cordova')) {
            var url = '';
            if (this.platform.is('android'))
                url = this.settings.settings.share_app_android_link;
            else
                url = this.settings.settings.share_app_ios_link;
            var options = {
                message: '',
                subject: '',
                files: ['', ''],
                url: url,
                chooserTitle: ''
            };
            this.socialSharing.shareWithOptions(options);
        }
    };
    AccountPage.prototype.email = function (contact) {
        var email = {
            to: contact,
            attachments: [],
            subject: '',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/account/account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_8__["Config"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_5__["AppRate"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ }),

/***/ "./src/app/account/address/address.page.html":
/*!***************************************************!*\
  !*** ./src/app/account/address/address.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Address\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n<div *ngIf=\"settings.customer\">\n\t<ion-list-header>\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n  <ion-item detail (click)=\"editAddress()\">\n    <ion-label text-wrap>\n    <p>\n    <span>{{settings.customer.billing.first_name}}</span>&nbsp;<span>{{settings.customer.billing.last_name}}</span>&nbsp;<span>{{settings.customer.billing.company}}</span>&nbsp;<span>{{settings.customer.billing.address_1}}</span>&nbsp;<span>{{settings.customer.billing.address_2}}</span>&nbsp;<span>{{settings.customer.billing.city}}</span>\n    <span>{{settings.customer.billing.state}}</span>&nbsp;<span>{{settings.customer.billing.postcode}}</span>&nbsp;<span>{{settings.customer.billing.country}}</span>\n    &nbsp;<span>{{settings.customer.billing.email}}</span>&nbsp;<span>{{settings.customer.billing.phone}}</span>\n    </p>\n    </ion-label>\n  </ion-item>\n\n  <ion-list-header>\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n  <ion-item detail (click)=\"editAddress()\">\n    <ion-label text-wrap>\n      <p>\n    <span>{{settings.customer.shipping.first_name}}</span>&nbsp;<span>{{settings.customer.shipping.last_name}}</span>&nbsp;<span>{{settings.customer.shipping.company}}</span>&nbsp;<span>{{settings.customer.shipping.address_1}}</span>&nbsp;<span>{{settings.customer.shipping.address_2}}</span>&nbsp;<span>{{settings.customer.shipping.city}}</span>&nbsp;\n    <span>{{settings.customer.shipping.state}}</span>&nbsp;<span>{{settings.customer.shipping.postcode}}</span>&nbsp;<span>{{settings.customer.shipping.country}}</span>&nbsp;\n    <span>{{settings.customer.shipping.email}}</span>&nbsp;<span>{{settings.customer.shipping.phone}}</span>\n  </p>\n    </ion-label>\n  </ion-item>\n\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/address/address.page.scss":
/*!***************************************************!*\
  !*** ./src/app/account/address/address.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/address/address.page.ts":
/*!*************************************************!*\
  !*** ./src/app/account/address/address.page.ts ***!
  \*************************************************/
/*! exports provided: AddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPage", function() { return AddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");






var AddressPage = /** @class */ (function () {
    function AddressPage(api, settings, router, loadingController, navCtrl, route) {
        this.api = api;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
    }
    AddressPage.prototype.ngOnInit = function () {
        this.getCustomer();
    };
    AddressPage.prototype.getCustomer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.api.getItem('customers/' + this.settings.customer.id).subscribe(function (res) {
                                _this.settings.customer = res;
                                loading.dismiss();
                            }, function (err) {
                                console.log(err);
                                loading.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressPage.prototype.editAddress = function () {
        this.navCtrl.navigateForward('/tabs/account/address/edit-address');
    };
    AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.page.html */ "./src/app/account/address/address.page.html"),
            styles: [__webpack_require__(/*! ./address.page.scss */ "./src/app/account/address/address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddressPage);
    return AddressPage;
}());



/***/ }),

/***/ "./src/app/account/blog/blog.page.html":
/*!*********************************************!*\
  !*** ./src/app/account/blog/blog.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios' >\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/blogs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"post.post.post?.title\">{{post.post.post.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"post\">\n<div class=\"spinner\" *ngIf=\"!post.post.post\"><ion-spinner> </ion-spinner></div>\n<div *ngIf=\"post.post.post\">\n<ion-card>\n  <div *ngIf=\"post.post.post.thumbnail_images?.medium?.url\">\n    <ion-img alt=\"\" src=\"{{post.post.post.thumbnail_images?.medium?.url}}\"></ion-img>\n  </div>\n  <div *ngIf=\"post.post.post.thumbnail_images?.full?.url && !post.post.post.thumbnail_images?.medium?.url\">\n    <ion-img alt=\"\" src=\"{{post.post.post.thumbnail_images?.full?.url}}\"></ion-img>\n  </div>\n  <ion-card-header>\n    <ion-card-subtitle>{{post.post.post.date | datepipe}}</ion-card-subtitle>\n    <ion-card-title>{{post.post.post.title}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content [innerHTML]=\"post.post.post.content\">\n  </ion-card-content>\n</ion-card>\n</div>\n\n<div *ngFor=\"let item of post.post?.post?.comments\" class=\"comments\">\n<ion-item lines=\"none\">\n  <ion-avatar slot=\"start\">\n    <ion-icon color=\"medium\" name=\"contact\" mode=\"ios\"></ion-icon>\n  </ion-avatar>\n  <ion-label>\n    <h2>{{item.name}}</h2>\n  <p>{{item.date | datepipe}}</p>\n  </ion-label>\n</ion-item>\n<ion-item><ion-label><p text-wrap [innerHTML]=\"item.content\"></p></ion-label></ion-item>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/blog/blog.page.scss":
/*!*********************************************!*\
  !*** ./src/app/account/blog/blog.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post a {\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none; }\n\n.post ion-card {\n  margin: 0;\n  border-radius: 0;\n  box-shadow: none; }\n\n.post .comments ion-icon {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvYWNjb3VudC9ibG9nL2Jsb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFKN0I7RUFRUSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQVZ4QjtFQWNZLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2Jsb2cvYmxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdCB7XG4gICAgYSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgLy9jb2xvcjogIzExMTExMTtcbiAgICB9XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5jb21tZW50cyB7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/blog/blog.page.ts":
/*!*******************************************!*\
  !*** ./src/app/account/blog/blog.page.ts ***!
  \*******************************************/
/*! exports provided: BlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage", function() { return BlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../data/post */ "./src/app/data/post.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");






var BlogPage = /** @class */ (function () {
    function BlogPage(api, router, post, settings, route) {
        this.api = api;
        this.router = router;
        this.post = post;
        this.settings = settings;
        this.route = route;
    }
    BlogPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getPost();
    };
    BlogPage.prototype.getPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getPosts('/api/core/get_post/?id=' + this.id).subscribe(function (res) {
                            _this.post.post = res;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlogPage.prototype.OnDestroy = function () {
        this.post.post.post = {};
    };
    BlogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.page.html */ "./src/app/account/blog/blog.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./blog.page.scss */ "./src/app/account/blog/blog.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_post__WEBPACK_IMPORTED_MODULE_4__["Post"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BlogPage);
    return BlogPage;
}());



/***/ }),

/***/ "./src/app/account/blogs/blogs.page.html":
/*!***********************************************!*\
  !*** ./src/app/account/blogs/blogs.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios' >\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Blogs\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"blogs\">\n\n<div class=\"spinner\" *ngIf=\"!posts?.posts\"><ion-spinner> </ion-spinner></div>\n\n<div *ngIf=\"posts?.posts\">\n<div *ngIf=\"posts.posts.length == 0\" text-center class=\"empty\">\n  <ion-icon name=\"document\"></ion-icon>\n</div>\n\n\n<ion-card class=\"ion-activatable ion-focusable hydrated\" *ngFor=\"let post of posts.posts\" (click)=\"getDetail(post)\">\n  <div *ngIf=\"post.thumbnail_images?.medium?.url\">\n    <ion-img alt=\"\" src=\"{{post.thumbnail_images?.medium?.url}}\"></ion-img>\n  </div>\n  <div *ngIf=\"post.thumbnail_images?.full?.url && !post.thumbnail_images?.medium?.url\">\n    <ion-img alt=\"\" src=\"{{post.thumbnail_images?.full?.url}}\"></ion-img>\n  </div>\n  <ion-card-header>\n    <ion-card-subtitle>{{post.date | datepipe}}</ion-card-subtitle>\n    <ion-card-title>{{post.title}}</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content [innerHTML]=\"post.excerpt\">\n  </ion-card-content>\n</ion-card>\n\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && posts.posts.length\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/blogs/blogs.page.scss":
/*!***********************************************!*\
  !*** ./src/app/account/blogs/blogs.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blogs a {\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none; }\n\n.blogs .activated {\n  opacity: 0.4; }\n\n.blogs .empty {\n  margin-top: 50px;\n  text-align: center; }\n\n.blogs .empty ion-icon {\n    font-size: 7.2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvYWNjb3VudC9ibG9ncy9ibG9ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUo3QjtFQVFRLFlBQVksRUFBQTs7QUFScEI7RUFXUSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBWjFCO0lBY1ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2Jsb2dzL2Jsb2dzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9ncyB7XG4gICAgYSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgLy9jb2xvcjogIzExMTExMTtcbiAgICB9XG4gICAgLmFjdGl2YXRlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG4gICAgLmVtcHR5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDcuMmVtO1xuICAgICAgICAgICAgLy9jb2xvcjogI2VjZWNlYztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/account/blogs/blogs.page.ts":
/*!*********************************************!*\
  !*** ./src/app/account/blogs/blogs.page.ts ***!
  \*********************************************/
/*! exports provided: BlogsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsPage", function() { return BlogsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/post */ "./src/app/data/post.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");







var BlogsPage = /** @class */ (function () {
    function BlogsPage(api, router, post, settings, navCtrl) {
        this.api = api;
        this.router = router;
        this.post = post;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.posts = {};
        this.filter = {};
        this.results = {};
        this.hasMoreItems = true;
        this.filter.page = 1;
    }
    BlogsPage.prototype.ngOnInit = function () {
        this.getPosts();
    };
    BlogsPage.prototype.getPosts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getPosts('/api/core/get_recent_posts/?page=' + this.filter.page).subscribe(function (res) {
                            if (res)
                                _this.posts = res;
                            else
                                _this.posts.posts = [];
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlogsPage.prototype.loadData = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filter.page = this.filter.page + 1;
                        return [4 /*yield*/, this.api.getPosts('/api/core/get_recent_posts/?page=' + this.filter.page).subscribe(function (res) {
                                _this.results = res;
                                _this.posts.posts.push.apply(_this.posts.posts, _this.results.posts);
                                event.target.complete();
                                if (_this.results.posts.length == 0)
                                    _this.hasMoreItems = false;
                            }, function (err) {
                                event.target.complete();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlogsPage.prototype.getDetail = function (post) {
        this.post.post.post = post;
        this.navCtrl.navigateForward('/tabs/account/blogs/blog/' + post.id);
    };
    BlogsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./blogs.page.html */ "./src/app/account/blogs/blogs.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./blogs.page.scss */ "./src/app/account/blogs/blogs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_post__WEBPACK_IMPORTED_MODULE_5__["Post"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], BlogsPage);
    return BlogsPage;
}());



/***/ }),

/***/ "./src/app/account/edit-address/edit-address.page.html":
/*!*************************************************************!*\
  !*** ./src/app/account/edit-address/edit-address.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/address\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Edit Address\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\t<ion-list no-margin *ngIf=\"settings.customer?.billing\">\n\n  <ion-list-header>\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.first_name\" name=\"firstname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.last_name\" name=\"lastname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Phone\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.phone\" name=\"telephone\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.company\" name=\"company\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.address_1\" name=\"address_1\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.address_2\" name=\"address_2\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Email\" | translate}}</ion-label>\n            <ion-input required type=\"email\" [(ngModel)]=\"settings.customer.billing.email\" name=\"email\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"City\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.city\" name=\"city\"> </ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Postcode\" | translate}}</ion-label>\n            <ion-input required type=\"number\" [(ngModel)]=\"settings.customer.billing.postcode\" name=\"postcode\"> </ion-input>\n        </ion-item>\n\n\n        <ion-item *ngIf=\"countries?.options\">\n            <ion-label>{{\"Country\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"settings.customer.billing.country\" (ngModelChange)=\"getBillingRegion()\" name=\"billing.country\">\n                <div *ngFor=\"let field of countries.options | keys\">\n                    <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span> </ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <div *ngIf=\"states && settings.customer.billing.country\">\n        <ion-item *ngIf=\"billingStates\">\n            <ion-label>{{\"State\" |translate}}</ion-label>\n            <ion-select [(ngModel)]=\"settings.customer.billing.state\" name=\"billing_state\">\n                <div *ngFor=\"let field of billingStates | keys\">\n                    <ion-select-option value=\"{{field.key}}\">{{field.value}}</ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n        \n\n        <ion-item *ngIf=\"!billingStates\">\n            <ion-label position=\"stacked\">{{\"State\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.billing.state\" name=\"billing_state\"> </ion-input>\n        </ion-item>\n        </div>\n\n\n</ion-list>\n\n\n<ion-list no-margin *ngIf=\"settings.customer?.shipping\">\n\n  <ion-list-header>\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.first_name\" name=\"firstname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.last_name\" name=\"lastname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.company\" name=\"company\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.address_1\" name=\"address_1\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.address_2\" name=\"address_2\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"City\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.city\" name=\"city\"> </ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Postcode\" | translate}}</ion-label>\n            <ion-input required type=\"number\" [(ngModel)]=\"settings.customer.shipping.postcode\" name=\"postcode\"> </ion-input>\n        </ion-item>\n\n\n\t\t<ion-item *ngIf=\"countries?.options\">\n            <ion-label>{{\"Country\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"settings.customer.shipping.country\" (ngModelChange)=\"getShippingRegion()\" name=\"shipping.country\">\n                <div *ngFor=\"let field of countries?.options | keys\">\n                    <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span> </ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <div *ngIf=\"states && settings.customer.shipping.country\">\n        <ion-item *ngIf=\"shippingStates\">\n            <ion-label>{{\"State\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"settings.customer.shipping.state\" name=\"shipping_state\">\n                <div *ngFor=\"let field of shippingStates | keys\">\n                    <ion-select-option value=\"{{field.key}}\">{{field.value}}</ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n        \n\n        <ion-item *ngIf=\"!shippingStates\">\n            <ion-label position=\"stacked\">{{\"State\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"settings.customer.shipping.state\" name=\"shipping_state\"> </ion-input>\n        </ion-item>\n        </div>\n\n\n</ion-list>\n\n\n<ion-button *ngIf=\"settings.customer\" color=\"{{settings.theme.button}}\" expand=\"block\" (click)=\"processAddress()\" [disabled]=\"disableButton\" fill=\"solid\">{{\"Save\" | translate}}</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/edit-address/edit-address.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/account/edit-address/edit-address.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZWRpdC1hZGRyZXNzL2VkaXQtYWRkcmVzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/edit-address/edit-address.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/account/edit-address/edit-address.page.ts ***!
  \***********************************************************/
/*! exports provided: EditAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressPage", function() { return EditAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");






var EditAddressPage = /** @class */ (function () {
    function EditAddressPage(api, settings, router, navCtrl, route) {
        this.api = api;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.address = [];
        this.disableButton = false;
    }
    EditAddressPage.prototype.ngOnInit = function () {
        this.getCountries();
    };
    EditAddressPage.prototype.getCountries = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getItem('settings/general/woocommerce_specific_allowed_countries').subscribe(function (res) {
                            _this.countries = res;
                            _this.getStates();
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditAddressPage.prototype.getStates = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('get-states').subscribe(function (res) {
                            _this.states = res;
                            _this.getBillingRegion();
                            _this.getShippingRegion();
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditAddressPage.prototype.processAddress = function () {
        for (var key in this.settings.customer.billing) {
            this.address['billing_' + key] = this.settings.customer.billing[key];
        }
        for (var key in this.settings.customer.shipping) {
            this.address['shipping_' + key] = this.settings.customer.shipping[key];
        }
        this.updateAddress();
    };
    EditAddressPage.prototype.updateAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disableButton = true;
                        return [4 /*yield*/, this.api.postItem('update-address', this.address).subscribe(function (res) {
                                _this.status = res;
                                // this.navCtrl.pop();
                                _this.disableButton = false;
                            }, function (err) {
                                _this.disableButton = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditAddressPage.prototype.getBillingRegion = function () {
        if (this.states[this.settings.customer.billing.country] && 0 !== this.states[this.settings.customer.billing.country].length)
            this.billingStates = this.states[this.settings.customer.billing.country];
        else
            this.billingStates = undefined;
    };
    EditAddressPage.prototype.getShippingRegion = function () {
        if (this.states[this.settings.customer.shipping.country] && 0 !== this.states[this.settings.customer.shipping.country].length)
            this.shippingStates = this.states[this.settings.customer.shipping.country];
        else
            this.shippingStates = undefined;
    };
    EditAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-address',
            template: __webpack_require__(/*! ./edit-address.page.html */ "./src/app/account/edit-address/edit-address.page.html"),
            styles: [__webpack_require__(/*! ./edit-address.page.scss */ "./src/app/account/edit-address/edit-address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditAddressPage);
    return EditAddressPage;
}());



/***/ }),

/***/ "./src/app/account/forgotten/forgotten.page.html":
/*!*******************************************************!*\
  !*** ./src/app/account/forgotten/forgotten.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Forgotten\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"forgotten\">\n<div class=\"form\">  \n<ion-list *ngIf=\"!status.status\">\n  <form [formGroup]=\"email\">\n  <ion-item>\n  <ion-input required type=\"email\" formControlName=\"email\" placeholder=\"Email\"></ion-input>\n  </ion-item>\n</form>\n</ion-list>\n\n <ion-button *ngIf=\"!status.status\" color=\"{{settings.theme.button}}\" expand=\"block\" (click)=\"forgotten()\" [disabled]=\"!email.valid || disableSubmit\" fill=\"solid\">{{\"Send OTP\" | translate}}</ion-button>\n\n<ion-list *ngIf=\"status.status\">\n    <form [formGroup]=\"form\">\n  <ion-item>\n  <ion-input required type=\"number\" formControlName=\"otp\" placeholder=\"OTP\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-input required type=\"password\" formControlName=\"password\" placeholder=\"New Password\"></ion-input>\n  </ion-item>\n</form>\n</ion-list>\n\n <ion-button *ngIf=\"status.status\" color=\"{{settings.theme.button}}\" expand=\"block\" (click)=\"resetPassword()\" [disabled]=\"!form.valid || disableSubmit\" fill=\"solid\">{{\"Reset Password\" | translate}}</ion-button>\n\n\n <ion-item *ngIf=\"status\" lines=\"none\">\n <ion-label text-center text-wrap [ngClass]=\"status.status?'success':'error'\">{{status.message}}</ion-label>\n</ion-item>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/forgotten/forgotten.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/account/forgotten/forgotten.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgotten {\n  position: relative; }\n  .forgotten .form {\n    margin: 0;\n    position: absolute;\n    width: 90%;\n    top: 40%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvYWNjb3VudC9mb3Jnb3R0ZW4vZm9yZ290dGVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBR1EsU0FBUztJQUNULGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZm9yZ290dGVuL2ZvcmdvdHRlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290dGVuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmZvcm0ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgdG9wOiA0MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICAgIC5lcnJvciB7XG4gICAgICAgIC8vY29sb3I6ICNCMDAwMjA7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/forgotten/forgotten.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/account/forgotten/forgotten.page.ts ***!
  \*****************************************************/
/*! exports provided: ForgottenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgottenPage", function() { return ForgottenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ForgottenPage = /** @class */ (function () {
    function ForgottenPage(api, loadingController, navCtrl, settings, fb) {
        this.api = api;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.fb = fb;
        this.status = {};
        this.disableSubmit = false;
        this.email = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]
        });
        this.form = this.fb.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', '']
        });
    }
    ForgottenPage.prototype.ngOnInit = function () { };
    ForgottenPage.prototype.forgotten = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disableSubmit = true;
                        return [4 /*yield*/, this.api.postItem('email-otp', this.email.value).subscribe(function (res) {
                                _this.status = res;
                                _this.form.patchValue({ email: _this.email.value.email });
                                console.log(_this.form.value.email);
                                _this.disableSubmit = false;
                            }, function (err) {
                                _this.disableSubmit = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgottenPage.prototype.resetPassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disableSubmit = true;
                        return [4 /*yield*/, this.api.postItem('reset-user-password', this.form.value).subscribe(function (res) {
                                _this.status = res;
                                //this.navCtrl.navigateBack('/tabs/account');
                                _this.disableSubmit = false;
                            }, function (err) {
                                _this.disableSubmit = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgottenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotten',
            template: __webpack_require__(/*! ./forgotten.page.html */ "./src/app/account/forgotten/forgotten.page.html"),
            styles: [__webpack_require__(/*! ./forgotten.page.scss */ "./src/app/account/forgotten/forgotten.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ForgottenPage);
    return ForgottenPage;
}());



/***/ }),

/***/ "./src/app/account/login/login.page.html":
/*!***********************************************!*\
  !*** ./src/app/account/login/login.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <!--ion-title>{{\"Login\" | translate}}</ion-title-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n\n  <!-- Top header image. uncomment if not using background image in scss file -->\n  <div class=\"login-logo\">\n    <img src=\"assets/image/login_logo2.jpg\">\n  </div>\n\n<!-- Login Form 1 -->\n<div class=\"login1\">\n  <ion-card mode=\"md\">\n  <div class=\"form\">\n        <!--p><ion-text color=\"medium\">-- {{\"continue with\" | translate}} --</ion-text></p>\n        <ion-grid>\n        <ion-row>\n        <ion-col size=\"6\">\n        <ion-button expand=\"block\" shape=\"undefined\" mode=\"ios\" fill=\"solid\" color=\"google\" (click)=\"googleLogin()\" [disabled]=\"googleLogingInn\">\n        <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>{{\"Google\"| translate}}</ion-button>\n        <br/>\n        </ion-col>\n        <ion-col size=\"6\">\n        <ion-button expand=\"block\" shape=\"undefined\" mode=\"ios\" fill=\"solid\" color=\"facebook\" (click)=\"facebookLogin()\" [disabled]=\"facebookLogingInn\">\n        <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>{{\"Facebook\"| translate}}</ion-button>\n        </ion-col>\n        </ion-row>\n        </ion-grid>\n        <p><ion-text color=\"medium\">-- {{\"or use email address\" | translate}} --</ion-text></p-->\n        <ion-list>\n        <form [formGroup]=\"form\">\n          <ion-item mode=\"md\">\n          <ion-icon slot=\"start\" name=\"person\" mode=\"md\"></ion-icon>\n          <ion-input type=\"text\" formControlName=\"username\" placeholder=\"Username\"></ion-input>\n          </ion-item>\n          <ion-item mode=\"md\">\n          <ion-icon slot=\"start\" name=\"key\" mode=\"md\"></ion-icon>\n          <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n          </ion-item>\n         </form>\n        </ion-list>\n        <ion-button shape=\"undefined\" mode=\"ios\" fill=\"solid\" color=\"{{settings.theme.button}}\" expand=\"block\" [disabled]=\"disableSubmit\" (click)=\"onSubmit()\">{{\"Login\"| translate}}</ion-button>\n        <ion-button color=\"{{settings.theme.button}}\" expand=\"full\" fill=\"clear\" (click)=\"forgotton()\">{{\"Forgot Password\"| translate}}?</ion-button>\n        <br/>\n        <!--ion-button expand=\"block\" color=\"{{settings.theme.button}}\" shape=\"round\" mode=\"ios\" fill=\"outline\" (click)=\"loginWithPhone()\" [disabled]=\"phoneLogingInn\"><ion-spinner name=\"dots\" color=\"{{settings.theme.button}}\" *ngIf=\"phoneLogingInn\"></ion-spinner><span *ngIf=\"!phoneLogingInn\">{{\"Login with OTP\"| translate}}</span></ion-button-->\n        <br/>\n        <div class=\"errors\" *ngIf=\"errors\">\n          <div *ngFor=\"let error of errors | keys\">\n            <span [innerHTML]=\"error.value\"></span>\n          </div>\n        </div>\n  </div>\n  </ion-card>\n\n</div>\n\n<!-- Login Form 2 -->\n<!--div class=\"login1\">\n  <ion-card mode=\"md\">\n  <div class=\"form\"> \n        <ion-list>\n        <form [formGroup]=\"form\">\n\n          <p><ion-text color=\"medium\">-- {{\"continue with\" | translate}} --</ion-text></p>\n          <ion-grid>\n          <ion-row>\n          <ion-col size=\"6\">\n          <ion-button expand=\"full\" shape=\"round\" mode=\"ios\" fill=\"outline\" color=\"google\" (click)=\"googleLogin()\" [disabled]=\"googleLogingInn\">\n          <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>{{\"Google\"| translate}}</ion-button>\n          <br/>\n          </ion-col>\n          <ion-col size=\"6\">\n          <ion-button expand=\"full\" shape=\"round\" mode=\"ios\" fill=\"outline\" color=\"facebook\" (click)=\"facebookLogin()\" [disabled]=\"facebookLogingInn\">\n          <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>{{\"Facebook\"| translate}}</ion-button>\n          </ion-col>\n          </ion-row>\n          </ion-grid>\n          <p><ion-text color=\"medium\">-- {{\"or use email address\" | translate}} --</ion-text></p>\n\n          <ion-item mode=\"md\">\n          <ion-icon slot=\"start\" name=\"person\" mode=\"md\"></ion-icon>\n          <ion-input type=\"text\" formControlName=\"username\" placeholder=\"Username\"></ion-input>\n          </ion-item>\n          <ion-item mode=\"md\">\n          <ion-icon slot=\"start\" name=\"key\" mode=\"md\"></ion-icon>\n          <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n          </ion-item>\n         </form>  \n        </ion-list>\n        <ion-button shape=\"round\" mode=\"ios\" fill=\"solid\" color=\"{{settings.theme.button}}\" expand=\"full\" [disabled]=\"disableSubmit\" (click)=\"onSubmit()\">{{\"Login\"| translate}}</ion-button>\n        <ion-button color=\"{{settings.theme.button}}\" expand=\"full\" fill=\"clear\" (click)=\"forgotton()\">{{\"Forgot Password\"| translate}}?</ion-button>\n        <br/>\n        <br/>\n        <div class=\"errors\" *ngIf=\"errors\">\n          <div *ngFor=\"let error of errors | keys\">\n            <span [innerHTML]=\"error.value\"></span>\n          </div>\n        </div>\n  </div>\n</ion-card>\n</div-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/login/login.page.scss":
/*!***********************************************!*\
  !*** ./src/app/account/login/login.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login1 {\n  padding: 16px;\n  display: flex !important;\n  justify-content: center !important;\n  height: 100%;\n  flex-direction: column; }\n  .login1 ion-list {\n    margin: 16px 8px;\n    background: transparent; }\n  .login1 ion-list ion-item {\n      --background: transparent; }\n  .login1 ion-button {\n    --border-radius: 4px; }\n  .login1 p {\n    text-align: center; }\n  .login1 ion-card {\n    padding: 10px;\n    margin: 0;\n    background: white; }\n  .login-logo {\n  position: absolute;\n  margin: auto;\n  height: 100%; }\n  .login-logo img {\n    margin-top: -90px;\n    height: 100%;\n    width: auto; }\n  ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  --border-width: 0;\n  --border-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvYWNjb3VudC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBY2Isd0JBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osc0JBQXNCLEVBQUE7RUFsQjFCO0lBR1EsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0VBSi9CO01BTVkseUJBQWEsRUFBQTtFQU56QjtJQVVRLG9CQUFnQixFQUFBO0VBVnhCO0lBYVEsa0JBQWtCLEVBQUE7RUFiMUI7SUFvQlEsYUFBYTtJQUNiLFNBQVM7SUFDVCxpQkFBaUIsRUFBQTtFQUd6QjtFQUVJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWSxFQUFBO0VBSmhCO0lBTVEsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXLEVBQUE7RUFHbkI7RUFDSSx5QkFBYTtFQUNiLHdDQUFpQjtFQUNqQixpQkFBZTtFQUNmLDJCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbjEge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBtYXJnaW46IDE2cHggOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG59XG4ubG9naW4tbG9nbyB7XG4gICAgLy93aWR0aDogMjAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTkwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxufVxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCB7XG4gICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJCMzJCMiwgIzE0ODhDQykgIWltcG9ydGFudDsgLy9ncmFkaWVudCBiYWNrZ3JvdW5kXG4gICAgLy8tLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2UvbG9naW5fYmFja2dyb3VuZDQuanBnKSAwIDAvYXV0byAxMDAlIG5vLXJlcGVhdDsgLy9pbWFnZSBiYWNrZ3JvdW5kXG59Il19 */"

/***/ }),

/***/ "./src/app/account/login/login.page.ts":
/*!*********************************************!*\
  !*** ./src/app/account/login/login.page.ts ***!
  \*********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");








//import { GooglePlus } from '@ionic-native/google-plus/ngx';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
var LoginPage = /** @class */ (function () {
    function LoginPage(platform, oneSignal, api, settings, loadingController, router, navCtrl, fb /*, private googlePlus: GooglePlus, private facebook: Facebook*/) {
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.api = api;
        this.settings = settings;
        this.loadingController = loadingController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.status = {};
        this.disableSubmit = false;
        this.pushForm = {};
        this.googleStatus = {};
        this.faceBookStatus = {};
        this.googleLogingInn = false;
        this.facebookLogingInn = false;
        this.phoneLogingInn = false;
        this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disableSubmit = true;
                        return [4 /*yield*/, this.api.postItem('login', this.form.value).subscribe(function (res) {
                                _this.status = res;
                                if (_this.status.errors) {
                                    _this.errors = _this.status.errors;
                                    for (var key in _this.errors) {
                                        console.log(key);
                                        _this.errors[key].forEach(function (item) { return item.replace('<strong>ERROR<\/strong>:', ''); });
                                    }
                                }
                                else if (_this.status.data) {
                                    _this.settings.customer.id = _this.status.ID;
                                    if (_this.platform.is('cordova')) {
                                        _this.oneSignal.getIds().then(function (data) {
                                            _this.form.onesignal_user_id = data.userId;
                                            _this.form.onesignal_push_token = data.pushToken;
                                        });
                                        _this.api.postItem('update_user_notification', _this.form).subscribe(function (res) { });
                                    }
                                    if (_this.status.allcaps.dc_vendor || _this.status.allcaps.seller || _this.status.allcaps.wcfm_vendor) {
                                        _this.settings.vendor = true;
                                    }
                                    _this.navCtrl.navigateBack('/tabs/account');
                                }
                                _this.disableSubmit = false;
                            }, function (err) {
                                _this.disableSubmit = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.forgotton = function () {
        this.navCtrl.navigateForward('/tabs/account/login/forgotten');
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/account/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/account/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] /*, private googlePlus: GooglePlus, private facebook: Facebook*/])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/account/map/map.page.html":
/*!*******************************************!*\
  !*** ./src/app/account/map/map.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Locations\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #mapCanvas class=\"map-canvas\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/map/map.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/map/map.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in; }\n\n.show-map {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvYWNjb3VudC9tYXAvbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUVsQixZQUFZO0VBQ1osV0FBVztFQUVYLDZCQUE2QjtFQUU3QixVQUFVO0VBQ1YsaUNBQWlDLEVBQUE7O0FBR25DO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9tYXAvbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuXG4uc2hvdy1tYXAge1xuICBvcGFjaXR5OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/account/map/map.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/map/map.page.ts ***!
  \*****************************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");





var MapPage = /** @class */ (function () {
    function MapPage(api, platform, settings) {
        this.api = api;
        this.platform = platform;
        this.settings = settings;
        this.mapData = [];
    }
    MapPage.prototype.ngAfterViewInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('locations').subscribe(function (res) {
                            _this.processData(res);
                            console.log(res);
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.processData = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var googleMaps, mapEle, map;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getGoogleMaps(data.mapApiKey)];
                    case 1:
                        googleMaps = _a.sent();
                        data.locations.map(function (item, index) {
                            _this.mapData[index] = {};
                            _this.mapData[index].name = item.title;
                            _this.mapData[index].lat = parseFloat(item.description);
                            _this.mapData[index].lng = parseFloat(item.url);
                            if (index == 0)
                                _this.mapData[index].center = true;
                            console.log(_this.mapData);
                        });
                        mapEle = this.mapElement.nativeElement;
                        map = new googleMaps.Map(mapEle, {
                            center: this.mapData.find(function (d) { return d.center; }),
                            zoom: data.mapZoom
                        });
                        this.mapData.forEach(function (markerData) {
                            var infoWindow = new googleMaps.InfoWindow({
                                content: "<h5>" + markerData.name + "</h5>"
                            });
                            var marker = new googleMaps.Marker({
                                position: markerData,
                                map: map,
                                title: markerData.name
                            });
                            marker.addListener('click', function () {
                                infoWindow.open(map, marker);
                            });
                        });
                        googleMaps.event.addListenerOnce(map, 'idle', function () {
                            mapEle.classList.add('show-map');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-map',
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/account/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/account/map/map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]])
    ], MapPage);
    return MapPage;
}());

function getGoogleMaps(apiKey) {
    var win = window;
    var googleModule = win.google;
    if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
    }
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&v=3.31";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = function () {
            var googleModule2 = win.google;
            if (googleModule2 && googleModule2.maps) {
                resolve(googleModule2.maps);
            }
            else {
                reject('google maps not available');
            }
        };
    });
}


/***/ }),

/***/ "./src/app/account/order/order.page.html":
/*!***********************************************!*\
  !*** ./src/app/account/order/order.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/orders\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Order\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"order\">\n<ion-list *ngIf=\"order\">\n  <ion-list-header>\n    <ion-label style=\"font-weight: 900;\">{{order.id}} - <span style=\"text-transform: uppercase;\">{{order.status}}</span></ion-label>\n  </ion-list-header>\n  <ion-list-header>\n    <ion-label>{{\"Date\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item>\n    <ion-label text-wrap>\n      <p>{{order.date_created | date:'MMM d, y hh:mm a'}}</p>\n    </ion-label>\n  </ion-item>\n  <ion-list-header>\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item>\n    <ion-label text-wrap>\n      <p>\n    <span>{{order.billing.first_name}}</span>&nbsp;<span>{{order.billing.last_name}}</span>&nbsp;<span>{{order.billing.company}}</span>&nbsp;<span>{{order.billing.address_1}}</span>&nbsp;<span>{{order.billing.address_2}}</span>&nbsp;<span>{{order.billing.city}}</span>\n    <span>{{order.billing.state}}</span>&nbsp;<span>{{order.billing.postcode}}</span>&nbsp;<span>{{order.billing.country}}</span>\n    &nbsp;<span>{{order.billing.email}}</span>&nbsp;<span>{{order.billing.phone}}</span>\n  </p>\n    </ion-label>\n  </ion-item>\n  <ion-list-header>\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item>\n    <ion-label text-wrap>\n      <p>\n    <span>{{order.shipping.first_name}}</span>&nbsp;<span>{{order.shipping.last_name}}</span>&nbsp;<span>{{order.shipping.company}}</span>&nbsp;<span>{{order.shipping.address_1}}</span>&nbsp;<span>{{order.shipping.address_2}}</span>&nbsp;<span>{{order.shipping.city}}</span>&nbsp;\n    <span>{{order.shipping.state}}</span>&nbsp;<span>{{order.shipping.postcode}}</span>&nbsp;<span>{{order.shipping.country}}</span>&nbsp;\n    <span>{{order.shipping.email}}</span>&nbsp;<span>{{order.shipping.phone}}</span>\n  </p>\n    </ion-label>\n  </ion-item>\n  <ion-list-header>\n    <ion-label>{{\"Shipping Method\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item>\n    <ion-label text-wrap *ngFor=\"let item of order.shipping_lines | keys\">\n    <p>{{item.value.method_title}}</p>\n    </ion-label>\n  </ion-item>\n  <ion-list-header>\n    <ion-label>{{\"Payment Method\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item>\n    <ion-label text-wrap>\n    <p [innerHTML]=\"order.payment_method_title\"></p>\n    </ion-label>\n      <ion-button color=\"{{settings.theme.button}}\" slot=\"end\" fill=\"clear\" *ngIf=\"(order.status != 'refunded' || order.status != 'cancelled' || order.status != 'failed') && settings.settings?.enable_refund\" (click)=\"showField()\" [disabled]=\"disableRefundButton\">\n        {{\"Refund\" | translate}}\n      </ion-button>\n      <ion-button color=\"{{settings.theme.button}}\" slot=\"end\" fill=\"clear\" *ngIf=\"order.status == 'refunded' && settings.settings?.enable_refund\" disabled>\n        {{\"Refunded\" | translate}}\n      </ion-button>\n  </ion-item>\n  <div *ngIf=\"showRefund\">\n    <ion-item lines=\"none\">\n        <ion-input required type=\"text\" [(ngModel)]=\"refund.ywcars_form_reason\" name=\"amount\" placeholder=\"Reason for refund\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"block\" color=\"{{settings.theme.button}}\" (click)=\"requestRefund()\">Request refund</ion-button>\n</div>\n\n  <ion-list-header>\n    <ion-label>{{\"Items\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item>\n    <ion-label text-wrap>\n    <p *ngFor=\"let item of order.line_items\">{{item.name}} <span *ngFor=\"let meta of item.meta_data\">{{meta.value}} </span> x {{item.quantity}} <span style=\"float: right\">{{item.total | currency:settings.currency:symbol:'1.2-2'}}</span></p>\n    </ion-label>\n  </ion-item>\n  <ion-list-header>\n    <ion-label>{{\"Totals\" | translate}}</ion-label>\n  </ion-list-header>\n  <ion-item>\n    <ion-label text-wrap>\n    <p>{{\"Shipping\" | translate}}<span style=\"float: right\">{{order.shipping_total | currency:settings.currency:symbol:'1.2-2'}}</span></p>\n    <p>{{\"Discount\" | translate}}<span style=\"float: right\">{{order.discount_total | currency:settings.currency:symbol:'1.2-2'}}</span></p>\n    <p>{{\"Tax\" | translate}}<span style=\"float: right\">{{order.total_tax | currency:settings.currency:symbol:'1.2-2'}}</span></p>\n    <ion-label class=\"grand-total\">Total<span style=\"float: right\">{{order.total | currency:settings.currency:symbol:'1.2-2'}}</span></ion-label>\n  </ion-label>\n  </ion-item>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/order/order.page.scss":
/*!***********************************************!*\
  !*** ./src/app/account/order/order.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order .grand-total {\n  font-weight: 900; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvYWNjb3VudC9vcmRlci9vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvb3JkZXIvb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyIHtcbiAgICAuZ3JhbmQtdG90YWwge1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/account/order/order.page.ts":
/*!*********************************************!*\
  !*** ./src/app/account/order/order.page.ts ***!
  \*********************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var OrderPage = /** @class */ (function () {
    function OrderPage(translate, api, settings, toastController, router, loadingController, navCtrl, route) {
        this.translate = translate;
        this.api = api;
        this.settings = settings;
        this.toastController = toastController;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.refundKeys = {};
        this.refund = {};
        this.showRefund = false;
        this.disableRefundButton = false;
        this.refundResponse = {};
        this.lan = {};
    }
    OrderPage.prototype.getOrder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.api.getItem('orders/' + this.id).subscribe(function (res) {
                                _this.order = res;
                                for (var item in _this.order.meta_data) {
                                    if (_this.order.meta_data[item].key == '_ywcars_requests')
                                        _this.disableRefundButton = true;
                                }
                                loading.dismiss();
                            }, function (err) {
                                console.log(err);
                                loading.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderPage.prototype.refundKey = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('woo_refund_key').subscribe(function (res) {
                            _this.refundKeys = res;
                            console.log(_this.refundKeys);
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderPage.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get(['Refund request submitted!', 'Unable to submit the refund request']).subscribe(function (translations) {
            _this.lan.refund = translations['Refund request submitted!'];
            _this.lan.unable = translations['Unable to submit the refund request'];
        });
        this.id = this.route.snapshot.paramMap.get('id');
        this.getOrder();
        this.refundKey();
    };
    OrderPage.prototype.showField = function () {
        this.showRefund = !this.showRefund;
    };
    OrderPage.prototype.requestRefund = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disableRefundButton = true;
                        this.refund.ywcars_form_order_id = this.id;
                        this.refund.ywcars_form_whole_order = '1';
                        this.refund.ywcars_form_product_id = '';
                        this.refund.ywcars_form_line_total = this.order.total;
                        this.refund.ywcars_form_reason = this.refund.ywcars_form_reason;
                        this.refund.action = 'ywcars_submit_request';
                        this.refund.security = this.refundKeys.ywcars_submit_request;
                        return [4 /*yield*/, this.api.postItem('woo_refund_key', this.refund).subscribe(function (res) {
                                _this.refundResponse = res;
                                console.log(_this.refundResponse);
                                _this.getOrder();
                                _this.disableRefundButton = false;
                                if (_this.refundResponse.success)
                                    _this.presentToast(_this.lan.refund);
                                else
                                    _this.presentToast(_this.lan.unable);
                            }, function (err) {
                                console.log(err);
                                _this.disableRefundButton = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.page.html */ "./src/app/account/order/order.page.html"),
            styles: [__webpack_require__(/*! ./order.page.scss */ "./src/app/account/order/order.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OrderPage);
    return OrderPage;
}());



/***/ }),

/***/ "./src/app/account/orders/orders.page.html":
/*!*************************************************!*\
  !*** ./src/app/account/orders/orders.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Orders\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"orders\">\n\n<div class=\"spinner\" *ngIf=\"!orders\"><ion-spinner> </ion-spinner></div>\n\n<div *ngIf=\"orders\">\n<div *ngIf=\"orders.length == 0\" text-center class=\"empty\">\n  <ion-icon name=\"document\"></ion-icon>\n</div>\n\n  <ion-card *ngFor=\"let item of orders\" (click)=\"getDetail(item)\" class=\"ion-activatable ion-focusable hydrated\" mode=\"ios\">\n    <ion-card-header>\n      <ion-card-subtitle>{{item.id}} - <span style=\"text-transform: uppercase;\">{{item.status}}</span></ion-card-subtitle>\n      <ion-card-title>{{item.total | currency:settings.currency:symbol:'1.2-2'}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <p>{{item.date_created | date:'MMM d, y hh:mm a'}}</p>\n      <p [innerHTML]=\"item.payment_method_title\"></p>\n    </ion-card-content>\n  </ion-card>\n\n\t<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && orders.length\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/orders/orders.page.scss":
/*!*************************************************!*\
  !*** ./src/app/account/orders/orders.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orders .activated {\n  opacity: 0.6; }\n\n.orders .empty {\n  margin-top: 50px;\n  text-align: center; }\n\n.orders .empty ion-icon {\n    font-size: 7.2em; }\n\n.orders ion-card-title {\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.2; }\n\n.orders ion-card-subtitle {\n  font-weight: 900;\n  font-size: 13px;\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvYWNjb3VudC9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFlBQVksRUFBQTs7QUFGcEI7RUFLUSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBTjFCO0lBUVksZ0JBQWdCLEVBQUE7O0FBUjVCO0VBWVEsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFkeEI7RUFpQlEsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L29yZGVycy9vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVycyB7XG4gICAgLmFjdGl2YXRlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICB9XG4gICAgLmVtcHR5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDcuMmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIH1cbiAgICBpb24tY2FyZC1zdWJ0aXRsZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/account/orders/orders.page.ts":
/*!***********************************************!*\
  !*** ./src/app/account/orders/orders.page.ts ***!
  \***********************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");






var OrdersPage = /** @class */ (function () {
    function OrdersPage(api, settings, router, loadingController, navCtrl, route) {
        this.api = api;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.filter = {};
        this.hasMoreItems = true;
        this.filter.page = 1;
        this.filter.customer = this.settings.customer.id;
    }
    OrdersPage.prototype.ngOnInit = function () {
        this.getOrders();
    };
    OrdersPage.prototype.getOrders = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getItem('orders', this.filter).subscribe(function (res) {
                            _this.orders = res;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersPage.prototype.loadData = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filter.page = this.filter.page + 1;
                        return [4 /*yield*/, this.api.getItem('orders', this.filter).subscribe(function (res) {
                                _this.orders.push.apply(_this.orders, res);
                                event.target.complete();
                                if (!res)
                                    _this.hasMoreItems = false;
                            }, function (err) {
                                event.target.complete();
                            })];
                    case 1:
                        _a.sent();
                        console.log('Done');
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersPage.prototype.getDetail = function (order) {
        this.navCtrl.navigateForward('/tabs/account/orders/order/' + order.id);
    };
    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.page.html */ "./src/app/account/orders/orders.page.html"),
            styles: [__webpack_require__(/*! ./orders.page.scss */ "./src/app/account/orders/orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OrdersPage);
    return OrdersPage;
}());



/***/ }),

/***/ "./src/app/account/points/points.page.html":
/*!*************************************************!*\
  !*** ./src/app/account/points/points.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Points\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <div class=\"spinner\" *ngIf=\"!points.points\"><ion-spinner> </ion-spinner></div>\n      <ion-list *ngIf=\"points.points\">\n        <ion-item lines=\"none\" *ngIf=\"settings.reward == ''\">\n          <ion-label text-wrap>{{\"You currently have no loyalty points. Place a order with us today to start earning loyalty points.\" | translate}}</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label class=\"bold\">{{\"Points\" | translate}} - {{points.points}} ({{1*points.points_vlaue | currency:settings.currency:symbol:'1.2-2'}})</ion-label>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n      <ion-item *ngFor=\"let item of points.items\">\n        <ion-label text-wrap>\n          <ion-text>\n            <h3>{{item.description}}</h3>\n          </ion-text>\n          <ion-text>\n            <p>{{item.date | date:'MMM d, y hh:mm a'}}</p>\n          </ion-text>\n        </ion-label>\n        <ion-text slot=\"end\"><p>{{item.points}}</p></ion-text>\n      </ion-item>\n      </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/points/points.page.scss":
/*!*************************************************!*\
  !*** ./src/app/account/points/points.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcG9pbnRzL3BvaW50cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/points/points.page.ts":
/*!***********************************************!*\
  !*** ./src/app/account/points/points.page.ts ***!
  \***********************************************/
/*! exports provided: PointsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsPage", function() { return PointsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var PointsPage = /** @class */ (function () {
    function PointsPage(api, settings, navCtrl) {
        this.api = api;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.points = {};
        this.points.items = [];
    }
    PointsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('getPointsHistory').subscribe(function (res) {
                            _this.points = res;
                            _this.settings.reward = res.points;
                            _this.settings.rewardValue = res.points_vlaue;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PointsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-points',
            template: __webpack_require__(/*! ./points.page.html */ "./src/app/account/points/points.page.html"),
            styles: [__webpack_require__(/*! ./points.page.scss */ "./src/app/account/points/points.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], PointsPage);
    return PointsPage;
}());



/***/ }),

/***/ "./src/app/account/register/register.page.html":
/*!*****************************************************!*\
  !*** ./src/app/account/register/register.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <!--ion-title>{{\"Login\" | translate}}</ion-title-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n\n    <!-- Top header image. uncomment if not using background image in scss file -->\n  <div class=\"login-logo\">\n    <img src=\"assets/image/login_logo2.jpg\">\n  </div>\n\n<!-- Login Form 1 -->\n<div class=\"login1\">\n  <ion-card mode=\"md\">\n  <div class=\"form\">\n\n\n<ion-list>\n  <form [formGroup]=\"form\">\n  <ion-item>\n  <ion-input required type=\"text\" formControlName=\"first_name\" placeholder=\"First Name\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-input required type=\"text\" formControlName=\"last_name\" placeholder=\"Last Name\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-input required type=\"text\" formControlName=\"phone\" placeholder=\"Phone\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-input required type=\"email\" formControlName=\"email\" placeholder=\"Email\"></ion-input>\n  </ion-item>\n  <ion-item>\n  <ion-input required type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n  </ion-item>\n</form>\n</ion-list>\n <ion-button color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" [disabled]=\"!form.valid || disableSubmit\" (click)=\"onSubmit()\">{{\"Register\" | translate}}</ion-button>\n\n <!--ion-button expand=\"block\" shape=\"undefined\" mode=\"ios\" fill=\"clear\" color=\"facebook\" (click)=\"loginWithPhone()\" [disabled]=\"phoneLogingInn\"><ion-spinner name=\"dots\" color=\"{{settings.theme.button}}\" *ngIf=\"phoneLogingInn\"></ion-spinner><span *ngIf=\"!phoneLogingInn\">{{\"Register with OTP\"| translate}}</span></ion-button-->\n\n<div class=\"errors\" *ngIf=\"errors\">\n  <div *ngFor=\"let error of errors | keys\">\n    <span [innerHTML]=\"error.value\"></span>\n  </div>\n </div>\n\n \n <ion-item *ngIf=\"status\" lines=\"none\">\n <ion-label text-center text-wrap [ngClass]=\"status.status?'success':'error'\">{{status.message}}</ion-label>\n</ion-item>\n</div>\n\n\n  </ion-card>\n\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/register/register.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/account/register/register.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login1 {\n  padding: 16px;\n  display: flex !important;\n  justify-content: center !important;\n  height: 100%;\n  flex-direction: column;\n  --inner-padding-start: 0; }\n  .login1 ion-list {\n    margin: 16px 8px;\n    background: transparent; }\n  .login1 ion-list ion-item {\n      --background: transparent; }\n  .login1 ion-button {\n    --border-radius: 4px; }\n  .login1 p {\n    text-align: center; }\n  .login1 ion-card {\n    padding: 10px;\n    margin: 0;\n    background: white; }\n  .login1 ion-item {\n    --padding-start: 0; }\n  .login-logo {\n  position: absolute;\n  margin: auto;\n  height: 100%; }\n  .login-logo img {\n    margin-top: -90px;\n    height: 100%;\n    width: auto; }\n  ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  --border-width: 0;\n  --border-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBY2Isd0JBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osc0JBQXNCO0VBU3RCLHdCQUFzQixFQUFBO0VBM0IxQjtJQUdRLGdCQUFnQjtJQUNoQix1QkFBdUIsRUFBQTtFQUovQjtNQU1ZLHlCQUFhLEVBQUE7RUFOekI7SUFVUSxvQkFBZ0IsRUFBQTtFQVZ4QjtJQWFRLGtCQUFrQixFQUFBO0VBYjFCO0lBb0JRLGFBQWE7SUFDYixTQUFTO0lBQ1QsaUJBQWlCLEVBQUE7RUF0QnpCO0lBeUJRLGtCQUFnQixFQUFBO0VBSXhCO0VBRUksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFKaEI7SUFNUSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVcsRUFBQTtFQUduQjtFQUNJLHlCQUFhO0VBQ2Isd0NBQWlCO0VBQ2pCLGlCQUFlO0VBQ2YsMkJBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luMSB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBpb24tbGlzdCB7XG4gICAgICAgIG1hcmdpbjogMTZweCA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICB9XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuLmxvZ2luLWxvZ28ge1xuICAgIC8vd2lkdGg6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC05MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbn1cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyQjMyQjIsICMxNDg4Q0MpICFpbXBvcnRhbnQ7IC8vZ3JhZGllbnQgYmFja2dyb3VuZFxuICAgIC8vLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2xvZ2luX2JhY2tncm91bmQ0LmpwZykgMCAwL2F1dG8gMTAwJSBuby1yZXBlYXQ7IC8vaW1hZ2UgYmFja2dyb3VuZFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/register/register.page.ts":
/*!***************************************************!*\
  !*** ./src/app/account/register/register.page.ts ***!
  \***************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");








var RegisterPage = /** @class */ (function () {
    function RegisterPage(platform, oneSignal, api, data, loadingController, settings, navCtrl, fb) {
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.api = api;
        this.data = data;
        this.loadingController = loadingController;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.status = {};
        this.disableSubmit = false;
        this.phoneLogingInn = false;
        this.form = this.fb.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    }
    RegisterPage.prototype.ngOnInit = function () { };
    RegisterPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disableSubmit = true;
                        return [4 /*yield*/, this.api.postItem('create-user', this.form.value).subscribe(function (res) {
                                _this.status = res;
                                if (_this.status.errors) {
                                    _this.errors = _this.status.errors;
                                    _this.disableSubmit = false;
                                    for (var key in _this.errors) {
                                        _this.errors[key].forEach(function (item) { return item.replace('<strong>ERROR<\/strong>:', ''); });
                                    }
                                }
                                else if (_this.status.data != undefined) {
                                    _this.settings.customer.id = _this.status.ID;
                                    if (_this.platform.is('cordova'))
                                        _this.oneSignal.getIds().then(function (data) {
                                            _this.pushForm.onesignal_user_id = data.userId;
                                            _this.pushForm.onesignal_push_token = data.pushToken;
                                        });
                                    _this.api.postItem('update_user_notification', _this.pushForm).subscribe(function (res) { });
                                    _this.navCtrl.navigateBack('/tabs/account');
                                    _this.disableSubmit = false;
                                }
                                else
                                    _this.disableSubmit = false;
                            }, function (err) {
                                _this.disableSubmit = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.loginWithPhone = function () {
        var _this = this;
        this.phoneLogingInn = true;
        window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "ID",
            facebookNotificationsEnabled: true,
        }, function (data) {
            window.AccountKitPlugin.getAccount(function (info) { return _this.handlePhoneLogin(info); }, function (err) { return _this.handlePhoneLogin(err); });
        });
    };
    RegisterPage.prototype.handlePhoneLogin = function (info) {
        var _this = this;
        if (info.phoneNumber) {
            this.api.postItem('phone_number_login', {
                "phone": info.phoneNumber,
            }).subscribe(function (res) {
                _this.status = res;
                if (_this.status.errors) {
                    _this.errors = _this.status.errors;
                }
                else if (_this.status.data) {
                    _this.settings.customer.id = _this.status.ID;
                    if (_this.platform.is('cordova')) {
                        _this.oneSignal.getIds().then(function (data) {
                            _this.form.onesignal_user_id = data.userId;
                            _this.form.onesignal_push_token = data.pushToken;
                        });
                        _this.api.postItem('update_user_notification', _this.form).subscribe(function (res) { });
                    }
                    if (_this.status.allcaps.dc_vendor || _this.status.allcaps.seller || _this.status.allcaps.wcfm_vendor) {
                        _this.settings.vendor = true;
                    }
                    _this.navCtrl.navigateBack('/tabs/account');
                }
                _this.phoneLogingInn = false;
            }, function (err) {
                _this.phoneLogingInn = false;
            });
        }
        else
            this.phoneLogingInn = false;
    };
    RegisterPage.prototype.handlePhoneLoginError = function (error) {
        this.phoneVerificationError = error;
        this.phoneLogingInn = false;
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/account/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/account/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_4__["Data"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "./src/app/account/setting/setting.page.html":
/*!***************************************************!*\
  !*** ./src/app/account/setting/setting.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n   <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n      <ion-title>{{\"Setting\" | translate}}</ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content class=\"settings\">\n   <div *ngIf=\"settings.languages.length\">\n      <ion-list >\n         <ion-radio-group [(ngModel)]=\"config.lang\" name=\"language\" ngDefaultControl>\n         <ion-item *ngFor=\"let item of settings.languages\">\n            <ion-label class=\"payment-method-title\"><img src=\"{{item.country_flag_url}}\" width=\"20\"><span style=\"padding: 10px\">{{item.native_name}}</span></ion-label>\n            <ion-radio value=\"{{item.language_code}}\"> </ion-radio>\n         </ion-item>\n         </ion-radio-group>\n         <ion-button padding color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"applyLanguage()\" >{{\"Apply\" | translate}}</ion-button>\n      </ion-list>\n   </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/account/setting/setting.page.scss":
/*!***************************************************!*\
  !*** ./src/app/account/setting/setting.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/setting/setting.page.ts":
/*!*************************************************!*\
  !*** ./src/app/account/setting/setting.page.ts ***!
  \*************************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../home/home.page */ "./src/app/home/home.page.ts");










var SettingPage = /** @class */ (function () {
    function SettingPage(home, ionicConfig, router, settings, navCtrl, translateService, nativeStorage, config) {
        this.home = home;
        this.ionicConfig = ionicConfig;
        this.router = router;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.nativeStorage = nativeStorage;
        this.config = config;
    }
    SettingPage.prototype.applyLanguage = function () {
        var _this = this;
        this.translateService.setDefaultLang(this.config.lang);
        if (this.config.lang == 'ar') {
            this.settings.dir = 'rtl';
        }
        else
            this.settings.dir = 'ltr';
        this.translateService.get(['Back']).subscribe(function (translations) {
            _this.ionicConfig.set('backButtonText', translations['Back']);
        });
        document.documentElement.setAttribute('dir', this.settings.dir);
        this.nativeStorage.setItem('settings', { lang: this.config.lang, dir: this.settings.dir })
            .then(function () { return console.log(); }, function (error) { return console.error(error); });
        this.home.getBlocks();
        this.navCtrl.pop();
    };
    SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.page.html */ "./src/app/account/setting/setting.page.html"),
            styles: [__webpack_require__(/*! ./setting.page.scss */ "./src/app/account/setting/setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Config"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"], _config__WEBPACK_IMPORTED_MODULE_2__["Config"]])
    ], SettingPage);
    return SettingPage;
}());



/***/ }),

/***/ "./src/app/account/wallet/wallet.page.html":
/*!*************************************************!*\
  !*** ./src/app/account/wallet/wallet.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>{{\"Wallet\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"spinner\" *ngIf=\"!wallet?.balance\"><ion-spinner> </ion-spinner></div>  \n\n<ion-list *ngIf=\"wallet.balance\">\n\n<ion-item lines=\"none\">\n  <ion-label class=\"bold\">{{\"Balance\" | translate}} {{wallet.balance}}</ion-label>\n  <ion-button color=\"{{settings.theme.button}}\" slot=\"end\" (click)=\"showField()\">\n    {{\"Add balance\" | translate}}\n  </ion-button>\n</ion-item>\n\n<div *ngIf=\"show\">\n<ion-item lines=\"none\">\n    <ion-input required type=\"number\" [(ngModel)]=\"amount\" name=\"amount\" placeholder=\"Enter Amount\"></ion-input>\n</ion-item>\n\n<ion-button expand=\"block\" color=\"{{settings.theme.button}}\" (click)=\"addTopup()\">{{\"Add\" | translate}}</ion-button>\n</div>\n\n<ion-item *ngFor=\"let item of wallet.transactions\">\n    <ion-label text-wrap>\n      <ion-text>\n        <h3>{{item.type.toUpperCase()}} {{item.amount}}</h3>\n      </ion-text>\n      <p>{{item.details}}</p>\n      <ion-text>\n        <p>{{item.date}}</p>\n      </ion-text>\n    </ion-label>\n    <ion-text slot=\"end\"><p>{{item.balance}}</p></ion-text>\n</ion-item>\n\n</ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/wallet/wallet.page.scss":
/*!*************************************************!*\
  !*** ./src/app/account/wallet/wallet.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/wallet/wallet.page.ts":
/*!***********************************************!*\
  !*** ./src/app/account/wallet/wallet.page.ts ***!
  \***********************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data */ "./src/app/data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var WalletPage = /** @class */ (function () {
    function WalletPage(loadingController, router, route, navCtrl, data, api, settings, alertController) {
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.data = data;
        this.api = api;
        this.settings = settings;
        this.alertController = alertController;
        this.show = false;
        this.wallet = {};
    }
    WalletPage.prototype.ngOnInit = function () {
        this.getWallet();
    };
    WalletPage.prototype.getWallet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('wallet').subscribe(function (res) {
                            _this.wallet = res;
                            console.log(res);
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletPage.prototype.showField = function () {
        this.show = !this.show;
    };
    WalletPage.prototype.addTopup = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.validateForm()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait...',
                                translucent: true,
                                cssClass: 'custom-class custom-loading'
                            })];
                    case 1:
                        loading_1 = _a.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.api.ajaxCall('/wp-admin/admin-ajax.php', {
                                woo_wallet_balance_to_add: this.amount,
                                woo_wallet_topup: this.wallet.woo_wallet_topup,
                                _wp_http_referer: '/my-account/woo-wallet/add/',
                                woo_add_to_wallet: 'Add'
                            }).subscribe(function (res) {
                                _this.api.postItem('cart').subscribe(function (res) {
                                    _this.cart = res;
                                    _this.data.updateCart(_this.cart.cart_contents);
                                    _this.show = false;
                                    loading_1.dismiss();
                                    _this.navCtrl.navigateForward(_this.router.url + '/cart');
                                }, function (err) {
                                    console.log(err);
                                    loading_1.dismiss();
                                });
                            }, function (err) {
                                console.log(err);
                                loading_1.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WalletPage.prototype.validateForm = function () {
        if (this.amount == undefined || this.amount == "") {
            this.presentAlert('Please enter Amount');
            return false;
        }
        else {
            return true;
        }
    };
    WalletPage.prototype.presentAlert = function (alertMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Oops!',
                            message: alertMessage,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.page.html */ "./src/app/account/wallet/wallet.page.html"),
            styles: [__webpack_require__(/*! ./wallet.page.scss */ "./src/app/account/wallet/wallet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], WalletPage);
    return WalletPage;
}());



/***/ }),

/***/ "./src/app/account/wishlist/wishlist.page.html":
/*!*****************************************************!*\
  !*** ./src/app/account/wishlist/wishlist.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Wishlist\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"wishlist\">\n\n<div class=\"spinner\" *ngIf=\"!wishlist && settings.customer?.id\"><ion-spinner> </ion-spinner></div>\n\n<div *ngIf=\"!settings.customer?.id\" class=\"empty\">\n  <ion-icon name=\"heart-empty\"></ion-icon>\n</div>\n\n<div *ngIf=\"settings.customer?.id\">\n    <div *ngIf=\"wishlist\">\n        <div *ngIf=\"!wishlist.length\" text-center class=\"empty\">\n            <ion-icon name=\"heart-empty\"></ion-icon>\n        </div>\n        <div *ngIf=\"wishlist.length\">\n            <!-- Products List Layout -->\n            <!-- For different list layouts change class name product-list1, product-list2, product-list3 -->  \n              <ion-list  *ngIf=\"wishlist?.length\" class=\"product-list3\">\n                <ion-item *ngFor=\"let product of wishlist\" lines=\"none\">\n                    <ion-thumbnail slot=\"start\" (click)=\"getProduct(product)\" class=\"ion-activatable ion-focusable hydrated\">\n                        <img *ngIf=\"product.images?.length\" src=\"{{product.images[0].src}}\">\n                    </ion-thumbnail>\n                    <ion-grid class=\"details\">\n                        <ion-row (click)=\"getProduct(product)\">\n                            <ion-col>\n                                <ion-label>\n                                    {{product.name}}\n                                </ion-label>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row (click)=\"getProduct(product)\">\n                            <ion-col>\n                                <p class=\"price\">\n                                    <span *ngIf=\"!product.sale_price\" class=\"regular-price\">\n                                        {{1*product.price | currency:settings.currency:symbol:'1.2-2'}}\n                                    </span>\n                                    <span *ngIf=\"product.sale_price\" class=\"regular-price\">\n                                        {{1*product.sale_price | currency:settings.currency:symbol:'1.2-2'}}\n                                    </span>\n                                    <span *ngIf=\"product.sale_price\" class=\"special-price\">\n                                        <del>\n                                            {{1*product.regular_price | currency:settings.currency:symbol:'1.2-2'}}\n                                        </del>\n                                    </span>\n                                </p>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                    <ion-button fill=\"clear\" (click)=\"removeFromWishlist(product.id)\" class=\"trash\"><ion-icon name=\"md-trash\" style=\"font-size:22px;\"></ion-icon></ion-button>\n                    <!--ion-button color=\"danger\" class=\"stock\" *ngIf=\"product.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n                      <div *ngIf=\"product.stock_status == 'instock'\">\n                      <ion-button class=\"offer\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= '1'\">{{(product.regular_price - product.price) /product.regular_price*100 | number : '1.0-0'}}%</ion-button>\n                      </div-->\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/wishlist/wishlist.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/account/wishlist/wishlist.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-list3 ion-item {\n  --border-color: var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));\n  --border-width: 0 0 0.55px;\n  --padding-start: 0px;\n  padding: 10xp; }\n  .product-list3 ion-item ion-thumbnail {\n    width: 28%;\n    height: 100%;\n    margin-top: 0;\n    margin-bottom: -4px;\n    padding: 10px; }\n  .product-list3 ion-item .details {\n    align-self: flex-start;\n    padding: 0;\n    width: 104%; }\n  .product-list3 ion-item .details ion-label {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-weight: 300;\n      font-size: small; }\n  .product-list3 ion-item .details p {\n      margin: 0; }\n  .product-list3 ion-item .details .special-price {\n      font-size: x-small;\n      padding: 0 5px; }\n  .product-list3 ion-item .details ion-icon {\n      font-size: x-large;\n      font-weight: 300; }\n  .trash {\n  position: absolute;\n  top: 16px;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvYWNjb3VudC93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx1SEFBZTtFQUNmLDBCQUFlO0VBQ2Ysb0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtFQUxyQjtJQU9ZLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhLEVBQUE7RUFYekI7SUFjWSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVcsRUFBQTtFQWhCdkI7TUFrQmdCLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCO01BQ3ZCLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQTtFQXRCaEM7TUF5QmdCLFNBQ0osRUFBQTtFQTFCWjtNQTRCZ0Isa0JBQWtCO01BQ2xCLGNBQWMsRUFBQTtFQTdCOUI7TUFnQ2dCLGtCQUFrQjtNQUNsQixnQkFBZ0IsRUFBQTtFQUtoQztFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1saXN0MyB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHJnYmEoMCwgMCwgMCwgMC4yKSkpKTtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHhwO1xuICAgICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAyOCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTA0JTtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi50cmFzaHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNnB4O1xuICAgIHJpZ2h0OiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/wishlist/wishlist.page.ts":
/*!***************************************************!*\
  !*** ./src/app/account/wishlist/wishlist.page.ts ***!
  \***************************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/product */ "./src/app/data/product.ts");







var WishlistPage = /** @class */ (function () {
    function WishlistPage(api, router, settings, loadingController, navCtrl, route, productData) {
        this.api = api;
        this.router = router;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.productData = productData;
        this.wishlist = [];
    }
    WishlistPage.prototype.ngOnInit = function () {
    };
    WishlistPage.prototype.ionViewDidEnter = function () {
        if (this.settings.customer.id) {
            this.getWishlist();
        }
    };
    WishlistPage.prototype.getWishlist = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('get_wishlist').subscribe(function (res) {
                            _this.wishlist = res;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WishlistPage.prototype.removeFromWishlist = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('remove_wishlist', {
                            product_id: id
                        }).subscribe(function (res) {
                            _this.wishlist = res;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WishlistPage.prototype.getProduct = function (id) {
        this.productData.product = {};
        this.navCtrl.navigateForward('/tabs/account/wishlist/product/' + id);
    };
    WishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.page.html */ "./src/app/account/wishlist/wishlist.page.html"),
            styles: [__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/account/wishlist/wishlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_product__WEBPACK_IMPORTED_MODULE_6__["Product"]])
    ], WishlistPage);
    return WishlistPage;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.html":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Cart\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"cart\">\n  <div class=\"spinner\" *ngIf=\"!cart?.cart_contents\"><ion-spinner> </ion-spinner></div>\n<div *ngIf=\"cart.cart_contents?.length == 0\" class=\"empty\">\n  <ion-icon name=\"basket\" mode=\"md\"></ion-icon>\n</div>\n\n<div *ngIf=\"cart.cart_contents\">\n<div *ngIf=\"cart.cart_contents?.length != 0\">\n  <ion-item *ngFor=\"let item of cart.cart_contents | keys\">\n    <ion-thumbnail slot=\"start\" (click)=\"getProduct(item.value.product_id)\">\n      <img src=\"{{item.value.thumb}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n    </ion-thumbnail>\n    <ion-label class=\"name-label\">\n      <ion-text style=\"font-size:14px;\" text-wrap class=\"clamp\">{{item.value.name}}</ion-text>\n      <p *ngFor=\"let variation of item.value.variation | keys\" style=\"font-size:13px;\">{{variation.value}}</p>\n      <p style=\"font-size:13px;\">{{item.value.tax_price | currency:settings.currency:symbol:'1.2-2'}} x {{item.value.quantity}}</p>\n      <span *ngIf=\"item.value.addons?.length\">Addons</span>\n      <span *ngFor=\"let items of item.value.addons\">\n        <p style=\"font-size:13px;\">{{items.value}} {{items.price | currency:settings.currency:symbol:'1.2-2'}}</p>\n      </span>\n       \n      <div class=\"add-remove-button\"> \n          <ion-button color=\"{{settings.theme.button}}\" fill=\"clear\" (click)=\"deleteFromCart(item.value.product_id, item.key)\">\n              <ion-icon slot=\"icon-only\" name=\"remove\" mode=\"md\"></ion-icon>\n          </ion-button> \n          <ion-button color=\"{{settings.theme.button}}\" fill=\"clear\">{{item.value.quantity}}</ion-button> \n          <ion-button color=\"{{settings.theme.button}}\" fill=\"clear\" (click)=\"addToCart(item.value.product_id, item.key)\">\n              <ion-icon slot=\"icon-only\" name=\"add\" mode=\"md\">\n              </ion-icon>\n          </ion-button> \n      </div>\n    </ion-label>\n\n    <ion-button fill=\"clear\" (click)=\"deleteItem(item.key, item.value.quantity)\" slot=\"end\" class=\"trash\"><ion-icon name=\"md-trash\" color=\"{{settings.theme.button}}\" style=\"font-size:22px;\"></ion-icon></ion-button>\n    \n  </ion-item>\n\n<form #f=\"ngForm\" class=\"coupon\">\n    <ion-item>\n        <ion-input type=\"text\" [(ngModel)]=\"cart.coupon\" name=\"coupon\" placeholder=\"{{'Enter coupon here' | translate}}\"> </ion-input>\n        <h2 item-right> \n            <ion-button block color=\"{{settings.theme.button}}\" type=\"submit\" text-uppercase [disabled]='disableSubmitCoupon' (click)=\"submitCoupon(cart.coupon)\">{{\"Apply\" | translate}}\n            </ion-button>\n        </h2>\n    </ion-item>\n</form>\n\n      <div class=\"redeem\">\n\n      <div *ngIf=\"cart && settings.reward > '0' \" style=\"margin-bottom: 3px\">\n      <ion-item>\n          <ion-label>{{\"Complete this order and you will earn\" | translate}} <span style=\"font-size: 16px; font-weight: 600\">{{cart.purchase_point}}</span> {{\"points\" | translate}}, {{\"you can use on future order.\" | translate}}</ion-label>\n      </ion-item>\n      </div>\n\n      <div *ngIf=\"settings.reward > '0' \" style=\"background: #fff;padding: 10px 0;\">\n      <ion-item>\n          <ion-label>{{\"Use\" | translate}} <span style=\"font-size: 16px; font-weight: 600\">{{cart.points.points}}</span> {{\"Reward Points for a\" | translate}} <span style=\"font-size: 16px; font-weight: 600\">{{cart.points.discount_available}}Ks</span> {{\"discount on this order!\" | translate}}\n          <ion-button color=\"{{settings.theme.button}}\" fill=\"solid\" type=\"submit\" text-uppercase small (click)=\"redeem()\"> {{\"Redeem Points\" | translate}}\n        </ion-button> \n          </ion-label>\n      </ion-item>\n\n      \n      </div>\n\n  </div>\n\n<ion-list lines=\"none\">\n  <ion-item>\n    <ion-label>\n     {{\"Sub total\" | translate}} <span class=\"totals-amount\">{{1*cart.cart_totals.subtotal | currency:settings.currency:symbol:'1.2-2'}}</span>\n    </ion-label>\n  </ion-item>\n  <ion-item *ngIf=\"cart.cart_totals.total_tax != 0\">\n    <ion-label>\n      {{\"Tax total\" | translate}} <span class=\"totals-amount\">{{1*cart.cart_totals.total_tax | currency:settings.currency:symbol:'1.2-2'}}</span>\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngFor=\"let coupon of cart.coupon_discount_totals | keys\">\n    <ion-label>\n      {{\"Coupon\" | translate}} - {{coupon.key}} <ion-text (click)=\"removeCoupon(coupon.key)\" color=\"{{settings.theme.button}}\">(Remove)</ion-text><span class=\"totals-amount\">-{{1*coupon.value | currency:settings.currency:symbol:'1.2-2'}}</span>\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"cart.cart_totals.discount_total != 0\">\n    <ion-label>\n      {{\"Discount\" | translate}}<span class=\"totals-amount\">-{{1*cart.cart_totals.discount_total | currency:settings.currency:symbol:'1.2-2'}}</span>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      {{\"Shipping\" | translate}} <span class=\"totals-amount\">{{1*cart.cart_totals.shipping_total | currency:settings.currency:symbol:'1.2-2'}}</span>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label class=\"grand-total\">\n      {{\"Grand Total\" | translate}} <span class=\"totals-amount\">{{1*cart.cart_totals.total | currency:settings.currency:symbol:'1.2-2'}}</span>\n    </ion-label>\n  </ion-item>\n\n</ion-list>\n\n<ion-button color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"checkout()\" style=\"margin: 16px;\">{{\"Continue\" | translate}}</ion-button>\n</div>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart ion-thumbnail {\n  height: auto;\n  width: 100px; }\n\n.cart .empty {\n  margin-top: 50px;\n  text-align: center; }\n\n.cart .empty ion-icon {\n    font-size: 7.2em; }\n\n.cart .grand-total {\n  font-weight: 500; }\n\n.cart .coupon h2 {\n  margin: 10px; }\n\n.cart .clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden; }\n\n.button-native {\n  padding: 0; }\n\n.redeem {\n  margin: 3px 0; }\n\n.redeem .item {\n    margin: 0; }\n\n.redeem ion-label {\n    margin: 16px 0;\n    overflow: visible;\n    white-space: normal;\n    font-size: 15px; }\n\n.redeem .item.item-block .item-inner {\n    border-bottom: 0; }\n\n.redeem .button {\n    margin: 0 30px;\n    width: calc(100% - 60px);\n    border-radius: 4px; }\n\n.name-label {\n  margin-right: 16px; }\n\n.name-label ion-button {\n    --box-shadow: none;\n    height: 24px;\n    width: 24px;\n    --padding-start: 0;\n    --padding-end: 0; }\n\n.name-label ion-button ion-icon {\n      font-size: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBSHBCO0VBTVEsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQVAxQjtJQVNZLGdCQUFnQixFQUFBOztBQVQ1QjtFQWFRLGdCQUFnQixFQUFBOztBQWJ4QjtFQWlCWSxZQUFZLEVBQUE7O0FBakJ4QjtFQXFCUSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUNZOztBQU1wQztFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGFBQWEsRUFBQTs7QUFEakI7SUFHUSxTQUFTLEVBQUE7O0FBSGpCO0lBTVEsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBOztBQVR2QjtJQVlRLGdCQUFnQixFQUFBOztBQVp4QjtJQWVRLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsa0JBQWtCLEVBQUE7O0FBUTFCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1Esa0JBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFnQjtJQUNoQixnQkFBYyxFQUFBOztBQVB0QjtNQVNZLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydCB7XG4gICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAuZW1wdHkge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNy4yZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmdyYW5kLXRvdGFsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmNvdXBvbiB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2xhbXAge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIH1cbiAgICAuYWRkLXJlbW92ZS1idXR0b24ge1xuICAgICAgIC8vIGZsb2F0OiByaWdodDtcbiAgICB9XG59XG4uYnV0dG9uLW5hdGl2ZSB7XG4gICAgcGFkZGluZzogMDtcbn1cbi5yZWRlZW0ge1xuICAgIG1hcmdpbjogM3B4IDA7XG4gICAgLml0ZW0ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICAuaXRlbS5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMCAzMHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG59XG4udHJhc2gge1xuICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgLy8gdG9wOiAxMHB4O1xuICAgLy8gcmlnaHQ6IDA7XG59XG4ubmFtZS1sYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/product */ "./src/app/data/product.ts");










var CartPage = /** @class */ (function () {
    function CartPage(config, api, data, router, settings, loadingController, navCtrl, route, productData) {
        this.config = config;
        this.api = api;
        this.data = data;
        this.router = router;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.productData = productData;
        this.cart = {};
    }
    CartPage.prototype.ngOnInit = function () { };
    CartPage.prototype.ionViewDidEnter = function () {
        this.getCart();
    };
    CartPage.prototype.getCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('cart').subscribe(function (res) {
                            _this.cart = res;
                            _this.data.updateCart(_this.cart.cart_contents);
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.checkout = function () {
        this.navCtrl.navigateForward('/tabs/cart/address');
    };
    CartPage.prototype.getProduct = function (id) {
        this.productData.product = {};
        this.navCtrl.navigateForward(this.router.url + '/product/' + id);
    };
    CartPage.prototype.deleteItem = function (itemKey, qty) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('remove_cart_item&item_key=' + itemKey).subscribe(function (res) {
                            _this.cart = res;
                            _this.data.updateCart(_this.cart.cart_contents);
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.submitCoupon = function (coupon) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('apply_coupon', {
                            coupon_code: coupon
                        }).subscribe(function (res) {
                            _this.couponMessage = res;
                            _this.getCart();
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.removeCoupon = function (coupon) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('remove_coupon', {
                            coupon: coupon
                        }).subscribe(function (res) {
                            _this.getCart();
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.addToCart = function (id, key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                            this.data.cartItem[key].quantity = 0;
                        }
                        else {
                            this.data.cartItem[key].quantity += 1;
                        }
                        ;
                        if (this.data.cart[id] != undefined && this.data.cart[id] == 0) {
                            this.data.cart[id] = 0;
                        }
                        else {
                            this.data.cart[id] += 1;
                        }
                        ;
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpParams"]();
                        params = params.set('cart[' + key + '][qty]', this.data.cartItem[key].quantity);
                        params = params.set('_wpnonce', this.cart.cart_nonce);
                        params = params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
                        params = params.set('update_cart', 'Update Cart');
                        return [4 /*yield*/, this.api.updateCart('/cart/', params).subscribe(function (res) {
                                console.log(res);
                                _this.cart = res;
                                _this.data.updateCart(_this.cart.cart_contents);
                            }, function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.deleteFromCart = function (id, key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                            this.data.cartItem[key].quantity = 0;
                        }
                        else {
                            this.data.cartItem[key].quantity -= 1;
                        }
                        ;
                        if (this.data.cart[id] != undefined && this.data.cart[id] == 0) {
                            this.data.cart[id] = 0;
                        }
                        else {
                            this.data.cart[id] -= 1;
                        }
                        ;
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpParams"]();
                        params = params.set('cart[' + key + '][qty]', this.data.cartItem[key].quantity);
                        params = params.set('_wpnonce', this.cart.cart_nonce);
                        params = params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
                        params = params.set('update_cart', 'Update Cart');
                        return [4 /*yield*/, this.api.updateCart('/cart/', params).subscribe(function (res) {
                                console.log(res);
                                _this.cart = res;
                                _this.data.updateCart(_this.cart.cart_contents);
                            }, function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //----------Rewrad-----------------//
    CartPage.prototype.redeem = function () {
        var _this = this;
        // wc_points_rewards_apply_discount_amount: 
        // wc_points_rewards_apply_discount: Apply Discount
        this.api.postItem('ajax_maybe_apply_discount').subscribe(function (res) {
            console.log(res);
            _this.getCart();
        });
    };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.page.html */ "./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_5__["Config"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_6__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_product__WEBPACK_IMPORTED_MODULE_9__["Product"]])
    ], CartPage);
    return CartPage;
}());



/***/ }),

/***/ "./src/app/categories/categories.page.html":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios' >\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-title>\n      {{\"Categories\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"categories\">\n    <ion-row>\n    <ion-col size='6' size-sm=\"4\" size-md=\"3\" *ngFor=\"let category of data.mainCategories\" (click)=\"getProducts(category.id)\">\n    <ion-card class=\"category-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\n      <ion-img class=\"category-image\" alt=\"\" src=\"{{category.image?.src}}\"></ion-img>\n      <ion-card-header>\n        <ion-card-title [innerHTML]=\"category.name\"></ion-card-title>\n      </ion-card-header>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/categories/categories.page.scss":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".categories ion-card {\n  margin: 4px 8px; }\n\n.categories ion-card-header {\n  padding: 10px; }\n\n.categories ion-card-content {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGVBQWUsRUFBQTs7QUFGdkI7RUFLUSxhQUFhLEVBQUE7O0FBTHJCO0VBUVEsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yaWVzIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbjogNHB4IDhweDtcbiAgICB9XG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/categories/categories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/settings */ "./src/app/data/settings.ts");







var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(api, data, loadingController, navCtrl, router, settings, route) {
        this.api = api;
        this.data = data;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.settings = settings;
        this.route = route;
    }
    CategoriesPage.prototype.getProducts = function (id) {
        console.log(this.router.url);
        this.navCtrl.navigateForward('/tabs/categories/products/' + id);
    };
    CategoriesPage.prototype.subCategories = function (id) {
        return this.data.categories.filter(function (item) { return item.parent == id; });
    };
    CategoriesPage.prototype.showSubCategory = function (i) {
        var intial = this.data.mainCategories[i].show;
        this.data.mainCategories.forEach(function (item) { return item.show = false; });
        this.data.mainCategories[i].show = !intial;
    };
    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.page.html */ "./src/app/categories/categories.page.html"),
            styles: [__webpack_require__(/*! ./categories.page.scss */ "./src/app/categories/categories.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CategoriesPage);
    return CategoriesPage;
}());



/***/ }),

/***/ "./src/app/checkout/address/address.page.html":
/*!****************************************************!*\
  !*** ./src/app/checkout/address/address.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/cart\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Address\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div class=\"spinner\" *ngIf=\"loader\"><ion-spinner> </ion-spinner></div>\n\n<div *ngIf=\"!loader\">\n<ion-list no-margin>\n\n  <ion-list-header>\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_first_name\" name=\"firstname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_last_name\" name=\"lastname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Phone\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_phone\" name=\"telephone\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_company\" name=\"company\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_address_1\" name=\"street1\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_address_2\" name=\"street2\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Email\" | translate}}</ion-label>\n            <ion-input required type=\"email\" [(ngModel)]=\"checkoutData.form.billing_email\" name=\"email\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"City\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_city\" name=\"city\"> </ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Postcode\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_postcode\" name=\"postcode\"> </ion-input>\n        </ion-item>\n\n\n        <ion-item *ngIf=\"countries?.options\">\n            <ion-label>{{\"Country\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"checkoutData.form.billing_country\" (ngModelChange)=\"getBillingRegion()\" name=\"billing_country\">\n                <div *ngFor=\"let field of countries.options | keys\">\n                    <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span> </ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <div *ngIf=\"checkoutData.form?.billing_country\">\n        <ion-item *ngIf=\"checkoutData.billingStates\">\n            <ion-label>{{\"State\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"checkoutData.form.billing_state\" name=\"billing_state\">\n                <div *ngFor=\"let field of checkoutData.billingStates | keys\">\n                    <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span></ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n        \n\n        <ion-item *ngIf=\"!checkoutData.billingStates\">\n            <ion-label position=\"stacked\">{{\"State\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_state\" name=\"billing_state\"> </ion-input>\n        </ion-item>\n        </div>\n\n        <ion-item>\n            <ion-label>{{\"Ship to different address\" | translate}}</ion-label>\n            <ion-toggle color=\"{{settings.theme.button}}\" [(ngModel)]=\"checkoutData.form.ship_to_different_address\"></ion-toggle>\n        </ion-item>\n\n\n\n</ion-list>\n\n\n<ion-list no-margin *ngIf=\"checkoutData.form.ship_to_different_address\">\n\n  <ion-list-header>\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_first_name\" name=\"firstname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_last_name\" name=\"lastname\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_company\" name=\"company\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_address_1\" name=\"street1\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_address_2\" name=\"street2\"> </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">{{\"City\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_city\" name=\"city\"> </ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"stacked\">{{\"Postcode\" | translate}}</ion-label>\n            <ion-input required type=\"number\" [(ngModel)]=\"checkoutData.form.shipping_postcode\" name=\"postcode\"> </ion-input>\n        </ion-item>\n\n\n        <ion-item *ngIf=\"countries?.options\">\n            <ion-label>{{\"Country\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"checkoutData.form.shipping_country\" (ngModelChange)=\"getShippingRegion()\" name=\"shipping_country\">\n                <div *ngFor=\"let field of countries.options | keys\">\n                    <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span></ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n\n        <div *ngIf=\"checkoutData.form?.shipping_country\">\n        <ion-item *ngIf=\"checkoutData.form?.state[checkoutData.form.shipping_country]\">\n            <ion-label>{{\"State\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"checkoutData.form.shipping_state\" name=\"shipping_state\">\n                <div *ngFor=\"let field of checkoutData.form.state[checkoutData.form.shipping_country] | keys\">\n                    <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span></ion-select-option>\n                </div>\n            </ion-select>\n        </ion-item>\n        \n\n        <ion-item *ngIf=\"!checkoutData.shippingStates\">\n            <ion-label position=\"stacked\">{{\"State\" | translate}}</ion-label>\n            <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_state\" name=\"shipping_state\"> </ion-input>\n        </ion-item>\n        </div>\n\n\n</ion-list>\n\n<div *ngIf=\"errorMessage\">\n  <h2 [innerHTML]=\"errorMessage\" style=\"font-size: 14px;  color: red;margin: 16px;\"></h2>\n</div>\n  \n<ion-button color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"continueCheckout()\">{{\"Continue\" | translate}}</ion-button>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/checkout/address/address.page.scss":
/*!****************************************************!*\
  !*** ./src/app/checkout/address/address.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2FkZHJlc3MvYWRkcmVzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/checkout/address/address.page.ts":
/*!**************************************************!*\
  !*** ./src/app/checkout/address/address.page.ts ***!
  \**************************************************/
/*! exports provided: CheckoutAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressPage", function() { return CheckoutAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/checkout */ "./src/app/data/checkout.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");







var CheckoutAddressPage = /** @class */ (function () {
    function CheckoutAddressPage(api, checkoutData, router, navCtrl, settings, route) {
        this.api = api;
        this.checkoutData = checkoutData;
        this.router = router;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.route = route;
        this.loader = false;
    }
    CheckoutAddressPage.prototype.ngOnInit = function () {
        this.getCheckoutForm();
        this.getCountries();
    };
    CheckoutAddressPage.prototype.getCheckoutForm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader = true;
                        return [4 /*yield*/, this.api.postItem('get_checkout_form').subscribe(function (res) {
                                _this.checkoutData.form = res;
                                _this.checkoutData.form.sameForShipping = true;
                                _this.getBillingRegion();
                                _this.loader = false;
                            }, function (err) {
                                console.log(err);
                                _this.loader = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutAddressPage.prototype.getCountries = function () {
        var _this = this;
        this.api.getItem('settings/general/woocommerce_specific_allowed_countries').subscribe(function (res) {
            _this.countries = res;
        }, function (err) {
            console.log(err);
        });
    };
    CheckoutAddressPage.prototype.getBillingRegion = function () {
        if (this.checkoutData.form.state[this.checkoutData.form.billing_country] && 0 !== this.checkoutData.form.state[this.checkoutData.form.billing_country].length)
            this.checkoutData.billingStates = this.checkoutData.form.state[this.checkoutData.form.billing_country];
        else
            this.checkoutData.billingStates = undefined;
        //this.updateOrderReview();
    };
    CheckoutAddressPage.prototype.getShippingRegion = function () {
        if (this.checkoutData.form.state[this.checkoutData.form.shipping_country] && 0 !== this.checkoutData.form.state[this.checkoutData.form.shipping_country].length)
            this.checkoutData.shippingStates = this.checkoutData.form.state[this.checkoutData.form.shipping_country];
        else
            this.checkoutData.shippingStates = undefined;
        //this.updateOrderReview();
    };
    CheckoutAddressPage.prototype.updateOrderReview = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('update_order_review').subscribe(function (res) {
                            _this.checkoutData.orderReview = res;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutAddressPage.prototype.continueCheckout = function () {
        this.errorMessage = '';
        if (this.validateForm()) {
            if (!this.checkoutData.form.ship_to_different_address)
                this.assgnShippingAddress();
            this.navCtrl.navigateForward('/tabs/cart/checkout');
        }
    };
    CheckoutAddressPage.prototype.validateForm = function () {
        if (this.checkoutData.form.billing_first_name == '' || this.checkoutData.form.billing_first_name == undefined) {
            this.errorMessage = 'Billing first name is a required field';
            return false;
        }
        if (this.checkoutData.form.billing_last_name == '' || this.checkoutData.form.billing_last_name == undefined) {
            this.errorMessage = 'Billing last name is a required field';
            return false;
        }
        if (this.checkoutData.form.billing_phone == '' || this.checkoutData.form.billing_phone == undefined) {
            this.errorMessage = 'Billing phone is a required field';
            return false;
        }
        if (this.checkoutData.form.billing_address_1 == '' || this.checkoutData.form.billing_address_1 == undefined) {
            this.errorMessage = 'Billing Street address is a required field';
            return false;
        }
        if (this.checkoutData.form.billing_city == '' || this.checkoutData.form.billing_city == undefined) {
            this.errorMessage = 'Billing city is a required field';
            return false;
        }
        if (this.checkoutData.form.billing_postcode == '' || this.checkoutData.form.billing_postcode == undefined) {
            this.errorMessage = 'Billing post code is a required field';
            return false;
        }
        if (this.checkoutData.form.billing_country == '' || this.checkoutData.form.billing_country == undefined) {
            this.errorMessage = 'Billing country is a required field';
            return false;
        }
        if (this.checkoutData.form.billing_state == '' || this.checkoutData.form.billing_state == undefined) {
            this.errorMessage = 'Billing state is a required field';
            return false;
        }
        if (this.checkoutData.form.ship_to_different_address) {
            if (this.checkoutData.form.shipping_first_name == '' || this.checkoutData.form.shipping_first_name == undefined) {
                this.errorMessage = 'Shipping first name is a required field';
                return false;
            }
            if (this.checkoutData.form.shipping_last_name == '' || this.checkoutData.form.shipping_last_name == undefined) {
                this.errorMessage = 'Shipping last name is a required field';
                return false;
            }
            if (this.checkoutData.form.shipping_address_1 == '' || this.checkoutData.form.shipping_address_1 == undefined) {
                this.errorMessage = 'Shipping Street address is a required field';
                return false;
            }
            if (this.checkoutData.form.shipping_city == '' || this.checkoutData.form.shipping_city == undefined) {
                this.errorMessage = 'Shipping city is a required field';
                return false;
            }
            if (this.checkoutData.form.shipping_postcode == '' || this.checkoutData.form.shipping_postcode == undefined) {
                this.errorMessage = 'Shipping post code is a required field';
                return false;
            }
            if (this.checkoutData.form.shipping_country == '' || this.checkoutData.form.shipping_country == undefined) {
                this.errorMessage = 'Shipping country is a required field';
                return false;
            }
            if (this.checkoutData.form.shipping_state == '' || this.checkoutData.form.shipping_state == undefined) {
                this.errorMessage = 'Shipping state is a required field';
                return false;
            }
            return true;
        }
        else
            return true;
    };
    CheckoutAddressPage.prototype.assgnShippingAddress = function () {
        this.checkoutData.form.shipping_first_name = this.checkoutData.form.billing_first_name;
        this.checkoutData.form.shipping_last_name = this.checkoutData.form.billing_last_name;
        this.checkoutData.form.shipping_company = this.checkoutData.form.billing_company;
        this.checkoutData.form.shipping_address_1 = this.checkoutData.form.billing_address_1;
        this.checkoutData.form.shipping_address_2 = this.checkoutData.form.billing_address_2;
        this.checkoutData.form.shipping_city = this.checkoutData.form.billing_city;
        this.checkoutData.form.shipping_postcode = this.checkoutData.form.billing_postcode;
        this.checkoutData.form.shipping_country = this.checkoutData.form.billing_country;
        this.checkoutData.form.shipping_state = this.checkoutData.form.billing_state;
        return true;
    };
    CheckoutAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.page.html */ "./src/app/checkout/address/address.page.html"),
            styles: [__webpack_require__(/*! ./address.page.scss */ "./src/app/checkout/address/address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_checkout__WEBPACK_IMPORTED_MODULE_5__["CheckoutData"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CheckoutAddressPage);
    return CheckoutAddressPage;
}());



/***/ }),

/***/ "./src/app/checkout/checkout/checkout.page.html":
/*!******************************************************!*\
  !*** ./src/app/checkout/checkout/checkout.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/cart/address\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Checkout\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n<div class=\"spinner\" *ngIf=\"!orderReview\"><ion-spinner></ion-spinner></div>\n\n<div *ngIf=\"orderReview\">\n<ion-list>\n\t<ion-list-header>\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label text-wrap>\n      <p>\n    <span>{{checkoutData.form.billing_first_name}}</span>&nbsp;<span>{{checkoutData.form.billing_last_name}}</span>&nbsp;<span>{{checkoutData.form.billing_company}}</span>&nbsp;<span>{{checkoutData.form.billing_address_1}}</span>&nbsp;<span>{{checkoutData.form.billing_address_2}}</span>&nbsp;<span>{{checkoutData.form.billing_city}}</span>\n    <span>{{checkoutData.form.billing_state}}</span>&nbsp;<span>{{checkoutData.form.billing_postcode}}</span>&nbsp;<span>{{checkoutData.form.billing_country}}</span>\n    &nbsp;<span>{{checkoutData.form.billing_email}}</span>&nbsp;<span>{{checkoutData.form.billing_phone}}</span>\n  </p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<ion-list>\n  <ion-list-header>\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label text-wrap>\n      <p>\n    <span>{{checkoutData.form.shipping_first_name}}</span>&nbsp;<span>{{checkoutData.form.shipping_last_name}}</span>&nbsp;<span>{{checkoutData.form.shipping_company}}</span>&nbsp;<span>{{checkoutData.form.shipping_address_1}}</span>&nbsp;<span>{{checkoutData.form.shipping_address_2}}</span>&nbsp;<span>{{checkoutData.form.shipping_city}}</span>&nbsp;\n    <span>{{checkoutData.form.shipping_state}}</span>&nbsp;<span>{{checkoutData.form.shipping_postcode}}</span>&nbsp;<span>{{checkoutData.form.shipping_country}}</span>&nbsp;\n    <span>{{checkoutData.form.shipping_email}}</span>&nbsp;<span>{{checkoutData.form.shipping_phone}}</span>\n  </p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n<ion-list *ngIf=\"orderReview?.shipping\">\n  <ion-radio-group *ngFor=\"let package of orderReview.shipping\" [(ngModel)]=\"package.chosen_method\" (ngModelChange)=\"updateOrderReview()\">\n    <ion-list-header>\n      <span [innerHTML]=\"package.package_name\"></span>\n    </ion-list-header>\n    <ion-item *ngIf=\"isEmptyObject(package.shipping)\">\n      <ion-label><p>{{\"No Shipping Available\" | translate}}</p></ion-label>\n    </ion-item>\n    <ion-item *ngFor=\"let method of package.shipping | keys\">\n      <ion-label><span [innerHTML]=\"method.value.label\"></span> <b>-</b> <span>{{method.value.cost | currency:settings.currency:true:'1.2-2'}}</span></ion-label>\n      <ion-radio color=\"{{settings.theme.button}}\" value=\"{{method.value.id}}\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n\n<ion-list *ngIf=\"orderReview?.payment\">\n  <ion-radio-group [(ngModel)]=\"checkoutData.form.payment_method\" (ngModelChange)=\"onChangePayment()\">\n    <ion-list-header>\n      {{\"Payment Method\" | translate}}\n    </ion-list-header>\n    <ion-item *ngFor=\"let method of orderReview.payment | keys\">\n      <ion-label text-wrap class=\"ion-text-nowrap\"><span [innerHTML]=\"method.value.title\"></span></ion-label>\n      <ion-radio color=\"{{settings.theme.button}}\" value=\"{{method.value.id}}\"></ion-radio>\n     \n    </ion-item>\n    <ion-item class=\"payment-description\" *ngIf=\"orderReview.payment[checkoutData.form.payment_method]?.description\" lines=\"none\">\n    <ion-label text-wrap> \n    <span [innerHTML]=\"orderReview.payment[checkoutData.form.payment_method]?.description\"></span>\n     </ion-label>\n   </ion-item>\n  </ion-radio-group>\n</ion-list>\n\n  <div *ngIf=\"cardResponse.cardNumber && checkoutData.form.payment_method == 'stripe'\">\n      <ion-card mode=\"md\">\n          <ion-item *ngIf=\"cardResponse.cardNumber\">\n            <ion-label text-wrap>\n              <ion-text>\n                <h3>{{\"Card Number\" | translate}}</h3>\n              </ion-text>\n              <p>{{cardResponse.cardNumber}}</p>\n            </ion-label>\n          </ion-item>\n\n            <ion-item>\n            <ion-label text-wrap>\n              <ion-text>\n                <h3>{{\"Expiry Date\" | translate}}</h3>\n              </ion-text>\n              <p>{{cardResponse.expiryMonth}}/{{cardResponse.expiryYear}}</p>\n            </ion-label>\n          </ion-item>\n\n            <ion-item>\n            <ion-label text-wrap>\n              <ion-text>\n                <h3>{{\"CVV\" | translate}}</h3>\n              </ion-text>\n              <p>{{cardResponse.cvv}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-card>\n  </div>\n\n<div *ngIf=\"errorMessage\">\n  <h2 [innerHTML]=\"errorMessage\" style=\"font-size: 14px;  color: red; text-align: center;\"></h2>\n  </div>\n\n<ion-button [disabled]=\"disableButton\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"placeOrder()\">{{'Place order' | translate}}</ion-button>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/checkout/checkout/checkout.page.scss":
/*!******************************************************!*\
  !*** ./src/app/checkout/checkout/checkout.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".payment-description {\n  --ion-background-color: var(--ion-color-step-50,#f2f2f2);\n  margin: 10px 0 0;\n  --border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0RBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixvQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LWRlc2NyaXB0aW9uIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01MCwjZjJmMmYyKTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/checkout/checkout/checkout.page.ts":
/*!****************************************************!*\
  !*** ./src/app/checkout/checkout/checkout.page.ts ***!
  \****************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/checkout */ "./src/app/data/checkout.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _ionic_native_card_io_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/card-io/ngx */ "./node_modules/@ionic-native/card-io/ngx/index.js");










//import { Braintree, ApplePayOptions, PaymentUIOptions, PaymentUIResult } from '@ionic-native/braintree/ngx';
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(oneSignal, platform, cardIO, api, checkoutData, settings, router, iab, loadingController, navCtrl, route /*, private braintree: Braintree*/) {
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.cardIO = cardIO;
        this.api = api;
        this.checkoutData = checkoutData;
        this.settings = settings;
        this.router = router;
        this.iab = iab;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.results = {};
        this.disableButton = false;
        this.cardResponse = {};
        this.stripeForm = {};
    }
    CheckoutPage.prototype.ngOnInit = function () {
        this.updateOrder();
    };
    CheckoutPage.prototype.updateOrder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkoutData.form.security = this.checkoutData.form.nonce.update_order_review_nonce;
                        this.checkoutData.form['woocommerce-process-checkout-nonce'] = this.checkoutData.form._wpnonce;
                        this.checkoutData.form['wc-ajax'] = 'update_order_review';
                        this.setOldWooCommerceVersionData();
                        return [4 /*yield*/, this.api.updateOrderReview('update_order_review', this.checkoutData.form).subscribe(function (res) {
                                _this.orderReview = res;
                            }, function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.updateOrderReview = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkoutData.form.shipping_method = [];
                        this.orderReview.shipping.forEach(function (item, index) {
                            _this.checkoutData.form['shipping_method[' + index + ']'] = item.chosen_method;
                        });
                        this.checkoutData.form.security = this.checkoutData.form.nonce.update_order_review_nonce;
                        this.checkoutData.form['woocommerce-process-checkout-nonce'] = this.checkoutData.form._wpnonce;
                        this.checkoutData.form['wc-ajax'] = 'update_order_review';
                        this.setOldWooCommerceVersionData();
                        return [4 /*yield*/, this.api.updateOrderReview('update_order_review', this.checkoutData.form).subscribe(function (res) {
                                _this.handleData(res);
                            }, function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.setOldWooCommerceVersionData = function () {
        this.checkoutData.form.city = this.checkoutData.form.billing_city;
        this.checkoutData.form.postcode = this.checkoutData.form.billing_postcode;
        this.checkoutData.form.country = this.checkoutData.form.billing_country;
        this.checkoutData.form.address = this.checkoutData.form.billing_address_1;
        this.checkoutData.form.address_2 = this.checkoutData.form.billing_address_2;
        this.checkoutData.form.s_city = this.checkoutData.form.shipping_city;
        this.checkoutData.form.s_postcode = this.checkoutData.form.shipping_postcode;
        this.checkoutData.form.s_country = this.checkoutData.form.shipping_country;
        this.checkoutData.form.s_address = this.checkoutData.form.shipping_address_1;
        this.checkoutData.form.s_address_2 = this.checkoutData.form.shipping_address_2;
        this.checkoutData.form.has_full_address = true;
    };
    CheckoutPage.prototype.handleData = function (results) {
        console.log(results);
        //
    };
    CheckoutPage.prototype.placeOrder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disableButton = true;
                        this.errorMessage = undefined;
                        if (this.platform.is('cordova'))
                            this.oneSignal.getIds().then(function (data) {
                                _this.checkoutData.form.onesignal_user_id = data.userId;
                            });
                        if (!(this.checkoutData.form.payment_method == 'stripe')) return [3 /*break*/, 2];
                        this.setStripeForm();
                        return [4 /*yield*/, this.api.getExternalData('https://api.stripe.com/v1/tokens', this.stripeForm).subscribe(function (res) {
                                _this.handleStipeToken(res);
                            }, function (err) {
                                if (err.error.error.message)
                                    _this.errorMessage = err.error.error.message;
                                _this.disableButton = false;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.api.ajaxCall('/checkout?wc-ajax=checkout', this.checkoutData.form).subscribe(function (res) {
                            _this.results = res;
                            _this.handleOrder();
                        }, function (err) {
                            _this.disableButton = false;
                            console.log(err);
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.handleOrder = function () {
        if (this.results.result == 'success') {
            if (this.checkoutData.form.payment_method == 'wallet' || this.checkoutData.form.payment_method == 'paypalpro' || this.checkoutData.form.payment_method == 'stripe' || this.checkoutData.form.payment_method == 'bacs' || this.checkoutData.form.payment_method == 'cheque' || this.checkoutData.form.payment_method == 'cod') {
                this.orderSummary(this.results.redirect);
            }
            else if (this.checkoutData.form.payment_method == 'payuindia') {
                this.handlePayUPayment();
            }
            else if (this.checkoutData.form.payment_method == 'paytm') {
                this.handlePaytmPayment();
            }
            else if (this.checkoutData.form.payment_method == 'paytm-qr') {
                this.handlePaytmQRPayment();
            }
            else
                this.handlePayment();
        }
        else if (this.results.result == 'failure') {
            this.disableButton = false;
            this.errorMessage = this.results.messages;
        }
    };
    CheckoutPage.prototype.orderSummary = function (address) {
        var str = address;
        var pos1 = str.lastIndexOf("/order-received/");
        var pos2 = str.lastIndexOf("/?key=wc_order");
        var pos3 = pos2 - (pos1 + 16);
        var order_id = str.substr(pos1 + 16, pos3);
        this.navCtrl.navigateRoot('/order-summary/' + order_id);
    };
    CheckoutPage.prototype.handlePayment = function () {
        var _this = this;
        var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
        var browser = this.iab.create(this.results.redirect, '_blank', options);
        browser.show();
        browser.on('loadstart').subscribe(function (data) {
            if (data.url.indexOf('/order-received/') != -1 && data.url.indexOf('key=wc_order_') != -1) {
                _this.orderSummary(data.url);
                browser.hide();
            }
            else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                browser.close();
                _this.disableButton = false;
            }
        });
        browser.on('exit').subscribe(function (data) {
            _this.disableButton = false;
        });
    };
    CheckoutPage.prototype.handlePayUPayment = function () {
        var _this = this;
        var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
        var browser = this.iab.create(this.results.redirect, '_blank', options);
        var str = this.results.redirect;
        var pos1 = str.lastIndexOf("/order-pay/");
        var pos2 = str.lastIndexOf("/?key=wc_order");
        var pos3 = pos2 - (pos1 + 11);
        this.orderId = str.substr(pos1 + 11, pos3);
        var browserActive = false;
        browser.on('loadstart').subscribe(function (data) {
            if (data.url.indexOf('payumoney.com/transact') != -1 && !browserActive) {
                browserActive = true;
                browser.show();
            }
            else if (data.url.indexOf('/order-received/') != -1 && data.url.indexOf('key=wc_order_') != -1) {
                if (_this.orderId)
                    _this.navCtrl.navigateRoot('/order-summary/' + _this.orderId);
                browser.hide();
            }
            else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                browser.close();
                _this.disableButton = false;
            }
        });
        browser.on('exit').subscribe(function (data) {
            _this.disableButton = false;
        });
    };
    CheckoutPage.prototype.handlePaytmPayment = function () {
        var _this = this;
        var str = this.results.redirect;
        var pos1 = str.lastIndexOf("/order-pay/");
        var pos2 = str.lastIndexOf("/?key=wc_order");
        var pos3 = pos2 - (pos1 + 11);
        this.orderId = str.substr(pos1 + 11, pos3);
        var browserActive = false;
        if (this.results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser_1 = this.iab.create(this.results.redirect, '_blank', options);
            browser_1.on('loadstart').subscribe(function (data) {
                if ((data.url.indexOf('securegw-stage.paytm.in/theia') != -1 || data.url.indexOf('processTransaction') != -1) && !browserActive) {
                    browserActive = true;
                    browser_1.show();
                }
                else if (data.url.indexOf('type=success') != -1) {
                    if (_this.orderId)
                        _this.navCtrl.navigateRoot('/order-summary/' + _this.orderId);
                    browser_1.hide();
                }
                else if (data.url.indexOf('type=error') != -1 || data.url.indexOf('Failed') != -1 || data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled') != -1) {
                    browser_1.close();
                    _this.disableButton = false;
                }
                else if (data.url.indexOf('Thank+you+for+your+order') != -1) {
                    browser_1.close();
                    _this.disableButton = false;
                }
            });
            browser_1.on('exit').subscribe(function (data) {
                _this.disableButton = false;
            });
        }
        else if (this.results.result == 'failure') {
            this.errorMessage = this.results.messages;
            this.disableButton = false;
        }
    };
    CheckoutPage.prototype.handlePaytmQRPayment = function () {
        var _this = this;
        var str = this.results.redirect;
        var pos1 = str.lastIndexOf("/order-received/");
        var pos2 = str.lastIndexOf("/?key=wc_order");
        var pos3 = pos2 - (pos1 + 16);
        var order_id = str.substr(pos1 + 16, pos3);
        if (this.results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser_2 = this.iab.create(this.results.redirect, '_blank', options);
            browser_2.on('loadstart').subscribe(function (data) {
                browser_2.show();
                if (data.url.indexOf('/order-received/') == -1) {
                    browser_2.close();
                    _this.disableButton = false;
                    _this.navCtrl.navigateRoot('/order-summary/' + _this.orderId);
                }
            });
            browser_2.on('exit').subscribe(function (data) {
                _this.disableButton = false;
            });
        }
        else if (this.results.result == 'failure') {
            this.errorMessage = this.results.messages;
            this.disableButton = false;
        }
    };
    CheckoutPage.prototype.onChangePayment = function () {
        this.disableButton = false;
        if ((this.checkoutData.form.payment_method == 'stripe' || this.checkoutData.form.payment_method == 'paypalpro') && this.platform.is('cordova')) {
            this.enterCard();
        }
    };
    CheckoutPage.prototype.enterCard = function () {
        var _this = this;
        this.cardIO.canScan()
            .then(function (res) {
            if (res) {
                var options = {
                    requireExpiry: true,
                    requireCVV: true,
                    scanInstructions: "Scan the front of your card",
                    scanExpiry: true,
                    hideCardIOLogo: true,
                    noCamera: true,
                };
                _this.cardIO.scan(options)
                    .then(function (data) {
                    _this.cardResponse = data;
                    _this.setCardData();
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    CheckoutPage.prototype.setCardData = function () {
        if (this.checkoutData.form.payment_method == 'stripe') {
            this.checkoutData.form['moneris-card-number'] = this.cardResponse.cardNumber;
            this.cardResponse.expiryYear = this.cardResponse.expiryYear.slice(0, 2); //2030
            this.checkoutData.form['moneris-card-expiry'] = this.cardResponse.expiryMonth + ' / ' + this.cardResponse.expiryYear; //;'04 / 30'
            this.checkoutData.form['moneris-card-cvc'] = this.cardResponse.cvv;
        }
        else if (this.checkoutData.form.payment_method == 'paypalpro') {
            this.checkoutData.form['billing_credircard'] = this.cardResponse.cardNumber;
            this.checkoutData.form['billing_cardtype'] = this.cardResponse.cardType;
            this.checkoutData.form['moneris-card-expiry'] = this.cardResponse.expiryYear;
            this.checkoutData.form['billing_expdatemonth'] = this.cardResponse.expiryMonth;
            this.checkoutData.form['billing_ccvnumber'] = this.cardResponse.cvv;
        }
    };
    CheckoutPage.prototype.setStripeForm = function () {
        this.stripeForm.key = this.orderReview.payment.stripe.publishable_key;
        this.stripeForm.payment_user_agent = 'stripe.js/6ea8d55';
        this.stripeForm['card[number]'] = this.cardResponse.cardNumber; //'4242424242424242';//this.cardResponse.cardNumber;
        this.stripeForm['card[exp_month]'] = this.cardResponse.expiryMonth; //'04';//this.cardResponse.expiryMonth;
        this.stripeForm['card[exp_year]'] = this.cardResponse.expiryYear; ////this.cardResponse.expiryYear;
        this.stripeForm['card[cvc]'] = this.cardResponse.cvv; //this.cardResponse.cvc;
        this.stripeForm['card[name]'] = this.checkoutData.form.billing_first_name + this.checkoutData.form.billing_last_name;
        this.stripeForm['card[address_line1]'] = this.checkoutData.form.billing_address_1;
        this.stripeForm['card[address_line2]'] = this.checkoutData.form.billing_address_2;
        this.stripeForm['card[address_state]'] = this.checkoutData.form.billing_state;
        this.stripeForm['card[address_city]'] = this.checkoutData.form.billing_city;
        this.stripeForm['card[address_zip]'] = this.checkoutData.form.billing_postcode;
        this.stripeForm['card[address_country]'] = this.checkoutData.form.billing_country;
        return true;
    };
    CheckoutPage.prototype.handleStipeToken = function (token) {
        var _this = this;
        if (token && token.id) {
            var form = { type: 'card', token: '', key: '' };
            form.type = 'card';
            form.token = token.id;
            form.key = this.orderReview.payment.stripe.publishable_key;
            this.checkoutData.form['wc-stripe-payment-token'] = token.id; //For Existing Cards add api
            this.api.getExternalData('https://api.stripe.com/v1/sources', form).subscribe(function (res) {
                _this.stripePlaceOrder(res);
            }, function (err) {
                if (err.error.error.message)
                    _this.errorMessage = err.error.error.message;
                _this.disableButton = false;
            });
        }
        else {
            this.disableButton = false;
            this.errorMessage = 'Cannot handle payment, Please check card details';
        }
    };
    CheckoutPage.prototype.stripePlaceOrder = function (src) {
        var _this = this;
        if (src && src.id) {
            this.checkoutData.form['stripe_source'] = src.id;
            this.api.ajaxCall('/checkout?wc-ajax=checkout', this.checkoutData.form).subscribe(function (res) {
                _this.results = res;
                _this.handleOrder();
            }, function (err) {
                _this.disableButton = false;
                console.log(err);
            });
        }
        else {
            this.disableButton = false;
            this.errorMessage = 'Cannot handle payment, Please check card details';
        }
    };
    CheckoutPage.prototype.isEmptyObject = function (obj) {
        return Object.keys(obj).length === 0;
    };
    CheckoutPage.prototype.brainTreePayment = function () {
        /*console.log('Braintree payment.......');
        
        const BRAINTREE_TOKEN = 'sandbox_7b74zrbp_zm8j7dwnjqqzzgxn';
        
        const appleOptions: ApplePayOptions = {
          merchantId: 'zm8j7dwnjqqzzgxn',
          currency: 'USD',
          country: 'US'
        }

        const paymentOptions: PaymentUIOptions = {
          amount: '14.99',
          primaryDescription: 'Your product or service (per /item, /month, /week, etc)',
        }

        this.braintree.initialize(BRAINTREE_TOKEN)
          .then(() => this.braintree.setupApplePay(appleOptions))
          .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
          .then((result: PaymentUIResult) => {
            if (result.userCancelled) {
              console.log("User cancelled payment dialog.");
            } else {
              console.log("User successfully completed payment!");
              console.log("Payment Nonce: " + result.nonce);
              console.log("Payment Result.", result);
            }
          })
          .catch((error: string) => console.error(error));*/
    };
    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.page.html */ "./src/app/checkout/checkout/checkout.page.html"),
            styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout/checkout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_card_io_ngx__WEBPACK_IMPORTED_MODULE_9__["CardIO"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_checkout__WEBPACK_IMPORTED_MODULE_5__["CheckoutData"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] /*, private braintree: Braintree*/])
    ], CheckoutPage);
    return CheckoutPage;
}());



/***/ }),

/***/ "./src/app/contact/contact.page.html":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n    <ion-toolbar color=\"{{settings.theme.header}}\">\n      <ion-buttons slot=\"start\">\n         <ion-back-button defaultHref=\"/tabs/categories/products\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>Contact</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<ion-item>\n        <ion-label position=\"stacked\">{{\"Your Name\" | translate}}</ion-label>\n        <ion-input required type=\"text\" [(ngModel)]=\"form.yourName\" name=\"name\"> </ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"stacked\">{{\"Your Email\" | translate}}</ion-label>\n        <ion-input required type=\"text\" [(ngModel)]=\"form.yourEmail\" name=\"email\"> </ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"stacked\">{{\"Your Phone\" | translate}}</ion-label>\n        <ion-input required type=\"text\" [(ngModel)]=\"form.yourTel\" name=\"phone\"> </ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"status?.message\" lines=\"none\">\n    <ion-label text-wrap>{{status.message}}</ion-label>\n    </ion-item>\n    <ion-button [disabled]=\"disableButton\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"submit()\">{{\"Submit\" | translate}}</ion-button>\t\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/contact/contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/product */ "./src/app/data/product.ts");





var ContactPage = /** @class */ (function () {
    function ContactPage(settings, api, productData) {
        this.settings = settings;
        this.api = api;
        this.productData = productData;
        this.form = {};
        this.status = {};
        this.disableButton = false;
        this.contactUsLink = '';
    }
    ContactPage.prototype.ngOnInit = function () {
    };
    ContactPage.prototype.submit = function () {
        var _this = this;
        this.disableButton = true;
        this.form['your-name'] = this.form.yourName;
        this.form['your-email'] = this.form.yourEmail;
        this.form['your-tel'] = this.form.yourTel;
        this.api.ajaxCall(this.contactUsLink, this.form).subscribe(function (res) {
            _this.disableButton = false;
            _this.status = res;
        }, function (err) {
            console.log(err);
        });
    };
    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.page.html */ "./src/app/contact/contact.page.html"),
            styles: [__webpack_require__(/*! ./contact.page.scss */ "./src/app/contact/contact.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _data_product__WEBPACK_IMPORTED_MODULE_4__["Product"]])
    ], ContactPage);
    return ContactPage;
}());



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Data = /** @class */ (function () {
    function Data() {
        this.categories = [];
        this.mainCategories = [];
        this.blocks = [];
        this.cart = {};
        this.count = 0;
        this.wishlistId = [];
        this.freaturedProducts = [];
        this.onsaleProducts = [];
        this.products = [];
    }
    Data.prototype.updateCart = function (cart_contents) {
        this.cartItem = cart_contents;
        this.cart = [];
        this.count = 0;
        for (var item in cart_contents) {
            this.cart[cart_contents[item].product_id] = parseInt(cart_contents[item].quantity);
            this.count += parseInt(cart_contents[item].quantity);
        }
    };
    Data = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Data);
    return Data;
}());



/***/ }),

/***/ "./src/app/data/checkout.ts":
/*!**********************************!*\
  !*** ./src/app/data/checkout.ts ***!
  \**********************************/
/*! exports provided: CheckoutData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutData", function() { return CheckoutData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckoutData = /** @class */ (function () {
    function CheckoutData() {
        this.form = {};
        this.billingStates = {};
        this.shippingStates = {};
        this.orderReview = {};
        //this.orderReview.payment = {};
    }
    CheckoutData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckoutData);
    return CheckoutData;
}());



/***/ }),

/***/ "./src/app/data/post.ts":
/*!******************************!*\
  !*** ./src/app/data/post.ts ***!
  \******************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Post = /** @class */ (function () {
    function Post() {
        this.post = {};
        this.post.post = {};
    }
    Post = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Post);
    return Post;
}());



/***/ }),

/***/ "./src/app/data/product.ts":
/*!*********************************!*\
  !*** ./src/app/data/product.ts ***!
  \*********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Product = /** @class */ (function () {
    function Product() {
        this.product = {};
        this.variationProduct = {};
    }
    Product = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Product);
    return Product;
}());



/***/ }),

/***/ "./src/app/data/vendor.ts":
/*!********************************!*\
  !*** ./src/app/data/vendor.ts ***!
  \********************************/
/*! exports provided: Vendor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vendor", function() { return Vendor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Vendor = /** @class */ (function () {
    function Vendor() {
        this.vendor = {};
        this.product = {};
        this.product.categories = [];
        this.product.images = [];
    }
    Vendor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Vendor);
    return Vendor;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios' >\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-title style=\"text-align: center;\">\n      AMG BAZAAR\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" *ngIf=\"settings.settings?.pull_to_refresh\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n</ion-refresher>\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"settings.settings?.enable_home_chat\">\n    <a href=\"https://wa.me/{{settings.settings?.whatsapp_number}}\">\n        <ion-fab-button size=\"small\" color=\"whatsapp\">\n            <ion-icon name=\"logo-whatsapp\"></ion-icon>\n        </ion-fab-button>\n    </a>\n</ion-fab>\n\n    <div class=\"spinner\" *ngIf=\"!data.blocks?.blocks\"><ion-spinner> </ion-spinner></div>\n\n      <div *ngFor=\"let children of data.blocks?.blocks\" hideWhen=\"loading\" class=\"blocks\">\n\n        <div *ngIf=\"children.block_type == 'banner_block'\" [style.background-color]=\"children.bg_color\" [style.margin]=\"children.margin\" [style.padding]=\"children.padding\" class=\"banner_block\">\n\n        <div class=\"{{children.header_align}}\" [style.color]=\"children.title_color\">{{children.title}}</div>    \n            <!-- Banner Slider -->\n            <div *ngIf=\"children.children?.length && children.style == 'slider'\">\n                <ion-slides pager=\"true\" [options]=\"slideOpts\" dir=\"{{settings.dir}}\">\n                        <ion-slide *ngFor=\"let image of children.children\"> \n                            <img class=\"ion-activatable ion-focusable hydrated {{children.banner_shadow}}\" src=\"{{image.image}}\" (click)=\"goto(image)\" [style.border-radius]=\"children.border_radius\" [style.padding]=\"children.margin_between\">\n                        </ion-slide>\n                </ion-slides>\n            </div>\n\n            <!-- Banner Scroll -->\n            <div *ngIf=\"children.children?.length && children.style == 'scroll'\" [ngClass]=\"{'floating-header': children.header_align == 'left_floating'}\" class=\"floating-header banner-scroll {{children.banner_shadow}}\">\n                <img class=\"banner ion-activatable ion-focusable hydrated  {{children.banner_shadow}}\" *ngFor=\"let image of children.children ; let i = index\" src=\"{{image.image}}\" (click)=\"goto(image)\" [style.border-radius]=\"children.border_radius\" [style.width.%]=\"children.child_width*this.settings.widthMultipy\" [style.margin-right]=\"children.margin_between\" [style.margin-left]=\" i == 0 ? children.margin_between : 0\">\n            </div>\n\n            <!-- Banner Grid -->\n            <div *ngIf=\"children.children?.length && children.style == 'grid'\" class=\"banner-grid\">\n                <ion-row class=\"row unlimited-items\">\n                    <ion-col *ngFor=\"let image of children.children\" size=\"{{children.child_width/8.33333333}}\" [style.padding]=\"children.margin_between\">\n                        <img src=\"{{image.image}}\" (click)=\"goto(image)\" [style.border-radius]=\"children.border_radius\" class=\"{{children.card_style}}  {{children.banner_shadow}} ion-activatable ion-focusable hydrated\">\n                    </ion-col>\n                </ion-row>\n            </div>  \n\n        </div>\n\n        <div *ngIf=\"children.block_type == 'product_block' && children.products?.length\" [style.background-color]=\"children.bg_color\" [style.margin]=\"children.margin\" [style.padding]=\"children.padding\" class=\"product-block\">\n        <div *ngIf=\"children.products?.length\" class=\"header-title {{children.header_align}}\" [style.color]=\"children.title_color\">{{children.title}}</div>\n        <!-- Products Scroll -->\n        <div *ngIf=\"children.products && children.style == 'scroll'\" class=\"product-scroll\">\n            <div class=\"scroller\" [ngClass]=\"{'floating-header': children.header_align == 'left_floating'}\">\n                <div class=\"product-item\" *ngFor=\"let item of children.products\" [style.width.%]=\"children.child_width\">\n                    <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{children.banner_shadow}}\" [style.border-radius]=\"children.border_radius\">\n                        <img class=\"ion-activatable ion-focusable hydrated\" (click)=\"getProduct(item)\" *ngIf=\"item.images?.length\" src=\"{{item.images[0].src}}\">\n                        <img class=\"ion-activatable ion-focusable hydrated\" (click)=\"getProduct(item)\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\">\n                        <ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n                        <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\n\n                        <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n                        <div *ngIf=\"item.stock_status == 'instock'\">\n                        <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= '1'\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\n                        </div>\n\n                        <ion-card-header (click)=\"getProduct(item)\">\n                        <ion-card-subtitle mode=\"md\" [style.color]=\"children.title_color\">{{item.name}}</ion-card-subtitle>\n                        </ion-card-header>\n                        <ion-card-content (click)=\"getProduct(item)\">\n                            <p class=\"price\" [style.color]=\"children.title_color\">\n                              <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                                <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n                            </p>\n                          </ion-card-content>\n                    </ion-card>\n                </div>\n            </div>\n        </div>\n        <!-- Products  Grid-->\n        <div class=\"product-grid\" *ngIf=\"children.products?.length && children.style == 'grid'\">\n            <ion-row class=\"row unlimited-items\">\n                <ion-col class=\"col\" *ngFor=\"let item of children.products\" [style.padding]=\"children.margin_between\">\n                    <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{children.banner_shadow}}\" [style.border-radius]=\"children.border_radius\">\n                        <img class=\"ion-activatable ion-focusable hydrated\" (click)=\"getProduct(item)\" *ngIf=\"item.images?.length\" src=\"{{item.images[0].src}}\">\n                        <img class=\"ion-activatable ion-focusable hydrated\" (click)=\"getProduct(item)\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\">\n                        <ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n                        <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\n                        <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n                        <div *ngIf=\"item.stock_status == 'instock'\">\n                        <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= '1'\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\n                        </div>\n                        <ion-card-header>\n                        <ion-card-subtitle mode=\"md\" [style.color]=\"children.title_color\">{{item.name}}</ion-card-subtitle>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <p class=\"price\" [style.color]=\"children.title_color\">\n                              <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                                <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n                            </p>\n                          </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </div>\n        </div>\n\n        <!--flash sale-->\n\n        <div *ngIf=\"children.block_type == 'flash_sale_block' && !children.hide && children.products?.length\" [style.background-color]=\"children.bg_color\" [style.margin]=\"children.margin\" [style.padding]=\"children.padding\" class=\"product-block flash_sale\">\n\n        <div *ngIf=\"children.products\" class=\"{{children.header_align}}\" [style.color]=\"children.title_color\">\n            <div no-lines class=\"flash-item-name\">\n                <h2 [style.color]=\"children.title_color\">{{children.title}}</h2>\n                <div style=\"text-align: center;\">\n                    <h3 class='day'><span>{{children.days}}</span></h3> : <h3 class='day'><span>{{children.hours}}</span></h3> : <h3 class='day'><span>{{children.minutes}}</span></h3> : <h3 class='day'><span>{{children.seconds}}</span></h3>                                \n                </div>    \n            </div>\n        </div>\n\n        <!-- Products Scroll -->\n        <div *ngIf=\"children.products && children.style == 'scroll'\" class=\"product-scroll\">\n            <div class=\"scroller\" [ngClass]=\"{'floating-header': children.header_align == 'left_floating'}\">\n                <div class=\"product-item\" *ngFor=\"let item of children.products\" [style.width.%]=\"children.child_width\" [style.padding]=\"children.margin_between\">\n                    <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{children.banner_shadow}}\" [style.border-radius]=\"children.border_radius\">\n                        <ion-card-content>\n                        <img class=\"ion-activatable ion-focusable hydrated\" (click)=\"getProduct(item)\" *ngIf=\"item.images?.length\" src=\"{{item.images[0].src}}\">\n                        <img class=\"ion-activatable ion-focusable hydrated\" (click)=\"getProduct(item)\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\">\n                        <ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n                        <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\n                        <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">No Stock</ion-button>\n                        <div *ngIf=\"item.stock_status == 'instock'\">\n                        <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= '1'\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\n                        </div>\n                        </ion-card-content>\n                        <ion-card-header (click)=\"getProduct(item)\">\n                        <ion-card-subtitle mode=\"md\" [style.color]=\"children.title_color\">{{item.name}}</ion-card-subtitle>\n                        </ion-card-header>\n                        <ion-card-content (click)=\"getProduct(item)\">\n                            <p class=\"price\" [style.color]=\"children.title_color\">\n                              <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                                <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n                            </p>\n                          </ion-card-content>\n                    </ion-card>\n                </div>\n            </div>\n        </div>\n        <!-- Products  Grid-->\n        <div class=\"product-grid\" *ngIf=\"children.products && children.style == 'grid'\">\n            <ion-row class=\"row unlimited-items\">\n                <ion-col class=\"col\" *ngFor=\"let item of children.products\" [style.padding]=\"children.margin_between\">\n                    <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{children.banner_shadow}}\" [style.border-radius]=\"children.border_radius\">\n                        <img class=\"ion-activatable ion-focusable hydrated\" (click)=\"getProduct(item)\" *ngIf=\"item.images?.length\" src=\"{{item.images[0].src}}\">\n                        <img class=\"ion-activatable ion-focusable hydrated\" (click)=\"getProduct(item)\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\">\n                        <ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n                        <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\n                        <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n                        <div *ngIf=\"item.stock_status == 'instock'\">\n                        <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= '1'\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\n                        </div>\n                        <ion-card-header (click)=\"getProduct(item)\">\n                        <ion-card-subtitle mode=\"md\" [style.color]=\"children.title_color\">{{item.name}}</ion-card-subtitle>\n                        </ion-card-header>\n                        <ion-card-content (click)=\"getProduct(item)\">\n                            <p class=\"price\" [style.color]=\"children.title_color\">\n                              <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                                <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n                            </p>\n                          </ion-card-content>\n\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </div>\n        </div>\n\n\n        <!-- category-block-->\n        <div *ngIf=\"children.block_type == 'category_block'\" [style.background-color]=\"children.bg_color\" [style.margin]=\"children.margin\" [style.padding]=\"children.padding\" class=\"category\">\n        <div *ngIf=\"data.categories\" class=\"{{children.header_align}}\" [style.color]=\"children.title_color\">{{children.title}}</div>\n            <!-- Category Scroll -->\n            <div *ngIf=\"data.categories && children.style == 'scroll'\" class=\"category-slider-scroll\">\n                <div class=\"scrollmenu2\" [ngClass]=\"{'floating-header': children.header_align == 'left_floating'}\">\n                <div class=\"scroll-related-products\">\n                  <div class=\"product\" *ngFor=\"let item of getSubCategories(children.link_id)\" [style.width.%]=\"children.child_width\" [style.padding]=\"children.margin_between\">\n                      <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n                        <img *ngIf=\"item.image?.src\" src=\"{{item.image.src}}\">\n                        <ion-card-header>\n                            <ion-card-subtitle text-center mode=\"md\" [innerHTML]=\"item.name\">{{item.name}}</ion-card-subtitle>\n                        </ion-card-header>\n                      </ion-card>\n                  </div>\n                </div>\n                </div>\n            </div>\n            \n            <!-- Category Grid -->\n            <div *ngIf=\"data.categories && children.style == 'grid'\" class=\"category-slider-grid\">\n                <ion-row class=\"row unlimited-items\">\n                    <ion-col class=\"col {{item.slug}}\" *ngFor=\"let item of getSubCategories(children.link_id)\" [style.width.%]=\"children.child_width\" [style.padding]=\"0\" [style.padding]=\"children.margin_between\">\n                        <div class=\"ion-activatable ion-focusable hydrated my-category-class\" (click)=\"getCategory(item.id)\">\n                            <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{children.banner_shadow}}\" [style.border-radius]=\"children.border_radius\"> \n                                <img *ngIf=\"item.image?.src\" src=\"{{item.image.src}}\">\n                                <ion-card-header>\n                                    <ion-card-subtitle text-center mode=\"md\" [innerHTML]=\"item.name\">{{item.name}}</ion-card-subtitle>\n                                </ion-card-header>\n                            </ion-card>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </div>\n\n        </div>\n\n      </div>\n\n            \n            <!-- MANUAL CATEGORY GRID -->\n            <div class=\"category-slider-grid\">\n                <ion-row class=\"row unlimited-items\">\n\n                    <!-- CATEGORY CARD 1 -->\n                    <ion-col class=\"col\" style=\"width: 50%; padding: 10px;\">\n                        <div class=\"ion-activatable ion-focusable hydrated my-category-class\">\n                          <a routerLink=\"/tabs/home/products/38\">\n                            <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated shadow sc-ion-card-md-h sc-ion-card-md-s md\" style=\"border-radius: 5px;\"> \n                                <img src=\"assets/image/categories/grocery.jpg\">\n                                <ion-card-header class=\"ios hydrated\">\n                                    <ion-card-subtitle text-center mode=\"md\" role=\"heading\" aria-level=\"3\" class=\"md hydrated\">\n                                        Grocery & Staples\n                                    </ion-card-subtitle>\n                                </ion-card-header>\n                            </ion-card>\n                          </a>\n                        </div>\n                    </ion-col>\n\n                    <!-- CATEGORY CARD 2 -->\n                    <ion-col class=\"col\" style=\"width: 50%; padding: 10px;\">\n                        <div class=\"ion-activatable ion-focusable hydrated my-category-class\">\n                          <a routerLink=\"/tabs/home/products/39\">\n                            <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated shadow sc-ion-card-md-h sc-ion-card-md-s md\" style=\"border-radius: 5px;\"> \n                                <img src=\"assets/image/categories/household-needs.jpg\">\n                                <ion-card-header class=\"ios hydrated\">\n                                    <ion-card-subtitle text-center mode=\"md\" role=\"heading\" aria-level=\"3\" class=\"md hydrated\">\n                                        Househeld Needs\n                                    </ion-card-subtitle>\n                                </ion-card-header>\n                            </ion-card>\n                          </a>\n                        </div>\n                    </ion-col>\n\n                    <!-- CATEGORY CARD 3 -->\n                    <ion-col class=\"col\" style=\"width: 50%; padding: 10px;\">\n                        <div class=\"ion-activatable ion-focusable hydrated my-category-class\">\n                          <a routerLink=\"/tabs/home/products/40\">\n                            <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated shadow sc-ion-card-md-h sc-ion-card-md-s md\" style=\"border-radius: 5px;\"> \n                                <img src=\"assets/image/categories/personal-care.jpg\">\n                                <ion-card-header class=\"ios hydrated\">\n                                    <ion-card-subtitle text-center mode=\"md\" role=\"heading\" aria-level=\"3\" class=\"md hydrated\">\n                                        Personal Care\n                                    </ion-card-subtitle>\n                                </ion-card-header>\n                            </ion-card>\n                          </a>\n                        </div>\n                    </ion-col>\n\n                    <!-- CATEGORY CARD 4 -->\n                    <ion-col class=\"col\" style=\"width: 50%; padding: 10px;\">\n                        <div class=\"ion-activatable ion-focusable hydrated my-category-class\">\n                          <a routerLink=\"/tabs/home/products/15\">\n                            <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated shadow sc-ion-card-md-h sc-ion-card-md-s md\" style=\"border-radius: 5px;\"> \n                                <img src=\"assets/image/categories/baby-kids.jpg\">\n                                <ion-card-header class=\"ios hydrated\">\n                                    <ion-card-subtitle text-center mode=\"md\" role=\"heading\" aria-level=\"3\" class=\"md hydrated\">\n                                      Baby & Kids\n                                    </ion-card-subtitle>\n                                </ion-card-header>\n                            </ion-card>\n                          </a>\n                        </div>\n                    </ion-col>\n\n                    <!-- CATEGORY CARD 5 -->\n                    <ion-col class=\"col\" style=\"width: 50%; padding: 10px;\">\n                        <div class=\"ion-activatable ion-focusable hydrated my-category-class\">\n                          <a routerLink=\"/tabs/home/products/41\">\n                            <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated shadow sc-ion-card-md-h sc-ion-card-md-s md\" style=\"border-radius: 5px;\"> \n                                <img src=\"assets/image/categories/beverages.jpg\">\n                                <ion-card-header class=\"ios hydrated\">\n                                    <ion-card-subtitle text-center mode=\"md\" role=\"heading\" aria-level=\"3\" class=\"md hydrated\">\n                                        Beverages\n                                    </ion-card-subtitle>\n                                </ion-card-header>\n                            </ion-card>\n                          </a>\n                        </div>\n                    </ion-col>\n\n                    <!-- CATEGORY CARD 6 -->\n                    <ion-col class=\"col\" style=\"width: 50%; padding: 10px;\">\n                        <div class=\"ion-activatable ion-focusable hydrated my-category-class\">\n                          <a routerLink=\"/tabs/home/products/42\">\n                            <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated shadow sc-ion-card-md-h sc-ion-card-md-s md\" style=\"border-radius: 5px;\"> \n                                <img src=\"assets/image/categories/biscuits.jpg\">\n                                <ion-card-header class=\"ios hydrated\">\n                                    <ion-card-subtitle text-center mode=\"md\" role=\"heading\" aria-level=\"3\" class=\"md hydrated\">\n                                        Biscuits, Snacks & Chocolates\n                                    </ion-card-subtitle>\n                                </ion-card-header>\n                            </ion-card>\n                          </a>\n                        </div>\n                    </ion-col>\n\n                    <!-- CATEGORY CARD 7 -->\n                    <ion-col class=\"col\" style=\"width: 50%; padding: 10px;\">\n                        <div class=\"ion-activatable ion-focusable hydrated my-category-class\">\n                          <a routerLink=\"/tabs/home/products/49\">\n                            <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated shadow sc-ion-card-md-h sc-ion-card-md-s md\" style=\"border-radius: 5px;\"> \n                                <img src=\"assets/image/categories/noodles-sauces.jpg\">\n                                <ion-card-header class=\"ios hydrated\">\n                                    <ion-card-subtitle text-center mode=\"md\" role=\"heading\" aria-level=\"3\" class=\"md hydrated\">\n                                        Noodles, Sauces & Instant Foods\n                                    </ion-card-subtitle>\n                                </ion-card-header>\n                            </ion-card>\n                          </a>\n                        </div>\n                    </ion-col>\n\n                    <!-- CATEGORY CARD 8 -->\n                    <ion-col class=\"col\" style=\"width: 50%; padding: 10px;\">\n                        <div class=\"ion-activatable ion-focusable hydrated my-category-class\">\n                          <a routerLink=\"/tabs/home/products/50\">\n                            <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated shadow sc-ion-card-md-h sc-ion-card-md-s md\" style=\"border-radius: 5px;\"> \n                                <img src=\"assets/image/categories/breakfast.jpg\">\n                                <ion-card-header class=\"ios hydrated\">\n                                    <ion-card-subtitle text-center mode=\"md\" role=\"heading\" aria-level=\"3\" class=\"md hydrated\">\n                                        Breakfast & Dairy\n                                    </ion-card-subtitle>\n                                </ion-card-header>\n                            </ion-card>\n                          </a>\n                        </div>\n                    </ion-col>\n\n                </ion-row>\n            </div>\n    <div *ngIf=\"data.blocks?.length\" class=\"related-products\">\n        <ion-list-header>\n        <ion-label>{{\"Featured Products\" | translate}}</ion-label>\n      </ion-list-header>\n      <div class=\"scroll-related-products\">\n          <div class=\"product\" *ngFor=\"let item of data.blocks.featured\" [style.width.px]=\"settings.dimensions.homeSliderWidth\">\n              <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n                <ion-card-content>  <ion-img alt=\"\" *ngIf=\"item.images?.length\" [src]=\"item.images[0].src\" (click)=\"getProduct(item)\" [style.height.px]=\"settings.dimensions.homeSliderHeight\"></ion-img>\n                <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\" (click)=\"getProduct(item)\"></ion-img><ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n                <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\n                <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n                <div *ngIf=\"item.stock_status == 'instock'\">\n                <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= '1'\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\n                </div>\n                </ion-card-content>\n                <ion-card-header (click)=\"getProduct(item)\">\n                    <ion-card-subtitle mode=\"md\">{{item.name}}</ion-card-subtitle>\n                </ion-card-header>\n                <ion-card-content (click)=\"getProduct(item)\">\n                    <p class=\"price\">\n                      <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.3-3'}}</span>\n                        <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.3-3'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.3-3'}}</del></span></span>\n                    </p>\n                  </ion-card-content>\n              </ion-card>\n          </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"data.blocks.on_sale?.length\" class=\"related-products\">\n        <ion-list-header>\n        <ion-label>{{\"Onsale Products\" | translate}}</ion-label>\n      </ion-list-header>\n      <div class=\"scroll-related-products\">\n          <div class=\"product\" *ngFor=\"let item of data.blocks.on_sale\" [style.width.px]=\"settings.dimensions.homeSliderWidth\">\n              <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n                <ion-card-content>  <ion-img alt=\"\" *ngIf=\"item.images?.length\" [src]=\"item.images[0].src\" (click)=\"getProduct(item)\" [style.height.px]=\"settings.dimensions.homeSliderHeight\"></ion-img>\n                <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\" (click)=\"getProduct(item)\"></ion-img><ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n                <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\n                <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n                <div *ngIf=\"item.stock_status == 'instock'\">\n                <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= '1'\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\n                </div>\n                </ion-card-content>\n                <ion-card-header (click)=\"getProduct(item)\">\n                    <ion-card-subtitle mode=\"md\">{{item.name}}</ion-card-subtitle>\n                </ion-card-header>\n                <ion-card-content (click)=\"getProduct(item)\">\n                    <p class=\"price\">\n                      <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                        <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n                    </p>\n                  </ion-card-content>\n              </ion-card>\n          </div>\n      </div>\n    </div>\n\n  <ion-row *ngIf=\"data.products?.length\">\n      <ion-list-header class=\"latest_product_heading\">\n      <ion-label>LATEST PRODUCTS</ion-label>\n    </ion-list-header>\n    <ion-col size=\"{{settings.colWidthLatest}}\" *ngFor=\"let item of data.products\" [style.padding.px]=\"settings.dimensions.productPadding\">\n    <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n      <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeGridViewHeight\" *ngIf=\"item.images?.length\" [src]=\"item.images[0].src\" (click)=\"getProduct(item)\"></ion-img>\n      <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeGridViewHeight\" *ngIf=\"!item.images?.length\" src=\"assets/image/logo.png\" (click)=\"getProduct(item)\"></ion-img>\n      <ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n      <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\n\n        <ion-button color=\"danger\" class=\"stock\" *ngIf=\"item.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n        <div *ngIf=\"item.stock_status == 'instock'\">\n        <ion-button class=\"offer\" *ngIf=\"((item.regular_price - item.price) /item.regular_price*100) >= '1'\">{{(item.regular_price - item.price) /item.regular_price*100 | number : '1.0-0'}}%</ion-button>\n        </div>\n\n      <ion-card-header (click)=\"getProduct(item)\">\n        <ion-card-subtitle mode=\"md\">{{item.name}}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content (click)=\"getProduct(item)\">\n        <p class=\"price\">\n          <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n            <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n        </p>\n      </ion-card-content>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && data.products?.length\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-card {\n  margin: 0;\n  height: 100%; }\n\nion-card-title {\n  font-size: 40px; }\n\nion-card-header {\n  padding: 10px; }\n\n.my-category-class {\n  height: 200px; }\n\n.my-category-class img {\n  height: 170px !important;\n  width: auto !important;\n  margin: auto !important;\n  overflow: hidden !important; }\n\n.my-category-class a {\n  text-decoration: none; }\n\n.my-category-class ion-card-subtitle {\n  max-width: 150px;\n  min-width: 120px; }\n\n.latest_product_heading {\n  background: #359d0f;\n  color: #fff;\n  font-weight: bold;\n  font-size: initial; }\n\nion-card-content {\n  padding: 0; }\n\nion-card-content .price {\n    padding: 0 10px 10px 10px;\n    font-weight: bold;\n    font-size: 14px; }\n\nion-card-content .price .special-price {\n      padding-left: 5px;\n      font-size: 10px;\n      font-weight: 300; }\n\nion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small; }\n\n.blocks .banner_block {\n  overflow: auto;\n  white-space: nowrap;\n  position: relative;\n  z-index: 0; }\n\n.blocks .banner_block .banner-scroll img {\n    text-decoration: none;\n    margin: 0 5px 0 5px;\n    width: 53%;\n    vertical-align: middle; }\n\n.blocks .banner_block .banner-scroll img:first-child {\n    margin: 0 5px 0 10px; }\n\n.blocks .banner_block .banner-scroll img:last-child {\n    margin: 0 10px 0 5px; }\n\n.blocks .banner_block .banner-grid img {\n    vertical-align: middle; }\n\n.blocks .banner_block .banner-grid .row.unlimited-items {\n    flex-wrap: wrap; }\n\n.blocks .banner_block .banner-grid .row.unlimited-items .col {\n    flex: none;\n    width: 50%;\n    line-height: 0;\n    padding: 5px; }\n\n.blocks .banner_block .floating-header {\n    overflow: auto;\n    white-space: nowrap;\n    z-index: 3;\n    padding-left: 30%; }\n\n.blocks .banner_block .floating-header .banner {\n      width: 90%;\n      height: auto; }\n\n@media (min-width: 481px) and (max-width: 768px) {\n      .blocks .banner_block .floating-header {\n        padding-left: 25%; } }\n\n@media (min-width: 769px) and (max-width: 1024px) {\n      .blocks .banner_block .floating-header {\n        padding-left: 20%; } }\n\n@media (min-width: 1025px) {\n      .blocks .banner_block .floating-header {\n        padding-left: 15%; } }\n\n.blocks .scrollmenu {\n  overflow: auto;\n  white-space: nowrap; }\n\n.blocks .scrollmenu a {\n  display: inline-block;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none; }\n\n.blocks .left_floating {\n  padding: 0 16px;\n  z-index: -1;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  position: absolute;\n  top: 45%;\n  max-width: 30%;\n  width: 40%;\n  text-align: center;\n  white-space: normal; }\n\n@media (min-width: 481px) and (max-width: 768px) {\n    .blocks .left_floating {\n      max-width: 30%; } }\n\n@media (min-width: 769px) and (max-width: 1024px) {\n    .blocks .left_floating {\n      max-width: 25%; } }\n\n@media (min-width: 1025px) {\n    .blocks .left_floating {\n      max-width: 20%; } }\n\n.blocks .top_left {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  padding: 10px 16px; }\n\n.blocks .top_center {\n  padding: 14px 10px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-align: center; }\n\n.blocks .top_right {\n  padding: 10px 16px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-align: right; }\n\n.blocks .none {\n  display: none; }\n\n.blocks .block-title {\n  margin-top: 10px;\n  font-weight: 400; }\n\n.blocks .product-block {\n  overflow: auto;\n  white-space: nowrap;\n  position: relative;\n  z-index: 0; }\n\n.blocks .product-block .product-scroll {\n    padding-bottom: 5px; }\n\n.blocks .product-block .product-scroll .scroller {\n      padding: 0px 4px 15px 4px;\n      overflow: auto;\n      white-space: nowrap; }\n\n.blocks .product-block .product-scroll .scroller h5 {\n        margin: 0;\n        border-radius: 3px;\n        padding: 6px;\n        font-size: 12px;\n        text-transform: capitalize;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        font-weight: 400; }\n\n.blocks .product-block .product-scroll .scroller .product-item {\n        display: inline-block;\n        text-decoration: none;\n        width: 42%;\n        padding: 0px 5px 0px 5px; }\n\n@media (min-width: 481px) and (max-width: 768px) {\n        .blocks .product-block .product-scroll .scroller .product-item {\n          width: 33.333%; } }\n\n@media (min-width: 769px) and (max-width: 1024px) {\n        .blocks .product-block .product-scroll .scroller .product-item {\n          width: 25%; } }\n\n@media (min-width: 1025px) {\n        .blocks .product-block .product-scroll .scroller .product-item {\n          width: 20%; } }\n\n.blocks .product-block .product-scroll .scroller img {\n        height: auto;\n        width: 100%; }\n\n.blocks .product-block .product-scroll .scroller ion-card {\n        width: 100%;\n        height: 100%;\n        margin: 0; }\n\n.blocks .product-block .product-scroll .scroller ion-card-content {\n        padding: 0; }\n\n.blocks .product-block .product-scroll .scroller .price-regular {\n        font-size: 14px;\n        font-weight: 400; }\n\n.blocks .product-block .product-scroll .scroller del {\n        font-size: 12px; }\n\n.blocks .product-block .product-scroll .scroller ion-label {\n        margin: 0;\n        padding: 0 6px 6px 6px; }\n\n.blocks .product-block .product-scroll .floating-header {\n      overflow: auto;\n      white-space: nowrap;\n      z-index: 3;\n      padding-left: 30%; }\n\n.blocks .product-block .product-scroll .floating-header .banner {\n        width: 90%;\n        height: auto; }\n\n.blocks .product-block .product-grid .wishlist-button-grid1 {\n    position: absolute;\n    top: 2px;\n    right: 20px;\n    font-size: 2em;\n    margin: 0.4rem -5px;\n    color: #f44336; }\n\n.blocks .product-block .product-grid .wishlist-button-grid2 {\n    position: absolute;\n    top: 2px;\n    right: 20px;\n    font-size: 2em;\n    margin: 0.4rem -5px;\n    color: #444; }\n\n.blocks .product-block .product-grid ion-row {\n    margin: 0;\n    padding: 0 0 0 5px; }\n\n.blocks .product-block .product-grid ion-col {\n    margin: 0;\n    padding: 5px 5px 0 0; }\n\n.blocks .product-block .product-grid ion-card {\n    position: relative;\n    text-align: center;\n    margin: 0;\n    width: 100%; }\n\n.blocks .product-block .product-grid ion-card img {\n      width: 100%;\n      height: 100%;\n      margin: auto;\n      padding: 0; }\n\n.blocks .product-block .product-grid ion-card ion-card-content {\n      padding: 0px; }\n\n.blocks .product-block .product-grid .card-title {\n    position: absolute;\n    top: 80%;\n    font-size: 12px;\n    width: 100%;\n    font-weight: 500; }\n\n.blocks .product-block .product-grid .card-subtitle {\n    font-size: 1.0em;\n    position: absolute;\n    top: 52%;\n    width: 100%; }\n\n.blocks .product-block .product-grid .card-name {\n    width: 144px;\n    margin: auto; }\n\n.blocks .product-block .product-grid .card-name ion-label {\n      margin: 8px 0;\n      height: 20px;\n      white-space: no-wrap;\n      font-size: 13px; }\n\n.blocks .product-block .product-grid .label {\n    margin-bottom: 10px;\n    margin-top: 5px; }\n\n.blocks .product-block .product-grid .price-delete {\n    margin: 0 7.5px;\n    font-size: 12px; }\n\n.blocks .product-block .product-grid .price-regular {\n    margin: 0 7.5px;\n    font-size: 14px;\n    font-weight: 400; }\n\n.blocks .product-block .product-grid .row.unlimited-items {\n    flex-wrap: wrap;\n    padding-left: 0; }\n\n.blocks .product-block .product-grid .row.unlimited-items .col {\n    flex: none;\n    width: 50%;\n    padding: 0; }\n\n.blocks .product-block .product-grid .row.unlimited-items .col:nth-child(2n+0) {\n    border-right: none; }\n\n@media (min-width: 481px) and (max-width: 768px) {\n    .blocks .product-block .product-grid .row.unlimited-items .col {\n      width: 33.333%; }\n    .blocks .product-block .product-grid .row.unlimited-items .col:nth-child(3n+0) {\n      border-right: none; } }\n\n@media (min-width: 769px) and (max-width: 1024px) {\n    .blocks .product-block .product-grid .row.unlimited-items .col {\n      width: 25%; }\n    .blocks .product-block .product-grid .row.unlimited-items .col:nth-child(4n+0) {\n      border-right: none; } }\n\n@media (min-width: 1025px) {\n    .blocks .product-block .product-grid .row.unlimited-items .col {\n      width: 20%; }\n    .blocks .product-block .product-grid .row.unlimited-items .col:nth-child(5n+0) {\n      border-right: none; } }\n\n.blocks .flash_sale .floating-header {\n  overflow: auto;\n  white-space: nowrap;\n  z-index: 3;\n  padding-left: 45% !important; }\n\n.blocks .flash_sale .left_floating {\n  padding: 0;\n  top: 15%;\n  max-width: 48%;\n  width: 48%; }\n\n.blocks .flash_sale .flash-item-name h2 {\n  padding: 0;\n  font-weight: 400;\n  font-size: 14px;\n  text-align: center;\n  margin-left: -7px;\n  margin-bottom: 8px;\n  margin-top: 0; }\n\n.blocks .flash_sale .flash-item-name h4 {\n  padding: 4px 4px 8px 4px;\n  font-size: 11px;\n  text-align: center;\n  text-transform: uppercase;\n  text-align: center; }\n\n.blocks .flash_sale .flash-item-name .day {\n  background: black;\n  color: #fff;\n  width: 25px;\n  min-width: 25px;\n  max-width: 25px;\n  height: 25px;\n  min-height: 25px;\n  max-height: 25px;\n  font-size: 10px;\n  display: inline-flex;\n  margin: auto;\n  text-align: center; }\n\n.blocks .flash_sale .flash-item-name .day span {\n    margin: auto; }\n\n.blocks .category {\n  z-index: 0; }\n\n.blocks .category .floating-header {\n    overflow: auto;\n    white-space: nowrap;\n    z-index: 3;\n    padding-left: 43%; }\n\n.blocks .category .floating-header .banner {\n      width: 90%;\n      height: auto; }\n\n.blocks .category .category-slider-scroll, .blocks .category .category-scroll {\n    overflow: auto;\n    white-space: nowrap;\n    position: relative;\n    display: -webkit-box; }\n\n.blocks .category .category-slider-scroll .scrollmenu2, .blocks .category .category-scroll .scrollmenu2 {\n      margin: 0;\n      padding-bottom: 15px;\n      overflow: auto;\n      white-space: nowrap; }\n\n.blocks .category .category-slider-scroll .scrollmenu2 .none, .blocks .category .category-scroll .scrollmenu2 .none {\n        display: none; }\n\n.blocks .category .category-slider-scroll .scrollmenu2 h5, .blocks .category .category-scroll .scrollmenu2 h5 {\n        margin: 0;\n        border-radius: 3px;\n        padding: 10px 4px 0 4px;\n        font-size: 11px;\n        text-transform: capitalize;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n\n.blocks .category .category-slider-scroll .scrollmenu2 .product-item, .blocks .category .category-scroll .scrollmenu2 .product-item {\n        display: inline-block;\n        text-align: center;\n        padding: 14px;\n        text-decoration: none;\n        padding: 0 10px 10px 10px;\n        width: 40%; }\n\n@media (min-width: 481px) and (max-width: 768px) {\n        .blocks .category .category-slider-scroll .scrollmenu2 .product-item, .blocks .category .category-scroll .scrollmenu2 .product-item {\n          width: 33.333%; } }\n\n@media (min-width: 769px) and (max-width: 1024px) {\n        .blocks .category .category-slider-scroll .scrollmenu2 .product-item, .blocks .category .category-scroll .scrollmenu2 .product-item {\n          width: 25%; } }\n\n@media (min-width: 1025px) {\n        .blocks .category .category-slider-scroll .scrollmenu2 .product-item, .blocks .category .category-scroll .scrollmenu2 .product-item {\n          width: 20%; } }\n\n.blocks .category .category-slider-grid h5, .blocks .category .category-grid h5 {\n    font-size: 13px; }\n\n.blocks .category .category-slider-grid ion-card-content, .blocks .category .category-grid ion-card-content {\n    padding: 0px; }\n\n.blocks .category .category-slider-grid .card-md ion-card-content, .blocks .category .category-grid .card-md ion-card-content {\n    padding: 0px; }\n\n.blocks .category .category-slider-grid .none, .blocks .category .category-grid .none {\n    display: none; }\n\n.blocks .category .category-slider-grid ion-card, .blocks .category .category-grid ion-card {\n    margin: 0px;\n    width: 100%;\n    border-radius: 0; }\n\n.blocks .category .category-slider-grid ion-card img, .blocks .category .category-grid ion-card img {\n      display: block;\n      width: 100%;\n      height: auto; }\n\n.blocks .category .category-slider-grid .row.unlimited-items, .blocks .category .category-grid .row.unlimited-items {\n    flex-wrap: wrap;\n    padding-left: 0; }\n\n.blocks .category .category-slider-grid .row.unlimited-items .col, .blocks .category .category-grid .row.unlimited-items .col {\n    flex: none;\n    padding: 0;\n    width: 50%; }\n\n.blocks .category .category-slider-grid .row.unlimited-items .col:nth-child(2n+0), .blocks .category .category-grid .row.unlimited-items .col:nth-child(2n+0) {\n    border-right: none; }\n\n@media (min-width: 481px) and (max-width: 768px) {\n    .blocks .category .category-slider-grid .row.unlimited-items .col, .blocks .category .category-grid .row.unlimited-items .col {\n      width: 33.333%; }\n    .blocks .category .category-slider-grid .row.unlimited-items .col:nth-child(3n+0), .blocks .category .category-grid .row.unlimited-items .col:nth-child(3n+0) {\n      border-right: none; } }\n\n@media (min-width: 769px) and (max-width: 1024px) {\n    .blocks .category .category-slider-grid .row.unlimited-items .col, .blocks .category .category-grid .row.unlimited-items .col {\n      width: 25%; }\n    .blocks .category .category-slider-grid .row.unlimited-items .col:nth-child(4n+0), .blocks .category .category-grid .row.unlimited-items .col:nth-child(4n+0) {\n      border-right: none; } }\n\n@media (min-width: 1025px) {\n    .blocks .category .category-slider-grid .row.unlimited-items .col, .blocks .category .category-grid .row.unlimited-items .col {\n      width: 20%; }\n    .blocks .category .category-slider-grid .row.unlimited-items .col:nth-child(5n+0), .blocks .category .category-grid .row.unlimited-items .col:nth-child(5n+0) {\n      border-right: none; } }\n\n.related-products {\n  padding-bottom: 10px; }\n\n.related-products .price {\n    padding: 0 10px 10px 10px;\n    font-weight: bold;\n    font-size: 14px; }\n\n.related-products .price .special-price {\n      padding-left: 5px;\n      font-size: 10px;\n      font-weight: 300; }\n\n.related-products .related-item-name {\n    font-weight: 400; }\n\n.related-products .scroll-related-products {\n    padding: 16px 0 16px 0;\n    overflow-y: hidden;\n    white-space: nowrap; }\n\n.related-products .scroll-related-products .product {\n      display: inline-block;\n      text-decoration: none;\n      width: 50%;\n      margin: 0 0 0 10px; }\n\n.related-products .scroll-related-products .product:last-child {\n      margin-right: 10px; }\n\n@media (min-width: 481px) and (max-width: 768px) {\n      .related-products .scroll-related-products .product {\n        width: 33.333%; } }\n\n@media (min-width: 769px) and (max-width: 1024px) {\n      .related-products .scroll-related-products .product {\n        width: 25%; } }\n\n@media (min-width: 1025px) {\n      .related-products .scroll-related-products .product {\n        width: 20%; } }\n\n.related-products .scroll-related-products ion-img {\n      height: auto;\n      width: 100%; }\n\n.related-products .scroll-related-products ion-card {\n      width: 100%;\n      height: 100%;\n      margin: 0; }\n\n.related-products .scroll-related-products .border {\n      border: 0.55px solid #f5f5f5; }\n\n.related-products ion-list-header ion-label {\n    font-weight: 600; }\n\nion-header img {\n  height: 30px;\n  width: auto; }\n\n.stock {\n  position: absolute;\n  top: -4px;\n  left: -6px;\n  width: 130px;\n  font-size: 8px;\n  margin: 15px;\n  margin-left: -39px;\n  transform: rotate(-45deg);\n  height: 19px;\n  --box-shadow: none; }\n\n.offer {\n  margin-left: 5px;\n  font-size: 12px;\n  --border-radius: 25px;\n  width: 36px;\n  min-height: 36px;\n  font-weight: 600;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  -webkit-box-shadow: none;\n  --box-shadow: none; }\n\n.inner-scroll {\n  padding-top: 0 !important;\n  margin-top: 64px !important; }\n\nion-refresher {\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxTQUFTO0VBQ1QsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxVQUFVLEVBQUE7O0FBRGQ7SUFHUSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUFMdkI7TUFPWSxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGdCQUFnQixFQUFBOztBQUk1QjtFQUNJLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFFUSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBTGxCO0lBUWdCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHNCQUFzQixFQUFBOztBQVh0QztJQWNnQixvQkFBb0IsRUFBQTs7QUFkcEM7SUFpQmdCLG9CQUFvQixFQUFBOztBQWpCcEM7SUFzQmdCLHNCQUFzQixFQUFBOztBQXRCdEM7SUF5QmdCLGVBQWUsRUFBQTs7QUF6Qi9CO0lBNEJnQixVQUFVO0lBQ1YsVUFBVTtJQUNWLGNBQWM7SUFDZCxZQUFZLEVBQUE7O0FBL0I1QjtJQW1DWSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixpQkFBaUIsRUFBQTs7QUF0QzdCO01Bd0NnQixVQUFVO01BQ1YsWUFBWSxFQUFBOztBQUVoQjtNQTNDWjtRQTRDZ0IsaUJBQWlCLEVBQUEsRUFReEI7O0FBTkc7TUE5Q1o7UUErQ2dCLGlCQUFpQixFQUFBLEVBS3hCOztBQUhHO01BakRaO1FBa0RnQixpQkFBaUIsRUFBQSxFQUV4Qjs7QUFwRFQ7RUF3RFEsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQXpEM0I7RUE0RFEscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBL0Q3QjtFQWtFUSxlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUNuQjtJQTlFUjtNQStFWSxjQUFjLEVBQUEsRUFRckI7O0FBTkc7SUFqRlI7TUFrRlksY0FBYyxFQUFBLEVBS3JCOztBQUhHO0lBcEZSO01BcUZZLGNBQWMsRUFBQSxFQUVyQjs7QUF2Rkw7RUF5RlEsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQTdGMUI7RUFnR1Esa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFyRzFCO0VBd0dRLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBN0d6QjtFQWdIUSxhQUFhLEVBQUE7O0FBaEhyQjtFQW1IUSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBcEh4QjtFQXVIUSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBMUhsQjtJQTRIWSxtQkFBbUIsRUFBQTs7QUE1SC9CO01BOEhnQix5QkFBeUI7TUFDekIsY0FBYztNQUNkLG1CQUFtQixFQUFBOztBQWhJbkM7UUFrSW9CLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGVBQWU7UUFDZiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixnQkFBZ0IsRUFBQTs7QUF6SXBDO1FBNElvQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFVBQVU7UUFDVix3QkFBd0IsRUFBQTs7QUFFNUI7UUFqSmhCO1VBbUp3QixjQUFjLEVBQUEsRUFDakI7O0FBRUw7UUF0SmhCO1VBd0p3QixVQUFVLEVBQUEsRUFDYjs7QUFFTDtRQTNKaEI7VUE2SndCLFVBQVUsRUFBQSxFQUNiOztBQTlKckI7UUFpS29CLFlBQVk7UUFDWixXQUFXLEVBQUE7O0FBbEsvQjtRQXFLb0IsV0FBVztRQUNYLFlBQVk7UUFDWixTQUFTLEVBQUE7O0FBdks3QjtRQTBLb0IsVUFBVSxFQUFBOztBQTFLOUI7UUE2S29CLGVBQWU7UUFDZixnQkFBZ0IsRUFBQTs7QUE5S3BDO1FBaUxvQixlQUFlLEVBQUE7O0FBakxuQztRQW9Mb0IsU0FBUztRQUNULHNCQUFzQixFQUFBOztBQXJMMUM7TUF5TGdCLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsVUFBVTtNQUNWLGlCQUFpQixFQUFBOztBQTVMakM7UUE4TG9CLFVBQVU7UUFDVixZQUFZLEVBQUE7O0FBL0xoQztJQXFNZ0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7O0FBMU05QjtJQTZNZ0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixXQUFXLEVBQUE7O0FBbE4zQjtJQXFOZ0IsU0FBUztJQUNULGtCQUFrQixFQUFBOztBQXRObEM7SUF5TmdCLFNBQVM7SUFDVCxvQkFBb0IsRUFBQTs7QUExTnBDO0lBNk5nQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXLEVBQUE7O0FBaE8zQjtNQWtPb0IsV0FBVztNQUNYLFlBQVk7TUFDWixZQUFZO01BQ1osVUFBVSxFQUFBOztBQXJPOUI7TUF3T29CLFlBQVksRUFBQTs7QUF4T2hDO0lBNE9nQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBaFBoQztJQW1QZ0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVyxFQUFBOztBQXRQM0I7SUF5UGdCLFlBQVk7SUFDWixZQUFZLEVBQUE7O0FBMVA1QjtNQTRQb0IsYUFBYTtNQUNiLFlBQVk7TUFDWixvQkFBb0I7TUFDcEIsZUFBZSxFQUFBOztBQS9QbkM7SUFtUWdCLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7O0FBcFEvQjtJQXdRZ0IsZUFBZTtJQUNmLGVBQWUsRUFBQTs7QUF6US9CO0lBNFFnQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQTlRaEM7SUFpUmdCLGVBQWU7SUFDZixlQUFlLEVBQUE7O0FBbFIvQjtJQXFSZ0IsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVLEVBQUE7O0FBdlIxQjtJQTBSZ0Isa0JBQWtCLEVBQUE7O0FBRXRCO0lBNVJaO01BOFJvQixjQUFjLEVBQUE7SUE5UmxDO01BaVNvQixrQkFBa0IsRUFBQSxFQUNyQjs7QUFFTDtJQXBTWjtNQXNTb0IsVUFBVSxFQUFBO0lBdFM5QjtNQXlTb0Isa0JBQWtCLEVBQUEsRUFDckI7O0FBRUw7SUE1U1o7TUE4U29CLFVBQVUsRUFBQTtJQTlTOUI7TUFpVG9CLGtCQUFrQixFQUFBLEVBQ3JCOztBQWxUakI7RUF3VFksY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsNEJBQTRCLEVBQUE7O0FBM1R4QztFQThUWSxVQUFVO0VBQ1YsUUFBUTtFQUNSLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBalV0QjtFQXNVZ0IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQTVVN0I7RUFnVmdCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFwVmxDO0VBdVZnQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQWxXbEM7SUFvV29CLFlBQVksRUFBQTs7QUFwV2hDO0VBMFdRLFVBQVUsRUFBQTs7QUExV2xCO0lBNFdZLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQixFQUFBOztBQS9XN0I7TUFpWGdCLFVBQVU7TUFDVixZQUFZLEVBQUE7O0FBbFg1QjtJQXNYWSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0IsRUFBQTs7QUF6WGhDO01BMlhnQixTQUFTO01BQ1Qsb0JBQW9CO01BQ3BCLGNBQWM7TUFDZCxtQkFBbUIsRUFBQTs7QUE5WG5DO1FBZ1lvQixhQUFhLEVBQUE7O0FBaFlqQztRQW1Zb0IsU0FBUztRQUNULGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLDBCQUEwQjtRQUMxQixnQkFBZ0I7UUFDaEIsdUJBQXVCLEVBQUE7O0FBelkzQztRQWtab0IscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixVQUFVLEVBQUE7O0FBRWQ7UUF6WmhCO1VBMlp3QixjQUFjLEVBQUEsRUFDakI7O0FBRUw7UUE5WmhCO1VBZ2F3QixVQUFVLEVBQUEsRUFDYjs7QUFFTDtRQW5haEI7VUFxYXdCLFVBQVUsRUFBQSxFQUNiOztBQXRhckI7SUE0YWdCLGVBQWUsRUFBQTs7QUE1YS9CO0lBK2FnQixZQUFZLEVBQUE7O0FBL2E1QjtJQWtiZ0IsWUFBWSxFQUFBOztBQWxiNUI7SUFxYmdCLGFBQWEsRUFBQTs7QUFyYjdCO0lBd2JnQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQTFiaEM7TUE0Ym9CLGNBQWM7TUFDZCxXQUFXO01BQ1gsWUFBWSxFQUFBOztBQTliaEM7SUFrY2dCLGVBQWU7SUFDZixlQUFlLEVBQUE7O0FBbmMvQjtJQXNjZ0IsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVLEVBQUE7O0FBeGMxQjtJQTJjZ0Isa0JBQWtCLEVBQUE7O0FBRXRCO0lBN2NaO01BK2NvQixjQUFjLEVBQUE7SUEvY2xDO01Ba2RvQixrQkFBa0IsRUFBQSxFQUNyQjs7QUFFTDtJQXJkWjtNQXVkb0IsVUFBVSxFQUFBO0lBdmQ5QjtNQTBkb0Isa0JBQWtCLEVBQUEsRUFDckI7O0FBRUw7SUE3ZFo7TUErZG9CLFVBQVUsRUFBQTtJQS9kOUI7TUFrZW9CLGtCQUFrQixFQUFBLEVBQ3JCOztBQUtqQjtFQUNJLG9CQUFvQixFQUFBOztBQUR4QjtJQUdRLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQUx2QjtNQU9ZLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7O0FBVDVCO0lBY1EsZ0JBQWdCLEVBQUE7O0FBZHhCO0lBaUJRLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7O0FBbkIzQjtNQXFCWSxxQkFBcUI7TUFDckIscUJBQXFCO01BQ3JCLFVBQVU7TUFDVixrQkFBa0IsRUFBQTs7QUF4QjlCO01BMkJZLGtCQUNKLEVBQUE7O0FBQ0E7TUE3QlI7UUErQmdCLGNBQWMsRUFBQSxFQUNqQjs7QUFFTDtNQWxDUjtRQW9DZ0IsVUFBVSxFQUFBLEVBQ2I7O0FBRUw7TUF2Q1I7UUF5Q2dCLFVBQVUsRUFBQSxFQUNiOztBQTFDYjtNQTZDWSxZQUFZO01BQ1osV0FBVyxFQUFBOztBQTlDdkI7TUFpRFksV0FBVztNQUNYLFlBQVk7TUFDWixTQUFTLEVBQUE7O0FBbkRyQjtNQXNEWSw0QkFBNEIsRUFBQTs7QUF0RHhDO0lBMkRZLGdCQUFnQixFQUFBOztBQUk1QjtFQUVRLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBRWxCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWEsRUFBQTs7QUFFakI7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsa0JBQWEsRUFBQTs7QUFFakI7RUFDSSx5QkFBeUI7RUFDekIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5teS1jYXRlZ29yeS1jbGFzcyB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cbi5teS1jYXRlZ29yeS1jbGFzcyBpbWcge1xuICAgIGhlaWdodDogMTcwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbi5teS1jYXRlZ29yeS1jbGFzcyBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubXktY2F0ZWdvcnktY2xhc3MgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbn1cbi5sYXRlc3RfcHJvZHVjdF9oZWFkaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzU5ZDBmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLnByaWNlIHtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG4uYmxvY2tzIHtcbiAgICAuYmFubmVyX2Jsb2NrIHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgLmJhbm5lci1zY3JvbGwge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweCAwIDVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTMlO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWc6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHggMCAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXItZ3JpZCB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyB7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbCB7XG4gICAgICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZmxvYXRpbmctaGVhZGVyIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgICAgICAgICAgIC5iYW5uZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zY3JvbGxtZW51IHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gICAgLnNjcm9sbG1lbnUgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy9jb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICAubGVmdF9mbG9hdGluZyB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDQ1JTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy9sZWZ0OiAwO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1JTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudG9wX2xlZnQge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICB9XG4gICAgLnRvcF9jZW50ZXIge1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAudG9wX3JpZ2h0IHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICAubm9uZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5wcm9kdWN0LWJsb2NrIHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgLnByb2R1Y3Qtc2Nyb2xsIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAuc2Nyb2xsZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA0cHggMTVweCA0cHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvZHVjdC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvL2NvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MiU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByaWNlLXJlZ3VsYXIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgLy9jb2xvcjogIzUzNTc2NjsgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA2cHggNnB4IDZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmxvYXRpbmctaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gICAgICAgICAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnByb2R1Y3QtZ3JpZCB7XG4gICAgICAgICAgICAud2lzaGxpc3QtYnV0dG9uLWdyaWQxIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjRyZW0gLTVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53aXNobGlzdC1idXR0b24tZ3JpZDIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNHJlbSAtNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDgwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgLy9jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMGVtO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUyJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgLy9jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLW5hbWUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm8td3JhcDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2UtZGVsZXRlIHtcbiAgICAgICAgICAgICAgICAvL2NvbG9yOiAjNTM1NzY2O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA3LjVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2UtcmVndWxhciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDcuNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMge1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcbiAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2w6bnRoLWNoaWxkKDJuKzApIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2wge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbDpudGgtY2hpbGQoM24rMCkge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2w6bnRoLWNoaWxkKDRuKzApIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICAgICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbDpudGgtY2hpbGQoNW4rMCkge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5mbGFzaF9zYWxlIHtcbiAgICAgICAgLmZsb2F0aW5nLWhlYWRlciB7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0NSUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubGVmdF9mbG9hdGluZyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgdG9wOiAxNSU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ4JTtcbiAgICAgICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgIH1cbiAgICAgICAgLmZsYXNoLWl0ZW0tbmFtZSB7XG4gICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIC8vY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDRweCA4cHggNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGF5IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhdGVnb3J5IHtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgLmZsb2F0aW5nLWhlYWRlciB7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MyU7XG4gICAgICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY2F0ZWdvcnktc2xpZGVyLXNjcm9sbCwgLmNhdGVnb3J5LXNjcm9sbCB7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC5zY3JvbGxtZW51MiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgLm5vbmUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDRweCAwIDRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIC8vaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAvL3dpZHRoOiAyMHZ3O1xuICAgICAgICAgICAgICAgICAgICAvL21heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9kdWN0LWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNhdGVnb3J5LXNsaWRlci1ncmlkLCAuY2F0ZWdvcnktZ3JpZCB7XG4gICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtbWQgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5vbmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bzsgLy9wYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIHtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbCB7XG4gICAgICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyAuY29sOm50aC1jaGlsZCgybiswKSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyAuY29sIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2w6bnRoLWNoaWxkKDNuKzApIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2wge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucm93LnVubGltaXRlZC1pdGVtcyAuY29sOm50aC1jaGlsZCg0biswKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICAgICAgICAgICAgLnJvdy51bmxpbWl0ZWQtaXRlbXMgLmNvbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yb3cudW5saW1pdGVkLWl0ZW1zIC5jb2w6bnRoLWNoaWxkKDVuKzApIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5yZWxhdGVkLXByb2R1Y3RzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAucHJpY2Uge1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgLy9jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAuc3BlY2lhbC1wcmljZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJlbGF0ZWQtaXRlbS1uYW1lIHtcbiAgICAgICAgLy9wYWRkaW5nOiAxNnB4IDAgMCAwOyAvL2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMTZweCAwO1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIC5wcm9kdWN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2R1Y3Q6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLnByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgLnByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgICAgICAgLnByb2R1Y3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuYm9yZGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMC41NXB4IHNvbGlkICNmNWY1ZjU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24taGVhZGVyIHtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbn1cbi5zdG9jayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTRweDtcbiAgICBsZWZ0OiAtNnB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0zOXB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIGhlaWdodDogMTlweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4ub2ZmZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogMzZweDtcbiAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmlubmVyLXNjcm9sbCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tcmVmcmVzaGVyIHtcbiAgICB6LWluZGV4OiAxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/product */ "./src/app/data/product.ts");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");














var HomePage = /** @class */ (function () {
    function HomePage(config, api, splashScreen, platform, translateService, data, settings, product, loadingController, router, navCtrl, route, oneSignal, nativeStorage) {
        this.config = config;
        this.api = api;
        this.splashScreen = splashScreen;
        this.platform = platform;
        this.translateService = translateService;
        this.data = data;
        this.settings = settings;
        this.product = product;
        this.loadingController = loadingController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.oneSignal = oneSignal;
        this.nativeStorage = nativeStorage;
        this.tempProducts = [];
        this.filter = {};
        this.hasMoreItems = true;
        this.slideOpts = { effect: 'flip', autoplay: true, parallax: true, loop: true, lazy: true };
        this.filter.page = 1;
        this.filter.status = 'publish';
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.nativeStorage.getItem('blocks').then(function (data) {
            _this.data.blocks = data.blocks;
            _this.data.categories = data.categories;
            _this.data.mainCategories = _this.data.categories.filter(function (item) { return item.parent == 0; });
            _this.settings.pages = _this.data.blocks.pages;
            _this.settings.settings = _this.data.blocks.settings;
            _this.settings.dimensions = _this.data.blocks.dimensions;
            _this.settings.currency = _this.data.blocks.settings.currency;
            _this.settings.calc(_this.platform.width());
            if (_this.settings.colWidthLatest == 4)
                _this.filter.per_page = 15;
            //this.settings.theme = this.data.blocks.theme;
            _this.splashScreen.hide();
        }, function (error) { return console.error(error); });
        this.nativeStorage.getItem('settings').then(function (data) {
            if (data.lang) {
                _this.config.lang = data.lang;
                _this.translateService.setDefaultLang(data.lang);
                if (data.lang == 'ar') {
                    document.documentElement.setAttribute('dir', 'rtl');
                }
            }
        }, function (error) { return console.error(error); });
        this.getBlocks();
    };
    HomePage.prototype.getCart = function () {
        var _this = this;
        this.api.postItem('cart').subscribe(function (res) {
            _this.cart = res;
            _this.data.updateCart(_this.cart.cart_contents);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.getBlocks = function () {
        var _this = this;
        this.api.postItem('keys').subscribe(function (res) {
            _this.data.blocks = res;
            if (_this.data.blocks.user != undefined)
                _this.settings.user = _this.data.blocks.user.data;
            //this.settings.theme = this.data.blocks.theme;
            _this.settings.pages = _this.data.blocks.pages;
            if (_this.data.blocks.user)
                _this.settings.reward = _this.data.blocks.user.data.points_vlaue;
            if (_this.data.blocks.languages)
                _this.settings.languages = Object.keys(_this.data.blocks.languages).map(function (i) { return _this.data.blocks.languages[i]; });
            _this.settings.settings = _this.data.blocks.settings;
            _this.settings.dimensions = _this.data.blocks.dimensions;
            _this.settings.currency = _this.data.blocks.settings.currency;
            if (_this.data.blocks.categories) {
                _this.data.categories = _this.data.blocks.categories.filter(function (item) { return item.name != 'Uncategorized'; });
                _this.data.mainCategories = _this.data.categories.filter(function (item) { return item.parent == 0; });
            }
            _this.settings.calc(_this.platform.width());
            if (_this.settings.colWidthLatest == 4)
                _this.filter.per_page = 15;
            _this.splashScreen.hide();
            _this.getCart();
            _this.processOnsignal();
            if (_this.data.blocks.user) {
                _this.settings.customer.id = _this.data.blocks.user.ID;
                if (_this.data.blocks.user.allcaps.dc_vendor || _this.data.blocks.user.allcaps.seller || _this.data.blocks.user.allcaps.wcfm_vendor) {
                    _this.settings.vendor = true;
                }
            }
            var _loop_1 = function (item) {
                if (_this.data.blocks.blocks[item].block_type == 'flash_sale_block') {
                    _this.data.blocks.blocks[item].interval = setInterval(function () {
                        var countDownDate = new Date(_this.data.blocks.blocks[item].sale_ends).getTime();
                        var now = new Date().getTime();
                        var distance = countDownDate - now;
                        _this.data.blocks.blocks[item].days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        _this.data.blocks.blocks[item].hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        _this.data.blocks.blocks[item].minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        _this.data.blocks.blocks[item].seconds = Math.floor((distance % (1000 * 60)) / 1000);
                        if (distance < 0) {
                            clearInterval(_this.data.blocks.blocks[item].interval);
                            _this.data.blocks.blocks[item].hide = true;
                        }
                    }, 1000);
                }
            };
            var filter;
            for (var item in _this.data.blocks.blocks) {
                _loop_1(item);
            }
            if (_this.data.blocks.settings.show_latest) {
                _this.api.getItem('products', _this.filter).subscribe(function (res) {
                    _this.data.products = res;
                }, function (err) {
                    console.log(err);
                });
            }
            if (_this.data.blocks.user) {
                _this.api.postItem('get_wishlist').subscribe(function (res) {
                    for (var item in res) {
                        _this.settings.wishlist[res[item].id] = res[item].id;
                    }
                }, function (err) {
                    console.log(err);
                });
            }
            _this.nativeStorage.setItem('blocks', {
                blocks: _this.data.blocks,
                categories: _this.data.categories
            }).then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
            /* Product Addons */
            if (_this.data.blocks.settings.switchAddons) {
                _this.api.getAddonsList('product-add-ons').subscribe(function (res) {
                    _this.settings.addons = res;
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.goto = function (item) {
        if (item.description == 'category')
            this.navCtrl.navigateForward('/tabs/home/products/' + item.url);
        else if (item.description == 'product')
            this.navCtrl.navigateForward('/tabs/home/product/' + item.url);
        else if (item.description == 'post')
            this.navCtrl.navigateForward('/tabs/home/post/' + item.url);
    };
    HomePage.prototype.getProduct = function (item) {
        this.product.product = item;
        this.navCtrl.navigateForward('/tabs/home/product/' + item.id);
    };
    HomePage.prototype.getSubCategories = function (id) {
        var results = this.data.categories.filter(function (item) { return item.parent === parseInt(id); });
        return results;
    };
    HomePage.prototype.getCategory = function (id) {
        this.navCtrl.navigateForward('/tabs/home/products/' + id);
    };
    HomePage.prototype.loadData = function (event) {
        var _this = this;
        this.filter.page = this.filter.page + 1;
        this.api.getItem('products', this.filter).subscribe(function (res) {
            _this.tempProducts = res;
            _this.data.products.push.apply(_this.data.products, _this.tempProducts);
            event.target.complete();
            if (_this.tempProducts.length == 0)
                _this.hasMoreItems = false;
        }, function (err) {
            event.target.complete();
        });
        console.log('Done');
    };
    HomePage.prototype.processOnsignal = function () {
        var _this = this;
        this.oneSignal.startInit(this.data.blocks.settings.onesignal_app_id, this.data.blocks.settings.google_project_id);
        //this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(function () {
            //do something when notification is received
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (result) {
            if (result.notification.payload.additionalData.category) {
                _this.navCtrl.navigateForward('/tabs/home/products/' + result.notification.payload.additionalData.category);
            }
            else if (result.notification.payload.additionalData.product) {
                _this.navCtrl.navigateForward('/tabs/home/product/' + result.notification.payload.additionalData.product);
            }
            else if (result.notification.payload.additionalData.post) {
                _this.navCtrl.navigateForward('/tabs/home/post/' + result.notification.payload.additionalData.post);
            }
            else if (result.notification.payload.additionalData.order) {
                _this.navCtrl.navigateForward('/tabs/account/orders/order/' + result.notification.payload.additionalData.order);
            }
        });
        this.oneSignal.endInit();
    };
    HomePage.prototype.doRefresh = function (event) {
        this.filter.page = 1;
        this.getBlocks();
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_11__["Config"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeStorage"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/post/post.page.html":
/*!*************************************!*\
  !*** ./src/app/post/post.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios' >\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"post?.post_title\">\n      {{post.post_title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"post\">\n  <div class=\"spinner\" *ngIf=\"!post\"><ion-spinner> </ion-spinner></div>\n    <ion-card *ngIf=\"post\">\n      <ion-img alt=\"\" *ngIf=\"post.image\" src=\"{{post.image}}\"></ion-img>\n      <ion-card-header>\n        <ion-card-title>{{post.post_title}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n          <div [innerHTML]=\"post.post_content\"></div>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/post/post.page.scss":
/*!*************************************!*\
  !*** ./src/app/post/post.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post ion-card {\n  margin: 0;\n  box-shadow: none; }\n\n.post h2 {\n  margin: 20px 0 10px 16px;\n  font-size: 18px; }\n\n.post h3 {\n  font-size: 15px;\n  margin: 5px 16px 8px 16px;\n  line-height: 1.6; }\n\n.post p {\n  line-height: 1.6;\n  text-indent: 0px;\n  font-size: 14px;\n  text-align: justify;\n  margin: 14px 16px 16px;\n  font-weight: 500; }\n\n.post ion-img {\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvcG9zdC9wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFIeEI7RUFNUSx3QkFBd0I7RUFDeEIsZUFBZSxFQUFBOztBQVB2QjtFQVVRLGVBQWU7RUFDZix5QkFBeUI7RUFFekIsZ0JBQWdCLEVBQUE7O0FBYnhCO0VBZ0JRLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBckJ4QjtFQXdCUSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3Bvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3Qge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwIDEwcHggMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbWFyZ2luOiA1cHggMTZweCA4cHggMTZweDtcbiAgICAgICAgLy9jb2xvcjogIzIyMjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgIHRleHQtaW5kZW50OiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgbWFyZ2luOiAxNHB4IDE2cHggMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgaW9uLWltZyB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/post/post.page.ts":
/*!***********************************!*\
  !*** ./src/app/post/post.page.ts ***!
  \***********************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/settings */ "./src/app/data/settings.ts");






var PostPage = /** @class */ (function () {
    function PostPage(api, router, navCtrl, settings, route) {
        this.api = api;
        this.router = router;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.route = route;
    }
    PostPage.prototype.getPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('page_content', {
                            page_id: this.id
                        }).subscribe(function (res) {
                            _this.post = res;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getPost();
    };
    PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.page.html */ "./src/app/post/post.page.html"),
            styles: [__webpack_require__(/*! ./post.page.scss */ "./src/app/post/post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PostPage);
    return PostPage;
}());



/***/ }),

/***/ "./src/app/product/md5.ts":
/*!********************************!*\
  !*** ./src/app/product/md5.ts ***!
  \********************************/
/*! exports provided: md5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "md5", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};


/***/ }),

/***/ "./src/app/product/product.page.html":
/*!*******************************************!*\
  !*** ./src/app/product/product.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios' class=\"product-header\" >\n   <ion-toolbar color=\"{{settings.theme.header}}\">\n      <ion-buttons slot=\"start\">\n         <ion-back-button defaultHref=\"/tabs/categories/products\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n         {{product?.name}}\n      </ion-title>\n      <ion-buttons slot=\"end\" (click)=\"share()\">\n         <ion-icon name=\"share\" style=\"margin-right: 8px;font-size: 23px\"></ion-icon>\n      </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n<ion-content class=\"product\">\n   <div class=\"spinner\" *ngIf=\"!product.id\">\n      <ion-spinner> </ion-spinner>\n   </div>\n   <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"settings.settings?.enable_product_chat\">\n      <a href=\"https://wa.me/{{settings.settings?.whatsapp_number}}\">\n         <ion-fab-button size=\"small\" color=\"whatsapp\">\n            <ion-icon name=\"logo-whatsapp\"></ion-icon>\n         </ion-fab-button>\n      </a>\n   </ion-fab>\n   <div *ngIf=\"product.id\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"!product.image\" dir=\"{{settings.dir}}\">\n      <ion-slide *ngFor=\"let item of product.images\">\n         <img src=\"{{item.src}}\"/>\n      </ion-slide>\n      </ion-slides>\n      <div *ngIf=\"product.image\">\n         <ion-img src=\"{{product.image}}\"></ion-img>\n      </div>\n      <ion-button color=\"danger\" class=\"stock\" *ngIf=\"product.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n      <div class=\"product-details\">\n         <ion-item lines=\"none\">\n            <ion-label text-wrap>\n               {{product.name}}\n            </ion-label>\n            <ion-icon name=\"heart-empty\" class=\"heartempty onpress\" slot=\"end\" (click)=\"settings.addToWishlist(product.id)\" *ngIf=\"!settings.wishlist[product.id]\"></ion-icon>\n            <ion-icon name=\"md-heart\" class=\"heartempty onpress\" slot=\"end\" color=\"{{settings.theme.button}}\" (click)=\"settings.removeFromWishlist(product.id)\" *ngIf=\"settings.wishlist[product.id]\"></ion-icon>\n         </ion-item>\n\n         <!--WCMP-->\n         <ion-chip (click)='getDetail(product.vendor)' *ngIf=\"product.vendor && product.store_name\">\n         <ion-icon name=\"person\"></ion-icon>\n         <ion-label>{{\"SoldBy\" | translate }} - {{product.store_name}}</ion-label>\n         </ion-chip>\n         <ion-item lines=\"none\">\n            <ion-label *ngIf=\"product.sale_price\">\n               <span class=\"price\">{{product.sale_price | currency:settings.currency:symbol:'1.2-2'}}</span><span class=\"special-price\"><del>{{product.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span>\n            </ion-label>\n            <ion-label *ngIf=\"!product.sale_price\">\n               <span class=\"price\">{{product.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n            </ion-label>\n         </ion-item>\n         <div class=\"variation-block\" *ngIf=\"variations.length\">\n            <div *ngFor=\"let attribute of usedVariationAttributes\" class=\"variation-product\">\n               <h6 style=\"margin-left: 16px;font-size: 14px;\">{{\"Select\" | translate}} {{attribute.name}}</h6>\n               <div *ngIf=\"attribute.options.length\" class=\"option-box\">\n                  <ion-button class=\"option-button\" fill=\"outline\" color=\"{{settings.theme.button}}\" *ngFor=\"let option of attribute.options\" (click)=\"chooseVariation(attribute, option)\" [ngClass]=\"{'selected-option': attribute.selected == option}\">{{option}}</ion-button>\n               </div>\n            </div>\n         </div>\n\n         <div class=\"grouped-block\" *ngIf=\"groupedProducts.length\">\n            <div *ngFor=\"let item of groupedProducts\" class=\"variation-product\">\n               <ion-input style=\"margin-left: 16px;margin-right: 16px;\" type=\"number\" [(ngModel)]=\"item.selected\" value=\"0\" placeholder=\"Quantity\"></ion-input>\n               <h6 style=\"margin-left: 16px;font-size: 14px;\">{{item.name}}</h6>\n            </div>\n         </div>\n\n         <!-- Product Addons -->\n         <div *ngIf=\"addonsList.length\">\n            <div *ngFor=\"let item of addonsList; let i = index\">\n               <ion-item lines=\"none\" *ngIf=\"item.description !== ''\"><ion-label>{{item.description}}</ion-label></ion-item>\n               <ion-item *ngIf=\"item.type == 'checkbox' || item.type == 'multiple_choice' || item.type == 'radiobutton'  || item.type == 'select'\" class=\"addons\" lines=\"none\">\n                  <ion-label>{{item.name}}</ion-label>\n                  <ion-select [(ngModel)]=\"item.selected\" multiple=\"true\" *ngIf=\"(item.type == 'checkbox' || item.type == 'multiple_choice') && item.options.length\">\n                  <ion-select-option *ngFor=\"let option of item.options\" value=\"{{option.label}}\">{{option.label}}<span *ngIf=\"option.price\"> + {{option.price | currency:settings.currency:true:'1.2-2'}}</span></ion-select-option>\n                  </ion-select>\n                  <ion-select [(ngModel)]=\"item.selected\" *ngIf=\"item.type == 'radiobutton' && item.options.length\">\n                  <ion-select-option *ngFor=\"let option of item.options\" value=\"{{option.label}}\">{{option.label}}<span *ngIf=\"option.price\"> + {{option.price | currency:settings.currency:true:'1.2-2'}}</span></ion-select-option>\n                  </ion-select>\n                  <ion-select [(ngModel)]=\"item.selected\" *ngIf=\"item.type == 'select' && item.options.length\">\n                  <ion-select-option *ngFor=\"let option of item.options\" value=\"{{option.label}}\">{{option.label}}<span *ngIf=\"option.price\"> + {{option.price | currency:settings.currency:true:'1.2-2'}}</span></ion-select-option>\n                  </ion-select>\n               </ion-item>\n               <div style=\"padding: 0 16px;\" *ngFor=\"let option of item.options; let j = index\">\n                  <div *ngIf=\"item.type == 'custom_textarea'\">\n                  <textarea [(ngModel)]=\"item.options[j].input\" placeholder=\"{{item.name}}\" type =\"text\" style=\"width: 100%; height: 80px;\"></textarea>\n                  </div>\n               </div>\n            </div>\n            <div *ngFor=\"let item of addonsList; let i = index\">\n               <div *ngFor=\"let option of item.options; let j = index\">\n                  <ion-item *ngIf=\"item.type == 'custom' && item.options.length\" class=\"addon-options\">\n                     <ion-label floating>{{option.label}} {{option.price}}</ion-label>\n                     <ion-input required type=\"text\" name=\"data\" [(ngModel)]=\"item.options[j].input\">\n                     </ion-input>\n                  </ion-item>\n               </div>\n            </div>\n            <div *ngFor=\"let item of addonsList; let i = index\">\n               <ion-item *ngIf=\"item.type == 'custom_text'\" class=\"addon-options\">\n                  <ion-label floating>{{item.name}} {{item.price}}</ion-label>\n                  <ion-input required type=\"text\" name=\"data\" [(ngModel)]=\"item.input\">\n                  </ion-input>\n               </ion-item>\n            </div>\n         </div>\n\n         <ion-item lines=\"none\" *ngIf=\"product.showPoints\">\n            <ion-label>Earn {{product.showPoints}} Royalty Points</ion-label>\n         </ion-item>\n         <ion-button *ngIf=\"product.type != 'external'\" class=\"add-to-cart-button\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" [disabled]=\"disableButton || product.stock_status == 'outofstock'\" (click)=\"addToCart()\">{{\"ADD TO CART\" | translate}}</ion-button>\n         <ion-button *ngIf=\"product.type == 'external'\" class=\"add-to-cart-button\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" [disabled]=\"disableButton || product.stock_status == 'outofstock'\" (click)=\"buyExternalProduct(product.id)\">{{\"BUY NOW\" | translate}}</ion-button>\n         <ion-item *ngIf=\"product.short_description\">\n            <ion-label text-justify text-wrap [innerHTML]=\"product.short_description\">\n            </ion-label>\n         </ion-item>\n         <ion-item *ngIf=\"product.description\">\n            <ion-label text-justify text-wrap [innerHTML]=\"product.description\">\n            </ion-label>\n         </ion-item>\n      </div>\n      <div *ngIf=\"relatedProducts?.length\" class=\"related-products\">\n         <ion-list-header>\n            <ion-label>{{\"More like this\" | translate}}</ion-label>\n         </ion-list-header>\n         <div class=\"scroll-related-products\">\n            <div class=\"product\" *ngFor=\"let item of relatedProducts\" [style.width.px]=\"settings.dimensions.productSliderWidth\">\n            <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n               <ion-img (click)=\"goToProduct(item)\" alt=\"\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" src=\"{{item?.images[0]?.src}}\"></ion-img><ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n               <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\n               <ion-card-header (click)=\"goToProduct(item)\">\n                  <ion-card-subtitle mode=\"md\">{{item.name}}</ion-card-subtitle>\n               </ion-card-header>\n               <ion-card-content (click)=\"goToProduct(item)\">\n                  <p class=\"price\">\n                     <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                     <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n                  </p>\n               </ion-card-content>\n            </ion-card>\n         </div>\n      </div>\n   </div>\n   <div *ngIf=\"upsellProducts?.length\" class=\"related-products\">\n      <ion-list-header>\n         <ion-label>{{\"You might love\" | translate}}</ion-label>\n      </ion-list-header>\n      <div class=\"scroll-related-products\">\n         <div class=\"product\" *ngFor=\"let item of upsellProducts\" [style.width.px]=\"settings.dimensions.productSliderWidth\">\n         <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n            <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" src=\"{{item?.images[0]?.src}}\"></ion-img>\n            <ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n            <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon> \n            <ion-card-header (click)=\"goToProduct(item)\">\n               <ion-card-subtitle mode=\"md\">{{item.name}}</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content (click)=\"goToProduct(item)\">\n               <p class=\"price\">\n                  <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                  <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n               </p>\n            </ion-card-content>\n         </ion-card>\n      </div>\n   </div>\n   </div>\n   <div *ngIf=\"crossSellProducts?.length\" class=\"related-products\">\n      <ion-list-header>\n         <ion-label>{{\"Recommended\" | translate}}</ion-label>\n      </ion-list-header>\n      <div class=\"scroll-related-products\">\n         <div class=\"product\" *ngFor=\"let item of crossSellProducts\" [style.width.px]=\"settings.dimensions.productSliderWidth\">\n         <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n            <ion-img alt=\"\" (click)=\"goToProduct(item)\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" src=\"{{item?.images[0]?.src}}\"></ion-img><ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n            <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\n            <ion-card-header (click)=\"goToProduct(item)\">\n               <ion-card-subtitle mode=\"md\">{{item.name}}</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content (click)=\"goToProduct(item)\">\n               <p class=\"price\">\n                  <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                  <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n               </p>\n            </ion-card-content>\n         </ion-card>\n      </div>\n   </div>\n   </div>\n   <ion-item (click)=\"getReviewsPage()\" *ngIf=\"reviews?.length\" class=\"review-item ion-activatable\">\n   <ion-label>{{reviews.length}} {{\"Customer Reviews\" | translate}}</ion-label>\n   <ion-icon name=\"ios-arrow-forward\" item-end></ion-icon>\n   </ion-item>\n   <div *ngFor=\"let item of reviews\">\n      <ion-item lines=\"none\">\n         <ion-avatar slot=\"start\">\n            <ion-img alt=\"\" src=\"https://www.gravatar.com/avatar/{{item.avatar}}\"></ion-img>\n         </ion-avatar>\n         <ion-label>\n            {{item.name}}\n            <span class=\"rating review-star\">\n            <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 1, half: item.rating == 0.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 2, half: item.rating == 1.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 3, half: item.rating == 2.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 4, half: item.rating == 3.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 5, half: item.rating == 4.5}\">&#x2605;</span></span>\n            <p>{{item.date_created | date:'MMM d, y hh:mm a'}}</p>\n         </ion-label>\n      </ion-item>\n      <ion-item>\n         <ion-label>\n            <p text-wrap>{{item.review}}</p>\n         </ion-label>\n      </ion-item>\n   </div>\n   </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/product/product.page.scss":
/*!*******************************************!*\
  !*** ./src/app/product/product.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-header .badge {\n  position: absolute;\n  margin-top: -10px;\n  margin-left: 9px; }\n\n.product-header .cart-icon {\n  font-size: 30px; }\n\nion-card-title {\n  font-size: 40px; }\n\nion-card-header {\n  padding: 10px; }\n\nion-card-content {\n  padding: 0; }\n\nion-card-content .price {\n    padding: 0 10px 10px 10px;\n    font-weight: bold;\n    font-size: 14px; }\n\nion-card-content .price .special-price {\n      padding-left: 5px;\n      font-size: 10px;\n      font-weight: 300; }\n\nion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small; }\n\n.product .product-details ion-chip {\n  margin-left: 10px; }\n\n.product .price {\n  font-weight: bold;\n  font-size: 16px; }\n\n.product .special-price {\n  padding-left: 5px;\n  font-size: 14px;\n  font-weight: 400; }\n\n.product .add-to-cart-button {\n  margin: 16px; }\n\n.product .variation-block {\n  margin: 13px 0px 0 0px; }\n\n.product .variation-block .variation-product {\n    margin-bottom: 5px; }\n\n.product .variation-block .variation-product ion-label {\n      color: #000; }\n\n.product .variation-block .variation-product .item {\n      border: 2px solid #fff;\n      background-color: #f9f9f9; }\n\n.product .variation-block .variation-product ion-select {\n      font-size: 12px;\n      color: #ffa41c; }\n\n.product .variation-block .variation-product .option-box {\n      padding: 0 10px; }\n\n.product .variation-block .variation-product .option-box .option-button {\n        color: #111111;\n        height: 1.8em;\n        --border-width: 1px;\n        font-weight: 400;\n        --border-radius: 25px;\n        font-size: 12px;\n        opacity: 0.5; }\n\n.product .variation-block .variation-product .option-box .selected-option {\n        --border-width: 2px;\n        font-weight: 600;\n        opacity: 1; }\n\n.product .variation-block .variation-product .option-box textarea {\n        border: 1px solid #f4f4f4;\n        border-radius: 3px;\n        width: 100%; }\n\n.product .related-products .price {\n  padding: 0 10px 10px 10px;\n  font-weight: bold;\n  font-size: 14px; }\n\n.product .related-products .price .special-price {\n    padding-left: 5px;\n    font-size: 10px;\n    font-weight: 300; }\n\n.product .related-products .related-item-name {\n  padding: 16px 0 0 0;\n  font-weight: 400; }\n\n.product .related-products .scroll-related-products {\n  padding: 16px 0;\n  overflow: auto;\n  white-space: nowrap; }\n\n.product .related-products .scroll-related-products .product {\n    display: inline-block;\n    text-decoration: none;\n    width: 50%;\n    margin: 0 0 0 10px; }\n\n.product .related-products .scroll-related-products .product:last-child {\n    margin-right: 10px; }\n\n@media (min-width: 481px) and (max-width: 768px) {\n    .product .related-products .scroll-related-products .product {\n      width: 33.333%; } }\n\n@media (min-width: 769px) and (max-width: 1024px) {\n    .product .related-products .scroll-related-products .product {\n      width: 25%; } }\n\n@media (min-width: 1025px) {\n    .product .related-products .scroll-related-products .product {\n      width: 20%; } }\n\n.product .related-products .scroll-related-products ion-img {\n    height: auto;\n    width: 100%; }\n\n.product .related-products .scroll-related-products ion-card {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    margin-left: 2px; }\n\n.product .review-star {\n  float: right; }\n\n.product .review-star .star-icon {\n    color: #f7f7f7;\n    font-size: 1em;\n    position: relative; }\n\n.product .review-star .star-icon.full:before {\n    color: #ffce00;\n    content: '\\2605';\n    position: absolute;\n    left: 0; }\n\n.product .review-star .star-icon.half:before {\n    color: #ffce00;\n    content: '\\2605';\n    position: absolute;\n    left: 0;\n    width: 50%;\n    overflow: hidden; }\n\n@-moz-document url-prefix() {\n  .product .review-star .star-icon {\n    font-size: 50px;\n    line-height: 34px; } }\n\n.onpress {\n  white-space: nowrap;\n  transform: scale(1, 1);\n  transition-timing-function: ease-in;\n  transition: 0.3s; }\n\n.onpress:active {\n  transition-timing-function: ease-out;\n  transition: .3s;\n  transform: scale(2, 2); }\n\n.review-item h2 {\n  font-size: 18px;\n  width: 100%; }\n\n.stock {\n  margin-left: 0px;\n  z-index: 5;\n  position: absolute;\n  --box-shadow: none;\n  left: 0px;\n  top: 80px;\n  width: 73px;\n  font-size: 10px;\n  height: 24px;\n  --border-radius: 0 10px 10px 0; }\n\n.grouped-block {\n  margin-left: 16px;\n  margin-right: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBSnhCO0VBT1EsZUFBZSxFQUFBOztBQUd2QjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksVUFBVSxFQUFBOztBQURkO0lBR1EseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUVqQixlQUFlLEVBQUE7O0FBTnZCO01BU1ksaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTs7QUFJNUI7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBR1ksaUJBQWlCLEVBQUE7O0FBSDdCO0VBT1EsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFSdkI7RUFXUSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQWJ4QjtFQWdCUSxZQUFZLEVBQUE7O0FBaEJwQjtFQW1CUSxzQkFBc0IsRUFBQTs7QUFuQjlCO0lBc0JZLGtCQUFrQixFQUFBOztBQXRCOUI7TUF3QmdCLFdBQVcsRUFBQTs7QUF4QjNCO01BMkJnQixzQkFBc0I7TUFDdEIseUJBQXlCLEVBQUE7O0FBNUJ6QztNQStCZ0IsZUFBZTtNQUNmLGNBQWMsRUFBQTs7QUFoQzlCO01BbUNnQixlQUFlLEVBQUE7O0FBbkMvQjtRQXFDb0IsY0FBYztRQUNkLGFBQWE7UUFDYixtQkFBZTtRQUNmLGdCQUFnQjtRQUNoQixxQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLFlBQVksRUFBQTs7QUEzQ2hDO1FBOENvQixtQkFBZTtRQUNmLGdCQUFnQjtRQUNoQixVQUFVLEVBQUE7O0FBaEQ5QjtRQW1Eb0IseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixXQUFXLEVBQUE7O0FBckQvQjtFQTREWSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBRWpCLGVBQWUsRUFBQTs7QUEvRDNCO0lBa0VnQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQXBFaEM7RUF3RVksbUJBQW1CO0VBRW5CLGdCQUFnQixFQUFBOztBQTFFNUI7RUE2RVksZUFBZTtFQUVmLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFoRi9CO0lBa0ZnQixxQkFBcUI7SUFFckIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixrQkFBa0IsRUFBQTs7QUF0RmxDO0lBeUZnQixrQkFDSixFQUFBOztBQUNBO0lBM0ZaO01BNkZvQixjQUFjLEVBQUEsRUFDakI7O0FBRUw7SUFoR1o7TUFrR29CLFVBQVUsRUFBQSxFQUNiOztBQUVMO0lBckdaO01BdUdvQixVQUFVLEVBQUEsRUFDYjs7QUF4R2pCO0lBMkdnQixZQUFZO0lBQ1osV0FBVyxFQUFBOztBQTVHM0I7SUErR2dCLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULGdCQUFnQixFQUFBOztBQWxIaEM7RUF1SFEsWUFBWSxFQUFBOztBQXZIcEI7SUF5SFksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTs7QUEzSDlCO0lBOEhZLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLE9BQU8sRUFBQTs7QUFqSW5CO0lBb0lZLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBM0lSO0lBNklnQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUEsRUFDcEI7O0FBSWI7RUFDSSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLHNCQUFzQixFQUFBOztBQUUxQjtFQUVRLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR25CO0VBQ0ksZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWE7RUFDYixTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLDhCQUFnQixFQUFBOztBQUVwQjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1oZWFkZXIge1xuICAgIC5iYWRnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgfVxuICAgIC5jYXJ0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufVxuaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLnByaWNlIHtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIC8vY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xuICAgICAgICAgICAgLy9jb2xvcjogIzg2ODY4NjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIC8vY29sb3I6IGJsYWNrO1xufVxuLnByb2R1Y3Qge1xuICAgIC5wcm9kdWN0LWRldGFpbHMge1xuICAgICAgICBpb24tY2hpcCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJpY2Uge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuc3BlY2lhbC1wcmljZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5hZGQtdG8tY2FydC1idXR0b24ge1xuICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgfVxuICAgIC52YXJpYXRpb24tYmxvY2sge1xuICAgICAgICBtYXJnaW46IDEzcHggMHB4IDAgMHB4O1xuICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLnZhcmlhdGlvbi1wcm9kdWN0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZhNDFjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9wdGlvbi1ib3gge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgICAgICAub3B0aW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTExMTExO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOGVtO1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWQtb3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucmVsYXRlZC1wcm9kdWN0cyB7XG4gICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAvL2NvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xuICAgICAgICAgICAgICAgIC8vY29sb3I6ICM4Njg2ODY7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnJlbGF0ZWQtaXRlbS1uYW1lIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMCAwIDA7XG4gICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgICAgICAuc2Nyb2xsLXJlbGF0ZWQtcHJvZHVjdHMge1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmY7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAucHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIC8vY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2R1Y3Q6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIC5wcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgICAgLnByb2R1Y3Qge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICAgICAgICAgICAgICAucHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucmV2aWV3LXN0YXIge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIC5zdGFyLWljb24ge1xuICAgICAgICAgICAgY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuc3Rhci1pY29uLmZ1bGw6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZjZTAwO1xuICAgICAgICAgICAgY29udGVudDogJ1xcMjYwNSc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdGFyLWljb24uaGFsZjpiZWZvcmUge1xuICAgICAgICAgICAgY29sb3I6ICNmZmNlMDA7XG4gICAgICAgICAgICBjb250ZW50OiAnXFwyNjA1JztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICAgICAgLnN0YXItaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLm9ucHJlc3Mge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLm9ucHJlc3M6YWN0aXZlIHtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMiwgMik7XG59XG4ucmV2aWV3LWl0ZW0ge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4uc3RvY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgei1pbmRleDogNTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDgwcHg7XG4gICAgd2lkdGg6IDczcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG59XG4uZ3JvdXBlZC1ibG9jayB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/product/product.page.ts":
/*!*****************************************!*\
  !*** ./src/app/product/product.page.ts ***!
  \*****************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/product */ "./src/app/data/product.ts");
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./md5 */ "./src/app/product/md5.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _data_vendor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/vendor */ "./src/app/data/vendor.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");














var ProductPage = /** @class */ (function () {
    function ProductPage(translate, toastController, socialSharing, modalCtrl, api, data, productData, settings, router, loadingController, navCtrl, alertController, route, vendor, iab) {
        this.translate = translate;
        this.toastController = toastController;
        this.socialSharing = socialSharing;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.data = data;
        this.productData = productData;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.vendor = vendor;
        this.iab = iab;
        this.filter = {};
        this.usedVariationAttributes = [];
        this.options = {};
        this.variations = [];
        this.groupedProducts = [];
        this.relatedProducts = [];
        this.upsellProducts = [];
        this.crossSellProducts = [];
        this.reviews = [];
        this.cart = {};
        this.disableButton = false;
        this.addonsList = []; //ADDONS
        this.lan = {};
        this.filter.page = 1;
        this.quantity = "1";
    }
    ProductPage.prototype.getReviewsPage = function () {
        this.navCtrl.navigateForward(this.router.url + '/review/' + this.product.id);
    };
    ProductPage.prototype.getProduct = function () {
        var _this = this;
        this.api.getItem('products/' + this.id).subscribe(function (res) {
            _this.product = res;
            _this.handleProduct();
        }, function (err) {
            console.log(err);
        });
    };
    ProductPage.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get(['Oops!', 'Please Select', 'Please wait', 'Options', 'Option', 'Select', 'Item added to cart']).subscribe(function (translations) {
            _this.lan.oops = translations['Oops!'];
            _this.lan.PleaseSelect = translations['Please Select'];
            _this.lan.Pleasewait = translations['Please wait'];
            _this.lan.options = translations['Options'];
            _this.lan.option = translations['Option'];
            _this.lan.select = translations['Select'];
            _this.lan.addToCart = translations['Item added to cart'];
            _this.lan.message = translations['Message'];
            _this.lan.lowQuantity = translations['Requested quantity not available'];
        });
        this.product = this.productData.product;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.product.id)
            this.handleProduct();
        else
            this.getProduct();
    };
    ProductPage.prototype.handleProduct = function () {
        var _this = this;
        /* Reward Points */
        if (this.settings.settings.switchRewardPoints && this.product.meta_data)
            this.product.meta_data.forEach(function (item) {
                if (item.key == '_wc_points_earned') {
                    _this.product.showPoints = item.value;
                }
            });
        /* Product Addons */
        if (this.settings.settings.switchAddons === 1)
            this.getAddons();
        this.usedVariationAttributes = this.product.attributes.filter(function (attribute) {
            return attribute.variation == true;
        });
        if ((this.product.type == 'variable') && this.product.variations.length)
            this.getVariationProducts();
        if ((this.product.type == 'grouped') && this.product.grouped_products.length)
            this.getGroupedProducts();
        this.getRelatedProducts();
        this.getUpsellProducts();
        this.getCrossSellProducts();
        this.getReviews();
    };
    ProductPage.prototype.getVariationProducts = function () {
        var _this = this;
        this.api.getItem('products/' + this.product.id + '/variations', { per_page: 100 }).subscribe(function (res) {
            _this.variations = res;
        }, function (err) { });
    };
    ProductPage.prototype.getGroupedProducts = function () {
        var _this = this;
        if (this.product.grouped_products.length) {
            var filter = [];
            for (var item in this.product.grouped_products)
                filter['include[' + item + ']'] = this.product.grouped_products[item];
            this.api.getItem('products', filter).subscribe(function (res) {
                _this.groupedProducts = res;
            }, function (err) { });
        }
    };
    ProductPage.prototype.getRelatedProducts = function () {
        var _this = this;
        if (this.product.related_ids.length) {
            var filter = [];
            for (var item in this.product.related_ids)
                filter['include[' + item + ']'] = this.product.related_ids[item];
            this.api.getItem('products', filter).subscribe(function (res) {
                _this.relatedProducts = res;
            }, function (err) { });
        }
    };
    ProductPage.prototype.getUpsellProducts = function () {
        var _this = this;
        if (this.product.upsell_ids.length) {
            var filter = [];
            for (var item in this.product.upsell_ids)
                filter['include[' + item + ']'] = this.product.upsell_ids[item];
            this.api.getItem('products', filter).subscribe(function (res) {
                _this.upsellProducts = res;
            }, function (err) { });
        }
    };
    ProductPage.prototype.getCrossSellProducts = function () {
        var _this = this;
        if (this.product.cross_sell_ids != 0) {
            var filter = [];
            for (var item in this.product.cross_sell_ids)
                filter['include[' + item + ']'] = this.product.cross_sell_ids[item];
            this.api.getItem('products', filter).subscribe(function (res) {
                _this.crossSellProducts = res;
            }, function (err) { });
        }
    };
    ProductPage.prototype.getReviews = function () {
        var _this = this;
        this.api.getReviews('products/' + this.product.id + '/reviews').subscribe(function (res) {
            _this.reviews = res;
            for (var item in _this.reviews) {
                _this.reviews[item].avatar = Object(_md5__WEBPACK_IMPORTED_MODULE_8__["md5"])(_this.reviews[item].email);
            }
        }, function (err) { });
    };
    ProductPage.prototype.goToProduct = function (product) {
        this.productData.product = product;
        var endIndex = this.router.url.lastIndexOf('/');
        var path = this.router.url.substring(0, endIndex);
        this.navCtrl.navigateForward(path + '/' + product.id);
    };
    ProductPage.prototype.addToCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.product.manage_stock && this.product.stock_quantity < this.data.cart[this.product.id])) return [3 /*break*/, 1];
                        this.presentAlert(this.lan.message, this.lan.lowQuantity);
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(this.selectAdons() && this.setVariations() && this.setGroupedProducts())) return [3 /*break*/, 3];
                        this.options.product_id = this.product.id;
                        this.disableButton = true;
                        return [4 /*yield*/, this.api.postItem('add_to_cart', this.options).subscribe(function (res) {
                                _this.cart = res;
                                _this.presentToast(_this.lan.addToCart);
                                _this.data.updateCart(_this.cart.cart);
                                _this.disableButton = false;
                            }, function (err) {
                                console.log(err);
                                _this.disableButton = false;
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductPage.prototype.setVariations = function () {
        var _this = this;
        if (this.variationId) {
            this.options.variation_id = this.variationId;
        }
        this.product.attributes.forEach(function (item) {
            if (item.selected) {
                _this.options['variation[attribute_pa_' + item.name + ']'] = item.selected;
            }
        });
        for (var i = 0; i < this.product.attributes.length; i++) {
            if (this.product.attributes[i].variation && this.product.attributes[i].selected == undefined) {
                this.presentAlert(this.lan.options, this.lan.select + ' ' + this.product.attributes[i].name + this.lan.option);
                return false;
            }
        }
        return true;
    };
    ProductPage.prototype.chooseVariation = function (att, value) {
        var _this = this;
        this.product.attributes.forEach(function (item) {
            if (item.name == att.name) {
                item.selected = value;
            }
        });
        if (this.usedVariationAttributes.every(function (a) { return a.selected !== undefined; }))
            this.variations.forEach(function (variation) {
                var test = new Array(_this.usedVariationAttributes.length);
                test.fill(false);
                _this.usedVariationAttributes.forEach(function (attribute) {
                    if (variation.attributes.length == 0) {
                        _this.variationId = variation.id;
                        _this.product.stock_status = variation.stock_status;
                        _this.product.price = variation.price;
                        _this.product.sale_price = variation.sale_price;
                        _this.product.regular_price = variation.regular_price;
                        _this.product.manage_stock = variation.manage_stock;
                        _this.product.stock_quantity = variation.stock_quantity;
                        //this.product.images[0] = variation.image; /* Uncomment this if you want to use variation images */
                    }
                    else {
                        variation.attributes.forEach(function (item, index) {
                            if (item.name == attribute.name && item.option == attribute.selected) {
                                test[index] = true;
                            }
                        });
                        if (test.every(function (v) { return v == true; })) {
                            _this.variationId = variation.id;
                            _this.product.stock_status = variation.stock_status;
                            _this.product.price = variation.price;
                            _this.product.sale_price = variation.sale_price;
                            _this.product.regular_price = variation.regular_price;
                            _this.product.manage_stock = variation.manage_stock;
                            _this.product.stock_quantity = variation.stock_quantity;
                            //this.product.images[0] = variation.image;  /* Uncomment this if you want to use variation images */
                            test.fill(false);
                        }
                        else if (variation.attributes.length != 1 && variation.attributes.length == _this.usedVariationAttributes.length && test.some(function (v) { return v == false; })) {
                            //this.product.stock_status = 'outofstock';
                            //this.options.variation_id = variation.id;
                        }
                    }
                });
            });
    };
    ProductPage.prototype.presentAlert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductPage.prototype.OnDestroy = function () {
        this.productData.product = {};
    };
    ProductPage.prototype.share = function () {
        var options = {
            message: "Check this out!",
            subject: this.product.name,
            files: ['', ''],
            url: this.product.permalink,
            chooserTitle: 'Choose an App'
        };
        this.socialSharing.shareWithOptions(options);
    };
    ProductPage.prototype.getDetail = function (id) {
        this.vendor.vendor.id = id;
        var pages = this.router.url.split('/');
        this.navCtrl.navigateForward('/tabs/' + pages[2] + '/vendor-products');
    };
    ProductPage.prototype.buyExternalProduct = function (id) {
        var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
        var browser = this.iab.create(this.product.external_url, '_blank', options);
        browser.show();
    };
    ProductPage.prototype.setGroupedProducts = function () {
        var _this = this;
        if (this.product.type == 'grouped') {
            this.options['add-to-cart'] = this.product.id;
            this.groupedProducts.forEach(function (item) {
                if (item.selected) {
                    _this.options['quantity[' + item.id + ']'] = item.selected;
                }
            });
            return true;
        }
        else
            return true;
    };
    /* PRODUCT ADDONS */
    ProductPage.prototype.getAddons = function () {
        var _a;
        if (this.product.meta_data) {
            for (var item in this.product.meta_data) {
                if (this.product.meta_data[item].key == '_product_addons' && this.product.meta_data[item].value.length) {
                    (_a = this.addonsList).push.apply(_a, this.product.meta_data[item].value);
                }
            }
        }
        this.getGlobalAddons();
    };
    ProductPage.prototype.getGlobalAddons = function () {
        var _this = this;
        this.api.getAddonsList('product-add-ons').subscribe(function (res) {
            _this.handleAddonResults(res);
        });
    };
    ProductPage.prototype.handleAddonResults = function (results) {
        var _this = this;
        if (results && results.length)
            results.forEach(function (item) {
                var _a;
                (_a = _this.addonsList).push.apply(_a, item.fields);
            });
    };
    ProductPage.prototype.selectAdons = function () {
        var _this = this;
        this.options = {};
        var valid = this.validateform();
        if (valid) {
            this.addonsList.forEach(function (value, i) {
                value.selectedName = value.name.toLowerCase();
                value.selectedName = value.selectedName.split(' ').join('-');
                value.selectedName = value.selectedName.split('.').join('');
                value.selectedName = value.selectedName.replace(':', '');
                value.options.forEach(function (option, j) {
                    option.selectedLabel = option.label.toLowerCase();
                    option.selectedLabel = option.selectedLabel.split(' ').join('-');
                    option.selectedLabel = option.selectedLabel.split('.').join('');
                    option.selectedLabel = option.selectedLabel.replace(':', '');
                    if (value.selected instanceof Array) {
                        if (value.selected.includes(option.label)) {
                            _this.options['addon-' + _this.product.id + '-' + value.selectedName + '-' + i + '[' + j + ']'] = option.selectedLabel;
                        }
                    }
                    else if (option.label == value.selected && value.type == 'select') {
                        _this.options['addon-' + _this.product.id + '-' + value.selectedName + '-' + i] = option.selectedLabel + '-' + (j + 1);
                    }
                    else if (option.label == value.selected && value.type == 'radiobutton') {
                        _this.options['addon-' + _this.product.id + '-' + value.selectedName + '-' + i + '[' + j + ']'] = option.selectedLabel;
                    }
                    else if (value.type === 'custom_textarea' && option.input && option.input !== '') {
                        _this.options['addon-' + _this.product.id + '-' + value.selectedName + '-' + i + '[' + option.selectedLabel + ']'] = option.input;
                    }
                });
                if (value.type == 'custom_text') {
                    var label = value.name;
                    label = label.toLowerCase();
                    label = label.split(' ').join('-');
                    label = label.split('.').join('');
                    label = label.replace(':', '');
                    _this.options['addon-' + _this.product.id + '-' + label + '-' + i] = value.input;
                }
            });
        }
        return valid;
    };
    ProductPage.prototype.validateform = function () {
        if (this.addonsList) {
            for (var addon in this.addonsList) {
                for (var item in this.addonsList[addon].fields) {
                    if (this.addonsList[addon].fields[item].required == 1 && this.addonsList[addon].fields[item].selected == '') {
                        this.presentAlert(this.lan.oops, this.lan.PleaseSelect + ' ' + this.addonsList[addon].fields[item].name);
                        return false;
                    }
                }
                if (this.addonsList[addon].type == 'custom_text') {
                    if (this.addonsList[addon].required == 1 && (!this.addonsList[addon].input || this.addonsList[addon].input == '')) {
                        this.presentAlert(this.lan.oops, this.lan.PleaseSelect + ' ' + this.addonsList[addon].name);
                        return false;
                    }
                }
            }
            return true;
        }
        return true;
    };
    ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.page.html */ "./src/app/product/product.page.html"),
            styles: [__webpack_require__(/*! ./product.page.scss */ "./src/app/product/product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_vendor__WEBPACK_IMPORTED_MODULE_10__["Vendor"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"]])
    ], ProductPage);
    return ProductPage;
}());



/***/ }),

/***/ "./src/app/products/products.page.html":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'  class=\"products-header\">\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-searchbar mode=\"ios\" *ngIf=\"showSearch\" [(ngModel)]=\"searchInput\" (ionChange)=\"onInput()\"></ion-searchbar>\n    <ion-buttons slot=\"end\" (click)=\"getFilter()\"><ion-icon name=\"funnel\" style=\"margin: 0 8px;font-size: 23px\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"subCategories.length\" class=\"scrollmenu2\">\n    <div *ngFor=\"let item of subCategories\" class=\"scroll ion-activatable ion-focusable hydrated\" (click)=\"getCategory(item.id)\">\n      <img alt=\"\" *ngIf=\"item.image?.src\" src=\"{{item.image.src}}\" [style.border-radius.px]=\"settings.dimensions.suCatBorderRadius\">\n      <h5><span [innerHTML]=\"item.name\"></span></h5>\n    </div>\n  </div>\n\n  <div class=\"spinner\" *ngIf=\"loader\"><ion-spinner> </ion-spinner></div>\n\n  <ion-list  *ngIf=\"products\">\n\n    <div class=\"spinner\" *ngIf=\"!loader && products.length == 0\">{{\"No Results\" | translate}}</div>\n\n    <ion-row>\n    <ion-col size=\"{{settings.colWidthProducts}}\" size-sm=\"4\" size-md=\"3\" [style.padding.px]=\"settings.dimensions.productPadding\" *ngFor=\"let product of products\">\n    <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n      <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.productsGridViewHeight\" (click)=\"getProduct(product)\" *ngIf=\"product.images?.length\" src=\"{{product.images[0].src}}\"></ion-img>\n      <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.productsGridViewHeight\" (click)=\"getProduct(product)\" *ngIf=\"!product.images?.length\" src=\"assets/image/logo.png\"></ion-img>\n      <ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[product.id]\" (click)=\"settings.addToWishlist(product.id)\"></ion-icon>\n      <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[product.id]\" (click)=\"settings.removeFromWishlist(product.id)\"></ion-icon>\n\n       <ion-button color=\"danger\" class=\"stock\" *ngIf=\"product.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n      <div *ngIf=\"product.stock_status == 'instock'\">\n      <ion-button class=\"offer\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= '1'\">{{(product.regular_price - product.price) /product.regular_price*100 | number : '1.0-0'}}%</ion-button>\n      </div>\n                        \n      <ion-card-header (click)=\"getProduct(product)\" class=\"ion-activatable ion-focusable hydrated\">\n        <ion-card-subtitle mode=\"md\">{{product.name}}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content (click)=\"getProduct(product)\" class=\"ion-activatable ion-focusable hydrated\">\n        <p class=\"price\">\n          <span class=\"regular-price\" *ngIf=\"!product.sale_price\">{{1*product.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n          <span class=\"regular-price\" *ngIf=\"product.sale_price\">{{1*product.sale_price | currency:settings.currency:symbol:'1.2-2'}}</span>\n            <span *ngIf=\"product.sale_price\" class=\"special-price\"><del>{{1*product.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span>\n        </p>\n      </ion-card-content>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n\n  </ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && products.length\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin: 0;\n  height: 100%; }\n\nion-card-title {\n  font-size: 40px; }\n\nion-card-header {\n  padding: 10px; }\n\nion-card-content {\n  padding: 0; }\n\nion-card-content .price {\n    padding: 0 10px 10px 10px;\n    font-weight: bold;\n    font-size: 14px; }\n\nion-card-content .price .special-price {\n      padding-left: 5px;\n      font-size: 10px;\n      font-weight: 300; }\n\nion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small; }\n\n.scrollmenu2 {\n  margin: 5px 0;\n  z-index: 1;\n  overflow: auto;\n  white-space: nowrap; }\n\n.scrollmenu2 h5 {\n    margin: 0;\n    padding: 5px;\n    font-size: 12px;\n    text-transform: capitalize;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n\n.scrollmenu2 .scroll {\n    display: inline-block;\n    text-align: center;\n    padding: 8px 8px 0 8px;\n    text-decoration: none;\n    width: 30%; }\n\n.list-md {\n  padding-top: 0; }\n\n.stock {\n  position: absolute;\n  top: -4px;\n  left: -6px;\n  width: 130px;\n  font-size: 8px;\n  margin: 15px;\n  margin-left: -39px;\n  transform: rotate(-45deg);\n  height: 19px;\n  --box-shadow: none; }\n\n.offer {\n  margin-left: 5px;\n  font-size: 12px;\n  --border-radius: 25px;\n  width: 36px;\n  min-height: 36px;\n  font-weight: 600;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  -webkit-box-shadow: none;\n  --box-shadow: none; }\n\n.searchbar-input.sc-ion-searchbar-md {\n  box-shadow: none; }\n\n.products-header ion-searchbar {\n  height: 40px; }\n\n.products-header ion-searchbar ion-toolbar:last-child {\n    --border-width: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztFQUNULFlBQVksRUFBQTs7QUFFaEI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLFVBQVUsRUFBQTs7QUFEZDtJQUdRLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQUx2QjtNQVFZLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7O0FBSTVCO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGFBQWE7RUFDYixVQUFVO0VBQ1YsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUp2QjtJQU1RLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtJQUNmLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsZ0JBQWdCLEVBQUE7O0FBWHhCO0lBY1EscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFVBQVUsRUFBQTs7QUFHbEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBRWxCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWEsRUFBQTs7QUFFakI7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsa0JBQWEsRUFBQTs7QUFFakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFFUSxZQUFZLEVBQUE7O0FBRnBCO0lBSVksaUJBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLnByaWNlIHtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IC8vY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xuICAgICAgICAgICAgLy9jb2xvcjogIzg2ODY4NjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IHNtYWxsOyAvL2NvbG9yOiBibGFjaztcbn1cbi5zY3JvbGxtZW51MiB7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICB6LWluZGV4OiAxOyAvL2JhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoNSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLnNjcm9sbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy9jb2xvcjogIzAwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDAgOHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxufVxuLmxpc3QtbWQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xufVxuLnN0b2NrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNHB4O1xuICAgIGxlZnQ6IC02cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTM5cHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi5vZmZlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucHJvZHVjdHMtaGVhZGVyIHtcbiAgICBpb24tc2VhcmNoYmFyIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/product */ "./src/app/data/product.ts");
/* harmony import */ var _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../filter/filter.page */ "./src/app/filter/filter.page.ts");
/* harmony import */ var _data_vendor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/vendor */ "./src/app/data/vendor.ts");










var ProductsPage = /** @class */ (function () {
    function ProductsPage(vendor, modalController, api, data, product, settings, router, navCtrl, route) {
        this.vendor = vendor;
        this.modalController = modalController;
        this.api = api;
        this.data = data;
        this.product = product;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.products = [];
        this.tempProducts = [];
        this.subCategories = [];
        this.filter = {};
        this.hasMoreItems = true;
        this.loader = false;
        this.showSearch = true;
        this.filter.page = 1;
        this.filter.status = 'publish';
    }
    ProductsPage.prototype.getFilter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__["FilterPage"],
                            componentProps: {
                                filter: this.filter,
                                attributes: this.attributes
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            this.filter = data;
                            this.filter.page = 1;
                            this.getProducts();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsPage.prototype.loadData = function (event) {
        var _this = this;
        this.filter.page = this.filter.page + 1;
        this.api.getItem('products', this.filter).subscribe(function (res) {
            _this.tempProducts = res;
            _this.products.push.apply(_this.products, _this.tempProducts);
            event.target.complete();
            if (_this.tempProducts.length == 0)
                _this.hasMoreItems = false;
        }, function (err) {
            event.target.complete();
        });
        console.log('Done');
    };
    ProductsPage.prototype.getProducts = function () {
        var _this = this;
        this.loader = true;
        this.api.getItem('products', this.filter).subscribe(function (res) {
            _this.products = res;
            _this.loader = false;
        }, function (err) {
            console.log(err);
        });
    };
    ProductsPage.prototype.getAttributes = function () {
        var _this = this;
        this.api.postItem('product-attributes', {
            category: this.filter.category
        }).subscribe(function (res) {
            _this.attributes = res;
        }, function (err) {
            console.log(err);
        });
    };
    ProductsPage.prototype.ngOnInit = function () {
        if (this.route.snapshot.paramMap.get('id')) {
            this.filter.category = this.route.snapshot.paramMap.get('id');
        }
        if (this.vendor.vendor) {
            this.filter.vendor = this.vendor.vendor.id ? this.vendor.vendor.id : this.vendor.vendor.ID;
        }
        if (this.data.categories && this.data.categories.length) {
            for (var i = 0; i < this.data.categories.length; i++) {
                if (this.data.categories[i].parent == this.filter.category) {
                    this.subCategories.push(this.data.categories[i]);
                }
            }
        }
        if (this.settings.colWidthProducts == 4)
            this.filter.per_page = 15;
        this.getProducts();
        this.getAttributes();
    };
    ProductsPage.prototype.getProduct = function (product) {
        this.product.product = product;
        this.navCtrl.navigateForward(this.router.url + '/product/' + product.id);
    };
    ProductsPage.prototype.getCategory = function (id) {
        var endIndex = this.router.url.lastIndexOf('/');
        var path = this.router.url.substring(0, endIndex);
        this.navCtrl.navigateForward(path + '/' + id);
    };
    ProductsPage.prototype.loaded = function (product) {
        console.log('Loaded');
        product.loaded = true;
    };
    ProductsPage.prototype.onInput = function () {
        if (this.searchInput.length) {
            this.products = '';
            this.filter.search = this.searchInput;
            this.filter.page = 1;
            this.getProducts();
        }
        else {
            this.products = '';
            this.filter.search = undefined;
            this.filter.page = 1;
            this.getProducts();
        }
    };
    ProductsPage.prototype.ionViewWillLeave = function () {
        this.showSearch = false;
    };
    ProductsPage.prototype.ionViewDidLeave = function () {
        this.vendor.vendor = {};
        this.showSearch = true;
    };
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.page.html */ "./src/app/products/products.page.html"),
            styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_vendor__WEBPACK_IMPORTED_MODULE_9__["Vendor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ }),

/***/ "./src/app/review/md5.ts":
/*!*******************************!*\
  !*** ./src/app/review/md5.ts ***!
  \*******************************/
/*! exports provided: md5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "md5", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};


/***/ }),

/***/ "./src/app/review/review.page.html":
/*!*****************************************!*\
  !*** ./src/app/review/review.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home/product\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Review\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<div *ngFor=\"let item of reviews\">\n<ion-item lines=\"none\">\n  <ion-avatar slot=\"start\">\n    <ion-img alt=\"\" src=\"https://www.gravatar.com/avatar/{{item.avatar}}\"></ion-img>\n  </ion-avatar>\n  <ion-label>\n    <h2>{{item.name}}\n     <span class=\"rating review-star\">\n     <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 1, half: item.rating == 0.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 2, half: item.rating == 1.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 3, half: item.rating == 2.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 4, half: item.rating == 3.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 5, half: item.rating == 4.5}\">&#x2605;</span></span>\n    </h2>\n  <p>{{item.date_created | date:'MMM d, y hh:mm a'}}</p>\n  </ion-label>\n</ion-item>\n<ion-item><ion-label><p text-wrap>{{item.review}}</p></ion-label></ion-item>\n</div>\n\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/review/review.page.scss":
/*!*****************************************!*\
  !*** ./src/app/review/review.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".review-star {\n  float: right; }\n  .review-star .star-icon {\n    color: #f7f7f7;\n    font-size: 1em;\n    position: relative; }\n  .review-star .star-icon.full:before {\n    color: #ffce00;\n    content: '\\2605';\n    position: absolute;\n    left: 0; }\n  .review-star .star-icon.half:before {\n    color: #ffce00;\n    content: '\\2605';\n    position: absolute;\n    left: 0;\n    width: 50%;\n    overflow: hidden; }\n  @-moz-document url-prefix() {\n  .review-star .star-icon {\n    font-size: 50px;\n    line-height: 34px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvcmV2aWV3L3Jldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7RUFEaEI7SUFHUSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQixFQUFBO0VBTDFCO0lBUVEsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsT0FBTyxFQUFBO0VBWGY7SUFjUSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLGdCQUFnQixFQUFBO0VBRXBCO0VBckJKO0lBdUJZLGVBQWU7SUFDZixpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy9yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJldmlldy1zdGFyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIC5zdGFyLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5zdGFyLWljb24uZnVsbDpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZjZTAwO1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXDI2MDUnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLnN0YXItaWNvbi5oYWxmOmJlZm9yZSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmNlMDA7XHJcbiAgICAgICAgY29udGVudDogJ1xcMjYwNSc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcclxuICAgICAgICAuc3Rhci1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/review/review.page.ts":
/*!***************************************!*\
  !*** ./src/app/review/review.page.ts ***!
  \***************************************/
/*! exports provided: ReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPage", function() { return ReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./md5 */ "./src/app/review/md5.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/settings */ "./src/app/data/settings.ts");






var ReviewPage = /** @class */ (function () {
    function ReviewPage(api, router, route, settings) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.settings = settings;
        this.hasMoreItems = true;
        this.filter = {};
    }
    ReviewPage.prototype.ngOnInit = function () {
        this.filter.page = 1;
        this.id = this.route.snapshot.paramMap.get('id');
        this.filter.product = this.id;
        this.getReviews();
    };
    ReviewPage.prototype.loadData = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filter.page = this.filter.page + 1;
                        return [4 /*yield*/, this.api.getReviews('products/' + this.id + '/reviews', this.filter).subscribe(function (res) {
                                _this.reviews.push.apply(res);
                                event.target.complete();
                                if (!res)
                                    _this.hasMoreItems = false;
                            }, function (err) {
                                event.target.complete();
                            })];
                    case 1:
                        _a.sent();
                        console.log('Done');
                        return [2 /*return*/];
                }
            });
        });
    };
    ReviewPage.prototype.getReviews = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getReviews('products/' + this.id + '/reviews').subscribe(function (res) {
                            _this.reviews = res;
                            console.log(_this.reviews);
                            for (var item in _this.reviews) {
                                _this.reviews[item].avatar = Object(_md5__WEBPACK_IMPORTED_MODULE_4__["md5"])(_this.reviews[item].email);
                            }
                        }, function (err) { })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.page.html */ "./src/app/review/review.page.html"),
            styles: [__webpack_require__(/*! ./review.page.scss */ "./src/app/review/review.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"]])
    ], ReviewPage);
    return ReviewPage;
}());



/***/ }),

/***/ "./src/app/search/search.page.html":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios' >\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-searchbar animated [(ngModel)]=\"searchInput\" (ionChange)=\"onInput()\"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"search\">\n\n<div *ngIf=\"!loading && !products.length && !searchInput\" class=\"empty\">\n  <ion-icon color=\"light\" name=\"search\"></ion-icon>\n</div>  \n\n<div class=\"spinner\" *ngIf=\"loading\"><ion-spinner> </ion-spinner></div>\n\n<div *ngIf=\"!products.length && !loading && searchInput\" class=\"no-products\">\n  <h2>{{\"No Products found\" | translate}}!</h2>\n</div>\n\n<ion-list *ngIf=\"!loading\">\n  <ion-row *ngIf=\"products\">\n    <ion-col size=\"{{settings.colWidthSearch}}\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let product of products\" [style.padding.px]=\"settings.dimensions.productPadding\">\n    <ion-card mode=\"md\" class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n      <ion-img alt=\"\" *ngIf=\"product.images\" (click)=\"getProduct(product)\" [style.height.px]=\"settings.dimensions.searchGridViewHeight\" src=\"{{product.images[0]?.src}}\"></ion-img>\n      <ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[product.id]\" (click)=\"settings.addToWishlist(product.id)\"></ion-icon>\n      <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[product.id]\" (click)=\"settings.removeFromWishlist(product.id)\"></ion-icon>\n\n      <ion-button color=\"danger\" class=\"stock\" *ngIf=\"product.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n      <div *ngIf=\"product.stock_status == 'instock'\">\n      <ion-button class=\"offer\" *ngIf=\"((product.regular_price - product.price) /product.regular_price*100) >= '1'\">{{(product.regular_price - product.price) /product.regular_price*100 | number : '1.0-0'}}%</ion-button>\n      </div>\n      \n      <ion-card-header (click)=\"getProduct(product)\">\n        <ion-card-subtitle mode=\"md\">{{product.name}}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content (click)=\"getProduct(product)\">\n        <p class=\"price\">\n          <span class=\"regular-price\" *ngIf=\"!product.sale_price\">{{1*product.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n          <span class=\"regular-price\" *ngIf=\"product.sale_price\">{{1*product.sale_price | currency:settings.currency:symbol:'1.2-2'}}</span>\n            <span *ngIf=\"product.sale_price\" class=\"special-price\"><del>{{1*product.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span>\n        </p>\n      </ion-card-content>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-list>\n\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && products.length\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  height: 40px; }\n  ion-searchbar ion-toolbar:last-child {\n    --border-width: 0; }\n  .search ion-card {\n  margin: 0;\n  height: 100%; }\n  .search ion-card-title {\n  font-size: 40px; }\n  .search ion-card-header {\n  padding: 10px; }\n  .search ion-card-content {\n  padding: 0; }\n  .search ion-card-content .price {\n    padding: 0 10px 10px 10px;\n    font-weight: bold;\n    font-size: 14px; }\n  .search ion-card-content .price .special-price {\n      padding-left: 5px;\n      font-size: 10px;\n      font-weight: 300; }\n  .search ion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small; }\n  .search .empty {\n  margin-top: 50px;\n  text-align: center; }\n  .search .empty ion-icon {\n    font-size: 7.2em; }\n  .search .list-md {\n  padding-top: 0; }\n  .no-products h2 {\n  text-align: center;\n  font-size: 15px;\n  width: 100%;\n  margin: 30px 0; }\n  .stock {\n  position: absolute;\n  top: -4px;\n  left: -6px;\n  width: 130px;\n  font-size: 8px;\n  margin: 15px;\n  margin-left: -39px;\n  transform: rotate(-45deg);\n  height: 19px;\n  box-shadow: none; }\n  .offer {\n  margin-left: 5px;\n  font-size: 12px;\n  --border-radius: 25px;\n  width: 36px;\n  min-height: 36px;\n  font-weight: 600;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  -webkit-box-shadow: none;\n  --box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7RUFEaEI7SUFHUSxpQkFBZSxFQUFBO0VBR3ZCO0VBRVEsU0FBUztFQUNULFlBQVksRUFBQTtFQUhwQjtFQU1RLGVBQWUsRUFBQTtFQU52QjtFQVNRLGFBQWEsRUFBQTtFQVRyQjtFQVlRLFVBQVUsRUFBQTtFQVpsQjtJQWNZLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFFakIsZUFBZSxFQUFBO0VBakIzQjtNQW9CZ0IsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQXRCaEM7RUEyQlEsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0VBL0J4QjtFQW1DUSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUFwQzFCO0lBc0NZLGdCQUFnQixFQUFBO0VBdEM1QjtFQTJDUSxjQUFjLEVBQUE7RUFHdEI7RUFFUSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjLEVBQUE7RUFLdEI7RUFDUSxrQkFBa0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFFbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdCQUF3QjtFQUN4QixrQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgIH1cbn1cbi5zZWFyY2gge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIC8vY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAuc3BlY2lhbC1wcmljZSB7XG4gICAgICAgICAgICAgICAgLy9jb2xvcjogIzg2ODY4NjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAvL2NvbG9yOiBibGFjaztcbiAgICB9XG4gICAgLmVtcHR5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDcuMmVtO1xuICAgICAgICAgICAgLy9jb2xvcjogI2VjZWNlYztcbiAgICAgICAgfVxuICAgIH1cbiAgICAubGlzdC1tZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbn1cbi5uby1wcm9kdWN0cyB7XG4gICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgIH1cbn1cblxuXG4uc3RvY2sge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNHB4O1xuICAgIGxlZnQ6IC02cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTM5cHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5vZmZlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/product */ "./src/app/data/product.ts");








var SearchPage = /** @class */ (function () {
    function SearchPage(api, data, router, product, settings, loadingController, navCtrl, route) {
        this.api = api;
        this.data = data;
        this.router = router;
        this.product = product;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.products = [];
        this.tempProducts = [];
        this.filter = {};
        this.hasMoreItems = true;
        this.searchInput = "";
        this.loading = false;
        this.filter.page = 1;
        if (this.settings.colWidthProducts == 4)
            this.filter.per_page = 15;
        this.filter.status = 'publish';
    }
    SearchPage.prototype.ngOnInit = function () { };
    SearchPage.prototype.loadData = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filter.page = this.filter.page + 1;
                        return [4 /*yield*/, this.api.getItem('products', this.filter).subscribe(function (res) {
                                _this.tempProducts = res;
                                _this.products.push.apply(_this.products, _this.tempProducts);
                                event.target.complete();
                                if (_this.tempProducts.length == 0)
                                    _this.hasMoreItems = false;
                            }, function (err) {
                                event.target.complete();
                            })];
                    case 1:
                        _a.sent();
                        console.log('Done');
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.onInput = function () {
        this.loading = true;
        this.hasMoreItems = true;
        this.filter.page = 1;
        this.filter.search = this.searchInput;
        if (this.searchInput.length) {
            this.getProducts();
        }
        else {
            this.products = '';
            this.loading = false;
        }
    };
    SearchPage.prototype.getProducts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getItem('products', this.filter).subscribe(function (res) {
                            _this.products = res;
                            _this.loading = false;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.getProduct = function (product) {
        this.product.product = product;
        this.navCtrl.navigateForward('/tabs/search/product/' + product.id);
    };
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.page.html */ "./src/app/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../home/home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../cart/cart.page */ "./src/app/cart/cart.page.ts");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../search/search.page */ "./src/app/search/search.page.ts");
/* harmony import */ var _categories_categories_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../categories/categories.page */ "./src/app/categories/categories.page.ts");
/* harmony import */ var _products_products_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../products/products.page */ "./src/app/products/products.page.ts");
/* harmony import */ var _product_product_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../product/product.page */ "./src/app/product/product.page.ts");
/* harmony import */ var _review_review_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../review/review.page */ "./src/app/review/review.page.ts");
/* harmony import */ var _post_post_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../post/post.page */ "./src/app/post/post.page.ts");
/* harmony import */ var _contact_contact_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../contact/contact.page */ "./src/app/contact/contact.page.ts");
/* harmony import */ var _account_account_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../account/account.page */ "./src/app/account/account.page.ts");
/* harmony import */ var _checkout_address_address_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../checkout/address/address.page */ "./src/app/checkout/address/address.page.ts");
/* harmony import */ var _checkout_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../checkout/checkout/checkout.page */ "./src/app/checkout/checkout/checkout.page.ts");
/* harmony import */ var _account_address_address_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../account/address/address.page */ "./src/app/account/address/address.page.ts");
/* harmony import */ var _account_blog_blog_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./../account/blog/blog.page */ "./src/app/account/blog/blog.page.ts");
/* harmony import */ var _account_blogs_blogs_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./../account/blogs/blogs.page */ "./src/app/account/blogs/blogs.page.ts");
/* harmony import */ var _account_edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./../account/edit-address/edit-address.page */ "./src/app/account/edit-address/edit-address.page.ts");
/* harmony import */ var _account_forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./../account/forgotten/forgotten.page */ "./src/app/account/forgotten/forgotten.page.ts");
/* harmony import */ var _account_login_login_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./../account/login/login.page */ "./src/app/account/login/login.page.ts");
/* harmony import */ var _account_map_map_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./../account/map/map.page */ "./src/app/account/map/map.page.ts");
/* harmony import */ var _account_order_order_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./../account/order/order.page */ "./src/app/account/order/order.page.ts");
/* harmony import */ var _account_orders_orders_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./../account/orders/orders.page */ "./src/app/account/orders/orders.page.ts");
/* harmony import */ var _account_points_points_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./../account/points/points.page */ "./src/app/account/points/points.page.ts");
/* harmony import */ var _account_register_register_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./../account/register/register.page */ "./src/app/account/register/register.page.ts");
/* harmony import */ var _account_setting_setting_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./../account/setting/setting.page */ "./src/app/account/setting/setting.page.ts");
/* harmony import */ var _account_wallet_wallet_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./../account/wallet/wallet.page */ "./src/app/account/wallet/wallet.page.ts");
/* harmony import */ var _account_wishlist_wishlist_page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./../account/wishlist/wishlist.page */ "./src/app/account/wishlist/wishlist.page.ts");
/* harmony import */ var _vendor_edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./../vendor/edit-order/edit-order.page */ "./src/app/vendor/edit-order/edit-order.page.ts");
/* harmony import */ var _vendor_edit_product_edit_product_page__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./../vendor/edit-product/edit-product.page */ "./src/app/vendor/edit-product/edit-product.page.ts");
/* harmony import */ var _vendor_edit_variation_edit_variation_page__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./../vendor/edit-variation/edit-variation.page */ "./src/app/vendor/edit-variation/edit-variation.page.ts");
/* harmony import */ var _vendor_order_list_order_list_page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./../vendor/order-list/order-list.page */ "./src/app/vendor/order-list/order-list.page.ts");
/* harmony import */ var _vendor_order_note_list_order_note_list_page__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./../vendor/order-note-list/order-note-list.page */ "./src/app/vendor/order-note-list/order-note-list.page.ts");
/* harmony import */ var _vendor_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./../vendor/product-list/product-list.page */ "./src/app/vendor/product-list/product-list.page.ts");
/* harmony import */ var _vendor_vendor_info_vendor_info_page__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./../vendor/vendor-info/vendor-info.page */ "./src/app/vendor/vendor-info/vendor-info.page.ts");
/* harmony import */ var _vendor_vendor_list_vendor_list_page__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./../vendor/vendor-list/vendor-list.page */ "./src/app/vendor/vendor-list/vendor-list.page.ts");
/* harmony import */ var _vendor_product_add_category_category_page__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./../vendor/product-add/category/category.page */ "./src/app/vendor/product-add/category/category.page.ts");
/* harmony import */ var _vendor_product_add_details_details_page__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./../vendor/product-add/details/details.page */ "./src/app/vendor/product-add/details/details.page.ts");
/* harmony import */ var _vendor_product_add_photos_photos_page__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./../vendor/product-add/photos/photos.page */ "./src/app/vendor/product-add/photos/photos.page.ts");
/* harmony import */ var _vendor_product_add_subcategory_subcategory_page__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./../vendor/product-add/subcategory/subcategory.page */ "./src/app/vendor/product-add/subcategory/subcategory.page.ts");
















































var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__["KeysPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ],
            declarations: [
                _tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"],
                _home_home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"],
                _cart_cart_page__WEBPACK_IMPORTED_MODULE_10__["CartPage"],
                _categories_categories_page__WEBPACK_IMPORTED_MODULE_12__["CategoriesPage"],
                _search_search_page__WEBPACK_IMPORTED_MODULE_11__["SearchPage"],
                _products_products_page__WEBPACK_IMPORTED_MODULE_13__["ProductsPage"],
                _product_product_page__WEBPACK_IMPORTED_MODULE_14__["ProductPage"],
                _review_review_page__WEBPACK_IMPORTED_MODULE_15__["ReviewPage"],
                _post_post_page__WEBPACK_IMPORTED_MODULE_16__["PostPage"],
                _contact_contact_page__WEBPACK_IMPORTED_MODULE_17__["ContactPage"],
                _account_account_page__WEBPACK_IMPORTED_MODULE_18__["AccountPage"],
                _checkout_address_address_page__WEBPACK_IMPORTED_MODULE_19__["CheckoutAddressPage"],
                _checkout_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_20__["CheckoutPage"],
                _account_address_address_page__WEBPACK_IMPORTED_MODULE_21__["AddressPage"],
                _account_blog_blog_page__WEBPACK_IMPORTED_MODULE_22__["BlogPage"],
                _account_blogs_blogs_page__WEBPACK_IMPORTED_MODULE_23__["BlogsPage"],
                _account_edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_24__["EditAddressPage"],
                _account_forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_25__["ForgottenPage"],
                _account_login_login_page__WEBPACK_IMPORTED_MODULE_26__["LoginPage"],
                _account_map_map_page__WEBPACK_IMPORTED_MODULE_27__["MapPage"],
                _account_order_order_page__WEBPACK_IMPORTED_MODULE_28__["OrderPage"],
                _account_orders_orders_page__WEBPACK_IMPORTED_MODULE_29__["OrdersPage"],
                _account_points_points_page__WEBPACK_IMPORTED_MODULE_30__["PointsPage"],
                _account_register_register_page__WEBPACK_IMPORTED_MODULE_31__["RegisterPage"],
                _account_setting_setting_page__WEBPACK_IMPORTED_MODULE_32__["SettingPage"],
                _account_wallet_wallet_page__WEBPACK_IMPORTED_MODULE_33__["WalletPage"],
                _account_wishlist_wishlist_page__WEBPACK_IMPORTED_MODULE_34__["WishlistPage"],
                // Vendors
                _vendor_edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_35__["EditOrderPage"],
                _vendor_edit_product_edit_product_page__WEBPACK_IMPORTED_MODULE_36__["EditProductPage"],
                _vendor_edit_variation_edit_variation_page__WEBPACK_IMPORTED_MODULE_37__["EditVariationPage"],
                _vendor_order_list_order_list_page__WEBPACK_IMPORTED_MODULE_38__["OrderListPage"],
                _vendor_order_note_list_order_note_list_page__WEBPACK_IMPORTED_MODULE_39__["OrderNoteListPage"],
                _vendor_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_40__["ProductListPage"],
                _vendor_vendor_info_vendor_info_page__WEBPACK_IMPORTED_MODULE_41__["VendorInfoPage"],
                _vendor_vendor_list_vendor_list_page__WEBPACK_IMPORTED_MODULE_42__["VendorListPage"],
                _vendor_product_add_category_category_page__WEBPACK_IMPORTED_MODULE_43__["CategoryPage"],
                _vendor_product_add_details_details_page__WEBPACK_IMPORTED_MODULE_44__["DetailsPage"],
                _vendor_product_add_photos_photos_page__WEBPACK_IMPORTED_MODULE_45__["PhotosPage"],
                _vendor_product_add_subcategory_subcategory_page__WEBPACK_IMPORTED_MODULE_46__["SubcategoryPage"]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\"  color=\"{{settings.theme.tabBar}}\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>{{'Home' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button tab=\"vendor\">\n      <ion-icon name=\"list\"></ion-icon>\n      <ion-label>{{'Store' | translate}}</ion-label>\n    </ion-tab-button> -->\n\n    <ion-tab-button tab=\"search\">\n      <ion-icon name=\"search\"></ion-icon>\n      <ion-label>{{'Search' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"categories\">\n      <ion-icon name=\"apps\" mode=\"md\"></ion-icon>\n      <ion-label>{{'Category' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"cart\">\n      <ion-icon name=\"basket\" mode=\"md\"></ion-icon>\n      <ion-label>{{'Cart' | translate}}</ion-label>\n      <ion-badge color=\"danger\" *ngIf=\"data.count != 0\">{{data.count}}</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"account\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>{{'Account' | translate}}</ion-label>\n    </ion-tab-button>\n    \n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  min-width: 18px;\n  font-size: 12px;\n  left: calc(50% + 3px); }\n\nion-label {\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0MsOERBQThELEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdlIHtcbiAgICBtaW4td2lkdGg6IDE4cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxlZnQ6IGNhbGMoNTAlICsgM3B4KTtcbn1cblxuaW9uLWxhYmVse1xuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/settings */ "./src/app/data/settings.ts");




var TabsPage = /** @class */ (function () {
    function TabsPage(data, settings) {
        this.data = data;
        this.settings = settings;
    }
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data__WEBPACK_IMPORTED_MODULE_2__["Data"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../home/home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _cart_cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../cart/cart.page */ "./src/app/cart/cart.page.ts");
/* harmony import */ var _categories_categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../categories/categories.page */ "./src/app/categories/categories.page.ts");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../search/search.page */ "./src/app/search/search.page.ts");
/* harmony import */ var _products_products_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../products/products.page */ "./src/app/products/products.page.ts");
/* harmony import */ var _product_product_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../product/product.page */ "./src/app/product/product.page.ts");
/* harmony import */ var _review_review_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../review/review.page */ "./src/app/review/review.page.ts");
/* harmony import */ var _post_post_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../post/post.page */ "./src/app/post/post.page.ts");
/* harmony import */ var _account_account_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../account/account.page */ "./src/app/account/account.page.ts");
/* harmony import */ var _checkout_address_address_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../checkout/address/address.page */ "./src/app/checkout/address/address.page.ts");
/* harmony import */ var _checkout_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../checkout/checkout/checkout.page */ "./src/app/checkout/checkout/checkout.page.ts");
/* harmony import */ var _account_address_address_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../account/address/address.page */ "./src/app/account/address/address.page.ts");
/* harmony import */ var _account_blog_blog_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../account/blog/blog.page */ "./src/app/account/blog/blog.page.ts");
/* harmony import */ var _account_blogs_blogs_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../account/blogs/blogs.page */ "./src/app/account/blogs/blogs.page.ts");
/* harmony import */ var _account_edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../account/edit-address/edit-address.page */ "./src/app/account/edit-address/edit-address.page.ts");
/* harmony import */ var _account_forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../account/forgotten/forgotten.page */ "./src/app/account/forgotten/forgotten.page.ts");
/* harmony import */ var _account_login_login_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../account/login/login.page */ "./src/app/account/login/login.page.ts");
/* harmony import */ var _account_map_map_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../account/map/map.page */ "./src/app/account/map/map.page.ts");
/* harmony import */ var _account_order_order_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./../account/order/order.page */ "./src/app/account/order/order.page.ts");
/* harmony import */ var _account_orders_orders_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./../account/orders/orders.page */ "./src/app/account/orders/orders.page.ts");
/* harmony import */ var _account_points_points_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./../account/points/points.page */ "./src/app/account/points/points.page.ts");
/* harmony import */ var _account_register_register_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./../account/register/register.page */ "./src/app/account/register/register.page.ts");
/* harmony import */ var _account_setting_setting_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./../account/setting/setting.page */ "./src/app/account/setting/setting.page.ts");
/* harmony import */ var _account_wallet_wallet_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./../account/wallet/wallet.page */ "./src/app/account/wallet/wallet.page.ts");
/* harmony import */ var _account_wishlist_wishlist_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./../account/wishlist/wishlist.page */ "./src/app/account/wishlist/wishlist.page.ts");
/* harmony import */ var _vendor_edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./../vendor/edit-order/edit-order.page */ "./src/app/vendor/edit-order/edit-order.page.ts");
/* harmony import */ var _vendor_edit_product_edit_product_page__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./../vendor/edit-product/edit-product.page */ "./src/app/vendor/edit-product/edit-product.page.ts");
/* harmony import */ var _vendor_edit_variation_edit_variation_page__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./../vendor/edit-variation/edit-variation.page */ "./src/app/vendor/edit-variation/edit-variation.page.ts");
/* harmony import */ var _vendor_order_list_order_list_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./../vendor/order-list/order-list.page */ "./src/app/vendor/order-list/order-list.page.ts");
/* harmony import */ var _vendor_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./../vendor/product-list/product-list.page */ "./src/app/vendor/product-list/product-list.page.ts");
/* harmony import */ var _vendor_vendor_info_vendor_info_page__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./../vendor/vendor-info/vendor-info.page */ "./src/app/vendor/vendor-info/vendor-info.page.ts");
/* harmony import */ var _vendor_vendor_list_vendor_list_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./../vendor/vendor-list/vendor-list.page */ "./src/app/vendor/vendor-list/vendor-list.page.ts");
/* harmony import */ var _vendor_product_add_category_category_page__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./../vendor/product-add/category/category.page */ "./src/app/vendor/product-add/category/category.page.ts");
/* harmony import */ var _vendor_product_add_details_details_page__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./../vendor/product-add/details/details.page */ "./src/app/vendor/product-add/details/details.page.ts");
/* harmony import */ var _vendor_product_add_subcategory_subcategory_page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./../vendor/product-add/subcategory/subcategory.page */ "./src/app/vendor/product-add/subcategory/subcategory.page.ts");












//import { ContactPage } from './../contact/contact.page';

















//Vendor










var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        component: _home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
                    },
                    {
                        path: 'products/:id',
                        children: [
                            {
                                path: '',
                                component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
                                    },
                                    {
                                        path: 'review/:id',
                                        component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'product/:id',
                        children: [
                            {
                                path: '',
                                component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
                            },
                            {
                                path: 'review/:id',
                                component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
                            }
                        ]
                    },
                    {
                        path: 'vendor-products',
                        children: [
                            {
                                path: '',
                                component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
                                    },
                                    {
                                        path: 'review/:id',
                                        component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'post/:id',
                        component: _post_post_page__WEBPACK_IMPORTED_MODULE_11__["PostPage"]
                    }
                ]
            },
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        component: _categories_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]
                    },
                    {
                        path: 'products/:id',
                        children: [
                            {
                                path: '',
                                component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
                                    },
                                    {
                                        path: 'review/:id',
                                        component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'vendor-products',
                        children: [
                            {
                                path: '',
                                component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
                                    },
                                    {
                                        path: 'review/:id',
                                        component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        component: _search_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"]
                    },
                    {
                        path: 'product/:id',
                        children: [
                            {
                                path: '',
                                component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
                            },
                            {
                                path: 'review/:id',
                                component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
                            }
                        ]
                    },
                    {
                        path: 'vendor-products',
                        children: [
                            {
                                path: '',
                                component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
                                    },
                                    {
                                        path: 'review/:id',
                                        component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                path: 'cart',
                children: [
                    {
                        path: '',
                        component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"]
                    },
                    {
                        path: 'address',
                        component: _checkout_address_address_page__WEBPACK_IMPORTED_MODULE_13__["CheckoutAddressPage"]
                    },
                    {
                        path: 'checkout',
                        component: _checkout_checkout_checkout_page__WEBPACK_IMPORTED_MODULE_14__["CheckoutPage"]
                    },
                    {
                        path: 'product/:id',
                        children: [
                            {
                                path: '',
                                component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
                            },
                            {
                                path: 'review/:id',
                                component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
                            }
                        ]
                    }
                ]
            },
            {
                path: 'account',
                children: [
                    {
                        path: '',
                        component: _account_account_page__WEBPACK_IMPORTED_MODULE_12__["AccountPage"]
                    },
                    {
                        path: 'address',
                        children: [
                            {
                                path: '',
                                component: _account_address_address_page__WEBPACK_IMPORTED_MODULE_15__["AddressPage"]
                            },
                            {
                                path: 'edit-address',
                                component: _account_edit_address_edit_address_page__WEBPACK_IMPORTED_MODULE_18__["EditAddressPage"]
                            }
                        ]
                    },
                    {
                        path: 'register',
                        component: _account_register_register_page__WEBPACK_IMPORTED_MODULE_25__["RegisterPage"]
                    },
                    {
                        path: 'points',
                        component: _account_points_points_page__WEBPACK_IMPORTED_MODULE_24__["PointsPage"]
                    },
                    {
                        path: 'setting',
                        component: _account_setting_setting_page__WEBPACK_IMPORTED_MODULE_26__["SettingPage"]
                    },
                    {
                        path: 'wallet',
                        children: [
                            {
                                path: '',
                                component: _account_wallet_wallet_page__WEBPACK_IMPORTED_MODULE_27__["WalletPage"]
                            },
                            {
                                path: 'cart',
                                component: _cart_cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"]
                            }
                        ]
                    },
                    {
                        path: 'post/:id',
                        component: _post_post_page__WEBPACK_IMPORTED_MODULE_11__["PostPage"]
                    },
                    {
                        path: 'map',
                        component: _account_map_map_page__WEBPACK_IMPORTED_MODULE_21__["MapPage"]
                    },
                    {
                        path: 'orders',
                        children: [
                            {
                                path: '',
                                component: _account_orders_orders_page__WEBPACK_IMPORTED_MODULE_23__["OrdersPage"]
                            },
                            {
                                path: 'order/:id',
                                component: _account_order_order_page__WEBPACK_IMPORTED_MODULE_22__["OrderPage"]
                            }
                        ]
                    },
                    {
                        path: 'login',
                        children: [
                            {
                                path: '',
                                component: _account_login_login_page__WEBPACK_IMPORTED_MODULE_20__["LoginPage"]
                            },
                            {
                                path: 'forgotten',
                                component: _account_forgotten_forgotten_page__WEBPACK_IMPORTED_MODULE_19__["ForgottenPage"]
                            }
                        ]
                    },
                    {
                        path: 'wishlist',
                        children: [
                            {
                                path: '',
                                component: _account_wishlist_wishlist_page__WEBPACK_IMPORTED_MODULE_28__["WishlistPage"]
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
                                    },
                                    {
                                        path: 'review/:id',
                                        component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'blogs',
                        children: [
                            {
                                path: '',
                                component: _account_blogs_blogs_page__WEBPACK_IMPORTED_MODULE_17__["BlogsPage"]
                            },
                            {
                                path: 'blog/:id',
                                component: _account_blog_blog_page__WEBPACK_IMPORTED_MODULE_16__["BlogPage"]
                            }
                        ]
                    },
                    {
                        path: 'vendor-orders',
                        children: [
                            {
                                path: '',
                                component: _vendor_order_list_order_list_page__WEBPACK_IMPORTED_MODULE_32__["OrderListPage"]
                            },
                            {
                                path: 'edit-order/:id',
                                component: _vendor_edit_order_edit_order_page__WEBPACK_IMPORTED_MODULE_29__["EditOrderPage"]
                            },
                            {
                                path: 'view-order/:id',
                                component: _account_order_order_page__WEBPACK_IMPORTED_MODULE_22__["OrderPage"]
                            }
                        ]
                    },
                    {
                        path: 'vendor-products',
                        children: [
                            {
                                path: '',
                                component: _vendor_product_list_product_list_page__WEBPACK_IMPORTED_MODULE_33__["ProductListPage"]
                            },
                            {
                                path: 'edit-product/:id',
                                children: [
                                    {
                                        path: '',
                                        component: _vendor_edit_product_edit_product_page__WEBPACK_IMPORTED_MODULE_30__["EditProductPage"]
                                    },
                                    {
                                        path: 'edit-variation-product/:id',
                                        component: _vendor_edit_variation_edit_variation_page__WEBPACK_IMPORTED_MODULE_31__["EditVariationPage"]
                                    }
                                ]
                            },
                            {
                                path: 'view-product/:id',
                                component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
                            }
                        ]
                    },
                    {
                        path: 'add-products',
                        children: [
                            {
                                path: '',
                                component: _vendor_product_add_category_category_page__WEBPACK_IMPORTED_MODULE_36__["CategoryPage"]
                            },
                            {
                                path: 'subcategory/:id',
                                component: _vendor_product_add_subcategory_subcategory_page__WEBPACK_IMPORTED_MODULE_38__["SubcategoryPage"]
                            },
                            {
                                path: 'details/:id',
                                children: [
                                    {
                                        path: '',
                                        component: _vendor_product_add_details_details_page__WEBPACK_IMPORTED_MODULE_37__["DetailsPage"]
                                    },
                                    {
                                        path: 'photos',
                                        component: _account_points_points_page__WEBPACK_IMPORTED_MODULE_24__["PointsPage"]
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                path: 'vendor',
                children: [
                    {
                        path: '',
                        component: _vendor_vendor_list_vendor_list_page__WEBPACK_IMPORTED_MODULE_35__["VendorListPage"]
                    },
                    {
                        path: 'vendor-info/:id',
                        component: _vendor_vendor_info_vendor_info_page__WEBPACK_IMPORTED_MODULE_34__["VendorInfoPage"]
                    },
                    {
                        path: 'products',
                        children: [
                            {
                                path: '',
                                component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        component: _product_product_page__WEBPACK_IMPORTED_MODULE_9__["ProductPage"]
                                    },
                                    {
                                        path: 'review/:id',
                                        component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'vendor-products',
                        children: [
                            {
                                path: '',
                                component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        component: _products_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
                                    },
                                    {
                                        path: 'review/:id',
                                        component: _review_review_page__WEBPACK_IMPORTED_MODULE_10__["ReviewPage"]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/vendor/edit-order/edit-order.page.html":
/*!********************************************************!*\
  !*** ./src/app/vendor/edit-order/edit-order.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/order-list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Edit Order\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<div *ngIf=\"orders\">\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label>{{\"Order ID\" | translate}} - {{orders.id}}</ion-label>\n    </ion-item>\n\n    <ion-item style=\"padding-top:10px\">\n      <ion-label position=\"floating\"y>Status</ion-label>\n      <ion-select [(ngModel)]=\"orders.status\" name=\"status\" okText=\"OK\" cancelText=\"Cancel\">\n                <ion-select-option value=\"processing\">{{\"processing\" | translate}}</ion-select-option>\n                <ion-select-option value=\"on-hold\">{{\"on-hold\" | translate}}</ion-select-option>\n                <ion-select-option value=\"completed\">{{\"completed\" | translate}}</ion-select-option>\n                <ion-select-option value=\"cancelled\">{{\"cancelled\" | translate}}</ion-select-option>\n                <ion-select-option value=\"refunded\">{{\"refunded\" | translate}}</ion-select-option>\n                <ion-select-option value=\"failed\">{{\"failed\" | translate}}</ion-select-option>\n                <ion-select-option value=\"pending\">{{\"pending\" | translate}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Discount Total\" | translate}}</ion-label>\n      <ion-input required type=\"number\" [(ngModel)]=\"orders.discount_total\" name=\"discount_total\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Shipping Total\" | translate}}</ion-label>\n      <ion-input required type=\"number\" [(ngModel)]=\"orders.shipping_total\" name=\"shipping_total\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Total\" | translate}}</ion-label>\n      <ion-input required type=\"number\" [(ngModel)]=\"orders.total\" name=\"total\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n\t  <ion-label position=\"floating\">{{\"customer note\" | translate}}</ion-label>\n\t  <ion-textarea rows=\"3\" required type=\"text\" [(ngModel)]=\"orders.customer_note\" name=\"customer_note\"></ion-textarea>\n\t</ion-item>\n\n    <ion-item style=\"background: #f2f2f2\">\n      <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"First Name\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.first_name\" name=\"billing_first_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Last Name\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.last_name\" name=\"billing_last_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Company\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.company\" name=\"billing_company\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Address\" | translate}}1</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.address_1\" name=\"billing_address_1\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Address\" | translate}}2</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.address_2\" name=\"billing_address_2\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"City\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.city\" name=\"billing_city\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"State\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.state\" name=\"billing_state\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Postcode\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.postcode\" name=\"billing_postcode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Country\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.country\" name=\"billing_country\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Email\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.billing.email\" name=\"billing_email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Phone\" | translate}}</ion-label>\n      <ion-input required type=\"number\" [(ngModel)]=\"orders.billing.phone\" name=\"billing_phone\"></ion-input>\n    </ion-item>\n\n    <ion-item style=\"background: #f2f2f2\">\n      <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"First Name\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.first_name\" name=\"shipping_first_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Last Name\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.last_name\" name=\"shipping_last_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Company\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.company\" name=\"shipping_company\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Address\" | translate}}1</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.address_1\" name=\"shipping_address_1\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Address\" | translate}}2</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.address_2\" name=\"shipping_address_2\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"City\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.city\" name=\"shipping_city\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"State\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.state\" name=\"shipping_state\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Postcode\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.postcode\" name=\"shipping_postcode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{\"Country\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"orders.shipping.country\" name=\"shipping_country\"></ion-input>\n    </ion-item>\n\n    <ion-item style=\"background: #f2f2f2\">\n      <h2 item-left style=\"font-size: 19px\">{{\"Line Items\" | translate}}</h2>\n    </ion-item>\n\n    <div *ngIf=\"orders.line_items.length\">\n          <div *ngFor=\"let item of orders.line_items\">\n                <ion-list style=\"margin-bottom: 5px;\">\n                    <ion-item>\n                      <ion-label>{{item.name}}</ion-label>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label position=\"floating\">{{\"Price\" | translate}}</ion-label>\n                      <ion-input required type=\"number\" [(ngModel)]=\"item.price\" name=\"price\"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label position=\"floating\">{{\"Quantity\" | translate}}</ion-label>\n                      <ion-input required type=\"number\" [(ngModel)]=\"item.quantity\" name=\"quantity\"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label position=\"floating\">{{\"Sub Total\" | translate}}</ion-label>\n                      <ion-input required type=\"number\" [(ngModel)]=\"item.subtotal\" name=\"subtotal\"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label position=\"floating\">{{\"Total\" | translate}}</ion-label>\n                      <ion-input required type=\"number\" [(ngModel)]=\"item.total\" name=\"total\"></ion-input>\n                    </ion-item>\n                </ion-list>\n          </div>\n    </div>\n\n\n  </ion-list>\n\n  <div style=\"text-align: center;\">\n    <ion-button size=\"full\" color=\"{{settings.theme.button}}\" (click)=\"save()\" [disabled]=\"disableButton\">{{\"Save\" | translate}}</ion-button>\n  </div>\n\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/vendor/edit-order/edit-order.page.scss":
/*!********************************************************!*\
  !*** ./src/app/vendor/edit-order/edit-order.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9lZGl0LW9yZGVyL2VkaXQtb3JkZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/vendor/edit-order/edit-order.page.ts":
/*!******************************************************!*\
  !*** ./src/app/vendor/edit-order/edit-order.page.ts ***!
  \******************************************************/
/*! exports provided: EditOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrderPage", function() { return EditOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");






var EditOrderPage = /** @class */ (function () {
    function EditOrderPage(api, settings, route, loadingController, navCtrl) {
        this.api = api;
        this.settings = settings;
        this.route = route;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.disableButton = false;
    }
    EditOrderPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getOrder();
    };
    EditOrderPage.prototype.getOrder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.api.getItem('orders/' + this.id).subscribe(function (res) {
                                _this.orders = res;
                                loading.dismiss();
                            }, function (err) {
                                console.log(err);
                                loading.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditOrderPage.prototype.save = function () {
        var _this = this;
        console.log(this.orders);
        this.disableButton = true;
        this.api.put('orders/' + this.id, this.orders).subscribe(function (res) {
            _this.disableButton = false;
            _this.navCtrl.navigateBack('/tabs/account/vendor-orders');
        }, function (err) {
            console.log(err);
            _this.disableButton = false;
        });
    };
    EditOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-order',
            template: __webpack_require__(/*! ./edit-order.page.html */ "./src/app/vendor/edit-order/edit-order.page.html"),
            styles: [__webpack_require__(/*! ./edit-order.page.scss */ "./src/app/vendor/edit-order/edit-order.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], EditOrderPage);
    return EditOrderPage;
}());



/***/ }),

/***/ "./src/app/vendor/edit-product/edit-product.page.html":
/*!************************************************************!*\
  !*** ./src/app/vendor/edit-product/edit-product.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios' class=\"product-header\">\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/products-list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{product?.name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"product\">\n\n  <div *ngIf=\"product\" class=\"margin\">\n\n  <ion-list>\n  <ion-list-header>\n    <ion-label>{{\"Product ID\" | translate}} - {{product.id}}</ion-label>\n  </ion-list-header>\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Name\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"product.name\" name=\"name\"></ion-input>\n  </ion-item>\n\n  <ion-item style=\"padding-top:10px\">\n      <ion-label position=\"floating\">{{\"Type\" | translate}}</ion-label>\n      <ion-select [(ngModel)]=\"product.type\" name=\"type\" okText=\"OK\" cancelText=\"Cancel\">\n                 <ion-select-option value=\"simple\">{{\"Simple\" | translate}}</ion-select-option>\n               <ion-select-option value=\"grouped\">{{\"Grouped\" | translate}}</ion-select-option>\n               <ion-select-option value=\"external\">{{\"External\" | translate}}</ion-select-option>\n               <!--ion-select-option value=\"variable\">Variable</ion-select-option-->\n      </ion-select>\n  </ion-item>\n\n\n  <ion-item style=\"padding-top:10px\">\n      <ion-label position=\"floating\">{{\"Status\" | translate}}</ion-label>\n      <ion-select [(ngModel)]=\"product.status\" name=\"status\" okText=\"OK\" cancelText=\"Cancel\">\n                 <ion-select-option value=\"draft\">{{\"Draft\" | translate}}</ion-select-option>\n               <ion-select-option value=\"pending\">{{\"Pending\" | translate}}</ion-select-option>\n               <!--ion-select-option value=\"public\">public</ion-select-option-->\n               <ion-select-option value=\"publish\">{{\"Publish\" | translate}}</ion-select-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf=\"product.type == 'external'\">\n    <ion-label position=\"floating\">{{\"External Url\" | translate}}</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"product.external_url\" name=\"external_url\"></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Short Description\" | translate}}</ion-label>\n      <ion-textarea rows=\"4\" required type=\"text\" [(ngModel)]=\"product.short_description\" name=\"short_description\"></ion-textarea>\n  </ion-item>  \n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Description\" | translate}}</ion-label>\n      <ion-textarea rows=\"4\" required type=\"text\" [(ngModel)]=\"product.description\" name=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-list-header>\n    <ion-label>{{\"Image\" | translate}}</ion-label>\n  </ion-list-header>\n\n      <img tappable *ngFor=\"let item of product.images; let i = index;\" src=\"{{item.src}}\" style=\"width: 80px; height: auto; padding: 3px; border: 1px solid #f5fdff\" (click)=\"replaceImage(i)\">\n\n      <ion-spinner *ngIf=\"uploadingImage\" name=\"circles\" style=\"float: left; margin: 27px 27px 27px 27px; padding: 3px; display: inline;\"></ion-spinner>\n      \n      <img tappable src=\"assets/image/upload_placeholder.png\" style=\"width: 80px; height: auto; padding: 3px; border: 1px solid #f5fdff\" (click)=\"picker()\"/>\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Regular Price\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"product.regular_price\" name=\"regular_price\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Sale Price\" | translate}}</ion-label>\n      <ion-input required type=\"text\" [(ngModel)]=\"product.sale_price\" name=\"sale_price\"></ion-input>\n  </ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Weight\" | translate}}</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"product.weight\" name=\"weight\"></ion-input>\n</ion-item>\n\n  <ion-item class=\"date\">\n      <ion-label position=\"floating\">{{\"Date On Sale From\" | translate}}</ion-label>\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"product.date_on_sale_from\" name=\"date_on_sale_from\"></ion-datetime>\n  </ion-item>\n\n  <ion-item class=\"date\">\n      <ion-label position=\"floating\">{{\"Date On Sale To\" | translate}}</ion-label>\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"product.date_on_sale_to\" name=\"date_on_sale_to\"></ion-datetime>\n  </ion-item>\n\n\n  <ion-item>\n      <ion-label>{{\"Purchasable\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.purchasable\" name=\"purchasable\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"InStock\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.in_stock\" name=\"in_stock\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"Shipping Required\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.shipping_required\" name=\"shipping_required\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"Sold Individually\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.sold_individually\" name=\"sold_individually\"></ion-toggle>\n  </ion-item>\n\n  <ion-item class=\"option\" *ngIf=\"product.type != 'external'\">\n    <ion-label>{{\"Manage Stock\" | translate}}</ion-label>\n    <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"product.manage_stock\" name=\"manage_stock\"></ion-toggle>\n</ion-item>\n\n<ion-item *ngIf=\"product.manage_stock && product.type != 'external'\">\n    <ion-label position=\"floating\">{{\"Quantity\" | translate}}</ion-label>\n    <ion-input required type=\"number\" [(ngModel)]=\"product.stock_quantity\" name=\"stock_quantity\"></ion-input>\n</ion-item>\n\n  <ion-item style=\"padding-top:10px\" *ngIf=\"data?.categories\">\n      <ion-label position=\"floating\">{{\"Categories\" | translate}}</ion-label>\n      <ion-select [(ngModel)]=\"categories\" name=\"categories\" multiple=\"true\" okText=\"OK\" cancelText=\"Cancel\">\n                  <div *ngFor=\"let field of data.categories\">\n                 <ion-select-option value=\"{{field.id}}\">{{field.name}}</ion-select-option>\n                 </div>\n      </ion-select>\n  </ion-item>\n\n  <div *ngIf=\"variations?.length\" class=\"related-products\">\n    <ion-item *ngIf=\"variations\" class=\"related-item-name\">{{\"Variations\" | translate}}</ion-item>\n    <div class=\"scroll-related-products\">\n        <div class=\"product\" *ngFor=\"let item of variations\" [style.width.%]=\"settings.dimensions.productSliderWidth\">\n            <ion-card class=\"ion-activatable ion-focusable hydrated\">\n              <ion-img alt=\"\" (click)=\"editProduct(item)\" [style.height.px]=\"settings.dimensions.productsGridViewHeight\" src=\"{{item.image.src}}\"></ion-img>\n              <ion-card-header (click)=\"editProduct(item)\">\n                  <ion-card-subtitle mode=\"md\" style=\"text-align: center;\">{{item.id}}</ion-card-subtitle>\n              </ion-card-header>\n              <ion-card-content (click)=\"editProduct(item)\">\n                  <p class=\"price\">\n                    <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                      <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n                  </p>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n  </div>\n\n\n    <div padding>\n    <ion-button class=\"add-to-cart-button\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"saveProduct()\">{{\"SAVE\" | translate}}</ion-button>\n    </div>\n\n  </ion-list>\n\n</div>\n\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/vendor/edit-product/edit-product.page.scss":
/*!************************************************************!*\
  !*** ./src/app/vendor/edit-product/edit-product.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".related-products .price {\n  padding: 0 10px 10px 10px;\n  font-weight: bold;\n  font-size: 14px; }\n  .related-products .price .special-price {\n    padding-left: 5px;\n    font-size: 10px;\n    font-weight: 300; }\n  .related-products .related-item-name {\n  padding: 16px 0 0 0;\n  background-color: transparent;\n  font-weight: 400; }\n  .related-products .scroll-related-products {\n  padding: 16px 0;\n  background-color: #fffff;\n  overflow: auto;\n  white-space: nowrap; }\n  .related-products .scroll-related-products .product {\n    display: inline-block;\n    text-decoration: none;\n    width: 50%;\n    margin: 0 0 0 10px; }\n  .related-products .scroll-related-products .product:last-child {\n    margin-right: 10px; }\n  @media (min-width: 481px) and (max-width: 768px) {\n    .related-products .scroll-related-products .product {\n      width: 33.333%; } }\n  @media (min-width: 769px) and (max-width: 1024px) {\n    .related-products .scroll-related-products .product {\n      width: 25%; } }\n  @media (min-width: 1025px) {\n    .related-products .scroll-related-products .product {\n      width: 20%; } }\n  .related-products .scroll-related-products ion-img {\n    height: auto;\n    width: 100%; }\n  .related-products .scroll-related-products ion-card {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    margin-left: 2px;\n    box-shadow: none; }\n  .related-products .scroll-related-products .card-content-md {\n    padding: 0 16px;\n    font-size: 14px;\n    line-height: 1.5;\n    text-align: center; }\n  .related-products .scroll-related-products ion-card-header {\n    padding: 8px 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvdmVuZG9yL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBRVEseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUVqQixlQUFlLEVBQUE7RUFMdkI7SUFRWSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBVjVCO0VBY1EsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQkFBZ0IsRUFBQTtFQWhCeEI7RUFtQlEsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7RUF0QjNCO0lBd0JZLHFCQUFxQjtJQUVyQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGtCQUFrQixFQUFBO0VBNUI5QjtJQStCWSxrQkFDSixFQUFBO0VBQ0E7SUFqQ1I7TUFtQ2dCLGNBQWMsRUFBQSxFQUNqQjtFQUVMO0lBdENSO01Bd0NnQixVQUFVLEVBQUEsRUFDYjtFQUVMO0lBM0NSO01BNkNnQixVQUFVLEVBQUEsRUFDYjtFQTlDYjtJQWlEWSxZQUFZO0lBQ1osV0FBVyxFQUFBO0VBbER2QjtJQXFEWSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7RUF6RDVCO0lBNkRZLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0VBaEU5QjtJQW9FWSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAucmVsYXRlZC1wcm9kdWN0cyB7XHJcbiAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIC8vY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgLnNwZWNpYWwtcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgLy9jb2xvcjogIzg2ODY4NjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVsYXRlZC1pdGVtLW5hbWUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMCAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNjcm9sbC1yZWxhdGVkLXByb2R1Y3RzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmY7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvL2NvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXJkLWNvbnRlbnQtbWQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/vendor/edit-product/edit-product.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/vendor/edit-product/edit-product.page.ts ***!
  \**********************************************************/
/*! exports provided: EditProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductPage", function() { return EditProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../data/product */ "./src/app/data/product.ts");
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./md5 */ "./src/app/vendor/edit-product/md5.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../config */ "./src/app/config.ts");















var EditProductPage = /** @class */ (function () {
    function EditProductPage(actionSheetController, modalCtrl, api, data, productData, settings, router, loadingController, navCtrl, alertController, route, config, transfer, imagePicker, crop) {
        this.actionSheetController = actionSheetController;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.data = data;
        this.productData = productData;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.config = config;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.filter = {};
        this.categories = [];
        this.usedVariationAttributes = [];
        this.options = {};
        this.variations = [];
        this.relatedProducts = [];
        this.upsellProducts = [];
        this.crossSellProducts = [];
        this.reviews = [];
        this.cart = {};
        this.disableButton = false;
        this.uploadingImage = false;
        this.imageIndex = 0;
        this.filter.page = 1;
        this.filter.status = 'publish';
    }
    EditProductPage.prototype.getProduct = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getItem('products/' + this.id).subscribe(function (res) {
                            _this.product = res;
                            _this.handleProduct();
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProductPage.prototype.ngOnInit = function () {
        this.product = this.productData.product;
        if (this.product.images) {
            if (this.product.images.length == 0) {
                this.product.images = {};
            }
            else
                this.imageIndex = this.product.images.length;
        }
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.product.id)
            this.handleProduct();
        else
            this.getProduct();
    };
    EditProductPage.prototype.handleProduct = function () {
        for (var item in this.product.categories) {
            this.categories[item] = this.product.categories[item].id.toString();
        }
        this.usedVariationAttributes = this.product.attributes.filter(function (attribute) {
            return attribute.variation == true;
        });
        this.options.product_id = this.product.id;
        if ((this.product.type == 'variable') && this.product.variations.length)
            this.getVariationProducts();
        this.getRelatedProducts();
        this.getUpsellProducts();
        this.getCrossSellProducts();
        this.getReviews();
    };
    EditProductPage.prototype.getVariationProducts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getItem('products/' + this.product.id + '/variations').subscribe(function (res) {
                            _this.variations = res;
                        }, function (err) { })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProductPage.prototype.getRelatedProducts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filter, item;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.product.related_ids != 0)) return [3 /*break*/, 2];
                        filter = [];
                        for (item in this.product.related_ids)
                            filter['include[' + item + ']'] = this.product.related_ids[item];
                        return [4 /*yield*/, this.api.getItem('products', filter).subscribe(function (res) {
                                _this.relatedProducts = res;
                            }, function (err) { })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditProductPage.prototype.getUpsellProducts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filter, item;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.product.upsell_ids != 0)) return [3 /*break*/, 2];
                        filter = [];
                        for (item in this.product.upsell_ids)
                            filter['include[' + item + ']'] = this.product.upsell_ids[item];
                        return [4 /*yield*/, this.api.getItem('products', filter).subscribe(function (res) {
                                _this.upsellProducts = res;
                            }, function (err) { })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditProductPage.prototype.getCrossSellProducts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filter, item;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.product.cross_sell_ids != 0)) return [3 /*break*/, 2];
                        filter = [];
                        for (item in this.product.cross_sell_ids)
                            filter['include[' + item + ']'] = this.product.cross_sell_ids[item];
                        return [4 /*yield*/, this.api.getItem('products', filter).subscribe(function (res) {
                                _this.crossSellProducts = res;
                            }, function (err) { })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditProductPage.prototype.getReviews = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getItem('products/' + this.product.id + '/reviews').subscribe(function (res) {
                            _this.reviews = res;
                            for (var item in _this.reviews) {
                                _this.reviews[item].avatar = Object(_md5__WEBPACK_IMPORTED_MODULE_8__["md5"])(_this.reviews[item].email);
                            }
                        }, function (err) { })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProductPage.prototype.goToProduct = function (product) {
        this.productData.product = product;
        var endIndex = this.router.url.lastIndexOf('/');
        var path = this.router.url.substring(0, endIndex);
        this.navCtrl.navigateForward(path + '/' + product.id);
    };
    EditProductPage.prototype.presentAlert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProductPage.prototype.OnDestroy = function () {
        //this.productData.product = {};
    };
    EditProductPage.prototype.saveProduct = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disableButton = true;
                        this.product.categories = [];
                        for (id in this.categories) {
                            this.product.categories[id] = {
                                id: parseInt(this.categories[id])
                            };
                        }
                        if (this.product.images.length)
                            this.product.images[0].position = 0;
                        if (this.product.type == 'external')
                            this.product.manage_stock = false;
                        return [4 /*yield*/, this.api.put('products/' + this.id, this.product).subscribe(function (res) {
                                _this.product = res;
                                _this.productData.product = {};
                                _this.navCtrl.navigateBack('/tabs/account/vendor-products');
                            }, function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProductPage.prototype.picker = function () {
        var _this = this;
        console.log('hello');
        var options = {
            maximumImagesCount: 1,
        };
        this.photos = new Array();
        this.imagePicker.getPictures(options)
            .then(function (results) {
            _this.reduceImages(results).then(function (results) { return _this.handleUpload(results); });
        }, function (err) { console.log(err); });
    };
    EditProductPage.prototype.handleUpload = function (results) {
        this.upload();
    };
    EditProductPage.prototype.reduceImages = function (selected_pictures) {
        var _this = this;
        return selected_pictures.reduce(function (promise, item) {
            return promise.then(function (result) {
                return _this.crop.crop(item, { quality: 75, targetHeight: 100, targetWidth: 100 })
                    .then(function (cropped_image) { return _this.photos = cropped_image; });
            });
        }, Promise.resolve());
    };
    EditProductPage.prototype.upload = function () {
        var _this = this;
        this.uploadingImage = true;
        var fileTransfer = this.transfer.create();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_11__["Headers"]();
        headers.append('Content-Type', 'multipart/form-data');
        var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: { headers: headers }
        };
        fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options)
            .then(function (data) {
            _this.uploadingImage = false;
            _this.imageresult = JSON.parse(data.response);
            _this.product.images[_this.imageIndex] = {};
            _this.product.images[_this.imageIndex].src = _this.imageresult.url;
            _this.imageIndex = _this.imageIndex + 1;
            // success
        }, function (err) {
            //this.functions.showAlert("error", err);
        });
    };
    EditProductPage.prototype.replaceImage = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Delete Image',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.product.images.splice(index, 1);
                                        _this.imageIndex = _this.imageIndex - 1;
                                    }
                                }, {
                                    text: 'Edit Image',
                                    icon: 'create',
                                    handler: function () {
                                        var options = {
                                            maximumImagesCount: 1,
                                        };
                                        _this.photos = new Array();
                                        _this.imagePicker.getPictures(options)
                                            .then(function (results) {
                                            _this.reduceImages(results).then(function (results) { return _this.replaceUpload(index); });
                                        }, function (err) {
                                            //this.functions.showAlert("error", err);
                                        });
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProductPage.prototype.replaceUpload = function (index) {
        var _this = this;
        this.uploadingImage = true;
        var fileTransfer = this.transfer.create();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_11__["Headers"]();
        headers.append('Content-Type', 'multipart/form-data');
        var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: { headers: headers }
        };
        fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options)
            .then(function (data) {
            _this.uploadingImage = false;
            _this.imageresult = JSON.parse(data.response);
            _this.product.images[index].src = _this.imageresult.url;
            // success
        }, function (err) {
            //this.functions.showAlert("error", err);
        });
    };
    EditProductPage.prototype.editProduct = function (product) {
        this.productData.variationProduct = product;
        this.navCtrl.navigateForward(this.router.url + '/edit-variation-product/' + product.id);
    };
    EditProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.page.html */ "./src/app/vendor/edit-product/edit-product.page.html"),
            styles: [__webpack_require__(/*! ./edit-product.page.scss */ "./src/app/vendor/edit-product/edit-product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _config__WEBPACK_IMPORTED_MODULE_13__["Config"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"]])
    ], EditProductPage);
    return EditProductPage;
}());

// 2) Add plugin related to image upload 3) Test Upload image 4) Test Put product 


/***/ }),

/***/ "./src/app/vendor/edit-product/md5.ts":
/*!********************************************!*\
  !*** ./src/app/vendor/edit-product/md5.ts ***!
  \********************************************/
/*! exports provided: md5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "md5", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};


/***/ }),

/***/ "./src/app/vendor/edit-variation/edit-variation.page.html":
/*!****************************************************************!*\
  !*** ./src/app/vendor/edit-variation/edit-variation.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/vendor-products/edit-product\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{product?.name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"product\">\n\n  <div *ngIf=\"product\" class=\"margin\">\n\n    <ion-list>\n\n  <ion-item>\n      <ion-label>{{\"Product ID\" | translate}} - {{product.id}}</ion-label>\n  </ion-item>\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Description\" | translate}}</ion-label>\n      <ion-textarea rows=\"4\" required type=\"text\" [(ngModel)]=\"product.description\" name=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-list-header>\n      <ion-label>{{\"Image\" | translate}}</ion-label>\n  </ion-list-header>\n\n  <img tappable *ngFor=\"let item of product.images; let i = index;\" src=\"{{item.src}}\" style=\"width: 80px; height: auto; padding: 3px; border: 1px solid #f5fdff\" (click)=\"replaceImage(i)\">\n\n  <ion-spinner *ngIf=\"uploadingImage\" name=\"circles\" style=\"float: left; margin: 27px 27px 27px 27px; padding: 3px; display: inline;\"></ion-spinner>\n  \n  <img tappable src=\"assets/image/upload_placeholder.png\" style=\"width: 80px; height: auto; padding: 3px; border: 1px solid #f5fdff\" (click)=\"picker()\"/>\n\n  <ion-item>\n      <ion-label>{{\"Price\" | translate}}</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"product.price\" name=\"price\" readonly></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Regular Price\" | translate}}</ion-label>\n      <ion-input required type=\"number\" [(ngModel)]=\"product.regular_price\" name=\"regular_price\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label position=\"floating\">{{\"Sale Price\" | translate}}</ion-label>\n      <ion-input required type=\"number\" [(ngModel)]=\"product.sale_price\" name=\"sale_price\"></ion-input>\n  </ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"weight\" | translate}}</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"product.weight\" name=\"weight\"></ion-input>\n</ion-item>\n\n  <ion-item class=\"date\">\n      <ion-label position=\"floating\">{{\"Date on sale from\" | translate}}</ion-label>\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"product.date_on_sale_from\" name=\"date_on_sale_from\"></ion-datetime>\n  </ion-item>\n\n  <ion-item class=\"date\">\n      <ion-label position=\"floating\">{{\"Date on sale to\" | translate}}</ion-label>\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"product.date_on_sale_to\" name=\"date_on_sale_to\"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"InStock\" | translate}}</ion-label>\n      <ion-toggle checked=\"true\" [(ngModel)]=\"product.in_stock\" name=\"in_stock\"></ion-toggle>\n  </ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Quantity\" | translate}}</ion-label>\n    <ion-input required type=\"number\" [(ngModel)]=\"product.stock_quantity\" name=\"stock_quantity\"></ion-input>\n</ion-item>\n\n<!--div *ngIf=\"product.attributes?.length\">\n  <ion-label>Attributes</ion-label>\n  <ion-item *ngFor=\"let item of product.attributes\">\n  <ion-grid>\n  <ion-row>\n  <ion-col>\n  {{item.name}}\n  </ion-col>\n  <ion-col>\n  {{item.option}}\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n  </ion-item>\n</div-->\n\n  </ion-list>\n\n</div>\n\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/vendor/edit-variation/edit-variation.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/vendor/edit-variation/edit-variation.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9lZGl0LXZhcmlhdGlvbi9lZGl0LXZhcmlhdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/vendor/edit-variation/edit-variation.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/vendor/edit-variation/edit-variation.page.ts ***!
  \**************************************************************/
/*! exports provided: EditVariationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVariationPage", function() { return EditVariationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../data/product */ "./src/app/data/product.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../config */ "./src/app/config.ts");














var EditVariationPage = /** @class */ (function () {
    function EditVariationPage(actionSheetController, modalCtrl, api, data, productData, settings, router, loadingController, navCtrl, alertController, route, config, transfer, imagePicker, crop) {
        this.actionSheetController = actionSheetController;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.data = data;
        this.productData = productData;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.config = config;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.filter = {};
        this.categories = [];
        this.usedVariationAttributes = [];
        this.options = {};
        this.variations = [];
        this.relatedProducts = [];
        this.upsellProducts = [];
        this.crossSellProducts = [];
        this.reviews = [];
        this.cart = {};
        this.disableButton = false;
        this.uploadingImage = false;
        this.imageIndex = 0;
        this.filter.page = 1;
        this.filter.status = 'publish';
    }
    EditVariationPage.prototype.getProduct = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getItem('products/' + this.id).subscribe(function (res) {
                            _this.product = res;
                            _this.handleProduct();
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditVariationPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        /*this.product = this.productData.variationProduct;
        console.log(this.product);
        

        if(this.product.images){
            if (this.product.images.length == 0) {
                this.product.images = {};
            } else this.imageIndex = this.product.images.length;
        }

        if (this.product.id) this.handleProduct();
        else */ this.getProduct();
    };
    EditVariationPage.prototype.handleProduct = function () {
        for (var item in this.product.categories) {
            this.categories[item] = this.product.categories[item].id.toString();
        }
        this.usedVariationAttributes = this.product.attributes.filter(function (attribute) {
            return attribute.variation == true;
        });
        this.options.product_id = this.product.id;
        /*if ((this.product.type == 'variable') && this.product.variations.length) this.getVariationProducts();
        this.getRelatedProducts();
        this.getUpsellProducts();
        this.getCrossSellProducts();
        this.getReviews();*/
    };
    /*async getVariationProducts() {
        await this.api.getItem('products/' + this.product.id + '/variations').subscribe(res => {
            this.variations = res;
        }, err => {});
    }
    async getRelatedProducts() {
        if (this.product.related_ids != 0) {
            var filter = [];
            for (let item in this.product.related_ids) filter['include[' + item + ']'] = this.product.related_ids[item];
            await this.api.getItem('products', filter).subscribe(res => {
                this.relatedProducts = res;
            }, err => {});
        }
    }
    async getUpsellProducts() {
        if (this.product.upsell_ids != 0) {
            var filter = [];
            for (let item in this.product.upsell_ids) filter['include[' + item + ']'] = this.product.upsell_ids[item];
            await this.api.getItem('products', filter).subscribe(res => {
                this.upsellProducts = res;
            }, err => {});
        }
    }
    async getCrossSellProducts() {
        if (this.product.cross_sell_ids != 0) {
            var filter = [];
            for (let item in this.product.cross_sell_ids) filter['include[' + item + ']'] = this.product.cross_sell_ids[item];
            await this.api.getItem('products', filter).subscribe(res => {
                this.crossSellProducts = res;
            }, err => {});
        }
    }
    async getReviews() {
        await this.api.getItem('products/' + this.product.id + '/reviews').subscribe(res => {
            this.reviews = res;
            for (let item in this.reviews) {
                this.reviews[item].avatar = md5(this.reviews[item].email);
            }
        }, err => {});
    }
    goToProduct(product) {
        this.productData.vendorProduct = product;
        var endIndex = this.router.url.lastIndexOf('/');
        var path = this.router.url.substring(0, endIndex);
        this.navCtrl.navigateForward(path + '/' + product.id);
    }*/
    EditVariationPage.prototype.presentAlert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditVariationPage.prototype.OnDestroy = function () {
        this.productData.variationProduct = {};
    };
    EditVariationPage.prototype.saveProduct = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disableButton = true;
                        this.product.categories = [];
                        for (id in this.categories) {
                            this.product.categories[id] = {
                                id: parseInt(this.categories[id])
                            };
                        }
                        if (this.product.images.length)
                            this.product.images[0].position = 0;
                        if (this.product.type == 'external')
                            this.product.manage_stock = false;
                        return [4 /*yield*/, this.api.put('products/' + this.id, this.product).subscribe(function (res) {
                                _this.product = res;
                                _this.navCtrl.navigateBack('/tabs/account/vendor-products/edit-product/' + _this.productData.product.id);
                            }, function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditVariationPage.prototype.picker = function () {
        var _this = this;
        console.log('hello');
        var options = {
            maximumImagesCount: 1,
        };
        this.photos = new Array();
        this.imagePicker.getPictures(options)
            .then(function (results) {
            _this.reduceImages(results).then(function (results) { return _this.handleUpload(results); });
        }, function (err) { console.log(err); });
    };
    EditVariationPage.prototype.handleUpload = function (results) {
        this.upload();
    };
    EditVariationPage.prototype.reduceImages = function (selected_pictures) {
        var _this = this;
        return selected_pictures.reduce(function (promise, item) {
            return promise.then(function (result) {
                return _this.crop.crop(item, { quality: 75, targetHeight: 100, targetWidth: 100 })
                    .then(function (cropped_image) { return _this.photos = cropped_image; });
            });
        }, Promise.resolve());
    };
    EditVariationPage.prototype.upload = function () {
        var _this = this;
        this.uploadingImage = true;
        var fileTransfer = this.transfer.create();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_10__["Headers"]();
        headers.append('Content-Type', 'multipart/form-data');
        var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: { headers: headers }
        };
        fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options)
            .then(function (data) {
            _this.uploadingImage = false;
            _this.imageresult = JSON.parse(data.response);
            _this.product.images[_this.imageIndex] = {};
            _this.product.images[_this.imageIndex].src = _this.imageresult.url;
            _this.imageIndex = _this.imageIndex + 1;
            // success
        }, function (err) {
            //this.functions.showAlert("error", err);
        });
    };
    EditVariationPage.prototype.replaceImage = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Delete Image',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.product.images.splice(index, 1);
                                        _this.imageIndex = _this.imageIndex - 1;
                                    }
                                }, {
                                    text: 'Edit Image',
                                    icon: 'create',
                                    handler: function () {
                                        var options = {
                                            maximumImagesCount: 1,
                                        };
                                        _this.photos = new Array();
                                        _this.imagePicker.getPictures(options)
                                            .then(function (results) {
                                            _this.reduceImages(results).then(function (results) { return _this.replaceUpload(index); });
                                        }, function (err) {
                                            //this.functions.showAlert("error", err);
                                        });
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditVariationPage.prototype.replaceUpload = function (index) {
        var _this = this;
        this.uploadingImage = true;
        var fileTransfer = this.transfer.create();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_10__["Headers"]();
        headers.append('Content-Type', 'multipart/form-data');
        var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: { headers: headers }
        };
        fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options)
            .then(function (data) {
            _this.uploadingImage = false;
            _this.imageresult = JSON.parse(data.response);
            _this.product.images[index].src = _this.imageresult.url;
            // success
        }, function (err) {
            //this.functions.showAlert("error", err);
        });
    };
    EditVariationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-variation',
            template: __webpack_require__(/*! ./edit-variation.page.html */ "./src/app/vendor/edit-variation/edit-variation.page.html"),
            styles: [__webpack_require__(/*! ./edit-variation.page.scss */ "./src/app/vendor/edit-variation/edit-variation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _config__WEBPACK_IMPORTED_MODULE_12__["Config"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_9__["Crop"]])
    ], EditVariationPage);
    return EditVariationPage;
}());



/***/ }),

/***/ "./src/app/vendor/order-list/order-list.page.html":
/*!********************************************************!*\
  !*** ./src/app/vendor/order-list/order-list.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Orders\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"order-list\">\n\n  <div class=\"spinner\" *ngIf=\"loader\"><ion-spinner> </ion-spinner></div>\n\n\n  <div *ngIf=\"orders\">\n    <div *ngIf=\"!loader && orders.length == 0\" text-center class=\"empty\">\n    <ion-icon name=\"document\"></ion-icon>\n    </div>\n\n    <ion-card *ngFor=\"let item of orders\" mode=\"md\">\n      <ion-card-header (click)=\"getDetail(item)\" class=\"ion-activatable ion-focusable hydrated\">\n        <ion-card-subtitle>{{item.id}} - <span style=\"text-transform: uppercase;\">{{item.status}}</span></ion-card-subtitle>\n        <ion-card-title>{{item.total | currency:settings.currency:symbol:'1.2-2'}}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>{{item.date_created | date:'MMM d, y hh:mm a'}}</p>\n        <p [innerHTML]=\"item.payment_method_title\"></p>\n        <ion-button size=\"small\" (click)=\"getDetail(item)\" color=\"{{settings.theme.button}}\" fill=\"outline\" slot=\"start\">\n        <ion-icon slot=\"icon-only\" name=\"eye\"></ion-icon>\n        {{\"View\" | translate}}\n        </ion-button>\n        <ion-button size=\"small\" (click)=\"editOrder(item)\" color=\"{{settings.theme.button}}\" fill=\"outline\" slot=\"end\">\n        <ion-icon slot=\"icon-only\" name=\"create\" mode=\"ios\"></ion-icon>\n        {{\"Edit\" | translate}}\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && orders.length\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/vendor/order-list/order-list.page.scss":
/*!********************************************************!*\
  !*** ./src/app/vendor/order-list/order-list.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-list ion-card {\n  margin: 0;\n  margin-bottom: 20px; }\n\n.order-list ion-card:has(> .activated) {\n  opacity: 0.8;\n  transition-timing-function: ease-out;\n  transition: .3s;\n  box-shadow: none; }\n\n.order-list ion-card-title {\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.2; }\n\n.order-list .empty {\n  margin-top: 50px;\n  text-align: center; }\n\n.order-list .empty ion-icon {\n    font-size: 7.2em; }\n\n.order-list ion-card-subtitle {\n  font-weight: 900;\n  font-size: 13px;\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvdmVuZG9yL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxTQUFTO0VBQ1QsbUJBQW1CLEVBQUE7O0FBSDNCO0VBTVEsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBVHhCO0VBWVEsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFkeEI7RUFrQlEsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQW5CMUI7SUFxQlksZ0JBQWdCLEVBQUE7O0FBckI1QjtFQTBCUSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9vcmRlci1saXN0L29yZGVyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWxpc3Qge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBpb24tY2FyZDpoYXMoPiAuYWN0aXZhdGVkKXtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgfVxuXG4gICAgLmVtcHR5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDcuMmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/vendor/order-list/order-list.page.ts":
/*!******************************************************!*\
  !*** ./src/app/vendor/order-list/order-list.page.ts ***!
  \******************************************************/
/*! exports provided: OrderListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPage", function() { return OrderListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");






var OrderListPage = /** @class */ (function () {
    function OrderListPage(api, settings, router, navCtrl, route) {
        this.api = api;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.filter = {};
        this.orders = [];
        this.hasMoreItems = true;
        this.loader = false;
        this.filter.page = 1;
        this.filter.vendorid = this.settings.customer.id;
    }
    OrderListPage.prototype.ngOnInit = function () {
        //this.getOrders();
        //WCFM
        this.getWCFMOrders();
    };
    /*getOrders() {
        this.loader = true;
        this.api.getItem('orders', this.filter).subscribe(res => {
            this.orders = res;
            this.loader = false;
        }, err => {
            console.log(err);
        });
    }
    loadData(event) {
        this.filter.page = this.filter.page + 1;
        this.api.getItem('orders', this.filter).subscribe(res => {
            this.orders.push.apply(this.orders, res);
            event.target.complete();
            if (!res) this.hasMoreItems = false;
        }, err => {
            event.target.complete();
        });
    }*/
    OrderListPage.prototype.getDetail = function (order) {
        this.navCtrl.navigateForward('/tabs/account/vendor-orders/view-order/' + order.id);
    };
    OrderListPage.prototype.editOrder = function (order) {
        this.navCtrl.navigateForward('/tabs/account/vendor-orders/edit-order/' + order.id);
    };
    //WCFM
    OrderListPage.prototype.getWCFMOrders = function () {
        var _this = this;
        this.loader = true;
        this.api.getWCFM('orders', this.filter).subscribe(function (res) {
            _this.orders = res;
            _this.loader = false;
        }, function (err) {
            console.log(err);
        });
    };
    OrderListPage.prototype.loadData = function (event) {
        var _this = this;
        this.filter.page = this.filter.page + 1;
        this.api.getWCFM('orders', this.filter).subscribe(function (res) {
            _this.orders.push.apply(_this.orders, res);
            event.target.complete();
            if (!res)
                _this.hasMoreItems = false;
        }, function (err) {
            event.target.complete();
        });
    };
    OrderListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__(/*! ./order-list.page.html */ "./src/app/vendor/order-list/order-list.page.html"),
            styles: [__webpack_require__(/*! ./order-list.page.scss */ "./src/app/vendor/order-list/order-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OrderListPage);
    return OrderListPage;
}());



/***/ }),

/***/ "./src/app/vendor/order-note-list/order-note-list.page.html":
/*!******************************************************************!*\
  !*** ./src/app/vendor/order-note-list/order-note-list.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-title>{{\"Order Note List\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/vendor/order-note-list/order-note-list.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/vendor/order-note-list/order-note-list.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9vcmRlci1ub3RlLWxpc3Qvb3JkZXItbm90ZS1saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vendor/order-note-list/order-note-list.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/vendor/order-note-list/order-note-list.page.ts ***!
  \****************************************************************/
/*! exports provided: OrderNoteListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderNoteListPage", function() { return OrderNoteListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderNoteListPage = /** @class */ (function () {
    function OrderNoteListPage() {
    }
    OrderNoteListPage.prototype.ngOnInit = function () {
    };
    OrderNoteListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-note-list',
            template: __webpack_require__(/*! ./order-note-list.page.html */ "./src/app/vendor/order-note-list/order-note-list.page.html"),
            styles: [__webpack_require__(/*! ./order-note-list.page.scss */ "./src/app/vendor/order-note-list/order-note-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderNoteListPage);
    return OrderNoteListPage;
}());



/***/ }),

/***/ "./src/app/vendor/product-add/category/category.page.html":
/*!****************************************************************!*\
  !*** ./src/app/vendor/product-add/category/category.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios' class=\"product-header\">\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Select Category\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"categories\">\n\t<ion-row>\n    <ion-col size='6' *ngFor=\"let category of data.mainCategories\" (click)=\"getCategory(category.id, category.slug, category.name)\">\n    <ion-card class=\"category-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\n      <ion-img alt=\"\" src=\"{{category.image?.src}}\"></ion-img>\n      <ion-card-header>\n        <ion-card-subtitle [innerHTML]=\"category.name\"></ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/vendor/product-add/category/category.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/vendor/product-add/category/category.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wcm9kdWN0LWFkZC9jYXRlZ29yeS9jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuXHRtYXJnaW46IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vendor/product-add/category/category.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/vendor/product-add/category/category.page.ts ***!
  \**************************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../data */ "./src/app/data.ts");
/* harmony import */ var _data_vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../data/vendor */ "./src/app/data/vendor.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../data/settings */ "./src/app/data/settings.ts");








var CategoryPage = /** @class */ (function () {
    function CategoryPage(vendor, api, data, loadingController, navCtrl, router, settings, route) {
        this.vendor = vendor;
        this.api = api;
        this.data = data;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.settings = settings;
        this.route = route;
        this.items = {};
        this.subcategories = [];
        this.categories = [];
    }
    CategoryPage.prototype.getCategory = function (ID, slug, name) {
        this.subcategories = [];
        this.vendor.product.categories[0] = { id: ID };
        this.items.id = ID;
        this.items.name = name;
        this.items.slug = slug;
        this.items.categories = this.data.categories;
        for (var item in this.items.categories) {
            if (this.items.categories[item].parent == ID) {
                this.subcategories.push(this.items.categories[item]);
            }
        }
        if (this.subcategories.length) {
            this.navCtrl.navigateForward('/tabs/account/add-products/subcategory/' + ID);
        }
        else
            this.navCtrl.navigateForward('/tabs/account/add-products/details/' + ID);
    };
    CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.page.html */ "./src/app/vendor/product-add/category/category.page.html"),
            styles: [__webpack_require__(/*! ./category.page.scss */ "./src/app/vendor/product-add/category/category.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CategoryPage);
    return CategoryPage;
}());



/***/ }),

/***/ "./src/app/vendor/product-add/details/details.page.html":
/*!**************************************************************!*\
  !*** ./src/app/vendor/product-add/details/details.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/category\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Details\" | translate}}\n    </ion-title>\n\n     <ion-buttons slot=\"end\">\n\t    <ion-button style=\"margin-right: 10px; text-transform: capitalize;\" (click)=\"next()\">{{\"Next\" | translate}}</ion-button>\n\t  </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Product Name\" | translate}}</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"vendor.product.name\" name=\"name\"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label>{{\"Type\" | translate}}</ion-label>\n    <ion-select [(ngModel)]=\"vendor.product.type\" name=\"type\" okText=\"OK\" cancelText=\"Cancel\">\n               <ion-select-option value=\"simple\">{{\"Simple\" | translate}}</ion-select-option>\n               <ion-select-option value=\"external\">{{\"External\" | translate}}</ion-select-option>\n    </ion-select>\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Regular Price\" | translate}}</ion-label> \n    <ion-input required type=\"text\" [(ngModel)]=\"vendor.product.regular_price\" name=\"regular_price\"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Sale Price\" | translate}}</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"vendor.product.sale_price\" name=\"sale_price\"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Short Description\" | translate}}</ion-label>\n    <ion-textarea  rows=\"2\" required type=\"text\" [(ngModel)]=\"vendor.product.short_description\" name=\"short_description\"></ion-textarea>\n</ion-item> \n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Description\" | translate}}</ion-label>\n    <ion-textarea rows=\"3\" required type=\"text\" [(ngModel)]=\"vendor.product.description\" name=\"short_description\"></ion-textarea>\n</ion-item>\n\n<ion-item>\n    <ion-label position=\"floating\">{{\"Weight\" | translate}}</ion-label>\n    <ion-input required type=\"text\" [(ngModel)]=\"vendor.product.weight\" name=\"weight\"></ion-input>\n</ion-item>\n\n  <ion-item class=\"date\">\n      <ion-label position=\"floating\">{{\"Date On Sale From\" | translate}}</ion-label>\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"vendor.product.date_on_sale_from\" name=\"date_on_sale_from\"></ion-datetime>\n  </ion-item>\n\n  <ion-item class=\"date\">\n      <ion-label position=\"floating\">{{\"Date On Sale To\" | translate}}</ion-label>\n      <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"vendor.product.date_on_sale_to\" name=\"date_on_sale_to\"></ion-datetime>\n  </ion-item>\n\n\n  <ion-item>\n      <ion-label>{{\"Purchasable\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.purchasable\" name=\"purchasable\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"InStock\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.in_stock\" name=\"in_stock\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"Shipping Required\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.shipping_required\" name=\"shipping_required\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>{{\"Sold Individually\" | translate}}</ion-label>\n      <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.sold_individually\" name=\"sold_individually\"></ion-toggle>\n  </ion-item>\n\n  <ion-item class=\"option\" *ngIf=\"vendor.product.type != 'external'\">\n    <ion-label>{{\"Manage Stock\" | translate}}</ion-label>\n    <ion-toggle color=\"{{settings.theme.button}}\" checked=\"true\" [(ngModel)]=\"vendor.product.manage_stock\" name=\"manage_stock\"></ion-toggle>\n</ion-item>\n\n<ion-item *ngIf=\"vendor.product.manage_stock && vendor.product.type != 'external'\">\n    <ion-label position=\"floating\">{{\"Quantity\" | translate}}</ion-label>\n    <ion-input required type=\"number\" [(ngModel)]=\"vendor.product.stock_quantity\" name=\"stock_quantity\"></ion-input>\n</ion-item>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/vendor/product-add/details/details.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/vendor/product-add/details/details.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wcm9kdWN0LWFkZC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/vendor/product-add/details/details.page.ts":
/*!************************************************************!*\
  !*** ./src/app/vendor/product-add/details/details.page.ts ***!
  \************************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_vendor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../data/vendor */ "./src/app/data/vendor.ts");






var DetailsPage = /** @class */ (function () {
    function DetailsPage(alertController, vendor, settings, loadingController, navCtrl, router, route) {
        this.alertController = alertController;
        this.vendor = vendor;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
    }
    DetailsPage.prototype.ngOnInit = function () {
        console.log(this.vendor.product);
    };
    DetailsPage.prototype.next = function () {
        if (this.validateForm()) {
            this.navCtrl.navigateForward('/tabs/account/add-products/details/' + this.vendor.product.categories[0] + '/photos');
        }
    };
    DetailsPage.prototype.validateForm = function () {
        if (this.vendor.product.name == '' || this.vendor.product.name == undefined) {
            this.presentAlert('Please enter name');
            return false;
        }
        if (this.vendor.product.type == '' || this.vendor.product.type == undefined) {
            this.presentAlert('Please select product type');
            return false;
        }
        if (this.vendor.product.regular_price == '' || this.vendor.product.regular_price == undefined) {
            this.presentAlert('Please enter regular price');
            return false;
        }
        else
            return true;
    };
    DetailsPage.prototype.presentAlert = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.page.html */ "./src/app/vendor/product-add/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/vendor/product-add/details/details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _data_vendor__WEBPACK_IMPORTED_MODULE_5__["Vendor"], _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ }),

/***/ "./src/app/vendor/product-add/photos/photos.page.html":
/*!************************************************************!*\
  !*** ./src/app/vendor/product-add/photos/photos.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/category/{{vendor.product.categories[0]}}/details\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Photos\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<div class=\"camera\">\n\t  <ion-button fill=\"clear\" color=\"{{settings.theme.button}}\"  (click)=\"picker()\"><ion-icon name=\"camera\"></ion-icon></ion-button>\n\t</div>\n\n\t<div style=\"text-align: center; margin: 20px 0;\">\n\t    <ion-spinner *ngIf=\"uploadingImageSpinner\"></ion-spinner>\n\t</div>\n\n  <div class=\"images\" *ngIf=\"vendor.product.images.length\">\n    <ion-row class=\"row\">\n      <ion-col *ngFor=\"let item of vendor.product.images; let i = index;\" class=\"col\">\n        <img tappable src=\"{{item.src}}\" (click)=\"replaceImage(i)\">\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <ion-button size=\"full\" (click)=\"publish()\" color=\"{{settings.theme.button}}\">{{\"Publish\" | translate}}</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button size=\"full\" (click)=\"draft()\" color=\"{{settings.theme.button}}\">{{\"Draft\" | translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n"

/***/ }),

/***/ "./src/app/vendor/product-add/photos/photos.page.scss":
/*!************************************************************!*\
  !*** ./src/app/vendor/product-add/photos/photos.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".camera {\n  text-align: center; }\n  .camera ion-icon {\n    font-size: 40px; }\n  .images {\n  width: 100%; }\n  .images .col {\n    padding: 0 5px 5px 0;\n    margin: 0;\n    min-width: 33.33%;\n    max-width: 33.33%;\n    width: 33.33%;\n    height: 120px;\n    border: 2px solid #eee; }\n  .images .row {\n    padding: 5px 0 0 5px; }\n  .images img {\n    width: 100%;\n    height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL3Bob3Rvcy9waG90b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCLEVBQUE7RUFEbkI7SUFJRSxlQUFlLEVBQUE7RUFJakI7RUFFSSxXQUFXLEVBQUE7RUFGZjtJQUlRLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0VBVjlCO0lBYVEsb0JBQW9CLEVBQUE7RUFiNUI7SUFnQlEsV0FBVztJQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wcm9kdWN0LWFkZC9waG90b3MvcGhvdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1lcmF7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHRpb24taWNvbntcclxuXHRcdGZvbnQtc2l6ZTogNDBweDtcclxuXHR9XHJcbn1cclxuXHJcbi5pbWFnZXMge1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuY29sIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweCA1cHggMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XHJcbiAgICB9XHJcbiAgICAucm93IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMCAwIDVweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/vendor/product-add/photos/photos.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/vendor/product-add/photos/photos.page.ts ***!
  \**********************************************************/
/*! exports provided: PhotosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosPage", function() { return PhotosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_vendor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../data/vendor */ "./src/app/data/vendor.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../config */ "./src/app/config.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../api.service */ "./src/app/api.service.ts");












var PhotosPage = /** @class */ (function () {
    function PhotosPage(api, actionSheetController, config, vendor, settings, loadingController, navCtrl, router, transfer, imagePicker, crop) {
        this.api = api;
        this.actionSheetController = actionSheetController;
        this.config = config;
        this.vendor = vendor;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.uploadingImageSpinner = false;
        this.imageIndex = 0;
    }
    PhotosPage.prototype.ngOnInit = function () {
    };
    PhotosPage.prototype.picker = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
        };
        this.photos = new Array();
        this.imagePicker.getPictures(options)
            .then(function (results) {
            _this.reduceImages(results).then(function (results) { return _this.handleUpload(results); });
        }, function (err) { console.log(err); });
    };
    PhotosPage.prototype.handleUpload = function (results) {
        this.upload();
    };
    PhotosPage.prototype.reduceImages = function (selected_pictures) {
        var _this = this;
        return selected_pictures.reduce(function (promise, item) {
            return promise.then(function (result) {
                return _this.crop.crop(item, { quality: 75, targetHeight: 100, targetWidth: 100 })
                    .then(function (cropped_image) { return _this.photos = cropped_image; });
            });
        }, Promise.resolve());
    };
    PhotosPage.prototype.upload = function () {
        var _this = this;
        this.uploadingImageSpinner = true;
        var fileTransfer = this.transfer.create();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_8__["Headers"]();
        headers.append('Content-Type', 'multipart/form-data');
        var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: { headers: headers }
        };
        fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options)
            .then(function (data) {
            _this.uploadingImageSpinner = false;
            _this.imageresult = JSON.parse(data.response);
            _this.vendor.product.images[_this.imageIndex] = {};
            _this.vendor.product.images[_this.imageIndex].src = _this.imageresult.url;
            _this.imageIndex = _this.imageIndex + 1;
            // success
        }, function (err) {
            //this.functions.showAlert("error", err);
        });
    };
    PhotosPage.prototype.replaceImage = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Delete Image',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.vendor.product.images.splice(index, 1);
                                        _this.imageIndex = _this.imageIndex - 1;
                                    }
                                }, {
                                    text: 'Edit Image',
                                    icon: 'create',
                                    handler: function () {
                                        var options = {
                                            maximumImagesCount: 1,
                                        };
                                        _this.photos = new Array();
                                        _this.imagePicker.getPictures(options)
                                            .then(function (results) {
                                            _this.reduceImages(results).then(function (results) { return _this.replaceUpload(index); });
                                        }, function (err) {
                                            //this.functions.showAlert("error", err);
                                        });
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhotosPage.prototype.replaceUpload = function (index) {
        var _this = this;
        this.uploadingImageSpinner = true;
        var fileTransfer = this.transfer.create();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_8__["Headers"]();
        headers.append('Content-Type', 'multipart/form-data');
        var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: { headers: headers }
        };
        fileTransfer.upload(this.photos, this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp_upload_image', options)
            .then(function (data) {
            _this.uploadingImageSpinner = false;
            _this.imageresult = JSON.parse(data.response);
            _this.vendor.product.images[index].src = _this.imageresult.url;
            // success
        }, function (err) {
            //this.functions.showAlert("error", err);
        });
    };
    PhotosPage.prototype.publish = function () {
        this.vendor.product.status = 'publish';
        this.submit();
    };
    PhotosPage.prototype.draft = function () {
        this.vendor.product.status = 'draft';
        this.submit();
    };
    PhotosPage.prototype.submit = function () {
        var _this = this;
        this.vendor.product.vendor = this.settings.customer.id;
        this.api.wcpost('products', this.vendor.product).subscribe(function (res) {
            //DOKAN AND WCFM Plugin
            _this.res = res;
            _this.api.postItem('update-vendor-product', { id: _this.res.id }).subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
            //DOKAN AND WCFM Plugin
            _this.vendor.product = {};
            _this.vendor.product.categories = [];
            _this.vendor.product.images = [];
            _this.vendor.product.dimensions = {};
            _this.navCtrl.navigateBack('tabs/account');
        }, function (err) {
            console.log(err);
        });
    };
    PhotosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! ./photos.page.html */ "./src/app/vendor/product-add/photos/photos.page.html"),
            styles: [__webpack_require__(/*! ./photos.page.scss */ "./src/app/vendor/product-add/photos/photos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _config__WEBPACK_IMPORTED_MODULE_10__["Config"], _data_vendor__WEBPACK_IMPORTED_MODULE_5__["Vendor"], _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_7__["Crop"]])
    ], PhotosPage);
    return PhotosPage;
}());



/***/ }),

/***/ "./src/app/vendor/product-add/subcategory/subcategory.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/vendor/product-add/subcategory/subcategory.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account/category\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Select Subcategory\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-row>\n    <ion-col size='6' *ngFor=\"let category of subCategories\" (click)=\"getCategory(category.id, category.slug, category.name)\">\n    <ion-card class=\"category-card\" class=\"ion-activatable ion-focusable hydrated\" mode=\"md\">\n      <ion-img alt=\"\" src=\"{{category.image?.src}}\"></ion-img>\n      <ion-card-header>\n        <ion-card-subtitle><span [innerHTML]=\"category.name\"></span></ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/vendor/product-add/subcategory/subcategory.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/vendor/product-add/subcategory/subcategory.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtYWRkL3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wcm9kdWN0LWFkZC9zdWJjYXRlZ29yeS9zdWJjYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuXHRtYXJnaW46IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vendor/product-add/subcategory/subcategory.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/vendor/product-add/subcategory/subcategory.page.ts ***!
  \********************************************************************/
/*! exports provided: SubcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryPage", function() { return SubcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../data */ "./src/app/data.ts");
/* harmony import */ var _data_vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../data/vendor */ "./src/app/data/vendor.ts");







var SubcategoryPage = /** @class */ (function () {
    function SubcategoryPage(vendor, data, settings, loadingController, navCtrl, router, route) {
        this.vendor = vendor;
        this.data = data;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
        this.subCategories = [];
    }
    SubcategoryPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        for (var i = 0; i < this.data.categories.length; i++) {
            if (this.data.categories[i].parent == this.id) {
                this.subCategories.push(this.data.categories[i]);
            }
        }
    };
    SubcategoryPage.prototype.getCategory = function (ID) {
        this.vendor.product.categories[0] = { id: ID };
        this.navCtrl.navigateForward('/tabs/account/add-products/details/' + ID);
    };
    SubcategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subcategory',
            template: __webpack_require__(/*! ./subcategory.page.html */ "./src/app/vendor/product-add/subcategory/subcategory.page.html"),
            styles: [__webpack_require__(/*! ./subcategory.page.scss */ "./src/app/vendor/product-add/subcategory/subcategory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_settings__WEBPACK_IMPORTED_MODULE_2__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SubcategoryPage);
    return SubcategoryPage;
}());



/***/ }),

/***/ "./src/app/vendor/product-list/product-list.page.html":
/*!************************************************************!*\
  !*** ./src/app/vendor/product-list/product-list.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Products\" | translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\" fill=\"clear\" (click)=\"getFilter()\"><ion-icon name=\"funnel\" style=\"margin-right: 8px;font-size: 23px\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"spinner\" *ngIf=\"loader\"><ion-spinner> </ion-spinner></div>\n\n  <div class=\"spinner\" *ngIf=\"!loader && products?.length == 0\">{{\"No Results\" | translate}}</div>\n\n  <div *ngIf=\"subCategories.length\" class=\"scrollmenu2\">\n    <a *ngFor=\"let item of subCategories\">\n      <ion-img *ngIf=\"item.image?.src\" src=\"{{item.image.src}}\" class=\"ion-activatable ion-focusable hydrated\" (click)=\"getCategory(item.id)\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\"></ion-img>\n      <h5 (click)=\"getCategory(item.id, item.slug, item.name)\"><span [innerHTML]=\"item.name\"></span></h5>\n    </a>\n  </div>\n  \n  <ion-list>\n    <ion-item *ngFor=\"let product of products\">\n      <ion-thumbnail slot=\"start\" (click)=\"getProduct(product)\">\n        <img src=\"{{product.images[0].src}}\" *ngIf=\"product.images.length\">\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{product.name}}</h2>\n        <p class=\"price\">\n          <span class=\"regular-price\">{{1*product.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n            <span *ngIf=\"product.sale_price\" class=\"special-price\"><del>{{1*product.sale_price | currency:settings.currency:symbol:'1.2-2'}}</del></span>\n        </p>\n\n        <ion-button (click)=\"getProduct(product)\" color=\"{{settings.theme.button}}\" fill=\"clear\" slot=\"start\">\n          <ion-icon slot=\"icon-only\" name=\"eye\"></ion-icon>\n        {{\"View\" | translate}}\n        </ion-button>\n        <ion-button (click)=\"editProduct(product)\" color=\"{{settings.theme.button}}\" fill=\"clear\" slot=\"end\">\n          <ion-icon slot=\"icon-only\" name=\"create\" mode=\"ios\"></ion-icon>\n        {{\"Edit\" | translate}}\n        </ion-button>\n\n        <ion-button (click)=\"delete(product)\" color=\"{{settings.theme.button}}\" fill=\"clear\" slot=\"end\">\n          <ion-icon slot=\"icon-only\" name=\"trash\" mode=\"ios\"></ion-icon>\n        </ion-button>\n\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && products?.length\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/vendor/product-list/product-list.page.scss":
/*!************************************************************!*\
  !*** ./src/app/vendor/product-list/product-list.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin: 0;\n  box-shadow: none; }\n\nion-card-title {\n  font-size: 40px; }\n\nion-card-header {\n  padding: 10px; }\n\nion-card-content {\n  padding: 0; }\n\nion-card-content .price {\n    padding: 0 10px 10px 10px;\n    font-weight: bold;\n    font-size: 14px; }\n\nion-card-content .price .special-price {\n      padding-left: 5px;\n      font-size: 10px;\n      font-weight: 300; }\n\nion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small; }\n\n.scrollmenu2 {\n  margin: 5px 0;\n  z-index: 1;\n  background-color: #fff;\n  overflow: auto;\n  white-space: nowrap; }\n\n.scrollmenu2 h5 {\n    margin: 0;\n    padding: 5px;\n    font-size: 12px;\n    text-transform: capitalize;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n\n.scrollmenu2 a {\n    display: inline-block;\n    text-align: center;\n    padding: 8px 8px 0 8px;\n    text-decoration: none;\n    width: 30%; }\n\n.list-md {\n  padding-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvdmVuZG9yL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksVUFBVSxFQUFBOztBQURkO0lBR1EseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUVqQixlQUFlLEVBQUE7O0FBTnZCO01BU1ksaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTs7QUFJNUI7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUx2QjtJQU9RLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtJQUNmLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsZ0JBQWdCLEVBQUE7O0FBWnhCO0lBZVEscUJBQXFCO0lBRXJCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFVBQVUsRUFBQTs7QUFHbEI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3IvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogMDtcbiAgICAucHJpY2Uge1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgLy9jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAuc3BlY2lhbC1wcmljZSB7XG4gICAgICAgICAgICAvL2NvbG9yOiAjODY4Njg2O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgLy9jb2xvcjogYmxhY2s7XG59XG4uc2Nyb2xsbWVudTIge1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgaDUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIC8vY29sb3I6ICMwMDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4IDhweCAwIDhweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgIH1cbn1cbi5saXN0LW1kIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vendor/product-list/product-list.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/vendor/product-list/product-list.page.ts ***!
  \**********************************************************/
/*! exports provided: ProductListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPage", function() { return ProductListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../data/product */ "./src/app/data/product.ts");
/* harmony import */ var _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../filter/filter.page */ "./src/app/filter/filter.page.ts");









var ProductListPage = /** @class */ (function () {
    function ProductListPage(alertController, modalController, api, data, product, settings, router, navCtrl, route) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.api = api;
        this.data = data;
        this.product = product;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.tempProducts = [];
        this.subCategories = [];
        this.filter = {};
        this.hasMoreItems = true;
        this.loader = false;
        this.filter.page = 1;
        this.filter.vendor = this.settings.customer.id;
    }
    ProductListPage.prototype.getFilter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _filter_filter_page__WEBPACK_IMPORTED_MODULE_8__["FilterPage"],
                            componentProps: {
                                filter: this.filter,
                                attributes: this.attributes
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        console.log(data);
                        if (data) {
                            console.log('Found Data');
                            this.filter = data;
                            this.filter.page = 1;
                            this.getProducts();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductListPage.prototype.loadData = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filter.page = this.filter.page + 1;
                        return [4 /*yield*/, this.api.getItem('products', this.filter).subscribe(function (res) {
                                _this.tempProducts = res;
                                _this.products.push.apply(_this.products, _this.tempProducts);
                                event.target.complete();
                                if (_this.tempProducts.length == 0)
                                    _this.hasMoreItems = false;
                            }, function (err) {
                                event.target.complete();
                            })];
                    case 1:
                        _a.sent();
                        console.log('Done');
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductListPage.prototype.getProducts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader = true;
                        return [4 /*yield*/, this.api.getItem('products', this.filter).subscribe(function (res) {
                                _this.products = res;
                                _this.loader = false;
                            }, function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductListPage.prototype.getAttributes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('product-attributes', {
                            category: this.filter.category
                        }).subscribe(function (res) {
                            _this.attributes = res;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductListPage.prototype.ngOnInit = function () {
        this.filter.category = this.route.snapshot.paramMap.get('id');
        if (this.data.categories && this.data.categories.length) {
            for (var i = 0; i < this.data.categories.length; i++) {
                if (this.data.categories[i].parent == this.filter.category) {
                    this.subCategories.push(this.data.categories[i]);
                }
            }
        }
        if (this.settings.colWidthProducts == 4)
            this.filter.per_page = 15;
        this.getProducts();
        this.getAttributes();
    };
    ProductListPage.prototype.getProduct = function (product) {
        this.product.product = product;
        this.navCtrl.navigateForward(this.router.url + '/view-product/' + product.id);
    };
    ProductListPage.prototype.getCategory = function (id) {
        var endIndex = this.router.url.lastIndexOf('/');
        var path = this.router.url.substring(0, endIndex);
        this.navCtrl.navigateForward(path + '/' + id);
    };
    ProductListPage.prototype.editProduct = function (product) {
        this.product.product = product;
        this.navCtrl.navigateForward(this.router.url + '/edit-product/' + product.id);
    };
    ProductListPage.prototype.delete = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete',
                            message: 'Are you sure you want to delete this product?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Delete',
                                    handler: function () {
                                        _this.api.deleteItem('products', product.id).subscribe(function (res) {
                                            _this.getProducts();
                                        }, function (err) {
                                            console.log(err);
                                        });
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.page.html */ "./src/app/vendor/product-list/product-list.page.html"),
            styles: [__webpack_require__(/*! ./product-list.page.scss */ "./src/app/vendor/product-list/product-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductListPage);
    return ProductListPage;
}());



/***/ }),

/***/ "./src/app/vendor/vendor-info/vendor-info.page.html":
/*!**********************************************************!*\
  !*** ./src/app/vendor/vendor-info/vendor-info.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar>\n    <ion-title>{{\"Vendor Detail\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n{{vendor.vendor.shop.title}}\n</ion-content>\n"

/***/ }),

/***/ "./src/app/vendor/vendor-info/vendor-info.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/vendor/vendor-info/vendor-info.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci92ZW5kb3ItaW5mby92ZW5kb3ItaW5mby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/vendor/vendor-info/vendor-info.page.ts":
/*!********************************************************!*\
  !*** ./src/app/vendor/vendor-info/vendor-info.page.ts ***!
  \********************************************************/
/*! exports provided: VendorInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorInfoPage", function() { return VendorInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_vendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../data/vendor */ "./src/app/data/vendor.ts");



var VendorInfoPage = /** @class */ (function () {
    function VendorInfoPage(vendor) {
        this.vendor = vendor;
    }
    VendorInfoPage.prototype.ngOnInit = function () {
    };
    VendorInfoPage.prototype.OnDestroy = function () {
        this.vendor.vendor = {};
    };
    VendorInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-info',
            template: __webpack_require__(/*! ./vendor-info.page.html */ "./src/app/vendor/vendor-info/vendor-info.page.html"),
            styles: [__webpack_require__(/*! ./vendor-info.page.scss */ "./src/app/vendor/vendor-info/vendor-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_vendor__WEBPACK_IMPORTED_MODULE_2__["Vendor"]])
    ], VendorInfoPage);
    return VendorInfoPage;
}());



/***/ }),

/***/ "./src/app/vendor/vendor-list/vendor-list.page.html":
/*!**********************************************************!*\
  !*** ./src/app/vendor/vendor-list/vendor-list.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-title>\n      {{\"Vendors\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"vendor-list\">\n\t<div class=\"spinner\" *ngIf=\"!vendors?.length\"><ion-spinner> </ion-spinner></div>\n\n\t<ion-row>\n\t    <ion-col size=\"4\" size-sm=\"4\" size-md=\"3\" *ngFor=\"let item of vendors\" (click)=\"getDetail(item)\">\n\t    <ion-card class=\"category-card\" mode=\"md\" class=\"ion-activatable ion-focusable hydrated\">\n\t      <ion-img *ngIf=\"item?.banner\" src=\"{{item?.banner}}\"></ion-img>\n\t      <ion-card-header>\n\t        <ion-card-title>{{item.store_info.store_name}}</ion-card-title>\n\t      </ion-card-header>\n\t    </ion-card>\n\t    </ion-col>\n  \t</ion-row>\n\n\n\t<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && vendors?.length\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/vendor/vendor-list/vendor-list.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/vendor/vendor-list/vendor-list.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vendor-list ion-card {\n  margin: 0; }\n\nion-card-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .4px;\n  text-transform: uppercase; }\n\nion-card-header {\n  padding: 16px 8px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FodGVzaGFtL0Rlc2t0b3AvYXBwL3NyYy9hcHAvdmVuZG9yL3ZlbmRvci1saXN0L3ZlbmRvci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFNBQVMsRUFBQTs7QUFHakI7RUFDQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ1osZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix5QkFBeUIsRUFBQTs7QUFFN0I7RUFDQyxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3IvdmVuZG9yLWxpc3QvdmVuZG9yLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlbmRvci1saXN0IHtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5pb24tY2FyZC10aXRsZXtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5pb24tY2FyZC1oZWFkZXJ7XG5cdHBhZGRpbmc6IDE2cHggOHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/vendor/vendor-list/vendor-list.page.ts":
/*!********************************************************!*\
  !*** ./src/app/vendor/vendor-list/vendor-list.page.ts ***!
  \********************************************************/
/*! exports provided: VendorListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorListPage", function() { return VendorListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _data_vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/vendor */ "./src/app/data/vendor.ts");







var VendorListPage = /** @class */ (function () {
    function VendorListPage(api, settings, router, navCtrl, route, vendor) {
        this.api = api;
        this.settings = settings;
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.vendor = vendor;
        this.vendors = [];
        this.filter = {};
        this.hasMoreItems = true;
        this.tempVendor = [];
        this.filter.page = 1;
        this.filter.per_page = 30;
        this.filter.wc_vendor = true;
    }
    VendorListPage.prototype.ngOnInit = function () {
        this.getWCFMVendors();
    };
    VendorListPage.prototype.getWcVendors = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.WCMPVendor('vendors', this.filter).subscribe(function (res) {
                            _this.vendors = res;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VendorListPage.prototype.loadData = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filter.page = this.filter.page + 1;
                        return [4 /*yield*/, this.api.postItem('wcfm-vendor-list', this.filter).subscribe(function (res) {
                                _this.tempVendor = res;
                                _this.vendors.push.apply(_this.vendors, res);
                                event.target.complete();
                                if (_this.tempVendor && _this.tempVendor.length == 0)
                                    _this.hasMoreItems = false;
                                else if (!_this.tempVendor || !_this.tempVendor.length)
                                    event.target.complete();
                            }, function (err) {
                                event.target.complete();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VendorListPage.prototype.getDokanVendors = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('vendors-list', this.filter).subscribe(function (res) {
                            _this.vendors = res;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VendorListPage.prototype.getWCFMVendors = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('wcfm-vendor-list', this.filter).subscribe(function (res) {
                            _this.vendors = res;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VendorListPage.prototype.getDetail = function (item) {
        this.vendor.vendor = item;
        this.navCtrl.navigateForward('/tabs/vendor/products');
    };
    VendorListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-list',
            template: __webpack_require__(/*! ./vendor-list.page.html */ "./src/app/vendor/vendor-list/vendor-list.page.html"),
            styles: [__webpack_require__(/*! ./vendor-list.page.scss */ "./src/app/vendor/vendor-list/vendor-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_vendor__WEBPACK_IMPORTED_MODULE_6__["Vendor"]])
    ], VendorListPage);
    return VendorListPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map