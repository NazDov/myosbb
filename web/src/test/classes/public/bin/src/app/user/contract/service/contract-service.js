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
    var ContractService;
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
            ContractService = (function () {
                function ContractService(_http) {
                    this._http = _http;
                    this.url = ApiService.serverUrl + '/restful/contract/';
                    this.urlWithParams = ApiService.serverUrl + '/restful/contract?pageNum=';
                }
                ContractService.prototype.getContracts = function (pageNumber) {
                    console.log("get contracts inside service, pagenum" + pageNumber);
                    console.log("sending http GET to " + this.urlWithParams + pageNumber);
                    return this._http.get(this.urlWithParams + pageNumber)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ContractService.prototype.getContractsByState = function (pageNumber, onlyActive) {
                    console.log("get only active contracts inside service, pagenum" + pageNumber);
                    console.log("sending http GET to " + this.urlWithParams + pageNumber + '&&actv=' + onlyActive);
                    return this._http.get(this.urlWithParams + pageNumber + '&&actv=' + onlyActive)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ContractService.prototype.getContractById = function (id) {
                    console.log("ok");
                    return this._http.get(this.url + id)
                        .map(function (res) { return res.json().data; }, function (err) { return console.log(err); });
                };
                ContractService.prototype.getSortedContracts = function (pageNumber, name, order) {
                    return this._http.get(this.urlWithParams + pageNumber + '&&sortedBy=' + name + '&&asc=' + order)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ContractService.prototype.getSortedActiveContracts = function (pageNumber, name, order, onlyActive) {
                    return this._http.get(this.urlWithParams + pageNumber + '&&sortedBy=' + name + '&&asc=' + order + '&&actv=' +
                        onlyActive)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ContractService.prototype.deleteContractById = function (contractId) {
                    var url = this.url + contractId;
                    console.log('delete contract by id: ' + contractId);
                    console.log("sending http DELETE to " + url);
                    return this._http.delete(url)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ContractService.prototype.editAndSave = function (contract) {
                    console.log('updating contract with id: ' + contract.contractId);
                    console.log("sending http POST to " + this.url + contract.contractId);
                    console.log("json obj: " + JSON.stringify(contract));
                    return this._http.post(this.url + contract.contractId, JSON.stringify(contract))
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ContractService.prototype.addContract = function (contract) {
                    console.log("sending http POST to " + this.url);
                    return this._http.post(this.url, JSON.stringify(contract))
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ContractService.prototype.findByProviderName = function (search) {
                    console.log("searching contracts");
                    console.log("param is" + search);
                    return this._http.get(this.url + "find?name=" + search)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Rx_1.Observable.throw(err); });
                };
                ContractService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ContractService);
                return ContractService;
            }());
            exports_1("ContractService", ContractService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL2NvbnRyYWN0L3NlcnZpY2UvY29udHJhY3Qtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBS0kseUJBQW9CLEtBQVU7b0JBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztvQkFIdEIsUUFBRyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7b0JBQ2xELGtCQUFhLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyw0QkFBNEIsQ0FBQztnQkFHNUUsQ0FBQztnQkFFRCxzQ0FBWSxHQUFaLFVBQWEsVUFBaUI7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEdBQUcsVUFBVSxDQUFDLENBQUM7b0JBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQztvQkFDckUsTUFBTSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO3lCQUNsRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUcsT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0QsNkNBQW1CLEdBQW5CLFVBQW9CLFVBQWlCLEVBQUUsVUFBb0I7b0JBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQW1ELEdBQUcsVUFBVSxDQUFDLENBQUM7b0JBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLEdBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDO29CQUMvRixNQUFNLENBQUUs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QU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDO29CQUNqQyxNQUFNLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLEdBQUMsTUFBTSxDQUFDO3lCQUNqRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUcsT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBMUVMO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQTJFYixzQkFBQztZQUFELENBMUVBLEFBMEVDLElBQUE7WUExRUQsNkNBMEVDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbnRyYWN0L3NlcnZpY2UvY29udHJhY3Qtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFuYXN0YXNpaWEgRmVkb3JhayAgOC8yLzE2LlxyXG4gKi9cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5pbXBvcnQge0NvbnRyYWN0fSBmcm9tIFwiLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb250cmFjdC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29udHJhY3RTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHVybCA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL2NvbnRyYWN0Lyc7XHJcbiAgICBwcml2YXRlIHVybFdpdGhQYXJhbXMgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9jb250cmFjdD9wYWdlTnVtPSc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKXtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250cmFjdHMocGFnZU51bWJlcjpudW1iZXIpIDogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGNvbnRyYWN0cyBpbnNpZGUgc2VydmljZSwgcGFnZW51bVwiICsgcGFnZU51bWJlcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGh0dHAgR0VUIHRvIFwiICt0aGlzLnVybFdpdGhQYXJhbXMgKyBwYWdlTnVtYmVyKTtcclxuICAgICAgICByZXR1cm4gIHRoaXMuX2h0dHAuZ2V0KHRoaXMudXJsV2l0aFBhcmFtcyArIHBhZ2VOdW1iZXIpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnIpKTtcclxuICAgIH1cclxuICAgIGdldENvbnRyYWN0c0J5U3RhdGUocGFnZU51bWJlcjpudW1iZXIsIG9ubHlBY3RpdmUgOiBib29sZWFuKSA6IE9ic2VydmFibGU8YW55PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldCBvbmx5IGFjdGl2ZSBjb250cmFjdHMgaW5zaWRlIHNlcnZpY2UsIHBhZ2VudW1cIiArIHBhZ2VOdW1iZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBodHRwIEdFVCB0byBcIiArdGhpcy51cmxXaXRoUGFyYW1zICsgcGFnZU51bWJlciAgKyAnJiZhY3R2PScgKyBvbmx5QWN0aXZlKTtcclxuICAgICAgICByZXR1cm4gIHRoaXMuX2h0dHAuZ2V0KHRoaXMudXJsV2l0aFBhcmFtcyArIHBhZ2VOdW1iZXIgKyAnJiZhY3R2PScgKyBvbmx5QWN0aXZlKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pk9ic2VydmFibGUudGhyb3coZXJyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udHJhY3RCeUlkKGlkOiBudW1iZXIpIDogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLnVybCArIGlkKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvcnRlZENvbnRyYWN0cyhwYWdlTnVtYmVyOm51bWJlciwgbmFtZTpzdHJpbmcsIG9yZGVyOmJvb2xlYW4pOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMudXJsV2l0aFBhcmFtcyArIHBhZ2VOdW1iZXIgKyAnJiZzb3J0ZWRCeT0nICsgbmFtZSArICcmJmFzYz0nICsgb3JkZXIpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlcyk9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pk9ic2VydmFibGUudGhyb3coZXJyKSk7XHJcbiAgICB9XHJcbiAgICBnZXRTb3J0ZWRBY3RpdmVDb250cmFjdHMocGFnZU51bWJlcjpudW1iZXIsIG5hbWU6c3RyaW5nLCBvcmRlcjpib29sZWFuLCBvbmx5QWN0aXZlOmJvb2xlYW4pOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMudXJsV2l0aFBhcmFtcyArIHBhZ2VOdW1iZXIgKyAnJiZzb3J0ZWRCeT0nICsgbmFtZSArICcmJmFzYz0nICsgb3JkZXIgKyAnJiZhY3R2PScgK1xyXG4gICAgICAgICAgICBvbmx5QWN0aXZlKVxyXG4gICAgICAgICAgICAubWFwKChyZXMpPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT5PYnNlcnZhYmxlLnRocm93KGVycikpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNvbnRyYWN0QnlJZChjb250cmFjdElkOm51bWJlcikge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnVybCArIGNvbnRyYWN0SWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBjb250cmFjdCBieSBpZDogJyArIGNvbnRyYWN0SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBodHRwIERFTEVURSB0byBcIiArdXJsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodXJsKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pk9ic2VydmFibGUudGhyb3coZXJyKSlcclxuICAgIH1cclxuXHJcbiAgICBlZGl0QW5kU2F2ZShjb250cmFjdDpDb250cmFjdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRpbmcgY29udHJhY3Qgd2l0aCBpZDogJyArIGNvbnRyYWN0LmNvbnRyYWN0SWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgaHR0cCBQT1NUIHRvIFwiICt0aGlzLnVybCArIGNvbnRyYWN0LmNvbnRyYWN0SWQpO1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJqc29uIG9iajogXCIgKyBKU09OLnN0cmluZ2lmeShjb250cmFjdCkpO1xyXG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLnVybCArIGNvbnRyYWN0LmNvbnRyYWN0SWQsIEpTT04uc3RyaW5naWZ5KGNvbnRyYWN0KSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT5PYnNlcnZhYmxlLnRocm93KGVycikpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ29udHJhY3QoY29udHJhY3Q6Q29udHJhY3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgaHR0cCBQT1NUIHRvIFwiICt0aGlzLnVybCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLnVybCwgSlNPTi5zdHJpbmdpZnkoY29udHJhY3QpKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pk9ic2VydmFibGUudGhyb3coZXJyKSlcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQnlQcm92aWRlck5hbWUoc2VhcmNoOiBzdHJpbmcpIDogIE9ic2VydmFibGU8YW55PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyBjb250cmFjdHNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJhbSBpc1wiICsgc2VhcmNoKTtcclxuICAgICAgICByZXR1cm4gIHRoaXMuX2h0dHAuZ2V0KHRoaXMudXJsICsgXCJmaW5kP25hbWU9XCIrc2VhcmNoKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pk9ic2VydmFibGUudGhyb3coZXJyKSk7XHJcbiAgICB9XHJcbn0iXX0=
