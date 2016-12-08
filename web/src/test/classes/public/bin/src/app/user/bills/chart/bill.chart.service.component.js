System.register(["@angular/core", "@angular/http", "rxjs/Observable", "rxjs/add/operator/map", "../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var BillChartService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            BillChartService = (function () {
                function BillChartService(_http) {
                    this._http = _http;
                    this.billChartURL = ApiService.serverUrl + '/restful/chart';
                }
                BillChartService.prototype.getPercentageChartData = function () {
                    return this._http.get(this.billChartURL + '/percentage')
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                BillChartService.prototype.getBarChartData = function (year) {
                    return this._http.get(this.billChartURL + '/' + year + '/bar')
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                BillChartService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BillChartService);
                return BillChartService;
            }());
            exports_1("BillChartService", BillChartService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL2JpbGxzL2NoYXJ0L2JpbGwuY2hhcnQuc2VydmljZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBSUksMEJBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFGdkIsaUJBQVksR0FBVyxVQUFVLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO2dCQUd2RSxDQUFDO2dCQUVELGlEQUFzQixHQUF0QjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7eUJBQ25ELEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7eUJBQ2pDLEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBRyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBRUQsMENBQWUsR0FBZixVQUFnQixJQUFZO29CQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRSxHQUFHLEdBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQzt5QkFDdkQsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFHLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFHLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFsQkw7b0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBcUJiLHVCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCwrQ0FvQkMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYmlsbHMvY2hhcnQvYmlsbC5jaGFydC5zZXJ2aWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBBcGlTZXJ2aWNlID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZVwiKTtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCaWxsQ2hhcnRTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGJpbGxDaGFydFVSTDogc3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvY2hhcnQnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXJjZW50YWdlQ2hhcnREYXRhKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuYmlsbENoYXJ0VVJMICsgJy9wZXJjZW50YWdlJylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJhckNoYXJ0RGF0YSh5ZWFyOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLmJpbGxDaGFydFVSTCArJy8nKyB5ZWFyICsgJy9iYXInKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9Pk9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19
