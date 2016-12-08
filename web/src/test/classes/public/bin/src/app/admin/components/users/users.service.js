System.register(['@angular/core', "../../../../shared/models/User", "@angular/http", 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', "../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var core_1, User_1, http_1, Observable_1, ApiService;
    var UsersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            UsersService = (function () {
                function UsersService(http) {
                    this.http = http;
                    this._pathUrl = ApiService.serverUrl + '/restful/user/';
                    this._pathUrlForUser = ApiService.serverUrl + '/registration/';
                    this._getUrl = ApiService.serverUrl + '/restful/role/';
                }
                UsersService.prototype.getAllUsers = function () {
                    console.log('in service');
                    return this.http.get(this._pathUrl)
                        .map(function (response) { return response.json(); });
                };
                UsersService.prototype.updateUser = function (user) {
                    return this.http.post(this._pathUrl + user.userId, JSON.stringify(user))
                        .map(function (res) { return new User_1.User(res.json()); });
                };
                UsersService.prototype.deleteUser = function (user) {
                    console.log(user);
                    return this.http.delete(this._pathUrl + user.userId).map(function (response) { return response.json(); });
                };
                UsersService.prototype.saveUser = function (user) {
                    return this.http.post(this._pathUrlForUser, JSON.stringify(user))
                        .map(function (res) { return res.json(); });
                };
                UsersService.prototype.changeActivation = function (user) {
                    return this.http.post(this._pathUrl + user.userId + "/changeActivation");
                };
                UsersService.prototype.listAllRoles = function () {
                    console.log('Get all role');
                    return this.http.get(this._getUrl)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                UsersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UsersService);
                return UsersService;
            }());
            exports_1("UsersService", UsersService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQU1JLHNCQUFxQixJQUFTO29CQUFULFNBQUksR0FBSixJQUFJLENBQUs7b0JBSnRCLGFBQVEsR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO29CQUNuRCxvQkFBZSxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7b0JBQzFELFlBQU8sR0FBVSxVQUFVLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO2dCQUdqRSxDQUFDO2dCQUVELGtDQUFXLEdBQVg7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7eUJBQzlCLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCxpQ0FBVSxHQUFWLFVBQVcsSUFBUztvQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNoRSxHQUFHLENBQUMsVUFBQyxHQUFZLElBQU0sTUFBTSxDQUFDLElBQUksV0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBRUQsaUNBQVUsR0FBVixVQUFXLElBQVM7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQ3hGLENBQUM7Z0JBRUQsK0JBQVEsR0FBUixVQUFTLElBQXFCO29CQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUMzRCxHQUFHLENBQUMsVUFBQyxHQUFZLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBRUYsdUNBQWdCLEdBQWhCLFVBQWlCLElBQVM7b0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDekUsQ0FBQztnQkFFRixtQ0FBWSxHQUFaO29CQUNLLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUM3QixHQUFHLENBQUMsVUFBQyxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO3lCQUNqQyxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUcsT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQXhDTDtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkF5Q2IsbUJBQUM7WUFBRCxDQXhDQSxBQXdDQyxJQUFBO1lBeENELHVDQXdDQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2Vycy91c2Vycy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCB7IFVzZXJSZWdpc3RyYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXJfcmVnaXN0cmF0aW9uJztcclxuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMsIEh0dHAsSGVhZGVycyxSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcbmltcG9ydCBBcGlTZXJ2aWNlID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZVwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJzU2VydmljZSB7IFxyXG4gICAgXHJcbiAgICBwcml2YXRlIF9wYXRoVXJsID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvdXNlci8nO1xyXG4gICAgcHJpdmF0ZSBfcGF0aFVybEZvclVzZXIgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVnaXN0cmF0aW9uLyc7XHJcbiAgICBwcml2YXRlIF9nZXRVcmw6c3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvcm9sZS8nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBodHRwOkh0dHApe1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFVzZXJzKCk6T2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBzZXJ2aWNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5fcGF0aFVybClcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVzZXIodXNlcjpVc2VyKTpPYnNlcnZhYmxlPFVzZXI+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9wYXRoVXJsK3VzZXIudXNlcklkLEpTT04uc3RyaW5naWZ5KHVzZXIpKVxyXG4gICAgICAgICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHtyZXR1cm4gbmV3IFVzZXIocmVzLmpzb24oKSl9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVVc2VyKHVzZXI6VXNlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5fcGF0aFVybCt1c2VyLnVzZXJJZCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVVzZXIodXNlcjpVc2VyUmVnaXN0cmF0aW9uKTpPYnNlcnZhYmxlPFVzZXJSZWdpc3RyYXRpb24+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9wYXRoVXJsRm9yVXNlcixKU09OLnN0cmluZ2lmeSh1c2VyKSlcclxuICAgICAgICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgIGNoYW5nZUFjdGl2YXRpb24odXNlcjpVc2VyKTpPYnNlcnZhYmxlPFVzZXI+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9wYXRoVXJsK3VzZXIudXNlcklkK1wiL2NoYW5nZUFjdGl2YXRpb25cIik7XHJcbiAgICB9XHJcblxyXG4gICBsaXN0QWxsUm9sZXMoKTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZXQgYWxsIHJvbGUnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLl9nZXRVcmwpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKT0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9Pk9ic2VydmFibGUudGhyb3coZXJyb3IpKTsgIFxyXG4gICAgfVxyXG59Il19
