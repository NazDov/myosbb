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
    var BillService;
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
            BillService = (function () {
                function BillService(_http) {
                    this._http = _http;
                    this.userBillsURL = ApiService.serverUrl + '/restful/bill/user/';
                    this.billsURL = ApiService.serverUrl + '/restful/bill';
                    this.headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
                    this.headers.append('Content-Type', 'application/json');
                }
                BillService.prototype.getAllByRole = function (osbbRole, userId, searchDTO, status) {
                    if (osbbRole != 'HEAD') {
                        console.log('get all user bills');
                        return this.getAllByUser(userId, searchDTO, status);
                    }
                    else {
                        console.log('get osbb bills');
                        return this._http.post(this.billsURL + '/?status=' + status, JSON.stringify(searchDTO))
                            .map(function (response) { return response.json(); })
                            .catch(function (error) { return Observable_1.Observable.throw(error); });
                    }
                };
                BillService.prototype.getAllByUser = function (userId, searchDTO, status) {
                    return this._http.post(this.userBillsURL + userId + '/all?status=' + status, JSON.stringify(searchDTO))
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                BillService.prototype.save = function (bill) {
                    if (bill.billId) {
                        return this.update(bill);
                    }
                    return this.saveBill(bill);
                };
                BillService.prototype.saveBill = function (bill) {
                    return this._http.post(this.billsURL + '/save', JSON.stringify(bill))
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                BillService.prototype.update = function (bill) {
                    return this._http.put(this.billsURL, JSON.stringify(bill))
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                BillService.prototype.deleteById = function (billId) {
                    return this._http.delete(this.billsURL + '/' + billId)
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                BillService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BillService);
                return BillService;
            }());
            exports_1("BillService", BillService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL2JpbGxzL2JpbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBTUkscUJBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFKdkIsaUJBQVksR0FBVyxVQUFVLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO29CQUNwRSxhQUFRLEdBQVcsVUFBVSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7b0JBQzFELFlBQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUM7b0JBR3hGLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUdELGtDQUFZLEdBQVosVUFBYSxRQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFxQixFQUFFLE1BQWM7b0JBQ2hGLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3hELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7NkJBQ2xGLEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7NkJBQ2pDLEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBRyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7b0JBQ2pELENBQUM7Z0JBRUwsQ0FBQztnQkFFRCxrQ0FBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLFNBQXFCLEVBQUUsTUFBYztvQkFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxHQUFHLGNBQWMsR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQzt5QkFDbEcsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDakMsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFHLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFFRCwwQkFBSSxHQUFKLFVBQUssSUFBYTtvQkFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0IsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFL0IsQ0FBQztnQkFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBYTtvQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ2hFLEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBRyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBRUQsNEJBQU0sR0FBTixVQUFPLElBQWE7b0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3JELEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBRyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBR0QsZ0NBQVUsR0FBVixVQUFXLE1BQWM7b0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7eUJBQ2pELEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBRyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUE7Z0JBQ2hELENBQUM7Z0JBckRMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQXdEYixrQkFBQztZQUFELENBdkRBLEFBdURDLElBQUE7WUF2REQscUNBdURDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL2JpbGxzL2JpbGwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIZWFkZXJzLCBIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiO1xyXG5pbXBvcnQge1BhZ2VQYXJhbXN9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3NlYXJjaC5tb2RlbFwiO1xyXG5pbXBvcnQge0JpbGxEVE99IGZyb20gXCIuL3Nob3dfYmlsbF9kdG8uaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBBcGlTZXJ2aWNlID0gcmVxdWlyZShcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZVwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJpbGxTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHVzZXJCaWxsc1VSTDogc3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvYmlsbC91c2VyLyc7XHJcbiAgICBwcml2YXRlIGJpbGxzVVJMOiBzdHJpbmcgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9iaWxsJztcclxuICAgIHByaXZhdGUgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEFsbEJ5Um9sZShvc2JiUm9sZTogc3RyaW5nLCB1c2VySWQ6IG51bWJlciwgc2VhcmNoRFRPOiBQYWdlUGFyYW1zLCBzdGF0dXM6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgaWYgKG9zYmJSb2xlICE9ICdIRUFEJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGFsbCB1c2VyIGJpbGxzJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEFsbEJ5VXNlcih1c2VySWQsIHNlYXJjaERUTywgc3RhdHVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IG9zYmIgYmlsbHMnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLmJpbGxzVVJMICsgJy8/c3RhdHVzPScgKyBzdGF0dXMsIEpTT04uc3RyaW5naWZ5KHNlYXJjaERUTykpXHJcbiAgICAgICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQnlVc2VyKHVzZXJJZDogbnVtYmVyLCBzZWFyY2hEVE86IFBhZ2VQYXJhbXMsIHN0YXR1czogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMudXNlckJpbGxzVVJMICsgdXNlcklkICsgJy9hbGw/c3RhdHVzPScgKyBzdGF0dXMsIEpTT04uc3RyaW5naWZ5KHNlYXJjaERUTykpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKT0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9Pk9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKGJpbGw6IEJpbGxEVE8pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGlmIChiaWxsLmJpbGxJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUoYmlsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNhdmVCaWxsKGJpbGwpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzYXZlQmlsbChiaWxsOiBCaWxsRFRPKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuYmlsbHNVUkwgKyAnL3NhdmUnLCBKU09OLnN0cmluZ2lmeShiaWxsKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9Pk9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoYmlsbDogQmlsbERUTyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuYmlsbHNVUkwsIEpTT04uc3RyaW5naWZ5KGJpbGwpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkZWxldGVCeUlkKGJpbGxJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodGhpcy5iaWxsc1VSTCArICcvJyArIGJpbGxJZClcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9Pk9ic2VydmFibGUudGhyb3coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=
