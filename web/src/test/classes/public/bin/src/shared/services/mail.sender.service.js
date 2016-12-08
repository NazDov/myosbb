System.register(["@angular/core", "../services/api.service", "@angular/http", 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, ApiService, http_1;
    var MailService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ApiService_1) {
                ApiService = ApiService_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            MailService = (function () {
                function MailService(_http) {
                    this._http = _http;
                    this.url = ApiService.serverUrl + '/restful/mail';
                }
                MailService.prototype.sendMail = function (mail) {
                    console.log("sending http POST to " + this.url);
                    console.log("json obj: ", JSON.stringify(mail));
                    return this._http.post(this.url, JSON.stringify(mail))
                        .toPromise()
                        .then(function () { return mail; })
                        .catch(function (err) { return console.error(err); });
                };
                MailService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MailService);
                return MailService;
            }());
            exports_1("MailService", MailService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9tYWlsLnNlbmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFHSSxxQkFBb0IsS0FBVTtvQkFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO29CQUZ0QixRQUFHLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7Z0JBR3JELENBQUM7Z0JBRUQsOEJBQVEsR0FBUixVQUFTLElBQVc7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ2pELFNBQVMsRUFBRTt5QkFDWCxJQUFJLENBQUMsY0FBSSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7eUJBQ2QsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFHLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQWRMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQWViLGtCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCxxQ0FjQyxDQUFBIiwiZmlsZSI6InNyYy9zaGFyZWQvc2VydmljZXMvbWFpbC5zZW5kZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFuYXN0YXNpaWEgRmVkb3JhayAgOC8xMy8xNi5cclxuICovXHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vc2VydmljZXMvYXBpLnNlcnZpY2VcIik7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5pbXBvcnQge01haWx9IGZyb20gXCIuLi9tb2RlbHMvbWFpbC5pbnRlcmZhY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1haWxTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdXJsID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvbWFpbCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKXtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kTWFpbChtYWlsIDogTWFpbCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGh0dHAgUE9TVCB0byBcIiArIHRoaXMudXJsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImpzb24gb2JqOiBcIiwgSlNPTi5zdHJpbmdpZnkobWFpbCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy51cmwsIEpTT04uc3RyaW5naWZ5KG1haWwpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCk9Pm1haWwpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+Y29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgIH1cclxufSJdfQ==
