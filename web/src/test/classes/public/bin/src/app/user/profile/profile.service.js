System.register(["@angular/core", "@angular/http", "../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var ProfileService;
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
            ProfileService = (function () {
                function ProfileService(http) {
                    this.http = http;
                    this.url = ApiService.serverUrl + '/restful/user/';
                }
                ProfileService.prototype.updateUser = function (user) {
                    this.updateUrl = this.url + user.userId;
                    console.log('Updating user with id: ' + user.userId);
                    console.log("sending http PUT to " + this.updateUrl);
                    console.log("json obj: " + JSON.stringify(user));
                    return this.http.put(this.updateUrl, user);
                };
                ProfileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProfileService);
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3Byb2ZpbGUvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBSUksd0JBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFGckIsUUFBRyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7Z0JBR3RELENBQUM7Z0JBQ0QsbUNBQVUsR0FBVixVQUFXLElBQVM7b0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBYkw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBZWIscUJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELDJDQWNDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2ZpbGUvcHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9Vc2VyJztcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZXtcclxuXHJcbiAgICBwcml2YXRlIHVybCA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL3VzZXIvJztcclxuICAgIHByaXZhdGUgdXBkYXRlVXJsOnN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKXtcclxuICAgIH1cclxuICAgIHVwZGF0ZVVzZXIodXNlcjpVc2VyKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVybD10aGlzLnVybCArIHVzZXIudXNlcklkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGluZyB1c2VyIHdpdGggaWQ6ICcgKyB1c2VyLnVzZXJJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGh0dHAgUFVUIHRvIFwiICt0aGlzLnVwZGF0ZVVybCk7ICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwianNvbiBvYmo6IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMudXBkYXRlVXJsLHVzZXIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
