System.register(['@angular/http', "@angular/core", 'rxjs/add/operator/map', "../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var http_1, core_1, ApiService;
    var apartmentProfileService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            apartmentProfileService = (function () {
                function apartmentProfileService(http) {
                    this.http = http;
                }
                apartmentProfileService.prototype.getCurrentApartment = function (id) {
                    var url = ApiService.serverUrl + '/restful/apartment/' + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); });
                };
                apartmentProfileService.prototype.getUsersInApartment = function (id) {
                    var url = ApiService.serverUrl + '/restful/apartment/users' + id;
                    return this.http.get(url)
                        .map(function (res) { return res.json(); });
                };
                apartmentProfileService.prototype.getOwnerInApartment = function (id) {
                    var url = ApiService.serverUrl + '/restful/apartment/owner/' + id.toString();
                    return this.http.get(url)
                        .map(function (res) { return res.json(); });
                };
                apartmentProfileService.prototype.getAllBillsByApartment = function (apartmentId) {
                    return this.http.get(ApiService.serverUrl + '/restful/apartment/' + apartmentId + '/bills')
                        .map(function (res) { return res.json(); });
                };
                apartmentProfileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], apartmentProfileService);
                return apartmentProfileService;
            }());
            exports_1("apartmentProfileService", apartmentProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2NvbXBvbmVudHMvQXBhcnRtZW50UHJvZmlsZS9hcGFydG1lbnQucHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUVJLGlDQUFxQixJQUFTO29CQUFULFNBQUksR0FBSixJQUFJLENBQUs7Z0JBQUUsQ0FBQztnQkFFakMscURBQW1CLEdBQW5CLFVBQW9CLEVBQVM7b0JBQ3pCLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLEdBQUMsRUFBRSxDQUFDO29CQUMxRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO3lCQUNwQixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUUsT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBRXhDLENBQUM7Z0JBRUQscURBQW1CLEdBQW5CLFVBQW9CLEVBQVM7b0JBQ3pCLElBQUksR0FBRyxHQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUMsMEJBQTBCLEdBQUMsRUFBRSxDQUFDO29CQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO3lCQUNwQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBRTlCLENBQUM7Z0JBRUQscURBQW1CLEdBQW5CLFVBQW9CLEVBQVM7b0JBQ3pCLElBQUksR0FBRyxHQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUMsMkJBQTJCLEdBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN2RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO3lCQUNwQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBRTlCLENBQUM7Z0JBQ0Qsd0RBQXNCLEdBQXRCLFVBQXVCLFdBQWtCO29CQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBQyxxQkFBcUIsR0FBQyxXQUFXLEdBQUMsUUFBUSxDQUFDO3lCQUNoRixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBNUJMO29CQUFDLGlCQUFVLEVBQUc7OzJDQUFBO2dCQStCZCw4QkFBQztZQUFELENBOUJBLEFBOEJDLElBQUE7WUE5QkQsNkRBOEJDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvQXBhcnRtZW50UHJvZmlsZS9hcGFydG1lbnQucHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzLFJlcXVlc3RPcHRpb25zfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5cclxuQEluamVjdGFibGUgKClcclxuZXhwb3J0IGNsYXNzIGFwYXJ0bWVudFByb2ZpbGVTZXJ2aWNle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6SHR0cCl7fVxyXG5cclxuICAgIGdldEN1cnJlbnRBcGFydG1lbnQoaWQ6bnVtYmVyKTpPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgbGV0IHVybCA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL2FwYXJ0bWVudC8nK2lkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZT0+cmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFVzZXJzSW5BcGFydG1lbnQoaWQ6bnVtYmVyKTpPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgbGV0IHVybD1BcGlTZXJ2aWNlLnNlcnZlclVybCsnL3Jlc3RmdWwvYXBhcnRtZW50L3VzZXJzJytpZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC5tYXAocmVzPT5yZXMuanNvbigpKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRPd25lckluQXBhcnRtZW50KGlkOm51bWJlcik6T2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgIGxldCB1cmw9QXBpU2VydmljZS5zZXJ2ZXJVcmwrJy9yZXN0ZnVsL2FwYXJ0bWVudC9vd25lci8nK2lkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxyXG4gICAgICAgICAgICAubWFwKHJlcz0+cmVzLmpzb24oKSk7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0QWxsQmlsbHNCeUFwYXJ0bWVudChhcGFydG1lbnRJZDpudW1iZXIpOk9ic2VydmFibGU8YW55PntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChBcGlTZXJ2aWNlLnNlcnZlclVybCsnL3Jlc3RmdWwvYXBhcnRtZW50LycrYXBhcnRtZW50SWQrJy9iaWxscycpXHJcbiAgICAgICAgICAgIC5tYXAocmVzPT5yZXMuanNvbigpKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufVxyXG4iXX0=
