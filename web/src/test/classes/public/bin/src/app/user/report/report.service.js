System.register(["@angular/core", "@angular/http", "rxjs/Observable", "rxjs/add/operator/map", "rxjs/add/operator/toPromise", "../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var ReportService;
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
            function (_2) {},
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            ReportService = (function () {
                function ReportService(_http) {
                    this._http = _http;
                    this.getReportsURL = ApiService.serverUrl + '/restful/report';
                    this.delReportUrl = ApiService.serverUrl + '/restful/report/';
                    this.updateReportUrl = ApiService.serverUrl + '/restful/report/';
                    this.getReportByParamURL = ApiService.serverUrl + '/restful/report/between?';
                    this.getReportBySearchParamURL = ApiService.serverUrl + '/restful/report/find?searchParam=';
                    this.headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
                    this.getReportsByUserUrl = ApiService.serverUrl + '/restful/report/user/';
                    this.headers.append('Content-Type', 'application/json');
                }
                //for current logged-in user
                ReportService.prototype.getAllUserReports = function (userId, pageParams) {
                    return this._http.post(this.getReportsByUserUrl + userId + '/all', JSON.stringify(pageParams))
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                ReportService.prototype.getAllUserReportsSorted = function (userId, pageNumber, name, order) {
                    return this._http.get(this.getReportsByUserUrl + userId + '/all?pageNumber=' + pageNumber + '&&sortedBy=' + name + '&&order=' + order)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                ReportService.prototype.searchUserReportsByInputParam = function (userId, value) {
                    return this._http.get(this.getReportsByUserUrl + userId + "/find?searchParam=" + value)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                ReportService.prototype.searchUserReportsByDates = function (userId, dateFrom, dateTo) {
                    return this._http.get(this.getReportsByUserUrl + userId + "/between?"
                        + 'dateFrom=' + dateFrom + '&&'
                        + 'dateTo=' + dateTo)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                ReportService.prototype.getAllReports = function (pageParms) {
                    return this._http.post(this.getReportsURL + 'all', JSON.stringify(pageParms))
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                ReportService.prototype.searchByDates = function (dateFrom, dateTo) {
                    return this._http.get(this.getReportByParamURL
                        + 'dateFrom=' + dateFrom + '&&'
                        + 'dateTo=' + dateTo).map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                ReportService.prototype.searchByInputParam = function (value) {
                    return this._http.get(this.getReportBySearchParamURL + value)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                ReportService.prototype.deleteReportById = function (reportId) {
                    var url = this.delReportUrl + reportId;
                    console.log('delete report by id: ' + reportId);
                    return this._http.delete(url)
                        .catch(function (error) { return console.error(error); });
                };
                ReportService.prototype.editAndSave = function (report) {
                    if (report.reportId) {
                        console.log('updating report with id: ' + report.reportId);
                        return this.put(report);
                    }
                };
                ReportService.prototype.put = function (report) {
                    return this._http.put(this.updateReportUrl, JSON.stringify(report))
                        .catch(function (error) { return console.error(error); });
                };
                ReportService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ReportService);
                return ReportService;
            }());
            exports_1("ReportService", ReportService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3JlcG9ydC9yZXBvcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBV0ksdUJBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFUdkIsa0JBQWEsR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO29CQUN6RCxpQkFBWSxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7b0JBQ3pELG9CQUFlLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztvQkFDNUQsd0JBQW1CLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRywwQkFBMEIsQ0FBQztvQkFDeEUsOEJBQXlCLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxtQ0FBbUMsQ0FBQztvQkFDdkYsWUFBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQztvQkFFcEYsd0JBQW1CLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztvQkFHekUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBRUQsNEJBQTRCO2dCQUM1Qix5Q0FBaUIsR0FBakIsVUFBa0IsTUFBYyxFQUFFLFVBQXNCO29CQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzt5QkFDekYsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFD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QUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUM5RCxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUcsT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBaEZMO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQWlGYixvQkFBQztZQUFELENBaEZBLEFBZ0ZDLElBQUE7WUFoRkQseUNBZ0ZDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3JlcG9ydC9yZXBvcnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IFJlcG9ydCB9IGZyb20gXCIuL3JlcG9ydC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCI7XHJcbmltcG9ydCB7IFBhZ2VQYXJhbXMgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVscy9zZWFyY2gubW9kZWxcIjtcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0U2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZXBvcnRzVVJMID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvcmVwb3J0JztcclxuICAgIHByaXZhdGUgZGVsUmVwb3J0VXJsID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvcmVwb3J0Lyc7XHJcbiAgICBwcml2YXRlIHVwZGF0ZVJlcG9ydFVybCA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL3JlcG9ydC8nO1xyXG4gICAgcHJpdmF0ZSBnZXRSZXBvcnRCeVBhcmFtVVJMID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvcmVwb3J0L2JldHdlZW4/JztcclxuICAgIHByaXZhdGUgZ2V0UmVwb3J0QnlTZWFyY2hQYXJhbVVSTCA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL3JlcG9ydC9maW5kP3NlYXJjaFBhcmFtPSc7XHJcbiAgICBwcml2YXRlIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX0pO1xyXG5cclxuICAgIHByaXZhdGUgZ2V0UmVwb3J0c0J5VXNlclVybCA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL3JlcG9ydC91c2VyLyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9mb3IgY3VycmVudCBsb2dnZWQtaW4gdXNlclxyXG4gICAgZ2V0QWxsVXNlclJlcG9ydHModXNlcklkOiBudW1iZXIsIHBhZ2VQYXJhbXM6IFBhZ2VQYXJhbXMpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRSZXBvcnRzQnlVc2VyVXJsICsgdXNlcklkICsgJy9hbGwnLCBKU09OLnN0cmluZ2lmeShwYWdlUGFyYW1zKSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFVzZXJSZXBvcnRzU29ydGVkKHVzZXJJZDogbnVtYmVyLCBwYWdlTnVtYmVyOiBudW1iZXIsIG5hbWU6IHN0cmluZywgb3JkZXI6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLmdldFJlcG9ydHNCeVVzZXJVcmwgKyB1c2VySWQgKyAnL2FsbD9wYWdlTnVtYmVyPScgKyBwYWdlTnVtYmVyICsgJyYmc29ydGVkQnk9JyArIG5hbWUgKyAnJiZvcmRlcj0nICsgb3JkZXIpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKT0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9Pk9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hVc2VyUmVwb3J0c0J5SW5wdXRQYXJhbSh1c2VySWQ6IG51bWJlciwgdmFsdWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuZ2V0UmVwb3J0c0J5VXNlclVybCArIHVzZXJJZCArIFwiL2ZpbmQ/c2VhcmNoUGFyYW09XCIgKyB2YWx1ZSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoVXNlclJlcG9ydHNCeURhdGVzKHVzZXJJZDogbnVtYmVyLCBkYXRlRnJvbTogc3RyaW5nLCBkYXRlVG86IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuZ2V0UmVwb3J0c0J5VXNlclVybCArIHVzZXJJZCArIFwiL2JldHdlZW4/XCJcclxuICAgICAgICAgICAgKyAnZGF0ZUZyb209JyArIGRhdGVGcm9tICsgJyYmJ1xyXG4gICAgICAgICAgICArICdkYXRlVG89JyArIGRhdGVUbylcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsUmVwb3J0cyhwYWdlUGFybXM6IFBhZ2VQYXJhbXMpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRSZXBvcnRzVVJMICsgJ2FsbCcsIEpTT04uc3RyaW5naWZ5KHBhZ2VQYXJtcykpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKT0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9Pk9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hCeURhdGVzKGRhdGVGcm9tOiBzdHJpbmcsIGRhdGVUbzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5nZXRSZXBvcnRCeVBhcmFtVVJMXHJcbiAgICAgICAgICAgICsgJ2RhdGVGcm9tPScgKyBkYXRlRnJvbSArICcmJidcclxuICAgICAgICAgICAgKyAnZGF0ZVRvPScgKyBkYXRlVG8pLm1hcCgocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoQnlJbnB1dFBhcmFtKHZhbHVlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLmdldFJlcG9ydEJ5U2VhcmNoUGFyYW1VUkwgKyB2YWx1ZSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUmVwb3J0QnlJZChyZXBvcnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5kZWxSZXBvcnRVcmwgKyByZXBvcnRJZDtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIHJlcG9ydCBieSBpZDogJyArIHJlcG9ydElkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodXJsKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+Y29uc29sZS5lcnJvcihlcnJvcikpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBlZGl0QW5kU2F2ZShyZXBvcnQ6IFJlcG9ydCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgaWYgKHJlcG9ydC5yZXBvcnRJZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRpbmcgcmVwb3J0IHdpdGggaWQ6ICcgKyByZXBvcnQucmVwb3J0SWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXQocmVwb3J0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHV0KHJlcG9ydDogUmVwb3J0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQodGhpcy51cGRhdGVSZXBvcnRVcmwsIEpTT04uc3RyaW5naWZ5KHJlcG9ydCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5jb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAgICB9XHJcbn0iXX0=
