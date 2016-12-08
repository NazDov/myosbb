System.register(["@angular/core", "../../shared/models/User", "../../app/login/login.service", "@angular/http", "../services/api.service", "rxjs/Observable", '@angular/router'], function(exports_1, context_1) {
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
    var core_1, User_1, login_service_1, http_1, ApiService, Observable_1, router_1;
    var CurrentUserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ApiService_1) {
                ApiService = ApiService_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CurrentUserService = (function () {
                function CurrentUserService(_loginservice, http, router) {
                    this._loginservice = _loginservice;
                    this.http = http;
                    this.router = router;
                    this.getUrl = ApiService.serverUrl + '/restful/user';
                    this._pathUrl = ApiService.serverUrl;
                    this.role = "";
                    this.currentUser = new User_1.User();
                    this.initUser();
                    this.setRole();
                }
                CurrentUserService.prototype.setUser = function (user) {
                    this.currentUser = user.json();
                };
                CurrentUserService.prototype.setUserPromise = function (user) {
                    this.currentUser = user;
                    return this.currentUser;
                };
                CurrentUserService.prototype.getUser = function () {
                    return this.currentUser;
                };
                CurrentUserService.prototype.initUser = function () {
                    var _this = this;
                    if (this._loginservice.checkLogin()) {
                        this._loginservice.sendToken().subscribe(function (data) {
                            _this.setUser(data);
                        });
                    }
                };
                CurrentUserService.prototype.getRole = function () {
                    return this.role;
                };
                CurrentUserService.prototype.setRole = function () {
                    if (this._loginservice.checkLogin()) {
                        this.role = this.decodeAccessToken(localStorage.getItem("access_token"))["authorities"][0];
                    }
                };
                CurrentUserService.prototype.decodeAccessToken = function (access_token) {
                    return JSON.parse(window.atob(access_token.split('.')[1]));
                };
                CurrentUserService.prototype.refreshToken = function () {
                    var _this = this;
                    console.log("Refreshing token");
                    var url = this._pathUrl + "/oauth/token";
                    var headers = new http_1.Headers();
                    headers.append('Authorization', "Basic Y2xpZW50YXBwOjEyMzQ1Ng==");
                    headers.append('Accept', "application/json");
                    headers.append('Content-Type', "application/x-www-form-urlencoded");
                    var data = 'grant_type=refresh_token&refresh_token=' + encodeURIComponent(localStorage.getItem('refresh_token'));
                    console.log("Headers have been formed");
                    this.http.post(url, data, { headers: headers }).subscribe(function (data) {
                        _this.tokenParseInLocalStorage(data.json());
                    }, function (err) {
                        console.log(err);
                    });
                };
                CurrentUserService.prototype.tokenParseInLocalStorage = function (data) {
                    localStorage.setItem("access_token", data.access_token);
                    localStorage.setItem("token_type", data.token_type);
                    localStorage.setItem("expires_in", new Date().setMilliseconds(data.expires_in * 1000));
                    localStorage.setItem("scope", data.scope);
                    localStorage.setItem("jti", data.jti);
                    localStorage.setItem("refresh_token", data.refresh_token);
                };
                CurrentUserService.prototype.getUserById = function (id) {
                    var url = this.getUrl + "/" + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                CurrentUserService.prototype.toUser = function (id) {
                    console.log("toUser:" + id);
                    if (id == this.currentUser.userId) {
                        this.router.navigate(['home/user/main']);
                    }
                    else {
                        if (this.currentUser.role == "ROLE_ADMIN") {
                            this.router.navigate(['admin/friend', id]);
                        }
                        if (this.currentUser.role == "ROLE_MANAGER") {
                            this.router.navigate(['manager/friend', id]);
                        }
                        else {
                            this.router.navigate(['home/friend', id]);
                        }
                    }
                };
                CurrentUserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, http_1.Http, router_1.Router])
                ], CurrentUserService);
                return CurrentUserService;
            }());
            exports_1("CurrentUserService", CurrentUserService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQU9JLDRCQUFvQixhQUEwQixFQUN0QyxJQUFTLEVBQ1QsTUFBYTtvQkFGRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtvQkFDdEMsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFDVCxXQUFNLEdBQU4sTUFBTSxDQUFPO29CQVBiLFdBQU0sR0FBVSxVQUFVLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztvQkFDdkQsYUFBUSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7b0JBQ2hDLFNBQUksR0FBVSxFQUFFLENBQUM7b0JBT3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsb0NBQU8sR0FBUCxVQUFRLElBQWE7b0JBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6QyxDQUFDO2dCQUVELDJDQUFjLEdBQWQsVUFBZSxJQUFTO29CQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsb0NBQU8sR0FBUDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCxxQ0FBUSxHQUFSO29CQUFBLGlCQU1DO29CQUxHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FB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QkFDOUMsQ0FBQztvQkFDVCxDQUFDO2dCQUNMLENBQUM7Z0JBekdEO29CQUFDLGlCQUFVLEVBQUU7O3NDQUFBO2dCQTJHYix5QkFBQztZQUFELENBMUdBLEFBMEdDLElBQUE7WUExR0QsbURBMEdDLENBQUEiLCJmaWxlIjoic3JjL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LnVzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgQ29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuLi8uLi9hcHAvbG9naW4vbG9naW4uc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9ICBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgQXBpU2VydmljZSA9IHJlcXVpcmUoXCIuLi9zZXJ2aWNlcy9hcGkuc2VydmljZVwiKTtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEN1cnJlbnRVc2VyU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRVcmw6c3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvdXNlcic7XHJcbiAgICBwcml2YXRlIF9wYXRoVXJsID0gQXBpU2VydmljZS5zZXJ2ZXJVcmw7XHJcbiAgICBwcml2YXRlIHJvbGU6c3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBjdXJyZW50VXNlcjpVc2VyXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9naW5zZXJ2aWNlOkxvZ2luU2VydmljZSxcclxuICAgIHByaXZhdGUgaHR0cDpIdHRwLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyXHJcbiAgICApIHsgXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0VXNlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0Um9sZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXIodXNlcjpSZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSA8VXNlcj51c2VyLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyUHJvbWlzZSh1c2VyOlVzZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyKCk6VXNlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFVzZXIoKTpVc2VyIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9naW5zZXJ2aWNlLmNoZWNrTG9naW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dpbnNlcnZpY2Uuc2VuZFRva2VuKCkuc3Vic2NyaWJlKGRhdGE9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVzZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJvbGUoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvbGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Um9sZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9naW5zZXJ2aWNlLmNoZWNrTG9naW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvbGUgPSB0aGlzLmRlY29kZUFjY2Vzc1Rva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzX3Rva2VuXCIpKVtcImF1dGhvcml0aWVzXCJdWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgIGRlY29kZUFjY2Vzc1Rva2VuKGFjY2Vzc190b2tlbjpzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihhY2Nlc3NfdG9rZW4uc3BsaXQoJy4nKVsxXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hUb2tlbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlZnJlc2hpbmcgdG9rZW5cIik7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX3BhdGhVcmwgKyBcIi9vYXV0aC90b2tlblwiO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIGBCYXNpYyBZMnhwWlc1MFlYQndPakV5TXpRMU5nPT1gKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgYGFwcGxpY2F0aW9uL2pzb25gKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgYGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZGApO1xyXG4gICAgICAgIHZhciBkYXRhID0gJ2dyYW50X3R5cGU9cmVmcmVzaF90b2tlbiZyZWZyZXNoX3Rva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWFkZXJzIGhhdmUgYmVlbiBmb3JtZWRcIik7XHJcbiAgICAgICAgdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhLCB7aGVhZGVyczogaGVhZGVyc30pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuUGFyc2VJbkxvY2FsU3RvcmFnZShkYXRhLmpzb24oKSk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9rZW5QYXJzZUluTG9jYWxTdG9yYWdlKGRhdGE6YW55KSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NfdG9rZW5cIiwgZGF0YS5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5fdHlwZVwiLCBkYXRhLnRva2VuX3R5cGUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhwaXJlc19pblwiLCBuZXcgRGF0ZSgpLnNldE1pbGxpc2Vjb25kcyhkYXRhLmV4cGlyZXNfaW4gKiAxMDAwKSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY29wZVwiLCBkYXRhLnNjb3BlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImp0aVwiLCBkYXRhLmp0aSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWZyZXNoX3Rva2VuXCIsIGRhdGEucmVmcmVzaF90b2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckJ5SWQoaWQ6bnVtYmVyKTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuZ2V0VXJsfS8ke2lkfWA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9Vc2VyKGlkOm51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9Vc2VyOlwiK2lkKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaWQgPT0gdGhpcy5jdXJyZW50VXNlci51c2VySWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lL3VzZXIvbWFpbiddKVxyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyLnJvbGUgPT0gXCJST0xFX0FETUlOXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYWRtaW4vZnJpZW5kJywgaWRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VXNlci5yb2xlID09IFwiUk9MRV9NQU5BR0VSXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbWFuYWdlci9mcmllbmQnLCBpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lL2ZyaWVuZCcsIGlkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gICAgXHJcbn0iXX0=
