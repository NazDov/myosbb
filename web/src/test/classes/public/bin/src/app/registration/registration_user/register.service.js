System.register(["@angular/core", "@angular/http", 'rxjs/Observable', "../../../shared/services/api.service", 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var RegisterService;
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
            function (ApiService_1) {
                ApiService = ApiService_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            RegisterService = (function () {
                function RegisterService(http) {
                    this.http = http;
                    this._pathUrlForOsbb = ApiService.serverUrl + '/registration/osbb';
                    this._pathUrlForUser = ApiService.serverUrl + '/registration/';
                    this.osbbURL = ApiService.serverUrl + '/restful/osbb';
                    this.houseAllURL = ApiService.serverUrl + '/restful/house/all';
                    this.houseURL = ApiService.serverUrl + '/restful/house';
                    this.apartmentURL = ApiService.serverUrl + '/restful/apartment/';
                    this.addressURL = ApiService.serverUrl + '/restful/address/';
                }
                RegisterService.prototype.registerOsbb = function (osbb) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._pathUrlForOsbb, osbb, options)
                        .map(function (res) { return res.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                RegisterService.prototype.registerUser = function (user) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._pathUrlForUser, user, options)
                        .map(function (res) { return res.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                RegisterService.prototype.getAllOsbb = function () {
                    return this.http.get(this.osbbURL)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                RegisterService.prototype.getAllCitiesByRegionId = function (id) {
                    return this.http.get(this.addressURL + '/city/' + id)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                RegisterService.prototype.getAllStreetssByCityId = function (id) {
                    return this.http.get(this.addressURL + '/street/' + id)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                RegisterService.prototype.getAllRegion = function () {
                    return this.http.get(this.addressURL + '/region')
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                RegisterService.prototype.getAllHouses = function () {
                    return this.http.get(this.houseAllURL)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                RegisterService.prototype.getAllHousesByOsbb = function (id) {
                    return this.http.get(this.houseAllURL + '/' + id)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                RegisterService.prototype.getAllApartments = function () {
                    return this.http.get(this.apartmentURL)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                RegisterService.prototype.getAllApartmentsByHouse = function (houseId) {
                    return this.http.get(this.houseURL + '/' + houseId + '/apartments')
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                RegisterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RegisterService);
                return RegisterService;
            }());
            exports_1("RegisterService", RegisterService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uX3VzZXIvcmVnaXN0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBVUkseUJBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFSdkIsb0JBQWUsR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO29CQUM5RCxvQkFBZSxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7b0JBQ3pELFlBQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztvQkFDbEQsZ0JBQVcsR0FBVyxVQUFVLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO29CQUNsRSxhQUFRLEdBQVcsVUFBVSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztvQkFDM0QsaUJBQVksR0FBVyxVQUFVLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO29CQUNwRSxlQUFVLEdBQVcsVUFBVSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztnQkFJdkUsQ0FBQztnQkFFRCxzQ0FBWSxHQUFaLFVBQWEsSUFBc0I7b0JBQy9CLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7b0JBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQ3JELEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ2xDLEtBQUssQ0FBQyxVQUFDLEtB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Q0FBdUIsQ0FBQyxDQUFBO2dCQUNsRCxDQUFDO2dCQS9FTDtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkFnRmIsc0JBQUM7WUFBRCxDQS9FQSxBQStFQyxJQUFBO1lBL0VELDZDQStFQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbl91c2VyL3JlZ2lzdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgQXBpU2VydmljZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2VcIik7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25Db21wb25lbnQgPSByZXF1aXJlKFwiLi9yZWdpc3RyYXRpb24uY29tcG9uZW50XCIpO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQge1VzZXJSZWdpc3RyYXRpb259IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXJfcmVnaXN0cmF0aW9uXCI7XHJcbmltcG9ydCB7T3NiYlJlZ2lzdHJhdGlvbn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvb3NiYl9yZWdpc3RyYXRpb25cIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgX3BhdGhVcmxGb3JPc2JiID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3JlZ2lzdHJhdGlvbi9vc2JiJztcclxuICAgIHB1YmxpYyBfcGF0aFVybEZvclVzZXIgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVnaXN0cmF0aW9uLyc7XHJcbiAgICBwcml2YXRlIG9zYmJVUkwgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9vc2JiJztcclxuICAgIHB1YmxpYyBob3VzZUFsbFVSTDogc3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvaG91c2UvYWxsJztcclxuICAgIHB1YmxpYyBob3VzZVVSTDogc3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvaG91c2UnO1xyXG4gICAgcHVibGljIGFwYXJ0bWVudFVSTDogc3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvYXBhcnRtZW50Lyc7XHJcbiAgICBwdWJsaWMgYWRkcmVzc1VSTDogc3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvYWRkcmVzcy8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9zYmIob3NiYjogT3NiYlJlZ2lzdHJhdGlvbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBoZWFkZXJzfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuX3BhdGhVcmxGb3JPc2JiLCBvc2JiLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyVXNlcih1c2VyOiBVc2VyUmVnaXN0cmF0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe2hlYWRlcnM6IGhlYWRlcnN9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fcGF0aFVybEZvclVzZXIsIHVzZXIsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsT3NiYigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMub3NiYlVSTClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRBbGxDaXRpZXNCeVJlZ2lvbklkKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYWRkcmVzc1VSTCsnL2NpdHkvJytpZClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAgZ2V0QWxsU3RyZWV0c3NCeUNpdHlJZChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFkZHJlc3NVUkwrJy9zdHJlZXQvJytpZClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG5cclxuICAgIH1cclxuICAgXHJcbiAgICBnZXRBbGxSZWdpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFkZHJlc3NVUkwrJy9yZWdpb24nKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsSG91c2VzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ob3VzZUFsbFVSTClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbEhvdXNlc0J5T3NiYihpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmhvdXNlQWxsVVJMICsgJy8nICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKT0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9Pk9ic2VydmFibGUudGhyb3coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbEFwYXJ0bWVudHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwYXJ0bWVudFVSTClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbEFwYXJ0bWVudHNCeUhvdXNlKGhvdXNlSWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ob3VzZVVSTCArICcvJyArIGhvdXNlSWQgKyAnL2FwYXJ0bWVudHMnKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICB9XHJcbn1cclxuIl19
