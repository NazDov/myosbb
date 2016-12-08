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
    var ManagerLoginGuard;
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
            ManagerLoginGuard = (function () {
                function ManagerLoginGuard(_loginService, _currentUserService, _router) {
                    this._loginService = _loginService;
                    this._currentUserService = _currentUserService;
                    this._router = _router;
                }
                ManagerLoginGuard.prototype.canActivate = function (next, state) {
                    if (this._loginService.checkLogin() && this._currentUserService.getRole() == "ROLE_MANAGER") {
                        return true;
                    }
                    this._router.navigate(['/login']);
                    return false;
                };
                ManagerLoginGuard = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, current_user_service_1.CurrentUserService, router_1.Router])
                ], ManagerLoginGuard);
                return ManagerLoginGuard;
            }());
            exports_1("ManagerLoginGuard", ManagerLoginGuard);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9ndWFyZC9tYW5hZ2VyLmxvZ2luLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBRUksMkJBQW9CLGFBQTJCLEVBQzNCLG1CQUF1QyxFQUN2QyxPQUFlO29CQUZmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUMzQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO29CQUN2QyxZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUNuQyxDQUFDO2dCQUVELHVDQUFXLEdBQVgsVUFBWSxJQUE0QixFQUM1QixLQUEwQjtvQkFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFDMUYsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBRWpCLENBQUM7Z0JBakJMO29CQUFDLGlCQUFVLEVBQUU7O3FDQUFBO2dCQW1CYix3QkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQsaURBa0JDLENBQUEiLCJmaWxlIjoic3JjL3NoYXJlZC9ndWFyZC9tYW5hZ2VyLmxvZ2luLmd1YXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYW5BY3RpdmF0ZSwgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90fSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4uLy4uL2FwcC9sb2dpbi9sb2dpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q3VycmVudFVzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvY3VycmVudC51c2VyLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hbmFnZXJMb2dpbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY3VycmVudFVzZXJTZXJ2aWNlOiBDdXJyZW50VXNlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj58Ym9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvZ2luU2VydmljZS5jaGVja0xvZ2luKCkgJiYgdGhpcy5fY3VycmVudFVzZXJTZXJ2aWNlLmdldFJvbGUoKSA9PSBcIlJPTEVfTUFOQUdFUlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59Il19
