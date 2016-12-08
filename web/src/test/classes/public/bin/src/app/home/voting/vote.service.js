System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "rxjs/add/operator/toPromise", "../../../shared/services/api.service"], function(exports_1, context_1) {
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
    var core_1, http_1, ApiService;
    var VoteService;
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
            }],
        execute: function() {
            VoteService = (function () {
                function VoteService(http) {
                    this.http = http;
                    this.url = ApiService.serverUrl + '/restful/vote';
                }
                VoteService.prototype.getAllVotes = function (osbbId) {
                    return this.http.get(this.url + '/all/' + osbbId)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                VoteService.prototype.addVote = function (vote) {
                    return this.http.post(this.url, JSON.stringify(vote))
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                VoteService.prototype.deleteVote = function (vote) {
                    var url = this.url + '/' + vote.voteId;
                    return this.http.delete(url)
                        .toPromise()
                        .then(function (res) { return vote; })
                        .catch(this.handleError);
                };
                VoteService.prototype.closeVote = function (voteId) {
                    return this.http.get(this.url + '/close/' + voteId)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                VoteService.prototype.handleError = function (error) {
                    console.log('HandleError', error);
                    return Promise.reject(error.message || error);
                };
                VoteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], VoteService);
                return VoteService;
            }());
            exports_1("VoteService", VoteService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3ZvdGluZy92b3RlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUlJLHFCQUFvQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBRnRCLFFBQUcsR0FBVSxVQUFVLENBQUMsU0FBUyxHQUFFLGVBQWUsQ0FBQztnQkFHMUQsQ0FBQztnQkFFRixpQ0FBVyxHQUFYLFVBQVksTUFBYztvQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQzt5QkFDdkMsU0FBUyxFQUFFO3lCQUNYLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsNkJBQU8sR0FBUCxVQUFRLElBQVM7b0JBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDcEMsU0FBUyxFQUFFO3lCQUNYLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBRUQsZ0NBQVUsR0FBVixVQUFXLElBQVM7b0JBQ2hCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7eUJBQ2YsU0FBUyxFQUFFO3lCQUNYLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7eUJBQ2pCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQsK0JBQVMsR0FBVCxVQUFVLE1BQWM7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUM7eUJBQ2xDLFNBQVMsRUFBRTt5QkFDWCxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUVPLGlDQUFXLEdBQW5CLFVBQW9CLEtBQVU7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQXhDTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkF5Q2Isa0JBQUM7WUFBRCxDQXhDQSxBQXdDQyxJQUFBO1lBeENELHFDQXdDQyxDQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS92b3Rpbmcvdm90ZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIjtcclxuXHJcbmltcG9ydCB7Vm90ZX0gZnJvbSBcIi4vdm90ZVwiO1xyXG5pbXBvcnQgQXBpU2VydmljZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2VcIik7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVm90ZVNlcnZpY2UgeyBcclxuXHJcbiAgICBwcml2YXRlIHVybDpzdHJpbmcgPSBBcGlTZXJ2aWNlLnNlcnZlclVybCArJy9yZXN0ZnVsL3ZvdGUnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgIH1cclxuXHJcbiAgICBnZXRBbGxWb3Rlcyhvc2JiSWQ6IG51bWJlcik6IFByb21pc2U8Vm90ZVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwgKyAnL2FsbC8nICsgb3NiYklkKVxyXG4gICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRWb3RlKHZvdGU6Vm90ZSk6IFByb21pc2U8Vm90ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCwgSlNPTi5zdHJpbmdpZnkodm90ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVZvdGUodm90ZTpWb3RlKTogUHJvbWlzZTxWb3RlPiB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMudXJsICsgJy8nICsgdm90ZS52b3RlSWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB2b3RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVZvdGUodm90ZUlkOiBudW1iZXIpOlByb21pc2U8Vm90ZT4gIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArICcvY2xvc2UvJyArIHZvdGVJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTpQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIYW5kbGVFcnJvcicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=
