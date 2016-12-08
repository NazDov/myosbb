System.register(["@angular/router", "@angular/core", "../../app/login/login.service", "../services/current.user.service"], function(exports_1, context_1) {
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
    var router_1, core_1, login_service_1, current_user_service_1;
    var AdminLoginGuard;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (current_user_service_1_1) {
                current_user_service_1 = current_user_service_1_1;
            }],
        execute: function() {
            AdminLoginGuard = (function () {
                function AdminLoginGuard(_loginService, _currentUserService, _router) {
                    this._loginService = _loginService;
                    this._currentUserService = _currentUserService;
                    this._router = _router;
                }
                AdminLoginGuard.prototype.canActivate = function (next, state) {
                    if (this._loginService.checkLogin() && this._currentUserService.getRole() == 'ROLE_ADMIN') {
                        return true;
                    }
                    this._router.navigate(['/login']);
                    return false;
                };
                AdminLoginGuard = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, current_user_service_1.CurrentUserService, router_1.Router])
                ], AdminLoginGuard);
                return AdminLoginGuard;
            }());
            exports_1("AdminLoginGuard", AdminLoginGuard);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9ndWFyZC9hZG1pbi5sb2dpbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUVJLHlCQUFvQixhQUEyQixFQUMzQixtQkFBdUMsRUFDdkMsT0FBZTtvQkFGZixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtvQkFDdkMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtnQkFDbkMsQ0FBQztnQkFFRCxxQ0FBVyxHQUFYLFVBQVksSUFBNEIsRUFDNUIsS0FBMEI7b0JBRWxDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQ3hGLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUVqQixDQUFDO2dCQWxCTDtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkFvQmIsc0JBQUM7WUFBRCxDQW5CQSxBQW1CQyxJQUFBO1lBbkJELDZDQW1CQyxDQUFBIiwiZmlsZSI6InNyYy9zaGFyZWQvZ3VhcmQvYWRtaW4ubG9naW4uZ3VhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhbkFjdGl2YXRlLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3R9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vYXBwL2xvZ2luL2xvZ2luLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDdXJyZW50VXNlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWRtaW5Mb2dpbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY3VycmVudFVzZXJTZXJ2aWNlOiBDdXJyZW50VXNlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj58Ym9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9sb2dpblNlcnZpY2UuY2hlY2tMb2dpbigpICYmIHRoaXMuX2N1cnJlbnRVc2VyU2VydmljZS5nZXRSb2xlKCkgPT0gJ1JPTEVfQURNSU4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59Il19
