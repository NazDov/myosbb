System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/toPromise", "../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var OptionService;
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
            }],
        execute: function() {
            OptionService = (function () {
                function OptionService(http) {
                    this.http = http;
                    this.url = ApiService.serverUrl + "/restful/option";
                }
                OptionService.prototype.toScoreOption = function (optionId, userId) {
                    var url = this.url + "/" + optionId + "/" + userId;
                    return this.http.get(url).toPromise();
                };
                OptionService.prototype.handleError = function (error) {
                    console.log('HandleError', error);
                    return Promise.reject(error.message || error);
                };
                OptionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], OptionService);
                return OptionService;
            }());
            exports_1("OptionService", OptionService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3ZvdGluZy9vcHRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBSUksdUJBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFGdEIsUUFBRyxHQUFVLFVBQVUsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7Z0JBRTVCLENBQUM7Z0JBRW5DLHFDQUFhLEdBQWIsVUFBYyxRQUFnQixFQUFFLE1BQWM7b0JBQ3pDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUUsR0FBRyxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO29CQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNDLENBQUM7Z0JBRU8sbUNBQVcsR0FBbkIsVUFBb0IsS0FBVTtvQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBZkw7b0JBQUMsaUJBQVUsRUFBRTs7aUNBQUE7Z0JBaUJiLG9CQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCx5Q0FnQkMsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdm90aW5nL29wdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIjtcclxuXHJcbmltcG9ydCB7T3B0aW9ufSBmcm9tIFwiLi9vcHRpb25cIjtcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgT3B0aW9uU2VydmljZSB7IFxyXG5cclxuICAgIHByaXZhdGUgdXJsOnN0cmluZyA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgXCIvcmVzdGZ1bC9vcHRpb25cIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHRvU2NvcmVPcHRpb24ob3B0aW9uSWQ6IG51bWJlciwgdXNlcklkOiBudW1iZXIpIHtcclxuICAgICAgICAgbGV0IHVybCA9IHRoaXMudXJsICtcIi9cIiArIG9wdGlvbklkICsgXCIvXCIgKyB1c2VySWQ7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTpQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIYW5kbGVFcnJvcicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcbiAgIFxyXG59Il19
