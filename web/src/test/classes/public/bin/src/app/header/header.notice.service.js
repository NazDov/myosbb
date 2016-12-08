System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/toPromise", "../../shared/services/api.service", "rxjs/Observable"], function(exports_1, context_1) {
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
    var core_1, http_1, ApiService, Observable_1;
    var NoticeService;
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
            function (ApiService_1) {
                ApiService = ApiService_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            NoticeService = (function () {
                function NoticeService(http) {
                    this.http = http;
                    this.getUrl = ApiService.serverUrl + '/restful/notice';
                    this.deleteUrl = ApiService.serverUrl + '/restful/notice';
                }
                NoticeService.prototype.getNotice = function () {
                    return this.http.get(this.getUrl)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                NoticeService.prototype.deleteNotice = function (notice) {
                    var url = this.deleteUrl + "/" + notice.noticeId;
                    return this.http.delete(url)
                        .toPromise()
                        .then(function (res) { return notice; })
                        .catch(this.handleError);
                };
                NoticeService.prototype.handleError = function (error) {
                    console.log('HandleError', error);
                    return Promise.reject(error.message || error);
                };
                NoticeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], NoticeService);
                return NoticeService;
            }());
            exports_1("NoticeService", NoticeService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZWFkZXIvaGVhZGVyLm5vdGljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFLSSx1QkFBb0IsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO29CQUhyQixXQUFNLEdBQVUsVUFBVSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztvQkFDekQsY0FBUyxHQUFVLFVBQVUsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7Z0JBR3BFLENBQUM7Z0JBRUQsaUNBQVMsR0FBVDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt5QkFDNUIsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDakMsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFHLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFFRCxvQ0FBWSxHQUFaLFVBQWEsTUFBYTtvQkFDdEIsSUFBSSxHQUFHLEdBQU0sSUFBSSxDQUFDLFNBQVMsU0FBSSxNQUFNLENBQUMsUUFBVSxDQUFDO29CQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO3lCQUN2QixTQUFTLEVBQUU7eUJBQ1gsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQzt5QkFDbkIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFTyxtQ0FBVyxHQUFuQixVQUFvQixLQUFTO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkExQkw7b0JBQUMsaUJBQVUsRUFBRTs7aUNBQUE7Z0JBNEJiLG9CQUFDO1lBQUQsQ0EzQkEsQUEyQkMsSUFBQTtZQTNCRCx5Q0EyQkMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIubm90aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIjtcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi8uLi91c2VyL3VzZXInO1xyXG5pbXBvcnQgeyBOb3RpY2UgfSBmcm9tICcuL25vdGljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5vdGljZVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgZ2V0VXJsOnN0cmluZyA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL25vdGljZSc7XHJcbiAgICBwcml2YXRlIGRlbGV0ZVVybDpzdHJpbmcgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9ub3RpY2UnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm90aWNlKCk6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdldFVybClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZU5vdGljZShub3RpY2U6Tm90aWNlKTpQcm9taXNlPE5vdGljZT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHt0aGlzLmRlbGV0ZVVybH0vJHtub3RpY2Uubm90aWNlSWR9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gbm90aWNlKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjphbnkpOlByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0hhbmRsZUVycm9yJywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
