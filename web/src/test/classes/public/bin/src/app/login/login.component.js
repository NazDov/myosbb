System.register(["@angular/core", "./login.service", "@angular/router", "../registration/registration_user/registration.component", "../../shared/services/current.user.service", 'angular2-toaster/angular2-toaster', 'angular2-text-mask', 'node_modules/text-mask-addons/dist/emailMask.js', './../header/header.notice.service', "../../shared/pipes/capitalize-first-letter", "ng2-translate"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_service_1, router_1, registration_component_1, current_user_service_1, angular2_toaster_1, angular2_text_mask_1, emailMask_js_1, header_notice_service_1, capitalize_first_letter_1, ng2_translate_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            },
            function (angular2_toaster_1_1) {
                angular2_toaster_1 = angular2_toaster_1_1;
            },
            function (angular2_text_mask_1_1) {
                angular2_text_mask_1 = angular2_text_mask_1_1;
            },
            function (emailMask_js_1_1) {
                emailMask_js_1 = emailMask_js_1_1;
            },
            function (header_notice_service_1_1) {
                header_notice_service_1 = header_notice_service_1_1;
            },
            function (capitalize_first_letter_1_1) {
                capitalize_first_letter_1 = capitalize_first_letter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_router, loginService, _currentUserService, _toasterService) {
                    this._router = _router;
                    this.loginService = loginService;
                    this._currentUserService = _currentUserService;
                    this._toasterService = _toasterService;
                    this.emailMask = emailMask_js_1.default;
                    this.model = { "username": "", "password": "" };
                    this.logInError = false;
                    this.toasterconfig = new angular2_toaster_1.ToasterConfig({ showCloseButton: true, tapToDismiss: true, timeout: 5000 });
                    this.forgotEmail = "";
                    this.emailValid = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.isLoggedIn = this.loginService.checkLogin();
                };
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.loginService.sendCredentials(this.model).subscribe(function (data) {
                        if (!_this.loginService.checkLogin()) {
                            _this.tokenParseInLocalStorage(data.json());
                            _this.loginService.sendToken().subscribe(function (data) {
                                _this._currentUserService.setUser(data);
                                _this.model.username = "";
                                _this.model.password = "";
                                _this.isLoggedIn = true;
                                _this._currentUserService.setRole();
                                console.log(_this._currentUserService.getRole());
                                if (_this._currentUserService.getRole() === "ROLE_USER") {
                                    _this._toasterService.pop('success', "Congratulation," + _this._currentUserService.getUser().firstName + " !", 'We glad to see you hare again');
                                    _this._router.navigate(['home/wall']);
                                }
                                if (_this._currentUserService.getRole() === "ROLE_ADMIN") {
                                    _this._toasterService.pop('success', "Hail Admin!");
                                    _this._router.navigate(['admin']);
                                }
                                if (_this._currentUserService.getRole() === "ROLE_MANAGER") {
                                    _this._toasterService.pop('success', "Hello manager!");
                                    _this._router.navigate(['manager/wall']);
                                }
                            });
                        }
                    }, function (err) {
                        _this.model.password = "";
                        _this.handleErrors(err);
                    }, function () { return console.log('Sending credentials completed'); });
                };
                LoginComponent.prototype.handleErrors = function (error) {
                    if (error.status === 400)
                        this._toasterService.pop('error', "Error: " + error.json()["error_description"] + ".");
                    if (error.status === 401)
                        this._toasterService.pop('error', "User not found.");
                    return;
                };
                LoginComponent.prototype.tokenParseInLocalStorage = function (data) {
                    localStorage.setItem("access_token", data.access_token);
                    localStorage.setItem("token_type", data.token_type);
                    localStorage.setItem("expires_in", new Date().setSeconds(data.expires_in));
                    localStorage.setItem("scope", data.scope);
                    localStorage.setItem("jti", data.jti);
                    localStorage.setItem("refresh_token", data.refresh_token);
                };
                LoginComponent.prototype.onUserRegistrationClick = function () {
                    this._router.navigate(['registration']);
                };
                LoginComponent.prototype.validateEmail = function () {
                    var _this = this;
                    this.loginService.validateEmail(this.forgotEmail.replace(/ /g, '')).subscribe(function (data) {
                        if (data.json() === "FOUND") {
                            _this.emailValid = true;
                        }
                        else {
                            _this.emailValid = false;
                        }
                    });
                };
                LoginComponent.prototype.sendEmail = function () {
                    var _this = this;
                    if (this.emailValid) {
                        this.loginService.sendPassword(this.forgotEmail).subscribe(function (data) {
                            _this._toasterService.pop('success', "Congratulation!", 'Password was sendet on your email.Check it and get back soon.');
                        }, function (err) {
                            _this.forgotEmail = "";
                            _this.handleErrors(err);
                        });
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'app-login',
                        templateUrl: 'src/app/login/login.html',
                        styleUrls: ['assets/css/login/login.css'],
                        directives: [registration_component_1.RegistrationComponent, angular2_toaster_1.ToasterContainerComponent, angular2_text_mask_1.default],
                        providers: [login_service_1.LoginService, angular2_toaster_1.ToasterService, header_notice_service_1.NoticeService],
                        pipes: [ng2_translate_1.TranslatePipe, capitalize_first_letter_1.CapitalizeFirstLetterPipe],
                        outputs: ['isLoggedIn']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService, current_user_service_1.CurrentUserService, angular2_toaster_1.ToasterService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBY0ksd0JBQW9CLE9BQWMsRUFBVSxZQUF5QixFQUN2RCxtQkFBc0MsRUFBVSxlQUE4QjtvQkFEeEUsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDdkQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtvQkFUckYsY0FBUyxHQUFHLHNCQUFTLENBQUM7b0JBRXJCLFVBQUssR0FBRyxFQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUV6QyxlQUFVLEdBQVcsS0FBSyxDQUFDO29CQUM1QixrQkFBYSxHQUFpQixJQUFJLGdDQUFhLENBQUMsRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7b0JBQ25ILGdCQUFXLEdBQUcsRUFBRSxDQUFDO29CQXlFakIsZUFBVSxHQUFXLEtBQUssQ0FBQztnQkFyRTNCLENBQUM7Z0JBZEQsaUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3JELENBQUM7Z0JBY0QsaUNBQVEsR0FBUjtvQkFBQSxpQkF5Q0M7b0JBeENHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQ25ELFVBQUEsSUFBSTt3QkFDQSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNsQyxLQUFJLENBQUMsd0JBQXdC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QUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUN0RCxVQUFBLElBQUk7NEJBQ0EsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUM1QixpQkFBaUIsRUFDakIsK0RBQStELENBQUMsQ0FBQzt3QkFFM0UsQ0FBQyxFQUNELFVBQUEsR0FBRzs0QkFDQyxLQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzs0QkFDdEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDM0IsQ0FBQyxDQUNKLENBQUE7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO2dCQTNITDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsMEJBQTBCO3dCQUN2QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzt3QkFDekMsVUFBVSxFQUFFLENBQUMsOENBQXFCLEVBQUUsNENBQXlCLEVBQUUsNEJBQVcsQ0FBQzt3QkFDM0UsU0FBUyxFQUFFLENBQUMsNEJBQVksRUFBRSxpQ0FBYyxFQUFFLHFDQUFhLENBQUM7d0JBQ3hELEtBQUssRUFBRSxDQUFDLDZCQUFhLEVBQUUsbURBQXlCLENBQUM7d0JBQ2pELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDMUIsQ0FBQzs7a0NBQUE7Z0JBb0hGLHFCQUFDO1lBQUQsQ0FuSEEsQUFtSEMsSUFBQTtZQW5IRCwyQ0FtSEMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi9sb2dpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7UmVnaXN0cmF0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi4vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbl91c2VyL3JlZ2lzdHJhdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDdXJyZW50VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC51c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtUb2FzdGVyQ29udGFpbmVyQ29tcG9uZW50LCBUb2FzdGVyU2VydmljZSwgVG9hc3RlckNvbmZpZ30gZnJvbSAnYW5ndWxhcjItdG9hc3Rlci9hbmd1bGFyMi10b2FzdGVyJztcclxuaW1wb3J0IE1hc2tlZElucHV0IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XHJcbmltcG9ydCBlbWFpbE1hc2sgZnJvbSAnbm9kZV9tb2R1bGVzL3RleHQtbWFzay1hZGRvbnMvZGlzdC9lbWFpbE1hc2suanMnO1xyXG5cclxuaW1wb3J0IHtOb3RpY2VTZXJ2aWNlfSBmcm9tICcuLy4uL2hlYWRlci9oZWFkZXIubm90aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NhcGl0YWxpemVGaXJzdExldHRlclBpcGV9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS1maXJzdC1sZXR0ZXJcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVQaXBlfSBmcm9tIFwibmcyLXRyYW5zbGF0ZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC9sb2dpbi9sb2dpbi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydhc3NldHMvY3NzL2xvZ2luL2xvZ2luLmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW1JlZ2lzdHJhdGlvbkNvbXBvbmVudCwgVG9hc3RlckNvbnRhaW5lckNvbXBvbmVudCwgTWFza2VkSW5wdXRdLFxyXG4gICAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlLCBUb2FzdGVyU2VydmljZSwgTm90aWNlU2VydmljZV0sXHJcbiAgICBwaXBlczogW1RyYW5zbGF0ZVBpcGUsIENhcGl0YWxpemVGaXJzdExldHRlclBpcGVdLFxyXG4gICAgb3V0cHV0czogWydpc0xvZ2dlZEluJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdGhpcy5sb2dpblNlcnZpY2UuY2hlY2tMb2dpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbWFpbE1hc2sgPSBlbWFpbE1hc2s7XHJcblxyXG4gICAgcHJpdmF0ZSBtb2RlbCA9IHtcInVzZXJuYW1lXCI6IFwiXCIsIFwicGFzc3dvcmRcIjogXCJcIn07XHJcbiAgICBwcml2YXRlIGlzTG9nZ2VkSW46Ym9vbGVhbjtcclxuICAgIHByaXZhdGUgbG9nSW5FcnJvcjpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgdG9hc3RlcmNvbmZpZzpUb2FzdGVyQ29uZmlnID0gbmV3IFRvYXN0ZXJDb25maWcoe3Nob3dDbG9zZUJ1dHRvbjogdHJ1ZSwgdGFwVG9EaXNtaXNzOiB0cnVlLCB0aW1lb3V0OiA1MDAwfSk7XHJcbiAgICBmb3Jnb3RFbWFpbCA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBsb2dpblNlcnZpY2U6TG9naW5TZXJ2aWNlXHJcbiAgICAgICAgLCBwcml2YXRlIF9jdXJyZW50VXNlclNlcnZpY2U6Q3VycmVudFVzZXJTZXJ2aWNlLCBwcml2YXRlIF90b2FzdGVyU2VydmljZTpUb2FzdGVyU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLnNlbmRDcmVkZW50aWFscyh0aGlzLm1vZGVsKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmxvZ2luU2VydmljZS5jaGVja0xvZ2luKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2VuUGFyc2VJbkxvY2FsU3RvcmFnZShkYXRhLmpzb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2Uuc2VuZFRva2VuKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFVzZXJTZXJ2aWNlLnNldFVzZXIoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLnVzZXJuYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRVc2VyU2VydmljZS5zZXRSb2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9jdXJyZW50VXNlclNlcnZpY2UuZ2V0Um9sZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50VXNlclNlcnZpY2UuZ2V0Um9sZSgpID09PSBcIlJPTEVfVVNFUlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9hc3RlclNlcnZpY2UucG9wKCdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFwiQ29uZ3JhdHVsYXRpb24sXCIgKyB0aGlzLl9jdXJyZW50VXNlclNlcnZpY2UuZ2V0VXNlcigpLmZpcnN0TmFtZSArIFwiICFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsICdXZSBnbGFkIHRvIHNlZSB5b3UgaGFyZSBhZ2FpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2hvbWUvd2FsbCddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50VXNlclNlcnZpY2UuZ2V0Um9sZSgpID09PSBcIlJPTEVfQURNSU5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvYXN0ZXJTZXJ2aWNlLnBvcCgnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBcIkhhaWwgQWRtaW4hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2FkbWluJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRVc2VyU2VydmljZS5nZXRSb2xlKCkgPT09IFwiUk9MRV9NQU5BR0VSXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90b2FzdGVyU2VydmljZS5wb3AoJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgXCJIZWxsbyBtYW5hZ2VyIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydtYW5hZ2VyL3dhbGwnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLnBhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKGVycik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdTZW5kaW5nIGNyZWRlbnRpYWxzIGNvbXBsZXRlZCcpXHJcbiAgICAgICAgKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAwKVxyXG4gICAgICAgICAgICB0aGlzLl90b2FzdGVyU2VydmljZS5wb3AoJ2Vycm9yJywgXCJFcnJvcjogXCIgKyBlcnJvci5qc29uKClbXCJlcnJvcl9kZXNjcmlwdGlvblwiXSArIFwiLlwiKTtcclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDEpXHJcbiAgICAgICAgICAgIHRoaXMuX3RvYXN0ZXJTZXJ2aWNlLnBvcCgnZXJyb3InLCBcIlVzZXIgbm90IGZvdW5kLlwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRva2VuUGFyc2VJbkxvY2FsU3RvcmFnZShkYXRhOmFueSkgeyBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY2Vzc190b2tlblwiLCBkYXRhLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlbl90eXBlXCIsIGRhdGEudG9rZW5fdHlwZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleHBpcmVzX2luXCIsIG5ldyBEYXRlKCkuc2V0U2Vjb25kcyhkYXRhLmV4cGlyZXNfaW4pKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjb3BlXCIsIGRhdGEuc2NvcGUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwianRpXCIsIGRhdGEuanRpKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZnJlc2hfdG9rZW5cIiwgZGF0YS5yZWZyZXNoX3Rva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVzZXJSZWdpc3RyYXRpb25DbGljaygpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydyZWdpc3RyYXRpb24nXSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVtYWlsVmFsaWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHZhbGlkYXRlRW1haWwoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UudmFsaWRhdGVFbWFpbCh0aGlzLmZvcmdvdEVtYWlsLnJlcGxhY2UoLyAvZywgJycpKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGE9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5qc29uKCkgPT09IFwiRk9VTkRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1haWxWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1haWxWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHNlbmRFbWFpbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbWFpbFZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLnNlbmRQYXNzd29yZCh0aGlzLmZvcmdvdEVtYWlsKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvYXN0ZXJTZXJ2aWNlLnBvcCgnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCBcIkNvbmdyYXR1bGF0aW9uIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICwgJ1Bhc3N3b3JkIHdhcyBzZW5kZXQgb24geW91ciBlbWFpbC5DaGVjayBpdCBhbmQgZ2V0IGJhY2sgc29vbi4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmdvdEVtYWlsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
