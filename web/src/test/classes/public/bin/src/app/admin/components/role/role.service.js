System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/toPromise", "rxjs/Observable", "../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, ApiService;
    var RoleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            RoleService = (function () {
                function RoleService(http) {
                    this.http = http;
                    this.deleteUrl = ApiService.serverUrl + '/restful/role/id';
                    this.postUrl = ApiService.serverUrl + '/restful/role/';
                    this.putUrl = ApiService.serverUrl + '/restful/role/';
                    this.getUrl = ApiService.serverUrl + '/restful/role?pageNumber=';
                }
                //Checked
                RoleService.prototype.getAllRole = function (pageNumber) {
                    console.log('Get all role');
                    return this.http.get(this.getUrl + pageNumber)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                //Checked
                RoleService.prototype.addRole = function (role) {
                    console.log('Add new role');
                    return this.http.post(this.postUrl, JSON.stringify(role))
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(function (error) { return console.error(error); });
                };
                //Checked
                RoleService.prototype.editRole = function (role) {
                    console.log('Edit role');
                    return this.http.put(this.putUrl, JSON.stringify(role))
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                //Checked
                RoleService.prototype.deleteRole = function (role) {
                    var url = " " + this.deleteUrl + "/" + role.roleId;
                    console.log('delete role by id: ' + role.roleId);
                    return this.http.delete(url)
                        .toPromise().then(function (res) { return role; })
                        .catch(function (error) { return console.error(error); });
                };
                RoleService.prototype.getAllRolesSorted = function (pageNumber, name, order) {
                    return this.http.get(this.getUrl + pageNumber + '&&sortedBy=' + name + '&&asc=' + order)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                RoleService.prototype.handleError = function (error) {
                    console.log('HandleError', error);
                    return Promise.reject(error.message || error);
                };
                RoleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RoleService);
                return RoleService;
            }());
            exports_1("RoleService", RoleService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL3JvbGUvcm9sZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFRSSxxQkFBb0IsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQU50QixjQUFTLEdBQVUsVUFBVSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztvQkFDN0QsWUFBTyxHQUFVLFVBQVUsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7b0JBQ3pELFdBQU0sR0FBVSxVQUFVLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO29CQUN4RCxXQUFNLEdBQVUsVUFBVSxDQUFDLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztnQkFHekMsQ0FBQztnQkFFbkMsU0FBUztnQkFDVCxnQ0FBVSxHQUFWLFVBQVksVUFBaUI7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQzt5QkFDekMsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDakMsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFHLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFDRCxTQUFTO2dCQUNULDZCQUFPLEdBQVAsVUFBUSxJQUFVO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3hDLFNBQVMsRUFBRTt5QkFDWCxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN2QixLQUFLLENBQUMsVUFBQyxLQUFLLElBQUcsT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBQ0QsU0FBUztnQkFDVCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtvQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUN0QyxTQUFTLEVBQUU7eUJBQ1gsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFN0MsQ0FBQztnQkFFRCxTQUFTO2dCQUNULGdDQUFVLEdBQVYsVUFBVyxJQUFXO29CQUNsQixJQUFJLEdBQUcsR0FBRyxNQUFJLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE1BQVEsQ0FBQztvQkFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7eUJBQ2YsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQzt5QkFDN0IsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFHLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO2dCQUVELHVDQUFpQixHQUFqQixVQUFrQixVQUFpQixFQUFFLElBQVcsRUFBRSxLQUFhO29CQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsYUFBYSxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDO3lCQUNuRixHQUFHLENBQUMsVUFBQyxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO3lCQUNqQyxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUcsT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUNPLGlDQUFXLEdBQW5CLFVBQW9CLEtBQVU7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQXJETDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFzRGIsa0JBQUM7WUFBRCxDQXJEQSxBQXFEQyxJQUFBO1lBckRELHFDQXFEQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9yb2xlL3JvbGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiO1xyXG5pbXBvcnQgeyBJUm9sZSB9IGZyb20gXCIuL3JvbGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUm9sZVNlcnZpY2UgeyBcclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZVVybDpzdHJpbmcgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9yb2xlL2lkJztcclxuICAgIHByaXZhdGUgcG9zdFVybDpzdHJpbmcgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9yb2xlLyc7XHJcbiAgICBwcml2YXRlIHB1dFVybDpzdHJpbmcgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9yb2xlLyc7XHJcbiAgICBwcml2YXRlIGdldFVybDpzdHJpbmcgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9yb2xlP3BhZ2VOdW1iZXI9JztcclxuICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgLy9DaGVja2VkXHJcbiAgICBnZXRBbGxSb2xlIChwYWdlTnVtYmVyOm51bWJlcik6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnR2V0IGFsbCByb2xlJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5nZXRVcmwgKyBwYWdlTnVtYmVyKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcbiAgICAvL0NoZWNrZWRcclxuICAgIGFkZFJvbGUocm9sZTpJUm9sZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBZGQgbmV3IHJvbGUnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5wb3N0VXJsLCBKU09OLnN0cmluZ2lmeShyb2xlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+Y29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gICAgfVxyXG4gICAgLy9DaGVja2VkXHJcbiAgICBlZGl0Um9sZShyb2xlOklSb2xlKSAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFZGl0IHJvbGUnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLnB1dFVybCwgSlNPTi5zdHJpbmdpZnkocm9sZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0NoZWNrZWRcclxuICAgIGRlbGV0ZVJvbGUocm9sZTogSVJvbGUpe1xyXG4gICAgICAgIGxldCB1cmwgPSBgICR7dGhpcy5kZWxldGVVcmx9LyR7cm9sZS5yb2xlSWR9YDtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIHJvbGUgYnkgaWQ6ICcgKyByb2xlLnJvbGVJZCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4ocmVzID0+IHJvbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5jb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsUm9sZXNTb3J0ZWQocGFnZU51bWJlcjpudW1iZXIsIG5hbWU6c3RyaW5nLCBvcmRlcjpib29sZWFuKTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZ2V0VXJsICsgcGFnZU51bWJlciArICcmJnNvcnRlZEJ5PScgKyBuYW1lICsgJyYmYXNjPScgKyBvcmRlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTpQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIYW5kbGVFcnJvcicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=
