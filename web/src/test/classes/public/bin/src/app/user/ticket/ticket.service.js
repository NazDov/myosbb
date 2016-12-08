System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/toPromise", "../../../shared/services/api.service", "rxjs/Observable"], function(exports_1, context_1) {
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
    var core_1, http_1, ApiService, Observable_1;
    var TicketService;
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
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            TicketService = (function () {
                function TicketService(http) {
                    this.http = http;
                    this.url = ApiService.serverUrl + '/restful/ticket';
                    this.getAssignUser = ApiService.serverUrl + '/restful/user/osbb/';
                    this.getTicketByPage = ApiService.serverUrl + '/restful/ticket/page';
                    this.getUsers = ApiService.serverUrl + '/restful/user/osbb';
                    this.findTicketByName = ApiService.serverUrl + '/restful/ticket/findName';
                    this.findTicketByState = ApiService.serverUrl + '/restful/ticket/state';
                    this.findTicketByUser = ApiService.serverUrl + '/restful/ticket/user';
                }
                TicketService.prototype.getTicketsByPage = function (pageRequest) {
                    return this.http.post(this.getTicketByPage, JSON.stringify(pageRequest))
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                TicketService.prototype.getTicketsSorted = function (pageRequest) {
                    return this.http.post(this.getTicketByPage, JSON.stringify(pageRequest))
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                TicketService.prototype.findByNameDescription = function (pageRequest, osbbId, findName) {
                    return this.http.post(this.findTicketByName + '?name=' + findName + '&&osbbId=' + osbbId, JSON.stringify(pageRequest))
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                TicketService.prototype.findByUser = function (pageRequest, email, state) {
                    return this.http.post(this.findTicketByUser + '?user=' + email + '&&state=' + state, JSON.stringify(pageRequest))
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                TicketService.prototype.findByAssigned = function (pageRequest, email, state) {
                    return this.http.post(this.findTicketByUser + '?assign=' + email + '&&state=' + state, JSON.stringify(pageRequest))
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                TicketService.prototype.findByState = function (pageRequest, state) {
                    return this.http.post(this.findTicketByState + '?state=' + state, JSON.stringify(pageRequest))
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                TicketService.prototype.getAllTicket = function () {
                    return this.http.get(this.url)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TicketService.prototype.getAllUsers = function (osbbId) {
                    return this.http.get(this.getUsers + "/" + osbbId)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TicketService.prototype.getTicketbyId = function (ticketId) {
                    var url = this.url + "/" + ticketId;
                    return this.http.get(url)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TicketService.prototype.addTicket = function (ticket) {
                    return this.http.post(this.url, JSON.stringify(ticket))
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TicketService.prototype.editTicket = function (ticket) {
                    return this.http.put(this.url, JSON.stringify(ticket))
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TicketService.prototype.deleteTicket = function (ticket) {
                    var url = this.url + "/" + ticket.ticketId;
                    return this.http.delete(url)
                        .toPromise()
                        .then(function (res) { return ticket; })
                        .catch(this.handleError);
                };
                TicketService.prototype.handleError = function (error) {
                    console.log('HandleError', error);
                    return Promise.reject(error.message || error);
                };
                TicketService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TicketService);
                return TicketService;
            }());
            exports_1("TicketService", TicketService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3RpY2tldC90aWNrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBV0ksdUJBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFUckIsUUFBRyxHQUFVLFVBQVUsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7b0JBQ3RELGtCQUFhLEdBQVUsVUFBVSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztvQkFDcEUsb0JBQWUsR0FBVSxVQUFVLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO29CQUN2RSxhQUFRLEdBQVUsVUFBVSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztvQkFDOUQscUJBQWdCLEdBQVUsVUFBVSxDQUFDLFNBQVMsR0FBRywwQkFBMEIsQ0FBQztvQkFDNUUsc0JBQWlCLEdBQVUsVUFBVSxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztvQkFDMUUscUJBQWdCLEdBQVUsVUFBVSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztnQkFJaEYsQ0FBQztnQkFFRCx3Q0FBZ0IsR0FBaEIsVUFBaUIsV0FBdUI7b0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7eUJBQ25FLEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7eUJBQ2pDLEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBRyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBRUQsd0NBQWdCLEdBQWhCLFVBQWlCLFdBQXVCO29CQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FB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O2dCQUVELGtDQUFVLEdBQVYsVUFBVyxNQUFjO29CQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUNqRCxTQUFTLEVBQUU7eUJBQ1gsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxvQ0FBWSxHQUFaLFVBQWEsTUFBYztvQkFDdkIsSUFBSSxHQUFHLEdBQU0sSUFBSSxDQUFDLEdBQUcsU0FBSSxNQUFNLENBQUMsUUFBVSxDQUFDO29CQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO3lCQUN2QixTQUFTLEVBQUU7eUJBQ1gsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQzt5QkFDbkIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFHTyxtQ0FBVyxHQUFuQixVQUFvQixLQUFTO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFuR0w7b0JBQUMsaUJBQVUsRUFBRTs7aUNBQUE7Z0JBcUdiLG9CQUFDO1lBQUQsQ0FwR0EsQUFvR0MsSUFBQTtZQXBHRCx5Q0FvR0MsQ0FBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdGlja2V0L3RpY2tldC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIjtcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9Vc2VyJztcclxuaW1wb3J0IHtJVGlja2V0LFRpY2tldFN0YXRlfSBmcm9tICcuL3RpY2tldCc7XHJcbmltcG9ydCB7UGFnZVJlcXVlc3R9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvcGFnZS5yZXF1ZXN0JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7TWFpbH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvbWFpbC5pbnRlcmZhY2VcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaWNrZXRTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHVybDpzdHJpbmcgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC90aWNrZXQnO1xyXG4gICAgcHJpdmF0ZSBnZXRBc3NpZ25Vc2VyOnN0cmluZyA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL3VzZXIvb3NiYi8nO1xyXG4gICAgcHJpdmF0ZSBnZXRUaWNrZXRCeVBhZ2U6c3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvdGlja2V0L3BhZ2UnO1xyXG4gICAgcHJpdmF0ZSBnZXRVc2VyczpzdHJpbmcgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC91c2VyL29zYmInO1xyXG4gICAgcHJpdmF0ZSBmaW5kVGlja2V0QnlOYW1lOnN0cmluZyA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL3RpY2tldC9maW5kTmFtZSc7XHJcbiAgICBwcml2YXRlIGZpbmRUaWNrZXRCeVN0YXRlOnN0cmluZyA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL3RpY2tldC9zdGF0ZSc7XHJcbiAgICBwcml2YXRlIGZpbmRUaWNrZXRCeVVzZXI6c3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvdGlja2V0L3VzZXInO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpY2tldHNCeVBhZ2UocGFnZVJlcXVlc3Q6UGFnZVJlcXVlc3QpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuZ2V0VGlja2V0QnlQYWdlLCBKU09OLnN0cmluZ2lmeShwYWdlUmVxdWVzdCkpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKT0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9Pk9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWNrZXRzU29ydGVkKHBhZ2VSZXF1ZXN0OlBhZ2VSZXF1ZXN0KTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmdldFRpY2tldEJ5UGFnZSwgSlNPTi5zdHJpbmdpZnkocGFnZVJlcXVlc3QpKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEJ5TmFtZURlc2NyaXB0aW9uKHBhZ2VSZXF1ZXN0OlBhZ2VSZXF1ZXN0LCBvc2JiSWQ6bnVtYmVyLCBmaW5kTmFtZTpzdHJpbmcpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuZmluZFRpY2tldEJ5TmFtZSArICc/bmFtZT0nICsgZmluZE5hbWUgKyAnJiZvc2JiSWQ9JyArIG9zYmJJZCwgSlNPTi5zdHJpbmdpZnkocGFnZVJlcXVlc3QpKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEJ5VXNlcihwYWdlUmVxdWVzdDpQYWdlUmVxdWVzdCwgZW1haWw6c3RyaW5nLCBzdGF0ZTpUaWNrZXRTdGF0ZSk6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5maW5kVGlja2V0QnlVc2VyICsgJz91c2VyPScgKyBlbWFpbCArICcmJnN0YXRlPScgKyBzdGF0ZSwgSlNPTi5zdHJpbmdpZnkocGFnZVJlcXVlc3QpKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEJ5QXNzaWduZWQocGFnZVJlcXVlc3Q6UGFnZVJlcXVlc3QsIGVtYWlsOnN0cmluZywgc3RhdGU6VGlja2V0U3RhdGUpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuZmluZFRpY2tldEJ5VXNlciArICc/YXNzaWduPScgKyBlbWFpbCArICcmJnN0YXRlPScgKyBzdGF0ZSwgSlNPTi5zdHJpbmdpZnkocGFnZVJlcXVlc3QpKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEJ5U3RhdGUocGFnZVJlcXVlc3Q6UGFnZVJlcXVlc3QsIHN0YXRlOlRpY2tldFN0YXRlKTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmZpbmRUaWNrZXRCeVN0YXRlICsgJz9zdGF0ZT0nICsgc3RhdGUsIEpTT04uc3RyaW5naWZ5KHBhZ2VSZXF1ZXN0KSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFRpY2tldCgpOlByb21pc2U8SVRpY2tldFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFVzZXJzKG9zYmJJZDpudW1iZXIpOlByb21pc2U8VXNlcltdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5nZXRVc2Vyc30vJHtvc2JiSWR9YClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGlja2V0YnlJZCh0aWNrZXRJZDpudW1iZXIpOlByb21pc2U8SVRpY2tldD4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHt0aGlzLnVybH0vJHt0aWNrZXRJZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGlja2V0KHRpY2tldDpJVGlja2V0KTpQcm9taXNlPElUaWNrZXQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy51cmwsIEpTT04uc3RyaW5naWZ5KHRpY2tldCkpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRUaWNrZXQodGlja2V0OklUaWNrZXQpOlByb21pc2U8SVRpY2tldD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMudXJsLCBKU09OLnN0cmluZ2lmeSh0aWNrZXQpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUaWNrZXQodGlja2V0OklUaWNrZXQpOlByb21pc2U8SVRpY2tldD4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHt0aGlzLnVybH0vJHt0aWNrZXQudGlja2V0SWR9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gdGlja2V0KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6YW55KTpQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIYW5kbGVFcnJvcicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG59Il19
