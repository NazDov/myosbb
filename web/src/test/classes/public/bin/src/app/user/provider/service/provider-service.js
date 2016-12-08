System.register(["@angular/core", "@angular/http", "rxjs/Rx", 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', "../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1, ApiService;
    var ProviderService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            ProviderService = (function () {
                function ProviderService(_http) {
                    this._http = _http;
                    this.url = ApiService.serverUrl + '/restful/provider/';
                    this.urlWithParams = ApiService.serverUrl + '/restful/provider?pageNum=';
                }
                ProviderService.prototype.getProviders = function (pageNumber) {
                    console.log("get providers inside service, pagenum" + pageNumber);
                    console.log("sending http GET to " + this.urlWithParams + pageNumber);
                    return this._http.get(this.urlWithParams + pageNumber)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderService.prototype.getAllProviders = function () {
                    return this._http.get(this.url)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderService.prototype.getProvidersByState = function (pageNumber, onlyActive) {
                    console.log("get only active providers inside service, pagenum" + pageNumber);
                    console.log("sending http GET to " + this.urlWithParams + pageNumber + '&&actv=' + onlyActive);
                    return this._http.get(this.urlWithParams + pageNumber + '&&actv=' + onlyActive)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderService.prototype.getProviderById = function (id) {
                    console.log("ok");
                    return this._http.get(this.url + id)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderService.prototype.getSortedProviders = function (pageNumber, name, order) {
                    return this._http.get(this.urlWithParams + pageNumber + '&&sortedBy=' + name + '&&asc=' + order)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderService.prototype.getSortedActiveProviders = function (pageNumber, name, order, onlyActive) {
                    return this._http.get(this.urlWithParams + pageNumber + '&&sortedBy=' +
                        name + '&&asc=' + order + '&&actv=' + onlyActive)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderService.prototype.deleteProviderById = function (providerId) {
                    console.log('delete provider by id: ' + providerId);
                    console.log("sending http DELETE to " + this.url + providerId);
                    return this._http.delete(this.url + providerId)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderService.prototype.addProvider = function (provider) {
                    console.log("sending http POST to " + this.url);
                    console.log("saving ", provider);
                    return this._http.post(this.url, JSON.stringify(provider))
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderService.prototype.editProvider = function (provider) {
                    console.log('updating provider with id: ' + provider.providerId);
                    console.log("sending http PUT to " + this.url + provider.providerId);
                    console.log("json obj: " + JSON.stringify(provider));
                    return this._http.put(this.url + provider.providerId, JSON.stringify(provider))
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderService.prototype.findProviderByNameOrDescription = function (search) {
                    console.log("searching providers");
                    console.log("param is" + search);
                    return this._http.get(this.url + "find?name=" + search)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProviderService);
                return ProviderService;
            }());
            exports_1("ProviderService", ProviderService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3Byb3ZpZGVyL3NlcnZpY2UvcHJvdmlkZXItc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBSUkseUJBQW9CLEtBQVU7b0JBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztvQkFIdEIsUUFBRyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7b0JBQ2xELGtCQUFhLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyw0QkFBNEIsQ0FBQztnQkFHNUUsQ0FBQztnQkFFRCxzQ0FBWSxHQUFaLFVBQWEsVUFBaUI7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEdBQUcsVUFBVSxDQUFDLENBQUM7b0JBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQztvQkFDckUsTUFBTSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO3lCQUNsRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUcsT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0QseUNBQWUsR0FBZjtvQkFDSSxNQUFNLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt5QkFDM0IsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdEIsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFHLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUNELDZDQUFtQixHQUFuQixVQUFvQixVQUFpQixFQUFFLFVBQW9CO29CQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxHQUFHLFVBQVUsQ0FBQyxDQUFDO29CQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxHQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQztvQkFDL0YsTUFBTSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxHQUFHLFNBQVMsR0FBRyxVQUFVLENBQUM7eUJBQzNFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBRyxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFFRCx5Q0FBZSxHQUFmLFVBQWdCLEVBQVU7b0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzt5QkFDL0IsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdEIsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFHLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUVELDRDQUFrQixHQUFsQixVQUFtQixVQUFpQixFQUFFLElBQVcsRUFBRSxLQUFhO29CQUM1RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLEdBQUcsYUFBYSxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDO3lCQUMzRixHQUFHLENBQUMsVUFBQyxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN2QixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUcsT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0Qsa0RBQXdCLEdBQXhCLFVBQXlCLFVBQWlCLEVBQUUsSUFBVyxFQUFFLEtBQWEsRUFBRSxVQUFrQjtvQkFDdEYsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxHQUFHLGFBQWE7d0JBQ2pFLElBQUksR0FBRyxRQUFRLEdBQUcsS0FBSyxHQUFHLFNBQVMsR0FBRyxVQUFVLENBQUM7eUJBQ2hELEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3ZCLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBRyxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCw0Q0FBa0IsR0FBbEIsVUFBbUIsVUFBaUI7b0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUcsVUFBVSxDQUFDLENBQUM7b0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQztvQkFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO3lCQUMxQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUcsT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBR0QscUNBQVcsR0FBWCxVQUFZLFFBQWlCO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ3JELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBRyxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCxzQ0FBWSxHQUFaLFVBQWEsUUFBaUI7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDMUUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdEIsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFHLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUVELHlEQUErQixHQUEvQixVQUFnQyxNQUFjO29CQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDO29CQUNqQyxNQUFNLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLEdBQUMsTUFBTSxDQUFDO3lCQUNqRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUcsT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBN0VMO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQThFYixzQkFBQztZQUFELENBN0VBLEFBNkVDLElBQUE7WUE3RUQsNkNBNkVDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb3ZpZGVyL3NlcnZpY2UvcHJvdmlkZXItc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFuYXN0YXNpaWEgRmVkb3JhayAgOC8yLzE2LlxyXG4gKi9cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9wcm92aWRlci5pbnRlcmZhY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb3ZpZGVyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHVybCA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL3Byb3ZpZGVyLyc7XHJcbiAgICBwcml2YXRlIHVybFdpdGhQYXJhbXMgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9wcm92aWRlcj9wYWdlTnVtPSc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKXtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm92aWRlcnMocGFnZU51bWJlcjpudW1iZXIpIDogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IHByb3ZpZGVycyBpbnNpZGUgc2VydmljZSwgcGFnZW51bVwiICsgcGFnZU51bWJlcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGh0dHAgR0VUIHRvIFwiICt0aGlzLnVybFdpdGhQYXJhbXMgKyBwYWdlTnVtYmVyKTtcclxuICAgICAgICByZXR1cm4gIHRoaXMuX2h0dHAuZ2V0KHRoaXMudXJsV2l0aFBhcmFtcyArIHBhZ2VOdW1iZXIpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnIpKTtcclxuICAgIH1cclxuICAgIGdldEFsbFByb3ZpZGVycygpIDogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5faHR0cC5nZXQodGhpcy51cmwpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnIpKTtcclxuICAgIH1cclxuICAgIGdldFByb3ZpZGVyc0J5U3RhdGUocGFnZU51bWJlcjpudW1iZXIsIG9ubHlBY3RpdmUgOiBib29sZWFuKSA6IE9ic2VydmFibGU8YW55PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldCBvbmx5IGFjdGl2ZSBwcm92aWRlcnMgaW5zaWRlIHNlcnZpY2UsIHBhZ2VudW1cIiArIHBhZ2VOdW1iZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBodHRwIEdFVCB0byBcIiArdGhpcy51cmxXaXRoUGFyYW1zICsgcGFnZU51bWJlciAgKyAnJiZhY3R2PScgKyBvbmx5QWN0aXZlKTtcclxuICAgICAgICByZXR1cm4gIHRoaXMuX2h0dHAuZ2V0KHRoaXMudXJsV2l0aFBhcmFtcyArIHBhZ2VOdW1iZXIgKyAnJiZhY3R2PScgKyBvbmx5QWN0aXZlKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pk9ic2VydmFibGUudGhyb3coZXJyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvdmlkZXJCeUlkKGlkOiBudW1iZXIpIDogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLnVybCArIGlkKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pk9ic2VydmFibGUudGhyb3coZXJyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydGVkUHJvdmlkZXJzKHBhZ2VOdW1iZXI6bnVtYmVyLCBuYW1lOnN0cmluZywgb3JkZXI6Ym9vbGVhbik6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy51cmxXaXRoUGFyYW1zICsgcGFnZU51bWJlciArICcmJnNvcnRlZEJ5PScgKyBuYW1lICsgJyYmYXNjPScgKyBvcmRlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzKT0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnIpKTtcclxuICAgIH1cclxuICAgIGdldFNvcnRlZEFjdGl2ZVByb3ZpZGVycyhwYWdlTnVtYmVyOm51bWJlciwgbmFtZTpzdHJpbmcsIG9yZGVyOmJvb2xlYW4sIG9ubHlBY3RpdmU6Ym9vbGVhbik6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy51cmxXaXRoUGFyYW1zICsgcGFnZU51bWJlciArICcmJnNvcnRlZEJ5PScgK1xyXG4gICAgICAgICAgICBuYW1lICsgJyYmYXNjPScgKyBvcmRlciArICcmJmFjdHY9JyArIG9ubHlBY3RpdmUpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlcyk9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pk9ic2VydmFibGUudGhyb3coZXJyKSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVQcm92aWRlckJ5SWQocHJvdmlkZXJJZDpudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIHByb3ZpZGVyIGJ5IGlkOiAnICsgcHJvdmlkZXJJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGh0dHAgREVMRVRFIHRvIFwiICt0aGlzLnVybCArIHByb3ZpZGVySWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLnVybCArIHByb3ZpZGVySWQpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnIpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkUHJvdmlkZXIocHJvdmlkZXI6UHJvdmlkZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBodHRwIFBPU1QgdG8gXCIgK3RoaXMudXJsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNhdmluZyBcIiwgcHJvdmlkZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy51cmwsIEpTT04uc3RyaW5naWZ5KHByb3ZpZGVyKSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT5PYnNlcnZhYmxlLnRocm93KGVycikpO1xyXG4gICAgfVxyXG4gICAgZWRpdFByb3ZpZGVyKHByb3ZpZGVyOlByb3ZpZGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIHByb3ZpZGVyIHdpdGggaWQ6ICcgKyBwcm92aWRlci5wcm92aWRlcklkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgaHR0cCBQVVQgdG8gXCIgK3RoaXMudXJsICsgcHJvdmlkZXIucHJvdmlkZXJJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJqc29uIG9iajogXCIgKyBKU09OLnN0cmluZ2lmeShwcm92aWRlcikpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLnVybCArIHByb3ZpZGVyLnByb3ZpZGVySWQsIEpTT04uc3RyaW5naWZ5KHByb3ZpZGVyKSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT5PYnNlcnZhYmxlLnRocm93KGVycikpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRQcm92aWRlckJ5TmFtZU9yRGVzY3JpcHRpb24oc2VhcmNoOiBzdHJpbmcpIDogIE9ic2VydmFibGU8YW55PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyBwcm92aWRlcnNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJhbSBpc1wiICsgc2VhcmNoKTtcclxuICAgICAgICByZXR1cm4gIHRoaXMuX2h0dHAuZ2V0KHRoaXMudXJsICsgXCJmaW5kP25hbWU9XCIrc2VhcmNoKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pk9ic2VydmFibGUudGhyb3coZXJyKSk7XHJcbiAgICB9XHJcbn0iXX0=
