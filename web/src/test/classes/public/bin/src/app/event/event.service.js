System.register(["@angular/core", "@angular/http", "rxjs/Observable", "rxjs/add/operator/map", "rxjs/add/operator/toPromise", 'moment', "../../shared/services/api.service"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, moment_1, ApiService;
    var EventService;
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
            function (moment_1_1) {
                moment_1 = moment_1_1;
            },
            function (ApiService_1) {
                ApiService = ApiService_1;
            }],
        execute: function() {
            EventService = (function () {
                function EventService(_http) {
                    this._http = _http;
                    this.eventUrl = ApiService.serverUrl + '/restful/event/';
                    this.getEventPageUrl = ApiService.serverUrl + '/restful/event?pageNumber=';
                    this.getEventsByStatusUrl = ApiService.serverUrl + '/restful/event/status?status=';
                    this.getEventsByAuthorUrl = ApiService.serverUrl + '/restful/event/author';
                }
                EventService.prototype.getEvents = function () {
                    return this._http.get(this.eventUrl)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .then(function (data) { return data; });
                };
                EventService.prototype.getEvent = function (id) {
                    console.log('get event by id: ' + id);
                    return this._http.get(this.eventUrl + id)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                EventService.prototype.getAllEvents = function (pageNumber) {
                    return this._http.get(this.getEventPageUrl + pageNumber)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                EventService.prototype.getAllEventsSorted = function (pageNumber, title, order) {
                    return this._http.get(this.getEventPageUrl + pageNumber + '&&sortedBy=' + title + '&&asc=' + order)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                EventService.prototype.deleteEventById = function (id) {
                    var url = this.eventUrl + id;
                    console.log('delete event by id: ' + id);
                    return this._http.delete(url)
                        .toPromise()
                        .catch(function (error) { return console.error(error); });
                };
                EventService.prototype.deleteAllEvents = function () {
                    console.log('delete all events');
                    return this._http.delete(this.eventUrl)
                        .toPromise()
                        .catch(function (error) { return console.error(error); });
                };
                EventService.prototype.editAndSave = function (event) {
                    if (event.id) {
                        console.log('updating event with id: ' + event.id);
                        return this.put(event);
                    }
                };
                EventService.prototype.put = function (event) {
                    event.start = moment_1.default(event.start).format("YYYY-MM-DDTHH:mmZZ");
                    event.end = moment_1.default(event.end).format("YYYY-MM-DDTHH:mmZZ");
                    return this._http.put(this.eventUrl, JSON.stringify(event))
                        .toPromise()
                        .then(function () { return event; })
                        .catch(function (error) { return console.error(error); });
                };
                EventService.prototype.addEvent = function (event) {
                    event.start = moment_1.default(event.start).format("YYYY-MM-DDTHH:mmZZ");
                    event.end = moment_1.default(event.end).format("YYYY-MM-DDTHH:mmZZ");
                    return this._http.post(this.eventUrl, JSON.stringify(event))
                        .toPromise()
                        .then(function () { return event; })
                        .catch(function (error) { return console.error(error); });
                };
                EventService.prototype.findEventsByNameOrAuthorOrDescription = function (search) {
                    console.log("searching events");
                    console.log("param is" + search);
                    return this._http.get(this.eventUrl + "find?title=" + search)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Observable_1.Observable.throw(err); });
                };
                EventService.prototype.findEventsByStatus = function (status) {
                    console.log("searching events by status - " + status);
                    return this._http.get(this.getEventsByStatusUrl + status)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Observable_1.Observable.throw(err); });
                };
                EventService.prototype.findEventsByAuthor = function () {
                    console.log("filtering events by author");
                    return this._http.get(this.getEventsByAuthorUrl)
                        .map(function (res) { return res.json(); })
                        .catch(function (err) { return Observable_1.Observable.throw(err); });
                };
                EventService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EventService);
                return EventService;
            }());
            exports_1("EventService", EventService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ldmVudC9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFPSSxzQkFBb0IsS0FBVTtvQkFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO29CQUx0QixhQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztvQkFDcEQsb0JBQWUsR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLDRCQUE0QixDQUFDO29CQUN0RSx5QkFBb0IsR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLCtCQUErQixDQUFDO29CQUM5RSx5QkFBb0IsR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO2dCQUc5RSxDQUFDO2dCQUVELGdDQUFTLEdBQVQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7eUJBQy9CLFNBQVMsRUFBRTt5QkFDWCxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBUSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQWxCLENBQWtCLENBQUM7eUJBQy9CLElBQUksQ0FBQyxVQUFBLElBQUksSUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRUQsK0JBQVEsR0FBUixVQUFTLEVBQVM7b0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO3lCQUNwQyxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO3lCQUNqQyxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUcsT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUVELG1DQUFZLEdBQVosVUFBYSxVQUFpQjtvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO3lCQUNuRCxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO3lCQUNqQyxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUcsT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUVELHlDQUFrQixHQUFsQixVQUFtQixVQUFpQixFQUFFLEtBQVksRUFBRSxLQUFhO29CQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLEdBQUcsYUFBYSxHQUFHLEtBQUssR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDO3lCQUM5RixHQUFHLENBQUMsVUFBQyxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO3lCQUNqQyxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUcsT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUVELHNDQUFlLEdBQWYsVUFBZ0IsRUFBUztvQkFDckIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7eUJBQ3hCLFNBQVMsRUFBRTt5QkFDWCxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUcsT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBRUQsc0NBQWUsR0FBZjtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUNsQyxTQUFTLEVBQUU7eUJBQ1gsS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFHLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQUVELGtDQUFXLEdBQVgsVUFBWSxLQUFXO29CQUNuQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCwwQkFBRyxHQUFILFVBQUksS0FBVztvQkFDWCxLQUFLLENBQUMsS0FBSyxHQUFTLGdCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNyRSxLQUFLLENBQUMsR0FBRyxHQUFTLGdCQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUN0RCxTQUFTLEVBQUU7eUJBQ1gsSUFBSSxDQUFDLGNBQUksT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDO3lCQUNmLEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBRyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFRCwrQkFBUSxHQUFSLFVBQVMsS0FBVztvQkFDaEIsS0FBSyxDQUFDLEtBQUssR0FBUyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDckUsS0FBSyxDQUFDLEdBQUcsR0FBUyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDdkQsU0FBUyxFQUFFO3lCQUNYLElBQUksQ0FBQyxjQUFJLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQzt5QkFDZixLQUFLLENBQUMsVUFBQyxLQUFLLElBQUcsT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBRUQsNERBQXFDLEdBQXJDLFVBQXNDLE1BQWM7b0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUM7b0JBQ2pDLE1BQU0sQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsR0FBRyxNQUFNLENBQUM7eUJBQ3pELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBRyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBRUQseUNBQWtCLEdBQWxCLFVBQW1CLE1BQWM7b0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEdBQUcsTUFBTSxDQUFDLENBQUM7b0JBQ3RELE1BQU0sQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDO3lCQUNyRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUcsT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUVELHlDQUFrQixHQUFsQjtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7b0JBQzFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7eUJBQzVDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBRyxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBakdMO29CQUFDLGlCQUFVLEVBQUU7O2dDQUFBO2dCQWtHYixtQkFBQztZQUFELENBakdBLEFBaUdDLElBQUE7WUFqR0QsdUNBaUdDLENBQUEiLCJmaWxlIjoic3JjL2FwcC9ldmVudC9ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi9ldmVudC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEFwaVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXZlbnRTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGV2ZW50VXJsID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvZXZlbnQvJztcclxuICAgIHByaXZhdGUgZ2V0RXZlbnRQYWdlVXJsID0gQXBpU2VydmljZS5zZXJ2ZXJVcmwgKyAnL3Jlc3RmdWwvZXZlbnQ/cGFnZU51bWJlcj0nO1xyXG4gICAgcHJpdmF0ZSBnZXRFdmVudHNCeVN0YXR1c1VybCA9IEFwaVNlcnZpY2Uuc2VydmVyVXJsICsgJy9yZXN0ZnVsL2V2ZW50L3N0YXR1cz9zdGF0dXM9JztcclxuICAgIHByaXZhdGUgZ2V0RXZlbnRzQnlBdXRob3JVcmwgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArICcvcmVzdGZ1bC9ldmVudC9hdXRob3InO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldEV2ZW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5ldmVudFVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiA8YW55W10+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4geyByZXR1cm4gZGF0YTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXZlbnQoaWQ6bnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGV2ZW50IGJ5IGlkOiAnICsgaWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLmV2ZW50VXJsICsgaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlKT0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9Pk9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxFdmVudHMocGFnZU51bWJlcjpudW1iZXIpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuZ2V0RXZlbnRQYWdlVXJsICsgcGFnZU51bWJlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+T2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbEV2ZW50c1NvcnRlZChwYWdlTnVtYmVyOm51bWJlciwgdGl0bGU6c3RyaW5nLCBvcmRlcjpib29sZWFuKTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLmdldEV2ZW50UGFnZVVybCArIHBhZ2VOdW1iZXIgKyAnJiZzb3J0ZWRCeT0nICsgdGl0bGUgKyAnJiZhc2M9JyArIG9yZGVyKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZSk9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT5PYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRXZlbnRCeUlkKGlkOm51bWJlcikge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmV2ZW50VXJsICsgaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBldmVudCBieSBpZDogJyArIGlkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9PmNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVBbGxFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBhbGwgZXZlbnRzJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuZXZlbnRVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+Y29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRBbmRTYXZlKGV2ZW50OkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGluZyBldmVudCB3aXRoIGlkOiAnICsgZXZlbnQuaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXQoZXZlbnQ6RXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdGFydCA9IDxEYXRlPm1vbWVudChldmVudC5zdGFydCkuZm9ybWF0KFwiWVlZWS1NTS1ERFRISDptbVpaXCIpO1xyXG4gICAgICAgIGV2ZW50LmVuZCA9IDxEYXRlPm1vbWVudChldmVudC5lbmQpLmZvcm1hdChcIllZWVktTU0tRERUSEg6bW1aWlwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQodGhpcy5ldmVudFVybCwgSlNPTi5zdHJpbmdpZnkoZXZlbnQpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCk9PmV2ZW50KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+Y29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50KGV2ZW50OkV2ZW50KTogUHJvbWlzZTxFdmVudD4ge1xyXG4gICAgICAgIGV2ZW50LnN0YXJ0ID0gPERhdGU+bW9tZW50KGV2ZW50LnN0YXJ0KS5mb3JtYXQoXCJZWVlZLU1NLUREVEhIOm1tWlpcIik7XHJcbiAgICAgICAgZXZlbnQuZW5kID0gPERhdGU+bW9tZW50KGV2ZW50LmVuZCkuZm9ybWF0KFwiWVlZWS1NTS1ERFRISDptbVpaXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5ldmVudFVybCwgSlNPTi5zdHJpbmdpZnkoZXZlbnQpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCk9PmV2ZW50KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+Y29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRFdmVudHNCeU5hbWVPckF1dGhvck9yRGVzY3JpcHRpb24oc2VhcmNoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hpbmcgZXZlbnRzXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyYW0gaXNcIiArIHNlYXJjaCk7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLl9odHRwLmdldCh0aGlzLmV2ZW50VXJsICsgXCJmaW5kP3RpdGxlPVwiICsgc2VhcmNoKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pk9ic2VydmFibGUudGhyb3coZXJyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEV2ZW50c0J5U3RhdHVzKHN0YXR1czogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIGV2ZW50cyBieSBzdGF0dXMgLSBcIiArIHN0YXR1cyk7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLl9odHRwLmdldCh0aGlzLmdldEV2ZW50c0J5U3RhdHVzVXJsICsgc3RhdHVzKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pk9ic2VydmFibGUudGhyb3coZXJyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEV2ZW50c0J5QXV0aG9yKCk6IE9ic2VydmFibGU8YW55PntcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpbHRlcmluZyBldmVudHMgYnkgYXV0aG9yXCIpO1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5faHR0cC5nZXQodGhpcy5nZXRFdmVudHNCeUF1dGhvclVybClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT5PYnNlcnZhYmxlLnRocm93KGVycikpO1xyXG4gICAgfVxyXG59Il19
