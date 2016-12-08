System.register(["@angular/core", "@angular/http", "../../shared/services/api.service"], function(exports_1, context_1) {
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
    var core_1, http_1, ApiService;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(http) {
                    this.http = http;
                    this._pathUrl = ApiService.serverUrl;
                    this.client = {
                        'client_pass': '123456',
                        'client_id': 'clientapp',
                        'grant_type': 'password',
                        'scope': 'read%20write'
                    };
                }
                //Sending credentials{username ,password for getting token}
                LoginService.prototype.sendCredentials = function (model) {
                    console.log('Authentication pending...');
                    var tokenUrl = this._pathUrl + "/oauth/token";
                    var data = 'username=' + encodeURIComponent(model.username) + '&password='
                        + encodeURIComponent(model.password) + '&grant_type=password';
                    // HeaderComponent.currentUser = 
                    return this.http.post(tokenUrl, data);
                };
                //sends token to SERVERS PROTECTED RESOURCES if THIS ONE WILL PASS EVERYTHING IS WORKING
                LoginService.prototype.sendToken = function () {
                    var userUrl = this._pathUrl + "/restful/user/getCurrent";
                    return this.http.get(userUrl);
                };
                LoginService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                //cheking is there in localstorage data
                LoginService.prototype.checkLogin = function () {
                    if ((localStorage.getItem("access_token") != null) && (localStorage.getItem("access_token") != "")) {
                        return true;
                    }
                    else
                        return false;
                };
                //erasing everything from  local storage
                LoginService.prototype.logOut = function () {
                    localStorage.clear();
                };
                //gets UserName from  localStorage
                LoginService.prototype.getUserName = function () {
                    return localStorage.getItem("currentUserName");
                };
                LoginService.prototype.validateEmail = function (data) {
                    var validate = this._pathUrl + "/validEmail";
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post(validate, data, { headers: headers });
                };
                LoginService.prototype.sendPassword = function (data) {
                    var url = this._pathUrl + "/sendEmailMail";
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post(url, data, { headers: headers });
                };
                LoginService.decodeAccessToken = function (access_token) {
                    return JSON.parse(window.atob(access_token.split('.')[1]));
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBWUksc0JBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFWckIsYUFBUSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7b0JBRXhDLFdBQU0sR0FBRzt3QkFDTCxhQUFhLEVBQUUsUUFBUTt3QkFDdkIsV0FBVyxFQUFFLFdBQVc7d0JBQ3hCLFlBQVksRUFBRSxVQUFVO3dCQUN4QixPQUFPLEVBQUUsY0FBYztxQkFDMUIsQ0FBQztnQkFJRixDQUFDO2dCQUVELDJEQUEyRDtnQkFDM0Qsc0NBQWUsR0FBZixVQUFnQixLQUFLO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7b0JBRXpDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO29CQUM5QyxJQUFJLElBQUksR0FBRyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVk7MEJBQ3BFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxzQkFBc0IsQ0FBQztvQkFDL0QsaUNBQWlDO29CQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVELHdGQUF3RjtnQkFDeEYsZ0NBQVMsR0FBVDtvQkFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLDBCQUEwQixDQUFDO29CQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBR08sa0NBQVcsR0FBbkIsVUFBb0IsR0FBWTtvQkFDNUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsdUNBQXVDO2dCQUN2QyxpQ0FBVSxHQUFWO29CQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqRyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDO29CQUNELElBQUk7d0JBQ0EsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDckIsQ0FBQztnQkFFRCx3Q0FBd0M7Z0JBQ3hDLDZCQUFNLEdBQU47b0JBQ1EsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUU3QixDQUFDO2dCQUVELGtDQUFrQztnQkFDbEMsa0NBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO2dCQUVELG9DQUFhLEdBQWIsVUFBYyxJQUFJO29CQUNkLElBQUksUUFBUSxHQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsYUFBYSxDQUFDO29CQUN6QyxJQUFJLE9BQU8sR0FBQyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7b0JBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBQ0QsbUNBQVksR0FBWixVQUFhLElBQUk7b0JBQ2IsSUFBSSxHQUFHLEdBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxnQkFBZ0IsQ0FBQztvQkFDdkMsSUFBSSxPQUFPLEdBQUMsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO29CQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVhLDhCQUFpQixHQUEvQixVQUFnQyxZQUFtQjtvQkFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0QsQ0FBQztnQkF4RUw7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBMEViLG1CQUFDO1lBQUQsQ0F6RUEsQUF5RUMsSUFBQTtZQXpFRCx1Q0F5RUMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5pbXBvcnQge3JvdXRlc30gZnJvbSBcIi4uL2FwcC5yb3V0ZXNcIjtcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuICAgIHRva2VuOnN0cmluZztcclxuICAgIHByaXZhdGUgX3BhdGhVcmwgPSBBcGlTZXJ2aWNlLnNlcnZlclVybDtcclxuICAgIGN1cnJlbnRVc2VyOlVzZXI7XHJcbiAgICBjbGllbnQgPSB7XHJcbiAgICAgICAgJ2NsaWVudF9wYXNzJzogJzEyMzQ1NicsXHJcbiAgICAgICAgJ2NsaWVudF9pZCc6ICdjbGllbnRhcHAnLFxyXG4gICAgICAgICdncmFudF90eXBlJzogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAnc2NvcGUnOiAncmVhZCUyMHdyaXRlJ1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICAvL1NlbmRpbmcgY3JlZGVudGlhbHN7dXNlcm5hbWUgLHBhc3N3b3JkIGZvciBnZXR0aW5nIHRva2VufVxyXG4gICAgc2VuZENyZWRlbnRpYWxzKG1vZGVsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0F1dGhlbnRpY2F0aW9uIHBlbmRpbmcuLi4nKTtcclxuXHJcbiAgICAgICAgbGV0IHRva2VuVXJsID0gdGhpcy5fcGF0aFVybCArIFwiL29hdXRoL3Rva2VuXCI7XHJcbiAgICAgICAgdmFyIGRhdGEgPSAndXNlcm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChtb2RlbC51c2VybmFtZSkgKyAnJnBhc3N3b3JkPSdcclxuICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQobW9kZWwucGFzc3dvcmQpICsgJyZncmFudF90eXBlPXBhc3N3b3JkJztcclxuICAgICAgICAgICAvLyBIZWFkZXJDb21wb25lbnQuY3VycmVudFVzZXIgPSBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodG9rZW5VcmwsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2VuZHMgdG9rZW4gdG8gU0VSVkVSUyBQUk9URUNURUQgUkVTT1VSQ0VTIGlmIFRISVMgT05FIFdJTEwgUEFTUyBFVkVSWVRISU5HIElTIFdPUktJTkdcclxuICAgIHNlbmRUb2tlbigpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgbGV0IHVzZXJVcmwgPSB0aGlzLl9wYXRoVXJsICsgXCIvcmVzdGZ1bC91c2VyL2dldEN1cnJlbnRcIjtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1c2VyVXJsKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6UmVzcG9uc2UpIHtcclxuICAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGJvZHkuZGF0YSB8fCB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NoZWtpbmcgaXMgdGhlcmUgaW4gbG9jYWxzdG9yYWdlIGRhdGFcclxuICAgIGNoZWNrTG9naW4oKTpib29sZWFuIHtcclxuICAgICAgICBpZiAoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzX3Rva2VuXCIpICE9IG51bGwpICYmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc190b2tlblwiKSAhPSBcIlwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9lcmFzaW5nIGV2ZXJ5dGhpbmcgZnJvbSAgbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9nT3V0KCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXRzIFVzZXJOYW1lIGZyb20gIGxvY2FsU3RvcmFnZVxyXG4gICAgZ2V0VXNlck5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFVzZXJOYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlRW1haWwoZGF0YSl7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRlPXRoaXMuX3BhdGhVcmwrXCIvdmFsaWRFbWFpbFwiO1xyXG4gICAgICAgIGxldCBoZWFkZXJzPW5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodmFsaWRhdGUsIGRhdGEse2hlYWRlcnM6aGVhZGVyc30pO1xyXG4gICAgfVxyXG4gICAgc2VuZFBhc3N3b3JkKGRhdGEpe1xyXG4gICAgICAgIGxldCB1cmw9dGhpcy5fcGF0aFVybCtcIi9zZW5kRW1haWxNYWlsXCI7XHJcbiAgICAgICAgbGV0IGhlYWRlcnM9bmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGRhdGEse2hlYWRlcnM6aGVhZGVyc30pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY29kZUFjY2Vzc1Rva2VuKGFjY2Vzc190b2tlbjpzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihhY2Nlc3NfdG9rZW4uc3BsaXQoJy4nKVsxXSkpO1xyXG4gICAgfVxyXG4gICBcclxufVxyXG4iXX0=
