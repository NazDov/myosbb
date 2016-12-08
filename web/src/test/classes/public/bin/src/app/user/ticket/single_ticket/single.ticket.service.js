System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/toPromise", "rxjs/Observable", "../../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var MessageService;
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
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService(http) {
                    this.http = http;
                    this.getOneUrl = ApiService.serverUrl + '/restful/ticket';
                    this.getUrlCommentsForTicket = ApiService.serverUrl + '/restful/message/comments';
                    this.putState = ApiService.serverUrl + '/restful/ticket/state';
                    this.url = ApiService.serverUrl + '/restful/message';
                    this.addAnswerUrl = ApiService.serverUrl + '/restful/message/answer';
                }
                MessageService.prototype.getAllMessages = function (ticket) {
                    var url = this.url + "/" + ticket;
                    return this.http.get(url)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                MessageService.prototype.getMessagesForTicket = function (pageRequest, ticketId) {
                    return this.http.post(this.getUrlCommentsForTicket + "?ticket=" + ticketId, JSON.stringify(pageRequest))
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                MessageService.prototype.addMessage = function (message, ticket) {
                    return this.http.post(this.url + "?ticket=" + ticket, JSON.stringify(message))
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                MessageService.prototype.getTicketId = function (ticketId) {
                    var url = this.getOneUrl + "/" + ticketId;
                    return this.http.get(url)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                MessageService.prototype.getTicketbyId = function (ticketId) {
                    var url = this.getOneUrl + "/" + ticketId;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                MessageService.prototype.addAnswer = function (message) {
                    var url = "" + this.addAnswerUrl;
                    return this.http.post(url, JSON.stringify(message))
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                MessageService.prototype.editState = function (ticket) {
                    return this.http.put(this.putState, JSON.stringify(ticket))
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                MessageService.prototype.deleteMessage = function (messageId) {
                    var url = this.url + "/" + messageId;
                    return this.http.delete(url)
                        .toPromise()
                        .then(function (res) { return messageId; })
                        .catch(this.handleError);
                };
                MessageService.prototype.editMessage = function (message) {
                    var url = "" + this.url;
                    return this.http.put(url, JSON.stringify(message))
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                MessageService.prototype.handleError = function (error) {
                    console.log('HandleError', error);
                    return Promise.reject(error.message || error);
                };
                MessageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MessageService);
                return MessageService;
            }());
            exports_1("MessageService", MessageService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3RpY2tldC9zaW5nbGVfdGlja2V0L3NpbmdsZS50aWNrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBT0ksd0JBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFOckIsY0FBUyxHQUFVLFVBQVUsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7b0JBQzVELDRCQUF1QixHQUFVLFVBQVUsQ0FBQyxTQUFTLEdBQUcsMkJBQTJCLENBQUM7b0JBQ3BGLGFBQVEsR0FBVSxVQUFVLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO29CQUNqRSxRQUFHLEdBQVUsVUFBVSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztvQkFDdkQsaUJBQVksR0FBVSxVQUFVLENBQUMsU0FBUyxHQUFHLHlCQUF5QixDQUFDO2dCQUcvRSxDQUFDO2dCQUVELHVDQUFjLEdBQWQsVUFBZSxNQUFhO29CQUN4QixJQUFJLEdBQUcsR0FBTSxJQUFJLENBQUMsR0FBRyxTQUFJLE1BQVEsQ0FBQztvQkFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt5QkFDcEIsU0FBUyxFQUFFO3lCQUNYLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsNkNBQW9CLEdBQXBCLFVBQXFCLFdBQXVCLEVBQUUsUUFBZTtvQkFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsR0FBQyxVQUFVLEdBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7eUJBQy9GLEdBQUcs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QyxVQUFBLEdBQUcsSUFBSSxPQUFBLFNBQVMsRUFBVCxDQUFTLENBQUM7eUJBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQWdCO29CQUN4QixJQUFJLEdBQUcsR0FBRyxLQUFHLElBQUksQ0FBQyxHQUFLLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDN0MsU0FBUyxFQUFFO3lCQUNYLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRU8sb0NBQVcsR0FBbkIsVUFBb0IsS0FBUztvQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBbEZMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQW1GYixxQkFBQztZQUFELENBbEZBLEFBa0ZDLElBQUE7WUFsRkQsMkNBa0ZDLENBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3RpY2tldC9zaW5nbGVfdGlja2V0L3NpbmdsZS50aWNrZXQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCI7XHJcbmltcG9ydCB7VGlja2V0LCBJVGlja2V0fSBmcm9tICcuLy4uL3RpY2tldCc7XHJcbmltcG9ydCB7SU1lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7UGFnZVJlcXVlc3R9IGZyb20gJy4vLi4vcGFnZS5yZXF1ZXN0JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBBcGlTZXJ2aWNlID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZVwiKTtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGdldE9uZVVybDpzdHJpbmcgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC90aWNrZXQnO1xyXG4gICAgcHJpdmF0ZSBnZXRVcmxDb21tZW50c0ZvclRpY2tldDpzdHJpbmcgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9tZXNzYWdlL2NvbW1lbnRzJztcclxuICAgIHByaXZhdGUgcHV0U3RhdGU6c3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvdGlja2V0L3N0YXRlJztcclxuICAgIHByaXZhdGUgdXJsOnN0cmluZyA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL21lc3NhZ2UnO1xyXG4gICAgcHJpdmF0ZSBhZGRBbnN3ZXJVcmw6c3RyaW5nID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvbWVzc2FnZS9hbnN3ZXInO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsTWVzc2FnZXModGlja2V0Om51bWJlcik6UHJvbWlzZTxJTWVzc2FnZVtdPiB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMudXJsfS8ke3RpY2tldH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVzc2FnZXNGb3JUaWNrZXQocGFnZVJlcXVlc3Q6UGFnZVJlcXVlc3QsIHRpY2tldElkOm51bWJlcik6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5nZXRVcmxDb21tZW50c0ZvclRpY2tldCtcIj90aWNrZXQ9XCIrdGlja2V0SWQsIEpTT04uc3RyaW5naWZ5KHBhZ2VSZXF1ZXN0KSlcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE1lc3NhZ2UobWVzc2FnZTpJTWVzc2FnZSx0aWNrZXQ6bnVtYmVyKTpQcm9taXNlPElNZXNzYWdlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMudXJsICtcIj90aWNrZXQ9XCIrdGlja2V0LCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSlcclxuICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0VGlja2V0SWQodGlja2V0SWQ6bnVtYmVyKTpQcm9taXNlPFRpY2tldD4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHt0aGlzLmdldE9uZVVybH0vJHt0aWNrZXRJZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGlja2V0YnlJZCh0aWNrZXRJZDpudW1iZXIpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuZ2V0T25lVXJsfS8ke3RpY2tldElkfWA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQW5zd2VyKG1lc3NhZ2U6SU1lc3NhZ2UpOlByb21pc2U8SU1lc3NhZ2U+IHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7dGhpcy5hZGRBbnN3ZXJVcmx9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFN0YXRlKHRpY2tldDpUaWNrZXQpOlByb21pc2U8SVRpY2tldD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMucHV0U3RhdGUsIEpTT04uc3RyaW5naWZ5KHRpY2tldCkpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZUlkOm51bWJlcik6UHJvbWlzZTxJTWVzc2FnZT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHt0aGlzLnVybH0vJHttZXNzYWdlSWR9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gbWVzc2FnZUlkKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdE1lc3NhZ2UobWVzc2FnZTpJTWVzc2FnZSk6UHJvbWlzZTxJTWVzc2FnZT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHt0aGlzLnVybH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6YW55KTpQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIYW5kbGVFcnJvcicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=
