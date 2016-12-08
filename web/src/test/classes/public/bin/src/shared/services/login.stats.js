System.register(["@angular/core", "rxjs/Subject"], function(exports_1, context_1) {
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
    var core_1, Subject_1;
    var LoginStat;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            LoginStat = (function () {
                function LoginStat() {
                    this.isLoggedIn = new Subject_1.Subject();
                    this.loggedInObserver$ = this.isLoggedIn.asObservable();
                }
                LoginStat.prototype.setLoginStat = function (stat) {
                    this.isLoggedIn.next(stat);
                };
                LoginStat = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoginStat);
                return LoginStat;
            }());
            exports_1("LoginStat", LoginStat);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zdGF0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO29CQUVZLGVBQVUsR0FBRyxJQUFJLGlCQUFPLEVBQVcsQ0FBQztvQkFDNUMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFPdkQsQ0FBQztnQkFMRyxnQ0FBWSxHQUFaLFVBQWEsSUFBWTtvQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBUkw7b0JBQUMsaUJBQVUsRUFBRTs7NkJBQUE7Z0JBV2IsZ0JBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELGlDQVVDLENBQUEiLCJmaWxlIjoic3JjL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zdGF0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dpblN0YXQge1xyXG5cclxuICAgIHByaXZhdGUgaXNMb2dnZWRJbiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICBsb2dnZWRJbk9ic2VydmVyJCA9IHRoaXMuaXNMb2dnZWRJbi5hc09ic2VydmFibGUoKTtcclxuICAgIFxyXG4gICAgc2V0TG9naW5TdGF0KHN0YXQ6Ym9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbi5uZXh0KHN0YXQpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=
