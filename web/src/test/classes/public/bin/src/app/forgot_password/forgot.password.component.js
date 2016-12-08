System.register(['@angular/core', '@angular/router', './forgot.password.service'], function(exports_1, context_1) {
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
    var core_1, router_1, forgot_password_service_1;
    var ForgotPasswordComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forgot_password_service_1_1) {
                forgot_password_service_1 = forgot_password_service_1_1;
            }],
        execute: function() {
            ForgotPasswordComponent = (function () {
                function ForgotPasswordComponent(_router, route, forgotPassService) {
                    var _this = this;
                    this._router = _router;
                    this.route = route;
                    this.forgotPassService = forgotPassService;
                    this.keyValid = false;
                    this.password = "";
                    this.confirmPassword = "";
                    this.errorMsg = "";
                    this.errorConfirm = false;
                    this.id = "";
                    this.FormValid = false;
                    this.route.params.subscribe(function (params) {
                        _this.id = params['id'] || 'None';
                        _this.key = params['key'] || 'None';
                    });
                }
                ForgotPasswordComponent.prototype.ngOnInit = function () {
                    this.validateKey();
                };
                ForgotPasswordComponent.prototype.confirmPass = function () {
                    this.errorMsg = "";
                    var password = this.confirmPassword;
                    var password2 = this.password;
                    this.FormValid = false;
                    if (password.length != 0) {
                        if (password != password2) {
                            this.errorMsg = "Passwords don't match. Please try again";
                            this.errorConfirm = true;
                            this.confirmPassword = "";
                            return;
                        }
                        this.FormValid = true;
                    }
                };
                ForgotPasswordComponent.prototype.validateKey = function () {
                    var _this = this;
                    this.forgotPassService.validateKey({ id: this.id, key: this.key }).subscribe(function (data) {
                        if (data.json() === "FOUND") {
                            _this.keyValid = true;
                        }
                        else {
                            _this.keyValid = false;
                            _this.errorMsg = "Your url is not valid. Try again or stop lamatu this Nazar.";
                        }
                    });
                };
                ForgotPasswordComponent.prototype.updatePassword = function () {
                    var _this = this;
                    this.forgotPassService.updatePassword(this.id, this.password).subscribe(function (data) {
                        _this._router.navigate(['/login']);
                    }, function (error) {
                        console.log(error);
                    });
                };
                ForgotPasswordComponent = __decorate([
                    core_1.Component({
                        selector: 'forgot-pass',
                        templateUrl: 'src/app/forgot_password/forgotpass.html',
                        styleUrls: ['assets/css/registration/registration.css'],
                        providers: [forgot_password_service_1.ForgotPasswordService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, forgot_password_service_1.ForgotPasswordService])
                ], ForgotPasswordComponent);
                return ForgotPasswordComponent;
            }());
            exports_1("ForgotPasswordComponent", ForgotPasswordComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mb3Jnb3RfcGFzc3dvcmQvZm9yZ290LnBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQVVJLGlDQUFvQixPQUFjLEVBQVMsS0FBb0IsRUFBUyxpQkFBdUM7b0JBVm5ILGlCQTREQztvQkFsRHVCLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBZTtvQkFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXNCO29CQVIvRyxhQUFRLEdBQVMsS0FBSyxDQUFDO29CQUN2QixhQUFRLEdBQVUsRUFBRSxDQUFDO29CQUNyQixvQkFBZSxHQUFVLEVBQUUsQ0FBQztvQkFDNUIsYUFBUSxHQUFVLEVBQUUsQ0FBQztvQkFDckIsaUJBQVksR0FBVyxLQUFLLENBQUM7b0JBQzdCLE9BQUUsR0FBUSxFQUFFLENBQUM7b0JBQ2IsY0FBUyxHQUFDLEtBQUssQ0FBQztvQkFHWixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO3dCQUM5QixLQUFJLENBQUMsRUFBRSxHQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBRSxNQUFNLENBQUM7d0JBQzdCLEtBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQztvQkFBQSxDQUFDLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFRCwwQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFdkIsQ0FBQztnQkFDRCw2Q0FBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFDO29CQUNqQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO29CQUNwQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUM5QixJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztvQkFDckIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyx5Q0FBeUMsQ0FBQzs0QkFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7NEJBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDOzRCQUMxQixNQUFNLENBQUM7d0JBQ1gsQ0FBQzt3QkFDRCxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQztvQkFDeEIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDZDQUFXLEdBQVg7b0JBQUEsaUJBWUM7b0JBWEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxFQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQ25FLFVBQUEsSUFBSTt3QkFDQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDMUIsS0FBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7d0JBQ3ZCLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBRUosS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7NEJBQzFCLEtBQUksQ0FBQyxRQUFRLEdBQUMsNkRBQTZELENBQUE7d0JBQzNFLENBQUM7b0JBQ0wsQ0FBQyxDQUNKLENBQUE7Z0JBQ0wsQ0FBQztnQkFFRCxnREFBYyxHQUFkO29CQUFBLGlCQVFDO29CQVBHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNsRSxVQUFBLElBQUk7d0JBQ0EsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO29CQUNyQyxDQUFDLEVBQUMsVUFBQSxLQUFLO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsQ0FDSixDQUFBO2dCQUNMLENBQUM7Z0JBaEVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFdBQVcsRUFBRSx5Q0FBeUM7d0JBQ3RELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO3dCQUN2RCxTQUFTLEVBQUMsQ0FBQywrQ0FBcUIsQ0FBQztxQkFDcEMsQ0FBQzs7MkNBQUE7Z0JBNkRGLDhCQUFDO1lBQUQsQ0E1REEsQUE0REMsSUFBQTtZQTVERCw2REE0REMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdF9wYXNzd29yZC9mb3Jnb3QucGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkU2VydmljZSB9IGZyb20gJy4vZm9yZ290LnBhc3N3b3JkLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZvcmdvdC1wYXNzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2FwcC9mb3Jnb3RfcGFzc3dvcmQvZm9yZ290cGFzcy5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydhc3NldHMvY3NzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY3NzJ10sXHJcbiAgICBwcm92aWRlcnM6W0ZvcmdvdFBhc3N3b3JkU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgICBrZXk7XHJcbiAgICBrZXlWYWxpZDpib29sZWFuPWZhbHNlO1xyXG4gICAgcGFzc3dvcmQ6c3RyaW5nID0gXCJcIjtcclxuICAgIGNvbmZpcm1QYXNzd29yZDpzdHJpbmcgPSBcIlwiO1xyXG4gICAgZXJyb3JNc2c6c3RyaW5nID0gXCJcIjtcclxuICAgIGVycm9yQ29uZmlybTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBpZDpzdHJpbmc9XCJcIjtcclxuICAgIEZvcm1WYWxpZD1mYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6Um91dGVyLHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUscHJpdmF0ZSBmb3Jnb3RQYXNzU2VydmljZTpGb3Jnb3RQYXNzd29yZFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+XHJcbiAgICAgICAgeyAgIHRoaXMuaWQ9cGFyYW1zWydpZCddfHwnTm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMua2V5ID0gcGFyYW1zWydrZXknXSB8fCAnTm9uZSc7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGVLZXkoKTtcclxuXHJcbiAgICB9XHJcbiAgICBjb25maXJtUGFzcygpIHtcclxuICAgICAgICB0aGlzLmVycm9yTXNnPVwiXCI7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkID0gdGhpcy5jb25maXJtUGFzc3dvcmQ7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkMiA9IHRoaXMucGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtVmFsaWQ9ZmFsc2U7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXNzd29yZCAhPSBwYXNzd29yZDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNc2cgPSBcIlBhc3N3b3JkcyBkb24ndCBtYXRjaC4gUGxlYXNlIHRyeSBhZ2FpblwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckNvbmZpcm0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtUGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuRm9ybVZhbGlkPXRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlS2V5KCkge1xyXG4gICAgICAgIHRoaXMuZm9yZ290UGFzc1NlcnZpY2UudmFsaWRhdGVLZXkoe2lkOnRoaXMuaWQsa2V5OnRoaXMua2V5fSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuanNvbigpID09PSBcIkZPVU5EXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleVZhbGlkPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTXNnPVwiWW91ciB1cmwgaXMgbm90IHZhbGlkLiBUcnkgYWdhaW4gb3Igc3RvcCBsYW1hdHUgdGhpcyBOYXphci5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBhc3N3b3JkKCl7XHJcbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzU2VydmljZS51cGRhdGVQYXNzd29yZCh0aGlzLmlkLHRoaXMucGFzc3dvcmQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pXHJcbiAgICAgICAgICAgIH0sZXJyb3I9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuIl19
