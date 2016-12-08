System.register(['@angular/core', "@angular/http", "../../shared/services/api.service"], function(exports_1, context_1) {
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
    var ForgotPasswordService;
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
            ForgotPasswordService = (function () {
                function ForgotPasswordService(http) {
                    this.http = http;
                    this._pathUrl = ApiService.serverUrl;
                }
                ForgotPasswordService.prototype.validateKey = function (data) {
                    var validate = this._pathUrl + "/validateForgotPasswordKey";
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post(validate, data, { headers: headers });
                };
                ForgotPasswordService.prototype.updatePassword = function (id, password) {
                    var url = this._pathUrl + "/restful/user/" + id + "/password";
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post(url, password, { headers: headers });
                };
                ForgotPasswordService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ForgotPasswordService);
                return ForgotPasswordService;
            }());
            exports_1("ForgotPasswordService", ForgotPasswordService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mb3Jnb3RfcGFzc3dvcmQvZm9yZ290LnBhc3N3b3JkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFHSSwrQkFBb0IsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO29CQUZyQixhQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztnQkFHeEMsQ0FBQztnQkFFRCwyQ0FBVyxHQUFYLFVBQVksSUFBSTtvQkFDWixJQUFJLFFBQVEsR0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLDRCQUE0QixDQUFDO29CQUN4RCxJQUFJLE9BQU8sR0FBQyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7b0JBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBRUQsOENBQWMsR0FBZCxVQUFlLEVBQVMsRUFBQyxRQUFRO29CQUM3QixJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLGdCQUFnQixHQUFDLEVBQUUsR0FBQyxXQUFXLENBQUM7b0JBQ3RELElBQUksT0FBTyxHQUFDLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztvQkFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztnQkFDM0QsQ0FBQztnQkFqQkw7b0JBQUMsaUJBQVUsRUFBRTs7eUNBQUE7Z0JBbUJiLDRCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCx5REFrQkMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdF9wYXNzd29yZC9mb3Jnb3QucGFzc3dvcmQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvVXNlclwiO1xyXG5pbXBvcnQgQXBpU2VydmljZSA9IHJlcXVpcmUoXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2VcIik7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZFNlcnZpY2V7XHJcbiAgICBwcml2YXRlIF9wYXRoVXJsID0gQXBpU2VydmljZS5zZXJ2ZXJVcmw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZUtleShkYXRhKXtcclxuICAgICAgICBsZXQgdmFsaWRhdGU9dGhpcy5fcGF0aFVybCtcIi92YWxpZGF0ZUZvcmdvdFBhc3N3b3JkS2V5XCI7XHJcbiAgICAgICAgbGV0IGhlYWRlcnM9bmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh2YWxpZGF0ZSwgZGF0YSx7aGVhZGVyczpoZWFkZXJzfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZVBhc3N3b3JkKGlkOnN0cmluZyxwYXNzd29yZCl7XHJcbiAgICAgICAgbGV0IHVybD10aGlzLl9wYXRoVXJsK1wiL3Jlc3RmdWwvdXNlci9cIitpZCtcIi9wYXNzd29yZFwiO1xyXG4gICAgICAgIGxldCBoZWFkZXJzPW5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBwYXNzd29yZCx7aGVhZGVyczpoZWFkZXJzfSk7XHJcbiAgICB9XHJcblxyXG59Il19
