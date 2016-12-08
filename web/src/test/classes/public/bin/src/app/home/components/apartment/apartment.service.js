System.register(['@angular/http', "@angular/core", 'rxjs/Observable', 'rxjs/add/operator/map', "../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var http_1, core_1, Observable_1, ApiService;
    var ApartmentService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            ApartmentService = (function () {
                function ApartmentService(http) {
                    this.http = http;
                }
                ApartmentService.prototype.getAllApartments = function (pageNumber) {
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
                    headers.append('Content-Type', 'application/json');
                    return this.http.get(ApiService.serverUrl + "/restful/apartment?pageNumber=" + pageNumber)
                        .map(function (response) { return response.json(); });
                };
                ApartmentService.prototype.getSortedApartments = function (pageNumber, name, order, osbbId, role) {
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
                    headers.append('Content-Type', 'application/json');
                    return this.http.get(ApiService.serverUrl + "/restful/apartment?pageNumber=" + pageNumber + '&&sortedBy=' + name + '&&asc=' + order + '&&osbbId=' + osbbId + '&&role=' + role)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Observable_1.Observable.throw(err); });
                };
                ApartmentService.prototype.getSortedApartmentsWithNumber = function (pageNumber, name, order, number, osbbId, role) {
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
                    headers.append('Content-Type', 'application/json');
                    return this.http.get(ApiService.serverUrl + "/restful/apartment?pageNumber=" + pageNumber + '&&sortedBy=' + name + '&&asc=' + order + '&&number=' + number + '&&osbbId=' + osbbId + '&&role=' + role)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Observable_1.Observable.throw(err); });
                };
                ApartmentService.prototype.addApartment = function (am, houseId) {
                    var body = JSON.stringify(am);
                    console.log("add model...." + body);
                    return this.http.post(ApiService.serverUrl + '/restful/house/' + houseId, body)
                        .map(function (res) { return res.json(); });
                };
                ApartmentService.prototype.deleteApartment = function (am) {
                    var url = ApiService.serverUrl + '/restful/apartment/' + am.apartmentId;
                    console.log("deleted item" + am);
                    return this.http.delete(url)
                        .map(function (res) { return res.json(); });
                };
                ApartmentService.prototype.editAndSave = function (am) {
                    return this.http.put(ApiService.serverUrl + '/restful/apartment', JSON.stringify(am))
                        .map(function (res) { return res.json(); });
                };
                ApartmentService.prototype.getAllUsersInApartment = function (id) {
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
                    headers.append('Content-Type', 'application/json');
                    return this.http.get(ApiService.serverUrl + "/restful/apartment/users" + id)
                        .map(function (response) { return response.json(); });
                };
                ApartmentService.prototype.isApartmentExist = function (apartmentNumber, houseId) {
                    return this.http.get(ApiService.serverUrl + "/restful/house/" + houseId + "/" + apartmentNumber)
                        .map(function (response) { return response.json(); });
                };
                ApartmentService.prototype.getAllHouses = function (osbbId) {
                    return this.http.get(ApiService.serverUrl + '/restful/house/all/' + osbbId).
                        map(function (res) { return res.json(); });
                };
                ApartmentService.prototype.getCurrentOsbbId = function (userId) {
                    return this.http.get(ApiService.serverUrl + "/restful/user/userOsbb/" + userId).
                        map(function (res) { return res.json(); });
                };
                ApartmentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ApartmentService);
                return ApartmentService;
            }());
            exports_1("ApartmentService", ApartmentService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2NvbXBvbmVudHMvYXBhcnRtZW50L2FwYXJ0bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUVJLDBCQUFxQixJQUFTO29CQUFULFNBQUksR0FBSixJQUFJLENBQUs7Z0JBQUUsQ0FBQztnQkFFakMsMkNBQWdCLEdBQWhCLFVBQWlCLFVBQWlCO29CQUM5QixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUM7b0JBQ3RGLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLGdDQUFnQyxHQUFDLFVBQVUsQ0FBQzt5QkFDbkYsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUlULDhDQUFtQixHQUFuQixVQUFvQixVQUFpQixFQUFFLElBQVcsRUFBRSxLQUFhLEVBQUMsTUFBYSxFQUFDLElBQVc7b0JBQ3ZGLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQztvQkFDeEYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsZ0NBQWdDLEdBQUcsVUFBVSxHQUFHLGFBQWEsR0FBRyxJQUFJLEdB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LENBQVUsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQWhGTDtvQkFBQyxpQkFBVSxFQUFHOztvQ0FBQTtnQkF3RlYsdUJBQUM7WUFBRCxDQXZGSixBQXVGSyxJQUFBO1lBdkZMLCtDQXVGSyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2FwYXJ0bWVudC9hcGFydG1lbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgSGVhZGVycyxSZXF1ZXN0T3B0aW9uc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0FwYXJ0bWVudH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9hcGFydG1lbnQuaW50ZXJmYWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgQXBpU2VydmljZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2VcIik7XHJcblxyXG5ASW5qZWN0YWJsZSAoKVxyXG5leHBvcnQgY2xhc3MgQXBhcnRtZW50U2VydmljZXtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDpIdHRwKXt9XHJcbiAgICBcclxuICAgIGdldEFsbEFwYXJ0bWVudHMocGFnZU51bWJlcjpudW1iZXIpOk9ic2VydmFibGU8YW55PntcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJytsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX0pO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgXCIvcmVzdGZ1bC9hcGFydG1lbnQ/cGFnZU51bWJlcj1cIitwYWdlTnVtYmVyKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFNvcnRlZEFwYXJ0bWVudHMocGFnZU51bWJlcjpudW1iZXIsIG5hbWU6c3RyaW5nLCBvcmRlcjpib29sZWFuLG9zYmJJZDpudW1iZXIscm9sZTpTdHJpbmcpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX0pO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChBcGlTZXJ2aWNlLnNlcnZlclVybCArIFwiL3Jlc3RmdWwvYXBhcnRtZW50P3BhZ2VOdW1iZXI9XCIgKyBwYWdlTnVtYmVyICsgJyYmc29ydGVkQnk9JyArIG5hbWUgKyAnJiZhc2M9JyArIG9yZGVyKycmJm9zYmJJZD0nK29zYmJJZCsnJiZyb2xlPScrcm9sZSlcclxuICAgICAgICAgICAgLm1hcCgocmVzKT0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3J0ZWRBcGFydG1lbnRzV2l0aE51bWJlcihwYWdlTnVtYmVyOm51bWJlciwgbmFtZTpzdHJpbmcsIG9yZGVyOmJvb2xlYW4sbnVtYmVyOm51bWJlcixvc2JiSWQ6bnVtYmVyLHJvbGU6U3RyaW5nKTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9KTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyBcIi9yZXN0ZnVsL2FwYXJ0bWVudD9wYWdlTnVtYmVyPVwiICsgcGFnZU51bWJlciArICcmJnNvcnRlZEJ5PScgKyBuYW1lICsgJyYmYXNjPScgKyBvcmRlcisnJiZudW1iZXI9JytudW1iZXIrJyYmb3NiYklkPScrb3NiYklkKycmJnJvbGU9Jytyb2xlKVxyXG4gICAgICAgICAgICAubWFwKChyZXMpPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT5PYnNlcnZhYmxlLnRocm93KGVycikpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFwYXJ0bWVudCAoYW06QXBhcnRtZW50TW9kZWwsaG91c2VJZDpudW1iZXIpOk9ic2VydmFibGU8YW55PntcclxuICAgICAgICBsZXQgYm9keSA9SlNPTi5zdHJpbmdpZnkoYW0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBtb2RlbC4uLi5cIiArIGJvZHkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9ob3VzZS8nK2hvdXNlSWQsIGJvZHkgKVxyXG4gICAgICAgICAgICAubWFwKHJlcz0+cmVzLmpzb24oKSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBkZWxldGVBcGFydG1lbnQoYW06QXBhcnRtZW50KTpPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgIFxyXG4gICAgICAgIGxldCB1cmwgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9hcGFydG1lbnQvJyArIGFtLmFwYXJ0bWVudElkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZCBpdGVtXCIgKyBhbSk7XHJcbiAgICAgICByZXR1cm4gIHRoaXMuaHR0cC5kZWxldGUodXJsKVxyXG4gICAgICAgICAgIC5tYXAocmVzPT5yZXMuanNvbigpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEFuZFNhdmUoYW06QXBhcnRtZW50KTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL2FwYXJ0bWVudCcsIEpTT04uc3RyaW5naWZ5KGFtKSlcclxuICAgICAgICAgICAgLm1hcChyZXM9PnJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZ2V0QWxsVXNlcnNJbkFwYXJ0bWVudChpZDpudW1iZXIpe1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfSk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyBcIi9yZXN0ZnVsL2FwYXJ0bWVudC91c2Vyc1wiK2lkKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBcGFydG1lbnRFeGlzdChhcGFydG1lbnROdW1iZXI6bnVtYmVyLGhvdXNlSWQ6bnVtYmVyKTpib29sZWFue1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChBcGlTZXJ2aWNlLnNlcnZlclVybCArIFwiL3Jlc3RmdWwvaG91c2UvXCIraG91c2VJZCtcIi9cIithcGFydG1lbnROdW1iZXIpXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldEFsbEhvdXNlcyhvc2JiSWQ6bnVtYmVyKTpPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQXBpU2VydmljZS5zZXJ2ZXJVcmwrJy9yZXN0ZnVsL2hvdXNlL2FsbC8nK29zYmJJZCkuXHJcbiAgICAgICAgbWFwKHJlcz0+cmVzLmpzb24oKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRPc2JiSWQodXNlcklkOm51bWJlcik6T2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEFwaVNlcnZpY2Uuc2VydmVyVXJsICtcIi9yZXN0ZnVsL3VzZXIvdXNlck9zYmIvXCIrdXNlcklkKS5cclxuICAgICAgICBtYXAocmVzPT5yZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcblxyXG4gICAgfVxyXG4iXX0=
