System.register(["@angular/core", "@angular/http", "rxjs/Rx", 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', "../../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var ProviderTypeService;
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
            ProviderTypeService = (function () {
                function ProviderTypeService(_http) {
                    this._http = _http;
                    this.url = ApiService.serverUrl + '/restful/providertype/';
                }
                ProviderTypeService.prototype.getProviderTypes = function () {
                    console.log("get all provider types inside service");
                    console.log("sending http GET");
                    return this._http.get(this.url)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderTypeService.prototype.getProviderTypeById = function (id) {
                    return this._http.get(this.url + id)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderTypeService.prototype.deleteProviderTypeById = function (providerTypeId) {
                    var url = this.url + providerTypeId;
                    console.log('delete provider by id: ' + providerTypeId);
                    console.log("sending http DELETE to " + url);
                    return this._http.delete(url)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderTypeService.prototype.editAndSaveType = function (type) {
                    console.log('updating provider type with id: ' + type);
                    console.log("sending http PUT to " + this.url + type);
                    console.log("json obj: " + JSON.stringify(type));
                    return this._http.put(this.url + type, JSON.stringify(type))
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ProviderTypeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProviderTypeService);
                return ProviderTypeService;
            }());
            exports_1("ProviderTypeService", ProviderTypeService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3Byb3ZpZGVyL3Byb3ZpZGVyX3R5cGUvc2VydmljZS9wcm92aWRlci10eXBlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUdJLDZCQUFvQixLQUFVO29CQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7b0JBRnRCLFFBQUcsR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLHdCQUF3QixDQUFDO2dCQUc5RCxDQUFDO2dCQUVELDhDQUFnQixHQUFoQjtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7b0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDaEMsTUFBTSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7eUJBQzNCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBRyxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFFRCxpREFBbUIsR0FBbkIsVUFBb0IsRUFBVTtvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO3lCQUMvQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUcsT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUE7Z0JBQzVDLENBQUM7Z0JBR0Qsb0RBQXNCLEdBQXRCLFVBQXVCLGNBQXFCO29CQUN4QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQztvQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxjQUFjLENBQUMsQ0FBQztvQkFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRSxHQUFHLENBQUMsQ0FBQztvQkFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzt5QkFDeEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdEIsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFHLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFBO2dCQUM1QyxDQUFDO2dCQUVELDZDQUFlLEdBQWYsVUFBZ0IsSUFBaUI7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBRTt5QkFDeEQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdEIsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFHLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFBO2dCQUNoRCxDQUFDO2dCQXRDTDtvQkFBQyxpQkFBVSxFQUFFOzt1Q0FBQTtnQkF3Q2IsMEJBQUM7WUFBRCxDQXZDQSxBQXVDQyxJQUFBO1lBdkNELHFEQXVDQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm92aWRlci9wcm92aWRlcl90eXBlL3NlcnZpY2UvcHJvdmlkZXItdHlwZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW5hc3Rhc2lpYSBGZWRvcmFrICA4LzQvMTYuXHJcbiAqL1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5pbXBvcnQge1Byb3ZpZGVyVHlwZX0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvcHJvdmlkZXIudHlwZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb3ZpZGVyVHlwZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1cmwgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9wcm92aWRlcnR5cGUvJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOkh0dHApe1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb3ZpZGVyVHlwZXMoKSA6IE9ic2VydmFibGU8YW55PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldCBhbGwgcHJvdmlkZXIgdHlwZXMgaW5zaWRlIHNlcnZpY2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGh0dHAgR0VUXCIpO1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5faHR0cC5nZXQodGhpcy51cmwpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm92aWRlclR5cGVCeUlkKGlkOiBudW1iZXIpIDogIE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMudXJsICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnIpKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkZWxldGVQcm92aWRlclR5cGVCeUlkKHByb3ZpZGVyVHlwZUlkOm51bWJlcikge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnVybCArIHByb3ZpZGVyVHlwZUlkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgcHJvdmlkZXIgYnkgaWQ6ICcgKyBwcm92aWRlclR5cGVJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGh0dHAgREVMRVRFIHRvIFwiICt1cmwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh1cmwpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnIpKVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRBbmRTYXZlVHlwZSh0eXBlOlByb3ZpZGVyVHlwZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRpbmcgcHJvdmlkZXIgdHlwZSB3aXRoIGlkOiAnICsgdHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBodHRwIFBVVCB0byBcIiArdGhpcy51cmwgKyB0eXBlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJqc29uIG9iajogXCIgKyBKU09OLnN0cmluZ2lmeSh0eXBlKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLnVybCArIHR5cGUsIEpTT04uc3RyaW5naWZ5KHR5cGUpLClcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycik9Pk9ic2VydmFibGUudGhyb3coZXJyKSlcclxuICAgIH1cclxuXHJcbn0iXX0=
